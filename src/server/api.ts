import { ADMIN_IDENTIFIERS, ensureReady } from './setup'
import { exec, one, rows, withTx } from './db'
import {
  clearAttempts,
  clearCookie,
  getCookie,
  hashPassword,
  readSession,
  sessionCookie,
  signSession,
  tooManyAttempts,
  verifyPassword,
} from './security'
import { generate, tutorEnabled } from './llm'
import { BASE_RULES } from './tutor-rules'

const PRICE_FCFA = 1100
const DEFAULT_WAVE_NUMBER = '05 86 18 96 63'
const DAILY_LIMIT = 40
const SERIES = ['A', 'C', 'D']

type Profile = { name: string; serie: 'A' | 'C' | 'D'; role: 'student' | 'admin'; paid: boolean }
type Session = { uid: string; identifier: string; profile: Profile | null }
type Ctx = {
  request: Request
  url: URL
  params: Record<string, string>
  session: Session | null
  body: any
  setCookie?: string
}
type Handler = (ctx: Ctx) => Promise<Response | unknown>

// ---------- Utilitaires ----------
function json(data: unknown, status = 200, extra: Record<string, string> = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...extra },
  })
}
const fail = (message: string, status = 400, code?: string) => json({ ok: false, message, code }, status)

const hasAccess = (p: Profile | null) => !!p && (p.role === 'admin' || p.paid === true)
const isAdmin = (s: Session | null) => !!s?.profile && s.profile.role === 'admin'
const clientIp = (r: Request) => (r.headers.get('x-forwarded-for') ?? 'local').split(',')[0].trim()
const ms = (d: Date | null) => (d ? d.getTime() : 0)

async function getSession(request: Request): Promise<Session | null> {
  const tok = readSession(getCookie(request))
  if (!tok) return null
  const u = await one<any>(
    `SELECT u.id, u.identifier, u.session_version, p.name, p.serie, p.role, p.paid
     FROM users u LEFT JOIN profiles p ON p.user_id = u.id WHERE u.id = $1`,
    [tok.uid],
  )
  if (!u || u.session_version !== tok.v) return null
  return {
    uid: u.id,
    identifier: u.identifier,
    profile: u.name ? { name: u.name, serie: u.serie, role: u.role, paid: u.paid } : null,
  }
}

function cleanIdentifier(raw: unknown): string | null {
  if (typeof raw !== 'string') return null
  const v = raw.trim().toLowerCase().replace(/\s+/g, ' ')
  return v.length >= 2 && v.length <= 60 ? v : null
}

async function readSetting(key: string) {
  return one<{ value: string }>('SELECT value FROM settings WHERE key = $1', [key])
}

// ---------- Routes ----------
const routes: { method: string; pattern: string; handler: Handler }[] = []
function route(method: string, pattern: string, handler: Handler) {
  routes.push({ method, pattern, handler })
}

function match(pattern: string, path: string): Record<string, string> | null {
  const a = pattern.split('/').filter(Boolean)
  const b = path.split('/').filter(Boolean)
  if (a.length !== b.length) return null
  const params: Record<string, string> = {}
  for (let i = 0; i < a.length; i++) {
    if (a[i].startsWith(':')) params[a[i].slice(1)] = decodeURIComponent(b[i])
    else if (a[i] !== b[i]) return null
  }
  return params
}

route('GET', '/health', async () => ({ ok: true }))

// --- Session et compte ---
route('GET', '/me', async ({ session }) => {
  if (!session) return { authenticated: false }
  return {
    authenticated: true,
    identifier: session.identifier,
    profile: session.profile,
    hasAccess: hasAccess(session.profile),
  }
})

route('POST', '/auth/signup', async ({ request, body }) => {
  const identifier = cleanIdentifier(body?.identifier)
  const password = typeof body?.password === 'string' ? body.password : ''
  if (!identifier) return fail('Choisis un identifiant (2 à 60 caractères).')
  if (password.length < 8 || password.length > 200) return fail('Le mot de passe doit avoir 8 caractères minimum.')
  if (tooManyAttempts(`signup:${clientIp(request)}`, 20, 60 * 60 * 1000)) {
    return fail('Trop de tentatives. Réessaie plus tard.', 429)
  }
  const hash = await hashPassword(password)
  let user: { id: string; session_version: number } | null
  try {
    user = await one('INSERT INTO users (identifier, password_hash) VALUES ($1,$2) RETURNING id, session_version', [
      identifier,
      hash,
    ])
  } catch (e: any) {
    if (e?.code === '23505') return fail('Cet identifiant existe déjà. Connecte-toi.', 409, 'EXISTS')
    throw e
  }
  return json({ ok: true }, 200, { 'set-cookie': sessionCookie(signSession(user!.id, user!.session_version), request) })
})

