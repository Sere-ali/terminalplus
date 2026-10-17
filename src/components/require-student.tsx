import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { useMe, type MeState } from '@/lib/use-me'
import { SiteHeader } from '@/components/site-header'

type Ready = Extract<MeState, { status: 'ready' }>

/** Affiche les enfants uniquement pour un élève connecté qui a payé (ou l'administrateur) ; sinon redirige. */
export function RequireStudent({ children }: { children: (me: Ready) => React.ReactNode }) {
  const me = useMe()
  const navigate = useNavigate()

  useEffect(() => {
    if (me.status === 'anonymous' || me.status === 'needs-profile') navigate({ to: '/connexion' })
    if (me.status === 'ready' && !me.hasAccess) navigate({ to: '/paiement' })
  }, [me, navigate])

  if (me.status !== 'ready' || !me.hasAccess) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <p className="py-24 text-center text-muted-foreground">Chargement…</p>
      </div>
    )
  }
  return <>{children(me)}</>
}
