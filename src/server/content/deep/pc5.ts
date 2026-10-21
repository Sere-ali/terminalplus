// Leçons approfondies – Physique-Chimie : acides et bases (5/6)

export const DEEP_PC_5: Record<string, string> = {}

DEEP_PC_5["solutions-ph"] = String.raw`## 💡 L'essentiel en une phrase
Le **pH** mesure l'acidité d'une solution aqueuse : $pH=-\log[H_3O^+]$ ; à 25 °C l'eau pure a un pH de 7 et le produit ionique de l'eau vaut $K_e=10^{-14}$.

## 📚 1. Autoprotolyse de l'eau
$$2H_2O\rightleftharpoons H_3O^++HO^-$$
$$K_e=[H_3O^+][HO^-]=10^{-14}\ \text{à 25 °C}\qquad pK_e=14$$
- Eau pure : $[H_3O^+]=[HO^-]=10^{-7}$ mol/L, pH = 7 (**neutre**).
- $K_e$ augmente avec la température.

## 📚 2. Définition du pH
$$pH=-\log\left[H_3O^+\right]\qquad[H_3O^+]=10^{-pH}\ \text{mol/L}$$
- Solution **acide** : $pH<7$ ; **neutre** : $pH=7$ ; **basique** : $pH>7$ (à 25 °C).
- Relation : $[HO^-]=\dfrac{K_e}{[H_3O^+]}$ et $pH+pOH=14$.
- Le pH est un nombre **sans unité**. Une augmentation de 1 unité de pH correspond à une concentration en $H_3O^+$ **divisée par 10**.
- Valable pour des concentrations $\le0{,}1$ mol/L.

## 📚 3. Mesure du pH
- **Papier pH** : précision de l'ordre de 1 unité.
- **Indicateurs colorés** (BBT : jaune en milieu acide, vert vers 7, bleu en milieu basique).
- **pH-mètre** : précis (0,01) ; il faut l'**étalonner** avec deux solutions tampons.

## 📚 4. Dilution
Quand on dilue $n$ fois une solution :
- La concentration est divisée par $n$ : $C_f=\dfrac{C_i}{n}$.
- Pour un **acide fort**, le pH augmente de $\log n$ ; pour une **base forte**, il diminue de $\log n$.
- Le pH d'une solution **acide** augmente et se rapproche de 7 (sans le dépasser).

## 📚 5. Produit de dilution
$C_iV_i=C_fV_f$ (conservation de la quantité de matière de soluté).

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Du pH à la concentration
$pH=3{,}2$ : $[H_3O^+]=10^{-3{,}2}=\mathbf{6{,}3\times10^{-4}\ mol/L}$.

### Exemple 2 — De la concentration au pH
$[H_3O^+]=2\times10^{-5}$ mol/L : $pH=-\log(2\times10^{-5})=5-0{,}30=\mathbf{4{,}7}$.

### Exemple 3 — Concentration en ions hydroxyde
$pH=11$ : $[H_3O^+]=10^{-11}$, $[HO^-]=\dfrac{10^{-14}}{10^{-11}}=\mathbf{10^{-3}\ mol/L}$.

### Exemple 4 — Dilution
On dilue 100 fois une solution de pH = 2 (acide fort) : $[H_3O^+]$ passe de $10^{-2}$ à $10^{-4}$, donc **pH = 4**.

### Exemple 5 — Préparation par dilution
Pour 250 mL d'une solution à 0,02 mol/L à partir d'une solution mère à 0,5 mol/L : $V_m=\dfrac{0{,}02\times250}{0{,}5}=\mathbf{10\ mL}$ prélevés à la pipette jaugée, qu'on place dans une fiole jaugée de 250 mL et qu'on complète au trait de jauge avec de l'eau distillée.

## ✏️ Exercices d'entraînement
**Exercice 1.** Calculer le pH d'une solution où $[H_3O^+]=5\times10^{-4}$ mol/L.

:::corrige
$pH=-\log(5\times10^{-4})=4-\log5=4-0{,}70=\mathbf{3{,}3}$.
:::

**Exercice 2.** Une solution a un pH de 9,5. Calculer $[H_3O^+]$ et $[HO^-]$.

:::corrige
$[H_3O^+]=10^{-9{,}5}=\mathbf{3{,}2\times10^{-10}\ mol/L}$ ; $[HO^-]=\dfrac{10^{-14}}{3{,}2\times10^{-10}}=\mathbf{3{,}2\times10^{-5}\ mol/L}$.
:::

**Exercice 3.** Une solution de pH = 1,0 est diluée 10 fois puis encore 10 fois. Quel est son pH final (acide fort) ?

:::corrige
Dilution totale ×100 : $[H_3O^+]$ passe de $10^{-1}$ à $10^{-3}$ ; **pH = 3,0**.
:::

**Exercice 4.** Quel volume d'eau faut-il ajouter à 20 mL d'une solution à 0,1 mol/L pour obtenir 0,02 mol/L ?

:::corrige
$V_f=\dfrac{0{,}1\times20}{0{,}02}=100$ mL ; volume d'eau à ajouter $=100-20=\mathbf{80\ mL}$.
:::

**Exercice 5 (type BAC).** On mélange 50 mL de solution d'acide chlorhydrique à $2{,}0\times10^{-2}$ mol/L et 150 mL d'eau distillée. Calculer le pH du mélange.

:::corrige
Volume total 200 mL ; $C_f=\dfrac{2{,}0\times10^{-2}\times50}{200}=5{,}0\times10^{-3}$ mol/L. Acide fort : $[H_3O^+]=C_f$ ; $pH=-\log(5{,}0\times10^{-3})=3-\log5=\mathbf{2{,}3}$.
:::

**Exercice 6.** La concentration en $H_3O^+$ d'une solution A est 100 fois celle d'une solution B. De combien de pH diffèrent-elles ?

:::corrige
$\Delta pH=\log100=\mathbf2$ : la solution A a un pH inférieur de 2 unités.
:::

## ⚠️ Pièges classiques du BAC
- Oublier le **signe moins** : $pH=-\log[H_3O^+]$.
- Dire que le pH est **proportionnel** à la concentration : c'est une échelle logarithmique.
- Utiliser $pH+pOH=14$ à une autre température sans précaution.
- Écrire que l'eau très diluée peut avoir un pH > 7 pour un acide.

## ✅ À retenir
- $pH=-\log[H_3O^+]$ ; $K_e=[H_3O^+][HO^-]=10^{-14}$.
- Acide : pH < 7 ; basique : pH > 7.
- $C_iV_i=C_fV_f$.
`

