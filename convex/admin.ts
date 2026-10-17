import { v } from "convex/values"
import { mutation, query } from "./_generated/server"
import { isAdminCtx } from "./lib"

/** Tableau de bord du super administrateur. */
export const overview = query({
  args: {},
  handler: async (ctx) => {
    if (!(await isAdminCtx(ctx))) {
      return { ok: false as const, code: "FORBIDDEN" as const }
    }
    const profiles = await ctx.db.query("profiles").collect()
    const chapters = await ctx.db.query("chapters").collect()
    const subjects = await ctx.db.query("subjects").collect()

    const bySerie = (["A", "C", "D"] as const).map((serie) => ({
      serie,
      students: profiles.filter((p) => p.serie === serie && p.role === "student").length,
      subjects: subjects
        .filter((s) => s.serie === serie)
        .sort((a, b) => a.order - b.order)
        .map((s) => {
          const list = chapters.filter((c) => c.subjectSlug === s.slug)
          return {
            slug: s.slug,
            name: s.name,
            emoji: s.emoji,
            total: list.length,
            published: list.filter((c) => c.status === "published").length,
          }
        }),
    }))

    const recent = [...profiles]
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(0, 25)
      .map((p) => ({
        id: p._id,
        name: p.name,
        serie: p.serie,
        role: p.role,
        createdAt: p.createdAt,
      }))

    return {
      ok: true as const,
      totalUsers: profiles.length,
      bySerie,
      recent,
    }
  },
})

/** Contenu brut d'une leçon pour l'éditeur. */
export const getChapterForEdit = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    if (!(await isAdminCtx(ctx))) return { ok: false as const, code: "FORBIDDEN" as const }
    const c = await ctx.db
      .query("chapters")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique()
    if (!c) return { ok: false as const, code: "NOT_FOUND" as const }
    return { ok: true as const, chapter: c }
  },
})

/** Modifier / publier une leçon. */
export const saveChapter = mutation({
  args: {
    slug: v.string(),
    title: v.string(),
    content: v.string(),
    status: v.union(v.literal("published"), v.literal("draft")),
  },
  handler: async (ctx, args) => {
    if (!(await isAdminCtx(ctx))) return { ok: false as const, code: "FORBIDDEN" as const }
    const c = await ctx.db
      .query("chapters")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique()
    if (!c) return { ok: false as const, code: "NOT_FOUND" as const }
    await ctx.db.patch(c._id, {
      title: args.title.trim().slice(0, 160),
      content: args.content,
      status: args.status,
      updatedAt: Date.now(),
    })
    return { ok: true as const }
  },
})
