// Leçons approfondies (cours détaillé, exemples corrigés, exercices avec corrigés).
// Clé = clé de la leçon (commune aux séries C et D) ou slug complet (ex. "d-pc-cinematique").
import { DEEP_MATHS_1 } from "./deep/maths1"
import { DEEP_MATHS_2 } from "./deep/maths2"
import { DEEP_MATHS_3 } from "./deep/maths3"
import { DEEP_PC_1 } from "./deep/pc1"
import { DEEP_PC_2 } from "./deep/pc2"
import { DEEP_PC_3 } from "./deep/pc3"
import { DEEP_PC_4 } from "./deep/pc4"
import { DEEP_PC_5 } from "./deep/pc5"
import { DEEP_SVT } from "./deep/svt1"
import { DEEP_MATHS_4 } from "./deep/maths4"
import { DEEP_PC_6 } from "./deep/pc6"
import { DEEP_FR_1 } from "./deep/fr1"
import { DEEP_FR_2 } from "./deep/fr2"

export const DEEP: Record<string, string> = { ...DEEP_MATHS_1, ...DEEP_MATHS_2, ...DEEP_MATHS_3, ...DEEP_PC_1, ...DEEP_PC_2, ...DEEP_PC_3, ...DEEP_PC_4, ...DEEP_PC_5, ...DEEP_SVT, ...DEEP_MATHS_4, ...DEEP_PC_6, ...DEEP_FR_1, ...DEEP_FR_2 }
