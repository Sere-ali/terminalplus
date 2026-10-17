import { useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { FileText, CheckCircle2 } from 'lucide-react'
import { useApi } from '@/lib/api'
import { SiteHeader } from '@/components/site-header'
import { RequireStudent } from '@/components/require-student'
import { SERIE_LABEL, type Serie } from '@/lib/use-me'

export const Route = createFileRoute('/sujets')({ component: SujetsPage })

type Exam = { id: string; subject: string; year: number; kind: 'sujet' | 'corrige'; fileName: string; serie?: Serie }

function SujetsPage() {
  return <RequireStudent>{(me) => <Sujets serie={me.serie} isAdmin={me.isAdmin} />}</RequireStudent>
}

function Sujets({ serie, isAdmin }: { serie: Serie; isAdmin: boolean }) {
  const [tab, setTab] = useState<Serie>(serie)
  const data = useApi<{ ok: boolean; exams: Exam[] }>(isAdmin ? `/api/exams/all?serie=${tab}` : '/api/exams')
  const exams = data?.ok ? data.exams : undefined

  const subjects = [...new Set((exams ?? []).map((e) => e.subject))].sort((a, b) => a.localeCompare(b, 'fr'))
  const years = (s: string) => [...new Set((exams ?? []).filter((e) => e.subject === s).map((e) => e.year))].sort((a, b) => b - a)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-8">
        <Link to="/tableau" className="text-sm font-semibold text-primary">← Mes matières</Link>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold">Sujets du BAC</h1>
        <p className="text-sm text-muted-foreground">Les anciens sujets officiels, de 2021 à 2025, pour t'entraîner.</p>

        {isAdmin && (
          <div className="mt-4 grid grid-cols-3 gap-1 rounded-xl border bg-card p-1 text-sm font-semibold sm:max-w-md">
            {(['A', 'C', 'D'] as const).map((s) => (
              <button key={s} type="button" onClick={() => setTab(s)} className={`rounded-lg px-3 py-2 ${tab === s ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}>
                {SERIE_LABEL[s]}
              </button>
            ))}
          </div>
        )}

        {exams === undefined && <div className="mt-6 h-24 animate-pulse rounded-2xl bg-secondary" />}
        {exams && exams.length === 0 && (
          <p className="mt-6 rounded-2xl border border-dashed p-5 text-sm text-muted-foreground">
            Les sujets de {SERIE_LABEL[isAdmin ? tab : serie]} arrivent bientôt. Reviens vite !
          </p>
        )}

        <div className="mt-6 space-y-5">
          {subjects.map((s) => (
            <section key={s} className="rounded-2xl border bg-card p-4">
              <h2 className="font-bold">{s}</h2>
              <ul className="mt-2 divide-y">
                {years(s).map((y) => (
                  <li key={y} className="flex flex-wrap items-center gap-2 py-2.5">
                    <span className="w-14 font-semibold">{y}</span>
                    {(exams ?? []).filter((e) => e.subject === s && e.year === y).map((e) => (
                      <a
                        key={e.id}
                        href={`/api/exams/file/${e.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold ${e.kind === 'sujet' ? 'bg-primary text-primary-foreground' : 'bg-brand-orange-soft'}`}
                      >
                        {e.kind === 'sujet' ? <FileText className="size-4" /> : <CheckCircle2 className="size-4" />}
                        {e.kind === 'sujet' ? 'Sujet' : 'Corrigé'}
                      </a>
                    ))}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
    </div>
  )
}
