import crypto from 'node:crypto'

// --- Mots de passe : scrypt (intégré à Node, sans dépendance) ---
const scrypt = (password: string, salt: Buffer, keylen: number) =>
  new Promise<Buffer>((resolve, reject) =>
    crypto.scrypt(password, salt, keylen, { N: 16384, r: 8, p: 1 }, (err, key) =>
      err ? reject(err) : resolve(key),
    ),
  )

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.randomBytes(16)
  const key = await scrypt(password, salt, 32)
  return `scrypt$${salt.toString('base64')}$${key.toString('base64')}`
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [kind, saltB64, keyB64] = stored.split('$')
  if (kind !== 'scrypt' || !saltB64 || !keyB64) return false
  const expected = Buffer.from(keyB64, 'base64')
  const actual = await scrypt(password, Buffer.from(saltB64, 'base64'), expected.length)
  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual)
}

// --- Sessions : jeton signé (HMAC-SHA256) dans un cookie httpOnly ---
const COOKIE = 'tp_session'
const MAX_AGE = 60 * 60 * 24 * 30 // 30 jours

function secret(): string {
  const s = process.env.SESSION_SECRET
  if (!s || s.length < 16) throw new Error('SESSION_SECRET est manquant ou trop court.')
  return s
}

const b64url = (buf: Buffer | string) => Buffer.from(buf).toString('base64url')

export function signSession(uid: string, version: number): string {
  const payload = b64url(JSON.stringify({ uid, v: version, exp: Date.now() + MAX_AGE * 1000 }))
  const sig = crypto.createHmac('sha256', secret()).update(payload).digest('base64url')
  return `${payload}.${sig}`
}

export function readSession(token: string | undefined): { uid: string; v: number } | null {
  if (!token) return null
  const [payload, sig] = token.split('.')
  if (!payload || !sig) return null
  const expected = crypto.createHmac('sha256', secret()).update(payload).digest('base64url')
  const a = Buffer.from(sig)
  const b = Buffer.from(expected)
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null
  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'))
    if (typeof data.uid !== 'string' || typeof data.exp !== 'number' || data.exp < Date.now()) return null
    return { uid: data.uid, v: Number(data.v) || 0 }
  } catch {
    return null
  }
}

export function getCookie(request: Request, name = COOKIE): string | undefined {
  const header = request.headers.get('cookie')
  if (!header) return undefined
  for (const part of header.split(';')) {
    const [k, ...rest] = part.trim().split('=')
    if (k === name) return decodeURIComponent(rest.join('='))
  }
  return undefined
}

export function sessionCookie(token: string, request: Request): string {
  const secure = new URL(request.url).protocol === 'https:' || request.headers.get('x-forwarded-proto') === 'https'
  return `${COOKIE}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${MAX_AGE}${secure ? '; Secure' : ''}`
}

export function clearCookie(): string {
  return `${COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`
}

// --- Limitation des tentatives (en mémoire, par identifiant + adresse) ---
const attempts = new Map<string, { count: number; reset: number }>()

export function tooManyAttempts(key: string, max = 10, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now()
  const entry = attempts.get(key)
  if (!entry || entry.reset < now) {
    attempts.set(key, { count: 1, reset: now + windowMs })
    return false
  }
  entry.count += 1
  return entry.count > max
}

export function clearAttempts(key: string) {
  attempts.delete(key)
}

// --- Appareil : un compte = un appareil (cookie long, illisible par les scripts) ---
export const DEVICE_COOKIE = 'tp_dev'
export function deviceCookie(id: string, request: Request): string {
  const secure = new URL(request.url).protocol === 'https:' || request.headers.get('x-forwarded-proto') === 'https'
  return `${DEVICE_COOKIE}=${id}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 24 * 730}${secure ? '; Secure' : ''}`
}
