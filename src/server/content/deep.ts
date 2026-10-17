// Leçons approfondies (cours détaillé, exemples corrigés, exercices avec corrigés).
// Clé = clé de la leçon (commune aux séries C et D) ou slug complet (ex. "d-pc-cinematique").
import { DEEP_MATHS_1 } from "./deep/maths1"
import { DEEP_MATHS_2 } from "./deep/maths2"
import { DEEP_MATHS_3 } from "./deep/maths3"

export const DEEP: Record<string, string> = { ...DEEP_MATHS_1, ...DEEP_MATHS_2, ...DEEP_MATHS_3 }