route('POST', '/auth/login', async ({ request, body }) => {
  const identifier = cleanIdentifier(body?.identifier)
  const password = typeof body?.password === 'string' ? body.password : ''
  const key = `login:${clientIp(request)}:${identifier}`
  if (tooManyAttempts(key)) return fail('Trop de tentatives. Réessaie dans quelques minutes.', 429)
  const user = identifier
    ? await one<any>('SELECT id, password_hash, session_version FROM users WHERE identifier = $1', [identifier])
    : null
  const ok = user ? await verifyPassword(password, user.password_hash) : false
  if (!user || !ok) return fail('Identifiant ou mot de passe incorrect.', 401, 'BAD_CREDENTIALS')
  clearAttempts(key)
  return json({ ok: true }, 200, { 'set-cookie': sessionCookie(signSession(user.id, user.session_version), request) })
})

route('POST', '/auth/logout', async () => json({ ok: true }, 200, { 'set-cookie': clearCookie() }))

route('POST', '/auth/change-password', async ({ request, session, body }) => {
  if (!session) return fail('Connecte-toi d\'abord.', 401)
  const current = typeof body?.current === 'string' ? body.current : ''
  const next = typeof body?.next === 'string' ? body.next : ''
  if (next.length < 8 || next.length > 200) return fail('Le nouveau mot de passe doit avoir 8 caractères minimum.')
  const user = await one<any>('SELECT password_hash FROM users WHERE id = $1', [session.uid])
  if (!user || !(await verifyPassword(current, user.password_hash))) return fail('Mot de passe actuel incorrect.', 403)
  const row = await one<{ session_version: number }>(
    'UPDATE users SET password_hash = $2, session_version = session_version + 1 WHERE id = $1 RETURNING session_version',
    [session.uid, await hashPassword(next)],
  )
  return json({ ok: true }, 200, { 'set-cookie': sessionCookie(signSession(session.uid, row!.session_version), request) })
})

route('POST', '/profile', async ({ session, body }) => {
  if (!session) return fail('Connecte-toi d\'abord.', 401)
  if (session.profile) return { ok: true }
  const name = typeof body?.name === 'string' ? body.name.trim().slice(0, 60) : ''
  if (name.length < 2) return fail('Indique ton nom (2 lettres minimum).')
  if (!SERIES.includes(body?.serie)) return fail('Choisis ta série.')
  const role = ADMIN_IDENTIFIERS.includes(session.identifier) ? 'admin' : 'student'
  await exec(
    'INSERT INTO profiles (user_id, name, serie, role) VALUES ($1,$2,$3,$4) ON CONFLICT (user_id) DO NOTHING',
    [session.uid, name, body.serie, role],
  )
  return { ok: true }
})

route('POST', '/profile/serie', async ({ session, body }) => {
  if (!session?.profile) return fail('Connecte-toi d\'abord.', 401)
  if (!SERIES.includes(body?.serie)) return fail('Série invalide.')
  await exec('UPDATE profiles SET serie = $2 WHERE user_id = $1', [session.uid, body.serie])
  return { ok: true }
})

// --- Catalogue ---
route('GET', '/subjects', async ({ url }) => {
  const serie = url.searchParams.get('serie') ?? ''
  if (!SERIES.includes(serie)) return []
  return rows(
    `SELECT s.slug, s.name, s.emoji, s.description,
            count(c.slug)::int AS total,
            (count(c.slug) FILTER (WHERE c.status = 'published'))::int AS published
     FROM subjects s LEFT JOIN chapters c ON c.subject_slug = s.slug
     WHERE s.serie = $1 GROUP BY s.slug ORDER BY s.ord`,
    [serie],
  )
})

