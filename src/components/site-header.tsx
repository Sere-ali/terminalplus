import { Link, useNavigate } from '@tanstack/react-router'
import { GraduationCap, LogOut, ShieldCheck } from 'lucide-react'
import { useMe } from '@/lib/use-me'
import { post } from '@/lib/api'

export function SiteHeader() {
  const me = useMe()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-30 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </span>
          <span className="font-[family-name:var(--font-display)] text-lg">
            TERMINALE<span className="text-brand-orange">+</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 text-sm">
          {me.status === 'ready' && (
            <>
              <Link to="/tableau" className="rounded-md px-3 py-2 font-medium hover:bg-secondary">
                Mes cours
              </Link>
              {me.isAdmin && (
                <Link to="/admin" className="flex items-center gap-1 rounded-md px-3 py-2 font-medium text-brand-orange hover:bg-secondary">
                  <ShieldCheck className="size-4" /> Super admin
                </Link>
              )}
              <button
                type="button"
                aria-label="Déconnexion"
                onClick={async () => {
                  await post('/api/auth/logout')
                  navigate({ to: '/' })
                }}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-muted-foreground hover:bg-secondary"
              >
                <LogOut className="size-4" />
                <span className="hidden sm:inline">Quitter</span>
              </button>
            </>
          )}
          {(me.status === 'anonymous' || me.status === 'needs-profile') && (
            <Link
              to="/connexion"
              className="rounded-md bg-primary px-4 py-2 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              {me.status === 'needs-profile' ? 'Terminer mon inscription' : 'Se connecter'}
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
