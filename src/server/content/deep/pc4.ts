// Leçons approfondies – Physique-Chimie : nucléaire et chimie organique (4/6)

export const DEEP_PC_4: Record<string, string> = {}

DEEP_PC_4["nucleaire-spontanees"] = String.raw`## 💡 L'essentiel en une phrase
Un noyau instable se transforme **spontanément** en un autre noyau en émettant un rayonnement ($\alpha$, $\beta^-$, $\beta^+$, $\gamma$) ; le nombre de noyaux **décroît exponentiellement** avec le temps.

## 📚 1. Le noyau
- Notation $\,{}^A_ZX$ : $Z$ protons, $N=A-Z$ neutrons, $A$ nucléons.
- **Isotopes** : même $Z$, $A$ différent.
- **Unité de masse atomique** : $1\ \text{u}=1{,}66\times10^{-27}$ kg, soit $931{,}5\ \text{MeV}/c^2$.
- $1\ \text{eV}=1{,}6\times10^{-19}$ J ; $1\ \text{MeV}=1{,}6\times10^{-13}$ J.

## 📚 2. Lois de conservation (Soddy)
Dans toute réaction nucléaire : conservation du **nombre de charge** $Z$ et du **nombre de nucléons** $A$.

## 📚 3. Les types de radioactivité
- **$\alpha$** : émission d'un noyau d'hélium $\,{}^4_2\text{He}$. $\,{}^A_ZX\to{}^{A-4}_{Z-2}Y+{}^4_2\text{He}$.
- **$\beta^-$** : un neutron devient proton, un électron est émis ($n\to p+e^-+\bar\nu$). $\,{}^A_ZX\to{}^{\ A}_{Z+1}Y+{}^{\ 0}_{-1}e$.
- **$\beta^+$** : un proton devient neutron, un positon est émis. $\,{}^A_ZX\to{}^{\ A}_{Z-1}Y+{}^{0}_{+1}e$.
- **$\gamma$** : désexcitation du noyau fils, émission d'un photon, sans changement de $A$ ni $Z$.
- **Pouvoir de pénétration** : $\alpha$ (arrêté par une feuille de papier) < $\beta$ (quelques mm d'aluminium) < $\gamma$ (plomb épais, béton).

## 📚 4. Loi de décroissance radioactive
Le nombre de noyaux restants à l'instant $t$ :
$$N(t)=N_0\,e^{-\lambda t}$$
- $\lambda$ : **constante radioactive** (s⁻¹), propre à chaque nucléide.
- **Période (demi-vie)** $T$ : durée au bout de laquelle la moitié des noyaux a disparu.
$$T=\frac{\ln2}{\lambda}\quad\Longleftrightarrow\quad\lambda=\frac{\ln2}{T}$$
- Après $n$ périodes : $N=\dfrac{N_0}{2^n}$.
- **Constante de temps** : $\tau=\dfrac1\lambda=\dfrac{T}{\ln2}$.
- **Activité** : $A=-\dfrac{dN}{dt}=\lambda N=A_0e^{-\lambda t}$, en **becquerel** (Bq = désintégration/s).

## 📚 5. Nombre de noyaux et masse
$N=\dfrac mM\,\mathcal N_A$ avec $\mathcal N_A=6{,}02\times10^{23}\ \text{mol}^{-1}$.

## 📚 6. Datation
- **Carbone 14** ($T=5\,570$ ans) : on compare l'activité d'un échantillon à celle d'un organisme vivant : $t=\dfrac1\lambda\ln\dfrac{A_0}{A}$.
- Uranium–plomb pour les roches très anciennes.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Équation $\alpha$
$\,{}^{226}_{88}\text{Ra}\to{}^{A}_{Z}\text{Rn}+{}^4_2\text{He}$ : $A=222$, $Z=86$ : **radon 222**.

### Exemple 2 — Équation $\beta^-$
$\,{}^{14}_{6}\text{C}\to{}^{A}_{Z}\text{N}+{}^{0}_{-1}e$ : $A=14$, $Z=7$ : **azote 14**.

### Exemple 3 — Après $n$ périodes
Pour un échantillon d'iode 131 ($T=8$ jours), après 24 jours ($n=3$) il reste $\dfrac{1}{8}=12{,}5\%$ des noyaux.

### Exemple 4 — Constante radioactive et activité
$T=5\,570$ ans $=1{,}76\times10^{11}$ s : $\lambda=\dfrac{0{,}693}{1{,}76\times10^{11}}\approx\mathbf{3{,}94\times10^{-12}\ s^{-1}}$.
Pour $N=10^{15}$ noyaux : $A=\lambda N\approx\mathbf{3{,}9\times10^3\ Bq}$.

### Exemple 5 — Datation au carbone 14
Un échantillon n'a plus que 25 % de son activité initiale : $t=\dfrac{T}{\ln2}\ln\dfrac{1}{0{,}25}=2T=\mathbf{11\,140\ ans}$.

### Exemple 6 — Nombre de noyaux dans une masse
$1$ µg de $\,{}^{131}$I ($M=131$ g/mol) : $N=\dfrac{10^{-6}}{131}\times6{,}02\times10^{23}\approx\mathbf{4{,}6\times10^{15}}$ noyaux.

## ✏️ Exercices d'entraînement
**Exercice 1.** Compléter : $\,{}^{238}_{92}\text{U}\to{}^{A}_{Z}\text{Th}+{}^4_2\text{He}$ puis $\,{}^{234}_{90}\text{Th}\to{}^{A}_{Z}\text{Pa}+{}^{0}_{-1}e$.

:::corrige
Premier : $A=234$, $Z=90$ ($^{234}_{90}$Th). Second : $A=234$, $Z=91$ ($^{234}_{91}$Pa).
:::

**Exercice 2.** Une source de cobalt 60 ($T=5{,}27$ ans) a une activité de 8 kBq. Quelle sera son activité après 10,54 ans ?

:::corrige
$10{,}54=2T$ donc $A=\dfrac{8}{4}=\mathbf{2\ kBq}$.
:::

**Exercice 3.** Un échantillon contient $4\times10^{12}$ noyaux de période 20 min. Combien en reste-t-il après 1 h ?

:::corrige
$1\ \text{h}=3T$ : $N=\dfrac{4\times10^{12}}{8}=\mathbf{5\times10^{11}}$.
:::

**Exercice 4.** Un os ancien montre une activité de carbone 14 égale à 12,5 % de celle d'un os récent. Estimer son âge.

:::corrige
$12{,}5\%=\dfrac18=\dfrac1{2^3}$ donc $t=3T=3\times5\,570=\mathbf{16\,710\ ans}$.
:::

**Exercice 5.** Calculer la constante radioactive d'un nucléide de période 12 h.

:::corrige
$T=43\,200$ s : $\lambda=\dfrac{0{,}693}{43\,200}\approx\mathbf{1{,}6\times10^{-5}\ s^{-1}}$.
:::

## ⚠️ Pièges classiques du BAC
- Oublier la conservation de $Z$ **et** de $A$.
- Dire qu'au bout de 2 périodes « tout a disparu » : il en reste **un quart**.
- Mélanger les unités de temps de $\lambda$ et de $t$.
- Confondre **activité** (Bq) et **nombre de noyaux**.
- Écrire $\beta^-$ avec $Z-1$ (c'est $Z+1$).

## ✅ À retenir
- $N=N_0e^{-\lambda t}$ ; $T=\dfrac{\ln2}\lambda$ ; $A=\lambda N$.
- $\alpha$ : $\,{}^4_2$He ; $\beta^-$ : $Z+1$ ; $\beta^+$ : $Z-1$ ; $\gamma$ : photon.
- Après $n$ périodes, il reste $N_0/2^n$.
`