route('GET', '/subjects/:slug/chapters', async ({ params }) => {
  const subject = await one<any>('SELECT slug, name, emoji, serie, description FROM subjects WHERE slug = $1', [params.slug])
  if (!subject) return null
  const chapters = await rows(
    'SELECT slug, title, theme, ord AS "order", status FROM chapters WHERE subject_slug = $1 ORDER BY ord',
    [params.slug],
  )
  return { subject, chapters }
})

route('GET', '/chapters/:slug', async ({ params, session }) => {
  if (!session) return { ok: false, code: 'LOGIN_REQUIRED' }
  if (!hasAccess(session.profile)) return { ok: false, code: 'PAYMENT_REQUIRED' }
  const c = await one<any>(
    'SELECT slug, subject_slug, serie, title, theme, content, status FROM chapters WHERE slug = $1',
    [params.slug],
  )
  if (!c) return { ok: false, code: 'NOT_FOUND' }
  const admin = isAdmin(session)
  if (c.status !== 'published' && !admin) return { ok: false, code: 'NOT_PUBLISHED' }
  const subject = await one<any>('SELECT name, emoji FROM subjects WHERE slug = $1', [c.subject_slug])
  const visible = await rows<any>(
    `SELECT slug, title FROM chapters WHERE subject_slug = $1 AND ($2 OR status = 'published') ORDER BY ord`,
    [c.subject_slug, admin],
  )
  const idx = visible.findIndex((s) => s.slug === c.slug)
  return {
    ok: true,
    chapter: {
      slug: c.slug,
      title: c.title,
      theme: c.theme,
      content: c.content,
      status: c.status,
      serie: c.serie,
      subjectSlug: c.subject_slug,
    },
    subjectName: subject?.name ?? '',
    subjectEmoji: subject?.emoji ?? '📘',
    prev: idx > 0 ? visible[idx - 1] : null,
    next: idx >= 0 && idx < visible.length - 1 ? visible[idx + 1] : null,
  }
})

// --- Progression ---
route('GET', '/progress', async ({ session }) => {
  if (!session) return []
  return rows(
    'SELECT chapter_slug AS "chapterSlug", done, favorite FROM progress WHERE user_id = $1',
    [session.uid],
  )
})

route('POST', '/progress/toggle', async ({ session, body }) => {
  if (!session?.profile || !hasAccess(session.profile)) return fail('Accès refusé.', 403)
  const slug = typeof body?.chapterSlug === 'string' ? body.chapterSlug : ''
  const field = body?.field
  if (!slug || (field !== 'done' && field !== 'favorite')) return fail('Requête invalide.')
  const exists = await one('SELECT 1 FROM chapters WHERE slug = $1', [slug])
  if (!exists) return fail('Leçon introuvable.', 404)
  await exec(
    `INSERT INTO progress (user_id, chapter_slug, done, favorite)
     VALUES ($1, $2, $3, $4)
     ON CONFLICT (user_id, chapter_slug) DO UPDATE SET
       done = CASE WHEN $5 = 'done' THEN NOT progress.done ELSE progress.done END,
       favorite = CASE WHEN $5 = 'favorite' THEN NOT progress.favorite ELSE progress.favorite END,
       updated_at = now()`,
    [session.uid, slug, field === 'done', field === 'favorite', field],
  )
  return { ok: true }
})

// --- Professeur virtuel ---
route('GET', '/tutor/messages', async ({ session, url }) => {
  if (!session || !hasAccess(session.profile)) return []
  const slug = url.searchParams.get('chapterSlug') ?? ''
  const list = await rows<any>(
    `SELECT id::text AS id, role, mode, content FROM chat_messages
     WHERE user_id = $1 AND chapter_slug = $2 ORDER BY id DESC LIMIT 30`,
    [session.uid, slug],
  )
  return list.reverse()
})

