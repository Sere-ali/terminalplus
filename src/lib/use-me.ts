import { useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'

export type Serie = 'A' | 'C' | 'D'

export type MeState =
  | { status: 'loading' }
  | { status: 'anonymous' }
  | { status: 'needs-profile'; email: string | null }
  | {
      status: 'ready'
      email: string | null
      name: string
      serie: Serie
      isAdmin: boolean
    }

/** État de la session de l'élève (identité toujours lue côté serveur). */
export function useMe(): MeState {
  const me = useQuery(api.users.me, {})
  if (me === undefined) return { status: 'loading' }
  if (!me.authenticated) return { status: 'anonymous' }
  if (!me.profile) return { status: 'needs-profile', email: me.email }
  return {
    status: 'ready',
    email: me.email,
    name: me.profile.name,
    serie: me.profile.serie,
    isAdmin: me.profile.role === 'admin',
  }
}

export const SERIE_LABEL: Record<Serie, string> = {
  A: 'Terminale A',
  C: 'Terminale C',
  D: 'Terminale D',
}

export const SERIE_TAGLINE: Record<Serie, string> = {
  A: 'Lettres et langues',
  C: 'Mathématiques et sciences physiques',
  D: 'Sciences de la vie et de la terre',
}
