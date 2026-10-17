import { v } from "convex/values"
import { internal } from "./_generated/api"
import { action } from "./_generated/server"
import { generate } from "./llm"
import { DAILY_LIMIT } from "./tutorData"

const BASE_RULES = `Tu es « Prof Terminale+ », un professeur ivoirien bienveillant qui prépare des élèves de Terminale au BAC en Côte d'Ivoire (programme officiel de la DPFC / MENA).
Règles :
- Réponds TOUJOURS en français simple, phrases courtes, comme à un élève débutant. Définis chaque mot technique la première fois.
- Appuie-toi sur le résumé de cours fourni. S'il manque une information, complète avec tes connaissances du programme de Terminale, sans inventer.
- Pour les formules, utilise LaTeX : $...$ en ligne et $$...$$ pour une formule seule. Utilise du Markdown (titres courts, listes).
- Donne des exemples proches de la vie en Côte d'Ivoire (marché, FCFA, taxis, cacao, téléphone, football) quand c'est utile.
- Ne fais jamais le devoir à la place de l'élève : guide-le par étapes, puis propose un petit exercice.
- Si la question n'a aucun rapport avec les études, ramène poliment l'élève vers la leçon.
- Si tu n'es pas sûr, dis-le et invite l'élève à vérifier avec son professeur ou son manuel.`

export const ask = action({
  args: {
    chapterSlug: v.string(),
    question: v.string(),
    mode: v.union(v.literal("chat"), v.literal("prof")),
  },
  handler: async (ctx, args): Promise<{ ok: boolean; message?: string }> => {
    const question = args.question.trim().slice(0, 1200)
    if (args.mode === "chat" && question.length < 2) {
      return { ok: false, message: "Écris ta question." }
    }

    const info = await ctx.runQuery(internal.tutorData.context, {
      chapterSlug: args.chapterSlug,
    })
    if (!info.ok) {
      return { ok: false, message: "Connecte-toi pour discuter avec le professeur." }
    }
    if (info.usedToday >= DAILY_LIMIT) {
      return {
        ok: false,
        message: `Tu as atteint la limite de ${DAILY_LIMIT} questions pour aujourd'hui. Reviens demain, bon courage !`,
      }
    }

    const userText =
      args.mode === "prof"
        ? "Explique-moi cette leçon comme si tu étais mon professeur en classe."
        : question

    const modeInstruction =
      args.mode === "prof"
        ? `MODE PROFESSEUR : fais un vrai cours oral et progressif sur la leçon « ${info.chapterTitle} », en 5 étapes numérotées : 1) l'idée en une phrase, 2) pourquoi c'est utile (exemple ivoirien), 3) les notions clés expliquées pas à pas, 4) un exemple corrigé détaillé, 5) les 3 erreurs classiques à éviter au BAC. Termine par une question de vérification pour l'élève. Longueur : 350 à 600 mots.`
        : `MODE QUESTIONS : réponds précisément à la question de l'élève, en 150 à 350 mots, puis propose une mini-vérification.`

    const system = `${BASE_RULES}

Élève : ${info.name}, série ${info.serie}. Matière : ${info.subjectName}. Leçon : ${info.chapterTitle}.
${modeInstruction}

--- RÉSUMÉ DE COURS DE RÉFÉRENCE ---
${info.content.slice(0, 9000)}`

    const messages = [
      { role: "system", content: system },
      ...info.history.map((m) => ({ role: m.role, content: m.content })),
      { role: "user", content: userText },
    ]

    let text = ""
    try {
      text = await generate(messages as { role: "system" | "user" | "assistant"; content: string }[])
    } catch {
      return {
        ok: false,
        message: "Le professeur est momentanément indisponible. Réessaie dans un instant.",
      }
    }
    if (!text) {
      return { ok: false, message: "Je n'ai pas pu répondre. Reformule ta question." }
    }

    await ctx.runMutation(internal.tutorData.saveMessage, {
      userId: info.userId,
      chapterSlug: args.chapterSlug,
      role: "user",
      mode: args.mode,
      content: args.mode === "prof" ? "🎓 Explique-moi la leçon, professeur." : question,
    })
    await ctx.runMutation(internal.tutorData.saveMessage, {
      userId: info.userId,
      chapterSlug: args.chapterSlug,
      role: "assistant",
      mode: args.mode,
      content: text,
    })
    return { ok: true }
  },
})