DEEP_PC_4["nucleaire-provoquees"] = String.raw`## 💡 L'essentiel en une phrase
La **fission** d'un noyau lourd et la **fusion** de noyaux légers libèrent de très grandes quantités d'énergie, que l'on calcule grâce à la relation d'Einstein $E=\Delta m\,c^2$.

## 📚 1. Équivalence masse-énergie
$$E=m\,c^2,\qquad c=3{,}00\times10^8\ \text{m/s}$$
- Avec $1\ \text{u}=931{,}5\ \text{MeV}/c^2$ : la masse de 1 u « vaut » 931,5 MeV.

## 📚 2. Défaut de masse et énergie de liaison
$$\Delta m=Zm_p+(A-Z)m_n-m_{noyau}\quad(>0)$$
- **Énergie de liaison** : $E_\ell=\Delta m\,c^2$ (énergie à fournir pour séparer les nucléons).
- **Énergie de liaison par nucléon** : $\dfrac{E_\ell}{A}$ ; plus elle est grande, plus le noyau est **stable**. Maximum vers le fer ($\approx8{,}8$ MeV/nucléon).

## 📚 3. Courbe d'Aston
$-\dfrac{E_\ell}{A}$ en fonction de $A$ : les noyaux **lourds** ($A>200$) et les noyaux **légers** ($A<20$) sont moins liés que les noyaux moyens. Donc :
- la **fission** d'un noyau lourd en noyaux moyens libère de l'énergie ;
- la **fusion** de noyaux légers en un noyau plus gros libère de l'énergie.

## 📚 4. Bilan énergétique d'une réaction
$$\Delta E=\left(m_{\text{réactifs}}-m_{\text{produits}}\right)c^2$$
Si $m_{\text{réactifs}}>m_{\text{produits}}$ : l'énergie est **libérée** ($|\Delta E|$).

## 📚 5. Fission
Un neutron lent casse un noyau lourd (uranium 235) :
$\,{}^{235}_{92}\text{U}+{}^1_0n\to{}^{94}_{38}\text{Sr}+{}^{140}_{54}\text{Xe}+2\,{}^1_0n$
- Les neutrons émis peuvent provoquer d'autres fissions : **réaction en chaîne**, contrôlée dans une **centrale nucléaire** (barres de contrôle absorbant des neutrons) ou non contrôlée dans une bombe.
- Énergie libérée : environ **200 MeV** par fission.
- Inconvénients : déchets radioactifs, risque d'accident.

## 📚 6. Fusion
$\,{}^2_1\text{H}+{}^3_1\text{H}\to{}^4_2\text{He}+{}^1_0n$ : environ **17,6 MeV** pour 5 nucléons.
- Nécessite des températures de plusieurs millions de degrés (étoiles, projet ITER).
- Énergie par nucléon plus grande que la fission, et sans déchets à longue durée de vie.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Énergie d'un défaut de masse
$\Delta m=0{,}2$ u : $E=0{,}2\times931{,}5=\mathbf{186{,}3\ MeV}$.

### Exemple 2 — Énergie de liaison de l'hélium 4
$m_p=1{,}00728$ u ; $m_n=1{,}00866$ u ; $m(^4\text{He})\ \text{noyau}=4{,}00151$ u.
$\Delta m=2\times1{,}00728+2\times1{,}00866-4{,}00151=0{,}03037$ u ; $E_\ell=0{,}03037\times931{,}5\approx\mathbf{28{,}3\ MeV}$ ; par nucléon : $\approx\mathbf{7{,}07\ MeV}$.

### Exemple 3 — Énergie de la fusion D-T
Masses (u) : D = 2,01355 ; T = 3,01550 ; He = 4,00151 ; n = 1,00866 (masses de noyaux).
$\Delta m=(2{,}01355+3{,}01550)-(4{,}00151+1{,}00866)=0{,}01888$ u ; $E=0{,}01888\times931{,}5\approx\mathbf{17{,}6\ MeV}$.

### Exemple 4 — Énergie libérée par 1 kg d'uranium 235
Une fission libère 200 MeV $=3{,}2\times10^{-11}$ J. $N=\dfrac{1000}{235}\times6{,}02\times10^{23}=2{,}56\times10^{24}$ noyaux.
$E=2{,}56\times10^{24}\times3{,}2\times10^{-11}\approx\mathbf{8{,}2\times10^{13}\ J}$, ce qui équivaut à environ 2 700 tonnes de charbon.

### Exemple 5 — Puissance d'une centrale
Une centrale de 900 MW avec un rendement de 33 % produit une puissance thermique de $\approx2\,700$ MW. L'énergie par jour : $2{,}7\times10^9\times86\,400\approx2{,}3\times10^{14}$ J, soit $\approx2{,}8$ kg d'U 235 fissionnés par jour.

## ✏️ Exercices d'entraînement
**Exercice 1.** Un défaut de masse de $3{,}2\times10^{-28}$ kg correspond à quelle énergie en joules puis en MeV ?

:::corrige
$E=\Delta mc^2=3{,}2\times10^{-28}\times9\times10^{16}=2{,}88\times10^{-11}$ J ; en MeV : $\dfrac{2{,}88\times10^{-11}}{1{,}6\times10^{-13}}=\mathbf{180\ MeV}$.
:::

**Exercice 2.** Calculer l'énergie de liaison par nucléon du fer 56 : défaut de masse $0{,}5285$ u.

:::corrige
$E_\ell=0{,}5285\times931{,}5=492{,}3$ MeV ; $\dfrac{E_\ell}{A}=\dfrac{492{,}3}{56}\approx\mathbf{8{,}79\ MeV/nucléon}$.
:::

**Exercice 3.** Équilibrer : $\,{}^{235}_{92}\text{U}+{}^1_0n\to{}^{139}_{54}\text{Xe}+{}^{A}_{Z}\text{Sr}+3\,{}^1_0n$.

:::corrige
$A$ : $236=139+A+3\Rightarrow A=94$. $Z$ : $92=54+Z\Rightarrow Z=38$ : $^{94}_{38}$Sr.
:::

**Exercice 4.** Pourquoi la fusion nécessite-t-elle de très hautes températures ?

:::corrige
Les noyaux, tous chargés positivement, se **repoussent** (force électrique). Pour s'approcher assez près pour fusionner, ils doivent avoir une énergie cinétique très grande, donc une température de plusieurs millions de degrés.
:::

## ⚠️ Pièges classiques du BAC
- Oublier de convertir u en kg ou en MeV (1 u = 931,5 MeV/c²).
- Confondre masse **du noyau** et masse **de l'atome** (électrons).
- Se tromper de signe : l'énergie libérée correspond à une **perte** de masse.
- Confondre fission et fusion.

## ✅ À retenir
- $E=\Delta m\,c^2$ ; 1 u = 931,5 MeV/c².
- Plus $\dfrac{E_\ell}{A}$ est grande, plus le noyau est stable.
- Fission (lourds) et fusion (légers) libèrent de l'énergie.
`

