import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"
import { authTables } from "@convex-dev/auth/server"

export default defineSchema({
  ...authTables,

  // Profil de l'élève (nom, série du BAC, rôle)
  profiles: defineTable({
    userId: v.id("users"),
    name: v.string(),
    serie: v.union(v.literal("A"), v.literal("C"), v.literal("D")),
    role: v.union(v.literal("student"), v.literal("admin")),
    createdAt: v.number(),
    // Accès payant (1 000 F par Wave) : validé par l'administrateur
    paid: v.optional(v.boolean()),
    paidAt: v.optional(v.number()),
  }).index("by_user", ["userId"]),

  // Paiements Wave déclarés par les élèves (à valider par l'administrateur)
  payments: defineTable({
    userId: v.id("users"),
    name: v.string(),
    phone: v.string(),
    reference: v.string(),
    amount: v.number(),
    status: v.union(v.literal("pending"), v.literal("approved"), v.literal("rejected")),
    createdAt: v.number(),
    decidedAt: v.optional(v.number()),
  })
    .index("by_user", ["userId"])
    .index("by_reference", ["reference"])
    .index("by_status", ["status", "createdAt"]),

  // Réglages modifiables par l'administrateur (ex. numéro Wave)
  settings: defineTable({
    key: v.string(),
    value: v.string(),
  }).index("by_key", ["key"]),

  // Matières d'une série
  subjects: defineTable({
    slug: v.string(),
    serie: v.union(v.literal("A"), v.literal("C"), v.literal("D")),
    name: v.string(),
    emoji: v.string(),
    description: v.string(),
    order: v.number(),
  })
    .index("by_serie", ["serie", "order"])
    .index("by_slug", ["slug"]),

  // Leçons / chapitres avec leur résumé de cours (Markdown + LaTeX)
  chapters: defineTable({
    slug: v.string(),
    subjectSlug: v.string(),
    serie: v.union(v.literal("A"), v.literal("C"), v.literal("D")),
    title: v.string(),
    theme: v.string(),
    order: v.number(),
    content: v.string(),
    status: v.union(v.literal("published"), v.literal("draft")),
    updatedAt: v.number(),
  })
    .index("by_subject", ["subjectSlug", "order"])
    .index("by_slug", ["slug"])
    .index("by_serie", ["serie"]),

  // Suivi de l'élève (leçon comprise / favori)
  progress: defineTable({
    userId: v.id("users"),
    chapterSlug: v.string(),
    done: v.boolean(),
    favorite: v.boolean(),
    updatedAt: v.number(),
  })
    .index("by_user", ["userId"])
    .index("by_user_chapter", ["userId", "chapterSlug"]),

  // Conversations avec l'assistant / le professeur virtuel
  chatMessages: defineTable({
    userId: v.id("users"),
    chapterSlug: v.string(),
    role: v.union(v.literal("user"), v.literal("assistant")),
    mode: v.union(v.literal("chat"), v.literal("prof")),
    content: v.string(),
    createdAt: v.number(),
  })
    .index("by_user_chapter", ["userId", "chapterSlug", "createdAt"])
    .index("by_user_time", ["userId", "createdAt"]),
})