DEEP_PC_5["acide-fort-base-forte"] = String.raw`## 💡 L'essentiel en une phrase
Un **acide fort** ou une **base forte** réagit **totalement** avec l'eau : on peut calculer directement le pH à partir de la concentration apportée.

## 📚 1. Acide fort
Un acide fort $AH$ réagit totalement avec l'eau : $AH+H_2O\to A^-+H_3O^+$.
- Exemples : acide chlorhydrique $HCl$, acide nitrique $HNO_3$, acide sulfurique (première acidité) $H_2SO_4$.
- $[H_3O^+]=C$ et
$$pH=-\log C$$
- Vérification de la force : $pH=-\log C$ (pour $C\le0{,}1$ mol/L).

## 📚 2. Base forte
Une base forte, comme l'hydroxyde de sodium $NaOH$ (soude) ou de potassium $KOH$, se dissocie totalement : $NaOH\to Na^++HO^-$.
- $[HO^-]=C$ et $[H_3O^+]=\dfrac{K_e}{C}$ :
$$pH=14+\log C$$
- Exemple : $C=10^{-2}$ mol/L, pH = 12.

## 📚 3. Domaine de validité
Ces formules sont valables pour $10^{-6.5}<C\le10^{-1}$ mol/L environ. Pour $C<10^{-6}$ mol/L, on doit tenir compte de l'autoprotolyse de l'eau.

## 📚 4. Dilution
- Dilution d'un acide fort $n$ fois : $pH_f=pH_i+\log n$.
- Dilution d'une base forte $n$ fois : $pH_f=pH_i-\log n$.

## 📚 5. Mélange d'un acide fort et d'une base forte
$H_3O^++HO^-\to2H_2O$ (réaction **totale**, $K=10^{14}$).
- On compare $n(H_3O^+)=C_AV_A$ et $n(HO^-)=C_BV_B$.
- Si $n_A>n_B$ : excès d'acide, $[H_3O^+]=\dfrac{n_A-n_B}{V_A+V_B}$.
- Si $n_B>n_A$ : excès de base, $[HO^-]=\dfrac{n_B-n_A}{V_A+V_B}$.
- Si $n_A=n_B$ : pH = 7 (équivalence).

## 📚 6. Chaleur de neutralisation
La réaction est **exothermique** : environ 57 kJ par mole d'eau formée.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — pH d'un acide fort
$HCl$ à $C=5\times10^{-3}$ mol/L : $pH=-\log(5\times10^{-3})=3-0{,}70=\mathbf{2{,}3}$.

### Exemple 2 — pH d'une base forte
$NaOH$ à $C=2\times10^{-3}$ mol/L : $pH=14+\log(2\times10^{-3})=14-2{,}70=\mathbf{11{,}3}$.

### Exemple 3 — Dissolution d'un gaz
On dissout 0,24 L de chlorure d'hydrogène gazeux ($V_m=24$ L/mol) dans de l'eau pour obtenir 1 L de solution : $n=0{,}01$ mol, $C=10^{-2}$ mol/L, **pH = 2**.

### Exemple 4 — Mélange en excès d'acide
$V_A=100$ mL d'HCl à 0,1 mol/L + $V_B=50$ mL de NaOH à 0,1 mol/L : $n_A=0{,}01$ mol, $n_B=0{,}005$ mol ; excès d'acide : $[H_3O^+]=\dfrac{0{,}005}{0{,}15}=3{,}33\times10^{-2}$ ; $pH=\mathbf{1{,}48}$.

### Exemple 5 — Mélange en excès de base
50 mL d'HCl à 0,1 mol/L + 100 mL de NaOH à 0,1 mol/L : $n_B-n_A=0{,}005$ mol ; $[HO^-]=\dfrac{0{,}005}{0{,}15}=3{,}33\times10^{-2}$ ; $pH=14+\log(3{,}33\times10^{-2})=14-1{,}48=\mathbf{12{,}52}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Calculer le pH d'une solution de $HNO_3$ de concentration $4\times10^{-2}$ mol/L.

:::corrige
$pH=-\log(4\times10^{-2})=2-0{,}60=\mathbf{1{,}4}$.
:::

**Exercice 2.** On dissout 0,8 g de soude ($M=40$ g/mol) dans 500 mL d'eau. Calculer le pH.

:::corrige
$n=0{,}02$ mol ; $C=0{,}04$ mol/L ; $pH=14+\log0{,}04=14-1{,}40=\mathbf{12{,}6}$.
:::

**Exercice 3.** On mélange 20 mL de HCl à 0,05 mol/L et 30 mL de NaOH à 0,05 mol/L. Calculer le pH.

:::corrige
$n_A=1\times10^{-3}$ mol ; $n_B=1{,}5\times10^{-3}$ mol ; excès de base $5\times10^{-4}$ mol dans 50 mL : $[HO^-]=10^{-2}$ mol/L ; $pH=\mathbf{12}$.
:::

**Exercice 4.** Un acide fort de pH = 2,5 est dilué 1000 fois. Quel est le nouveau pH ?

:::corrige
$pH=2{,}5+\log1000=\mathbf{5{,}5}$.
:::

## ⚠️ Pièges classiques du BAC
- Utiliser $pH=-\log C$ pour une **base** (la formule est $14+\log C$).
- Oublier de diviser par le **volume total** après mélange.
- Dire qu'une solution acide très diluée devient basique (le pH tend vers 7 sans le dépasser).
- Oublier de comparer **les quantités de matière** avant d'écrire l'excès.

## ✅ À retenir
- Acide fort : $pH=-\log C$ ; base forte : $pH=14+\log C$.
- Mélange : réaction totale $H_3O^++HO^-\to2H_2O$, on cherche l'excès.
- Dilution ×n : acide fort $+\log n$, base forte $-\log n$.
`

