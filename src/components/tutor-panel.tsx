import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Loader2, Mic, Send, Square, Volume2, VolumeX } from 'lucide-react'
import { post, useApi } from '@/lib/api'
import { Markdown } from '@/components/markdown'


// ---- Voix : dictée (le micro écrit ta question) et lecture (le professeur répond à voix haute) ----
const SR: any = typeof window !== 'undefined' ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition : undefined
const canSpeak = typeof window !== 'undefined' && 'speechSynthesis' in window

/** Transforme une réponse (texte + maths) en phrases faciles à lire à voix haute. */
function toSpeech(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, ' $1 sur $2 ')
    .replace(/\\sqrt\{([^{}]*)\}/g, ' racine de $1 ')
    .replace(/\^\{?2\}?/g, ' au carré ')
    .replace(/\^\{?3\}?/g, ' au cube ')
    .replace(/\^\{([^{}]*)\}/g, ' puissance $1 ')
    .replace(/\\lim/g, ' limite ')
    .replace(/\\infty/g, " l'infini ")
    .replace(/\\(to|rightarrow)/g, ' tend vers ')
    .replace(/\\times|\\cdot/g, ' fois ')
    .replace(/\\(leq|le)\b/g, ' inférieur ou égal à ')
    .replace(/\\(geq|ge)\b/g, ' supérieur ou égal à ')
    .replace(/\\ln/g, ' logarithme népérien ')
    .replace(/\\exp/g, ' exponentielle ')
    .replace(/\\([a-zA-Z]+)/g, ' $1 ')
    .replace(/[$`*_#>~|{}\\]/g, ' ')
    .replace(/^\s*[-•]\s+/gm, '')
    .replace(/\s*=\s*/g, ' égale ')
    .replace(/\s*\+\s*/g, ' plus ')
    .replace(/\b([0-9a-z])\s*-\s*([0-9a-z])\b/gi, '$1 moins $2')
    .replace(/\s+/g, ' ')
    .trim()
}

function speak(text: string, onEnd?: () => void) {
  if (!canSpeak) return
  const synth = window.speechSynthesis
  synth.cancel()
  const parts = toSpeech(text).match(/[^.!?:;\n]+[.!?:;]?/g)?.map((s) => s.trim()).filter(Boolean) ?? []
  const voices = synth.getVoices()
  const voice = voices.find((v) => v.lang?.toLowerCase().startsWith('fr-fr')) ?? voices.find((v) => v.lang?.toLowerCase().startsWith('fr'))
  parts.forEach((s, i) => {
    const u = new SpeechSynthesisUtterance(s)
    u.lang = 'fr-FR'
    if (voice) u.voice = voice
    u.rate = 0.95
    if (i === parts.length - 1) {
      u.onend = () => onEnd?.()
      u.onerror = () => onEnd?.()
    }
    synth.speak(u)
  })
  if (parts.length === 0) onEnd?.()
}

function stopSpeaking() {
  if (canSpeak) window.speechSynthesis.cancel()
}

export function TutorPanel({ chapterSlug, title }: { chapterSlug: string; title: string }) {
  const messages = useApi<{ id: string; role: 'user' | 'assistant'; mode: string; content: string }[]>(
    `/api/tutor/messages?chapterSlug=${encodeURIComponent(chapterSlug)}`,
  )
  const ask = (arg: { chapterSlug: string; question: string; mode: 'chat' | 'prof' }) =>
    post<{ ok: boolean; message?: string }>('/api/tutor/ask', arg)
  const [question, setQuestion] = useState('')
  const [busy, setBusy] = useState<null | 'chat' | 'prof'>(null)
  const [error, setError] = useState<string | null>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const [listening, setListening] = useState(false)
  const [speakingId, setSpeakingId] = useState<string | null>(null)
  const [autoRead, setAutoRead] = useState(false)
  const recRef = useRef<any>(null)
  const lastSeen = useRef<string | null>(null)

  useEffect(() => {
    try { setAutoRead(localStorage.getItem('tp_autoread') === '1') } catch {}
    return () => { stopSpeaking(); recRef.current?.abort?.() }
  }, [])

  // Quand une nouvelle réponse arrive et que « réponse vocale » est activée, le professeur la lit.
  useEffect(() => {
    if (!messages) return
    const last = messages[messages.length - 1]
    if (lastSeen.current === null) { lastSeen.current = last?.id ?? ''; return }
    if (last && last.id !== lastSeen.current) {
      lastSeen.current = last.id
      if (autoRead && last.role === 'assistant') {
        setSpeakingId(last.id)
        speak(last.content, () => setSpeakingId(null))
      }
    }
  }, [messages, autoRead])

  function toggleAutoRead() {
    const next = !autoRead
    setAutoRead(next)
    try { localStorage.setItem('tp_autoread', next ? '1' : '0') } catch {}
    if (!next) { stopSpeaking(); setSpeakingId(null) }
  }

  function toggleMic() {
    if (listening) { recRef.current?.stop?.(); return }
    if (!SR) { setError("La dictée vocale ne marche pas sur ce navigateur. Ouvre le site avec Google Chrome."); return }
    stopSpeaking(); setSpeakingId(null); setError(null)
    const rec = new SR()
    recRef.current = rec
    rec.lang = 'fr-FR'
    rec.interimResults = true
    rec.continuous = false
    const base = question.trim()
    rec.onresult = (e: any) => {
      let text = ''
      for (let i = 0; i < e.results.length; i++) text += e.results[i][0].transcript
      setQuestion((base ? base + ' ' : '') + text.trim())
    }
    rec.onerror = (e: any) => {
      if (e.error === 'not-allowed' || e.error === 'service-not-allowed') setError("Autorise le micro dans ton navigateur pour parler au professeur.")
      else if (e.error === 'no-speech') setError("Je n'ai rien entendu. Appuie sur le micro et parle plus près.")
      else if (e.error !== 'aborted') setError('La dictée a échoué. Vérifie ta connexion internet et réessaie.')
    }
    rec.onend = () => setListening(false)
    try { rec.start(); setListening(true) } catch { setListening(false) }
  }

  function readMessage(id: string, content: string) {
    if (speakingId === id) { stopSpeaking(); setSpeakingId(null); return }
    setSpeakingId(id)
    speak(content, () => setSpeakingId(null))
  }

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
        {canSpeak && (
          <button
            type="button"
            onClick={toggleAutoRead}
            aria-pressed={autoRead}
            className={`mt-2 inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold ${autoRead ? 'border-primary bg-primary/10 text-primary' : 'bg-card'}`}
          >
            {autoRead ? <Volume2 className="size-4" /> : <VolumeX className="size-4" />}
            Réponse vocale : {autoRead ? 'activée' : 'désactivée'}
          </button>
        )}
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
              {canSpeak && (
                <button
                  type="button"
                  onClick={() => readMessage(m.id, m.content)}
                  className="mt-2 inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold text-primary"
                >
                  {speakingId === m.id ? <Square className="size-3.5" /> : <Volume2 className="size-3.5" />}
                  {speakingId === m.id ? 'Arrêter' : 'Écouter'}
                </button>
              )}
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
          placeholder={listening ? 'Je t’écoute… parle maintenant' : 'Pose ta question ou appuie sur le micro…'}
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-base outline-none"
        />
        <button
          type="button"
          onClick={toggleMic}
          aria-label={listening ? 'Arrêter le micro' : 'Parler au professeur'}
          disabled={busy !== null}
          className={`flex size-11 shrink-0 items-center justify-center rounded-xl border disabled:opacity-50 ${listening ? 'animate-pulse border-red-500 bg-red-500 text-white' : 'bg-card text-primary'}`}
        >
          {listening ? <Square className="size-5" /> : <Mic className="size-5" />}
        </button>
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
