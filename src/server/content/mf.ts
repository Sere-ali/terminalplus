// Mathématiques financières (G2) – leçons détaillées. Tableaux calculés par programme puis relus.

export const MF: Record<string, string> = {}

MF["mf-interets-simples"] = String.raw`## 💡 L'essentiel en une phrase
Avec l'**intérêt simple**, l'intérêt est calculé **toujours sur le capital de départ** : il ne produit pas lui-même d'intérêts. On l'utilise pour les **placements et prêts de courte durée (moins d'un an)** et pour l'**escompte des effets de commerce**.

## 📚 1. Vocabulaire et formules
- **C** : capital placé ou prêté. **t** : taux d'intérêt **annuel** (en %, à convertir en décimal : 6 % = 0,06). **n** : durée. **I** : intérêt. **A** : valeur acquise.
- **Durée en années** : $$ I = C \times t \times n $$
- **Durée en mois** : $$ I = \frac{C \times t \times n}{12} $$
- **Durée en jours** (année commerciale de **360 jours**, mois de **30 jours**) : $$ I = \frac{C \times t \times n}{360} $$
- **Valeur acquise** : $$ A = C + I = C\,(1 + t\,n) $$
- Pour retrouver une inconnue : $$ C = \frac{I}{t\,n} \qquad t = \frac{I}{C\,n} \qquad n = \frac{I}{C\,t} $$

**Tableau de conversion de la durée :**

| Durée | Valeur de n à utiliser |
|---|---|
| 3 ans | n = 3 |
| 9 mois | n = 9/12 = 0,75 an |
| 45 jours | n = 45/360 = 0,125 an |
| Du 15 mars au 30 juin | 15 + 30 + 30 + 30 = 105 jours (mois de 30 jours, selon l'énoncé) |

## 📚 2. Exemple corrigé
On place **500 000 F** à **6 %** pendant **9 mois**.
- I = 500 000 × 0,06 × 9/12 = **22 500 F**.
- A = 500 000 + 22 500 = **522 500 F**.

## 📚 3. L'escompte commercial
Un **effet de commerce** de **valeur nominale N** payable à l'échéance peut être **escompté** (cédé à une banque) **n jours avant l'échéance** : la banque retient un **escompte**.
$$ E = \frac{N \times t \times n}{360} \qquad \text{Valeur actuelle commerciale} = N - E $$

**Les agios** comprennent l'escompte **plus les commissions et la TVA sur commissions** :
$$ Agios = Escompte + Commissions + TVA\ sur\ commissions \qquad Net\ cr\acute{e}dit\acute{e} = N - Agios $$

**Exemple :** effet de **1 000 000 F** escompté **60 jours** avant l'échéance à **12 %** ; commission de **5 000 F** ; TVA 18 % sur la commission.

| Élément | Calcul | Montant |
|---|---|---|
| Escompte | 1 000 000 × 0,12 × 60/360 | 20 000 |
| Commission | | 5 000 |
| TVA sur commission | 5 000 × 18 % | 900 |
| **Agios** | | **25 900** |
| **Net crédité** | 1 000 000 − 25 900 | **974 100** |

**Taux réel de l'escompte (taux effectif)** : $$ T = \frac{Agios \times 360}{Net\ cr\acute{e}dit\acute{e} \times n} = \frac{25\,900 \times 360}{974\,100 \times 60} \approx 15{,}95\ \% $$ Il est plus élevé que le taux affiché (12 %) car la banque prête **moins** que le nominal.

## 📚 4. Équivalence d'effets et échéance commune
Deux effets sont **équivalents** à une date donnée s'ils ont la **même valeur actuelle** à cette date (avec le même taux).

**Remplacer plusieurs effets par un effet unique** : on égalise les valeurs actuelles.

**Exemple :** deux effets de **400 000 F** (échéance dans 30 jours) et **600 000 F** (dans 60 jours) sont remplacés par **un seul effet de 1 000 000 F**. Taux d'escompte : 12 %.

| Effet | Nominal | Jours | Valeur actuelle = N (1 − t n/360) |
|---|---|---|---|
| 1 | 400 000 | 30 | 400 000 × 0,99 = 396 000 |
| 2 | 600 000 | 60 | 600 000 × 0,98 = 588 000 |
| **Total** | | | **984 000** |

Effet unique de 1 000 000 à x jours : 1 000 000 (1 − 0,12 x/360) = 984 000 ⇒ 0,12 x/360 = 0,016 ⇒ **x = 48 jours**.

**Échéance moyenne** (quand le nominal du nouvel effet = somme des nominaux) :
$$ n = \frac{400\,000 \times 30 + 600\,000 \times 60}{1\,000\,000} = 48\ jours $$ (on retrouve le même résultat).

## ✏️ Exercices
**Exercice 1.** On place 800 000 F à 5 % pendant 3 ans. Calcule l'intérêt et la valeur acquise.

:::corrige
I = 800 000 × 0,05 × 3 = **120 000 F** ; A = **920 000 F**.
:::

**Exercice 2.** Un capital de 600 000 F rapporte 9 000 F d'intérêt en 75 jours. Quel est le taux ?

:::corrige
t = I × 360 / (C × n) = 9 000 × 360 / (600 000 × 75) = 3 240 000 / 45 000 000 = 0,072 ⇒ **7,2 %**.
:::

**Exercice 3.** Un effet de 600 000 F est escompté à 9 % pour 60 jours. Calcule l'escompte, la valeur actuelle et la valeur actuelle si la banque retient en plus 2 500 F de commission (TVA ignorée).

:::corrige
Escompte = 600 000 × 0,09 × 60/360 = **9 000** ; valeur actuelle = **591 000**. Avec commission : 591 000 − 2 500 = **588 500 F**.
:::

**Exercice 4.** Deux effets de 300 000 F (à 20 jours) et 500 000 F (à 50 jours) sont remplacés par un effet unique de 800 000 F. Quelle est l'échéance moyenne ?

:::corrige
n = (300 000 × 20 + 500 000 × 50) / 800 000 = (6 000 000 + 25 000 000) / 800 000 = **38,75 jours** (soit environ 39 jours).
:::

## ⚠️ Pièges
- Convertir le **taux en décimal** et la **durée dans la même unité que le taux** (le taux est annuel).
- L'année commerciale a **360 jours**, pas 365.
- L'escompte se calcule sur le **nominal**, la valeur actuelle est **plus petite** que le nominal.
- Le **taux réel** de l'escompte est supérieur au taux affiché.

## 🏆 À retenir pour le BAC
I = C t n (n en années) ; mois : ÷ 12 ; jours : ÷ 360 ; A = C + I ; escompte commercial E = N t n / 360 ; agios = escompte + commissions + TVA ; échéance moyenne = Σ(N × n) / ΣN.
`

