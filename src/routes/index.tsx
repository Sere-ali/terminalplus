import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from 'convex/react'
import { BookOpenCheck, Bot, GraduationCap, Smartphone, Sparkles } from 'lucide-react'
import { api } from '@/convex/_generated/api'
import { SiteHeader } from '@/components/site-header'
import { SERIE_LABEL, SERIE_TAGLINE, useMe, type Serie } from '@/lib/use-me'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const me = useMe()
  const [serie, setSerie] = useState<Serie>('D')
  const subjects = useQuery(api.catalog.subjects, { serie })

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-brand-green-soft to-background">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center sm:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5 text-brand-orange" /> Programme officiel de Côte d'Ivoire
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold leading-tight sm:text-5xl">
            Réussis ton BAC avec des cours <span className="text-brand-orange">clairs</span>, même si tu pars de zéro
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Des résumés de cours pour les <strong>Terminales A, C et D</strong>, expliqués simplement,
            avec un <strong>professeur virtuel</strong> qui répond à tes questions à toute heure.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {me.status === 'ready' ? (
              <Link to="/tableau" className="rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow hover:bg-primary/90">
                Continuer mes cours
              </Link>
            ) : (
              <Link to="/connexion" className="rounded-xl bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow hover:bg-primary/90">
                Créer mon compte gratuit
              </Link>
            )}
            <a href="#matieres" className="rounded-xl border bg-card px-6 py-3.5 text-base font-semibold hover:bg-secondary">
              Voir les matières
            </a>
          </div>
        </div>
      </section>

      {/* Catalogue par série */}
      <section id="matieres" className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-center font-[family-name:var(--font-display)] text-2xl font-bold sm:text-3xl">Choisis ta série</h2>
        <div className="mx-auto mt-6 grid max-w-xl grid-cols-3 gap-2 rounded-2xl border bg-card p-1.5">
          {(['A', 'C', 'D'] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSerie(s)}
              className={`rounded-xl px-3 py-3 text-sm font-bold transition ${serie === s ? 'bg-primary text-primary-foreground shadow' : 'hover:bg-secondary'}`}
            >
              {SERIE_LABEL[s]}
            </button>
          ))}
        </div>
        <p className="mt-3 text-center text-sm text-muted-foreground">{SERIE_TAGLINE[serie]}</p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {subjects === undefined && [0, 1, 2].map((i) => <div key={i} className="h-28 animate-pulse rounded-2xl bg-secondary" />)}
          {subjects?.map((s) => (
            <div key={s.slug} className="rounded-2xl border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-3xl" aria-hidden>{s.emoji}</span>
                <div>
                  <h3 className="font-bold">{s.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {s.published} leçon{s.published > 1 ? 's' : ''} disponible{s.published > 1 ? 's' : ''} sur {s.total}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Atouts */}
      <section className="border-t bg-card">
        <div className="mx-auto grid max-w-5xl gap-6 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: BookOpenCheck, t: 'Conforme au programme', d: 'Chapitres suivis selon les programmes éducatifs officiels (DPFC / MENA).' },
            { icon: GraduationCap, t: 'Expliqué simplement', d: 'Définitions, exemples corrigés, pièges à éviter et points à retenir pour le BAC.' },
            { icon: Bot, t: 'Professeur virtuel', d: "Pose ta question sur n'importe quelle leçon et reçois une explication pas à pas." },
            { icon: Smartphone, t: 'Pensé pour ton téléphone', d: 'Léger et lisible sur smartphone, même avec une connexion limitée.' },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t}>
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-orange-soft text-brand-orange">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-3 font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} TERMINALE+ · Plateforme d'accompagnement scolaire · Côte d'Ivoire
      </footer>
    </div>
  )
}
