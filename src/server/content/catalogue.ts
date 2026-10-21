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
import { DEEP } from "./deep"
import { HG_1 } from "./hg1"
import { HG_2 } from "./hg2"
import { HG_3 } from "./hg3"
import { ECO } from "./eco"
import { DROIT } from "./droit"
import { GESTION } from "./gestion"
import { MF } from "./mf"
import { COMPTA_CG } from "./compta_cg"
import { COMPTA_CA } from "./compta_ca"
import { COMPTA_CS } from "./compta_cs"

export type Serie = "A" | "B" | "C" | "D" | "G1" | "G2"

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

const CONTENT: Record<string, string> = { ...MATHS_1, ...MATHS_2, ...MATHS_3, ...EXTRA, ...EXTRA2, ...EXTRA3, ...FRANCAIS_CONTENT, ...PHILO_CONTENT, ...LANGUES, ...SVT_CONTENT, ...HG_1, ...HG_2, ...HG_3, ...ECO, ...DROIT, ...GESTION, ...MF, ...COMPTA_CG, ...COMPTA_CA, ...COMPTA_CS }

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
  { slug: "a-hg", serie: "A", name: "Histoire-Géographie", emoji: "🌍", description: "Le monde depuis 1945, l'Afrique, la Côte d'Ivoire et la géographie de la mondialisation.", order: 6 },
  { slug: "c-hg", serie: "C", name: "Histoire-Géographie", emoji: "🌍", description: "Le monde depuis 1945, l'Afrique, la Côte d'Ivoire et la géographie de la mondialisation.", order: 4 },
  { slug: "d-hg", serie: "D", name: "Histoire-Géographie", emoji: "🌍", description: "Le monde depuis 1945, l'Afrique, la Côte d'Ivoire et la géographie de la mondialisation.", order: 4 },
  { slug: "b-ses", serie: "B", name: "Sciences économiques et sociales", emoji: "📊", description: "Croissance, chômage, monnaie, commerce, État, stratification et changement social.", order: 1 },
  { slug: "b-maths", serie: "B", name: "Mathématiques", emoji: "📐", description: "Fonctions, suites, logarithmes, statistiques et probabilités.", order: 2 },
  { slug: "b-hg", serie: "B", name: "Histoire-Géographie", emoji: "🌍", description: "Le monde depuis 1945, l'Afrique, la Côte d'Ivoire et la géographie de la mondialisation.", order: 3 },
  { slug: "b-philo", serie: "B", name: "Philosophie", emoji: "🧠", description: "Notions, auteurs et méthode de la dissertation philosophique.", order: 4 },
  { slug: "b-anglais", serie: "B", name: "Anglais", emoji: "🇬🇧", description: "Grammaire, expression écrite et compréhension de texte.", order: 5 },
  { slug: "g1-admin", serie: "G1", name: "Techniques administratives", emoji: "🗂️", description: "Organisation de l'entreprise, communication, courrier, archivage, secrétariat, personnel.", order: 1 },
  { slug: "g1-droit", serie: "G1", name: "Droit", emoji: "⚖️", description: "Notions de droit, contrats, commerçants et sociétés (OHADA), droit du travail.", order: 2 },
  { slug: "g1-eco", serie: "G1", name: "Économie générale", emoji: "💹", description: "Croissance, chômage, inflation, monnaie, commerce extérieur, État.", order: 3 },
  { slug: "g1-maths", serie: "G1", name: "Mathématiques", emoji: "📐", description: "Fonctions, suites, statistiques et probabilités appliquées à la gestion.", order: 4 },
  { slug: "g1-anglais", serie: "G1", name: "Anglais", emoji: "🇬🇧", description: "Grammaire, expression écrite et compréhension de texte.", order: 5 },
  { slug: "g2-cg", serie: "G2", name: "Comptabilité générale", emoji: "🧾", description: "Opérations courantes, amortissements, provisions, rapprochement bancaire, régularisations, analyse financière.", order: 1 },
  { slug: "g2-ca", serie: "G2", name: "Comptabilité analytique", emoji: "📈", description: "Charges, centres d'analyse, coûts complets, encours, seuil de rentabilité.", order: 2 },
  { slug: "g2-cs", serie: "G2", name: "Comptabilité des sociétés", emoji: "🏢", description: "Constitution, apports, affectation du résultat, capital, dissolution et liquidation.", order: 3 },
  { slug: "g2-mf", serie: "G2", name: "Mathématiques financières", emoji: "💰", description: "Intérêts simples et composés, annuités, emprunts.", order: 4 },
  { slug: "g2-droit", serie: "G2", name: "Droit", emoji: "⚖️", description: "Notions de droit, contrats, commerçants et sociétés (OHADA), droit du travail.", order: 5 },
  { slug: "g2-eco", serie: "G2", name: "Économie générale", emoji: "💹", description: "Croissance, chômage, inflation, monnaie, commerce extérieur, État.", order: 6 },
  { slug: "g2-maths", serie: "G2", name: "Mathématiques", emoji: "📐", description: "Fonctions, suites, statistiques et probabilités appliquées à la gestion.", order: 7 },
  { slug: "g2-anglais", serie: "G2", name: "Anglais", emoji: "🇬🇧", description: "Grammaire, expression écrite et compréhension de texte.", order: 8 },
]

