// Catalogue des séries, matières et leçons de Terminale (Côte d'Ivoire).
// Sources : Programmes éducatifs DPFC/MENA (Maths Tle C et D, Physique-Chimie Tle C et D, Français Tle A).
// Les leçons sans contenu sont créées en « brouillon » : elles sont visibles « bientôt disponible »
// pour l'élève et publiées dès que le résumé est rédigé.

import { MATHS_1 } from "./maths1"
import { MATHS_2 } from "./maths2"
import { MATHS_3 } from "./maths3"
import { EXTRA } from "./extra"
import { EXTRA2 } from "./extra2"
import { EXTRA3 } from "./extra3"
import { FRANCAIS as FRANCAIS_CONTENT } from "./francais"
import { LANGUES } from "./langues"
import { SVT_CONTENT } from "./svt"
import { PHILO as PHILO_CONTENT } from "./philo"

export type Serie = "A" | "C" | "D"

export type SubjectDef = {
  slug: string
  serie: Serie
  name: string
  emoji: string
  description: string
  order: number
}

export type ChapterDef = {
  slug: string
  subjectSlug: string
  serie: Serie
  title: string
  theme: string
  order: number
  content: string
}

const CONTENT: Record<string, string> = { ...MATHS_1, ...MATHS_2, ...MATHS_3, ...EXTRA, ...EXTRA2, ...EXTRA3, ...FRANCAIS_CONTENT, ...PHILO_CONTENT, ...LANGUES, ...SVT_CONTENT }

export const SUBJECTS: SubjectDef[] = [
  { slug: "d-maths", serie: "D", name: "Mathématiques", emoji: "📐", description: "Programme éducatif Tle D : fonctions, intégrales, suites, probabilités…", order: 1 },
  { slug: "d-pc", serie: "D", name: "Physique-Chimie", emoji: "⚗️", description: "Mécanique, électricité, nucléaire, chimie organique et chimie générale.", order: 2 },
  { slug: "d-svt", serie: "D", name: "SVT", emoji: "🧬", description: "Sciences de la Vie et de la Terre : génétique, immunité, nerfs, géologie.", order: 3 },
  { slug: "c-maths", serie: "C", name: "Mathématiques", emoji: "📐", description: "Programme éducatif Tle C : analyse, géométrie, transformations, arithmétique.", order: 1 },
  { slug: "c-pc", serie: "C", name: "Physique-Chimie", emoji: "⚗️", description: "Mécanique, électromagnétisme, lumière, nucléaire, chimie.", order: 2 },
  { slug: "c-svt", serie: "C", name: "SVT", emoji: "🧬", description: "Sciences de la Vie et de la Terre pour la série C.", order: 3 },
  { slug: "a-francais", serie: "A", name: "Français", emoji: "📖", description: "Lecture, langue, commentaire composé, dissertation, résumé, oral du BAC.", order: 1 },
  { slug: "a-philo", serie: "A", name: "Philosophie", emoji: "🧠", description: "Notions, auteurs et méthode de la dissertation philosophique.", order: 2 },
  { slug: "a-anglais", serie: "A", name: "Anglais", emoji: "🇬🇧", description: "Grammaire, expression écrite et compréhension de texte.", order: 3 },
  { slug: "a-allemand", serie: "A", name: "Allemand", emoji: "🇩🇪", description: "Grammaire et expression en allemand (LV2).", order: 4 },
  { slug: "a-espagnol", serie: "A", name: "Espagnol", emoji: "🇪🇸", description: "Grammaire et expression en espagnol (LV2).", order: 5 },
]

type Row = [key: string, title: string, theme: string]

function build(subjectSlug: string, serie: Serie, rows: Row[]): ChapterDef[] {
  return rows.map(([key, title, theme], i) => ({
    slug: `${subjectSlug}-${key}`,
    subjectSlug,
    serie,
    title,
    theme,
    order: i + 1,
    content: CONTENT[`${subjectSlug}-${key}`] ?? CONTENT[key] ?? "",
  }))
}