DEEP_PC_4["alcools"] = String.raw`## 💡 L'essentiel en une phrase
Un **alcool** possède un groupe hydroxyle $-\text{OH}$ lié à un carbone saturé ; sa **classe** (primaire, secondaire, tertiaire) détermine le produit de son oxydation ménagée.

## 📚 1. Définition, formule et nomenclature
- Formule générale : $C_nH_{2n+1}OH$ (alcool saturé).
- **Nom** : on remplace le « e » final de l'alcane par « **ol** » et on indique la position de OH : propan-2-ol, 2-méthylbutan-1-ol.
- La chaîne principale est la plus longue **contenant le carbone fonctionnel**, numérotée pour donner le plus petit indice à OH.

## 📚 2. Classes d'alcools
Selon le nombre de carbones liés au carbone portant OH :
- **Primaire** : $R-CH_2-OH$ (carbone fonctionnel lié à 1 carbone au plus) ;
- **Secondaire** : $R-CH(OH)-R'$ ;
- **Tertiaire** : $R-C(OH)(R')-R''$.

## 📚 3. Propriétés physiques
- Les alcools ont des températures d'ébullition **plus élevées** que celles des alcanes de masse voisine (liaisons hydrogène).
- Les alcools à chaîne courte (méthanol, éthanol) sont **miscibles à l'eau** ; la solubilité diminue quand la chaîne s'allonge.

## 📚 4. Combustion et oxydation
- **Combustion complète** : $C_nH_{2n+2}O+\dfrac{3n}{2}O_2\to nCO_2+(n+1)H_2O$.
- **Oxydation ménagée** par $\text{MnO}_4^-$ (violet) ou $\text{Cr}_2\text{O}_7^{2-}$ (orange), en milieu acide :
  - alcool **primaire** $\to$ **aldéhyde** (puis acide carboxylique si l'oxydant est en excès) ;
  - alcool **secondaire** $\to$ **cétone** ;
  - alcool **tertiaire** : **pas d'oxydation** ménagée.
- Demi-équations : $\text{MnO}_4^-+8H^++5e^-=Mn^{2+}+4H_2O$ ; $\text{Cr}_2\text{O}_7^{2-}+14H^++6e^-=2Cr^{3+}+7H_2O$.

## 📚 5. Déshydratation
Chauffé avec $H_2SO_4$ (ou $Al_2O_3$), un alcool perd de l'eau :
- **intramoléculaire** (≈170 °C) $\to$ **alcène** : $CH_3CH_2OH\to CH_2=CH_2+H_2O$ ;
- **intermoléculaire** (≈140 °C) $\to$ **éther-oxyde** : $2\,CH_3CH_2OH\to CH_3CH_2OCH_2CH_3+H_2O$.
La règle de Zaïtsev donne l'alcène le plus substitué comme produit majoritaire.

## 📚 6. Autres réactions
- Avec le sodium : $2R-OH+2Na\to2R-O^-Na^++H_2$ (dégagement de dihydrogène).
- **Estérification** avec un acide carboxylique (voir leçon sur les acides).

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Nomenclature et classe
$CH_3-CH(OH)-CH_2-CH_3$ : **butan-2-ol**, alcool **secondaire**.

### Exemple 2 — Oxydation d'un alcool primaire
$CH_3CH_2OH$ (éthanol) $\xrightarrow{\text{oxydation ménagée}}CH_3CHO$ (éthanal) $\to CH_3COOH$ (acide éthanoïque).

### Exemple 3 — Équation d'oxydation par le permanganate
Éthanol $\to$ acide éthanoïque :
$5\,CH_3CH_2OH+4\,\text{MnO}_4^-+12H^+\to5\,CH_3COOH+4\,Mn^{2+}+11H_2O$.

### Exemple 4 — Identification d'un alcool inconnu
Un alcool $A$ ($C_4H_{10}O$) s'oxyde en une cétone : c'est un alcool **secondaire**, donc le **butan-2-ol**. Si $A$ ne s'oxydait pas : alcool tertiaire, le **2-méthylpropan-2-ol**.

### Exemple 5 — Formule d'un alcool saturé
Un alcool saturé a pour masse molaire 74 g/mol : $14n+18=74\Rightarrow n=4$, d'où $C_4H_{10}O$ (butanol et ses isomères).

## ✏️ Exercices d'entraînement
**Exercice 1.** Donner les isomères alcools de formule $C_4H_{10}O$ et leur classe.

:::corrige
- Butan-1-ol : primaire.
- Butan-2-ol : secondaire.
- 2-méthylpropan-1-ol : primaire.
- 2-méthylpropan-2-ol : tertiaire.
:::

**Exercice 2.** Écrire l'équation de la déshydratation du propan-2-ol en alcène.

:::corrige
$CH_3-CH(OH)-CH_3\to CH_3-CH=CH_2+H_2O$ (propène).
:::

**Exercice 3.** L'oxydation d'un alcool $A$ donne un composé qui réagit avec la DNPH et le réactif de Tollens. Quelle est la classe de $A$ ?

:::corrige
Le produit donne un test positif avec la liqueur de Fehling ou le réactif de Tollens : c'est un **aldéhyde**, donc $A$ est un alcool **primaire**.
:::

**Exercice 4.** Calculer le volume de dihydrogène ($V_m=24$ L/mol) libéré par 4,6 g d'éthanol ($M=46$ g/mol) avec un excès de sodium.

:::corrige
$n=\dfrac{4{,}6}{46}=0{,}1$ mol ; $n(H_2)=\dfrac{n}{2}=0{,}05$ mol ; $V=0{,}05\times24=\mathbf{1{,}2\ L}$.
:::

## ⚠️ Pièges classiques du BAC
- Mal numéroter la chaîne : l'indice de OH doit être le plus petit.
- Oublier que l'alcool **tertiaire** ne s'oxyde pas.
- Écrire des équations **non équilibrées** en charges.
- Confondre déshydratation intra et intermoléculaire (la température diffère).

## ✅ À retenir
- Primaire $\to$ aldéhyde $\to$ acide ; secondaire $\to$ cétone ; tertiaire : rien.
- Déshydratation : alcène (170 °C) ou éther-oxyde (140 °C).
- Alcool + Na $\to$ $H_2$.
`