DEEP_PC_5["acide-faible-base-faible"] = String.raw`## 💡 L'essentiel en une phrase
Un **acide faible** ou une **base faible** ne réagit que **partiellement** avec l'eau : son pH n'est pas donné par $-\log C$ mais dépend de la **constante d'acidité** $K_a$.

## 📚 1. Réaction d'un acide faible avec l'eau
$$AH+H_2O\rightleftharpoons A^-+H_3O^+$$
- **Coefficient de dissociation** (ou taux d'avancement final) : $\tau=\dfrac{x_f}{x_{max}}=\dfrac{[H_3O^+]}{C}<1$.
- Si $pH>-\log C$ alors l'acide est **faible** ($pH=-\log C$ pour un acide fort).
- $\tau$ **augmente** quand on dilue (l'acide faible se dissocie davantage).

## 📚 2. Constante d'acidité
$$K_a=\frac{[A^-][H_3O^+]}{[AH]}\qquad pK_a=-\log K_a$$
- Plus $K_a$ est grand (donc $pK_a$ petit), plus l'acide est fort.
- Exemple : $pK_a(CH_3COOH/CH_3COO^-)=4{,}75$ ; $pK_a(NH_4^+/NH_3)=9{,}2$.

## 📚 3. Relation de Henderson
$$pH=pK_a+\log\frac{[A^-]}{[AH]}$$
- Si $[A^-]=[AH]$ : $pH=pK_a$.
- Si $pH<pK_a$ : l'acide $AH$ prédomine ; si $pH>pK_a$ : la base $A^-$ prédomine.
- Le diagramme de prédominance se lit sur un axe de pH, coupé au $pK_a$.

## 📚 4. pH d'un acide faible (peu dissocié)
Quand $\tau\ll1$ (acide faible, $pK_a>$ environ 3 et $C$ pas trop faible) :
$$pH=\frac12\left(pK_a-\log C\right)$$
(on suppose $[AH]\approx C$ et $[A^-]\approx[H_3O^+]$).

## 📚 5. Base faible
$B+H_2O\rightleftharpoons BH^++HO^-$. Pour une base faible peu dissociée :
$$pH=\frac12\left(pK_a+14+\log C\right)$$
Une solution d'ammoniac, de $CH_3COO^-$ ou d'amine est **basique**.

## 📚 6. Comparaison acide fort / acide faible
À même concentration $C$, l'acide faible a un pH **plus élevé** que l'acide fort ($[H_3O^+]<C$). À même pH, l'acide faible est plus **concentré**.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Taux de dissociation
Acide éthanoïque à $C=0{,}1$ mol/L, $pH=2{,}9$ : $[H_3O^+]=1{,}26\times10^{-3}$ ; $\tau=\dfrac{1{,}26\times10^{-3}}{0{,}1}=\mathbf{1{,}3\ \%}$ : acide faible.

### Exemple 2 — Constante d'acidité
$K_a=\dfrac{(1{,}26\times10^{-3})^2}{0{,}1-1{,}26\times10^{-3}}\approx1{,}6\times10^{-5}$ ; $pK_a=\mathbf{4{,}8}$.

### Exemple 3 — pH d'un acide faible
$pK_a=4{,}75$ et $C=0{,}05$ mol/L : $pH=\dfrac12(4{,}75+1{,}30)=\mathbf{3{,}0}$.

### Exemple 4 — pH d'une base faible
Ammoniac à $C=0{,}1$ mol/L, $pK_a=9{,}2$ : $pH=\dfrac12(9{,}2+14-1)=\mathbf{11{,}1}$.

### Exemple 5 — Espèce prédominante
Pour le couple $CH_3COOH/CH_3COO^-$, à pH = 6 : $pH>pK_a$ donc $CH_3COO^-$ prédomine, avec $\dfrac{[A^-]}{[AH]}=10^{6-4{,}75}=17{,}8$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Une solution d'acide méthanoïque à 0,01 mol/L a un pH de 2,9. L'acide est-il fort ? Calculer $\tau$.

:::corrige
Si fort, $pH=-\log0{,}01=2$. Ici $pH=2{,}9>2$ : acide **faible**. $[H_3O^+]=1{,}26\times10^{-3}$ ; $\tau=\dfrac{1{,}26\times10^{-3}}{10^{-2}}=\mathbf{12{,}6\ \%}$.
:::

**Exercice 2.** Calculer le pH d'une solution d'acide benzoïque ($pK_a=4{,}2$) à $C=0{,}02$ mol/L.

:::corrige
$pH=\dfrac12(4{,}2-\log0{,}02)=\dfrac12(4{,}2+1{,}70)=\mathbf{2{,}95}$.
:::

**Exercice 3.** Dans une solution de $pH=5{,}75$, quel est le rapport $\dfrac{[CH_3COO^-]}{[CH_3COOH]}$ ($pK_a=4{,}75$) ?

:::corrige
$\dfrac{[A^-]}{[AH]}=10^{pH-pK_a}=10^{1}=\mathbf{10}$.
:::

**Exercice 4.** Calculer le pH d'une solution d'éthanamine ($pK_a=10{,}7$) à 0,05 mol/L.

:::corrige
$pH=\dfrac12(10{,}7+14+\log0{,}05)=\dfrac12(10{,}7+14-1{,}3)=\mathbf{11{,}7}$.
:::

## ⚠️ Pièges classiques du BAC
- Utiliser $pH=-\log C$ pour un acide **faible**.
- Utiliser $\dfrac12(pK_a-\log C)$ sans vérifier que l'acide est **peu dissocié**.
- Inverser le quotient $\dfrac{[A^-]}{[AH]}$ dans Henderson.
- Oublier que $\tau$ augmente avec la **dilution**.

## ✅ À retenir
- $K_a=\dfrac{[A^-][H_3O^+]}{[AH]}$ ; $pH=pK_a+\log\dfrac{[A^-]}{[AH]}$.
- Acide faible : $pH=\frac12(pK_a-\log C)$ ; base faible : $pH=\frac12(pK_a+14+\log C)$.
- $\tau<1$ pour un acide faible.
`

