// Comptabilité analytique (G2) – d'après le programme communiqué par le propriétaire du site.

export const COMPTA_CA: Record<string, string> = {}

COMPTA_CA["ca-introduction"] = String.raw`## 💡 L'essentiel en une phrase
La **comptabilité analytique** (de gestion) calcule les **coûts** et les **résultats par produit** pour aider le chef d'entreprise à fixer ses prix et à décider ; elle est **interne** à l'entreprise.

## 📚 1. Objectifs et différences
| | Comptabilité générale | Comptabilité analytique |
|---|---|---|
| Rôle | Image de l'entreprise pour l'extérieur (impôts, banques) | Outil de **gestion interne** |
| Obligation | **Obligatoire** | Facultative |
| Résultat | Global de l'entreprise | **Par produit**, service ou activité |
| Règles | Plan comptable légal | Libres, propres à l'entreprise |

Objectifs : connaître les **coûts**, fixer les **prix de vente**, contrôler les **dépenses**, évaluer les **stocks**.

## 📚 2. Notion de charges
- **Charges incorporables** : charges de la comptabilité générale **retenues** dans les coûts.
- **Charges non incorporables** : charges **exclues** (charges exceptionnelles, impôts sur les bénéfices…) car sans rapport avec l'activité normale.
- **Charges supplétives** : charges **non enregistrées** en comptabilité générale mais **ajoutées** aux coûts (par exemple la **rémunération théorique** de l'exploitant, l'intérêt des capitaux propres).
$$ Charges\ de\ la\ CA = Charges\ de\ la\ CG - Charges\ non\ incorporables + Charges\ suppl\acute{e}tives $$

## 🧪 Exemple corrigé
Charges de la CG : 12 000 000 F ; non incorporables : 800 000 F ; supplétives : 500 000 F.
Charges de la CA = 12 000 000 − 800 000 + 500 000 = **11 700 000 F**.

## ✏️ Exercices
**Exercice 1.** Donne deux différences entre comptabilité générale et analytique.

:::corrige
La générale est obligatoire et tournée vers l'extérieur ; l'analytique est facultative, interne, et calcule des coûts par produit.
:::

**Exercice 2.** CG : 7 500 000 ; non incorporables : 300 000 ; supplétives : 200 000. Charges de la CA ?

:::corrige
7 500 000 − 300 000 + 200 000 = **7 400 000 F**.
:::

## ⚠️ Pièges
- Une charge **non incorporable** est supprimée ; une charge **supplétive** est ajoutée.

## 🏆 À retenir pour le BAC
Objectifs de la CA, différences avec la CG, charges incorporables / non incorporables / supplétives.
`

COMPTA_CA["ca-charges-indirectes"] = String.raw`## 💡 L'essentiel en une phrase
Les **charges directes** vont directement au coût d'un produit ; les **charges indirectes** sont d'abord regroupées par **centres d'analyse**, puis réparties grâce à des **unités d'œuvre**.

## 📚 1. Le tableau de répartition
- **Répartition primaire** : chaque charge indirecte est affectée aux centres (administration, approvisionnement, production, distribution).
- **Répartition secondaire** : les centres **auxiliaires** (administration, entretien, énergie) sont répartis sur les centres **principaux** (approvisionnement, production, distribution).

## 📚 2. Prestations réciproques
Quand deux centres auxiliaires se rendent des services, on pose un **système d'équations**.

## 📚 3. Unités d'œuvre et taux de frais
$$ Taux\ de\ frais = \frac{Total\ du\ centre\ principal}{Nombre\ d'unit\acute{e}s\ d'oeuvre} $$
Unités d'œuvre usuelles : 100 F d'achat (approvisionnement), heure de main-d'œuvre ou heure machine (production), 100 F de ventes (distribution).

## 🧪 Exemple corrigé
Totaux primaires : Administration 200 000 ; Approvisionnement 150 000 ; Production 600 000 ; Distribution 250 000.
L'administration est répartie : 20 % Approvisionnement, 50 % Production, 30 % Distribution.
- Appro : 150 000 + 40 000 = **190 000** ; Production : 600 000 + 100 000 = **700 000** ; Distribution : 250 000 + 60 000 = **310 000**.
Si les achats sont de 1 900 000 F : taux Appro = 190 000 / 1 900 000 = **10 F pour 100 F d'achat**. Production : 3 500 heures ⇒ **200 F / heure**.

**Prestations réciproques :** Entretien A = 36 000 + 0,4 B ; Énergie B = 20 000 + 0,5 A.
A = 36 000 + 0,4(20 000 + 0,5A) ⇒ 0,8 A = 44 000 ⇒ **A = 55 000** ; **B = 47 500**.

## ✏️ Exercices
**Exercice 1.** Total du centre Production : 840 000 F pour 4 200 heures de main-d'œuvre. Taux de frais ?

:::corrige
840 000 / 4 200 = **200 F par heure**.
:::

**Exercice 2.** Total Distribution : 310 000 F ; chiffre d'affaires : 3 100 000 F. Taux par 100 F de ventes ?

:::corrige
310 000 / 3 100 000 = 0,10 ⇒ **10 F pour 100 F de ventes**.
:::

## ⚠️ Pièges
- La répartition **secondaire** ne conserve que les centres principaux : le total ne change pas.
- Prestations réciproques : résoudre le système **avant** de répartir.

## 🏆 À retenir pour le BAC
Tableau de répartition (primaire / secondaire), système d'équations, unité d'œuvre et taux de frais.
`

