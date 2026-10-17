// Résumés Physique-Chimie (suite) : chimie organique, chimie générale, physique série C.

export const EXTRA3: Record<string, string> = {}

EXTRA3["alcools"] = String.raw`## 💡 L'essentiel en une phrase
Un **alcool** possède le groupe **hydroxyle –OH** lié à un carbone saturé. Selon ce carbone, l'alcool est **primaire, secondaire ou tertiaire**, ce qui décide de son **oxydation**.

## 📚 1. Définition, formule, nomenclature
- Formule générale (saturé) : $\text{C}_n\text{H}_{2n+2}\text{O}$, soit $R\text{–OH}$.
- **Nom** : alcane sans le « e » + **ol**, avec le numéro du carbone fonctionnel (ex. propan-2-ol, 2-méthylpropan-2-ol).
- **Classes** (selon le nombre de carbones liés au carbone fonctionnel) :
  - **primaire** : $R\text{–CH}_2\text{OH}$ (éthanol)
  - **secondaire** : $R\text{–CH(OH)–}R'$ (propan-2-ol)
  - **tertiaire** : $R\text{–C(OH)(}R'\text{)–}R''$ (2-méthylpropan-2-ol)
- **Polyols** : éthane-1,2-diol (**glycol**) $\text{HOCH}_2\text{CH}_2\text{OH}$ ; propane-1,2,3-triol (**glycérol**) $\text{HOCH}_2\text{CHOHCH}_2\text{OH}$.

## 🏭 2. Préparation
- **Fermentation** des jus sucrés : $\text{C}_6\text{H}_{12}\text{O}_6\rightarrow2\,\text{C}_2\text{H}_5\text{OH}+2\,\text{CO}_2$.
- **Hydratation d'un alcène** : $\text{CH}_2\text{=CH}_2+\text{H}_2\text{O}\rightarrow\text{CH}_3\text{CH}_2\text{OH}$. **Règle de Markovnikov** : l'hydrogène se fixe sur le carbone **le plus hydrogéné** de la double liaison.

## 🔥 3. Réactions
- **Déshydratation intramoléculaire** (vers $170\,^\circ\text{C}$, acide sulfurique) : alcool $\rightarrow$ alcène + eau. $\text{C}_2\text{H}_5\text{OH}\rightarrow\text{C}_2\text{H}_4+\text{H}_2\text{O}$.
- **Déshydratation intermoléculaire** (vers $140\,^\circ\text{C}$) : $2\,\text{C}_2\text{H}_5\text{OH}\rightarrow\text{C}_2\text{H}_5\text{OC}_2\text{H}_5+\text{H}_2\text{O}$ (éther-oxyde).
- **Avec le sodium** : $2\,R\text{OH}+2\,\text{Na}\rightarrow2\,R\text{O}^-+2\,\text{Na}^++\text{H}_2$ (dégagement de dihydrogène).
- **Combustion complète** : $\text{C}_n\text{H}_{2n+2}\text{O}+\dfrac{3n}{2}\text{O}_2\rightarrow n\,\text{CO}_2+(n+1)\,\text{H}_2\text{O}$.

## ⚗️ 4. Oxydation ménagée (avec $\text{MnO}_4^-$ ou $\text{Cr}_2\text{O}_7^{2-}$ en milieu acide)
| Alcool | Défaut d'oxydant | Excès d'oxydant |
|---|---|---|
| **Primaire** | aldéhyde | acide carboxylique |
| **Secondaire** | cétone | cétone |
| **Tertiaire** | pas d'oxydation | pas d'oxydation |

Équation (alcool primaire $\rightarrow$ aldéhyde) :
$$5\,R\text{CH}_2\text{OH}+2\,\text{MnO}_4^-+6\,\text{H}^+\rightarrow5\,R\text{CHO}+2\,\text{Mn}^{2+}+8\,\text{H}_2\text{O}$$

## ⚠️ Pièges fréquents
- Mal compter la classe de l'alcool (compte les **carbones** voisins, pas les hydrogènes).
- Oublier que l'alcool tertiaire **résiste** à l'oxydation ménagée.
- Équations d'oxydoréduction non équilibrées en charges.

## 🏆 À retenir pour le BAC
Sache **nommer**, donner la **classe**, écrire les 4 réactions et le **produit de l'oxydation** selon la classe.`

EXTRA3["carbonyles"] = String.raw`## 💡 L'essentiel en une phrase
Les **aldéhydes** et les **cétones** portent le groupe **carbonyle C=O** ; on les distingue par des **tests** : seuls les aldéhydes sont **réducteurs**.

## 📚 1. Structure et nomenclature
- Formule générale (saturés) : $\text{C}_n\text{H}_{2n}\text{O}$.
- **Aldéhyde** $R\text{–CHO}$ (C=O en bout de chaîne) : nom en **-al** (éthanal, propanal).
- **Cétone** $R\text{–CO–}R'$ (C=O au milieu) : nom en **-one** (propanone, butan-2-one).

## 🧪 2. Tests d'identification
| Réactif | Aldéhyde | Cétone |
|---|---|---|
| **DNPH** (2,4-dinitrophénylhydrazine) | précipité **jaune-orangé** | précipité **jaune-orangé** |
| **Réactif de Schiff** | **rose / violet** | pas de coloration |
| **Nitrate d'argent ammoniacal** (Tollens) | **miroir d'argent** | rien |
| **Liqueur de Fehling** (chauffage) | précipité **rouge brique** ($\text{Cu}_2\text{O}$) | rien |

La **DNPH** est le test **commun** (elle indique un composé carbonylé) ; **Schiff, Tollens et Fehling** sont **spécifiques** des aldéhydes.

## ⚗️ 3. Caractère réducteur des aldéhydes
- Avec l'ion diamine argent I :
$$R\text{CHO}+2\,[\text{Ag(NH}_3)_2]^++3\,\text{HO}^-\rightarrow R\text{COO}^-+2\,\text{Ag}+4\,\text{NH}_3+2\,\text{H}_2\text{O}$$
- Avec la liqueur de Fehling :
$$R\text{CHO}+2\,\text{Cu}^{2+}+5\,\text{HO}^-\rightarrow R\text{COO}^-+\text{Cu}_2\text{O}+3\,\text{H}_2\text{O}$$

## ✅ Exemple corrigé
Un liquide $X$ donne un précipité jaune avec la DNPH et reste incolore avec le réactif de Schiff. $X$ est donc un composé carbonylé qui n'est **pas** un aldéhyde : c'est une **cétone**.

## ⚠️ Pièges fréquents
- Penser que la DNPH distingue aldéhyde et cétone (elle **ne le fait pas**).
- Écrire les équations d'oxydoréduction sans équilibrer les charges.

## 🏆 À retenir pour le BAC
**DNPH = groupe C=O** ; **Schiff, Tollens, Fehling = aldéhyde**. Sache écrire les deux équations de réduction.`

