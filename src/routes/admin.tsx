import { useEffect, useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useMutation, useQuery } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { SiteHeader } from '@/components/site-header'
import { RequireStudent } from '@/components/require-student'
import { Markdown } from '@/components/markdown'
import { SERIE_LABEL, type Serie } from '@/lib/use-me'

export const Route = createFileRoute('/admin')({ component: AdminPage })

function AdminPage() {
  return <RequireStudent>{() => <AdminGate />}</RequireStudent>
}

function AdminGate() {
  const overview = useQuery(api.admin.overview, {})
  const [editing, setEditing] = useState<string | null>(null)
  const [serieTab, setSerieTab] = useState<Serie>('D')

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-6">
        {overview === undefined && <p className="py-20 text-center text-muted-foreground">Chargement…</p>}
        {overview && !overview.ok && (
          <div className="py-20 text-center">
            <p className="text-lg font-semibold">Accès réservé au super administrateur.</p>
            <Link to="/tableau" className="mt-3 inline-block font-semibold text-primary underline">Retour</Link>
          </div>
        )}
        {overview && overview.ok && (
          <>
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold">Administration</h1>
            <p className="text-sm text-muted-foreground">{overview.totalUsers} compte(s) enregistré(s)</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {overview.bySerie.map((s) => (
                <div key={s.serie} className="rounded-2xl border bg-card p-4">
                  <p className="text-sm font-bold text-primary">{SERIE_LABEL[s.serie]}</p>
                  <p className="text-3xl font-bold">{s.students}</p>
                  <p className="text-xs text-muted-foreground">élève(s) inscrit(s)</p>
                </div>
              ))}
            </div>

            <h2 className="mt-8 text-lg font-bold">Contenus par matière</h2>
            <div className="mt-2 grid grid-cols-3 gap-1 rounded-xl border bg-card p-1 text-sm font-semibold sm:max-w-md">
              {(['A', 'C', 'D'] as const).map((s) => (
                <button key={s} type="button" onClick={() => setSerieTab(s)} className={`rounded-lg px-3 py-2 ${serieTab === s ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}>
                  {SERIE_LABEL[s]}
                </button>
              ))}
            </div>
            <div className="mt-3 space-y-3">
              {overview.bySerie
                .find((s) => s.serie === serieTab)
                ?.subjects.map((sub) => (
                  <SubjectBlock key={sub.slug} sub={sub} onEdit={setEditing} />
                ))}
            </div>

            {editing && <Editor slug={editing} onClose={() => setEditing(null)} />}

            <h2 className="mt-8 text-lg font-bold">Derniers inscrits</h2>
            <ul className="mt-2 divide-y rounded-2xl border bg-card text-sm">
              {overview.recent.length === 0 && <li className="p-4 text-muted-foreground">Aucun élève pour l'instant.</li>}
              {overview.recent.map((u) => (
                <li key={u.id} className="flex items-center justify-between p-3">
                  <span className="font-medium">{u.name}{u.role === 'admin' && ' 👑'}</span>
                  <span className="text-muted-foreground">{SERIE_LABEL[u.serie]} · {new Date(u.createdAt).toLocaleDateString('fr-FR')}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  )
}

function SubjectBlock({
  sub,
  onEdit,
}: {
  sub: { slug: string; name: string; emoji: string; total: number; published: number }
  onEdit: (slug: string) => void
}) {
  const [open, setOpen] = useState(false)
  const data = useQuery(api.catalog.chapterList, open ? { subjectSlug: sub.slug } : 'skip')
  return (
    <div className="rounded-2xl border bg-card">
      <button type="button" onClick={() => setOpen(!open)} className="flex w-full items-center gap-3 p-4 text-left">
        <span className="text-2xl">{sub.emoji}</span>
        <span className="flex-1 font-bold">{sub.name}</span>
        <span className="text-sm text-muted-foreground">{sub.published} / {sub.total} rédigées</span>
      </button>
      {open && data && (
        <ul className="divide-y border-t text-sm">
          {[...data.chapters].sort((a, b) => a.order - b.order).map((c) => (
            <li key={c.slug} className="flex items-center gap-2 p-3">
              <span className={`size-2.5 shrink-0 rounded-full ${c.status === 'published' ? 'bg-primary' : 'bg-brand-orange'}`} />
              <span className="flex-1">{c.title}</span>
              <button type="button" onClick={() => onEdit(c.slug)} className="rounded-lg border px-3 py-1.5 text-xs font-semibold hover:bg-secondary">Modifier</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Editor({ slug, onClose }: { slug: string; onClose: () => void }) {
  const res = useQuery(api.admin.getChapterForEdit, { slug })
  const save = useMutation(api.admin.saveChapter)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState<'published' | 'draft'>('draft')
  const [preview, setPreview] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  useEffect(() => {
    if (res && res.ok) {
      setTitle(res.chapter.title)
      setContent(res.chapter.content)
      setStatus(res.chapter.status)
      setMsg(null)
    }
  }, [res])

  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-black/40 p-3">
      <div className="mx-auto max-w-3xl rounded-2xl bg-background p-4 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">Modifier la leçon</h3>
          <button type="button" onClick={onClose} className="rounded-lg px-3 py-1.5 text-sm font-semibold hover:bg-secondary">Fermer</button>
        </div>
        {!res && <p className="py-8 text-center text-muted-foreground">Chargement…</p>}
        {res && !res.ok && <p className="py-8 text-center text-destructive">Leçon introuvable.</p>}
        {res && res.ok && (
          <div className="mt-3 space-y-3">
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full rounded-lg border bg-card px-3 py-2.5 font-semibold" />
            <div className="flex items-center gap-2 text-sm">
              <select value={status} onChange={(e) => setStatus(e.target.value as 'published' | 'draft')} className="rounded-lg border bg-card px-3 py-2">
                <option value="published">Publié (visible des élèves)</option>
                <option value="draft">Brouillon</option>
              </select>
              <button type="button" onClick={() => setPreview(!preview)} className="rounded-lg border px-3 py-2 font-semibold hover:bg-secondary">
                {preview ? "Modifier le texte" : 'Aperçu'}
              </button>
            </div>
            {preview ? (
              <div className="rounded-xl border bg-card p-4"><Markdown>{content || '*(vide)*'}</Markdown></div>
            ) : (
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={20}
                spellCheck={false}
                className="w-full rounded-lg border bg-card p-3 font-mono text-sm"
                placeholder="Markdown + formules LaTeX ($x^2$)…"
              />
            )}
            {msg && <p className="text-sm font-medium text-primary">{msg}</p>}
            <button
              type="button"
              onClick={async () => {
                const r = await save({ slug, title, content, status })
                setMsg(r.ok ? 'Enregistré ✔' : "Erreur à l'enregistrement")
              }}
              className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              Enregistrer
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
