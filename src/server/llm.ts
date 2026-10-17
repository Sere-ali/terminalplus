export type ChatMsg = { role: 'system' | 'user' | 'assistant'; content: string }

/** Anthropic exige : premier message « user », rôles alternés. */
function normalize(messages: ChatMsg[]) {
  const out: { role: 'user' | 'assistant'; content: string }[] = []
  for (const m of messages) {
    if (m.role === 'system') continue
    if (out.length === 0 && m.role === 'assistant') continue
    const last = out[out.length - 1]
    if (last && last.role === m.role) last.content += '\n\n' + m.content
    else out.push({ role: m.role, content: m.content })
  }
  return out
}

export function tutorEnabled(): boolean {
  return !!process.env.ANTHROPIC_API_KEY
}

/** Génère la réponse du professeur virtuel avec l'API Anthropic (ANTHROPIC_API_KEY). */
export async function generate(messages: ChatMsg[]): Promise<string> {
  const key = process.env.ANTHROPIC_API_KEY
  if (!key) throw new Error('ANTHROPIC_API_KEY manquant')
  const system = messages
    .filter((m) => m.role === 'system')
    .map((m) => m.content)
    .join('\n\n')
  const res = await fetch(process.env.ANTHROPIC_API_URL ?? 'https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-5-5',
      max_tokens: 1800,
      temperature: 0.4,
      system,
      messages: normalize(messages),
    }),
  })
  if (!res.ok) throw new Error(`Anthropic API error ${res.status}`)
  const data = (await res.json()) as { content?: { type: string; text?: string }[] }
  return (data.content ?? [])
    .filter((c) => c.type === 'text')
    .map((c) => c.text ?? '')
    .join('')
    .trim()
}