EXTRA3["amines"] = String.raw`## 💡 L'essentiel en une phrase
Une **amine** dérive de l'**ammoniac** $\text{NH}_3$ en remplaçant des hydrogènes par des groupes alkyles ; grâce au **doublet non liant** de l'azote, c'est une **base** et un **nucléophile**.

## 📚 1. Formule et classes
- Amine saturée : $\text{C}_n\text{H}_{2n+3}\text{N}$.
- **Primaire** $R\text{–NH}_2$ ; **secondaire** $R\text{–NH–}R'$ ; **tertiaire** $R\text{–N(}R'\text{)–}R''$.
- **Nom** : alcane + **amine** avec la position du groupe : éthanamine $\text{CH}_3\text{CH}_2\text{NH}_2$, propan-2-amine, N-méthyléthanamine (le **N** désigne le substituant sur l'azote).

## ⚗️ 2. Propriétés
- **Caractère basique** : le doublet non liant capte un proton.
$$R\text{NH}_2+\text{H}_2\text{O}\rightleftharpoons R\text{NH}_3^++\text{HO}^-$$
Elles sont des **bases faibles** (couple $R\text{NH}_3^+/R\text{NH}_2$).
- **Caractère nucléophile** : l'azote attaque un carbone déficient en électrons. Exemple avec un halogénoalcane :
$$\text{C}_2\text{H}_5\text{NH}_2+\text{C}_2\text{H}_5\text{I}\rightarrow(\text{C}_2\text{H}_5)_2\text{NH}_2^++\text{I}^-$$
- En solution, elles précipitent certains ions métalliques ($\text{Cu}^{2+}$, $\text{Fe}^{3+}$…) sous forme d'hydroxydes.

## ✅ Exemple corrigé
Donner la classe de $\text{CH}_3\text{–NH–CH}_2\text{CH}_3$ : l'azote est lié à **deux** carbones : amine **secondaire** (N-méthyléthanamine).

## ⚠️ Pièges fréquents
- Confondre la **classe d'une amine** (azote) et celle d'un alcool (carbone).
- Oublier que le doublet de l'azote explique **à la fois** basicité et nucléophilie.

## 🏆 À retenir pour le BAC
Sache **classer, nommer** les amines et **expliquer** leur caractère basique avec le doublet non liant.`

EXTRA3["acides-carboxyliques"] = String.raw`## 💡 L'essentiel en une phrase
Un **acide carboxylique** $R\text{–COOH}$ se transforme en **dérivés** (chlorure d'acyle, anhydride, ester, amide) en remplaçant son groupe –OH.

## 📚 1. Acides carboxyliques
- Groupe **carboxyle** $\text{–COOH}$ ; formule saturée $\text{C}_n\text{H}_{2n}\text{O}_2$.
- **Nom** : **acide** + alcane en **-oïque** (acide éthanoïque, acide propanoïque).
- Solubles dans l'eau (petites chaînes), à **caractère acide faible** : $R\text{COOH}+\text{H}_2\text{O}\rightleftharpoons R\text{COO}^-+\text{H}_3\text{O}^+$.

## 🧬 2. Les dérivés
| Dérivé | Formule | Nom |
|---|---|---|
| **Chlorure d'acyle** | $R\text{–COCl}$ | chlorure d'alcanoyle |
| **Anhydride d'acide** | $R\text{–CO–O–CO–}R$ | anhydride alcanoïque |
| **Ester** | $R\text{–COO–}R'$ | alcanoate d'alkyle |
| **Amide** | $R\text{–CO–NH}_2$ | alcanamide |

## ⚗️ 3. Passages
- **Chlorure d'acyle** : $R\text{COOH}+\text{SOCl}_2\rightarrow R\text{COCl}+\text{SO}_2+\text{HCl}$.
- **Ester par estérification** (acide + alcool) : $R\text{COOH}+R'\text{OH}\rightleftharpoons R\text{COO}R'+\text{H}_2\text{O}$. Réaction **lente, limitée, athermique, réversible** (l'inverse est l'**hydrolyse**). Rendement à l'équilibre (mélange équimolaire) : **67 %** pour un alcool primaire, **60 %** pour un secondaire, **5 %** pour un tertiaire. Un catalyseur ($\text{H}_2\text{SO}_4$) accélère sans changer l'équilibre.
- **Ester à partir d'un chlorure d'acyle ou d'un anhydride** : réaction **rapide, totale, exothermique**. $R\text{COCl}+R'\text{OH}\rightarrow R\text{COO}R'+\text{HCl}$.
- **Amide** : $R\text{COCl}+2\,\text{NH}_3\rightarrow R\text{CONH}_2+\text{NH}_4\text{Cl}$.

## ✅ Exemple corrigé
On mélange $1\ \text{mol}$ d'acide éthanoïque et $1\ \text{mol}$ d'éthanol (alcool primaire). À l'équilibre il y a $0{,}67\ \text{mol}$ d'éthanoate d'éthyle et d'eau, et $0{,}33\ \text{mol}$ de chaque réactif.

## ⚠️ Pièges fréquents
- Oublier la **double flèche** de l'estérification.
- Confondre ester et amide (O ou N).

## 🏆 À retenir pour le BAC
Le tableau des **dérivés**, les **caractéristiques** estérification/hydrolyse, et l'intérêt des chlorures/anhydrides (réactions totales).`

