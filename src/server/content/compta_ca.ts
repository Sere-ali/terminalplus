// Comptabilité analytique (G2) – version détaillée, d'après le programme communiqué par le propriétaire du site.

export const COMPTA_CA: Record<string, string> = {}

COMPTA_CA["ca-introduction"] = String.raw`## 💡 L'essentiel en une phrase
La **comptabilité analytique** (ou de gestion) calcule les **coûts** et les **résultats par produit** pour aider le chef d'entreprise à **fixer ses prix**, **contrôler ses dépenses** et **décider** ; elle est **interne** et part des **charges de la comptabilité générale**.

## 📚 1. Objectifs et différences avec la comptabilité générale

| | Comptabilité générale | Comptabilité analytique |
|---|---|---|
| Destinataires | Extérieurs : État, banques, associés | **Dirigeants** de l'entreprise |
| Obligation | **Obligatoire** (loi, SYSCOHADA) | **Facultative** |
| Règles | Plan comptable légal strict | **Libres**, adaptées à l'entreprise |
| Résultat | **Global** pour toute l'entreprise | **Par produit**, par activité |
| Classement des charges | **Par nature** (achats, salaires, loyers) | **Par destination** (approvisionnement, production, distribution) |
| Période | Exercice annuel | Plus courte (mois, trimestre) |

**Objectifs de la CA :**
1. Connaître les **coûts** (achat, production, revient) de chaque produit.
2. **Fixer les prix de vente** (prix de vente = coût de revient + marge).
3. **Évaluer les stocks** de produits.
4. **Contrôler** les services (où va l'argent ?).
5. Expliquer le **résultat** de la comptabilité générale.

## 📚 2. Les types de charges en comptabilité analytique
- **Charges directes** : affectables **directement** à un produit sans calcul (matière du produit, main-d'œuvre directe).
- **Charges indirectes** : communes à plusieurs produits (loyer de l'usine, électricité, chef d'atelier) : elles sont d'abord regroupées par **centres d'analyse**, puis réparties.
- **Charges fixes** (loyer, assurances) / **charges variables** (matières, commissions) selon leur variation avec l'activité.

## 📚 3. Incorporables, non incorporables et supplétives

| Catégorie | Définition | Exemples | Traitement |
|---|---|---|---|
| **Charges incorporables** | Charges de la CG liées à l'**activité normale** | Achats, salaires, amortissements, loyers | **Retenues** dans les coûts |
| **Charges non incorporables** | Charges de la CG **étrangères** à l'activité normale ou exceptionnelles | Charges exceptionnelles, perte sur cession, impôt sur les bénéfices, dotations exceptionnelles | **Exclues** des coûts |
| **Charges supplétives** | Charges **absentes de la CG** mais qui existent économiquement | **Rémunération théorique** de l'exploitant, **intérêt** des capitaux propres | **Ajoutées** aux coûts |

$$ Charges\ de\ la\ CA = Charges\ de\ la\ CG - Charges\ non\ incorporables + Charges\ suppl\acute{e}tives $$

## 📚 4. Exemple complet : le retraitement des charges
Charges de la CG : **12 000 000 F**. Dont non incorporables : charges exceptionnelles 500 000 et dotation exceptionnelle 300 000. L'exploitant (entreprise individuelle) travaille sans salaire : rémunération théorique **600 000 F** ; capitaux propres **8 000 000 F** rémunérés au taux de **6 %**.

| Élément | Montant |
|---|---|
| Charges de la comptabilité générale | 12 000 000 |
| − Charges non incorporables (500 000 + 300 000) | − 800 000 |
| + Charges supplétives : rémunération de l'exploitant | + 600 000 |
| + Charges supplétives : intérêt des capitaux propres (8 000 000 × 6 %) | + 480 000 |
| **= Charges de la comptabilité analytique** | **11 280 000** |

## ✏️ Exercices
**Exercice 1.** Donne trois différences entre comptabilité générale et analytique.

:::corrige
La générale est obligatoire et tournée vers l'extérieur, classe les charges par nature et donne un résultat global. L'analytique est facultative, interne, classe les charges par destination et donne un résultat par produit.
:::

**Exercice 2.** CG : 7 500 000 F ; non incorporables : 300 000 F ; supplétives : 200 000 F. Charges de la CA ?

:::corrige
7 500 000 − 300 000 + 200 000 = **7 400 000 F**.
:::

**Exercice 3.** Classe : (a) perte sur cession d'un camion ; (b) salaire du chef d'atelier ; (c) rémunération théorique du patron ; (d) amendes fiscales.

:::corrige
(a) **non incorporable** (exceptionnelle) ; (b) **incorporable** (charge indirecte de production) ; (c) **supplétive** ; (d) **non incorporable**.
:::

## ⚠️ Pièges
- Une charge **non incorporable** est **retranchée** ; une charge **supplétive** est **ajoutée**.
- La CA n'est **pas** une copie de la CG : on retraite d'abord les charges.

## 🏆 À retenir pour le BAC
Objectifs et différences CG / CA ; charges directes / indirectes ; incorporables, non incorporables, supplétives ; formule de retraitement.
`