DEEP_PC_5["couples-acide-base"] = String.raw`## 💡 L'essentiel en une phrase
Un **acide** cède un proton $H^+$, une **base** en capte un ; ils forment un **couple acide/base** et la valeur du $pK_a$ permet de **classer** les couples et de **prévoir** les réactions.

## 📚 1. Définitions de Brönsted
- **Acide** : espèce capable de **céder** un proton $H^+$.
- **Base** : espèce capable de **capter** un proton $H^+$.
- **Couple** $AH/A^-$ : demi-équation $AH=A^-+H^+$.
- L'eau est un **ampholyte** (couples $H_3O^+/H_2O$ et $H_2O/HO^-$).
- Une **réaction acido-basique** est un transfert de proton entre l'acide d'un couple et la base d'un autre.

## 📚 2. Couples à connaître
| Couple | $pK_a$ |
|---|---|
| $H_3O^+/H_2O$ | 0 |
| $CH_3COOH/CH_3COO^-$ | 4,75 |
| $NH_4^+/NH_3$ | 9,2 |
| $H_2O/HO^-$ | 14 |
| $CH_3NH_3^+/CH_3NH_2$ | 10,7 |
| $HCOOH/HCOO^-$ | 3,75 |

## 📚 3. Classement des couples
Par ordre de $pK_a$ croissant :
- l'acide le plus **fort** a le plus petit $pK_a$ ;
- la base la plus **forte** correspond au plus grand $pK_a$.
- Un acide fort a un $pK_a<0$ (dans l'eau : $H_3O^+$ est l'acide le plus fort possible) ; une base forte a un $pK_a>14$.

## 📚 4. Règle du gamma
Pour deux couples $A_1H/A_1^-$ ($pK_{a1}$) et $A_2H/A_2^-$ ($pK_{a2}$) avec $pK_{a1}<pK_{a2}$ :
- La réaction **thermodynamiquement favorisée** est entre l'acide le plus fort ($A_1H$) et la base la plus forte ($A_2^-$) :
$$A_1H+A_2^-\rightleftharpoons A_1^-+A_2H$$
- Constante d'équilibre : $K=10^{pK_{a2}-pK_{a1}}$.
- Si $\Delta pK_a\ge3$ environ ($K\ge10^3$), la réaction est considérée comme **quasi totale**.

## 📚 5. Diagramme de prédominance et zone de virage
- Pour $pH<pK_a$ : $AH$ prédomine ; pour $pH>pK_a$ : $A^-$ prédomine.
- Un **indicateur coloré** est un couple acide/base dont les deux formes ont des couleurs différentes ; sa zone de virage est $pK_a\pm1$.
- Exemples : hélianthine (3,1–4,4), BBT (6,0–7,6), phénolphtaléine (8,2–10).

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Couples de l'eau et de l'acide éthanoïque
$CH_3COOH+H_2O\rightleftharpoons CH_3COO^-+H_3O^+$. Couples : $CH_3COOH/CH_3COO^-$ et $H_3O^+/H_2O$.

### Exemple 2 — Prévoir une réaction
$CH_3COOH$ ($pK_a=4{,}75$) + $NH_3$ ($pK_a$ du couple $=9{,}2$) : la réaction est favorisée : $CH_3COOH+NH_3\rightleftharpoons CH_3COO^-+NH_4^+$, $K=10^{9{,}2-4{,}75}=10^{4{,}45}\approx2{,}8\times10^4$ : quasi totale.

### Exemple 3 — Réaction défavorisée
$NH_4^+$ ($pK_a=9{,}2$) + $CH_3COO^-$ ($pK_a=4{,}75$) : $K=10^{4{,}75-9{,}2}=10^{-4{,}45}\approx3{,}5\times10^{-5}$ : réaction **très limitée**.

### Exemple 4 — Choix d'un indicateur
Pour un dosage d'acide faible par base forte avec équivalence à pH = 8,5, on choisit la **phénolphtaléine** (zone 8,2–10).

### Exemple 5 — Espèce prédominante
Dans une solution de pH = 10, le couple $NH_4^+/NH_3$ ($pK_a=9{,}2$) : $pH>pK_a$ donc $NH_3$ prédomine, $\dfrac{[NH_3]}{[NH_4^+]}=10^{0{,}8}\approx6{,}3$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Écrire les demi-équations acido-basiques des couples $NH_4^+/NH_3$ et $H_2O/HO^-$, puis l'équation de la réaction entre $NH_3$ et $H_2O$.

:::corrige
$NH_4^+=NH_3+H^+$ ; $H_2O=HO^-+H^+$.
$NH_3+H_2O\rightleftharpoons NH_4^++HO^-$.
:::

**Exercice 2.** Classer par force croissante les acides $HCOOH$ (3,75), $CH_3COOH$ (4,75), $NH_4^+$ (9,2).

:::corrige
Plus le $pK_a$ est grand, plus l'acide est faible : $NH_4^+<CH_3COOH<HCOOH$ (de moins fort à plus fort).
:::

**Exercice 3.** Calculer la constante de la réaction $HCOOH+CH_3NH_2\rightleftharpoons HCOO^-+CH_3NH_3^+$.

:::corrige
$K=10^{pK_{a}(CH_3NH_3^+/CH_3NH_2)-pK_a(HCOOH/HCOO^-)}=10^{10{,}7-3{,}75}=10^{6{,}95}\approx\mathbf{8{,}9\times10^6}$ : quasi totale.
:::

**Exercice 4.** Quelle est la couleur du BBT dans une solution de pH = 3 ?

:::corrige
Le BBT a sa zone de virage entre 6,0 et 7,6 ; à pH = 3 < 6, c'est la forme acide : **jaune**.
:::

## ⚠️ Pièges classiques du BAC
- Confondre l'acide fort ($pK_a$ petit) et la base forte ($pK_a$ grand).
- Inverser les couples dans la règle du gamma.
- Écrire $K=10^{pK_{a1}-pK_{a2}}$ (le signe doit donner $K>1$ pour la réaction favorisée).
- Oublier que l'eau est à la fois acide et base.

## ✅ À retenir
- $AH=A^-+H^+$ ; transfert de proton.
- Plus le $pK_a$ est faible, plus l'acide est fort.
- $K=10^{pK_a(\text{base réagissante})-pK_a(\text{acide réagissant})}$.
`