EXTRA3["savon"] = String.raw`## 💡 L'essentiel en une phrase
Le **savon** s'obtient par **saponification** d'un corps gras (triester du glycérol) avec une base forte ; il nettoie grâce à sa molécule à **deux parties**.

## 📚 1. Corps gras
Un **triglycéride** est un triester du **glycérol** et de trois **acides gras** : $(R\text{COO})_3\text{C}_3\text{H}_5$.
- Butyrine : $(\text{C}_3\text{H}_7\text{COO})_3\text{C}_3\text{H}_5$ ; palmitine : $(\text{C}_{15}\text{H}_{31}\text{COO})_3\text{C}_3\text{H}_5$.
- Acides gras : palmitique $\text{C}_{15}\text{H}_{31}\text{COOH}$, stéarique $\text{C}_{17}\text{H}_{35}\text{COOH}$ (saturés), oléique $\text{C}_{17}\text{H}_{33}\text{COOH}$ (insaturé).

## ⚗️ 2. Saponification
$$(R\text{COO})_3\text{C}_3\text{H}_5+3\,(\text{Na}^++\text{HO}^-)\rightarrow\text{C}_3\text{H}_5(\text{OH})_3+3\,(R\text{COO}^-+\text{Na}^+)$$
- Réaction **lente et totale**, accélérée par **chauffage à reflux**.
- **Savon** : carboxylate de sodium (**savon dur**, avec la soude $\text{NaOH}$) ou de potassium (**savon mou**, avec la potasse $\text{KOH}$).
- **Relargage** : on verse la pâte dans une solution **saturée de chlorure de sodium** ; le savon, peu soluble, précipite et on le filtre.

## 🧼 3. Pouvoir détergent
L'ion carboxylate a une **tête hydrophile** ($\text{COO}^-$) et une **queue lipophile** (chaîne carbonée). La queue s'accroche à la graisse, la tête reste dans l'eau : la graisse est enfermée dans des **micelles** et partie avec l'eau de rinçage.

## ✅ Exemple corrigé
Saponification de la butyrine par la soude :
$$(\text{C}_3\text{H}_7\text{COO})_3\text{C}_3\text{H}_5+3\,\text{NaOH}\rightarrow\text{C}_3\text{H}_5(\text{OH})_3+3\,\text{C}_3\text{H}_7\text{COONa}$$

## ⚠️ Pièges fréquents
- Oublier le coefficient **3**.
- Confondre saponification (totale) et hydrolyse acide d'un ester (limitée).

## 🏆 À retenir pour le BAC
Équation de saponification, formule du savon, **relargage** et explication du **pouvoir détergent**.`

EXTRA3["acides-amines"] = String.raw`## 💡 L'essentiel en une phrase
Un **acide α-aminé** porte une fonction **amine** et une fonction **acide carboxylique** sur le **même carbone** ; il se comporte comme un **ampholyte** et se lie à d'autres par la **liaison peptidique** pour former les protéines.

## 📚 1. Structure et nom
$$R\text{–CH(NH}_2\text{)–COOH}$$
Exemples : **glycine** ($R=\text{H}$), **alanine** ($R=\text{CH}_3$). Nom : acide **2-amino…oïque** (acide 2-aminoéthanoïque pour la glycine).

## ⚗️ 2. Propriétés acido-basiques
En solution aqueuse il existe sous forme de **zwitterion** (ion dipolaire, ou amphion) : $R\text{–CH(NH}_3^+\text{)–COO}^-$.
- En **milieu acide** : cation $R\text{–CH(NH}_3^+\text{)–COOH}$ (le zwitterion se comporte comme une **base**).
- En **milieu basique** : anion $R\text{–CH(NH}_2\text{)–COO}^-$ (le zwitterion se comporte comme un **acide**).
Le zwitterion est un **ampholyte** (à la fois acide et base).

## 🔗 3. Liaison peptidique et protéines
- **Liaison peptidique** : $\text{–CO–NH–}$, obtenue en faisant réagir le groupe –COOH d'un acide aminé avec le –NH₂ d'un autre (perte d'une molécule d'eau).
- **Dipeptide** : deux acides aminés (ex. Gly–Ala) ; **polypeptide** : nombreux acides aminés ; **protéine** : polypeptide de grande taille.
- **Réaction du biuret** : un peptide ou une protéine en milieu basique avec des ions $\text{Cu}^{2+}$ donne une coloration **violette**.
- **Hydrolyse** de la liaison peptidique : retour aux acides aminés (chauffage en milieu acide ou enzymes digestives).

## ✅ Exemple corrigé
Glycine + alanine $\rightarrow$ Gly–Ala + $\text{H}_2\text{O}$ : $\text{H}_2\text{N–CH}_2\text{–CO–NH–CH(CH}_3\text{)–COOH}$. Il y a **une** liaison peptidique.

## ⚠️ Pièges fréquents
- Placer le groupe amine sur un autre carbone que celui du carboxyle (ce ne serait plus un acide **α**-aminé).
- Oublier que le dipeptide dépend de l'ordre ($\text{Gly–Ala}\neq\text{Ala–Gly}$).

## 🏆 À retenir pour le BAC
Formule générale, zwitterion et caractère **amphotère**, formation d'un **dipeptide**, test du **biuret**.`

