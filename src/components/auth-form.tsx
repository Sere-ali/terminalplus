import { useState } from 'react'
import { useAuthActions } from '@convex-dev/auth/react'

type Step =
  | 'signIn'
  | 'signUp'
  | 'forgot'
  | { type: 'verify'; email: string }
  | { type: 'reset'; email: string }

const inputCls =
  'w-full rounded-lg border bg-background px-3.5 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/25 disabled:opacity-60'
const btnCls =
  'w-full rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60'
const linkCls = 'text-sm font-medium text-primary underline-offset-4 hover:underline'

export function AuthForm({ initial = 'signUp' }: { initial?: 'signIn' | 'signUp' }) {
  const { signIn } = useAuthActions()
  const [step, setStep] = useState<Step>(initial)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function run(fn: () => Promise<void>, fallback: string) {
    setError(null)
    setLoading(true)
    try {
      await fn()
    } catch (e) {
      const msg = e instanceof Error ? e.message : ''
      if (/InvalidSecret|InvalidAccountId|Invalid password/i.test(msg)) {
        setError('E-mail ou mot de passe incorrect.')
      } else if (/already exists|AccountAlreadyExists/i.test(msg)) {
        setError('Un compte existe déjà avec cet e-mail. Connecte-toi.')
      } else if (/code|expired|Could not verify/i.test(msg)) {
        setError('Code invalide ou expiré. Vérifie ton e-mail et réessaie.')
      } else {
        setError(fallback)
      }
    } finally {
      setLoading(false)
    }
  }

  // --- Vérification de l'e-mail (code à 6 chiffres) ---
  if (typeof step === 'object' && step.type === 'verify') {
    const email = step.email
    return (
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          const fd = new FormData(e.currentTarget)
          run(async () => {
            await signIn('resend-otp', fd)
          }, 'Code invalide ou expiré.')
        }}
      >
        <div>
          <h2 className="text-xl font-bold">Vérifie ton e-mail</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Nous avons envoyé un code à 6 chiffres à <strong>{email}</strong>. Pense à regarder
            aussi dans les courriers indésirables.
          </p>
        </div>
        <input name="code" inputMode="numeric" pattern="\d{6}" required placeholder="Code à 6 chiffres" className={inputCls} disabled={loading} />
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="flow" value="email-verification" />
        {error && <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
        <button type="submit" className={btnCls} disabled={loading}>
          {loading ? 'Vérification…' : 'Valider mon compte'}
        </button>
      </form>
    )
  }

  // --- Mot de passe oublié : demander le code ---
  if (step === 'forgot') {
    return (
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          const fd = new FormData(e.currentTarget)
          const email = String(fd.get('email') ?? '')
          run(async () => {
            await signIn('password', fd)
            setStep({ type: 'reset', email })
          }, "Impossible d'envoyer le code. Vérifie l'adresse e-mail.")
        }}
      >
        <h2 className="text-xl font-bold">Mot de passe oublié</h2>
        <p className="text-sm text-muted-foreground">Entre ton e-mail, nous t'envoyons un code pour choisir un nouveau mot de passe.</p>
        <input name="email" type="email" required placeholder="Ton adresse e-mail" className={inputCls} disabled={loading} />
        <input type="hidden" name="flow" value="reset" />
        {error && <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
        <button type="submit" className={btnCls} disabled={loading}>{loading ? 'Envoi…' : 'Envoyer le code'}</button>
        <button type="button" className={linkCls} onClick={() => { setStep('signIn'); setError(null) }}>Retour à la connexion</button>
      </form>
    )
  }

  // --- Mot de passe oublié : nouveau mot de passe ---
  if (typeof step === 'object' && step.type === 'reset') {
    const email = step.email
    return (
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          const fd = new FormData(e.currentTarget)
          run(async () => {
            await signIn('password', fd)
          }, 'Code invalide ou mot de passe trop court (8 caractères minimum).')
        }}
      >
        <h2 className="text-xl font-bold">Nouveau mot de passe</h2>
        <input name="code" inputMode="numeric" pattern="\d{6}" required placeholder="Code reçu par e-mail" className={inputCls} disabled={loading} />
        <input name="newPassword" type="password" minLength={8} required placeholder="Nouveau mot de passe (8 caractères min.)" className={inputCls} disabled={loading} />
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="flow" value="reset-verification" />
        {error && <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
        <button type="submit" className={btnCls} disabled={loading}>{loading ? 'Enregistrement…' : 'Changer mon mot de passe'}</button>
      </form>
    )
  }

  // --- Connexion / Inscription ---
  const isSignUp = step === 'signUp'
  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault()
        const fd = new FormData(e.currentTarget)
        const email = String(fd.get('email') ?? '').trim()
        fd.set('email', email)
        run(async () => {
          const res = await signIn('password', fd)
          // Si l'e-mail doit être vérifié, la session n'est pas encore ouverte.
          if (res && res.signingIn === false) setStep({ type: 'verify', email })
        }, isSignUp ? "Inscription impossible. Vérifie l'e-mail et un mot de passe de 8 caractères minimum." : 'Connexion impossible.')
      }}
    >
      <h2 className="text-xl font-bold">{isSignUp ? 'Crée ton compte gratuit' : 'Content de te revoir !'}</h2>
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
        {!isSignUp && (
          <button type="button" className={linkCls} onClick={() => { setStep('forgot'); setError(null) }}>
            Mot de passe oublié ?
          </button>
        )}
      </div>
    </form>
  )
}
