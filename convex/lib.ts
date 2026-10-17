import { getAuthUserId } from "@convex-dev/auth/server"
import type { MutationCtx, QueryCtx } from "./_generated/server"

type Ctx = QueryCtx | MutationCtx

/** Profil de l'utilisateur connecté (ou null). L'identité vient toujours du serveur. */
export async function getMyProfile(ctx: Ctx) {
  const userId = await getAuthUserId(ctx)
  if (!userId) return null
  return await ctx.db
    .query("profiles")
    .withIndex("by_user", (q) => q.eq("userId", userId))
    .unique()
}

export async function isAdminCtx(ctx: Ctx): Promise<boolean> {
  const profile = await getMyProfile(ctx)
  return !!profile && profile.role === "admin"
}

/** Accès aux cours : administrateur, ou élève dont le paiement Wave a été validé. */
export function hasAccess(profile: { role: "student" | "admin"; paid?: boolean } | null): boolean {
  return !!profile && (profile.role === "admin" || profile.paid === true)
}
