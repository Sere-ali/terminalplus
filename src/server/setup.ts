import { exec, one, getPool } from './db'
import { hashPassword } from './security'
import { createHash } from 'node:crypto'
import { CHAPTERS, SUBJECTS } from './content/catalogue'

const DDL = `
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  identifier text NOT NULL UNIQUE,
  password_hash text NOT NULL,
  session_version integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS profiles (
  user_id uuid PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  name text NOT NULL,
  serie text NOT NULL CHECK (serie IN ('A','C','D')),
  role text NOT NULL DEFAULT 'student' CHECK (role IN ('student','admin')),
  paid boolean NOT NULL DEFAULT false,
  paid_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS subjects (
  slug text PRIMARY KEY,
  serie text NOT NULL,
  name text NOT NULL,
  emoji text NOT NULL,
  description text NOT NULL,
  ord integer NOT NULL
);

CREATE TABLE IF NOT EXISTS chapters (
  slug text PRIMARY KEY,
  subject_slug text NOT NULL,
  serie text NOT NULL,
  title text NOT NULL,
  theme text NOT NULL,
  ord integer NOT NULL,
  content text NOT NULL DEFAULT '',
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('published','draft')),
  updated_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE chapters ADD COLUMN IF NOT EXISTS content_hash text;
ALTER TABLE chapters ADD COLUMN IF NOT EXISTS edited boolean NOT NULL DEFAULT false;
CREATE INDEX IF NOT EXISTS chapters_subject_idx ON chapters(subject_slug, ord);

CREATE TABLE IF NOT EXISTS progress (
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  chapter_slug text NOT NULL,
  done boolean NOT NULL DEFAULT false,
  favorite boolean NOT NULL DEFAULT false,
  updated_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (user_id, chapter_slug)
);

CREATE TABLE IF NOT EXISTS chat_messages (
  id bigserial PRIMARY KEY,
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  chapter_slug text NOT NULL,
  role text NOT NULL CHECK (role IN ('user','assistant')),
  mode text NOT NULL CHECK (mode IN ('chat','prof')),
  content text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS chat_user_chapter_idx ON chat_messages(user_id, chapter_slug, id);
CREATE INDEX IF NOT EXISTS chat_user_time_idx ON chat_messages(user_id, created_at);

CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name text NOT NULL,
  phone text NOT NULL,
  reference text NOT NULL,
  amount integer NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  created_at timestamptz NOT NULL DEFAULT now(),
  decided_at timestamptz
);
ALTER TABLE payments ADD COLUMN IF NOT EXISTS checkout_id text;
CREATE INDEX IF NOT EXISTS payments_user_idx ON payments(user_id, created_at);
CREATE INDEX IF NOT EXISTS payments_ref_idx ON payments(reference);
CREATE INDEX IF NOT EXISTS payments_status_idx ON payments(status, created_at);

CREATE TABLE IF NOT EXISTS exams (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  serie text NOT NULL CHECK (serie IN ('A','C','D')),
  subject text NOT NULL,
  year integer NOT NULL,
  kind text NOT NULL CHECK (kind IN ('sujet','corrige')),
  file_name text NOT NULL,
  mime text NOT NULL,
  data bytea NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS exams_serie_idx ON exams(serie, year);

CREATE TABLE IF NOT EXISTS settings (
  key text PRIMARY KEY,
  value text NOT NULL
);
`

/** Identifiant(s) du super administrateur (comparés en minuscules). */
export const ADMIN_IDENTIFIERS = ['ali']

async function seedCatalogue() {
  for (const s of SUBJECTS) {
    await exec(
      `INSERT INTO subjects (slug, serie, name, emoji, description, ord)
       VALUES ($1,$2,$3,$4,$5,$6)
       ON CONFLICT (slug) DO UPDATE SET serie=$2, name=$3, emoji=$4, description=$5, ord=$6`,
      [s.slug, s.serie, s.name, s.emoji, s.description, s.order],
    )
  }
  for (const c of CHAPTERS) {
    const status = c.content.trim().length > 0 ? 'published' : 'draft'
    // Une leçon est mise à jour quand une version plus riche est livrée, sauf si le super admin l'a modifiée à la main.
    await exec(
      `INSERT INTO chapters (slug, subject_slug, serie, title, theme, ord, content, status, content_hash)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
       ON CONFLICT (slug) DO UPDATE SET
         ord = EXCLUDED.ord,
         theme = EXCLUDED.theme,
         content = CASE WHEN btrim(chapters.content) = '' OR (NOT chapters.edited AND chapters.content_hash IS DISTINCT FROM EXCLUDED.content_hash AND btrim(EXCLUDED.content) <> '')
                        THEN EXCLUDED.content ELSE chapters.content END,
         status = CASE WHEN btrim(chapters.content) = '' THEN EXCLUDED.status ELSE chapters.status END,
         content_hash = CASE WHEN btrim(chapters.content) = '' OR (NOT chapters.edited AND chapters.content_hash IS DISTINCT FROM EXCLUDED.content_hash AND btrim(EXCLUDED.content) <> '')
                        THEN EXCLUDED.content_hash ELSE chapters.content_hash END`,
      [c.slug, c.subjectSlug, c.serie, c.title, c.theme, c.order, c.content, status, createHash('sha1').update(c.content).digest('hex')],
    )
  }
}

/** Crée le compte du super administrateur au premier démarrage si ADMIN_BOOTSTRAP_PASSWORD est défini. */
async function bootstrapAdmin() {
  const password = process.env.ADMIN_BOOTSTRAP_PASSWORD
  if (!password || password.length < 8) return
  const identifier = (process.env.ADMIN_BOOTSTRAP_IDENTIFIER ?? 'ali').trim().toLowerCase()
  const existing = await one<{ id: string }>('SELECT id FROM users WHERE identifier = $1', [identifier])
  if (existing) return
  const hash = await hashPassword(password)
  const user = await one<{ id: string }>(
    'INSERT INTO users (identifier, password_hash) VALUES ($1,$2) RETURNING id',
    [identifier, hash],
  )
  if (!user) return
  await exec(
    `INSERT INTO profiles (user_id, name, serie, role, paid) VALUES ($1,$2,'D','admin',true)
     ON CONFLICT (user_id) DO NOTHING`,
    [user.id, process.env.ADMIN_BOOTSTRAP_NAME ?? 'Ali'],
  )
}

let ready: Promise<void> | undefined

/** Prépare la base une seule fois par démarrage : tables, leçons, compte administrateur. */
export function ensureReady(): Promise<void> {
  if (!ready) {
    ready = (async () => {
      const client = await getPool().connect()
      try {
        await client.query('SELECT pg_advisory_lock(481516)')
        await client.query(DDL)
      } finally {
        await client.query('SELECT pg_advisory_unlock(481516)').catch(() => {})
        client.release()
      }
      await seedCatalogue()
      await bootstrapAdmin()
    })().catch((e) => {
      ready = undefined
      throw e
    })
  }
  return ready
}