MF["mf-interets-composes"] = String.raw`## 💡 L'essentiel en une phrase
Avec les **intérêts composés**, à la fin de chaque période les intérêts sont **ajoutés au capital** et produisent à leur tour des intérêts : on dit que le capital **« capitalise »**. On l'utilise pour les **placements de plus d'un an**.

## 📚 1. Formules fondamentales
- **Valeur acquise** après **n** périodes au taux **i par période** (en décimal) : $$ A_n = C\,(1 + i)^n $$
- **Valeur actuelle** (capital à placer aujourd'hui pour obtenir A dans n périodes) : $$ C = A_n\,(1 + i)^{-n} $$
- **Taux de rendement** : $$ i = \left(\frac{A_n}{C}\right)^{\frac{1}{n}} - 1 $$
- **Durée de placement** : $$ n = \frac{\ln\left(\dfrac{A_n}{C}\right)}{\ln(1 + i)} $$
- **Intérêts totaux** : $$ I = A_n - C $$

## 📚 2. Exemple corrigé et comparaison avec l'intérêt simple
On place **1 000 000 F à 8 %** :

| Année | Valeur acquise (intérêt simple) | Valeur acquise (intérêts composés) | Écart |
|---|---|---|---|
| 1 | 1 080 000 | 1 080 000 | 0 |
| 2 | 1 160 000 | 1 166 400 | 6 400 |
| 3 | 1 240 000 | 1 259 712 | 19 712 |
| 4 | 1 320 000 | 1 360 489 | 40 489 |
| 5 | 1 400 000 | 1 469 328 | 69 328 |

Au bout de **3 ans**, A₃ = 1 000 000 × 1,08³ = **1 259 712 F**. L'écart grandit : c'est l'**effet des intérêts composés**.

## 📚 3. Périodes non annuelles et taux équivalents
- **Taux proportionnel** (intérêt simple) : taux annuel ÷ nombre de périodes (12 % annuel → 1 % par mois).
- **Taux équivalent** (intérêts composés) : le taux par période qui donne **le même résultat qu'un an** : $$ (1 + i_k)^k = 1 + i $$
- **Taux semestriel équivalent à 10 %** : $$ i_s = \sqrt{1{,}10} - 1 \approx 4{,}88\ \% $$ (et non 5 %).
- **Taux mensuel équivalent à 12 %** : $$ i_m = 1{,}12^{1/12} - 1 \approx 0{,}949\ \% $$

**Durée non entière** : si la durée est de 3 ans et 4 mois, on peut écrire (convention rationnelle) A = C (1 + i)^{3 + 4/12}, ou (convention commerciale) A = C (1 + i)³ (1 + i × 4/12). L'énoncé précise laquelle utiliser.

## 📚 4. Valeur actuelle et équivalence de capitaux
**Exemple :** quelle somme placer à **5 %** pour avoir **1 102 500 F** dans **2 ans** ?
C = 1 102 500 × 1,05⁻² = 1 102 500 / 1,1025 = **1 000 000 F**.

**Équivalence de capitaux à intérêts composés** : deux capitaux sont équivalents à une date si leurs valeurs actuelles à cette date sont égales.
Exemple : à 10 %, 1 100 000 F dans 1 an équivalent à 1 000 000 F aujourd'hui.

## 📚 5. Doubler son capital
À **8 %**, le capital double quand 1,08ⁿ = 2 ⇒ n = ln 2 / ln 1,08 ≈ **9 ans** (règle des 72 : 72 / 8 = 9).

## ✏️ Exercices
**Exercice 1.** Quelle est la valeur acquise de 500 000 F placés 2 ans à 10 % ?

:::corrige
A₂ = 500 000 × 1,1² = 500 000 × 1,21 = **605 000 F**. Intérêts = 105 000 F.
:::

**Exercice 2.** Quelle somme faut-il placer aujourd'hui à 6 % pour avoir 1 191 016 F dans 3 ans ?

:::corrige
1,06³ = 1,191016 ⇒ C = 1 191 016 / 1,191016 = **1 000 000 F**.
:::

**Exercice 3.** Un capital de 2 000 000 F devient 2 662 000 F en 3 ans. Quel est le taux annuel ?

:::corrige
(2 662 000 / 2 000 000)^{1/3} = 1,331^{1/3} = **1,10** ⇒ i = **10 %**. Vérification : 1,1³ = 1,331 ✓.
:::

**Exercice 4.** À quel taux mensuel équivalent correspond un taux annuel de 21 % ? (1,21^{1/12} ≈ 1,01615)

:::corrige
i_m = 1,21^{1/12} − 1 ≈ **1,615 %** par mois (et non 21/12 = 1,75 %).
:::

## ⚠️ Pièges
- **Ne jamais diviser** le taux annuel par 12 en intérêts composés : utiliser le **taux équivalent**.
- Le taux **i** et la durée **n** doivent être dans la **même unité** (année avec année, mois avec mois).
- Les intérêts composés rapportent **plus** que les intérêts simples dès que la durée dépasse une période.

## 🏆 À retenir pour le BAC
A = C (1 + i)ⁿ ; C = A (1 + i)⁻ⁿ ; (1 + i_k)^k = 1 + i ; n = ln(A/C) / ln(1 + i) ; intérêts = A − C.
`