DEEP_PC_5["reactions-acido-basiques"] = String.raw`## 💡 L'essentiel en une phrase
Les réactions entre acides et bases permettent de comprendre les **mélanges** et de fabriquer des **solutions tampons**, dont le pH varie très peu par ajout modéré d'acide, de base ou par dilution.

## 📚 1. Réaction acide faible - base forte
$AH+HO^-\to A^-+H_2O$ ; $K=10^{14-pK_a}$ (très grand) : réaction **quasi totale**.

## 📚 2. Réaction base faible - acide fort
$A^-+H_3O^+\to AH+H_2O$ ; $K=10^{pK_a}$ : réaction **quasi totale**.

## 📚 3. Méthode du tableau d'avancement
1. Écrire l'équation et calculer les quantités initiales.
2. Tableau d'avancement : état initial, final (réactif limitant).
3. Calculer la **composition finale** puis le pH avec Henderson.

## 📚 4. Solution tampon
Une solution **tampon** est un mélange d'un **acide faible** et de sa **base conjuguée** en quantités voisines. Son pH :
- vaut $pK_a$ quand les concentrations sont égales ;
- varie **peu** par ajout modéré d'acide ou de base, ou par dilution modérée.
- Domaine d'efficacité : $pH=pK_a\pm1$.
- Exemple : le sang (pH $\approx7{,}4$) est tamponné par $H_2CO_3/HCO_3^-$.

### Préparation d'un tampon
1. Mélanger $AH$ et $A^-$ (par exemple acide éthanoïque et éthanoate de sodium).
2. Ou faire réagir un acide faible avec une base forte en **défaut** (ou une base faible avec un acide fort en défaut) : on forme $A^-$ et il reste $AH$.

## 📚 5. Pouvoir tampon
Le pH tampon dépend du rapport $\dfrac{n(A^-)}{n(AH)}$ (pas de la dilution) ; plus les quantités sont grandes, plus le tampon est **efficace**.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Constante de réaction
$CH_3COOH+HO^-\to CH_3COO^-+H_2O$ : $K=10^{14-4{,}75}=10^{9{,}25}\approx1{,}8\times10^9$ : réaction totale.

### Exemple 2 — Mélange donnant un tampon
On mélange 100 mL de $CH_3COOH$ à 0,2 mol/L et 50 mL de NaOH à 0,2 mol/L. $n(AH)=0{,}02$ mol, $n(HO^-)=0{,}01$ mol. Après réaction : $n(A^-)=0{,}01$ mol, $n(AH)=0{,}01$ mol. $pH=pK_a+\log1=\mathbf{4{,}75}$ (demi-équivalence : **tampon**).

### Exemple 3 — Ajout d'acide à un tampon
Au tampon précédent ($V=0{,}15$ L) on ajoute $10^{-3}$ mol de HCl : $A^-$ diminue à $0{,}009$ mol et $AH$ augmente à $0{,}011$ mol. $pH=4{,}75+\log\dfrac{0{,}009}{0{,}011}=4{,}75-0{,}087=\mathbf{4{,}66}$.
Avec la même quantité d'acide dans 150 mL d'eau pure, le pH passerait de 7 à 2,2.

### Exemple 4 — Dilution d'un tampon
On dilue le tampon 10 fois : le rapport $\dfrac{[A^-]}{[AH]}$ ne change pas, donc le pH reste égal à $\mathbf{4{,}75}$.

### Exemple 5 — Préparation d'un tampon à pH donné
Pour obtenir pH = 5,05 avec le couple $CH_3COOH/CH_3COO^-$ ($pK_a=4{,}75$) : $\dfrac{[A^-]}{[AH]}=10^{0{,}30}\approx2$ ; il faut deux fois plus de base que d'acide.

## ✏️ Exercices d'entraînement
**Exercice 1.** On ajoute 30 mL de NaOH à 0,1 mol/L à 50 mL de $CH_3COOH$ à 0,1 mol/L. Calculer le pH.

:::corrige
$n(HO^-)=3\times10^{-3}$ mol ; $n(AH)=5\times10^{-3}$ mol. Après réaction : $n(A^-)=3\times10^{-3}$, $n(AH)=2\times10^{-3}$ mol. $pH=4{,}75+\log\dfrac32=4{,}75+0{,}18=\mathbf{4{,}93}$.
:::

**Exercice 2.** Comment préparer 1 L de tampon pH = 9,2 à partir de $NH_4Cl$ et de $NH_3$ ?

:::corrige
$pH=pK_a$ donc $[NH_3]=[NH_4^+]$ : par exemple 0,1 mol de $NH_4Cl$ et 0,1 mol de $NH_3$ dans 1 L.
:::

**Exercice 3.** Pourquoi le pH d'un tampon varie-t-il peu par ajout de base ?

:::corrige
La base ajoutée ($HO^-$) réagit avec l'acide faible $AH$ présent en quantité importante et se transforme en $A^-$ ; le rapport $\dfrac{n(A^-)}{n(AH)}$ ne change que légèrement, donc le pH varie peu.
:::

**Exercice 4.** Un tampon contient 0,1 mol/L de $AH$ et 0,1 mol/L de $A^-$ ($pK_a=7$). On ajoute $10^{-2}$ mol de base forte dans 1 L. Quel est le pH ?

:::corrige
$n(A^-)=0{,}11$ mol ; $n(AH)=0{,}09$ mol ; $pH=7+\log\dfrac{0{,}11}{0{,}09}=7+0{,}087=\mathbf{7{,}09}$.
:::

## ⚠️ Pièges classiques du BAC
- Prendre pour réactif limitant celui qui est en plus grande quantité.
- Oublier que le mélange doit contenir **les deux formes** de l'acide pour être tampon.
- Dire qu'un tampon est insensible à tout ajout : il y a une **capacité limite**.
- Utiliser des **concentrations** dans Henderson sans vérifier que le volume est commun (on peut utiliser les quantités de matière).

## ✅ À retenir
- Acide faible + base forte : réaction quasi totale.
- Tampon : $AH$ et $A^-$ voisins ; $pH=pK_a+\log\dfrac{n(A^-)}{n(AH)}$.
- La dilution modérée ne change pas le pH d'un tampon.
`