route('POST', '/tutor/ask', async ({ session, body }) => {
  if (!session?.profile) return { ok: false, message: 'Connecte-toi pour discuter avec le professeur.' }
  if (!hasAccess(session.profile)) return { ok: false, message: 'Débloque tes cours (1 100 F par Wave) pour parler au professeur.' }
  const mode = body?.mode === 'prof' ? 'prof' : 'chat'
  const question = typeof body?.question === 'string' ? body.question.trim().slice(0, 1200) : ''
  if (mode === 'chat' && question.length < 2) return { ok: false, message: 'Écris ta question.' }
  if (!tutorEnabled()) return { ok: false, message: "Le professeur virtuel n'est pas encore activé. Reviens bientôt !" }

  const chapter = await one<any>(
    `SELECT c.slug, c.title, c.content, c.status, s.name AS subject_name
     FROM chapters c LEFT JOIN subjects s ON s.slug = c.subject_slug WHERE c.slug = $1`,
    [body?.chapterSlug],
  )
  if (!chapter || (chapter.status !== 'published' && !isAdmin(session))) return { ok: false, message: 'Leçon introuvable.' }

  const used = await one<{ n: number }>(
    `SELECT count(*)::int AS n FROM chat_messages WHERE user_id = $1 AND role = 'user' AND created_at > now() - interval '24 hours'`,
    [session.uid],
  )
  if ((used?.n ?? 0) >= DAILY_LIMIT) {
    return { ok: false, message: `Tu as atteint la limite de ${DAILY_LIMIT} questions pour aujourd'hui. Reviens demain, bon courage !` }
  }
  const history = (
    await rows<any>(
      `SELECT role, content FROM chat_messages WHERE user_id = $1 AND chapter_slug = $2 ORDER BY id DESC LIMIT 8`,
      [session.uid, chapter.slug],
    )
  ).reverse()

  const userText = mode === 'prof' ? 'Explique-moi cette leçon comme si tu étais mon professeur en classe.' : question
  const modeInstruction =
    mode === 'prof'
      ? `MODE PROFESSEUR : fais un vrai cours oral et progressif sur la leçon « ${chapter.title} », en 5 étapes numérotées : 1) l'idée en une phrase, 2) pourquoi c'est utile (exemple ivoirien), 3) les notions clés expliquées pas à pas, 4) un exemple corrigé détaillé, 5) les 3 erreurs classiques à éviter au BAC. Termine par une question de vérification pour l'élève. Longueur : 350 à 600 mots.`
      : `MODE QUESTIONS : réponds précisément à la question de l'élève, en 150 à 350 mots, puis propose une mini-vérification.`
  const system = `${BASE_RULES}

Élève : ${session.profile.name}, série ${session.profile.serie}. Matière : ${chapter.subject_name ?? ''}. Leçon : ${chapter.title}.
${modeInstruction}

--- RÉSUMÉ DE COURS DE RÉFÉRENCE ---
${String(chapter.content).slice(0, 9000)}`

  let text = ''
  try {
    text = await generate([
      { role: 'system', content: system },
      ...history.map((m: any) => ({ role: m.role, content: m.content })),
      { role: 'user', content: userText },
    ])
  } catch {
    return { ok: false, message: 'Le professeur est momentanément indisponible. Réessaie dans un instant.' }
  }
  if (!text) return { ok: false, message: "Je n'ai pas pu répondre. Reformule ta question." }

  await withTx(async (q) => {
    await q('INSERT INTO chat_messages (user_id, chapter_slug, role, mode, content) VALUES ($1,$2,$3,$4,$5)', [
      session.uid, chapter.slug, 'user', mode, mode === 'prof' ? '🎓 Explique-moi la leçon, professeur.' : question,
    ])
    await q('INSERT INTO chat_messages (user_id, chapter_slug, role, mode, content) VALUES ($1,$2,$3,$4,$5)', [
      session.uid, chapter.slug, 'assistant', mode, text,
    ])
  })
  return { ok: true }
})

// --- Paiement Wave ---
route('GET', '/payments/config', async () => {
  const wave = await readSetting('waveNumber')
  return { price: PRICE_FCFA, waveNumber: wave?.value || DEFAULT_WAVE_NUMBER, auto: !!process.env.WAVE_API_KEY }
})

// Paiement automatique : Wave Checkout (nécessite WAVE_API_KEY, compte Wave Business)
const WAVE_API = 'https://api.wave.com/v1/checkout/sessions'
async function waveFetch(url: string, init?: RequestInit) {
  const r = await fetch(url, {
    ...init,
    headers: { Authorization: `Bearer ${process.env.WAVE_API_KEY}`, 'content-type': 'application/json' },
  })
  const data: any = await r.json().catch(() => ({}))
  return { ok: r.ok, data }
}