EXTRA3["acide-faible-base-faible"] = String.raw`## 💡 L'essentiel en une phrase
Un **acide faible** (ou une **base faible**) réagit **partiellement** avec l'eau : un équilibre s'établit et le pH ne se calcule plus par $-\log C$.

## 📚 1. Acide faible
- Exemple : $\text{CH}_3\text{COOH}+\text{H}_2\text{O}\rightleftharpoons\text{CH}_3\text{COO}^-+\text{H}_3\text{O}^+$ (**double flèche**).
- Pour la même concentration $C$, le pH d'un acide faible est **supérieur** à $-\log C$ (moins d'ions $\text{H}_3\text{O}^+$).
- **Coefficient d'ionisation** : $\alpha=\dfrac{[\text{H}_3\text{O}^+]}{C}<1$.
- **Dilution** : plus la solution est diluée, plus $\alpha$ est **grand** (l'ionisation progresse).

## 📚 2. Base faible
- Exemple : $\text{NH}_3+\text{H}_2\text{O}\rightleftharpoons\text{NH}_4^++\text{HO}^-$ ; l'ion éthanoate $\text{CH}_3\text{COO}^-$ est aussi une base faible.
- $\text{pH}<14+\log C$ ; $\alpha=\dfrac{[\text{HO}^-]}{C}$ qui augmente aussi avec la dilution.

## ✍️ 3. Calculer les concentrations (acide faible $C$)
1. $[\text{H}_3\text{O}^+]=10^{-\text{pH}}$.
2. $[\text{OH}^-]=\dfrac{K_e}{[\text{H}_3\text{O}^+]}$ (souvent négligeable).
3. Électroneutralité : $[\text{A}^-]=[\text{H}_3\text{O}^+]$ (si $[\text{OH}^-]$ négligeable).
4. Conservation : $[\text{AH}]=C-[\text{A}^-]$.

## ✅ Exemple corrigé
Acide éthanoïque à $C=0{,}10\ \text{mol/L}$ de $\text{pH}=2{,}9$ :
- $[\text{H}_3\text{O}^+]=10^{-2{,}9}=1{,}26\times10^{-3}\ \text{mol/L}=[\text{CH}_3\text{COO}^-]$.
- $[\text{CH}_3\text{COOH}]=0{,}10-0{,}00126\approx0{,}0987\ \text{mol/L}$.
- $\alpha=\dfrac{1{,}26\times10^{-3}}{0{,}10}\approx1{,}3\ \%$ : l'acide est **très peu ionisé**.
(Un acide fort de même concentration aurait $\text{pH}=1$.)

## ⚠️ Pièges fréquents
- Écrire une flèche simple pour un acide faible.
- Utiliser $\text{pH}=-\log C$ pour un acide faible.

## 🏆 À retenir pour le BAC
Équation avec **double flèche**, calcul de $\alpha$, influence de la **dilution** et bilan des espèces.`

EXTRA3["couples-acide-base"] = String.raw`## 💡 L'essentiel en une phrase
Selon Brønsted, un **acide** cède un proton $\text{H}^+$ et une **base** en capte un ; le **$pK_A$** classe la force des couples acide/base.

## 📚 1. Couples acide/base
- **Acide** : espèce capable de **céder** un $\text{H}^+$ ; **base** : espèce capable d'en **capter**.
- **Couple** $\text{AH}/\text{A}^-$ : $\text{AH}\rightleftharpoons\text{A}^-+\text{H}^+$.
- Exemples : $\text{CH}_3\text{COOH}/\text{CH}_3\text{COO}^-$ ; $\text{NH}_4^+/\text{NH}_3$ ; $\text{H}_3\text{O}^+/\text{H}_2\text{O}$ ; $\text{H}_2\text{O}/\text{HO}^-$. L'eau est un **ampholyte**.

## 🔢 2. Constante d'acidité
$$K_A=\frac{[\text{A}^-]\,[\text{H}_3\text{O}^+]}{[\text{AH}]}\qquad pK_A=-\log K_A$$
$$\text{pH}=pK_A+\log\frac{[\text{A}^-]}{[\text{AH}]}$$

## 🗺️ 3. Domaines de prédominance
- $\text{pH}<pK_A$ : l'**acide** $\text{AH}$ prédomine.
- $\text{pH}=pK_A$ : $[\text{AH}]=[\text{A}^-]$.
- $\text{pH}>pK_A$ : la **base** $\text{A}^-$ prédomine.
- **Indicateur coloré** : couple $\text{HIn}/\text{In}^-$ de deux couleurs ; la **zone de virage** est $pK_A\pm1$.

## ⚖️ 4. Force des acides et des bases
- Plus $K_A$ est **grand** (donc $pK_A$ petit), plus l'acide est **fort** et plus sa base conjuguée est **faible**.
- $pK_A$ à retenir : $\text{H}_3\text{O}^+/\text{H}_2\text{O}$ : $0$ ; $\text{CH}_3\text{COOH}/\text{CH}_3\text{COO}^-$ : $4{,}8$ ; $\text{NH}_4^+/\text{NH}_3$ : $9{,}2$ ; $\text{H}_2\text{O}/\text{HO}^-$ : $14$.
- pH approchés (si l'espèce est peu ionisée) : acide faible $\text{pH}=\tfrac12(pK_A-\log C)$ ; base faible $\text{pH}=\tfrac12(pK_A+14+\log C)$.

## ✅ Exemple corrigé
Quelle forme prédomine pour $\text{NH}_4^+/\text{NH}_3$ à $\text{pH}=10$ ? $10>9{,}2$ : $\text{NH}_3$ (la base). Le rapport $\dfrac{[\text{NH}_3]}{[\text{NH}_4^+]}=10^{10-9{,}2}\approx6{,}3$.

## ⚠️ Pièges fréquents
- Inverser acide et base dans le rapport du pH.
- Dire « $pK_A$ grand = acide fort » (c'est l'inverse).

## 🏆 À retenir pour le BAC
$K_A$, $pK_A$, la formule du pH, les domaines de prédominance et la **classification** des couples.`

