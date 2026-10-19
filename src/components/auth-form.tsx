import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { post } from '@/lib/api'
import { PasswordInput } from '@/components/password-input'
import { WAVE_PAY_URL } from '@/lib/wave'
import { SERIE_LABEL, SERIE_TAGLINE, type Serie } from '@/lib/use-me'

const inputCls =
  'w-full rounded-lg border bg-background px-3.5 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/25 disabled:opacity-60'
const btnCls =
  'w-full rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60'
const linkCls = 'text-sm font-medium text-primary underline-offset-4 hover:underline'

export function AuthForm({ mode }: { mode: 'signIn' | 'signUp' }) {
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [serie, setSerie] = useState<Serie>('D')
  const isSignUp = mode === 'signUp'

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
          isSignUp ? { identifier, password, whatsapp: String(fd.get('whatsapp') ?? ''), name: String(fd.get('name') ?? ''), serie } : { identifier, password },
        )
        if (res.ok && isSignUp) {
          // Inscription réussie : on envoie directement l'élève sur Wave pour payer (reste « Chargement… » jusqu'au départ).
          ;(window as any).__paying = true
          let url = WAVE_PAY_URL
          try {
            const cfg = await (await fetch('/api/payments/config', { credentials: 'same-origin' })).json()
            if (cfg?.auto) {
              const co = await post<{ ok: boolean; url?: string }>('/api/payments/checkout')
              if (co?.url) url = co.url
            }
          } catch {}
          window.location.href = url
          return
        }
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
      {isSignUp && (
        <input name="name" type="text" autoComplete="name" required minLength={2} maxLength={60} placeholder="Ton nom et prénom" className={inputCls} disabled={loading} />
      )}
      <input name="email" type="text" autoComplete="username" autoCapitalize="none" required placeholder="Ton identifiant" className={inputCls} disabled={loading} />
      {isSignUp && (
        <div>
          <input name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" required placeholder="Ton numéro WhatsApp" className={inputCls} disabled={loading} />
          <p className="mt-1 text-xs text-muted-foreground">Pour que nous puissions t'écrire sur WhatsApp. Ex : 07 00 00 00 00</p>
        </div>
      )}
      <PasswordInput
        name="password"
        autoComplete={isSignUp ? 'new-password' : 'current-password'}
        minLength={8}
        required
        placeholder={isSignUp ? 'Mot de passe (8 caractères min.)' : 'Mot de passe'}
        className={inputCls}
        disabled={loading}
      />
      {isSignUp && (
        <fieldset className="space-y-2" disabled={loading}>
          <legend className="mb-1 text-sm font-semibold">La série que tu prépares</legend>
          {(['A', 'C', 'D'] as const).map((s) => (
            <label key={s} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 ${serie === s ? 'border-primary bg-brand-green-soft' : 'hover:bg-secondary'}`}>
              <input type="radio" name="serie" checked={serie === s} onChange={() => setSerie(s)} className="accent-[hsl(155_72%_22%)]" />
              <span>
                <span className="block font-semibold">{SERIE_LABEL[s]}</span>
                <span className="block text-xs text-muted-foreground">{SERIE_TAGLINE[s]}</span>
              </span>
            </label>
          ))}
        </fieldset>
      )}
      <input type="hidden" name="flow" value={isSignUp ? 'signUp' : 'signIn'} />
      {error && <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
      <button type="submit" className={btnCls} disabled={loading}>
        {loading ? 'Un instant…' : isSignUp ? "Je m'inscris" : 'Me connecter'}
      </button>
      {isSignUp && <p className="text-center text-xs text-muted-foreground">En appuyant sur « Je m'inscris », tu es envoyé directement sur Wave pour payer 1 100 F (une seule fois).</p>}
      <div className="flex flex-col items-center gap-2">
        <Link to={isSignUp ? '/connexion' : '/inscription'} className={linkCls}>
          {isSignUp ? "J'ai déjà un compte" : "Je n'ai pas encore de compte"}
        </Link>
      </div>
    </form>
  )
}