route('POST', '/payments/checkout', async ({ session, request, url }) => {
  if (!session?.profile) return fail("Connecte-toi d'abord.", 401)
  if (hasAccess(session.profile)) return { ok: true, already: true }
  if (!process.env.WAVE_API_KEY) return fail("Le paiement automatique n'est pas encore activé.", 503)
  const proto = request.headers.get('x-forwarded-proto') ?? url.protocol.replace(':', '')
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host') ?? url.host
  const origin = process.env.PUBLIC_URL || `${proto}://${host}`
  const id = crypto.randomUUID()
  const w = await waveFetch(WAVE_API, {
    method: 'POST',
    body: JSON.stringify({
      amount: String(PRICE_FCFA),
      currency: 'XOF',
      client_reference: id,
      success_url: `${origin}/paiement?wave=ok`,
      error_url: `${origin}/paiement?wave=erreur`,
    }),
  })
  if (!w.ok || !w.data?.wave_launch_url) return fail("Impossible de lancer Wave pour l'instant. Réessaie dans un instant.", 502)
  await exec(
    `INSERT INTO payments (id, user_id, name, phone, reference, amount, checkout_id) VALUES ($1,$2,$3,'wave-auto',$4,$5,$6)`,
    [id, session.uid, session.profile.name, 'WAVE-' + String(w.data.id), PRICE_FCFA, String(w.data.id)],
  )
  return { ok: true, url: w.data.wave_launch_url }
})

// Vérifie côté serveur auprès de Wave (on ne fait jamais confiance à la redirection).
route('POST', '/payments/verify', async ({ session }) => {
  if (!session?.profile) return fail("Connecte-toi d'abord.", 401)
  if (hasAccess(session.profile)) return { ok: true, paid: true }
  if (!process.env.WAVE_API_KEY) return { ok: true, paid: false }
  const list = await rows<any>(
    `SELECT id, checkout_id FROM payments WHERE user_id = $1 AND status = 'pending' AND checkout_id IS NOT NULL
     ORDER BY created_at DESC LIMIT 3`,
    [session.uid],
  )
  for (const p of list) {
    const w = await waveFetch(`${WAVE_API}/${encodeURIComponent(p.checkout_id)}`)
    if (w.ok && w.data?.payment_status === 'succeeded' && String(w.data?.currency) === 'XOF' && Number(w.data?.amount) >= PRICE_FCFA) {
      await withTx(async (q) => {
        await q(`UPDATE payments SET status = 'approved', decided_at = now() WHERE id = $1 AND status = 'pending'`, [p.id])
        await q('UPDATE profiles SET paid = true, paid_at = now() WHERE user_id = $1', [session.uid])
      })
      return { ok: true, paid: true }
    }
    if (w.ok && (w.data?.checkout_status === 'expired' || w.data?.payment_status === 'cancelled')) {
      await exec(`UPDATE payments SET status = 'rejected', decided_at = now() WHERE id = $1 AND status = 'pending'`, [p.id])
    }
  }
  return { ok: true, paid: false }
})

route('GET', '/payments/status', async ({ session }) => {
  if (!session?.profile) return null
  const last = await one<any>(
    'SELECT status, reference, created_at FROM payments WHERE user_id = $1 AND checkout_id IS NULL ORDER BY created_at DESC LIMIT 1',
    [session.uid],
  )
  return {
    hasAccess: hasAccess(session.profile),
    last: last ? { status: last.status, reference: last.reference, createdAt: ms(last.created_at) } : null,
  }
})

route('POST', '/payments/submit', async ({ session, body }) => {
  if (!session?.profile) return fail("Connecte-toi d'abord.", 401)
  if (hasAccess(session.profile)) return { ok: true }
  const pending = await one("SELECT 1 FROM payments WHERE user_id = $1 AND status = 'pending' AND checkout_id IS NULL", [session.uid])
  if (pending) return fail('Ton paiement est déjà en attente de validation. Patiente un peu.')
  const reference = 'DEMANDE-' + crypto.randomUUID().slice(0, 8).toUpperCase()
  const phone = '-'
  await exec(
    'INSERT INTO payments (user_id, name, phone, reference, amount) VALUES ($1,$2,$3,$4,$5)',
    [session.uid, session.profile.name, phone, reference, PRICE_FCFA],
  )
  return { ok: true }
})