COMPTA_CA["ca-couts-complets"] = String.raw`## 💡 L'essentiel en une phrase
Avec l'**inventaire permanent**, on suit chaque entrée et sortie de stock ; on calcule ensuite, étape par étape, le **coût d'achat**, le **coût de production**, le **coût de revient** et le **résultat analytique**.

## 📚 1. Évaluation des stocks
- **CMUP** : coût moyen unitaire pondéré après chaque entrée (ou en fin de période).
- **FIFO / PEPS** : les sorties sont évaluées au prix des **premières** entrées.

## 📚 2. La chaîne des coûts
$$ Co\hat{u}t\ d'achat = Prix\ d'achat + Charges\ directes + Charges\ indirectes\ d'approvisionnement $$
$$ Co\hat{u}t\ de\ production = Mati\grave{e}res\ consomm\acute{e}es + Main\text{-}d'oeuvre + Charges\ de\ production $$
$$ Co\hat{u}t\ de\ revient = Co\hat{u}t\ de\ production\ des\ produits\ vendus + Charges\ de\ distribution $$
$$ R\acute{e}sultat\ analytique = Chiffre\ d'affaires - Co\hat{u}t\ de\ revient $$

## 📚 3. Concordance avec la comptabilité générale
$$ R\acute{e}sultat\ analytique = R\acute{e}sultat\ CG + Charges\ non\ incorporables - Charges\ suppl\acute{e}tives $$
On vérifie ainsi que les deux comptabilités racontent la même histoire.

## 🧪 Exemple corrigé
- **Achat** : 1 000 kg à 200 F = 200 000 ; frais d'achat 20 000 ⇒ coût d'achat **220 000 F** (220 F/kg).
- **Production** : 800 kg consommés = 176 000 ; main-d'œuvre 100 000 ; charges 60 000 ⇒ **336 000 F** pour 400 unités ⇒ **840 F l'unité**.
- **Vente** : 400 unités à 1 200 F = 480 000 ; distribution 40 000 ⇒ coût de revient **376 000** ; **résultat analytique = 104 000 F**.
- **Concordance** : CG = 100 000 ; non incorporables 30 000 ; supplétives 20 000 ⇒ analytique = 100 000 + 30 000 − 20 000 = **110 000 F**.

## ✏️ Exercices
**Exercice 1.** Stock : 100 unités à 500 F ; entrée de 100 unités à 600 F. CMUP ?

:::corrige
(50 000 + 60 000) / 200 = **550 F**.
:::

**Exercice 2.** Coût de revient 1 500 F ; prix de vente 1 800 F ; 200 unités vendues. Résultat analytique total ?

:::corrige
(1 800 − 1 500) × 200 = **60 000 F**.
:::

## ⚠️ Pièges
- Ne pas mélanger le coût de production de **toute** la production et celui des produits **vendus**.
- La concordance : on **ajoute** les non incorporables et on **retranche** les supplétives.

## 🏆 À retenir pour le BAC
CMUP / FIFO, coût d'achat → production → revient, résultat analytique, concordance avec la CG.
`

