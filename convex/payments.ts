import { v } from "convex/values"
import { mutation, query } from "./_generated/server"
import type { MutationCtx, QueryCtx } from "./_generated/server"
import { getMyProfile, hasAccess, isAdminCtx } from "./lib"

/** Prix de l'accès complet, en francs CFA (payé une seule fois par Wave). */
export const PRICE_FCFA = 1000

async function readSetting(ctx: QueryCtx | MutationCtx, key: string) {
  return await ctx.db
    .query("settings")
    .withIndex("by_key", (q) => q.eq("key", key))
    .unique()
}

/** Informations de paiement affichées à l'élève (prix + numéro Wave de l'administrateur). */
export const config = query({
  args: {},
  handler: async (ctx) => {
    const wave = await readSetting(ctx, "waveNumber")
    return { price: PRICE_FCFA, waveNumber: wave?.value ?? null }
  },
})

/** État du paiement de l'élève connecté. */
export const myStatus = query({
  args: {},
  handler: async (ctx) => {
    const profile = await getMyProfile(ctx)
    if (!profile) return null
    const last = await ctx.db
      .query("payments")
      .withIndex("by_user", (q) => q.eq("userId", profile.userId))
      .order("desc")
      .first()
    return {
      hasAccess: hasAccess(profile),
      last: last
        ? { status: last.status, reference: last.reference, createdAt: last.createdAt }
        : null,
    }
  },
})

/** L'élève déclare son paiement Wave (identifiant de transaction + numéro utilisé). */
export const submit = mutation({
  args: { reference: v.string(), phone: v.string() },
  handler: async (ctx, args) => {
    const profile = await getMyProfile(ctx)
    if (!profile) return { ok: false as const, message: "Connecte-toi d'abord." }
    if (hasAccess(profile)) return { ok: true as const }

    const reference = args.reference.trim().toUpperCase().replace(/\s+/g, "").slice(0, 40)
    const phone = args.phone.trim().slice(0, 20)
    if (reference.length < 6) {
      return {
        ok: false as const,
        message: "Entre l'identifiant de transaction Wave (il est dans le SMS ou le reçu Wave).",
      }
    }
    if (phone.replace(/\D/g, "").length < 8) {
      return { ok: false as const, message: "Entre le numéro Wave avec lequel tu as payé." }
    }

    const mine = await ctx.db
      .query("payments")
      .withIndex("by_user", (q) => q.eq("userId", profile.userId))
      .collect()
    if (mine.some((p) => p.status === "pending")) {
      return {
        ok: false as const,
        message: "Ton paiement est déjà en attente de validation. Patiente un peu.",
      }
    }
    const same = await ctx.db
      .query("payments")
      .withIndex("by_reference", (q) => q.eq("reference", reference))
      .collect()
    if (same.some((p) => p.status !== "rejected")) {
      return { ok: false as const, message: "Cet identifiant de transaction a déjà été utilisé." }
    }

    await ctx.db.insert("payments", {
      userId: profile.userId,
      name: profile.name,
      phone,
      reference,
      amount: PRICE_FCFA,
      status: "pending",
      createdAt: Date.now(),
    })
    return { ok: true as const }
  },
})

/** Administrateur : paiements en attente et derniers paiements traités. */
export const adminList = query({
  args: {},
  handler: async (ctx) => {
    if (!(await isAdminCtx(ctx))) return { ok: false as const }
    const pending = await ctx.db
      .query("payments")
      .withIndex("by_status", (q) => q.eq("status", "pending"))
      .collect()
    const decided = (await ctx.db.query("payments").order("desc").take(40)).filter(
      (p) => p.status !== "pending",
    )
    const wave = await readSetting(ctx, "waveNumber")
    const shape = (p: (typeof pending)[number]) => ({
      id: p._id,
      name: p.name,
      phone: p.phone,
      reference: p.reference,
      amount: p.amount,
      status: p.status,
      createdAt: p.createdAt,
    })
    return {
      ok: true as const,
      waveNumber: wave?.value ?? "",
      pending: pending.map(shape),
      decided: decided.map(shape),
    }
  },
})

/** Administrateur : valider ou refuser un paiement. */
export const decide = mutation({
  args: { paymentId: v.id("payments"), approve: v.boolean() },
  handler: async (ctx, args) => {
    if (!(await isAdminCtx(ctx))) return { ok: false as const }
    const payment = await ctx.db.get(args.paymentId)
    if (!payment || payment.status !== "pending") return { ok: false as const }
    await ctx.db.patch(payment._id, {
      status: args.approve ? "approved" : "rejected",
      decidedAt: Date.now(),
    })
    if (args.approve) {
      const profile = await ctx.db
        .query("profiles")
        .withIndex("by_user", (q) => q.eq("userId", payment.userId))
        .unique()
      if (profile) await ctx.db.patch(profile._id, { paid: true, paidAt: Date.now() })
    }
    return { ok: true as const }
  },
})

/** Administrateur : donner ou retirer l'accès à un élève (ex. paiement reçu en espèces). */
export const setAccess = mutation({
  args: { profileId: v.id("profiles"), paid: v.boolean() },
  handler: async (ctx, args) => {
    if (!(await isAdminCtx(ctx))) return { ok: false as const }
    const profile = await ctx.db.get(args.profileId)
    if (!profile || profile.role === "admin") return { ok: false as const }
    await ctx.db.patch(profile._id, { paid: args.paid, paidAt: args.paid ? Date.now() : undefined })
    return { ok: true as const }
  },
})

/** Administrateur : enregistrer le numéro Wave qui reçoit les paiements. */
export const setWaveNumber = mutation({
  args: { value: v.string() },
  handler: async (ctx, args) => {
    if (!(await isAdminCtx(ctx))) return { ok: false as const }
    const value = args.value.trim().slice(0, 30)
    const existing = await readSetting(ctx, "waveNumber")
    if (existing) await ctx.db.patch(existing._id, { value })
    else await ctx.db.insert("settings", { key: "waveNumber", value })
    return { ok: true as const }
  },
})