EXTRA3["reactions-acido-basiques"] = String.raw`## 💡 L'essentiel en une phrase
En versant une base dans un acide, le **pH change** de façon caractéristique ; la **courbe de dosage** permet de trouver l'**équivalence** et la **concentration**. Une **solution tampon** résiste aux variations de pH.

## 📚 1. Équivalence et dosage pH-métrique
**Équivalence** : les réactifs ont été introduits dans les proportions stœchiométriques ($n_a=n_b$) :
$$C_aV_a=C_bV_{bE}$$
On trace $\text{pH}=f(V_b)$ ; le point d'équivalence se trouve par la **méthode des tangentes** (ou la courbe dérivée).

## 📈 2. Les trois dosages
| Dosage | Réaction | pH à l'équivalence | Remarques |
|---|---|---|---|
| **Acide fort + base forte** | $\text{H}_3\text{O}^++\text{HO}^-\rightarrow2\text{H}_2\text{O}$ | $=7$ | totale, exothermique ; saut de pH important |
| **Acide faible + base forte** | $\text{AH}+\text{HO}^-\rightarrow\text{A}^-+\text{H}_2\text{O}$ | $>7$ | à la **demi-équivalence** : $\text{pH}=pK_A$ |
| **Acide fort + base faible** | $\text{H}_3\text{O}^++\text{B}\rightarrow\text{BH}^++\text{H}_2\text{O}$ | $<7$ | à la demi-équivalence : $\text{pH}=pK_A(\text{BH}^+/\text{B})$ |

Le **choix de l'indicateur** : sa zone de virage doit **contenir** le pH à l'équivalence (phénolphtaléine : 8,2–10 pour un acide faible dosé par une base forte).
Plus les solutions sont **concentrées**, plus le saut de pH est grand.

## 🧴 3. Solution tampon
- **Définition** : solution dont le **pH varie peu** par ajout modéré d'acide ou de base, ou par dilution.
- **Composition** : un acide faible et sa base conjuguée en quantités voisines. $\text{pH}=pK_A+\log\dfrac{n_{\text{base}}}{n_{\text{acide}}}$ ; pouvoir tampon maximal quand $\text{pH}=pK_A$.
- **Trois préparations** :
  1. mélanger l'acide faible et sa base conjuguée ;
  2. acide faible + **base forte en défaut** (ex. moitié) ;
  3. base faible + **acide fort en défaut**.
- **Intérêt** : sang ($\text{pH}\approx7{,}4$), sol agricole, étalonnage d'un pH-mètre.

## ✅ Exemple corrigé
On dose $20\ \text{mL}$ d'acide éthanoïque par la soude à $0{,}10\ \text{mol/L}$ ; l'équivalence est à $V_{bE}=16\ \text{mL}$.
$C_a=\dfrac{0{,}10\times16}{20}=0{,}080\ \text{mol/L}$. À $V_b=8\ \text{mL}$ (demi-équivalence) : $\text{pH}=pK_A=4{,}8$.

## ⚠️ Pièges fréquents
- Croire que $\text{pH}=7$ à **toute** équivalence.
- Oublier de prendre le **volume à l'équivalence** (pas le volume total).

## 🏆 À retenir pour le BAC
Relation à l'équivalence, **pH à l'équivalence** selon le cas, demi-équivalence, choix de l'indicateur, préparation d'un tampon.`

EXTRA3["dosage"] = String.raw`## 💡 L'essentiel en une phrase
**Doser** une solution, c'est déterminer sa **concentration** en la faisant réagir avec une solution de concentration connue jusqu'à l'**équivalence**.

## 📚 1. Principe du dosage colorimétrique
- **Burette** : solution titrante (ici la soude, $C_b$ connue).
- **Bécher** : volume $V_a$ de la solution à doser (prélevé à la **pipette jaugée**) avec quelques gouttes d'**indicateur coloré**.
- À l'**équivalence** : changement de couleur persistant ; on lit $V_{bE}$.
$$C_aV_a=C_bV_{bE}\Rightarrow C_a=\frac{C_bV_{bE}}{V_a}$$

## 🧴 2. Dosage du vinaigre
Réaction : $\text{CH}_3\text{COOH}+\text{HO}^-\rightarrow\text{CH}_3\text{COO}^-+\text{H}_2\text{O}$ (totale).
- Le vinaigre est trop concentré : on le **dilue** (ex. 10 fois) avant de doser.
- **Indicateur** : la **phénolphtaléine** (zone de virage 8,2–10), car le pH à l'équivalence est **basique**.
- Le **degré** du vinaigre = masse d'acide éthanoïque pour 100 g de vinaigre (6° $\approx$ 6 g pour 100 g).

## ✅ Exemple corrigé
On dilue 10 fois un vinaigre. On dose $V_a=10{,}0\ \text{mL}$ de solution diluée par la soude à $0{,}10\ \text{mol/L}$ : $V_{bE}=8{,}0\ \text{mL}$.
- $C_{diluée}=\dfrac{0{,}10\times8{,}0}{10{,}0}=0{,}080\ \text{mol/L}$.
- $C_{vinaigre}=10\times0{,}080=0{,}80\ \text{mol/L}$.
- Concentration massique : $0{,}80\times60=48\ \text{g/L}$ ($M=60\ \text{g/mol}$), soit environ **5°** si la masse volumique vaut $1\ \text{g/mL}$.

## ⚠️ Pièges fréquents
- Oublier le **facteur de dilution**.
- Utiliser un indicateur dont la zone de virage ne contient pas le pH d'équivalence.

## 🏆 À retenir pour le BAC
$C_aV_a=C_bV_{bE}$, **choix de l'indicateur**, schéma du montage et prise en compte de la dilution.`