COMPTA_CA["ca-cas-particuliers"] = String.raw`## 💡 L'essentiel en une phrase
Quand la production n'est pas terminée ou produit des restes (déchets, rebuts, sous-produits), le calcul du coût de production doit en tenir compte.

## 📚 1. Les encours de fabrication
Un **encours** est un produit commencé mais **non terminé** à la fin de la période.
$$ Co\hat{u}t\ de\ production\ des\ produits\ finis = Encours\ initial + Charges\ de\ la\ p\acute{e}riode - Encours\ final $$

## 📚 2. Déchets, rebuts, sous-produits
- **Déchets** : matières perdues à la fabrication ; s'ils ont une valeur de revente, on la **déduit** du coût de production.
- **Rebuts** : produits défectueux ; ils sont **sans valeur** ou vendus à bas prix. Leur coût est **supporté par les produits bons**.
- **Sous-produits** : produits secondaires obtenus en même temps que le produit principal ; leur valeur est **déduite** du coût du produit principal.

## 🧪 Exemple corrigé
Encours initial 50 000 ; charges de la période 400 000 ; encours final 80 000 ⇒ coût de production des produits finis = 50 000 + 400 000 − 80 000 = **370 000 F**.
Si des déchets sont vendus 15 000 F ⇒ coût net = 370 000 − 15 000 = **355 000 F**.

## ✏️ Exercices
**Exercice 1.** EI = 30 000 ; charges = 250 000 ; EF = 45 000. Coût de production ?

:::corrige
30 000 + 250 000 − 45 000 = **235 000 F**.
:::

**Exercice 2.** Que devient le coût des rebuts ?

:::corrige
Il est **supporté par les produits bons** (il augmente leur coût de production unitaire).
:::

## ⚠️ Pièges
- Ne pas oublier de **retrancher** l'encours final.
- La valeur de revente des déchets se **déduit**, elle ne s'ajoute pas.

## 🏆 À retenir pour le BAC
Formule des encours, traitement des déchets, rebuts et sous-produits.
`

COMPTA_CA["ca-couts-variables"] = String.raw`## 💡 L'essentiel en une phrase
La **méthode des coûts variables** sépare les charges **fixes** et **variables** pour calculer la **marge sur coût variable**, le **seuil de rentabilité** et le **point mort**.

## 📚 1. Charges fixes et variables
- **Variables** : varient avec l'activité (matières, commissions).
- **Fixes** : indépendantes de l'activité à court terme (loyer, salaires administratifs, amortissements).

## 📚 2. Marge sur coût variable
$$ MSCV = Chiffre\ d'affaires - Charges\ variables \qquad Taux\ de\ MSCV = \frac{MSCV}{CA} $$
$$ R\acute{e}sultat = MSCV - Charges\ fixes $$

## 📚 3. Seuil de rentabilité et point mort
$$ SR = \frac{Charges\ fixes}{Taux\ de\ MSCV} $$
- Le **seuil de rentabilité** (chiffre d'affaires critique) est le CA pour lequel le résultat est **nul**.
- $$ Point\ mort = \frac{SR}{CA} \times 360\ jours $$ : date à laquelle le seuil est atteint.

## 📚 4. Indice de sécurité et levier opérationnel
$$ Indice\ de\ s\acute{e}curit\acute{e} = \frac{CA - SR}{CA} \qquad Levier = \frac{MSCV}{R\acute{e}sultat} $$
Plus l'indice de sécurité est élevé, moins l'entreprise est menacée par une baisse de ventes. Le levier indique de combien varie le résultat quand le CA varie de 1 %.

## 🧪 Exemple corrigé
CA = 10 000 000 ; charges variables = 6 000 000 ; charges fixes = 2 000 000.
- MSCV = 4 000 000 ; taux = 40 %.
- Résultat = 4 000 000 − 2 000 000 = **2 000 000**.
- SR = 2 000 000 / 0,40 = **5 000 000 F**.
- Point mort = 5 000 000 / 10 000 000 × 360 = **180 jours** (début juillet).
- Indice de sécurité = (10 − 5)/10 = **50 %** ; levier = 4 000 000 / 2 000 000 = **2**.

## ✏️ Exercices
**Exercice 1.** CA = 8 000 000 ; CV = 5 600 000 ; CF = 1 800 000. Calcule MSCV, taux, résultat, SR, indice de sécurité, levier.

:::corrige
MSCV = 2 400 000 ; taux = 30 % ; résultat = 600 000 ; SR = 1 800 000 / 0,30 = **6 000 000** ; indice = (8 − 6)/8 = **25 %** ; levier = 2 400 000 / 600 000 = **4**.
:::

**Exercice 2.** Que signifie un résultat nul ?

:::corrige
Que le chiffre d'affaires est exactement égal au seuil de rentabilité : la MSCV couvre juste les charges fixes.
:::

## ⚠️ Pièges
- Au seuil de rentabilité, le résultat est **nul**, il n'y a pas encore de bénéfice.
- Ne pas confondre MSCV (par rapport aux charges variables) et marge commerciale.

## 🏆 À retenir pour le BAC
MSCV, SR = CF / taux de MSCV, point mort en jours, indice de sécurité, levier opérationnel.
`