DEEP_PC_5["dosage"] = String.raw`## 💡 L'essentiel en une phrase
**Doser** un acide par une base (ou l'inverse), c'est déterminer sa concentration en repérant l'**équivalence**, où les réactifs ont été mélangés dans les proportions stœchiométriques.

## 📚 1. Principe et dispositif
- Burette graduée contenant le **titrant** (concentration connue) ; bécher contenant le volume $V_A$ de la solution à doser (prélevée à la pipette jaugée).
- Agitation magnétique ; suivi du pH (pH-mètre) ou indicateur coloré.
- Réaction de dosage : **rapide, totale et unique**.

## 📚 2. Équivalence
À l'équivalence, les quantités de réactifs sont dans les **proportions stœchiométriques** :
$$n_{\text{titré}}=n_{\text{titrant versé}}$$
Pour $AH+HO^-\to A^-+H_2O$ : $C_AV_A=C_BV_{BE}$, donc
$$C_A=\frac{C_BV_{BE}}{V_A}$$

## 📚 3. Repérer l'équivalence
**a) Méthode des tangentes** : on trace deux tangentes parallèles de part et d'autre du saut de pH ; la parallèle équidistante coupe la courbe au **point d'équivalence**.
**b) Courbe dérivée** $\dfrac{dpH}{dV}$ : le maximum correspond à $V_E$.
**c) Indicateur coloré** : sa zone de virage doit contenir le pH à l'équivalence.

## 📚 4. Allure des courbes
**Acide fort par base forte** : $pH_E=7$ ; saut de pH très net.
**Acide faible par base forte** : $pH_E>7$ (base conjuguée faible) ; à la **demi-équivalence** ($V=V_E/2$) : $pH=pK_a$.
**Base faible par acide fort** : $pH_E<7$ ; à la demi-équivalence, $pH=pK_a$ du couple.

## 📚 5. Le pH à l'équivalence
- Acide fort + base forte : espèces spectatrices, pH = 7.
- Acide faible + base forte : solution de base faible $A^-$, pH > 7.
- Base faible + acide fort : solution d'acide faible $BH^+$, pH < 7.
- Choix de l'indicateur : zone de virage qui contient le $pH_E$ (BBT pour fort/fort, phénolphtaléine pour faible/fort, hélianthine pour base faible/acide fort).

## 📚 6. Dosage d'un produit courant
Dosage d'un vinaigre : le vinaigre contient de l'acide éthanoïque. Il est souvent **dilué 10 fois** avant dosage ; le degré d'acidité s'exprime en grammes d'acide pour 100 g de vinaigre.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Dosage fort / fort
20 mL de HCl sont dosés par NaOH à 0,10 mol/L ; équivalence pour $V_E=15$ mL : $C_A=\dfrac{0{,}10\times15}{20}=\mathbf{0{,}075\ mol/L}$ ; pH à l'équivalence = 7.

### Exemple 2 — Dosage d'un vinaigre
On dose 10 mL de vinaigre dilué 10 fois ($S$) par NaOH à 0,10 mol/L ; $V_E=12{,}5$ mL.
$C_S=\dfrac{0{,}10\times12{,}5}{10}=0{,}125$ mol/L ; $C_{vinaigre}=10C_S=\mathbf{1{,}25\ mol/L}$.
Masse d'acide éthanoïque par litre : $1{,}25\times60=75$ g/L, soit environ 7,5 % (« 7,5° »).

### Exemple 3 — Détermination du $pK_a$
À la demi-équivalence ($V=\dfrac{V_E}{2}$) on lit $pH=4{,}8$ : $pK_a=\mathbf{4{,}8}$ (acide éthanoïque).

### Exemple 4 — Choix de l'indicateur
Pour le vinaigre, $pH_E\approx8{,}7$ : on choisit la **phénolphtaléine** (zone 8,2–10). Le BBT (6,0–7,6) virerait trop tôt.

### Exemple 5 — Dosage d'une base faible
20 mL d'ammoniac sont dosés par HCl à 0,05 mol/L, $V_E=16$ mL : $C_B=\dfrac{0{,}05\times16}{20}=\mathbf{0{,}04\ mol/L}$ ; $pH_E<7$, indicateur : rouge de méthyle ou hélianthine.

## ✏️ Exercices d'entraînement
**Exercice 1.** On dose 25 mL d'une solution de soude par HCl à 0,20 mol/L ; $V_E=12{,}5$ mL. Calculer la concentration de la soude.

:::corrige
$C_B=\dfrac{0{,}20\times12{,}5}{25}=\mathbf{0{,}10\ mol/L}$.
:::

**Exercice 2.** On dose 20 mL d'acide lactique (monoacide) par NaOH à 0,05 mol/L ; $V_E=16$ mL. Calculer la concentration et la masse d'acide par litre ($M=90$ g/mol).

:::corrige
$C=\dfrac{0{,}05\times16}{20}=0{,}04$ mol/L ; $m=0{,}04\times90=\mathbf{3{,}6\ g/L}$.
:::

**Exercice 3.** À la demi-équivalence du dosage de 20 mL d'un acide faible, on lit pH = 3,75 et $V_E=10$ mL. Quel est le $pK_a$ ? Quel volume de base a-t-on versé ?

:::corrige
$pK_a=\mathbf{3{,}75}$ ; volume versé $=\dfrac{V_E}{2}=\mathbf{5\ mL}$.
:::

**Exercice 4.** Un acide faible (pH_E = 8,9) est dosé. Quel indicateur choisir : BBT (6,0–7,6) ou phénolphtaléine (8,2–10) ? Justifier.

:::corrige
La **phénolphtaléine**, car sa zone de virage contient le pH à l'équivalence (8,9) ; le BBT virerait avant l'équivalence.
:::

**Exercice 5.** On dilue 10 fois un vinaigre. Pourquoi ?

:::corrige
Le vinaigre est trop concentré (≈ 1 mol/L) : le volume équivalent serait trop grand pour la burette, et la coloration du produit gênerait le repérage. La dilution donne un volume équivalent mesurable (≈ 10 à 20 mL).
:::

## ⚠️ Pièges classiques du BAC
- Oublier de **multiplier par le facteur de dilution**.
- Prendre $C_AV_A=C_BV_B$ pour **tous** les volumes versés : c'est valable **seulement à l'équivalence**.
- Dire que le pH à l'équivalence est toujours 7.
- Confondre demi-équivalence ($pH=pK_a$) et équivalence.
- Choisir l'indicateur sans comparer sa zone de virage au $pH_E$.

## ✅ À retenir
- À l'équivalence : $C_AV_A=C_BV_{BE}$ (coefficients 1:1).
- $pH_E$ = 7 (fort/fort) ; > 7 (acide faible/base forte) ; < 7 (base faible/acide fort).
- Demi-équivalence : $pH=pK_a$.
`
