import { useState } from 'react'
import { useAuthActions } from '@convex-dev/auth/react'

const inputCls =
  'w-full rounded-lg border bg-background px-3.5 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/25 disabled:opacity-60'
const btnCls =
  'w-full rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60'
const linkCls = 'text-sm font-medium text-primary underline-offset-4 hover:underline'

export function AuthForm({ initial = 'signUp' }: { initial?: 'signIn' | 'signUp' }) {
  const { signIn } = useAuthActions()
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
        fd.set('email', String(fd.get('email') ?? '').trim().toLowerCase())
        setError(null)
        setLoading(true)
        try {
          await signIn('password', fd)
        } catch (err) {
          const msg = err instanceof Error ? err.message : ''
          if (/already exists|AccountAlreadyExists/i.test(msg)) {
            setError('Un compte existe déjà avec cet e-mail. Connecte-toi.')
          } else if (/InvalidSecret|InvalidAccountId|Invalid password/i.test(msg)) {
            setError('E-mail ou mot de passe incorrect.')
          } else if (isSignUp) {
            setError("Inscription impossible. Vérifie l'e-mail et choisis un mot de passe de 8 caractères minimum.")
          } else {
            setError('Connexion impossible. Vérifie ton e-mail et ton mot de passe.')
          }
        } finally {
          setLoading(false)
        }
      }}
    >
      <h2 className="text-xl font-bold">{isSignUp ? 'Crée ton compte' : 'Content de te revoir !'}</h2>
      <input name="email" type="email" autoComplete="email" required placeholder="Ton adresse e-mail" className={inputCls} disabled={loading} />
      <input
        name="password"
        type="password"
        autoComplete={isSignUp ? 'new-password' : 'current-password'}
        minLength={8}
        required
        placeholder={isSignUp ? 'Mot de passe (8 caractères minimum)' : 'Mot de passe'}
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
