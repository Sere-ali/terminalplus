import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Check, Lock, Star } from 'lucide-react'
import { useApi } from '@/lib/api'
import type { ChapterListResponse, ProgressRow } from '@/lib/types'
import { SiteHeader } from '@/components/site-header'
import { RequireStudent } from '@/components/require-student'

export const Route = createFileRoute('/matiere/$slug')({ component: MatierePage })

function MatierePage() {
  const { slug } = Route.useParams()
  return <RequireStudent>{(me) => <Content slug={slug} isAdmin={me.isAdmin} />}</RequireStudent>
}

function Content({ slug, isAdmin }: { slug: string; isAdmin: boolean }) {
  const data = useApi<ChapterListResponse>(`/api/subjects/${encodeURIComponent(slug)}/chapters`)
  const progress = useApi<ProgressRow[]>('/api/progress')
  const prog = new Map((progress ?? []).map((p) => [p.chapterSlug, p]))

  const themes: { theme: string; items: NonNullable<typeof data>['chapters'] }[] = []
  if (data) {
    for (const c of [...data.chapters].sort((a, b) => a.order - b.order)) {
      const last = themes[themes.length - 1]
      if (last && last.theme === c.theme) last.items.push(c)
      else themes.push({ theme: c.theme, items: [c] })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-6">
        <Link to="/tableau" className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> Mes matières
        </Link>

        {data === undefined && <div className="mt-6 h-40 animate-pulse rounded-2xl bg-secondary" />}
        {data === null && <p className="mt-10 text-center text-muted-foreground">Cette matière n'existe pas.</p>}

        {data && (
          <>
            <div className="mt-3 flex items-center gap-3">
              <span className="text-4xl" aria-hidden>{data.subject.emoji}</span>
              <div>
                <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold">{data.subject.name}</h1>
                <p className="text-sm text-muted-foreground">{data.subject.description}</p>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {themes.map((t) => (
                <section key={t.theme}>
                  <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">{t.theme}</h2>
                  <ul className="space-y-2">
                    {t.items.map((c) => {
                      const available = c.status === 'published' || isAdmin
                      const p = prog.get(c.slug)
                      const inner = (
                        <div className={`flex items-center gap-3 rounded-xl border bg-card p-3.5 ${available ? 'hover:border-primary' : 'opacity-60'}`}>
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-bold">
                            {p?.done ? <Check className="size-4 text-primary" /> : c.order}
                          </span>
                          <span className="flex-1 text-sm font-semibold leading-snug">{c.title}</span>
                          {p?.favorite && <Star className="size-4 fill-brand-orange text-brand-orange" />}
                          {c.status !== 'published' && (
                            <span className="flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
                              <Lock className="size-3" /> {isAdmin ? 'Brouillon' : 'Bientôt'}
                            </span>
                          )}
                        </div>
                      )
                      return (
                        <li key={c.slug}>
                          {available ? (
                            <Link to="/cours/$slug" params={{ slug: c.slug }}>{inner}</Link>
                          ) : (
                            inner
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </section>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  )
}