// --- Administration ---
function admin(handler: Handler): Handler {
  return async (ctx) => (isAdmin(ctx.session) ? handler(ctx) : fail('Accès réservé au super administrateur.', 403, 'FORBIDDEN'))
}

route('GET', '/admin/overview', async ({ session }) => {
  if (!isAdmin(session)) return { ok: false, code: 'FORBIDDEN' }
  const counts = await rows<any>(
    `SELECT serie, count(*) FILTER (WHERE role = 'student')::int AS students FROM profiles GROUP BY serie`,
  )
  const subjects = await rows<any>(
    `SELECT s.slug, s.serie, s.name, s.emoji, count(c.slug)::int AS total,
            (count(c.slug) FILTER (WHERE c.status = 'published'))::int AS published
     FROM subjects s LEFT JOIN chapters c ON c.subject_slug = s.slug GROUP BY s.slug ORDER BY s.ord`,
  )
  const people = await rows<any>(
    `SELECT p.user_id, p.name, p.serie, p.role, p.paid, p.created_at, u.identifier
     FROM profiles p JOIN users u ON u.id = p.user_id ORDER BY p.created_at DESC LIMIT 300`,
  )
  const total = await one<{ n: number; paid: number }>(
    `SELECT count(*)::int AS n, (count(*) FILTER (WHERE role = 'student' AND paid))::int AS paid FROM profiles`,
  )
  return {
    ok: true,
    totalUsers: total?.n ?? 0,
    paidCount: total?.paid ?? 0,
    totalReceived: (await one<{ s: number }>("SELECT COALESCE(sum(amount),0)::int AS s FROM payments WHERE status = 'approved'"))?.s ?? 0,
    bySerie: (['A', 'C', 'D'] as const).map((serie) => ({
      serie,
      students: counts.find((c) => c.serie === serie)?.students ?? 0,
      subjects: subjects
        .filter((s) => s.serie === serie)
        .map((s) => ({ slug: s.slug, name: s.name, emoji: s.emoji, total: s.total, published: s.published })),
    })),
    recent: people.map((p) => ({
      id: p.user_id,
      name: p.name,
      email: p.identifier,
      serie: p.serie,
      role: p.role,
      paid: p.role === 'admin' || p.paid === true,
      createdAt: ms(p.created_at),
    })),
  }
})

route('GET', '/admin/payments', async ({ session }) => {
  if (!isAdmin(session)) return { ok: false }
  const shape = (p: any) => ({
    id: p.id, name: p.name, phone: p.phone, reference: p.reference,
    amount: p.amount, status: p.status, createdAt: ms(p.created_at),
  })
  const pending = await rows("SELECT * FROM payments WHERE status = 'pending' AND checkout_id IS NULL ORDER BY created_at")
  const decided = await rows("SELECT * FROM payments WHERE status <> 'pending' ORDER BY created_at DESC LIMIT 40")
  const wave = await readSetting('waveNumber')
  return { ok: true, waveNumber: wave?.value || DEFAULT_WAVE_NUMBER, pending: pending.map(shape), decided: decided.map(shape) }
})

route('POST', '/admin/payments/decide', admin(async ({ body }) => {
  const approve = body?.approve === true
  const done = await withTx(async (q) => {
    const upd = await q(
      `UPDATE payments SET status = $2, decided_at = now() WHERE id = $1 AND status = 'pending' RETURNING user_id`,
      [body?.paymentId, approve ? 'approved' : 'rejected'],
    )
    if (!upd[0]) return false
    if (approve) await q('UPDATE profiles SET paid = true, paid_at = now() WHERE user_id = $1', [upd[0].user_id])
    return true
  })
  return { ok: done }
}))

route('POST', '/admin/access', admin(async ({ body }) => {
  const n = await exec(
    `UPDATE profiles SET paid = $2, paid_at = CASE WHEN $2 THEN now() ELSE NULL END
     WHERE user_id = $1 AND role = 'student'`,
    [body?.profileId, body?.paid === true],
  )
  return { ok: n > 0 }
}))

route('POST', '/admin/wave', admin(async ({ body }) => {
  const value = String(body?.value ?? '').trim().slice(0, 30)
  await exec(
    `INSERT INTO settings (key, value) VALUES ('waveNumber', $1)
     ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value`,
    [value],
  )
  return { ok: true }
}))