// 4e élément facultatif : clé du contenu quand elle diffère de la clé de la leçon (contenu partagé entre séries).
type Row = [key: string, title: string, theme: string, contentKey?: string]

function build(subjectSlug: string, serie: Serie, rows: Row[]): ChapterDef[] {
  return rows.map(([key, title, theme, ck], i) => ({
    slug: `${subjectSlug}-${key}`,
    subjectSlug,
    serie,
    title,
    theme,
    order: i + 1,
    content: DEEP[`${subjectSlug}-${key}`] ?? DEEP[key] ?? (ck ? DEEP[ck] ?? CONTENT[ck] : undefined) ?? CONTENT[`${subjectSlug}-${key}`] ?? CONTENT[key] ?? "",
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

// ---------- HISTOIRE-GÉOGRAPHIE (séries A, B, C, D) ----------
const HG: Row[] = [
  ["seconde-guerre-mondiale", "La Seconde Guerre mondiale (1939-1945)", "Histoire", "hg-seconde-guerre-mondiale"],
  ["guerre-froide", "La guerre froide : un monde bipolaire", "Histoire", "hg-guerre-froide"],
  ["crises-detente", "Crises et détente entre les deux blocs", "Histoire", "hg-crises-detente"],
  ["decolonisation", "La décolonisation", "Histoire", "hg-decolonisation"],
  ["tiers-monde", "Le Tiers-Monde et le non-alignement", "Histoire", "hg-tiers-monde"],
  ["afrique-independances", "L'Afrique après les indépendances", "Histoire", "hg-afrique-independances"],
  ["cote-ivoire-independance", "La Côte d'Ivoire depuis l'indépendance", "Histoire", "hg-cote-ivoire-independance"],
  ["onu", "L'ONU et les relations internationales", "Histoire", "hg-onu"],
  ["construction-europeenne", "La construction européenne", "Histoire", "hg-construction-europeenne"],
  ["monde-apres-1991", "Le monde après la guerre froide (depuis 1991)", "Histoire", "hg-monde-apres-1991"],
  ["mondialisation", "La mondialisation", "Géographie", "hg-mondialisation"],
  ["inegalites-developpement", "Les inégalités de développement", "Géographie", "hg-inegalites-developpement"],
  ["integration-regionale-afrique", "L'intégration régionale en Afrique", "Géographie", "hg-integration-regionale-afrique"],
  ["cote-ivoire-economie", "La Côte d'Ivoire : espace et économie", "Géographie", "hg-cote-ivoire-economie"],
  ["etats-unis", "Les États-Unis, première puissance", "Géographie", "hg-etats-unis"],
  ["chine", "La Chine, puissance émergente", "Géographie", "hg-chine"],
]

// ---------- SÉRIE B ----------
const SES_B: Row[] = [
  ["croissance", "Croissance économique et développement", "Économie", "eco-croissance-developpement"],
  ["chomage-inflation", "Chômage et inflation", "Économie", "eco-chomage-inflation"],
  ["monnaie-banques", "Monnaie, banques et banque centrale", "Économie", "eco-monnaie-banques"],
  ["commerce-international", "Le commerce international", "Économie", "eco-commerce-international"],
  ["etat-budget", "L'État et le budget", "Économie", "eco-etat-budget"],
  ["stratification", "Stratification et mobilité sociales", "Sociologie", "ses-stratification-sociale"],
  ["socialisation", "Socialisation et changement social", "Sociologie", "ses-socialisation-changement-social"],
]

const MATHS_GESTION: Row[] = [
  ["limites-continuite", "Limites et continuité", "Fonctions"],
  ["derivabilite-etude-fonctions", "Dérivabilité et étude de fonctions", "Fonctions"],
  ["fonctions-logarithmes", "Fonctions logarithmes", "Fonctions"],
  ["fonctions-exponentielles", "Fonctions exponentielles", "Fonctions"],
  ["calcul-integral", "Calcul intégral", "Fonctions"],
  ["suites-numeriques", "Suites numériques", "Fonctions"],
  ["statistiques-deux-variables", "Statistiques à deux variables", "Organisation des données"],
  ["probabilites-variable-aleatoire", "Probabilités et variable aléatoire", "Phénomènes aléatoires"],
]

// ---------- SÉRIES G1 / G2 ----------
const ADMIN_G1: Row[] = [
  ["organisation-entreprise", "L'entreprise et son organisation", "L'entreprise", "adm-organisation-entreprise"],
  ["communication", "La communication dans l'entreprise", "Communication", "adm-communication"],
  ["courrier", "Le traitement du courrier", "Communication", "adm-courrier"],
  ["classement-archivage", "Classement et archivage", "Organisation", "adm-classement-archivage"],
  ["reunions-secretariat", "Réunions, accueil et secrétariat", "Organisation", "adm-reunions-secretariat"],
  ["gestion-personnel", "La gestion du personnel", "Ressources humaines", "adm-gestion-personnel"],
]

const DROIT_G: Row[] = [
  ["notions-generales", "Notions générales de droit", "Introduction", "droit-notions-generales"],
  ["personnes", "Les personnes physiques et morales", "Les personnes", "droit-personnes"],
  ["contrats", "Le contrat", "Les obligations", "droit-contrats"],
  ["commercants-societes", "Commerçants et sociétés commerciales (OHADA)", "Droit commercial", "droit-commercants-societes"],
  ["travail", "Le contrat de travail", "Droit du travail", "droit-travail"],
  ["justice-preuve", "La justice et la preuve", "Justice", "droit-justice-preuve"],
]

const ECO_G: Row[] = [
  ["croissance", "Croissance économique et développement", "Économie", "eco-croissance-developpement"],
  ["chomage-inflation", "Chômage et inflation", "Économie", "eco-chomage-inflation"],
  ["monnaie-banques", "Monnaie, banques et banque centrale", "Économie", "eco-monnaie-banques"],
  ["commerce-international", "Le commerce international", "Économie", "eco-commerce-international"],
  ["etat-budget", "L'État et le budget", "Économie", "eco-etat-budget"],
]

const CG_G2: Row[] = [
  ["operations-courantes", "Opérations courantes : factures, effets de commerce, personnel", "Comptabilité générale", "cg-operations-courantes"],
  ["amortissements", "Les amortissements des immobilisations", "Travaux d'inventaire", "cg-amortissements"],
  ["provisions", "Les provisions (dépréciations et risques)", "Travaux d'inventaire", "cg-provisions"],
  ["rapprochement-bancaire", "L'état de rapprochement bancaire", "Travaux d'inventaire", "cg-rapprochement-bancaire"],
  ["regularisations", "La régularisation des charges et des produits", "Travaux d'inventaire", "cg-regularisations"],
  ["analyse-financiere", "L'analyse financière", "Analyse financière", "cg-analyse-financiere"],
]

const CA_G2: Row[] = [
  ["introduction", "Introduction à la comptabilité analytique", "Comptabilité analytique", "ca-introduction"],
  ["charges-indirectes", "Le traitement des charges indirectes", "Comptabilité analytique", "ca-charges-indirectes"],
  ["couts-complets", "L'inventaire permanent et les coûts complets", "Comptabilité analytique", "ca-couts-complets"],
  ["cas-particuliers", "Les cas particuliers de production", "Comptabilité analytique", "ca-cas-particuliers"],
  ["couts-variables", "Coûts variables et seuil de rentabilité", "Comptabilité analytique", "ca-couts-variables"],
]

const CS_G2: Row[] = [
  ["generalites", "Généralités sur les sociétés commerciales", "Comptabilité des sociétés", "cs-generalites"],
  ["constitution", "La constitution des sociétés", "Comptabilité des sociétés", "cs-constitution"],
  ["associes", "Les relations entre la société et les associés", "Comptabilité des sociétés", "cs-associes"],
  ["affectation-resultat", "L'affectation et la répartition des résultats", "Comptabilité des sociétés", "cs-affectation-resultat"],
  ["modification-capital", "La modification du capital social", "Comptabilité des sociétés", "cs-modification-capital"],
  ["dissolution-liquidation", "La dissolution et la liquidation", "Comptabilité des sociétés", "cs-dissolution-liquidation"],
]

const MF_G2: Row[] = [
  ["interets-simples", "Intérêts simples et escompte", "Mathématiques financières", "mf-interets-simples"],
  ["interets-composes", "Intérêts composés", "Mathématiques financières", "mf-interets-composes"],
  ["annuites", "Les annuités", "Mathématiques financières", "mf-annuites"],
  ["emprunts", "Les emprunts indivis", "Mathématiques financières", "mf-emprunts"],
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
  ...build("a-hg", "A", HG),
  ...build("c-hg", "C", HG),
  ...build("d-hg", "D", HG),
  ...build("b-hg", "B", HG),
  ...build("b-ses", "B", SES_B),
  ...build("b-maths", "B", MATHS_GESTION),
  ...build("b-philo", "B", PHILO),
  ...build("b-anglais", "B", ANGLAIS),
  ...build("g1-admin", "G1", ADMIN_G1),
  ...build("g1-droit", "G1", DROIT_G),
  ...build("g1-eco", "G1", ECO_G),
  ...build("g1-maths", "G1", MATHS_GESTION),
  ...build("g1-anglais", "G1", ANGLAIS),
  ...build("g2-cg", "G2", CG_G2),
  ...build("g2-ca", "G2", CA_G2),
  ...build("g2-cs", "G2", CS_G2),
  ...build("g2-mf", "G2", MF_G2),
  ...build("g2-droit", "G2", DROIT_G),
  ...build("g2-eco", "G2", ECO_G),
  ...build("g2-maths", "G2", MATHS_GESTION),
  ...build("g2-anglais", "G2", ANGLAIS),
]