COMPTA_CA["ca-charges-indirectes"] = String.raw`## 💡 L'essentiel en une phrase
Les **charges indirectes** sont regroupées dans un **tableau de répartition** : la répartition **primaire** les affecte aux **centres d'analyse**, la répartition **secondaire** transfère les centres **auxiliaires** vers les centres **principaux**, puis on calcule le **taux de frais** de chaque centre principal.

## 📚 1. Les centres d'analyse
- **Centres principaux** : leur coût entre dans le coût des produits (**Approvisionnement, Production, Distribution**).
- **Centres auxiliaires** : ils rendent des services aux autres centres (**Administration, Entretien, Énergie**) ; leur coût est **reporté** sur les centres principaux.

## 📚 2. Le tableau de répartition (méthode)
1. **Répartition primaire** : chaque charge indirecte est ventilée entre les centres à l'aide de **clés de répartition** (surface, nombre de personnes, kWh…).
2. **Répartition secondaire** : on transfère les totaux des centres **auxiliaires** vers les centres **principaux** (ou entre auxiliaires s'il y a **prestations réciproques**).
3. **Unité d'œuvre** : on choisit une mesure de l'activité de chaque centre principal.
4. $$ Taux\ de\ frais = \frac{Total\ du\ centre\ principal}{Nombre\ d'unit\acute{e}s\ d'oeuvre} $$

Unités d'œuvre habituelles : **kg de matière achetée** ou **100 F d'achat** (approvisionnement), **heure de main-d'œuvre** ou **heure machine** (production), **100 F de chiffre d'affaires** (distribution).

## 📚 3. Les prestations réciproques
Quand l'**Entretien** (E) travaille pour l'**Énergie** (N) **et** l'Énergie pour l'Entretien, on pose un **système d'équations** pour trouver les totaux réels.

**Exemple :** totaux primaires : Entretien **36 000**, Énergie **20 000**. L'Entretien reçoit 40 % du coût de l'Énergie ; l'Énergie reçoit 50 % du coût de l'Entretien.
- E = 36 000 + 0,4 N
- N = 20 000 + 0,5 E

On remplace : E = 36 000 + 0,4 (20 000 + 0,5 E) = 44 000 + 0,2 E ⇒ 0,8 E = 44 000 ⇒ **E = 55 000** et **N = 20 000 + 27 500 = 47 500**.

## 📚 4. Exemple complet de tableau de répartition
Totaux de la **répartition primaire** : Entretien 36 000 ; Énergie 20 000 ; Approvisionnement 150 000 ; Production 600 500 ; Distribution 250 000.

**Clés de répartition secondaire :**

| Centre | Entretien | Énergie | Approvisionnement | Production | Distribution |
|---|---|---|---|---|---|
| Entretien (55 000) | – | 50 % | 10 % | 30 % | 10 % |
| Énergie (47 500) | 40 % | – | 10 % | 40 % | 10 % |

**Tableau de répartition :**

| | Entretien | Énergie | Approvisionnement | Production | Distribution |
|---|---|---|---|---|---|
| Totaux primaires | 36 000 | 20 000 | 150 000 | 600 500 | 250 000 |
| Entretien (55 000) | − 55 000 | + 27 500 | + 5 500 | + 16 500 | + 5 500 |
| Énergie (47 500) | + 19 000 | − 47 500 | + 4 750 | + 19 000 | + 4 750 |
| **Totaux secondaires** | 0 | 0 | **160 250** | **636 000** | **260 250** |

Vérification : 160 250 + 636 000 + 260 250 = **1 056 500** = 36 000 + 20 000 + 150 000 + 600 500 + 250 000 ✓ (le total ne change pas).

**Taux de frais :**

| Centre | Unité d'œuvre | Nombre | Calcul | Taux |
|---|---|---|---|---|
| Approvisionnement | kg de matière achetée | 6 410 kg | 160 250 / 6 410 | **25 F / kg** |
| Production | heure machine | 3 180 h | 636 000 / 3 180 | **200 F / h** |
| Distribution | 100 F de chiffre d'affaires | 26 025 (CA 2 602 500 F) | 260 250 / 26 025 | **10 F pour 100 F de CA** |

## ✏️ Exercices
**Exercice 1.** Total du centre Production : 840 000 F pour 4 200 heures de main-d'œuvre. Taux de frais ?

:::corrige
840 000 / 4 200 = **200 F par heure de main-d'œuvre**.
:::

**Exercice 2.** Administration (auxiliaire) : 200 000 F, répartie 20 % Approvisionnement, 50 % Production, 30 % Distribution. Totaux primaires : Appro 150 000 ; Production 600 000 ; Distribution 250 000. Calcule les totaux secondaires.

:::corrige
Administration → Appro : 40 000 ; Production : 100 000 ; Distribution : 60 000.
Totaux : **Appro 190 000 ; Production 700 000 ; Distribution 310 000** (total 1 200 000 = 200 000 + 1 000 000 ✓).
:::

**Exercice 3.** Deux centres auxiliaires A et B se rendent des services : A = 30 000 + 0,4 B et B = 10 000 + 0,5 A. Calcule A et B.

:::corrige
A = 30 000 + 0,4 (10 000 + 0,5 A) = 34 000 + 0,2 A ⇒ 0,8 A = 34 000 ⇒ **A = 42 500**. Puis B = 10 000 + 0,5 × 42 500 = **31 250**. Vérification : 30 000 + 0,4 × 31 250 = 42 500 ✓.
:::

## ⚠️ Pièges
- Le **total** de la répartition secondaire doit **égaler** celui de la répartition primaire.
- Résoudre le **système** des prestations réciproques **avant** de répartir.
- Choisir une unité d'œuvre **adaptée** à l'activité du centre.

## 🏆 À retenir pour le BAC
Centres principaux / auxiliaires, répartition primaire puis secondaire, prestations réciproques par équations, taux de frais = total du centre ÷ unités d'œuvre.
`

