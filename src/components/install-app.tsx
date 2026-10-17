import { useEffect, useState } from 'react'
import { Download, MoreVertical, PlusSquare, Share, X } from 'lucide-react'
import { closeInstallSheet, initInstall, startInstall, useInstall } from '@/lib/install'

export function InstallButton({ variant = 'hero' }: { variant?: 'hero' | 'header' }) {
  const s = useInstall()
  if (!s.ready || s.installed) return null
  if (variant === 'header') {
    return (
      <button
        type="button"
        onClick={startInstall}
        className="install-pulse flex items-center gap-1.5 rounded-full bg-brand-orange px-3.5 py-2 text-sm font-bold text-white shadow-md transition active:scale-95"
      >
        <Download className="size-4" />
        <span>Installer</span>
      </button>
    )
  }
  return (
    <button
      type="button"
      onClick={startInstall}
      className="install-pulse group flex w-full items-center justify-center gap-3 rounded-2xl bg-brand-orange px-7 py-4 text-base font-bold text-white shadow-xl shadow-orange-900/30 transition hover:-translate-y-0.5 active:scale-[0.98] sm:w-auto"
    >
      <Download className="size-5 transition group-hover:translate-y-0.5" />
      Télécharger l'application
    </button>
  )
}

const DISMISS_KEY = 'tp-install-dismissed'

/** Bandeau fixe en bas de l'écran sur téléphone. */
export function InstallBar() {
  const s = useInstall()
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    initInstall()
    try {
      const t = Number(localStorage.getItem(DISMISS_KEY) ?? 0)
      setHidden(Date.now() - t < 3 * 24 * 3600 * 1000)
    } catch {
      setHidden(false)
    }
  }, [])

  return (
    <>
      {s.ready && !s.installed && !hidden && (
        <div className="install-bar fixed inset-x-3 bottom-3 z-40 sm:hidden" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0A3D29]/95 p-3 pr-2 text-white shadow-2xl backdrop-blur">
            <img src="/icon-192.png" alt="" className="size-11 rounded-xl" />
            <div className="min-w-0 flex-1 leading-tight">
              <p className="truncate text-sm font-bold">TERMINALE+ sur ton téléphone</p>
              <p className="truncate text-xs text-white/70">Gratuit, sans le Play Store</p>
            </div>
            <button type="button" onClick={startInstall} className="rounded-xl bg-brand-orange px-4 py-2.5 text-sm font-bold active:scale-95">
              Installer
            </button>
            <button
              type="button"
              aria-label="Fermer"
              onClick={() => {
                setHidden(true)
                try { localStorage.setItem(DISMISS_KEY, String(Date.now())) } catch {}
              }}
              className="rounded-lg p-2 text-white/60"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}
      {s.ready && !s.installed && !hidden && <div className="h-24 sm:hidden" aria-hidden />}
      <InstallSheet />
    </>
  )
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">{n}</span>
      <span className="pt-0.5 text-[15px] leading-snug">{children}</span>
    </li>
  )
}

function InstallSheet() {
  const s = useInstall()
  if (!s.sheetOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center" role="dialog" aria-modal="true" aria-label="Installer l'application">
      <button type="button" aria-label="Fermer" className="sheet-fade absolute inset-0 bg-black/60" onClick={closeInstallSheet} />
      <div className="sheet-up relative w-full max-w-md rounded-t-3xl bg-background p-6 pb-8 shadow-2xl sm:rounded-3xl" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
        <button type="button" aria-label="Fermer" onClick={closeInstallSheet} className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-secondary">
          <X className="size-5" />
        </button>
        <img src="/icon-192.png" alt="" className="size-16 rounded-2xl shadow-lg" />
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold">Installe TERMINALE+</h2>
        <p className="mt-1 text-sm text-muted-foreground">En 3 gestes, l'application apparaît sur ton écran d'accueil.</p>

        {s.platform === 'ios' ? (
          <ol className="mt-5 space-y-4">
            <Step n={1}>Ouvre le site dans <strong>Safari</strong>, puis appuie sur <Share className="mx-0.5 inline size-4 text-blue-600" /> <strong>Partager</strong> (en bas de l'écran).</Step>
            <Step n={2}>Fais défiler et choisis <PlusSquare className="mx-0.5 inline size-4" /> <strong>Sur l'écran d'accueil</strong>.</Step>
            <Step n={3}>Appuie sur <strong>Ajouter</strong> en haut à droite. C'est fini !</Step>
          </ol>
        ) : (
          <ol className="mt-5 space-y-4">
            <Step n={1}>Ouvre le site dans <strong>Chrome</strong>, puis appuie sur le menu <MoreVertical className="mx-0.5 inline size-4" /> (3 points en haut).</Step>
            <Step n={2}>Choisis <strong>Installer l'application</strong> (ou « Ajouter à l'écran d'accueil »).</Step>
            <Step n={3}>Confirme avec <strong>Installer</strong>. C'est fini !</Step>
          </ol>
        )}
        <button type="button" onClick={closeInstallSheet} className="mt-6 w-full rounded-2xl bg-primary py-3.5 font-bold text-primary-foreground active:scale-[0.98]">
          J'ai compris
        </button>
      </div>
    </div>
  )
}
