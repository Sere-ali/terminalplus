import { useApi } from '@/lib/api'

export type Serie = 'A' | 'B' | 'C' | 'D' | 'G1' | 'G2'
export const SERIES: readonly Serie[] = ['A', 'B', 'C', 'D', 'G1', 'G2']

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
      hasAccess: boolean
    }

type MeResponse =
  | { authenticated: false }
  | {
      authenticated: true
      identifier: string
      profile: { name: string; serie: Serie; role: 'student' | 'admin'; paid: boolean } | null
      hasAccess: boolean
    }

/** État de la session de l'élève (identité toujours lue côté serveur). */
export function useMe(): MeState {
  const me = useApi<MeResponse>('/api/me')
  if (me === undefined) return { status: 'loading' }
  if (!me.authenticated) return { status: 'anonymous' }
  if (!me.profile) return { status: 'needs-profile', email: me.identifier }
  return {
    status: 'ready',
    email: me.identifier,
    name: me.profile.name,
    serie: me.profile.serie,
    isAdmin: me.profile.role === 'admin',
    hasAccess: me.hasAccess,
  }
}

export const SERIE_LABEL: Record<Serie, string> = {
  A: 'Terminale A',
  B: 'Terminale B',
  C: 'Terminale C',
  D: 'Terminale D',
  G1: 'Terminale G1',
  G2: 'Terminale G2',
}

export const SERIE_TAGLINE: Record<Serie, string> = {
  A: 'Lettres et langues',
  B: 'Sciences économiques et sociales',
  C: 'Mathématiques et sciences physiques',
  D: 'Sciences de la vie et de la terre',
  G1: 'Techniques administratives',
  G2: 'Comptabilité et gestion',
}
