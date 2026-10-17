import { getAuthUserId } from "@convex-dev/auth/server"
import { v } from "convex/values"
import { query } from "./_generated/server"
import { getMyProfile, hasAccess } from "./lib"

const serieValidator = v.union(v.literal("A"), v.literal("C"), v.literal("D"))

/** Matières d'une série (public : le visiteur peut découvrir le catalogue). */
export const subjects = query({
  args: { serie: serieValidator },
  handler: async (ctx, args) => {
    const subjects = await ctx.db
      .query("subjects")
      .withIndex("by_serie", (q) => q.eq("serie", args.serie))
      .collect()
    const out: {
      slug: string
      name: string
      emoji: string
      description: string
      total: number
      published: number
    }[] = []
    for (const s of subjects) {
      const chapters = await ctx.db
        .query("chapters")
        .withIndex("by_subject", (q) => q.eq("subjectSlug", s.slug))
        .collect()
      out.push({
        slug: s.slug,
        name: s.name,
        emoji: s.emoji,
        description: s.description,
        total: chapters.length,
        published: chapters.filter((c) => c.status === "published").length,
      })
    }
    return out
  },
})

/** Liste des leçons d'une matière (titres seulement, pas le contenu). */
export const chapterList = query({
  args: { subjectSlug: v.string() },
  handler: async (ctx, args) => {
    const subject = await ctx.db
      .query("subjects")
      .withIndex("by_slug", (q) => q.eq("slug", args.subjectSlug))
      .unique()
    if (!subject) return null
    const chapters = await ctx.db
      .query("chapters")
      .withIndex("by_subject", (q) => q.eq("subjectSlug", args.subjectSlug))
      .collect()
    return {
      subject: {
        slug: subject.slug,
        name: subject.name,
        emoji: subject.emoji,
        serie: subject.serie,
        description: subject.description,
      },
      chapters: chapters.map((c) => ({
        slug: c.slug,
        title: c.title,
        theme: c.theme,
        order: c.order,
        status: c.status,
      })),
    }
  },
})

/** Contenu d'une leçon : réservé aux comptes connectés ayant payé (ou administrateur). Les brouillons sont réservés à l'admin. */
export const chapter = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx)
    if (!userId) {
      return { ok: false as const, code: "LOGIN_REQUIRED" as const }
    }
    const profile = await getMyProfile(ctx)
    if (!hasAccess(profile)) {
      return { ok: false as const, code: "PAYMENT_REQUIRED" as const }
    }
    const c = await ctx.db
      .query("chapters")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique()
    if (!c) return { ok: false as const, code: "NOT_FOUND" as const }
    const isAdmin = profile?.role === "admin"
    if (c.status !== "published" && !isAdmin) {
      return { ok: false as const, code: "NOT_PUBLISHED" as const }
    }
    const subject = await ctx.db
      .query("subjects")
      .withIndex("by_slug", (q) => q.eq("slug", c.subjectSlug))
      .unique()
    const siblings = await ctx.db
      .query("chapters")
      .withIndex("by_subject", (q) => q.eq("subjectSlug", c.subjectSlug))
      .collect()
    const visible = siblings
      .filter((s) => s.status === "published" || isAdmin)
      .sort((a, b) => a.order - b.order)
    const idx = visible.findIndex((s) => s.slug === c.slug)
    return {
      ok: true as const,
      chapter: {
        slug: c.slug,
        title: c.title,
        theme: c.theme,
        content: c.content,
        status: c.status,
        serie: c.serie,
        subjectSlug: c.subjectSlug,
      },
      subjectName: subject?.name ?? "",
      subjectEmoji: subject?.emoji ?? "📘",
      prev: idx > 0 ? { slug: visible[idx - 1].slug, title: visible[idx - 1].title } : null,
      next:
        idx >= 0 && idx < visible.length - 1
          ? { slug: visible[idx + 1].slug, title: visible[idx + 1].title }
          : null,
    }
  },
})