COMPTA_CA["ca-couts-complets"] = String.raw`## 💡 L'essentiel en une phrase
Avec l'**inventaire permanent**, on tient à jour les stocks (CMUP ou FIFO) ; on calcule ensuite, étape par étape, le **coût d'achat**, le **coût de production**, le **coût de revient** et le **résultat analytique** de chaque produit.

## 📚 1. Évaluation des stocks (fiches de stock)
- **CMUP** (coût moyen unitaire pondéré) : après chaque entrée, $$ CMUP = \frac{Valeur\ du\ stock + Valeur\ de\ l'entr\acute{e}e}{Quantit\acute{e}\ en\ stock + Quantit\acute{e}\ entr\acute{e}e} $$ Les sorties sont évaluées au CMUP.
- **FIFO (PEPS)** : les sorties sortent **aux prix des premières entrées**.

**Exemple (matière M) :** stock initial **400 kg à 180 F** (72 000) ; entrée de **1 600 kg à 220 F** (352 000) ; sortie de **1 500 kg**.

| Méthode | Sortie de 1 500 kg | Stock final (500 kg) |
|---|---|---|
| **CMUP** : (72 000 + 352 000) / 2 000 = **212 F** | 1 500 × 212 = **318 000** | 500 × 212 = **106 000** |
| **FIFO** | 400 × 180 + 1 100 × 220 = **314 000** | 500 × 220 = **110 000** |

## 📚 2. La chaîne des coûts
$$ Co\hat{u}t\ d'achat = Prix\ d'achat + Charges\ directes\ d'achat + Charges\ indirectes\ d'approvisionnement $$
$$ Co\hat{u}t\ de\ production = Mati\grave{e}res\ consomm\acute{e}es + Main\text{-}d'oeuvre\ directe + Charges\ indirectes\ de\ production $$
$$ Co\hat{u}t\ de\ revient = Co\hat{u}t\ de\ production\ des\ produits\ vendus + Charges\ de\ distribution $$
$$ R\acute{e}sultat\ analytique = Chiffre\ d'affaires - Co\hat{u}t\ de\ revient $$

## 📚 3. Exemple complet
**① Coût d'achat de la matière M (1 600 kg)**

| Élément | Quantité | Prix | Montant |
|---|---|---|---|
| Prix d'achat | 1 600 kg | 200 | 320 000 |
| Charges indirectes d'approvisionnement | 1 600 kg | 20 F/kg | 32 000 |
| **Coût d'achat** | 1 600 kg | **220** | **352 000** |

**② Coût de production de 1 000 produits finis** (la matière sort au CMUP de 212 F)

| Élément | Quantité | Prix | Montant |
|---|---|---|---|
| Matières consommées | 1 500 kg | 212 | 318 000 |
| Main-d'œuvre directe | 1 000 h | 150 | 150 000 |
| Charges indirectes de production | 800 h machine | 200 | 160 000 |
| **Coût de production** | 1 000 unités | **628** | **628 000** |

**③ Coût de revient de 800 produits vendus à 1 000 F l'unité**

| Élément | Montant |
|---|---|
| Coût de production des produits vendus : 800 × 628 | 502 400 |
| Charges directes de distribution | 20 000 |
| Charges indirectes de distribution (10 % × CA de 800 000) | 80 000 |
| **Coût de revient** | **602 400** |

**④ Résultat analytique** = CA − coût de revient = 800 000 − 602 400 = **197 600 F** (soit 247 F de bénéfice par produit). Stock final de produits finis : 200 × 628 = **125 600 F**.

## 📚 4. Concordance avec la comptabilité générale
Le résultat analytique doit se **rapprocher** de celui de la CG :
$$ R\acute{e}sultat\ analytique = R\acute{e}sultat\ de\ la\ CG + Charges\ non\ incorporables - Charges\ suppl\acute{e}tives $$
**Vérification :** résultat CG 160 000 + non incorporables 50 000 − supplétives 12 400 = **197 600** ✓.

## ✏️ Exercices
**Exercice 1.** Stock : 100 unités à 500 F. Entrée : 100 unités à 600 F. Sortie : 120 unités. Évalue la sortie et le stock final en CMUP et en FIFO.

:::corrige
CMUP = (50 000 + 60 000) / 200 = 550 ⇒ sortie = 120 × 550 = **66 000** ; stock final 80 × 550 = **44 000**.
FIFO : sortie = 100 × 500 + 20 × 600 = **62 000** ; stock final 80 × 600 = **48 000**.
:::

**Exercice 2.** Achat de 500 kg à 300 F ; charges directes d'achat 10 000 F ; charges indirectes d'approvisionnement 12 F/kg. Calcule le coût d'achat et le coût unitaire.

:::corrige
Prix = 150 000 ; + 10 000 ; + 500 × 12 = 6 000 ⇒ **coût d'achat = 166 000 F** ⇒ **332 F / kg**.
:::

**Exercice 3.** Coût de revient unitaire 1 500 F ; prix de vente 1 800 F ; 200 unités vendues. Résultat analytique ?

:::corrige
(1 800 − 1 500) × 200 = **60 000 F**.
:::

## ⚠️ Pièges
- Ne pas mélanger le coût de production de **toute** la production et celui des produits **vendus**.
- Les sorties de stock se valorisent **au CMUP ou au FIFO**, jamais à la moyenne simple des prix.
- Concordance : **ajouter** les non incorporables, **retrancher** les supplétives.

## 🏆 À retenir pour le BAC
Fiches de stock (CMUP, FIFO), coût d'achat → coût de production → coût de revient → résultat analytique, concordance avec la CG.
`

