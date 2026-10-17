import { getAuthUserId } from "@convex-dev/auth/server"
import { v } from "convex/values"
import { mutation, query } from "./_generated/server"

/** Suivi de l'élève connecté : leçons comprises et favoris. */
export const mine = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)
    if (!userId) return []
    const rows = await ctx.db
      .query("progress")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect()
    return rows.map((r) => ({
      chapterSlug: r.chapterSlug,
      done: r.done,
      favorite: r.favorite,
    }))
  },
})

export const toggle = mutation({
  args: { chapterSlug: v.string(), field: v.union(v.literal("done"), v.literal("favorite")) },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx)
    if (!userId) return { ok: false as const }
    const existing = await ctx.db
      .query("progress")
      .withIndex("by_user_chapter", (q) =>
        q.eq("userId", userId).eq("chapterSlug", args.chapterSlug),
      )
      .unique()
    if (existing) {
      await ctx.db.patch(existing._id, {
        [args.field]: !existing[args.field],
        updatedAt: Date.now(),
      })
    } else {
      await ctx.db.insert("progress", {
        userId,
        chapterSlug: args.chapterSlug,
        done: args.field === "done",
        favorite: args.field === "favorite",
        updatedAt: Date.now(),
      })
    }
    return { ok: true as const }
  },
})