route('POST', '/admin/reset-password', admin(async ({ body }) => {
  const pw = String(body?.newPassword ?? '')
  if (pw.length < 8 || pw.length > 200) return { ok: false, message: 'Le mot de passe doit avoir 8 caractères minimum.' }
  const n = await exec(
    `UPDATE users SET password_hash = $2, session_version = session_version + 1
     WHERE id = $1 AND id IN (SELECT user_id FROM profiles WHERE role = 'student')`,
    [body?.profileId, await hashPassword(pw)],
  )
  return n > 0 ? { ok: true } : { ok: false, message: 'Élève introuvable.' }
}))

route('POST', '/admin/edit-student', admin(async ({ body }) => {
  const name = String(body?.name ?? '').trim().slice(0, 80)
  const identifier = cleanIdentifier(body?.identifier)
  if (name.length < 2) return { ok: false, message: 'Nom trop court.' }
  if (!identifier) return { ok: false, message: 'Identifiant invalide (2 à 60 caractères).' }
  if (!SERIES.includes(body?.serie)) return { ok: false, message: 'Série invalide.' }
  if (ADMIN_IDENTIFIERS.includes(identifier)) return { ok: false, message: 'Identifiant réservé.' }
  const target = await one<any>(
    `SELECT u.id, u.identifier FROM users u JOIN profiles p ON p.user_id = u.id WHERE u.id = $1 AND p.role = 'student'`,
    [body?.profileId],
  )
  if (!target) return { ok: false, message: 'Élève introuvable.' }
  try {
    await withTx(async (q: any) => {
      await q('UPDATE profiles SET name = $2, serie = $3 WHERE user_id = $1', [target.id, name, body.serie])
      if (identifier !== target.identifier) {
        await q('UPDATE users SET identifier = $2, session_version = session_version + 1 WHERE id = $1', [target.id, identifier])
      }
    })
  } catch (e: any) {
    if (e?.code === '23505') return { ok: false, message: 'Cet identifiant est déjà utilisé.' }
    throw e
  }
  return { ok: true }
}))

route('POST', '/admin/delete-student', admin(async ({ body }) => {
  const n = await exec(
    `DELETE FROM users WHERE id = $1 AND id IN (SELECT user_id FROM profiles WHERE role = 'student')`,
    [body?.profileId],
  )
  return { ok: n > 0 }
}))

route('GET', '/admin/chapter', async ({ session, url }) => {
  if (!isAdmin(session)) return { ok: false, code: 'FORBIDDEN' }
  const c = await one<any>('SELECT slug, title, content, status FROM chapters WHERE slug = $1', [url.searchParams.get('slug')])
  return c ? { ok: true, chapter: c } : { ok: false, code: 'NOT_FOUND' }
})

route('POST', '/admin/chapter', admin(async ({ body }) => {
  const status = body?.status === 'published' ? 'published' : 'draft'
  const n = await exec(
    'UPDATE chapters SET title = $2, content = $3, status = $4, edited = true, updated_at = now() WHERE slug = $1',
    [body?.slug, String(body?.title ?? '').trim().slice(0, 160), String(body?.content ?? ''), status],
  )
  return { ok: n > 0 }
}))

// ---------- Sujets de BAC ----------
const EXAM_MIMES = ['application/pdf', 'image/png', 'image/jpeg', 'image/webp']
const EXAM_MAX = 8 * 1024 * 1024

route('GET', '/exams', async ({ session }) => {
  if (!session?.profile) return fail("Connecte-toi d'abord.", 401)
  if (!hasAccess(session.profile)) return fail('Débloque tes cours pour voir les sujets.', 403, 'PAYMENT_REQUIRED')
  const serie = SERIES.includes(String(session.profile.serie)) ? session.profile.serie : 'D'
  const list = await rows<any>(
    'SELECT id, serie, subject, year, kind, file_name FROM exams WHERE serie = $1 ORDER BY year DESC, subject, kind DESC',
    [isAdmin(session) ? (SERIES.includes(session.profile.serie) ? session.profile.serie : serie) : serie],
  )
  return { ok: true, serie, exams: list.map((e) => ({ id: e.id, subject: e.subject, year: e.year, kind: e.kind, fileName: e.file_name })) }
})