COMPTA_CA["ca-cas-particuliers"] = String.raw`## 💡 L'essentiel en une phrase
Quand la production n'est pas terminée (**encours**) ou produit des restes (**déchets, rebuts, sous-produits**), on corrige le calcul du coût de production pour que chaque produit fini porte son juste coût.

## 📚 1. Les encours de fabrication
Un **encours** est un produit **commencé mais non terminé** à la fin de la période : on lui garde son coût pour la période suivante.
$$ Co\hat{u}t\ de\ production\ des\ produits\ finis = Encours\ initial + Charges\ de\ la\ p\acute{e}riode - Encours\ final $$

**Exemple :** encours initial 50 000 ; matières 200 000 ; main-d'œuvre directe 100 000 ; charges indirectes 80 000 ; encours final 80 000.

| Élément | Montant |
|---|---|
| Encours initial | 50 000 |
| + Matières consommées | 200 000 |
| + Main-d'œuvre directe | 100 000 |
| + Charges indirectes de production | 80 000 |
| − Encours final | − 80 000 |
| **= Coût de production des produits finis** | **350 000** |

Pour **700 unités** terminées : 350 000 / 700 = **500 F l'unité**.

## 📚 2. Les déchets, rebuts et sous-produits

| Cas | Définition | Traitement |
|---|---|---|
| **Déchets** | Matières perdues en fabrication (chutes, sciure) | S'ils sont revendus, leur **valeur est déduite** du coût de production. Sinon, leur coût reste à la charge des produits bons |
| **Rebuts** | Produits **défectueux** non vendables comme produits normaux | Sans valeur : leur coût est **supporté par les produits bons** ; vendus à bas prix : on **déduit** le produit de cession |
| **Sous-produits** | Produits **secondaires** obtenus en même temps que le principal | Leur **valeur est déduite** du coût du produit principal |

### Exemple A : déchets revendus
Coût de production brut : 350 000 ; déchets revendus : **15 000** ⇒ coût net = **335 000** ; pour **670 unités** : 335 000 / 670 = **500 F**.

### Exemple B : rebuts sans valeur
Production de 500 unités dont **20 rebuts** ; coût total 600 000 F.
- Sans tenir compte des rebuts : 600 000 / 500 = 1 200 F (**faux**).
- En tenant compte : 600 000 / **480** bonnes unités = **1 250 F** (les bonnes unités supportent le coût des rebuts).

### Exemple C : sous-produit
Un atelier produit 500 unités de produit principal et un sous-produit valant **100 000 F** ; coût commun : 900 000 F.
Coût net du produit principal = 900 000 − 100 000 = **800 000** ⇒ **1 600 F l'unité**.

## ✏️ Exercices
**Exercice 1.** EI = 30 000 ; charges de la période = 250 000 ; EF = 45 000. Coût de production des produits finis ?

:::corrige
30 000 + 250 000 − 45 000 = **235 000 F**.
:::

**Exercice 2.** Coût de production brut : 420 000 F ; déchets vendus : 20 000 F ; 400 produits finis. Coût unitaire ?

:::corrige
Coût net = 400 000 ; 400 000 / 400 = **1 000 F l'unité**.
:::

**Exercice 3.** Production : 1 000 pièces dont 40 rebuts sans valeur ; coût total : 960 000 F. Coût unitaire d'une bonne pièce ?

:::corrige
960 000 / 960 = **1 000 F** (contre 960 F si l'on ignore les rebuts).
:::

## ⚠️ Pièges
- Toujours **retrancher** l'encours final et **ajouter** l'encours initial.
- Diviser par le nombre de **bonnes unités**, pas par la production totale.
- La valeur de revente des déchets **se déduit**, elle ne s'ajoute pas.

## 🏆 À retenir pour le BAC
Formule des encours (EI + charges − EF), déchets (valeur déduite), rebuts (coût supporté par les bons), sous-produits (valeur déduite du principal).
`