EXTRA3["gravitation"] = String.raw`## 💡 L'essentiel en une phrase
Deux masses s'**attirent** : c'est la **loi de gravitation universelle** de Newton ; elle explique le poids, le mouvement des **satellites** et des planètes.

## 📚 1. Loi d'attraction universelle
$$F=G\frac{m_A\,m_B}{d^2}\qquad G=6{,}67\times10^{-11}\ \text{N·m}^2\text{/kg}^2$$
Force attractive, dirigée selon la droite $(AB)$, de même valeur sur $A$ et sur $B$.

## 🌍 2. Champ de gravitation
À la distance $r$ du centre d'un astre de masse $M$ : $\;g(r)=\dfrac{GM}{r^2}$. À l'altitude $z$ : $g(z)=g_0\dfrac{R^2}{(R+z)^2}$ avec $g_0=\dfrac{GM}{R^2}$.

## 🛰️ 3. Satellite en orbite circulaire (rayon $r$)
TCI : $\dfrac{GMm}{r^2}=m\dfrac{v^2}{r}$ donc :
- **Mouvement circulaire uniforme**, $v=\sqrt{\dfrac{GM}{r}}$ (indépendante de la masse du satellite).
- **Période** $T=2\pi\sqrt{\dfrac{r^3}{GM}}$ ; **3e loi de Kepler** : $\dfrac{T^2}{r^3}=\dfrac{4\pi^2}{GM}$ (valable aussi pour déterminer la **masse** de l'astre).
- Plus l'orbite est haute, plus la vitesse est **faible**.

## 📡 4. Satellite géostationnaire
Immobile pour un observateur terrestre : orbite **circulaire dans le plan équatorial**, même sens que la Terre, **période égale à celle de la Terre** ($T\approx86\,164\ \text{s}$). Intérêt : télécommunications, télévision, météorologie.

## ✅ Exemple corrigé
$GM_T=3{,}98\times10^{14}\ \text{SI}$ et $T=86\,164\ \text{s}$ :
- $r=\left(\dfrac{GMT^2}{4\pi^2}\right)^{1/3}\approx4{,}22\times10^7\ \text{m}$.
- Altitude $\approx4{,}22\times10^7-6{,}37\times10^6\approx3{,}6\times10^7\ \text{m}$ (**36 000 km**) ; $v\approx3{,}07\ \text{km/s}$.

## 🌌 5. Impesanteur
Dans un satellite en orbite, tout tombe **avec lui** : les objets semblent **flotter** (apesanteur apparente), mais la gravitation est toujours là.

## ⚠️ Pièges fréquents
- Prendre l'**altitude** à la place du **rayon** $r=R+z$.
- Dire que la gravité est nulle dans la station spatiale.

## 🏆 À retenir pour le BAC
$F=G\frac{m_Am_B}{d^2}$, $v=\sqrt{GM/r}$, $T=2\pi\sqrt{r^3/GM}$, **Kepler 3** et les caractéristiques du géostationnaire.`

EXTRA3["induction"] = String.raw`## 💡 L'essentiel en une phrase
Quand le **flux magnétique** à travers un circuit **varie**, un **courant induit** apparaît : c'est l'**induction électromagnétique**.

## 📚 1. Flux magnétique
$$\Phi=B\,S\cos\alpha\quad(\text{en weber, Wb})$$
avec $S$ la surface du circuit (ou $N\,B\,S\cos\alpha$ pour $N$ spires) et $\alpha$ l'angle entre $\vec B$ et la normale à la surface.

## ⚡ 2. Lois de l'induction
- **Loi de Lenz** : le courant induit a un **sens tel qu'il s'oppose** à la cause qui lui donne naissance (variation de flux).
- **Loi de Faraday–Lenz** : $e=-\dfrac{d\Phi}{dt}$ ; si le circuit a la résistance $R$, $i=\dfrac eR$.
Un courant induit apparaît si l'on **déplace** l'aimant, on **change** $B$, la **surface** $S$ ou l'**orientation** $\alpha$.

## 🔧 3. Applications
- **Alternateur** (production d'électricité dans les centrales) : une bobine ($N$ spires, aire $S$) tourne dans $B$ à la vitesse angulaire $\omega$ : $\Phi=NBS\cos\omega t$ et $e=NBS\omega\sin\omega t$.
- **Transformateur** : $\dfrac{U_2}{U_1}=\dfrac{N_2}{N_1}$ (élévateur si $N_2>N_1$).
- **Courants de Foucault** : courants induits dans une masse métallique (plaques à induction, freins).
- **Microphone électrodynamique** : une bobine mobile dans un aimant ; le son fait varier le flux, donc crée une tension.

## ✅ Exemple corrigé
Bobine de $N=200$ spires, $S=50\ \text{cm}^2$, $B=0{,}1\ \text{T}$, tournant à $50\ \text{tr/s}$ ($\omega=314\ \text{rad/s}$) :
$e_{max}=NBS\omega=200\times0{,}1\times50\times10^{-4}\times314\approx31{,}4\ \text{V}$.

## ⚠️ Pièges fréquents
- Mettre $S$ en $\text{cm}^2$ sans convertir en $\text{m}^2$.
- Oublier le **signe moins** et l'interprétation de Lenz.

## 🏆 À retenir pour le BAC
$\Phi=BS\cos\alpha$, **Faraday–Lenz**, sens du courant induit, **principe de l'alternateur** et du transformateur.`

