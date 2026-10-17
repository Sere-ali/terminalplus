import { createFileRoute } from '@tanstack/react-router'

// Toute l'API (/api/...) est traitée côté serveur par src/server/api.ts.
// Import dynamique : ce code (PostgreSQL, mots de passe) ne part jamais dans le navigateur.
async function serve(request: Request, splat: string) {
  const { handle } = await import('../server/api')
  return handle(request, '/' + (splat ?? ''))
}

export const Route = createFileRoute('/api/$')({
  server: {
    handlers: {
      GET: ({ request, params }) => serve(request, (params as any)._splat),
      POST: ({ request, params }) => serve(request, (params as any)._splat),
    },
  },
})
