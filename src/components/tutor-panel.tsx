import { useEffect, useRef, useState } from 'react'
import { useAction, useQuery } from 'convex/react'
import { GraduationCap, Loader2, Send } from 'lucide-react'
import { api } from '@/convex/_generated/api'
import { Markdown } from '@/components/markdown'

export function TutorPanel({ chapterSlug, title }: { chapterSlug: string; title: string }) {
  const messages = useQuery(api.tutorData.myMessages, { chapterSlug })
  const ask = useAction(api.tutor.ask)
  const [question, setQuestion] = useState('')
  const [busy, setBusy] = useState<null | 'chat' | 'prof'>(null)
  const [error, setError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages?.length, busy])

  async function send(mode: 'chat' | 'prof', q: string) {
    setBusy(mode)
    setError(null)
    try {
      const res = await ask({ chapterSlug, question: q, mode })
      if (!res.ok) setError(res.message ?? 'Une erreur est survenue.')
      else if (mode === 'chat') setQuestion('')
    } catch {
      setError('Le professeur est momentanément indisponible. Réessaie dans un instant.')
    } finally {
      setBusy(null)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border bg-brand-green-soft p-4">
        <p className="text-sm font-semibold">🎓 Ton professeur virtuel</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Il t'explique « {title} » pas à pas, avec des exemples simples, ou répond à tes questions.
        </p>
        <button
          type="button"
          disabled={busy !== null}
          onClick={() => send('prof', '')}
          className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 disabled:opacity-60"
        >
          {busy === 'prof' ? <Loader2 className="size-4 animate-spin" /> : <GraduationCap className="size-4" />}
          Le professeur m'explique la leçon
        </button>
      </div>

      <div className="space-y-3">
        {messages === undefined && <div className="h-16 animate-pulse rounded-xl bg-secondary" />}
        {messages?.length === 0 && busy === null && (
          <p className="rounded-xl border border-dashed p-4 text-center text-sm text-muted-foreground">
            Aucune question pour l'instant. Écris la première ci-dessous 👇
          </p>
        )}
        {messages?.map((m) =>
          m.role === 'user' ? (
            <div key={m.id} className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm text-primary-foreground">
              {m.content}
            </div>
          ) : (
            <div key={m.id} className="rounded-2xl rounded-bl-sm border bg-card px-4 py-3">
              <Markdown className="prose-sm">{m.content}</Markdown>
            </div>
          ),
        )}
        {busy && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" /> Le professeur réfléchit…
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {error && <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}

      <form
        className="sticky bottom-3 flex gap-2 rounded-2xl border bg-card p-2 shadow-lg"
        onSubmit={(e) => {
          e.preventDefault()
          if (question.trim().length >= 2 && busy === null) send('chat', question)
        }}
      >
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          maxLength={1200}
          placeholder="Pose ta question sur cette leçon…"
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-base outline-none"
        />
        <button
          type="submit"
          aria-label="Envoyer"
          disabled={busy !== null || question.trim().length < 2}
          className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white disabled:opacity-50"
        >
          <Send className="size-5" />
        </button>
      </form>
      <p className="text-center text-xs text-muted-foreground">
        Le professeur virtuel peut se tromper : vérifie toujours avec ton cours et tes professeurs.
      </p>
    </div>
  )
}
