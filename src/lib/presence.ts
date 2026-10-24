import { useEffect } from 'react'

// Signal de présence : permet au Super admin de voir qui est en ligne et quelle leçon est ouverte.
// Envoyé toutes les 45 s uniquement quand l'écran est visible ; ne contient aucune donnée personnelle de plus.
let currentSlug: string | null = null
let sendNow: (() => void) | null = null

/** Indique la leçon ouverte (ou null quand l'élève n'est pas dans une leçon). */
export function setPresenceSlug(slug: string | null) {
  currentSlug = slug
  sendNow?.()
}

export function usePresenceBeat(active: boolean) {
  useEffect(() => {
    if (!active) return
    let stopped = false
    const send = () => {
      if (stopped || document.hidden) return
      fetch('/api/presence', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ slug: currentSlug }),
        keepalive: true,
      }).catch(() => {})
    }
    sendNow = send
    send()
    const timer = setInterval(send, 45_000)
    const onVisible = () => { if (!document.hidden) send() }
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('online', send)
    return () => {
      stopped = true
      if (sendNow === send) sendNow = null
      clearInterval(timer)
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('online', send)
    }
  }, [active])
}