EXTRA3["derivateur-integrateur"] = String.raw`## 💡 L'essentiel en une phrase
Un **amplificateur opérationnel (AO)** avec un résistor et un condensateur peut **dériver** ou **intégrer** une tension.

## 📚 1. L'AO idéal en régime linéaire
- Courants d'entrée **nuls** : $i^+=i^-=0$.
- Tension différentielle **nulle** : $V^+=V^-$ (donc $\varepsilon=0$).

## ➗ 2. Montage dérivateur
Condensateur $C$ à l'entrée, résistor $R$ entre la sortie et l'entrée inverseuse :
$$u_s=-RC\,\frac{du_e}{dt}$$
Intérêt : transformer un signal **triangulaire** en **créneaux** (détecte les variations).

## ∫ 3. Montage intégrateur
Résistor $R$ à l'entrée, condensateur $C$ en retour :
$$u_s=-\frac1{RC}\int u_e\,dt$$
Intérêt : transformer un signal **créneau** en signal **triangulaire** ; utile pour les **générateurs de signaux** et les filtres.

## ✅ Exemple corrigé
Intégrateur avec $R=10\ \text{k}\Omega$, $C=1\ \mu\text{F}$ ($RC=10\ \text{ms}$) et une tension d'entrée constante $u_e=+2\ \text{V}$ :
$u_s(t)=-\dfrac{2}{0{,}01}t=-200\,t$ : la sortie **décroît linéairement** de $200\ \text{V/s}$ (en pratique elle sature vers la tension d'alimentation, par ex. $-15\ \text{V}$).

## ⚠️ Pièges fréquents
- Oublier le **signe moins**.
- Échanger les positions de $R$ et $C$ entre les deux montages.

## 🏆 À retenir pour le BAC
Les **deux relations**, les **schémas** et l'**interprétation des oscillogrammes**.`

EXTRA3["lumiere-onde"] = String.raw`## 💡 L'essentiel en une phrase
La **diffraction** et les **interférences** montrent que la lumière se comporte comme une **onde** ; c'est une **onde électromagnétique**.

## 📚 1. Diffraction
Une onde lumineuse passant par une **fente de largeur $a$** (ou un trou) s'étale : c'est la **diffraction**. Pour une longueur d'onde $\lambda$ :
- Écart angulaire : $\theta\approx\dfrac\lambda a$ (en rad).
- Sur un écran à la distance $D$ : largeur de la tache centrale $L=\dfrac{2\lambda D}{a}$.
Plus la fente est **étroite**, plus la diffraction est **marquée**.

## 〰️ 2. Interférences
Avec deux sources cohérentes (**fentes d'Young** distantes de $a$), on observe des **franges** brillantes et sombres.
- **Différence de marche** : $\delta=\dfrac{a\,x}{D}$.
- **Franges brillantes** (interférences constructives) : $\delta=k\lambda$.
- **Franges sombres** (destructives) : $\delta=\left(k+\tfrac12\right)\lambda$.
- **Interfrange** : $i=\dfrac{\lambda D}{a}$.

## 📡 3. Ondes électromagnétiques
- Onde lumineuse : onde électromagnétique visible, $400\ \text{nm}\le\lambda\le800\ \text{nm}$ dans le vide.
- Dans le vide : $c=3\times10^8\ \text{m/s}$ et $\lambda=\dfrac cN$ ($N$ = fréquence).
- **Spectre** (de la plus grande à la plus petite $\lambda$) : ondes hertziennes, infrarouges, **visible**, ultraviolets, rayons **X**, rayons **γ**.
- **Importance** : ondes hertziennes (radio, télévision, téléphone), rayons X (radiographie), rayons γ (stérilisation, traitement du cancer).

## ✅ Exemple corrigé
Fentes d'Young : $a=0{,}5\ \text{mm}$, $D=2\ \text{m}$ et $\lambda=600\ \text{nm}$.
$i=\dfrac{600\times10^{-9}\times2}{0{,}5\times10^{-3}}=2{,}4\times10^{-3}\ \text{m}=2{,}4\ \text{mm}$.
Fréquence de cette lumière : $N=\dfrac{3\times10^8}{600\times10^{-9}}=5\times10^{14}\ \text{Hz}$.

## ⚠️ Pièges fréquents
- Confondre $a$ (distance entre les fentes) et la largeur d'une seule fente.
- Oublier de convertir $\text{nm}$ et $\text{mm}$ en mètres.

## 🏆 À retenir pour le BAC
$\theta\approx\lambda/a$, $i=\lambda D/a$, conditions de franges brillantes/sombres et le spectre électromagnétique.`

