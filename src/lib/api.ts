import { useEffect, useState, useSyncExternalStore } from 'react'

// Petite couche d'accès à l'API du site (/api/...) : lecture avec rafraîchissement
// automatique après chaque action (inscription, paiement, validation…).

let version = 0
const listeners = new Set<() => void>()

/** Redemande toutes les données affichées (à appeler après une modification). */
export function invalidate() {
  version += 1
  listeners.forEach((l) => l())
}

function subscribe(l: () => void) {
  listeners.add(l)
  return () => listeners.delete(l)
}

// Plusieurs écrans demandent parfois la même adresse en même temps (ex. /api/me) : une seule requête part.
const inflight = new Map<string, Promise<any>>()
function fetchShared(path: string, v: number): Promise<any> {
  const key = `${v}|${path}`
  let p = inflight.get(key)
  if (!p && v === 0 && path === '/api/me' && typeof window !== 'undefined' && (window as any).__me) {
    // La page a déjà demandé /api/me dès son démarrage (avant même le chargement des scripts) : on réutilise la réponse.
    p = (window as any).__me
    ;(window as any).__me = null
    inflight.set(key, p!)
    setTimeout(() => inflight.delete(key), 300)
  }
  if (!p) {
    p = fetch(path, { credentials: 'same-origin' })
      .then((r) => (r.ok ? r.json() : null))
      .finally(() => setTimeout(() => inflight.delete(key), 300))
    inflight.set(key, p)
  }
  return p
}

/** Lit une adresse de l'API. Renvoie undefined pendant le chargement. */
export function useApi<T>(path: string | null, opts?: { every?: number }): T | undefined {
  const v = useSyncExternalStore(subscribe, () => version, () => 0)
  const [state, setState] = useState<{ path: string | null; data: T | undefined }>({ path: null, data: undefined })
  const [tick, setTick] = useState(0)
  const every = opts?.every

  // Mise à jour automatique : au retour sur l'application (si les données ont plus de 20 s) et, si demandé, à intervalle régulier.
  useEffect(() => {
    if (path === null) return
    let last = Date.now()
    const refresh = () => {
      if (document.hidden) return
      last = Date.now()
      setTick((n) => n + 1)
    }
    const onVisible = () => {
      if (!document.hidden && Date.now() - last > 20_000) refresh()
    }
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('focus', onVisible)
    window.addEventListener('online', refresh)
    const timer = every ? setInterval(refresh, every) : undefined
    return () => {
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('focus', onVisible)
      window.removeEventListener('online', refresh)
      if (timer) clearInterval(timer)
    }
  }, [path, every])

  useEffect(() => {
    if (path === null) return
    let cancelled = false
    fetchShared(path, v)
      .then((data) => {
        if (!cancelled) setState({ path, data: (data ?? undefined) as T | undefined }) // réponse d'erreur : on reste en « chargement » au lieu de planter
      })
      .catch(() => {
        if (!cancelled) setState({ path, data: undefined })
      })
    return () => {
      cancelled = true
    }
  }, [path, v, tick])

  // On ne montre jamais les données d'une autre adresse.
  return path !== null && state.path === path ? state.data : undefined
}

/** Envoie une action au serveur (JSON). Rafraîchit ensuite les données affichées. */
export async function post<T = { ok: boolean; message?: string }>(path: string, body: unknown = {}): Promise<T> {
  let result: any
  try {
    const res = await fetch(path, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(body),
    })
    result = await res.json().catch(() => ({ ok: false, message: 'Réponse invalide du serveur.' }))
  } catch {
    result = { ok: false, message: 'Connexion impossible. Vérifie ton réseau.' }
  }
  invalidate()
  return result as T
}
