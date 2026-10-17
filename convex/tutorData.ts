import { getAuthUserId } from "@convex-dev/auth/server"
import { v } from "convex/values"
import { internalMutation, internalQuery, query } from "./_generated/server"

export const DAILY_LIMIT = 40

/** Contexte nécessaire au professeur virtuel : leçon + historique + quota du jour. */
export const context = internalQuery({
  args: { chapterSlug: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx)
    if (!userId) return { ok: false as const, code: "LOGIN_REQUIRED" as const }

    const profile = await ctx.db
      .query("profiles")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .unique()
    if (!profile) return { ok: false as const, code: "PROFILE_REQUIRED" as const }

    const chapter = await ctx.db
      .query("chapters")
      .withIndex("by_slug", (q) => q.eq("slug", args.chapterSlug))
      .unique()
    if (!chapter || (chapter.status !== "published" && profile.role !== "admin")) {
      return { ok: false as const, code: "NOT_FOUND" as const }
    }
    const subject = await ctx.db
      .query("subjects")
      .withIndex("by_slug", (q) => q.eq("slug", chapter.subjectSlug))
      .unique()

    const since = Date.now() - 24 * 60 * 60 * 1000
    const recent = await ctx.db
      .query("chatMessages")
      .withIndex("by_user_time", (q) => q.eq("userId", userId).gte("createdAt", since))
      .collect()
    const usedToday = recent.filter((m) => m.role === "user").length

    const history = await ctx.db
      .query("chatMessages")
      .withIndex("by_user_chapter", (q) =>
        q.eq("userId", userId).eq("chapterSlug", args.chapterSlug),
      )
      .order("desc")
      .take(8)

    return {
      ok: true as const,
      userId,
      name: profile.name,
      serie: profile.serie,
      chapterTitle: chapter.title,
      subjectName: subject?.name ?? "",
      content: chapter.content,
      usedToday,
      history: history.reverse().map((m) => ({ role: m.role, content: m.content })),
    }
  },
})

export const saveMessage = internalMutation({
  args: {
    userId: v.id("users"),
    chapterSlug: v.string(),
    role: v.union(v.literal("user"), v.literal("assistant")),
    mode: v.union(v.literal("chat"), v.literal("prof")),
    content: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("chatMessages", { ...args, createdAt: Date.now() })
  },
})

/** Historique visible par l'élève pour la leçon courante. */
export const myMessages = query({
  args: { chapterSlug: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx)
    if (!userId) return []
    const rows = await ctx.db
      .query("chatMessages")
      .withIndex("by_user_chapter", (q) =>
        q.eq("userId", userId).eq("chapterSlug", args.chapterSlug),
      )
      .order("desc")
      .take(30)
    return rows.reverse().map((m) => ({
      id: m._id,
      role: m.role,
      mode: m.mode,
      content: m.content,
    }))
  },
})