MF["mf-annuites"] = String.raw`## 💡 L'essentiel en une phrase
Une **suite d'annuités** est une série de **versements réguliers** (par an, par semestre, par mois…) ; on cherche soit leur **valeur acquise** (ce qu'on aura accumulé : **épargne**), soit leur **valeur actuelle** (ce que valent aujourd'hui ces versements : **remboursement d'un emprunt**).

## 📚 1. Vocabulaire
- **a** : montant de l'annuité (constante). **n** : nombre d'annuités. **i** : taux par période (en décimal).
- **Annuités de fin de période** (« postnumerando ») : versées à la **fin** de chaque période. C'est le cas **par défaut**.
- **Annuités de début de période** (« prénumerando ») : versées au **début** de chaque période.

## 📚 2. Formules (annuités constantes de fin de période)
$$ V_n = a \times \frac{(1 + i)^n - 1}{i} \qquad\text{(valeur acquise, juste après le dernier versement)} $$
$$ V_0 = a \times \frac{1 - (1 + i)^{-n}}{i} \qquad\text{(valeur actuelle, un an avant le premier versement)} $$
**Passage de l'un à l'autre** : $$ V_n = V_0\,(1 + i)^n $$
**Annuités de début de période** : multiplier le résultat par **(1 + i)**.
**Annuité à verser pour constituer un capital V** : $$ a = V_n \times \frac{i}{(1 + i)^n - 1} $$

## 📚 3. Exemple 1 : constituer une épargne
On verse **100 000 F par an pendant 3 ans** à **10 %**, à la fin de chaque année.

| Versement | Date | Valeur acquise à la fin de la 3ᵉ année |
|---|---|---|
| 1ᵉʳ | fin de l'année 1 | 100 000 × 1,1² = 121 000 |
| 2ᵉ | fin de l'année 2 | 100 000 × 1,1 = 110 000 |
| 3ᵉ | fin de l'année 3 | 100 000 |
| **Total** | | **331 000** |

Par la formule : V₃ = 100 000 × (1,1³ − 1) / 0,1 = 100 000 × 3,31 = **331 000 F** ✓.

## 📚 4. Exemple 2 : annuité nécessaire
On veut disposer de **5 000 000 F dans 5 ans** en plaçant chaque année à **8 %** (fin d'année).
$$ a = 5\,000\,000 \times \frac{0{,}08}{1{,}08^5 - 1} = 5\,000\,000 \times \frac{0{,}08}{0{,}469328} \approx 852\,285\ F $$
Total versé = 5 × 852 282 = 4 261 410 F ; intérêts gagnés ≈ 738 590 F.

## 📚 5. Exemple 3 : valeur actuelle
Quelle somme est équivalente à **3 annuités de 200 000 F** (fin d'année) au taux de **5 %** ?
V₀ = 200 000 × (1 − 1,05⁻³) / 0,05 = 200 000 × 2,723248 ≈ **544 650 F**.

## 📚 6. Exemple 4 : annuités de début de période
**100 000 F au début de chaque année pendant 3 ans à 10 %** : V₃ = 331 000 × 1,1 = **364 100 F**.

## ✏️ Exercices
**Exercice 1.** Annuités de 200 000 F pendant 2 ans à 5 % (fin d'année). Valeur acquise ?

:::corrige
V₂ = 200 000 × (1,05² − 1)/0,05 = 200 000 × 2,05 = **410 000 F**. (Contrôle : 200 000 × 1,05 + 200 000 = 410 000.)
:::

**Exercice 2.** On dépose 150 000 F à la fin de chaque année pendant 4 ans à 6 %. Capital final ? (1,06⁴ = 1,262477)

:::corrige
V₄ = 150 000 × (1,262477 − 1)/0,06 = 150 000 × 4,374616 ≈ **656 192 F**.
:::

**Exercice 3.** Mêmes versements, mais au début de chaque année. Capital final ?

:::corrige
656 192 × 1,06 ≈ **695 563 F**.
:::

**Exercice 4.** Interprète la valeur actuelle d'une suite d'annuités.

:::corrige
C'est la somme qu'il faudrait placer **aujourd'hui** pour pouvoir effectuer tous les versements prévus ; c'est aussi le **montant d'un emprunt** qu'on rembourse par ces annuités.
:::

## ⚠️ Pièges
- Vérifier si les versements sont en **fin** ou en **début** de période.
- La valeur **acquise** se calcule à la date du **dernier** versement ; la valeur **actuelle**, **une période avant le premier**.
- i doit être le taux **par période de versement**.

## 🏆 À retenir pour le BAC
Vₙ = a [(1+i)ⁿ − 1]/i ; V₀ = a [1 − (1+i)⁻ⁿ]/i ; début de période : × (1+i) ; a = Vₙ · i / [(1+i)ⁿ − 1].
`

