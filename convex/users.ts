import { getAuthUserId } from "@convex-dev/auth/server"
import { v } from "convex/values"
import { mutation, query } from "./_generated/server"
import { hasAccess } from "./lib"

/** Identifiant(s) du super administrateur (comparés en minuscules). */
const ADMIN_IDENTIFIERS = ["ali"]

const serieValidator = v.union(v.literal("A"), v.literal("C"), v.literal("D"))

/** État de la session : connecté ? profil créé ? */
export const me = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)
    if (!userId) return { authenticated: false as const }
    const user = await ctx.db.get(userId)
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique()
    return {
      authenticated: true as const,
      email: user?.email ?? null,
      profile,
      hasAccess: hasAccess(profile),
    }
  },
})

/** Crée le profil de l'élève (nom + série). Le super administrateur est reconnu par son e-mail. */
export const createProfile = mutation({
  args: { name: v.string(), serie: serieValidator },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx)
    if (!userId) return { ok: false as const, message: "Connecte-toi d'abord." }
    const name = args.name.trim().slice(0, 60)
    if (name.length < 2) return { ok: false as const, message: "Indique ton nom (2 lettres minimum)." }

    const existing = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique()
    if (existing) return { ok: true as const }

    const user = await ctx.db.get(userId)
    const isAdmin = ADMIN_IDENTIFIERS.includes((user?.email ?? "").trim().toLowerCase())

    await ctx.db.insert("profiles", {
      userId,
      name,
      serie: args.serie,
      role: isAdmin ? "admin" : "student",
      createdAt: Date.now(),
    })
    return { ok: true as const }
  },
})

/** L'élève peut changer de série (ex. erreur à l'inscription). */
export const updateSerie = mutation({
  args: { serie: serieValidator },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx)
    if (!userId) return { ok: false as const }
    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique()
    if (!profile) return { ok: false as const }
    await ctx.db.patch(profile._id, { serie: args.serie })
    return { ok: true as const }
  },
})