DEEP_PC_4["carbonyles"] = String.raw`## 💡 L'essentiel en une phrase
Les **aldéhydes** et **cétones** contiennent le groupe carbonyle $C=O$ ; on les distingue par des tests caractéristiques (Tollens, Fehling) et on les obtient par oxydation d'alcools.

## 📚 1. Structure et nomenclature
- **Aldéhyde** : $R-CHO$ (le carbone du carbonyle est en **bout de chaîne**). Suffixe « **-al** » : éthanal, propanal.
- **Cétone** : $R-CO-R'$ (carbonyle au **milieu** de la chaîne). Suffixe « **-one** » : propanone, butan-2-one.
- Formule générale : $C_nH_{2n}O$ (isomères de fonction entre aldéhyde et cétone).

## 📚 2. Obtention
- Alcool **primaire** + oxydation ménagée $\to$ **aldéhyde**.
- Alcool **secondaire** + oxydation ménagée $\to$ **cétone**.

## 📚 3. Tests d'identification
- **DNPH** (2,4-dinitrophénylhydrazine) : précipité **jaune-orangé** avec tout groupe carbonyle (aldéhyde **et** cétone).
- **Réactif de Tollens** (ion complexe $[Ag(NH_3)_2]^+$) : **miroir d'argent** avec un aldéhyde uniquement.
- **Liqueur de Fehling** (ion $Cu^{2+}$) : précipité **rouge brique** d'oxyde de cuivre(I) $Cu_2O$ avec un aldéhyde uniquement (à chaud).
- **Réactif de Schiff** : se colore en **rose-violet** avec les aldéhydes.

| Test | Aldéhyde | Cétone |
|---|---|---|
| DNPH | + | + |
| Tollens | + | – |
| Fehling | + | – |

## 📚 4. Oxydation des aldéhydes
Un aldéhyde s'oxyde facilement en **acide carboxylique** : $R-CHO\to R-COOH$. Les cétones ne s'oxydent pas dans les conditions ménagées.
- Avec Tollens : $R-CHO+2Ag^++\dots\to R-COO^-+2Ag$ (miroir).
- Avec Fehling : $R-CHO+2Cu^{2+}+\dots\to R-COO^-+Cu_2O$.

## 📚 5. Réduction
Aldéhyde $+H_2$ (ou $NaBH_4$) $\to$ alcool **primaire** ; cétone $\to$ alcool **secondaire**.

## 📚 6. Méthode d'identification
1. Un test à la DNPH positif $\Rightarrow$ composé carbonylé.
2. Test de Tollens ou Fehling positif $\Rightarrow$ aldéhyde ; négatif $\Rightarrow$ cétone.
3. La formule brute fixe le nombre de carbones.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Nomenclature
$CH_3-CH_2-CHO$ : **propanal**. $CH_3-CO-CH_2-CH_3$ : **butan-2-one**.

### Exemple 2 — Isomérie
$C_3H_6O$ : propanal ($CH_3CH_2CHO$) et propanone ($CH_3COCH_3$).

### Exemple 3 — Identifier un composé
Un composé de formule $C_3H_6O$ donne un précipité avec la DNPH mais pas de miroir d'argent : c'est une **cétone**, la **propanone** (acétone).

### Exemple 4 — Équation de réduction de l'éthanal
$CH_3CHO+H_2\to CH_3CH_2OH$ (éthanol).

### Exemple 5 — Dosage d'un aldéhyde
5 mL d'une solution d'éthanal réagissent avec du Tollens en excès et produisent 1,08 g d'argent ($M=108$ g/mol). $n(Ag)=0{,}01$ mol ; $n(\text{éthanal})=\dfrac{n(Ag)}{2}=0{,}005$ mol ; concentration $=\dfrac{0{,}005}{0{,}005}=\mathbf{1\ mol/L}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Nommer $CH_3-CH(CH_3)-CHO$ et $CH_3-CO-CH_2-CH_2-CH_3$.

:::corrige
2-méthylpropanal ; pentan-2-one.
:::

**Exercice 2.** Un alcool $A$ ($C_4H_{10}O$) donne par oxydation ménagée un composé $B$ qui réagit avec la DNPH et la liqueur de Fehling. Donner $A$ et $B$ (chaîne non ramifiée).

:::corrige
$B$ réagit avec Fehling : c'est un **aldéhyde** ; $A$ est un alcool **primaire** non ramifié : **butan-1-ol**, et $B$ est le **butanal**.
:::

**Exercice 3.** Quel test permet de distinguer la propanone du propanal ?

:::corrige
Le test de **Tollens** (ou Fehling) : positif avec le propanal (miroir d'argent), négatif avec la propanone.
:::

**Exercice 4.** Écrire l'oxydation du propan-2-ol par l'ion dichromate en cétone, sans équilibrer les charges.

:::corrige
$CH_3-CH(OH)-CH_3\to CH_3-CO-CH_3$ (propanone).
:::

## ⚠️ Pièges classiques du BAC
- Penser que la DNPH distingue aldéhydes et cétones : elle **ne les distingue pas**.
- Dire qu'une cétone donne un miroir d'argent.
- Oublier que l'oxydation d'un aldéhyde donne un **acide** de même nombre de carbones.
- Confondre « -al » et « -ol ».

## ✅ À retenir
- DNPH : tout carbonylé ; Tollens et Fehling : aldéhyde seul.
- Primaire $\to$ aldéhyde ; secondaire $\to$ cétone.
- Aldéhyde $\to$ acide ; réduction $\to$ alcool.
`

