import { Link, useNavigate } from '@tanstack/react-router'
import { GraduationCap, LogOut, ShieldCheck } from 'lucide-react'
import { useMe } from '@/lib/use-me'
import { post } from '@/lib/api'
import { InstallButton } from '@/components/install-app'

export function SiteHeader() {
  const me = useMe()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-30 border-b bg-background/85 backdrop-blur-xl" style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-2 px-3 sm:px-4">
        <Link to="/" className="flex shrink-0 items-center gap-2 font-bold tracking-tight">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/30">
            <GraduationCap className="size-5" />
          </span>
          <span className="font-[family-name:var(--font-display)] text-lg max-[420px]:hidden">
            TERMINALE<span className="text-brand-orange">+</span>
          </span>
        </Link>

        <nav className="flex min-w-0 items-center gap-0.5 text-sm sm:gap-1">
          <span className="mr-1 hidden sm:block"><InstallButton variant="header" /></span>
          {me.status === 'ready' && (
            <>
              <Link to="/tableau" className="whitespace-nowrap rounded-md px-2 py-2 font-medium hover:bg-secondary sm:px-3">
                Mes cours
              </Link>
              {me.isAdmin && (
                <Link to="/admin" className="flex items-center gap-1 whitespace-nowrap rounded-md px-2 py-2 font-medium text-brand-orange hover:bg-secondary sm:px-3">
                  <ShieldCheck className="size-4" /> <span className="sm:hidden">Admin</span><span className="hidden sm:inline">Super admin</span>
                </Link>
              )}
              <button
                type="button"
                aria-label="Déconnexion"
                onClick={async () => {
                  await post('/api/auth/logout')
                  navigate({ to: '/' })
                }}
                className="flex items-center gap-1 rounded-md px-2.5 py-2 text-muted-foreground hover:bg-secondary sm:px-3"
              >
                <LogOut className="size-4" />
                <span className="hidden sm:inline">Quitter</span>
              </button>
            </>
          )}
          {(me.status === 'anonymous' || me.status === 'needs-profile') && (
            <Link
              to="/connexion"
              className="whitespace-nowrap rounded-md bg-primary px-3 py-2 font-semibold sm:px-4 text-primary-foreground hover:bg-primary/90"
            >
              {me.status === 'needs-profile' ? (<><span className="sm:hidden">Terminer</span><span className="hidden sm:inline">Terminer mon inscription</span></>) : 'Se connecter'}
            </Link>
          )}
        </nav>
      </div>
      <div className="tricolor" />
    </header>
  )
}
