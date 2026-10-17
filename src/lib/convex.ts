import { preloadQuery as convexPreloadQuery } from "convex/nextjs"
import { FunctionReference, FunctionArgs } from "convex/server"

/**
 * Convex SSR helper for TanStack Start / Vite environments.
 * Passes VITE_CONVEX_URL to preloadQuery (instead of NEXT_PUBLIC_CONVEX_URL).
 */
export async function preloadQuery<Query extends FunctionReference<"query">>(
  query: Query,
  args?: FunctionArgs<Query>,
  options?: { url?: string }
) {
  const url = options?.url ?? import.meta.env.VITE_CONVEX_URL
  return convexPreloadQuery(query, args ?? ({} as any), { url })
}
