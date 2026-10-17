import { useState } from 'react'
import { post } from '@/lib/api'
import { PasswordInput } from '@/components/password-input'

const inputCls =
  'w-full rounded-lg border bg-background px-3.5 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/25 disabled:opacity-60'
const btnCls =
  'w-full rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60'
const linkCls = 'text-sm font-medium text-primary underline-offset-4 hover:underline'

export function AuthForm({ initial = 'signUp' }: { initial?: 'signIn' | 'signUp' }) {
  const [step, setStep] = useState<'signIn' | 'signUp'>(initial)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const isSignUp = step === 'signUp'

  return (
    <form
      className="space-y-4"
      onSubmit={async (e) => {
        e.preventDefault()
        const fd = new FormData(e.currentTarget)
        const identifier = String(fd.get('email') ?? '').trim().toLowerCase()
        const password = String(fd.get('password') ?? '')
        setError(null)
        setLoading(true)
        const res = await post<{ ok: boolean; message?: string; code?: string }>(
          isSignUp ? '/api/auth/signup' : '/api/auth/login',
          { identifier, password },
        )
        setLoading(false)
        if (!res.ok) {
          if (res.code === 'BAD_CREDENTIALS') {
            setError("Identifiant ou mot de passe incorrect. Mot de passe oublié ? Demande à l'administrateur de le réinitialiser.")
          } else {
            setError(res.message ?? 'Une erreur est survenue.')
          }
        }
      }}
    >
      <h2 className="text-xl font-bold">{isSignUp ? 'Crée ton compte' : 'Content de te revoir !'}</h2>
      <input name="email" type="text" autoComplete="username" autoCapitalize="none" required placeholder="Ton identifiant (nom ou numéro)" className={inputCls} disabled={loading} />
      <PasswordInput
        name="password"
        autoComplete={isSignUp ? 'new-password' : 'current-password'}
        minLength={8}
        required
        placeholder={isSignUp ? 'Mot de passe (8 caractères min.)' : 'Mot de passe'}
        className={inputCls}
        disabled={loading}
      />
      <input type="hidden" name="flow" value={isSignUp ? 'signUp' : 'signIn'} />
      {error && <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
      <button type="submit" className={btnCls} disabled={loading}>
        {loading ? 'Un instant…' : isSignUp ? "Je m'inscris" : 'Me connecter'}
      </button>
      <div className="flex flex-col items-center gap-2">
        <button type="button" className={linkCls} onClick={() => { setStep(isSignUp ? 'signIn' : 'signUp'); setError(null) }}>
          {isSignUp ? "J'ai déjà un compte" : "Je n'ai pas encore de compte"}
        </button>
      </div>
    </form>
  )
}