DEEP_PC_4["amines"] = String.raw`## 💡 L'essentiel en une phrase
Les **amines** dérivent de l'ammoniac $NH_3$ par remplacement d'atomes d'hydrogène par des groupes alkyles ; ce sont des **bases faibles** à cause du doublet non liant de l'azote.

## 📚 1. Définition et classes
- **Primaire** : $R-NH_2$ ; **secondaire** : $R-NH-R'$ ; **tertiaire** : $R-N(R')-R''$.
- La classe dépend du nombre de groupes alkyles liés à l'azote.

## 📚 2. Nomenclature
- Amine primaire : nom de l'alcane + « **amine** » (ou « -amine » avec position) : méthanamine ($CH_3NH_2$), éthanamine, propan-2-amine.
- Amine secondaire/tertiaire : N-alkyl substitués : N-méthyléthanamine ; N,N-diméthyléthanamine.
- Formule générale (amines saturées) : $C_nH_{2n+3}N$.

## 📚 3. Propriétés
- Les amines de faible masse sont **solubles dans l'eau** et ont une odeur de poisson.
- Elles possèdent un **doublet non liant** sur l'azote.

## 📚 4. Caractère basique
$$R-NH_2+H_2O\rightleftharpoons R-NH_3^++OH^-$$
- Le couple acide/base est $RNH_3^+/RNH_2$.
- La solution est **basique**. Le $pK_a$ de ces couples est voisin de **10–11** (par exemple $pK_a(CH_3NH_3^+/CH_3NH_2)=10{,}7$).
- Avec un acide fort : $RNH_2+H_3O^+\to RNH_3^++H_2O$ (réaction totale, donne un sel d'alkylammonium).

## 📚 5. Caractère nucléophile : acylation
Une amine primaire ou secondaire réagit avec un **chlorure d'acyle** pour donner une **amide** :
$$R-COCl+R'-NH_2\to R-CO-NH-R'+HCl$$
(Le HCl formé est neutralisé par un excès d'amine.) Cette réaction est à la base de la fabrication des **nylons** et des **liaisons peptidiques**.

## 📚 6. Test d'identification
Une solution aqueuse d'amine fait virer le **bleu de bromothymol (BBT)** au bleu et le papier pH au bleu.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Classe et nom
$CH_3-CH_2-NH-CH_3$ : amine **secondaire**, **N-méthyléthanamine**.

### Exemple 2 — Isomères de $C_3H_9N$
Propan-1-amine, propan-2-amine (primaires), N-méthyléthanamine (secondaire), N,N-diméthylméthanamine (tertiaire) : **4 isomères**.

### Exemple 3 — pH d'une solution d'amine
Pour une solution de méthanamine à $C=0{,}1$ mol/L, avec $pK_a=10{,}7$ : le pH est $\dfrac12\left(pK_a+14+\log C\right)$ (base faible peu dissociée) $=\dfrac12(10{,}7+14-1)=\mathbf{11{,}85}$.

### Exemple 4 — Acylation
$CH_3COCl+CH_3CH_2NH_2\to CH_3CONHCH_2CH_3+HCl$ : **N-éthyléthanamide**.

### Exemple 5 — Dosage par un acide
On dose 20 mL d'éthanamine par $HCl$ à 0,1 mol/L ; équivalence pour 15 mL : $C=\dfrac{0{,}1\times15}{20}=\mathbf{0{,}075\ mol/L}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Écrire l'équation de la réaction de la propan-1-amine avec l'eau et celle avec l'acide chlorhydrique.

:::corrige
Avec l'eau : $CH_3CH_2CH_2NH_2+H_2O\rightleftharpoons CH_3CH_2CH_2NH_3^++OH^-$.
Avec l'acide : $CH_3CH_2CH_2NH_2+H_3O^+\to CH_3CH_2CH_2NH_3^++H_2O$.
:::

**Exercice 2.** Une amine saturée a une masse molaire de 59 g/mol. Trouver sa formule brute.

:::corrige
$M(C_nH_{2n+3}N)=14n+3+14=14n+17=59\Rightarrow n=3$ : $C_3H_9N$.
:::

**Exercice 3.** Quelle est la classe de la diéthylamine $(C_2H_5)_2NH$ ? Peut-elle réagir avec un chlorure d'acyle ?

:::corrige
Amine **secondaire** ; elle réagit avec un chlorure d'acyle pour donner une amide substituée (N,N-diéthyl).
:::

**Exercice 4.** Pourquoi les amines sont-elles basiques ?

:::corrige
L'azote porte un **doublet non liant** capable de capter un proton $H^+$ de l'eau ou d'un acide, formant l'ion alkylammonium.
:::

## ⚠️ Pièges classiques du BAC
- Confondre la **classe** de l'amine avec celle de l'alcool (elle se compte sur l'**azote**).
- Oublier que l'amine tertiaire **ne s'acyle pas** (plus de H sur N).
- Écrire que l'amine est un « acide ».
- Oublier la formation de HCl dans l'acylation.

## ✅ À retenir
- Amines : bases faibles, couple $RNH_3^+/RNH_2$ ($pK_a\approx10$–11).
- Acylation : amine + chlorure d'acyle $\to$ amide + HCl.
- Classe = nombre de groupes alkyles sur N.
`

