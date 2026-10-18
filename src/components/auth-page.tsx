import { useEffect, useState } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { post } from '@/lib/api'
import { SiteHeader } from '@/components/site-header'
import { AuthForm } from '@/components/auth-form'
import { SERIE_LABEL, SERIE_TAGLINE, useMe, type Serie } from '@/lib/use-me'

/** Page d'inscription OU de connexion (jamais les deux ensemble). */
export function AuthPage({ mode }: { mode: 'signUp' | 'signIn' }) {
  const me = useMe()
  const navigate = useNavigate()

  useEffect(() => {
    if (me.status === 'ready') navigate({ to: '/tableau' })
  }, [me.status, navigate])

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-md px-4 py-8">
        <div className="page-in rounded-3xl border bg-card p-6 shadow-xl shadow-primary/10">
          {me.status === 'loading' && <p className="py-10 text-center text-muted-foreground">Chargement…</p>}
          {me.status === 'anonymous' && <AuthForm mode={mode} />}
          {me.status === 'needs-profile' && <ProfileForm />}
          {me.status === 'ready' && <p className="py-10 text-center text-muted-foreground">Redirection…</p>}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Ton identifiant sert uniquement à créer et sécuriser ton compte. Il n'est jamais partagé. L'accès aux cours coûte 1 100 F CFA, payés une seule fois par Wave.
        </p>
      </main>
    </div>
  )
}

function ProfileForm() {
  const [name, setName] = useState('')
  const [serie, setSerie] = useState<Serie>('D')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  return (
    <form
      className="space-y-5"
      onSubmit={async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        const res = await post('/api/profile', { name, serie })
        setLoading(false)
        if (!res.ok) setError(res.message ?? 'Une erreur est survenue.')
      }}
    >
      <div>
        <h2 className="text-xl font-bold">Bienvenue ! Dis-nous qui tu es</h2>
        <p className="mt-1 text-sm text-muted-foreground">Tes cours seront adaptés à ta série du BAC.</p>
      </div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        minLength={2}
        placeholder="Ton prénom et nom"
        className="w-full rounded-lg border bg-background px-3.5 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
      />
      <fieldset className="space-y-2">
        <legend className="mb-1 text-sm font-semibold">Ma série</legend>
        {(['A', 'C', 'D'] as const).map((s) => (
          <label
            key={s}
            className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 ${serie === s ? 'border-primary bg-brand-green-soft' : 'hover:bg-secondary'}`}
          >
            <input type="radio" name="serie" checked={serie === s} onChange={() => setSerie(s)} className="accent-[hsl(155_72%_22%)]" />
            <span>
              <span className="block font-semibold">{SERIE_LABEL[s]}</span>
              <span className="block text-xs text-muted-foreground">{SERIE_TAGLINE[s]}</span>
            </span>
          </label>
        ))}
      </fieldset>
      {error && <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
      <button type="submit" disabled={loading} className="w-full rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60">
        {loading ? 'Création…' : "Accéder à mes cours"}
      </button>
    </form>
  )
}
