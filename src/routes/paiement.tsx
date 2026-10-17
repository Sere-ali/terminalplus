import { useEffect, useState } from 'react'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { CheckCircle2, Clock, Smartphone } from 'lucide-react'
import { post, useApi } from '@/lib/api'
import { SiteHeader } from '@/components/site-header'
import { useMe } from '@/lib/use-me'

export const Route = createFileRoute('/paiement')({ component: PaiementPage })

function PaiementPage() {
  const me = useMe()
  const navigate = useNavigate()
  const config = useApi<{ price: number; waveNumber: string | null }>('/api/payments/config')
  const status = useApi<{
    hasAccess: boolean
    last: { status: 'pending' | 'approved' | 'rejected'; reference: string; createdAt: number } | null
  } | null>('/api/payments/status')
  const [reference, setReference] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (me.status === 'anonymous' || me.status === 'needs-profile') navigate({ to: '/connexion' })
    if (me.status === 'ready' && me.hasAccess) navigate({ to: '/tableau' })
  }, [me, navigate])

  const pending = status?.last?.status === 'pending'
  const rejected = status?.last?.status === 'rejected'
  const price = (config?.price ?? 1000).toLocaleString('fr-FR')

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-md px-4 py-8">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold">Débloque tes cours</h1>
        <p className="mt-1 text-muted-foreground">
          Un seul paiement de <strong>{price} F CFA</strong> par Wave te donne accès à tous les cours de ta série.
        </p>

        {pending ? (
          <div className="mt-6 rounded-2xl border bg-brand-orange-soft p-5">
            <p className="flex items-center gap-2 font-bold"><Clock className="size-5 text-brand-orange" /> Paiement en cours de vérification</p>
            <p className="mt-2 text-sm">
              Nous avons bien reçu ton identifiant <strong>{status?.last?.reference}</strong>. Dès que le paiement est
              confirmé, tes cours s'ouvrent automatiquement. Reviens sur cette page dans quelques minutes.
            </p>
          </div>
        ) : (
          <div className="mt-6 space-y-5 rounded-2xl border bg-card p-5">
            <ol className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">1</span>
                <div>
                  <p className="font-semibold">Envoie {price} F par Wave au numéro :</p>
                  {config === undefined ? (
                    <p className="text-muted-foreground">Chargement…</p>
                  ) : config.waveNumber ? (
                    <p className="mt-1 flex items-center gap-2 text-2xl font-bold tracking-wide text-primary">
                      <Smartphone className="size-6" /> {config.waveNumber}
                    </p>
                  ) : (
                    <p className="mt-1 rounded-lg bg-secondary p-2 text-muted-foreground">Le numéro Wave n'est pas encore configuré. Reviens un peu plus tard.</p>
                  )}
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">2</span>
                <p className="font-semibold">Recopie ci-dessous l'identifiant de transaction que Wave t'envoie par SMS.</p>
              </li>
            </ol>

            <form
              className="space-y-3"
              onSubmit={async (e) => {
                e.preventDefault()
                setLoading(true)
                setError(null)
                const res = await post('/api/payments/submit', { reference, phone })
                setLoading(false)
                if (!res.ok) setError(res.message ?? 'Une erreur est survenue.')
              }}
            >
              {rejected && (
                <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
                  Ton dernier paiement n'a pas pu être confirmé. Vérifie l'identifiant et réessaie.
                </p>
              )}
              <input
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                required
                placeholder="Identifiant de transaction Wave"
                className="w-full rounded-lg border bg-background px-3.5 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                inputMode="tel"
                placeholder="Ton numéro Wave (celui qui a payé)"
                className="w-full rounded-lg border bg-background px-3.5 py-3 text-base outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
              {error && <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
              <button
                type="submit"
                disabled={loading || !config?.waveNumber}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
              >
                <CheckCircle2 className="size-5" /> {loading ? 'Envoi…' : "J'ai payé, débloquer mes cours"}
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  )
}