// ---------- MATHÉMATIQUES ----------
const MATHS_COMMON: Row[] = [
  ["nombres-complexes", "Nombres complexes", "Calculs algébriques"],
  ["limites-continuite", "Limites et continuité", "Fonctions"],
  ["derivabilite-etude-fonctions", "Dérivabilité et étude de fonctions", "Fonctions"],
  ["primitives", "Primitives", "Fonctions"],
  ["fonctions-logarithmes", "Fonctions logarithmes", "Fonctions"],
  ["fonctions-exponentielles", "Fonctions exponentielles et fonctions puissances", "Fonctions"],
  ["calcul-integral", "Calcul intégral", "Fonctions"],
  ["suites-numeriques", "Suites numériques", "Fonctions"],
  ["equations-differentielles", "Équations différentielles", "Fonctions"],
  ["statistiques-deux-variables", "Statistiques à deux variables", "Organisation des données"],
  ["probabilites-variable-aleatoire", "Probabilité conditionnelle et variable aléatoire", "Phénomènes aléatoires"],
]

const MATHS_D: Row[] = [
  ...MATHS_COMMON,
  ["complexes-geometrie", "Nombres complexes et géométrie du plan (similitudes directes)", "Géométrie du plan"],
]

const MATHS_C: Row[] = [
  ...MATHS_COMMON,
  ["barycentre-lignes-niveau", "Barycentre et lignes de niveau", "Géométrie du plan"],
  ["coniques", "Coniques (parabole, ellipse, hyperbole)", "Géométrie du plan"],
  ["geometrie-espace", "Géométrie analytique dans l'espace", "Géométrie de l'espace"],
  ["isometries", "Isométries du plan", "Transformations du plan"],
  ["similitudes", "Similitudes directes du plan", "Transformations du plan"],
  ["complexes-geometrie", "Nombres complexes et transformations du plan", "Transformations du plan"],
  ["divisibilite", "Divisibilité dans ℤ", "Arithmétique"],
  ["pgcd-ppcm", "PGCD, PPCM, théorèmes de Bézout et de Gauss", "Arithmétique"],
]

// ---------- PHYSIQUE-CHIMIE (programmes Tle C et Tle D) ----------
const PC_D: Row[] = [
  ["cinematique", "Cinématique du point", "Mécanique"],
  ["centre-inertie", "Mouvement du centre d'inertie d'un solide", "Mécanique"],
  ["champs-uniformes", "Mouvements dans les champs uniformes", "Mécanique"],
  ["oscillations-mecaniques", "Oscillations mécaniques libres", "Mécanique"],
  ["champ-magnetique", "Champ magnétique", "Électromagnétisme"],
  ["particule-champ-magnetique", "Mouvement d'une particule chargée dans un champ magnétique uniforme", "Électromagnétisme"],
  ["loi-laplace", "Loi de Laplace", "Électromagnétisme"],
  ["auto-induction", "Auto-induction", "Électromagnétisme"],
  ["derivateur-integrateur", "Montages dérivateur et intégrateur", "Électricité"],
  ["circuit-lc", "Oscillations électriques libres (circuit LC)", "Électricité"],
  ["circuit-rlc", "Circuit RLC série en régime sinusoïdal forcé", "Électricité"],
  ["resonance", "Résonance d'intensité", "Électricité"],
  ["puissance-sinusoidal", "Puissance en régime sinusoïdal", "Électricité"],
  ["nucleaire-spontanees", "Réactions nucléaires spontanées", "Réactions nucléaires"],
  ["nucleaire-provoquees", "Réactions nucléaires provoquées", "Réactions nucléaires"],
  ["alcools", "Les alcools", "Chimie organique"],
  ["carbonyles", "Composés carbonylés : aldéhydes et cétones", "Chimie organique"],
  ["amines", "Les amines", "Chimie organique"],
  ["acides-carboxyliques", "Acides carboxyliques et dérivés", "Chimie organique"],
  ["savon", "Fabrication du savon", "Chimie organique"],
  ["acides-amines", "Les acides α-aminés", "Chimie organique"],
  ["solutions-ph", "Solutions aqueuses – notion de pH", "Chimie générale"],
  ["acide-fort-base-forte", "Acide fort – base forte", "Chimie générale"],
  ["acide-faible-base-faible", "Acide faible – base faible", "Chimie générale"],
  ["couples-acide-base", "Couples acide/base et classification", "Chimie générale"],
  ["reactions-acido-basiques", "Réactions acido-basiques et solutions tampons", "Chimie générale"],
  ["dosage", "Dosage acido-basique", "Chimie générale"],
]

