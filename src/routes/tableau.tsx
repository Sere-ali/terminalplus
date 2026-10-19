import { createFileRoute, Link } from '@tanstack/react-router'
import { ChevronRight } from 'lucide-react'
import { post, useApi } from '@/lib/api'
import type { ProgressRow, SubjectCard } from '@/lib/types'
import { SiteHeader } from '@/components/site-header'
import { RequireStudent } from '@/components/require-student'
import { SERIE_LABEL, type Serie } from '@/lib/use-me'

export const Route = createFileRoute('/tableau')({ component: TableauPage })

function TableauPage() {
  return (
    <RequireStudent>
      {(me) => <Dashboard name={me.name} serie={me.serie} />}
    </RequireStudent>
  )
}

function Dashboard({ name, serie }: { name: string; serie: Serie }) {
  const subjects = useApi<SubjectCard[]>(`/api/subjects?serie=${serie}`)
  const progress = useApi<ProgressRow[]>('/api/progress')

  const doneSlugs = new Set((progress ?? []).filter((p) => p.done).map((p) => p.chapterSlug))
  const totalPublished = (subjects ?? []).reduce((n, s) => n + s.published, 0)
  const totalDone = (subjects ?? []).reduce(
    (n, s) => n + [...doneSlugs].filter((slug) => slug.startsWith(`${s.slug}-`)).length,
    0,
  )
  const pct = totalPublished > 0 ? Math.round((totalDone / totalPublished) * 100) : 0

  const R = 44
  const C = 2 * Math.PI * R
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="hero-night">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-5 px-5 py-8 sm:py-12">
          <div className="min-w-0">
            <p className="rise inline-flex rounded-full glass px-3 py-1 text-xs font-semibold text-white/90">{SERIE_LABEL[serie]}</p>
            <h1 className="rise mt-3 font-[family-name:var(--font-display)] text-3xl font-bold leading-tight sm:text-5xl" style={{ ['--d' as string]: 120 }}>
              Bonjour {name.split(' ')[0]} 👋
            </h1>
            <p className="rise mt-2 text-white/75" style={{ ['--d' as string]: 240 }}>
              {totalDone === 0 ? 'Choisis une matière et lance ta première leçon.' : `${totalDone} leçon${totalDone > 1 ? 's' : ''} comprise${totalDone > 1 ? 's' : ''}. Continue comme ça !`}
            </p>
          </div>
          <div className="rise relative size-28 shrink-0 sm:size-36" style={{ ['--d' as string]: 300 }} role="img" aria-label={`Progression ${pct} pour cent`}>
            <svg viewBox="0 0 100 100" className="size-full -rotate-90">
              <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="9" />
              <circle cx="50" cy="50" r={R} fill="none" stroke="#FF8200" strokeWidth="9" strokeLinecap="round"
                className="ring-progress" strokeDasharray={C} strokeDashoffset={C * (1 - pct / 100)} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">{pct}%</span>
              <span className="text-[11px] text-white/70">{totalDone}/{totalPublished}</span>
            </div>
          </div>
        </div>
        <div className="tricolor" />
      </section>
      <main className="page-in mx-auto max-w-5xl px-5 py-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold">Tes matières</h2>

        <div className="stagger mt-5 grid gap-4 sm:grid-cols-2">
          {subjects === undefined && [0, 1, 2].map((i) => <div key={i} className="h-32 animate-pulse rounded-3xl bg-secondary" />)}
          {subjects?.map((s) => {
            const done = [...doneSlugs].filter((slug) => slug.startsWith(`${s.slug}-`)).length
            return (
              <Link
                key={s.slug}
                to="/matiere/$slug"
                params={{ slug: s.slug }}
                className="lift group rounded-3xl border bg-card p-5 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-green-soft text-3xl" aria-hidden>{s.emoji}</span>
                  <div className="flex-1">
                    <h2 className="font-bold">{s.name}</h2>
                    <p className="text-xs text-muted-foreground">
                      {s.published} disponible{s.published > 1 ? 's' : ''} · {s.total - s.published} à venir
                    </p>
                  </div>
                  <ChevronRight className="size-5 text-muted-foreground transition group-hover:translate-x-0.5" />
                </div>
                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-secondary">
                  <div className="grow-x h-full rounded-full bg-brand-orange" style={{ width: `${s.published ? (done / s.published) * 100 : 0}%` }} />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{done} leçon{done > 1 ? 's' : ''} comprise{done > 1 ? 's' : ''}</p>
              </Link>
            )
          })}
        </div>

        <Link to="/sujets" className="lift mt-6 flex items-center gap-3 rounded-3xl border bg-card p-5 shadow-sm">
          <span className="flex size-14 items-center justify-center rounded-2xl bg-brand-orange-soft text-3xl" aria-hidden>📝</span>
          <div className="flex-1">
            <h2 className="font-bold">Sujets du BAC 2021 – 2025</h2>
            <p className="text-xs text-muted-foreground">Les anciens sujets officiels de ta série</p>
          </div>
          <ChevronRight className="size-5 text-muted-foreground" />
        </Link>

        <p className="mt-8 rounded-2xl border border-dashed p-4 text-sm text-muted-foreground">
          Ta série est {SERIE_LABEL[serie]}. Tu t'es trompé de série ? Écris-nous sur WhatsApp et nous la changerons pour toi.
        </p>
      </main>
    </div>
  )
}
