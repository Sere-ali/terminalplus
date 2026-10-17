import { createFileRoute, Link } from '@tanstack/react-router'
import { useMutation, useQuery } from 'convex/react'
import { ChevronRight } from 'lucide-react'
import { api } from '@/convex/_generated/api'
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
  const subjects = useQuery(api.catalog.subjects, { serie })
  const progress = useQuery(api.progress.mine, {})
  const updateSerie = useMutation(api.users.updateSerie)

  const doneSlugs = new Set((progress ?? []).filter((p) => p.done).map((p) => p.chapterSlug))
  const totalPublished = (subjects ?? []).reduce((n, s) => n + s.published, 0)
  const totalDone = (subjects ?? []).reduce(
    (n, s) => n + [...doneSlugs].filter((slug) => slug.startsWith(`${s.slug}-`)).length,
    0,
  )
  const pct = totalPublished > 0 ? Math.round((totalDone / totalPublished) * 100) : 0

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <p className="text-sm font-semibold text-primary">{SERIE_LABEL[serie]}</p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold">Bonjour {name.split(' ')[0]} 👋</h1>
        <p className="mt-1 text-muted-foreground">Prêt(e) à réviser ? Choisis une matière.</p>

        <div className="mt-5 rounded-2xl border bg-card p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold">Ta progression</span>
            <span className="text-muted-foreground">{totalDone} / {totalPublished} leçons comprises</span>
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-secondary">
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${pct}%` }} />
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {subjects === undefined && [0, 1, 2].map((i) => <div key={i} className="h-28 animate-pulse rounded-2xl bg-secondary" />)}
          {subjects?.map((s) => {
            const done = [...doneSlugs].filter((slug) => slug.startsWith(`${s.slug}-`)).length
            return (
              <Link
                key={s.slug}
                to="/matiere/$slug"
                params={{ slug: s.slug }}
                className="group rounded-2xl border bg-card p-4 shadow-sm transition hover:border-primary hover:shadow"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>{s.emoji}</span>
                  <div className="flex-1">
                    <h2 className="font-bold">{s.name}</h2>
                    <p className="text-xs text-muted-foreground">
                      {s.published} disponible{s.published > 1 ? 's' : ''} · {s.total - s.published} à venir
                    </p>
                  </div>
                  <ChevronRight className="size-5 text-muted-foreground transition group-hover:translate-x-0.5" />
                </div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-brand-orange" style={{ width: `${s.published ? (done / s.published) * 100 : 0}%` }} />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{done} leçon{done > 1 ? 's' : ''} comprise{done > 1 ? 's' : ''}</p>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-dashed p-4 text-sm text-muted-foreground">
          Tu t'es trompé de série ?{' '}
          {(['A', 'C', 'D'] as const)
            .filter((s) => s !== serie)
            .map((s) => (
              <button key={s} type="button" onClick={() => updateSerie({ serie: s })} className="mr-2 font-semibold text-primary underline-offset-4 hover:underline">
                Passer en {SERIE_LABEL[s]}
              </button>
            ))}
        </div>
      </main>
    </div>
  )
}