DEEP_PC_4["acides-carboxyliques"] = String.raw`## 💡 L'essentiel en une phrase
Un **acide carboxylique** $R-COOH$ réagit avec un alcool pour former un **ester** (réaction lente, limitée et réversible) ; ses dérivés (chlorure d'acyle, anhydride) permettent des réactions rapides et totales.

## 📚 1. Acides carboxyliques
- Formule : $R-COOH$ ; nom : « acide ...**oïque** » (acide éthanoïque, acide propanoïque).
- Ce sont des **acides faibles** : $R-COOH+H_2O\rightleftharpoons R-COO^-+H_3O^+$.
- Réaction avec une base forte : $R-COOH+HO^-\to R-COO^-+H_2O$.

## 📚 2. Estérification-hydrolyse
$$R-COOH+R'-OH\rightleftharpoons R-COO-R'+H_2O$$
- **Ester** : nom « **...oate de ...yle** » (éthanoate d'éthyle).
- Réaction **lente**, **limitée** (équilibre) et **athermique** (presque).
- L'**hydrolyse** de l'ester est la réaction inverse.
- **Constante d'équilibre** $K=\dfrac{[\text{ester}][\text{eau}]}{[\text{acide}][\text{alcool}]}$.

### Rendement
Pour des quantités **équimolaires** d'acide et d'alcool primaire : rendement $\approx67\ \%$ ; alcool secondaire : $\approx60\ \%$ ; tertiaire : $\approx5\ \%$.
$$r=\frac{n_{\text{ester formé}}}{n_{\text{ester max}}}$$

### Améliorer la réaction
- **Vitesse** : élever la température, ajouter un catalyseur ($H_2SO_4$).
- **Rendement** : utiliser un **excès** d'un réactif ou **éliminer** un produit (l'eau ou l'ester, par distillation).

## 📚 3. Dérivés d'acide : chlorure d'acyle et anhydride
- **Chlorure d'acyle** $R-COCl$ (suffixe « chlorure de ...oyle »).
- **Anhydride d'acide** $(R-CO)_2O$.
- Réactions avec un alcool : **rapides, totales**, et non réversibles.
  - $R-COCl+R'OH\to R-COOR'+HCl$
  - $(RCO)_2O+R'OH\to R-COOR'+R-COOH$
- Avec une amine : formation d'un **amide**.

## 📚 4. Hydrolyse basique des esters (saponification)
$R-COO-R'+HO^-\to R-COO^-+R'-OH$ : réaction **totale** (voir leçon sur le savon).

## 📚 5. Synthèse des esters : montage
Chauffage à **reflux** (le condenseur évite les pertes de matière).

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Équation et nom
Acide éthanoïque + éthanol $\rightleftharpoons$ **éthanoate d'éthyle** + eau.

### Exemple 2 — Rendement d'une estérification
On mélange 0,2 mol d'acide et 0,2 mol d'alcool primaire. À l'équilibre, on obtient 0,13 mol d'ester : $r=\dfrac{0{,}13}{0{,}2}=\mathbf{65\ \%}$ (proche de 67 %).

### Exemple 3 — Avancement et excès
On mélange 0,2 mol d'acide et 0,6 mol d'alcool : le rendement augmente, par exemple à $\approx90\ \%$ ($n_{ester}\approx0{,}18$ mol).

### Exemple 4 — Réaction avec un chlorure d'acyle
$CH_3COCl+CH_3CH_2OH\to CH_3COOCH_2CH_3+HCl$ : réaction **totale** ; avec 0,1 mol de chlorure, on obtient 0,1 mol d'ester, soit $m=0{,}1\times88=\mathbf{8{,}8\ g}$.

### Exemple 5 — Masse molaire d'un ester
$C_4H_8O_2$ (éthanoate d'éthyle) : $M=4\times12+8+32=\mathbf{88\ g/mol}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Nommer l'ester formé par l'acide propanoïque et le méthanol, puis écrire la formule semi-développée.

:::corrige
**Propanoate de méthyle** : $CH_3CH_2COOCH_3$.
:::

**Exercice 2.** On fait réagir 0,5 mol d'acide éthanoïque et 0,5 mol de propan-1-ol. Estimer la masse d'ester à l'équilibre ($M=102$ g/mol, rendement 67 %).

:::corrige
$n_{ester}=0{,}67\times0{,}5=0{,}335$ mol ; $m=0{,}335\times102\approx\mathbf{34{,}2\ g}$.
:::

**Exercice 3.** Citer deux moyens d'augmenter le rendement de l'estérification.

:::corrige
1) Utiliser un **excès** de l'un des réactifs ; 2) **éliminer** l'eau (ou l'ester) au fur et à mesure.
:::

**Exercice 4.** Écrire la réaction de l'anhydride éthanoïque avec le méthanol.

:::corrige
$(CH_3CO)_2O+CH_3OH\to CH_3COOCH_3+CH_3COOH$.
:::

## ⚠️ Pièges classiques du BAC
- Oublier que l'estérification est **limitée** et réversible.
- Écrire une flèche simple au lieu de $\rightleftharpoons$.
- Croire qu'un catalyseur augmente le **rendement** : il augmente la **vitesse** seulement.
- Confondre le nom de l'ester (« ...oate d'...yle ») : l'acide donne le premier mot, l'alcool le second.

## ✅ À retenir
- Estérification : lente, limitée ; rendement 67 % (primaire, équimolaire).
- Chlorure d'acyle/anhydride : réaction rapide et totale.
- Catalyseur $\to$ vitesse ; excès/élimination $\to$ rendement.
`

