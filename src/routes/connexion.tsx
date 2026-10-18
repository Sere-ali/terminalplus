import { createFileRoute, redirect } from '@tanstack/react-router'
import { AuthPage } from '@/components/auth-page'

export const Route = createFileRoute('/connexion')({
  // Anciens liens « ?mode=signup » : on envoie vers la page d'inscription.
  beforeLoad: ({ search }) => {
    if ((search as Record<string, unknown>).mode === 'signup') throw redirect({ to: '/inscription' })
  },
  component: () => <AuthPage mode="signIn" />,
})