const PC_C: Row[] = [
  ["cinematique", "Cinématique du point", "Mécanique"],
  ["centre-inertie", "Mouvement du centre d'inertie d'un solide", "Mécanique"],
  ["gravitation", "Interaction gravitationnelle", "Mécanique"],
  ["champs-uniformes", "Mouvements dans les champs uniformes", "Mécanique"],
  ["oscillations-mecaniques", "Oscillations mécaniques libres", "Mécanique"],
  ["champ-magnetique", "Champ magnétique", "Électromagnétisme"],
  ["particule-champ-magnetique", "Mouvement d'une particule chargée dans un champ magnétique uniforme", "Électromagnétisme"],
  ["loi-laplace", "Loi de Laplace", "Électromagnétisme"],
  ["induction", "Induction électromagnétique", "Électromagnétisme"],
  ["auto-induction", "Auto-induction", "Électromagnétisme"],
  ["derivateur-integrateur", "Montages dérivateur et intégrateur", "Électricité"],
  ["circuit-lc", "Oscillations électriques libres (circuit LC)", "Électricité"],
  ["circuit-rlc", "Circuit RLC série en régime sinusoïdal forcé", "Électricité"],
  ["resonance", "Résonance d'intensité", "Électricité"],
  ["puissance-sinusoidal", "Puissance en régime sinusoïdal", "Électricité"],
  ["lumiere-onde", "Modèle ondulatoire de la lumière", "La lumière : onde ou particule"],
  ["lumiere-particule", "Modèle corpusculaire de la lumière", "La lumière : onde ou particule"],
  ["nucleaire-spontanees", "Réactions nucléaires spontanées", "Réactions nucléaires"],
  ["nucleaire-provoquees", "Réactions nucléaires provoquées", "Réactions nucléaires"],
  ["alcools", "Les alcools", "Chimie organique"],
  ["carbonyles", "Composés carbonylés : aldéhydes et cétones", "Chimie organique"],
  ["acides-carboxyliques", "Acides carboxyliques et dérivés", "Chimie organique"],
  ["savon", "Fabrication du savon", "Chimie organique"],
  ["solutions-ph", "Solutions aqueuses – notion de pH", "Chimie générale"],
  ["acide-fort-base-forte", "Acide fort – base forte", "Chimie générale"],
  ["acide-faible-base-faible", "Acide faible – base faible", "Chimie générale"],
  ["couples-acide-base", "Couples acide/base et classification", "Chimie générale"],
  ["reactions-acido-basiques", "Réactions acido-basiques et solutions tampons", "Chimie générale"],
  ["dosage", "Dosage acido-basique", "Chimie générale"],
]

// ---------- SVT (liste provisoire à valider avec le programme officiel) ----------
const SVT: Row[] = [
  ["heredite", "Hérédité : transmission des caractères (lois de Mendel)", "Génétique"],
  ["genetique-humaine", "Génétique humaine et anomalies chromosomiques", "Génétique"],
  ["reproduction", "Reproduction humaine et régulation hormonale", "Reproduction"],
  ["immunologie", "Défense de l'organisme : immunité et VIH/SIDA", "Immunologie"],
  ["systeme-nerveux", "Communication nerveuse : neurone, synapse, réflexe", "Neurophysiologie"],
  ["glycemie", "Régulation de la glycémie et diabète", "Physiologie"],
  ["geologie", "Géologie : tectonique des plaques et roches", "Géologie"],
]

