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

/** Lit une adresse de l'API. Renvoie undefined pendant le chargement. */
export function useApi<T>(path: string | null): T | undefined {
  const v = useSyncExternalStore(subscribe, () => version, () => 0)
  const [state, setState] = useState<{ path: string | null; data: T | undefined }>({ path: null, data: undefined })

  useEffect(() => {
    if (path === null) return
    let cancelled = false
    fetch(path, { credentials: 'same-origin' })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled) setState({ path, data: data as T })
      })
      .catch(() => {
        if (!cancelled) setState({ path, data: undefined })
      })
    return () => {
      cancelled = true
    }
  }, [path, v])

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
