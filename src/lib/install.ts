import { useSyncExternalStore } from 'react'

type BIPEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }> }
type State = { installed: boolean; canPrompt: boolean; platform: 'ios' | 'android' | 'desktop'; sheetOpen: boolean; ready: boolean }

let deferred: BIPEvent | null = null
let state: State = { installed: false, canPrompt: false, platform: 'desktop', sheetOpen: false, ready: false }
const listeners = new Set<() => void>()
const SERVER: State = state

function set(patch: Partial<State>) {
  state = { ...state, ...patch }
  listeners.forEach((l) => l())
}

function detectPlatform(): State['platform'] {
  const ua = navigator.userAgent
  const iPadOS = navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1
  if (/iPhone|iPad|iPod/.test(ua) || iPadOS) return 'ios'
  if (/Android/.test(ua)) return 'android'
  return 'desktop'
}

function isStandalone() {
  return window.matchMedia('(display-mode: standalone)').matches || (navigator as any).standalone === true
}

let started = false
export function initInstall() {
  if (started || typeof window === 'undefined') return
  started = true
  set({ installed: isStandalone(), platform: detectPlatform(), ready: true })
  const early = (window as any).__bip as BIPEvent | undefined
  if (early) {
    deferred = early
    set({ canPrompt: true })
  }
  window.addEventListener('tp-bip', () => {
    deferred = (window as any).__bip as BIPEvent
    set({ canPrompt: true })
  })
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault()
    deferred = e as BIPEvent
    set({ canPrompt: true })
  })
  window.addEventListener('appinstalled', () => {
    deferred = null
    set({ installed: true, canPrompt: false, sheetOpen: false })
  })
  window.matchMedia('(display-mode: standalone)').addEventListener('change', (e) => set({ installed: e.matches }))
}

export async function startInstall() {
  if (deferred) {
    const d = deferred
    deferred = null
    set({ canPrompt: false })
    try {
      await d.prompt()
      const choice = await d.userChoice
      if (choice.outcome === 'dismissed') {
        deferred = d // l'élève a refusé : on pourra reproposer
        set({ canPrompt: true })
      }
      return
    } catch {
      set({ sheetOpen: true })
      return
    }
  }
  set({ sheetOpen: true })
}

export function closeInstallSheet() {
  set({ sheetOpen: false })
}

export function useInstall() {
  return useSyncExternalStore(
    (cb) => { listeners.add(cb); return () => listeners.delete(cb) },
    () => state,
    () => SERVER,
  )
}