// ---------- SÉRIE A ----------
const FRANCAIS: Row[] = [
  ["oeuvre-narrative", "Étude d'une œuvre intégrale narrative (roman)", "Lecture"],
  ["theatre", "Groupement de textes théâtraux", "Lecture"],
  ["oeuvre-poetique", "Étude d'une œuvre intégrale poétique", "Lecture"],
  ["enonciation", "L'énonciation", "Perfectionnement de la langue"],
  ["argumentation", "Les outils de l'argumentation", "Perfectionnement de la langue"],
  ["semantique", "La sémantique : le sens des mots", "Perfectionnement de la langue"],
  ["focalisation", "La focalisation (point de vue)", "Perfectionnement de la langue"],
  ["tonalites", "Les tonalités littéraires", "Perfectionnement de la langue"],
  ["figures-style", "Les figures de style", "Perfectionnement de la langue"],
  ["temps-verbaux", "Les valeurs des temps verbaux", "Perfectionnement de la langue"],
  ["rythme", "Le rythme dans le texte poétique et en prose", "Perfectionnement de la langue"],
  ["oral-bac", "Préparer l'oral du BAC (lecture méthodique)", "Savoir-faire"],
  ["resume-questions", "Réponses aux questions et résumé du texte argumentatif", "Expression écrite"],
  ["production-ecrite", "La production écrite (texte argumentatif)", "Expression écrite"],
  ["commentaire-compose", "Le commentaire composé", "Expression écrite"],
  ["dissertation-litteraire", "La dissertation littéraire", "Expression écrite"],
]

const PHILO: Row[] = [
  ["methode-dissertation", "Méthode de la dissertation philosophique", "Méthodologie"],
  ["methode-explication", "Méthode de l'explication de texte", "Méthodologie"],
  ["conscience-inconscient", "La conscience et l'inconscient", "L'homme"],
  ["liberte", "La liberté", "L'homme"],
  ["verite", "La vérité", "La connaissance"],
  ["science-technique", "La science et la technique", "La connaissance"],
  ["langage", "Le langage", "La connaissance"],
  ["etat", "L'État et le pouvoir", "La société"],
  ["justice-droit", "La justice et le droit", "La société"],
  ["travail", "Le travail", "La société"],
  ["art", "L'art et le beau", "La culture"],
  ["religion", "La religion", "La culture"],
  ["bonheur-morale", "Le bonheur et la morale", "L'action"],
]

const ANGLAIS: Row[] = [
  ["tenses", "Les temps verbaux (tenses)", "Grammaire"],
  ["modals", "Les modaux (modal verbs)", "Grammaire"],
  ["conditionals", "Les phrases conditionnelles", "Grammaire"],
  ["passive-reported", "Voix passive et discours rapporté", "Grammaire"],
  ["relatives-connectors", "Propositions relatives et connecteurs logiques", "Grammaire"],
  ["essay", "Rédiger un essai et un texte argumentatif", "Expression écrite"],
  ["comprehension", "Compréhension de texte et résumé", "Compréhension"],
]

const ALLEMAND: Row[] = [
  ["declinaison", "Les cas et la déclinaison", "Grammaire"],
  ["verbes-temps", "Les verbes : présent, prétérit, parfait", "Grammaire"],
  ["ordre-mots", "L'ordre des mots et les propositions subordonnées", "Grammaire"],
  ["verbes-modaux", "Les verbes modaux et le passif", "Grammaire"],
  ["expression", "Expression écrite et compréhension de texte", "Expression"],
]

const ESPAGNOL: Row[] = [
  ["presente-pasados", "Le présent et les temps du passé", "Grammaire"],
  ["subjuntivo", "Le subjonctif (subjuntivo)", "Grammaire"],
  ["ser-estar", "Ser, estar et les prépositions por / para", "Grammaire"],
  ["condicional-futuro", "Futur, conditionnel et phrases hypothétiques", "Grammaire"],
  ["expresion", "Expression écrite et compréhension de texte", "Expression"],
]

export const CHAPTERS: ChapterDef[] = [
  ...build("d-maths", "D", MATHS_D),
  ...build("c-maths", "C", MATHS_C),
  ...build("d-pc", "D", PC_D),
  ...build("c-pc", "C", PC_C),
  ...build("d-svt", "D", SVT),
  ...build("c-svt", "C", SVT),
  ...build("a-francais", "A", FRANCAIS),
  ...build("a-philo", "A", PHILO),
  ...build("a-anglais", "A", ANGLAIS),
  ...build("a-allemand", "A", ALLEMAND),
  ...build("a-espagnol", "A", ESPAGNOL),
]