route('GET', '/exams/all', async ({ session, url }) => {
  if (!isAdmin(session)) return { ok: false }
  const list = await rows<any>(
    'SELECT id, serie, subject, year, kind, file_name FROM exams WHERE ($1::text IS NULL OR serie = $1) ORDER BY serie, year DESC, subject, kind DESC',
    [SERIES.includes(url.searchParams.get('serie') ?? '') ? url.searchParams.get('serie') : null],
  )
  return { ok: true, exams: list.map((e) => ({ id: e.id, serie: e.serie, subject: e.subject, year: e.year, kind: e.kind, fileName: e.file_name })) }
})

route('GET', '/exams/file/:id', async ({ session, params }) => {
  if (!hasAccess(session?.profile ?? null)) return fail('Accès refusé.', 403)
  const e = await one<any>('SELECT mime, data, file_name FROM exams WHERE id::text = $1', [params.id])
  if (!e) return fail('Introuvable.', 404)
  return new Response(e.data, {
    headers: {
      'content-type': e.mime,
      'content-disposition': `inline; filename="${String(e.file_name).replace(/[^\w.\- ]/g, '_')}"`,
      'cache-control': 'private, max-age=3600',
      'x-content-type-options': 'nosniff',
    },
  })
})

// Envoi d'un fichier (binaire brut) : réservé au Super admin, en-tête x-upload obligatoire.
route('POST', '/admin/exams/upload', admin(async ({ request, body }) => {
  if (request.headers.get('x-upload') !== '1') return fail('Requête invalide.', 400)
  const q = new URL(request.url).searchParams
  const serie = q.get('serie') ?? ''
  const subject = (q.get('subject') ?? '').trim().slice(0, 80)
  const year = Number(q.get('year'))
  const kind = q.get('kind') === 'corrige' ? 'corrige' : 'sujet'
  const mime = (request.headers.get('content-type') ?? '').split(';')[0].trim()
  const fileName = (q.get('name') ?? 'fichier').slice(0, 120)
  if (!SERIES.includes(serie) || !subject || !(year >= 2000 && year <= 2100)) return fail('Série, matière ou année invalide.')
  if (!EXAM_MIMES.includes(mime)) return fail('Fichier accepté : PDF, PNG, JPG ou WEBP.')
  const buf: Buffer = body
  if (!buf || buf.length === 0) return fail('Fichier vide.')
  if (buf.length > EXAM_MAX) return fail('Fichier trop lourd (8 Mo maximum).')
  await exec(
    'INSERT INTO exams (serie, subject, year, kind, file_name, mime, data) VALUES ($1,$2,$3,$4,$5,$6,$7)',
    [serie, subject, year, kind, fileName, mime, buf],
  )
  return { ok: true }
}))

route('POST', '/admin/exams/delete', admin(async ({ body }) => {
  const n = await exec('DELETE FROM exams WHERE id::text = $1', [String(body?.id ?? '')])
  return { ok: n > 0 }
}))

// ---------- Point d'entrée ----------
export async function handle(request: Request, path: string): Promise<Response> {
  try {
    await ensureReady()
    const url = new URL(request.url)
    let body: any = null
    if (request.method === 'POST' && path === '/admin/exams/upload') {
      const ab = await request.arrayBuffer()
      if (ab.byteLength > EXAM_MAX) return fail('Fichier trop lourd (8 Mo maximum).', 413)
      body = Buffer.from(ab)
    } else if (request.method === 'POST') {
      if (!(request.headers.get('content-type') ?? '').includes('application/json')) {
        return fail('Requête invalide.', 415)
      }
      const text = await request.text()
      if (text.length > 600_000) return fail('Requête trop volumineuse.', 413)
      try {
        body = text ? JSON.parse(text) : {}
      } catch {
        return fail('Requête invalide.')
      }
    }
    for (const r of routes) {
      if (r.method !== request.method) continue
      const params = match(r.pattern, path)
      if (!params) continue
      const session = await getSession(request)
      const out = await r.handler({ request, url, params, session, body })
      return out instanceof Response ? out : json(out)
    }
    return fail('Introuvable.', 404)
  } catch (e) {
    console.error('API error', request.method, path, e)
    return fail('Erreur du serveur. Réessaie dans un instant.', 500)
  }
}