DEEP_PC_4["savon"] = String.raw`## 💡 L'essentiel en une phrase
Un **savon** s'obtient par **saponification** d'un corps gras (triglycéride) avec une base forte (soude ou potasse) ; cette réaction, **totale** et lente, produit du savon et du glycérol.

## 📚 1. Corps gras
- Un **triglycéride** est un triester du **glycérol** (propane-1,2,3-triol) et de trois **acides gras** (acides carboxyliques à longue chaîne, 12 à 18 carbones).
- Exemples d'acides gras : acide palmitique $C_{15}H_{31}COOH$, acide stéarique $C_{17}H_{35}COOH$, acide oléique ($C_{17}H_{33}COOH$, insaturé).
- **Huiles** (liquides, riches en acides gras insaturés) et **graisses** (solides, saturés).

## 📚 2. Saponification
$$\underbrace{C_3H_5(OCOR)_3}_{\text{triglycéride}}+3\,(Na^++HO^-)\to\underbrace{C_3H_5(OH)_3}_{\text{glycérol}}+3\,(R-COO^-+Na^+)$$
- Réaction **lente**, **totale**, exothermique faible.
- Le savon est un **carboxylate de sodium** (savon dur) ou de **potassium** (savon mou).
- On chauffe à **reflux** pour accélérer la réaction.

## 📚 3. Fabrication au laboratoire
1. Chauffer à reflux le corps gras avec la solution de soude concentrée (et un peu d'éthanol pour homogénéiser).
2. **Relargage** : verser le mélange dans une solution saturée de **chlorure de sodium** : le savon (peu soluble dans l'eau salée) précipite.
3. **Filtrer**, rincer et sécher.

## 📚 4. Structure et pouvoir détergent
Un ion carboxylate possède :
- une **tête hydrophile** (le groupe $COO^-$) ;
- une **chaîne hydrophobe** (lipophile) longue.
Cette molécule est **amphiphile**. Dans l'eau, les chaînes captent les graisses (micelles) tandis que les têtes restent dans l'eau : la saleté est **émulsionnée** et éliminée au rinçage.

## 📚 5. Limites des savons
- En **eau dure** (riche en $Ca^{2+}$, $Mg^{2+}$) : formation d'un précipité insoluble, qui réduit le pouvoir lavant.
- En milieu acide : le carboxylate est converti en acide gras insoluble.

## 📚 6. Calculs
- **Indice de saponification** : masse (mg) de potasse nécessaire pour saponifier 1 g de corps gras.
- Pour un triglycéride : $n(\text{HO}^-)=3\,n(\text{triglycéride})$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Saponification de la tristéarine
$(C_{17}H_{35}COO)_3C_3H_5+3NaOH\to3\,C_{17}H_{35}COONa+C_3H_5(OH)_3$ ; $M(\text{tristéarine})=890$ g/mol.

### Exemple 2 — Masse de savon
On saponifie 89 g de tristéarine (0,1 mol) avec un excès de soude. $n(\text{savon})=0{,}3$ mol ; $M(C_{17}H_{35}COONa)=306$ g/mol ; $m=0{,}3\times306=\mathbf{91{,}8\ g}$ ; glycérol : $0{,}1\times92=9{,}2$ g.

### Exemple 3 — Quantité de soude
Pour saponifier 0,1 mol de triglycéride il faut $0{,}3$ mol de $NaOH$, soit $m=0{,}3\times40=\mathbf{12\ g}$ de soude.

### Exemple 4 — Rendement
On obtient 80 g de savon alors que le maximum théorique est 91,8 g : $r=\dfrac{80}{91{,}8}\approx\mathbf{87\ \%}$.

### Exemple 5 — Eau dure
$2\,C_{17}H_{35}COO^-+Ca^{2+}\to(C_{17}H_{35}COO)_2Ca\downarrow$ : le savon forme un dépôt (« écume grise »).

## ✏️ Exercices d'entraînement
**Exercice 1.** Écrire l'équation de saponification de la trioléine (acide oléique $C_{17}H_{33}COOH$).

:::corrige
$(C_{17}H_{33}COO)_3C_3H_5+3NaOH\to3\,C_{17}H_{33}COONa+C_3H_5(OH)_3$.
:::

**Exercice 2.** Quelle masse de soude faut-il pour saponifier 178 g de tripalmitine ($M=806$ g/mol, approximé ici à 800 g/mol) ?

:::corrige
$n\approx\dfrac{178}{800}=0{,}22$ mol ; $n(NaOH)=3\times0{,}22=0{,}67$ mol ; $m=0{,}67\times40\approx\mathbf{27\ g}$.
:::

**Exercice 3.** Pourquoi verse-t-on le mélange dans de l'eau salée ?

:::corrige
Le savon est beaucoup moins soluble dans une solution saturée de chlorure de sodium : il **précipite** (relargage) et on peut le séparer par filtration.
:::

**Exercice 4.** Expliquer l'action nettoyante d'un savon.

:::corrige
La chaîne carbonée **hydrophobe** se fixe sur la graisse, la tête $COO^-$ **hydrophile** reste dans l'eau : les gouttelettes de graisse sont entourées d'ions carboxylate (micelles) et entraînées par l'eau.
:::

## ⚠️ Pièges classiques du BAC
- Oublier le **3** devant la soude et le savon.
- Dire que la saponification est **réversible** : elle est totale.
- Écrire l'acide gras au lieu de son **carboxylate**.
- Confondre le glycérol (alcool) avec un acide.

## ✅ À retenir
- Triglycéride + 3 $HO^-$ $\to$ glycérol + 3 carboxylates.
- Relargage dans l'eau salée.
- Savon = tête hydrophile + chaîne hydrophobe.
`