EXTRA3["lumiere-particule"] = String.raw`## 💡 L'essentiel en une phrase
La lumière est aussi faite de **photons**, grains d'énergie $E=h\nu$ ; cela explique l'**effet photoélectrique** et les **raies** des spectres atomiques.

## 📚 1. Photon et effet photoélectrique
- Énergie d'un photon : $E=h\nu=\dfrac{hc}\lambda$ avec $h=6{,}63\times10^{-34}\ \text{J·s}$. $1\ \text{eV}=1{,}6\times10^{-19}\ \text{J}$.
- **Effet photoélectrique** : un métal éclairé par une lumière de **fréquence assez élevée** émet des électrons.
$$h\nu=W_0+E_{c,max}\qquad\nu_0=\frac{W_0}h\ (\text{fréquence seuil})$$
- Si $\nu<\nu_0$ : **aucun** électron, quelle que soit l'intensité. Au-delà du seuil, l'intensité fixe le **nombre** d'électrons, pas leur énergie.

## 🔬 2. Niveaux d'énergie de l'atome
L'énergie d'un atome est **quantifiée**. Pour l'hydrogène :
$$E_n=-\frac{13{,}6}{n^2}\ \text{eV}\quad(n=1,2,3,\dots)$$
- $n=1$ : **état fondamental** ; $n>1$ : états excités.
- **Énergie d'ionisation** (depuis le fondamental) : $13{,}6\ \text{eV}$.
- **Transition** entre $E_p$ et $E_n$ : $|E_p-E_n|=h\nu=\dfrac{hc}\lambda$ (émission si l'atome descend, absorption s'il monte).
- **Spectre d'émission** : raies colorées sur fond noir ; **spectre d'absorption** : raies noires sur fond coloré, aux **mêmes longueurs d'onde**.

## ✅ Exemple corrigé
Transition $n=3\rightarrow n=2$ de l'hydrogène :
$\Delta E=13{,}6\left(\dfrac14-\dfrac19\right)=1{,}89\ \text{eV}=3{,}02\times10^{-19}\ \text{J}$.
$\lambda=\dfrac{hc}{\Delta E}=\dfrac{6{,}63\times10^{-34}\times3\times10^8}{3{,}02\times10^{-19}}\approx6{,}6\times10^{-7}\ \text{m}=656\ \text{nm}$ : raie **rouge**.

## ⚠️ Pièges fréquents
- Oublier de convertir les $\text{eV}$ en joules.
- Croire qu'une lumière très intense peut compenser une fréquence trop faible.

## 🏆 À retenir pour le BAC
$E=h\nu$, **bilan de l'effet photoélectrique**, $E_n=-13{,}6/n^2$ et $\Delta E=hc/\lambda$.`

EXTRA3["nucleaire-provoquees"] = String.raw`## 💡 L'essentiel en une phrase
Les noyaux peuvent libérer de l'énergie par **fission** (noyau lourd qui se casse) ou **fusion** (noyaux légers qui s'unissent) ; cette énergie vient du **défaut de masse** : $E=\Delta m\,c^2$.

## 📚 1. Défaut de masse et énergie de liaison
- **Défaut de masse** : $\Delta m=Z\,m_p+(A-Z)\,m_n-m_{noyau}$ (toujours $>0$), en $\text{u}$ ; $1\ \text{u}=931{,}5\ \text{MeV/c}^2$.
- **Énergie de liaison** : $E_\ell=\Delta m\,c^2$ ; **par nucléon** : $E_a=\dfrac{E_\ell}A$. Plus $E_a$ est grande, plus le noyau est **stable** (maximum vers le fer, $\approx8{,}8\ \text{MeV/nucléon}$).

## 💥 2. Fission et fusion
- **Fission** : un noyau lourd, bombardé par un neutron, se casse en deux noyaux plus petits :
$$\,{}^{235}_{92}\text{U}+{}^1_0n\rightarrow{}^{94}_{38}\text{Sr}+{}^{140}_{54}\text{Xe}+2\,{}^1_0n$$
Applications : **centrales nucléaires**.
- **Fusion** : deux noyaux légers s'unissent :
$$\,{}^2_1\text{H}+{}^3_1\text{H}\rightarrow{}^4_2\text{He}+{}^1_0n\quad(\approx17{,}6\ \text{MeV})$$
Elle alimente le **Soleil** ; elle exige des températures de plusieurs millions de degrés.
Les deux sont **exoénergétiques** car les noyaux obtenus sont plus stables (courbe d'Aston).

## ☢️ 3. Applications et dangers
- **Applications** : médecine (imagerie, radiothérapie), industrie, **datation**, électricité.
- **Dangers** : irradiation, contamination, **déchets radioactifs**, accidents (Tchernobyl, Fukushima).

## ✅ Exemple corrigé
Noyau d'hélium $\,{}^4_2\text{He}$ : $m_p=1{,}00728\ \text{u}$, $m_n=1{,}00866\ \text{u}$, $m_{noyau}=4{,}0015\ \text{u}$.
- $\Delta m=2(1{,}00728)+2(1{,}00866)-4{,}0015=0{,}0304\ \text{u}$.
- $E_\ell=0{,}0304\times931{,}5\approx28{,}3\ \text{MeV}$ ; $E_a=\dfrac{28{,}3}{4}\approx7{,}1\ \text{MeV/nucléon}$.

## ⚠️ Pièges fréquents
- Oublier de vérifier la conservation de $A$ et de $Z$ dans l'équation.
- Confondre énergie de liaison (totale) et énergie par nucléon.

## 🏆 À retenir pour le BAC
$\Delta m$, $E_\ell=\Delta mc^2$, $E_a=E_\ell/A$, équations de **fission** et de **fusion**, applications et dangers.`