COMPTA_CA["ca-couts-variables"] = String.raw`## 💡 L'essentiel en une phrase
La méthode des **coûts variables** sépare charges **fixes** et **variables** pour calculer la **marge sur coût variable**, le **seuil de rentabilité**, le **point mort**, l'**indice de sécurité** et le **levier opérationnel** ; l'**imputation rationnelle** corrige l'effet de la sous-activité.

## 📚 1. Charges fixes et variables
- **Variables** (proportionnelles à l'activité) : matières, énergie de production, commissions.
- **Fixes** (indépendantes de l'activité à court terme) : loyer, assurances, amortissements, salaires administratifs.
- Certaines charges sont **mixtes** : on les sépare en une part fixe et une part variable.

## 📚 2. Le compte de résultat différentiel

| Élément | Montant | % du CA |
|---|---|---|
| Chiffre d'affaires | 10 000 000 | 100 % |
| − Charges variables | − 6 000 000 | 60 % |
| **= Marge sur coût variable (MSCV)** | **4 000 000** | **40 %** |
| − Charges fixes | − 2 000 000 | |
| **= Résultat** | **2 000 000** | |

$$ MSCV = CA - Charges\ variables \qquad Taux\ de\ MSCV = \frac{MSCV}{CA} \qquad R\acute{e}sultat = MSCV - Charges\ fixes $$

## 📚 3. Seuil de rentabilité (chiffre d'affaires critique) et point mort
$$ SR = \frac{Charges\ fixes}{Taux\ de\ MSCV} $$
Au seuil de rentabilité, **MSCV = charges fixes** donc **résultat nul**.
$$ Point\ mort\ (en\ jours) = \frac{SR}{CA} \times 360 \qquad Point\ mort\ (en\ mois) = \frac{SR}{CA} \times 12 $$
C'est la **date** à laquelle le seuil est atteint (au-delà, l'entreprise gagne de l'argent).

**Application :** SR = 2 000 000 / 0,40 = **5 000 000 F** ; point mort = 5 000 000 / 10 000 000 × 360 = **180 jours** (fin juin, début juillet).

## 📚 4. Indice de sécurité et levier opérationnel
$$ Indice\ de\ s\acute{e}curit\acute{e} = \frac{CA - SR}{CA} \qquad Levier\ op\acute{e}rationnel = \frac{MSCV}{R\acute{e}sultat} $$
- Indice de sécurité = 5 000 000 / 10 000 000 = **50 %** : le CA peut baisser de 50 % avant la perte.
- Levier = 4 000 000 / 2 000 000 = **2** : si le CA augmente de 10 %, le résultat augmente de **20 %** (et il diminue de la même façon).

## 📚 5. L'imputation rationnelle des charges fixes
Quand l'activité réelle est **inférieure à l'activité normale**, on n'impute aux coûts qu'une **part** des charges fixes :
$$ Coefficient\ d'imputation = \frac{Activit\acute{e}\ r\acute{e}elle}{Activit\acute{e}\ normale} \qquad Charges\ fixes\ imput\acute{e}es = Charges\ fixes \times Coefficient $$
La différence est une **perte de sous-activité (mali)** qui n'entre pas dans les coûts. Si l'activité réelle dépasse la normale, le coefficient est supérieur à 1 (**boni** de suractivité).

**Exemple :** activité normale 10 000 h ; activité réelle 8 000 h ; charges fixes 500 000 F.
Coefficient = 0,8 ; charges fixes imputées = **400 000** ; **mali de sous-activité = 100 000 F**.

## ✏️ Exercices
**Exercice 1.** CA = 8 000 000 ; charges variables = 5 600 000 ; charges fixes = 1 800 000. Calcule MSCV, taux, résultat, SR, point mort, indice de sécurité et levier.

:::corrige
MSCV = **2 400 000** ; taux = **30 %** ; résultat = 600 000 ; **SR = 1 800 000 / 0,30 = 6 000 000** ; point mort = 6/8 × 360 = **270 jours** ; indice de sécurité = (8 − 6)/8 = **25 %** ; levier = 2 400 000 / 600 000 = **4**.
:::

**Exercice 2.** Prix de vente unitaire 2 000 F ; coût variable unitaire 1 200 F ; charges fixes 4 000 000 F. Combien d'unités faut-il vendre pour atteindre le seuil ?

:::corrige
Marge unitaire = 800 F ⇒ **4 000 000 / 800 = 5 000 unités** (soit SR = 10 000 000 F de CA).
:::

**Exercice 3.** Activité normale 5 000 h ; réelle 4 000 h ; charges fixes 300 000 F. Charges fixes imputées et mali ?

:::corrige
Coefficient 0,8 ⇒ imputées **240 000 F** ; **mali = 60 000 F**.
:::

## ⚠️ Pièges
- Au seuil de rentabilité, le résultat est **nul**, pas un bénéfice.
- Ne pas confondre **MSCV** (CA − charges variables) et **marge commerciale** (ventes − coût d'achat des marchandises vendues).
- Le point mort se calcule avec **360 jours** (année commerciale).

## 🏆 À retenir pour le BAC
MSCV, SR = CF / taux de MSCV, point mort, indice de sécurité, levier = MSCV / résultat, coefficient d'imputation rationnelle, mali de sous-activité.
`
