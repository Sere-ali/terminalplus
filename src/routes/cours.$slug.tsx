import { useEffect, useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Check, Star } from 'lucide-react'
import { post, useApi } from '@/lib/api'
import type { ChapterResponse, ProgressRow } from '@/lib/types'
import { SiteHeader } from '@/components/site-header'
import { UnlockBanner } from '@/components/unlock-banner'
import { RequireStudent } from '@/components/require-student'
import { Markdown } from '@/components/markdown'
import { TutorPanel } from '@/components/tutor-panel'
import { setPresenceSlug } from '@/lib/presence'

export const Route = createFileRoute('/cours/$slug')({ component: CoursPage })

function CoursPage() {
  const { slug } = Route.useParams()
  return <RequireStudent allowUnpaid>{(me) => <Lesson slug={slug} paid={me.hasAccess} />}</RequireStudent>
}

function Lesson({ slug, paid }: { slug: string; paid: boolean }) {
  useEffect(() => {
    setPresenceSlug(slug)
    return () => setPresenceSlug(null)
  }, [slug])
  const res = useApi<ChapterResponse>(`/api/chapters/${encodeURIComponent(slug)}`)
  const progress = useApi<ProgressRow[]>('/api/progress')
  const toggle = (arg: { chapterSlug: string; field: 'done' | 'favorite' }) => post('/api/progress/toggle', arg)
  const [tab, setTab] = useState<'cours' | 'prof'>('cours')

  const mine = progress?.find((p) => p.chapterSlug === slug)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-5">
        {res === undefined && <div className="h-64 animate-pulse rounded-2xl bg-secondary" />}

        {res && !res.ok && res.code === 'PAYMENT_REQUIRED' && (
          <div className="py-12">
            <p className="mb-4 text-center text-lg font-semibold">🔒 Cette leçon fait partie de l'accès complet.</p>
            <UnlockBanner />
            <p className="mt-4 text-center"><Link to="/tableau" className="font-semibold text-primary underline">Retour à mes matières</Link></p>
          </div>
        )}
        {res && !res.ok && res.code !== 'PAYMENT_REQUIRED' && (
          <div className="py-16 text-center">
            <p className="text-lg font-semibold">
              {res.code === 'NOT_PUBLISHED' ? 'Cette leçon sera bientôt disponible.' : res.code === 'NOT_FOUND' ? 'Leçon introuvable.' : 'Connecte-toi pour lire cette leçon.'}
            </p>
            <Link to="/tableau" className="mt-4 inline-block font-semibold text-primary underline">Retour à mes matières</Link>
          </div>
        )}

        {res && res.ok && (
          <>
            <Link
              to="/matiere/$slug"
              params={{ slug: res.chapter.subjectSlug }}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="size-4" /> {res.subjectEmoji} {res.subjectName}
            </Link>

            <p className="mt-3 text-xs font-bold uppercase tracking-wider text-primary">{res.chapter.theme}</p>
            <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold leading-tight sm:text-3xl">{res.chapter.title}</h1>
            {res.chapter.status !== 'published' && (
              <p className="mt-2 rounded-lg bg-brand-orange-soft px-3 py-2 text-sm font-medium">Brouillon : visible uniquement par l'administrateur.</p>
            )}

            <div className="mt-4 grid grid-cols-2 gap-1 rounded-xl border bg-card p-1 text-sm font-semibold">
              {([['cours', '📘 Le cours'], ['prof', '🎓 Professeur & questions']] as const).map(([k, label]) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setTab(k)}
                  className={`rounded-lg px-3 py-2.5 ${tab === k ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                >
                  {label}
                </button>
              ))}
            </div>

            {!paid && <UnlockBanner className="mt-4" />}
            {tab === 'cours' ? (
              <>
                <article className="mt-5 rounded-2xl border bg-card p-4 sm:p-6">
                  {res.chapter.content.trim() ? (
                    <Markdown>{res.chapter.content}</Markdown>
                  ) : (
                    <p className="text-muted-foreground">Le résumé de cette leçon est en cours de rédaction.</p>
                  )}
                </article>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => toggle({ chapterSlug: slug, field: 'done' })}
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold ${mine?.done ? 'bg-primary text-primary-foreground' : 'border bg-card hover:bg-secondary'}`}
                  >
                    <Check className="size-4" /> {mine?.done ? "J'ai compris cette leçon" : "Marquer comme comprise"}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggle({ chapterSlug: slug, field: 'favorite' })}
                    className="inline-flex items-center gap-2 rounded-xl border bg-card px-4 py-3 text-sm font-semibold hover:bg-secondary"
                  >
                    <Star className={`size-4 ${mine?.favorite ? 'fill-brand-orange text-brand-orange' : ''}`} />
                    {mine?.favorite ? 'Dans mes favoris' : 'Ajouter aux favoris'}
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  {res.prev ? (
                    <Link to="/cours/$slug" params={{ slug: res.prev.slug }} className="flex items-center gap-2 rounded-xl border bg-card p-3 text-sm hover:border-primary">
                      <ArrowLeft className="size-4 shrink-0" /> <span className="line-clamp-2">{res.prev.title}</span>
                    </Link>
                  ) : <span />}
                  {res.next ? (
                    <Link to="/cours/$slug" params={{ slug: res.next.slug }} className="flex items-center justify-end gap-2 rounded-xl border bg-card p-3 text-right text-sm hover:border-primary">
                      <span className="line-clamp-2">{res.next.title}</span> <ArrowRight className="size-4 shrink-0" />
                    </Link>
                  ) : <span />}
                </div>
              </>
            ) : (
              <div className="mt-5">
                {paid ? <TutorPanel chapterSlug={slug} title={res.chapter.title} /> : <UnlockBanner />}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
