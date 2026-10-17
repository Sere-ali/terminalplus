import { invalidateSessions, modifyAccountCredentials } from "@convex-dev/auth/server"
import { v } from "convex/values"
import { internal } from "./_generated/api"
import { action, internalQuery } from "./_generated/server"
import { isAdminCtx } from "./lib"

/** Vérifie que l'appelant est administrateur et retrouve l'identifiant de connexion de l'élève. */
export const lookupForReset = internalQuery({
  args: { profileId: v.id("profiles") },
  handler: async (ctx, args) => {
    if (!(await isAdminCtx(ctx))) return null
    const profile = await ctx.db.get(args.profileId)
    if (!profile || profile.role === "admin") return null
    const user = await ctx.db.get(profile.userId)
    if (!user?.email) return null
    return { userId: profile.userId, identifier: user.email }
  },
})

/** Administrateur : définir un nouveau mot de passe pour un élève qui l'a oublié. */
export const resetPassword = action({
  args: { profileId: v.id("profiles"), newPassword: v.string() },
  handler: async (ctx, args): Promise<{ ok: boolean; message?: string }> => {
    if (args.newPassword.length < 8) {
      return { ok: false, message: "Le mot de passe doit avoir 8 caractères minimum." }
    }
    const target = await ctx.runQuery(internal.adminActions.lookupForReset, {
      profileId: args.profileId,
    })
    if (!target) return { ok: false, message: "Élève introuvable ou accès refusé." }
    await modifyAccountCredentials(ctx, {
      provider: "password",
      account: { id: target.identifier, secret: args.newPassword },
    })
    await invalidateSessions(ctx, { userId: target.userId })
    return { ok: true }
  },
})
