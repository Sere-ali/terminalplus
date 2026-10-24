import { useEffect, useRef, useState } from 'react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { invalidate, post, useApi } from '@/lib/api'
import { PasswordInput } from '@/components/password-input'
import type { ChapterListResponse } from '@/lib/types'
import { SiteHeader } from '@/components/site-header'
import { RequireStudent } from '@/components/require-student'
import { Markdown } from '@/components/markdown'
import { SERIE_LABEL, SERIES, type Serie } from '@/lib/use-me'

export const Route = createFileRoute('/admin')({ component: AdminPage })

function AdminPage() {
  return <RequireStudent>{() => <AdminGate />}</RequireStudent>
}

function AdminGate() {
  const overview = useApi<AdminOverview>('/api/admin/overview', { every: 15000 })
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
            <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold">Super administration</h1>
            <p className="text-sm text-muted-foreground">{overview.bySerie.reduce((n, x) => n + x.students, 0)} élève(s) inscrit(s) · 1 Super admin (toi)</p>

            <div className="mt-5 rounded-2xl border bg-brand-orange-soft p-4">
              <p className="text-sm font-bold">Argent reçu au total</p>
              <p className="text-3xl font-bold">{overview.totalReceived.toLocaleString('fr-FR')} F CFA</p>
              <p className="text-xs text-muted-foreground">Somme des paiements que tu as validés.</p>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {overview.bySerie.map((s) => (
                <div key={s.serie} className="rounded-2xl border bg-card p-4">
                  <p className="text-sm font-bold text-primary">{SERIE_LABEL[s.serie]}</p>
                  <p className="text-3xl font-bold">{s.students}</p>
                  <p className="text-xs text-muted-foreground">élève(s) inscrit(s)</p>
                </div>
              ))}
            </div>

            <OnlinePanel people={overview.recent} />
            <PaymentsPanel />
            <ExamsPanel />
            <ChangePasswordPanel />

            <h2 className="mt-8 text-lg font-bold">Contenus par matière</h2>
            <div className="mt-2 grid grid-cols-3 gap-1 rounded-xl border bg-card p-1 text-sm font-semibold sm:max-w-lg">
              {SERIES.map((s) => (
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

            <h2 className="mt-8 text-lg font-bold">Tous les comptes ({overview.totalUsers}) · {overview.paidCount} élève(s) ont payé</h2>
            <ul className="mt-2 divide-y rounded-2xl border bg-card text-sm">
              {overview.recent.length === 0 && <li className="p-4 text-muted-foreground">Aucun élève pour l'instant.</li>}
              {overview.recent.map((u) => (
                <StudentRow key={u.id} u={u} />
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  )
}

type StudentInfo = {
  id: string
  name: string
  email: string
  serie: Serie
  role: 'student' | 'admin'
  paid: boolean
  createdAt: number
  whatsapp?: string | null
  locked?: boolean
  strikes?: number
  hasDevice?: boolean
  lastSeen?: number | null
  online?: boolean
  studying?: string | null
}

type AdminOverview =
  | { ok: false }
  | {
      ok: true
      totalUsers: number
      paidCount: number
      totalReceived: number
      bySerie: {
        serie: Serie
        students: number
        subjects: { slug: string; name: string; emoji: string; total: number; published: number }[]
      }[]
      recent: StudentInfo[]
    }

type PaymentRow = {
  id: string
  name: string
  phone: string
  reference: string
  amount: number
  status: 'pending' | 'approved' | 'rejected'
  createdAt: number
}

type PaymentsAdmin =
  | { ok: false }
  | { ok: true; waveNumber: string; pending: PaymentRow[]; decided: PaymentRow[] }

function ago(ts?: number | null) {
  if (!ts) return 'jamais connecté'
  const s = Math.max(0, Math.round((Date.now() - ts) / 1000))
  if (s < 90) return "à l'instant"
  const m = Math.round(s / 60)
  if (m < 60) return `il y a ${m} min`
  const h = Math.round(m / 60)
  if (h < 24) return `il y a ${h} h`
  const d = Math.round(h / 24)
  return `il y a ${d} jour${d > 1 ? 's' : ''}`
}

function OnlinePanel({ people }: { people: StudentInfo[] }) {
  const online = people.filter((p) => p.online)
  return (
    <section className="mt-5 rounded-2xl border bg-card p-4">
      <h2 className="flex items-center gap-2 text-lg font-bold">
        <span className={`inline-block h-3 w-3 rounded-full ${online.length ? 'bg-green-500' : 'bg-muted-foreground/40'}`} />
        En ligne maintenant : {online.length}
      </h2>
      <p className="text-xs text-muted-foreground">Mis à jour automatiquement toutes les 15 secondes. Un élève est « en ligne » quand son application est ouverte et visible.</p>
      {online.length === 0 ? (
        <p className="mt-2 text-sm text-muted-foreground">Personne n'est connecté pour le moment.</p>
      ) : (
        <ul className="mt-2 divide-y text-sm">
          {online.map((p) => (
            <li key={p.id} className="flex flex-wrap items-center justify-between gap-1 py-2">
              <span className="font-medium">🟢 {p.name} <span className="text-xs font-normal text-muted-foreground">({SERIE_LABEL[p.serie]})</span></span>
              <span className="text-xs text-muted-foreground">{p.studying ? `📖 Étudie : ${p.studying}` : "Sur l'application (pas dans une leçon)"}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

/** Message prêt à envoyer à l'élève (identifiant + mot de passe). */
function AccessMessage({ name, whatsapp, identifier, password, onClose }: { name: string; whatsapp?: string | null; identifier: string; password: string | null; onClose: () => void }) {
  const [copied, setCopied] = useState(false)
  const text =
    `Bonjour ${name}, voici tes accès TERMINALE+ :\n` +
    `Site : ${typeof window !== 'undefined' ? window.location.origin : ''}\n` +
    `Identifiant : ${identifier}\n` +
    (password ? `Mot de passe : ${password}\n` : '') +
    `Garde-les bien et ne les partage avec personne.`
  const wa = `https://wa.me/${whatsapp ?? ''}?text=${encodeURIComponent(text)}`
  return (
    <div className="w-full rounded-lg border border-primary/30 bg-brand-green-soft p-3 text-sm">
      <p className="font-semibold text-primary">✅ Modifié. Message à envoyer à {name} :</p>
      <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-background p-2 font-sans text-xs">{text}</pre>
      <div className="mt-2 flex flex-wrap gap-2">
        <a href={wa} target="_blank" rel="noreferrer" className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
          Envoyer par WhatsApp
        </a>
        <button
          type="button"
          onClick={() => { void navigator.clipboard?.writeText(text).then(() => setCopied(true)).catch(() => {}) }}
          className="rounded-lg border bg-background px-3 py-1.5 text-xs font-semibold hover:bg-secondary"
        >
          {copied ? 'Copié ✓' : 'Copier le message'}
        </button>
        <button type="button" onClick={onClose} className="rounded-lg px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:underline">Fermer</button>
      </div>
    </div>
  )
}

function makePassword() {
  const chars = 'abcdefghijkmnpqrstuvwxyz23456789'
  const bytes = crypto.getRandomValues(new Uint8Array(8))
  return Array.from(bytes, (b) => chars[b % chars.length]).join('')
}

function StudentRow({ u }: { u: StudentInfo }) {
  const setAccess = (arg: { profileId: string; paid: boolean }) => post('/api/admin/access', arg)
  const resetPassword = (arg: { profileId: string; newPassword: string }) =>
    post<{ ok: boolean; message?: string }>('/api/admin/reset-password', arg)
  const [resetting, setResetting] = useState(false)
  const [pw, setPw] = useState('')
  const [msg, setMsg] = useState<string | null>(null)
  const [editing, setEditing] = useState(false)
  const [eName, setEName] = useState(u.name)
  const [eId, setEId] = useState(u.email)
  const [eSerie, setESerie] = useState<string>(u.serie)
  const [eMsg, setEMsg] = useState<string | null>(null)
  const [ePw, setEPw] = useState('')
  const [sent, setSent] = useState<{ identifier: string; password: string | null } | null>(null)
  return (
    <li className="flex flex-wrap items-center justify-between gap-2 p-3">
      <span>
        <span className="font-medium">{u.name}{u.role === 'admin' && ' 👑'}</span>
        <span className="block text-xs text-muted-foreground">Identifiant : {u.email}</span>
        {u.role !== 'admin' && (
          <span className={`block text-xs font-semibold ${u.online ? 'text-green-600' : 'text-muted-foreground'}`}>
            {u.online
              ? `🟢 En ligne${u.studying ? ` · étudie : ${u.studying}` : ''}`
              : `⚪ Hors ligne · dernière connexion : ${ago(u.lastSeen)}`}
          </span>
        )}
        {u.whatsapp && (
          <a
            href={`https://wa.me/${u.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="mt-0.5 inline-block text-xs font-semibold text-primary underline-offset-4 hover:underline"
          >
            WhatsApp : +{u.whatsapp} · Écrire
          </a>
        )}
        {u.role !== 'admin' && (u.strikes ?? 0) > 0 && (
          <span className="block text-xs font-semibold text-destructive">{u.locked ? 'Compte bloqué' : 'Alerte'} : {u.strikes} tentative(s) depuis un autre appareil</span>
        )}
      </span>
      <span className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
        <span className="text-xs text-muted-foreground">{SERIE_LABEL[u.serie]} · {new Date(u.createdAt).toLocaleDateString('fr-FR')}</span>
        <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${u.paid ? 'bg-brand-green-soft text-primary' : 'bg-brand-orange-soft'}`}>
          {u.role === 'admin' ? 'Super admin' : u.paid ? 'Payé' : 'Non payé'}
        </span>
        {u.role !== 'admin' && (
          <button
            type="button"
            onClick={() => setAccess({ profileId: u.id, paid: !u.paid })}
            className="rounded-lg border px-2.5 py-1 text-xs font-semibold hover:bg-secondary"
          >
            {u.paid ? "Retirer l'accès" : "Donner l'accès"}
          </button>
        )}
        {u.role !== 'admin' && (u.locked || (u.strikes ?? 0) > 0 || u.hasDevice) && (
          <button
            type="button"
            onClick={() => { if (window.confirm(`Autoriser ${u.name} à se connecter depuis un nouvel appareil ?`)) void post('/api/admin/reset-device', { profileId: u.id }) }}
            className={`rounded-lg border px-2.5 py-1 text-xs font-semibold hover:bg-secondary ${u.locked ? 'border-destructive/40 text-destructive' : ''}`}
          >
            {u.locked ? '🔒 Débloquer' : 'Changer d\'appareil'}
          </button>
        )}
        {u.role !== 'admin' && (
          <button
            type="button"
            onClick={() => { setResetting(!resetting); setPw(makePassword()); setMsg(null) }}
            className="rounded-lg border px-2.5 py-1 text-xs font-semibold hover:bg-secondary"
          >
            Mot de passe
          </button>
        )}
        {u.role !== 'admin' && (
          <button
            type="button"
            onClick={() => { setEditing(!editing); setEName(u.name); setEId(u.email); setESerie(u.serie); setEPw(''); setEMsg(null); setSent(null) }}
            className="rounded-lg border px-2.5 py-1 text-xs font-semibold hover:bg-secondary"
          >
            Modifier / accès oubliés
          </button>
        )}
        {u.role !== 'admin' && (
          <button
            type="button"
            onClick={() => {
              if (window.confirm(`Supprimer définitivement le compte de ${u.name} ?`)) {
                post('/api/admin/delete-student', { profileId: u.id })
              }
            }}
            className="rounded-lg border border-destructive/40 px-2.5 py-1 text-xs font-semibold text-destructive hover:bg-destructive/10"
          >
            Supprimer
          </button>
        )}
      </span>
      {editing && (
        <div className="flex w-full flex-wrap items-center gap-2 rounded-lg bg-secondary p-2">
          <input value={eName} onChange={(e) => setEName(e.target.value)} placeholder="Nom"
            className="rounded-lg border bg-background px-3 py-1.5 text-sm" aria-label="Nom" />
          <input value={eId} onChange={(e) => setEId(e.target.value)} placeholder="Identifiant"
            className="rounded-lg border bg-background px-3 py-1.5 text-sm" aria-label="Identifiant" />
          <select value={eSerie} onChange={(e) => setESerie(e.target.value)}
            className="rounded-lg border bg-background px-3 py-1.5 text-sm" aria-label="Série">
            {SERIES.map((s) => (
              <option key={s} value={s}>{SERIE_LABEL[s]}</option>
            ))}
          </select>
          <input value={ePw} onChange={(e) => setEPw(e.target.value)} placeholder="Nouveau mot de passe (laisser vide = inchangé)"
            className="min-w-[14rem] rounded-lg border bg-background px-3 py-1.5 font-mono text-sm" aria-label="Nouveau mot de passe" />
          <button type="button" onClick={() => setEPw(makePassword())} className="rounded-lg border bg-background px-3 py-1.5 text-xs font-semibold hover:bg-secondary">
            Générer
          </button>
          <button
            type="button"
            onClick={async () => {
              setEMsg(null)
              if (ePw && ePw.length < 8) { setEMsg('Le mot de passe doit avoir 8 caractères minimum.'); return }
              const r = await post<{ ok: boolean; message?: string }>('/api/admin/edit-student', {
                profileId: u.id, name: eName, identifier: eId, serie: eSerie,
              })
              if (!r.ok) { setEMsg(r.message ?? 'Erreur.'); return }
              if (ePw) {
                const r2 = await resetPassword({ profileId: u.id, newPassword: ePw })
                if (!r2.ok) { setEMsg(r2.message ?? 'Erreur sur le mot de passe.'); return }
              }
              setEditing(false)
              setSent({ identifier: eId.trim().toLowerCase(), password: ePw || null })
            }}
            className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
          >
            Enregistrer
          </button>
          {eMsg && <span className="text-xs font-medium text-destructive">{eMsg}</span>}
        </div>
      )}
      {sent && <AccessMessage name={eName} whatsapp={u.whatsapp} identifier={sent.identifier} password={sent.password} onClose={() => setSent(null)} />}
      {resetting && (
        <div className="flex w-full flex-wrap items-center gap-2 rounded-lg bg-secondary p-2">
          <input
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="rounded-lg border bg-background px-3 py-1.5 font-mono text-sm"
            aria-label="Nouveau mot de passe"
          />
          <button
            type="button"
            onClick={async () => {
              const r = await resetPassword({ profileId: u.id, newPassword: pw })
              if (r.ok) { setResetting(false); setSent({ identifier: u.email, password: pw }) } else { setMsg(r.message ?? 'Erreur.') }
            }}
            className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
          >
            Réinitialiser
          </button>
          {msg && <span className="text-xs font-medium text-primary">{msg}</span>}
        </div>
      )}
    </li>
  )
}

function PaymentsPanel() {
  const data = useApi<PaymentsAdmin>('/api/admin/payments', { every: 15000 })
  const decide = (arg: { paymentId: string; approve: boolean }) => post('/api/admin/payments/decide', arg)
  const setWave = (arg: { value: string }) => post('/api/admin/wave', arg)
  const [wave, setWaveValue] = useState<string | null>(null)
  const [saved, setSaved] = useState(false)

  if (!data || !data.ok) return null
  const current = wave ?? data.waveNumber

  return (
    <section className="mt-8 rounded-2xl border bg-card p-4">
      <h2 className="text-lg font-bold">Paiements Wave (1 100 F)</h2>
      <p className="text-sm text-muted-foreground">
        Les élèves paient sur ton numéro Wave puis saisissent l'identifiant de transaction. Vérifie-le dans ton application Wave, puis valide.
      </p>

      <form
        className="mt-3 flex flex-wrap items-center gap-2"
        onSubmit={async (e) => {
          e.preventDefault()
          await setWave({ value: current })
          setSaved(true)
        }}
      >
        <label className="text-sm font-semibold" htmlFor="wave">Mon numéro Wave :</label>
        <input
          id="wave"
          value={current}
          onChange={(e) => { setWaveValue(e.target.value); setSaved(false) }}
          inputMode="tel"
          placeholder="Ex. 07 00 00 00 00"
          className="rounded-lg border bg-background px-3 py-2 text-sm"
        />
        <button type="submit" className="rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">Enregistrer</button>
        {saved && <span className="text-sm font-medium text-primary">Enregistré ✔</span>}
      </form>

      <p className="mt-3 rounded-xl bg-secondary p-3 text-sm">
        Les élèves ne signalent plus leur paiement. Quand tu reçois de l'argent sur Wave, repère le numéro qui a payé, retrouve l'élève dans « Tous les comptes » (son numéro WhatsApp est affiché) et appuie sur « Donner l'accès ».
      </p>
      <h3 className="mt-5 text-sm font-bold uppercase tracking-wider text-brand-orange">À valider ({data.pending.length})</h3>
      <ul className="mt-2 divide-y rounded-xl border text-sm">
        {data.pending.length === 0 && <li className="p-3 text-muted-foreground">Aucun paiement en attente.</li>}
        {data.pending.map((p) => (
          <PendingRow key={p.id} p={p} decide={decide} />
        ))}
      </ul>

      {data.decided.length > 0 && (
        <>
          <h3 className="mt-5 text-sm font-bold uppercase tracking-wider text-muted-foreground">Derniers traités</h3>
          <ul className="mt-2 divide-y rounded-xl border text-xs">
            {data.decided.slice(0, 10).map((p) => (
              <li key={p.id} className="flex justify-between gap-2 p-2.5">
                <span>{p.name} · {p.reference}</span>
                <span className={p.status === 'approved' ? 'font-semibold text-primary' : 'text-muted-foreground'}>
                  {p.status === 'approved' ? 'Validé' : 'Refusé'}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}

function ChangePasswordPanel() {
  const [current, setCurrent] = useState('')
  const [next, setNext] = useState('')
  const [msg, setMsg] = useState<string | null>(null)
  return (
    <section className="mt-8 rounded-2xl border bg-card p-4">
      <h2 className="text-lg font-bold">Changer mon mot de passe</h2>
      <form
        className="mt-3 grid gap-2 sm:max-w-sm"
        onSubmit={async (e) => {
          e.preventDefault()
          const r = await post<{ ok: boolean; message?: string }>('/api/auth/change-password', { current, next })
          setMsg(r.ok ? 'Mot de passe changé ✔' : (r.message ?? 'Erreur.'))
          if (r.ok) { setCurrent(''); setNext('') }
        }}
      >
        <PasswordInput value={current} onChange={(e) => setCurrent(e.target.value)} required placeholder="Mot de passe actuel" className="w-full rounded-lg border bg-background px-3 py-2 text-sm" />
        <PasswordInput value={next} onChange={(e) => setNext(e.target.value)} required minLength={8} placeholder="Nouveau mot de passe (8 caractères min.)" className="w-full rounded-lg border bg-background px-3 py-2 text-sm" />
        <button type="submit" className="rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">Changer</button>
        {msg && <p className="text-sm font-medium text-primary">{msg}</p>}
      </form>
    </section>
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
  const data = useApi<ChapterListResponse>(open ? `/api/subjects/${encodeURIComponent(sub.slug)}/chapters` : null)
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
  const res = useApi<
    { ok: true; chapter: { title: string; content: string; status: 'published' | 'draft' } } | { ok: false }
  >(`/api/admin/chapter?slug=${encodeURIComponent(slug)}`)
  const save = (arg: { slug: string; title: string; content: string; status: 'published' | 'draft' }) =>
    post('/api/admin/chapter', arg)
  const loadedFor = useRef<string | null>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState<'published' | 'draft'>('draft')
  const [preview, setPreview] = useState(false)
  const [msg, setMsg] = useState<string | null>(null)

  useEffect(() => {
    if (res && res.ok && loadedFor.current !== slug) {
      loadedFor.current = slug
      setTitle(res.chapter.title)
      setContent(res.chapter.content)
      setStatus(res.chapter.status)
      setMsg(null)
    }
  }, [res, slug])

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


function ExamsPanel() {
  const [serie, setSerie] = useState<Serie>('D')
  const [subject, setSubject] = useState('')
  const [year, setYear] = useState('2025')
  const [kind, setKind] = useState<'sujet' | 'corrige'>('sujet')
  const [msg, setMsg] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const subs = useApi<{ name: string }[]>(`/api/subjects?serie=${serie}`)
  const list = useApi<{ ok: boolean; exams: { id: string; serie: Serie; subject: string; year: number; kind: string }[] }>('/api/exams/all')

  async function send(files: FileList | null) {
    if (!files || files.length === 0) return
    setBusy(true)
    setMsg(null)
    let done = 0
    for (const f of Array.from(files)) {
      const q = new URLSearchParams({ serie, subject: subject.trim(), year, kind, name: f.name })
      const r = await fetch(`/api/admin/exams/upload?${q}`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'content-type': f.type || 'application/octet-stream', 'x-upload': '1' },
        body: f,
      })
      const j = await r.json().catch(() => ({ ok: false, message: 'Erreur.' }))
      if (!j.ok) { setMsg(`${f.name} : ${j.message ?? 'refusé'}`); break }
      done++
    }
    setBusy(false)
    if (done > 0) { setMsg(`${done} fichier(s) ajouté(s).`); invalidate() }
  }

  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold">Sujets du BAC</h2>
      <div className="mt-2 space-y-3 rounded-2xl border bg-card p-4 text-sm">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <select value={serie} onChange={(e) => setSerie(e.target.value as Serie)} className="rounded-lg border bg-background px-3 py-2.5">
            {SERIES.map((s) => <option key={s} value={s}>{SERIE_LABEL[s]}</option>)}
          </select>
          <input value={subject} onChange={(e) => setSubject(e.target.value)} list="exam-subjects" placeholder="Matière" className="rounded-lg border bg-background px-3 py-2.5" />
          <datalist id="exam-subjects">{(subs ?? []).map((s) => <option key={s.name} value={s.name} />)}</datalist>
          <select value={year} onChange={(e) => setYear(e.target.value)} className="rounded-lg border bg-background px-3 py-2.5">
            {[2025, 2024, 2023, 2022, 2021].map((y) => <option key={y} value={y}>{y}</option>)}
          </select>
          <select value={kind} onChange={(e) => setKind(e.target.value as 'sujet' | 'corrige')} className="rounded-lg border bg-background px-3 py-2.5">
            <option value="sujet">Sujet</option>
            <option value="corrige">Corrigé</option>
          </select>
        </div>
        <input
          type="file"
          multiple
          accept="application/pdf,image/png,image/jpeg,image/webp"
          disabled={busy || !subject.trim()}
          onChange={(e) => { void send(e.target.files); e.target.value = '' }}
          className="w-full text-sm"
        />
        <p className="text-xs text-muted-foreground">PDF ou photos, 8 Mo maximum par fichier. Choisis d'abord la série, la matière, l'année et le type.</p>
        {busy && <p>Envoi…</p>}
        {msg && <p className="font-semibold">{msg}</p>}
        {list?.ok && list.exams.length > 0 && (
          <ul className="divide-y rounded-xl border">
            {list.exams.map((e) => (
              <li key={e.id} className="flex items-center justify-between gap-2 px-3 py-2">
                <a href={`/api/exams/file/${e.id}`} target="_blank" rel="noreferrer" className="min-w-0 truncate underline-offset-4 hover:underline">
                  {SERIE_LABEL[e.serie]} · {e.subject} · {e.year} · {e.kind === 'sujet' ? 'Sujet' : 'Corrigé'}
                </a>
                <button type="button" onClick={() => { if (confirm('Supprimer ce fichier ?')) void post('/api/admin/exams/delete', { id: e.id }) }} className="shrink-0 text-destructive">Supprimer</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}


function PendingRow({ p, decide }: { p: PaymentRow; decide: (arg: { paymentId: string; approve: boolean }) => Promise<unknown> }) {
  return (
    <li className="space-y-2 p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span>
          <span className="font-semibold">{p.name}</span>
          <span className="block text-xs text-muted-foreground">
            En attente depuis le {new Date(p.createdAt).toLocaleString('fr-FR')} · {p.amount} F
          </span>
        </span>
        <span className="flex gap-2">
          <button
            type="button"
            onClick={() => decide({ paymentId: p.id, approve: true })}
            className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
          >
            Valider
          </button>
          <button type="button" onClick={() => decide({ paymentId: p.id, approve: false })} className="rounded-lg border px-3 py-1.5 text-xs font-semibold hover:bg-secondary">Refuser</button>
        </span>
      </div>
      <p className="text-xs text-muted-foreground">
        L'élève a appuyé sur « J'ai payé ». Vérifie dans ton application Wave que {p.amount} F sont arrivés, puis valide.
      </p>
    </li>
  )
}