MF["mf-emprunts"] = String.raw`## 💡 L'essentiel en une phrase
Un **emprunt indivis** (contracté auprès d'**un seul prêteur**, comme une banque) se rembourse par des **annuités** : chaque annuité contient les **intérêts** de la période (calculés sur le **capital restant dû**) et un **amortissement** (remboursement d'une partie du capital).

## 📚 1. Les relations de base
- **Annuité** $a_k$ = intérêt $I_k$ + amortissement $M_k$.
- **Intérêt de la période** : $$ I_k = Capital\ restant\ d\hat{u}\ au\ d\acute{e}but \times i $$
- **Capital restant dû** après le versement k : $C_k = C_{k-1} - M_k$.
- **Somme des amortissements** = **capital emprunté**.
- **Coût total du crédit** = somme des intérêts = somme des annuités − capital.

## 📚 2. Les trois modes de remboursement

| Mode | Principe | Particularité |
|---|---|---|
| **Annuités constantes** | Même annuité chaque année | Les **intérêts diminuent**, les **amortissements augmentent** (de 1 + i à chaque fois) |
| **Amortissements constants** | Même amortissement M = C / n | L'**annuité diminue** chaque année |
| **Remboursement in fine** | On paie seulement les intérêts, le capital est rendu **à la dernière échéance** | Annuités d'intérêts constantes |

## 📚 3. Annuités constantes
$$ a = C \times \frac{i}{1 - (1 + i)^{-n}} $$
Les amortissements forment une **suite géométrique de raison (1 + i)** : $M_{k+1} = M_k (1 + i)$.

**Exemple :** emprunt de **5 000 000 F** à **10 %** en **4 ans**, annuités constantes (fin d'année). a ≈ **1 577 354 F**.

| Année | Capital dû début | Intérêt (10 %) | Amortissement | Annuité | Capital dû fin |
|---|---|---|---|---|---|
| 1 | 5 000 000 | 500 000 | 1 077 354 | 1 577 354 | 3 922 646 |
| 2 | 3 922 646 | 392 265 | 1 185 089 | 1 577 354 | 2 737 557 |
| 3 | 2 737 557 | 273 756 | 1 303 598 | 1 577 354 | 1 433 959 |
| 4 | 1 433 959 | 143 396 | 1 433 959 | 1 577 355 | 0 |

Intérêts totaux = **1 309 417 F** (arrondis ; la dernière annuité ajuste les centimes).

## 📚 4. Amortissements constants
**Exemple :** emprunt de **4 000 000 F** à **10 %** en **4 ans** : M = 1 000 000 par an.

| Année | Capital dû début | Intérêt (10 %) | Amortissement | Annuité | Capital dû fin |
|---|---|---|---|---|---|
| 1 | 4 000 000 | 400 000 | 1 000 000 | 1 400 000 | 3 000 000 |
| 2 | 3 000 000 | 300 000 | 1 000 000 | 1 300 000 | 2 000 000 |
| 3 | 2 000 000 | 200 000 | 1 000 000 | 1 200 000 | 1 000 000 |
| 4 | 1 000 000 | 100 000 | 1 000 000 | 1 100 000 | 0 |

Intérêts totaux = **1 000 000 F**. L'annuité baisse de 100 000 F chaque année (10 % × 1 000 000).

## 📚 5. Remboursement in fine
Emprunt de 3 000 000 F à 8 % sur 3 ans : intérêts annuels = **240 000 F** ; annuités : 240 000 ; 240 000 ; **3 240 000** (dernière année : intérêts + capital). Coût = 720 000 F.

## 📚 6. Retrouver un élément du tableau
- **Amortissement de l'année k** (annuités constantes) : $M_k = M_1 (1 + i)^{k-1}$.
- **Capital restant dû après k annuités** = valeur actuelle des annuités restantes : $$ C_k = a \times \frac{1 - (1 + i)^{-(n-k)}}{i} $$

## ✏️ Exercices
**Exercice 1.** Emprunt de 600 000 F sur 3 ans à 8 %, amortissements constants. Dresse le tableau.

:::corrige
M = 200 000.
Année 1 : dette 600 000 ; intérêt 48 000 ; annuité 248 000 ; reste 400 000.
Année 2 : dette 400 000 ; intérêt 32 000 ; annuité 232 000 ; reste 200 000.
Année 3 : dette 200 000 ; intérêt 16 000 ; annuité 216 000 ; reste 0.
Coût total = **96 000 F**.
:::

**Exercice 2.** Emprunt de 1 000 000 F à 10 % sur 3 ans, annuités constantes de 402 115 F. Calcule le premier amortissement et le deuxième.

:::corrige
I₁ = 100 000 ⇒ M₁ = 402 115 − 100 000 = **302 115**. Capital dû = 697 885 ; I₂ = 69 789 ⇒ M₂ = **332 326** (= 302 115 × 1,1 ✓).
:::

**Exercice 3.** Emprunt de 2 000 000 F à 6 % in fine sur 5 ans. Annuités et coût total ?

:::corrige
Intérêts = 120 000 par an ; annuités 120 000 × 4 puis 2 120 000 la 5ᵉ ; coût total = **600 000 F**.
:::

**Exercice 4.** Dans un tableau d'amortissement, que vaut la somme des amortissements ?

:::corrige
Le **capital emprunté** (le capital est entièrement remboursé).
:::

## ⚠️ Pièges
- L'intérêt se calcule sur le **capital restant dû**, pas sur le capital initial.
- Annuités **constantes** : ce sont les **amortissements** qui augmentent. Amortissements **constants** : ce sont les **annuités** qui diminuent.
- Vérifier la dernière ligne : capital restant dû **= 0**.

## 🏆 À retenir pour le BAC
a = I + M ; I = capital dû × i ; annuités constantes : a = C i / [1 − (1+i)⁻ⁿ], amortissements en progression géométrique de raison (1+i) ; amortissements constants : M = C/n ; coût du crédit = Σ intérêts.
`
