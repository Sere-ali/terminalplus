import { v } from "convex/values"
import { internalMutation } from "./_generated/server"
import { CHAPTERS, SUBJECTS } from "./content/catalogue"

/**
 * Charge le catalogue officiel dans la base.
 *  - Ne touche jamais aux leçons modifiées à la main sauf avec overwrite = true.
 *  - Une leçon avec contenu est publiée, sans contenu elle reste en brouillon.
 * Usage : npx convex run seed:run '{"serie":"D"}'
 */
export const run = internalMutation({
  args: {
    serie: v.union(v.literal("A"), v.literal("C"), v.literal("D")),
    overwrite: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const overwrite = args.overwrite ?? false
    let subjectsAdded = 0
    let chaptersAdded = 0
    let chaptersUpdated = 0

    for (const s of SUBJECTS.filter((x) => x.serie === args.serie)) {
      const existing = await ctx.db
        .query("subjects")
        .withIndex("by_slug", (q) => q.eq("slug", s.slug))
        .unique()
      if (!existing) {
        await ctx.db.insert("subjects", s)
        subjectsAdded++
      } else {
        await ctx.db.patch(existing._id, s)
      }
    }

    for (const c of CHAPTERS.filter((x) => x.serie === args.serie)) {
      const status = c.content.trim().length > 0 ? ("published" as const) : ("draft" as const)
      const existing = await ctx.db
        .query("chapters")
        .withIndex("by_slug", (q) => q.eq("slug", c.slug))
        .unique()
      if (!existing) {
        await ctx.db.insert("chapters", { ...c, status, updatedAt: Date.now() })
        chaptersAdded++
      } else if (overwrite || existing.content.trim().length === 0) {
        await ctx.db.patch(existing._id, { ...c, status, updatedAt: Date.now() })
        chaptersUpdated++
      } else {
        // On garde le contenu existant, mais on met à jour l'ordre et le thème.
        await ctx.db.patch(existing._id, { order: c.order, theme: c.theme })
      }
    }
    return { serie: args.serie, subjectsAdded, chaptersAdded, chaptersUpdated }
  },
})