DEEP_PC_4["acides-amines"] = String.raw`## 💡 L'essentiel en une phrase
Un **acide α-aminé** possède un groupe amine et un groupe acide carboxylique portés par le même carbone ; il existe sous forme d'**ion dipolaire** (zwitterion) et se lie à d'autres pour former des **peptides** et des protéines.

## 📚 1. Structure
Formule générale :
$$R-CH(NH_2)-COOH$$
Le carbone $\alpha$ (lié à $NH_2$ et à $COOH$) est **asymétrique** (sauf pour la glycine, $R=H$).
- Exemples : **glycine** ($R=H$), **alanine** ($R=CH_3$), sérine, lysine.
- Nom : acide 2-aminoalcanoïque (acide 2-aminopropanoïque pour l'alanine).

## 📚 2. Stéréochimie
- Un carbone asymétrique $C^*$ est lié à **4 groupes différents**.
- Deux **énantiomères** (images l'un de l'autre dans un miroir, non superposables) : **L** et **D** (représentation de Fischer : $NH_2$ à gauche pour L).
- Les acides aminés naturels des protéines sont de série **L**.
- Un mélange équimolaire des deux énantiomères est un **mélange racémique** (optiquement inactif).

## 📚 3. Caractère amphotère : ion dipolaire
En solution aqueuse : $H_3N^+-CHR-COO^-$.
- Cet ion est un **ampholyte** (à la fois acide et base).
- Couples acide/base : $H_3N^+-CHR-COOH/H_3N^+-CHR-COO^-$ ($pK_{a1}\approx2$) et $H_3N^+-CHR-COO^-/H_2N-CHR-COO^-$ ($pK_{a2}\approx9$–10).
- **Espèce prédominante selon le pH** : cation si $pH<pK_{a1}$ ; ion dipolaire si $pK_{a1}<pH<pK_{a2}$ ; anion si $pH>pK_{a2}$.
- **Point isoélectrique** : $pH_i=\dfrac{pK_{a1}+pK_{a2}}{2}$ (la molécule est globalement neutre).

## 📚 4. Liaison peptidique
Un acide α-aminé réagit avec un autre : le groupe $COOH$ de l'un et le groupe $NH_2$ de l'autre forment une **liaison peptidique** (amide) en éliminant de l'eau.
$$H_2N-CHR-COOH+H_2N-CHR'-COOH\to H_2N-CHR-CO-NH-CHR'-COOH+H_2O$$
- Dipeptide, tripeptide… polypeptide, protéine.
- Avec deux acides aminés différents, on peut former **deux dipeptides** (l'ordre compte).
- Pour obtenir un seul dipeptide : on **protège** les groupes non concernés puis on active le groupe acide.

## 📚 5. Hydrolyse
Les protéines s'hydrolysent en acides aminés (milieu acide/basique, enzymes).

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Nom
$CH_3-CH(NH_2)-COOH$ : acide 2-aminopropanoïque (**alanine**).

### Exemple 2 — Carbone asymétrique
Dans l'alanine, le carbone 2 est lié à $H$, $NH_2$, $CH_3$, $COOH$ : quatre groupes différents, donc asymétrique. Il y a deux énantiomères (L et D).

### Exemple 3 — Espèce prédominante
Pour la glycine ($pK_{a1}=2{,}3$ ; $pK_{a2}=9{,}6$) : à pH = 6, l'**ion dipolaire** prédomine ; à pH = 12, l'**anion** $H_2N-CH_2-COO^-$. Le pH isoélectrique est $\dfrac{2{,}3+9{,}6}{2}\approx\mathbf{5{,}95}$.

### Exemple 4 — Dipeptides
Glycine (Gly) + alanine (Ala) donnent **Gly-Ala** et **Ala-Gly**, deux dipeptides isomères.

### Exemple 5 — Masse molaire d'un dipeptide
$M(Gly)=75$ ; $M(Ala)=89$ ; $M(Gly\text{-}Ala)=75+89-18=\mathbf{146\ g/mol}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Écrire la formule semi-développée de la sérine ($R=CH_2OH$) et dire si elle possède un carbone asymétrique.

:::corrige
$HOCH_2-CH(NH_2)-COOH$. Le carbone 2 est lié à $H$, $NH_2$, $COOH$, $CH_2OH$ : **asymétrique**.
:::

**Exercice 2.** Écrire le dipeptide Ala-Gly (alanine à l'extrémité $N$-terminale).

:::corrige
$CH_3-CH(NH_2)-CO-NH-CH_2-COOH$.
:::

**Exercice 3.** Quelle est la forme dominante d'un acide α-aminé de $pK_{a1}=2$ et $pK_{a2}=10$ à pH = 1 ?

:::corrige
$pH<pK_{a1}$ : forme **cationique** $H_3N^+-CHR-COOH$.
:::

**Exercice 4.** Combien de tripeptides différents peut-on former avec Gly, Ala et Ser, chacun utilisé une fois ?

:::corrige
$3!=\mathbf6$ tripeptides.
:::

## ⚠️ Pièges classiques du BAC
- Oublier la perte d'une molécule d'**eau** par liaison peptidique.
- Placer le groupe $NH_2$ sur un autre carbone que le carbone $\alpha$.
- Confondre énantiomères et isomères de constitution.
- Prendre la glycine pour une molécule chirale (elle ne l'est pas).

## ✅ À retenir
- $R-CH(NH_2)-COOH$ ; ion dipolaire ; ampholyte.
- Liaison peptidique : $-CO-NH-$.
- $pH_i=\dfrac{pK_{a1}+pK_{a2}}{2}$.
`
