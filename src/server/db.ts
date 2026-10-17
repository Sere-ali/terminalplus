import pg from 'pg'

let pool: pg.Pool | undefined

/** Connexion PostgreSQL (variable d'environnement DATABASE_URL, fournie par Render). */
export function getPool(): pg.Pool {
  if (!pool) {
    const url = process.env.DATABASE_URL
    if (!url) throw new Error('DATABASE_URL est manquant.')
    const host = new URL(url).hostname
    // Adresse interne Render (sans point) ou locale : pas de SSL. Adresse externe : SSL.
    const useSsl = process.env.PGSSL === 'disable' ? false : host.includes('.') && host !== 'localhost'
    pool = new pg.Pool({
      connectionString: url,
      max: 6,
      ssl: useSsl ? { rejectUnauthorized: false } : undefined,
    })
  }
  return pool
}

export async function rows<T = any>(text: string, params: unknown[] = []): Promise<T[]> {
  const res = await getPool().query(text, params as any[])
  return res.rows as T[]
}

export async function one<T = any>(text: string, params: unknown[] = []): Promise<T | null> {
  const r = await rows<T>(text, params)
  return r[0] ?? null
}

export async function exec(text: string, params: unknown[] = []): Promise<number> {
  const res = await getPool().query(text, params as any[])
  return res.rowCount ?? 0
}

/** Exécute plusieurs requêtes dans une transaction (tout réussit ou rien n'est enregistré). */
export async function withTx<T>(fn: (q: (text: string, params?: unknown[]) => Promise<any[]>) => Promise<T>): Promise<T> {
  const client = await getPool().connect()
  try {
    await client.query('BEGIN')
    const result = await fn(async (text, params = []) => (await client.query(text, params as any[])).rows)
    await client.query('COMMIT')
    return result
  } catch (e) {
    await client.query('ROLLBACK').catch(() => {})
    throw e
  } finally {
    client.release()
  }
}
