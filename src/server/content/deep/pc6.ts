// Leçons approfondies – Physique série C uniquement (induction, optique)

export const DEEP_PC_6: Record<string, string> = {}

DEEP_PC_6["induction"] = String.raw`## 💡 L'essentiel en une phrase
Quand le **flux magnétique** à travers un circuit **varie**, il apparaît une **force électromotrice induite** $e=-\dfrac{d\Phi}{dt}$ : c'est le principe des alternateurs, transformateurs et dynamos.

## 📚 1. Flux magnétique
Pour une surface plane $S$ dans un champ uniforme $\vec B$ :
$$\Phi=\vec B\cdot\vec S=B\,S\cos\theta\qquad(\text{weber, Wb})$$
où $\theta$ est l'angle entre $\vec B$ et la normale $\vec n$ à la surface (orientée par le sens positif du courant). Pour $N$ spires : $\Phi=NBS\cos\theta$.

## 📚 2. Loi de Faraday et loi de Lenz
- **Faraday** : $e=-\dfrac{d\Phi}{dt}$ (f.é.m. induite, en volt).
- **Lenz** : le courant induit s'oppose, par ses effets, à la cause qui lui donne naissance (le signe « − »).
- Le courant induit apparaît dans un **circuit fermé** : $i=\dfrac eR$.

Le flux peut varier par : variation de $B$, de $S$ (circuit déformable) ou de $\theta$ (rotation du circuit).

## 📚 3. Circuit mobile dans un champ
Une tige de longueur $\ell$ se déplaçant à la vitesse $v$ perpendiculairement à $\vec B$ sur des rails : $\Phi=B\ell x$ et
$$e=-B\ell v\qquad|e|=B\ell v$$
La force de Laplace sur la tige $F=iB\ell$ **freine** le mouvement (loi de Lenz).

## 📚 4. Cadre tournant : alternateur
Un cadre de $N$ spires, de surface $S$, tourne à la vitesse angulaire $\omega$ dans un champ uniforme $B$ :
$$\Phi=NBS\cos\omega t,\qquad e=NBS\omega\sin\omega t$$
- f.é.m. **alternative sinusoïdale** de valeur maximale $E_m=NBS\omega$ et de fréquence $f=\dfrac{\omega}{2\pi}$.
- Valeur efficace $E=\dfrac{E_m}{\sqrt2}$.

## 📚 5. Auto-induction, courants de Foucault, transformateur
- **Auto-induction** : $e=-L\dfrac{di}{dt}$ (voir leçon spécifique).
- **Courants de Foucault** : courants induits dans une masse métallique (freinage, plaques à induction, chauffage ; pertes dans les noyaux feuilletés).
- **Transformateur** : deux bobines sur un noyau de fer ; $\dfrac{U_2}{U_1}=\dfrac{N_2}{N_1}=m$ ; si le rendement est de 100 %, $U_1I_1=U_2I_2$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Flux
$B=0{,}2$ T, $S=50$ cm$^2=5\times10^{-3}$ m², $\theta=60^\circ$ : $\Phi=0{,}2\times5\times10^{-3}\times0{,}5=\mathbf{5\times10^{-4}\ Wb}$.

### Exemple 2 — f.é.m. moyenne
Le flux passe de $4\times10^{-3}$ Wb à $0$ en $0{,}02$ s : $e_{moy}=-\dfrac{0-4\times10^{-3}}{0{,}02}=\mathbf{0{,}2\ V}$.

### Exemple 3 — Tige sur rails
$B=0{,}5$ T, $\ell=20$ cm, $v=3$ m/s : $|e|=0{,}5\times0{,}2\times3=\mathbf{0{,}3\ V}$. Avec une résistance totale de $0{,}1\ \Omega$ : $i=3$ A et $F=iB\ell=3\times0{,}5\times0{,}2=\mathbf{0{,}3\ N}$ (force de freinage).

### Exemple 4 — Alternateur
$N=200$, $S=100$ cm², $B=0{,}1$ T, $f=50$ Hz ($\omega=314$ rad/s) : $E_m=200\times0{,}1\times10^{-2}\times314=\mathbf{62{,}8\ V}$ ; $E\approx44{,}4$ V.

### Exemple 5 — Transformateur
$N_1=1\,000$, $N_2=50$, $U_1=230$ V : $U_2=230\times\dfrac{50}{1000}=\mathbf{11{,}5\ V}$ (abaisseur). Si $I_2=2$ A, $I_1=\dfrac{U_2I_2}{U_1}=0{,}1$ A.

## ✏️ Exercices d'entraînement
**Exercice 1.** Une bobine de 100 spires de 20 cm² est placée dans un champ qui passe de 0 à 0,5 T en 0,1 s (champ perpendiculaire au plan). Calculer la f.é.m. moyenne.

:::corrige
$\Delta\Phi=100\times0{,}5\times20\times10^{-4}=0{,}1$ Wb ; $|e|=\dfrac{0{,}1}{0{,}1}=\mathbf{1\ V}$.
:::

**Exercice 2.** Calculer la vitesse d'une tige de 15 cm qui crée une f.é.m. de 0,9 V dans $B=0{,}4$ T.

:::corrige
$v=\dfrac{e}{B\ell}=\dfrac{0{,}9}{0{,}4\times0{,}15}=\mathbf{15\ m/s}$.
:::

**Exercice 3.** Que devient la f.é.m. d'un alternateur quand on double la vitesse de rotation ?

:::corrige
$E_m=NBS\omega$ : la valeur maximale est **doublée** (et la fréquence aussi).
:::

**Exercice 4.** Un transformateur abaisseur 230 V / 12 V a un secondaire de 60 spires. Calculer $N_1$.

:::corrige
$N_1=N_2\dfrac{U_1}{U_2}=60\times\dfrac{230}{12}=\mathbf{1\,150}$ spires.
:::

## ⚠️ Pièges classiques du BAC
- Oublier le facteur $N$ (nombre de spires).
- Confondre $\cos\theta$ (angle avec la normale) et $\sin\theta$.
- Oublier de convertir cm² en m².
- Dire que le courant induit « aide » la variation : il **s'y oppose**.

## ✅ À retenir
- $\Phi=NBS\cos\theta$ ; $e=-\dfrac{d\Phi}{dt}$.
- Tige : $|e|=B\ell v$ ; alternateur : $E_m=NBS\omega$.
- Transformateur : $\dfrac{U_2}{U_1}=\dfrac{N_2}{N_1}$.
`

DEEP_PC_6["lumiere-onde"] = String.raw`## 💡 L'essentiel en une phrase
La lumière se comporte comme une **onde** : elle se **diffracte** et produit des **interférences**, ce qui permet de mesurer sa **longueur d'onde**.

## 📚 1. Nature ondulatoire de la lumière
- Onde électromagnétique **monochromatique** : fréquence $\nu$, longueur d'onde dans le vide $\lambda_0=\dfrac{c}{\nu}$ avec $c=3\times10^8$ m/s.
- Spectre visible : de 400 nm (violet) à 800 nm (rouge).
- Dans un milieu d'indice $n$ : $v=\dfrac cn$ et $\lambda=\dfrac{\lambda_0}{n}$ ; **la fréquence ne change pas**.

## 📚 2. Diffraction
Une onde passant par une fente de largeur $a$ (ou un fil de diamètre $a$) donne une figure de diffraction : une tache centrale large entourée de taches plus petites.
- Écart angulaire (demi-largeur de la tache centrale) : $\theta\approx\dfrac{\lambda}{a}$ (radians, petit angle).
- Largeur de la tache centrale sur un écran à la distance $D$ : $L=\dfrac{2\lambda D}{a}$.
- La diffraction est d'autant plus marquée que $a$ est **proche de** $\lambda$.

## 📚 3. Interférences : fentes d'Young
Deux fentes $S_1,S_2$ distantes de $a$ éclairées par une source cohérente ; écran à la distance $D\gg a$.
- **Différence de marche** au point $M$ d'abscisse $x$ : $\delta=\dfrac{a\,x}{D}$.
- **Frange brillante** (interférences constructives) : $\delta=k\lambda$ ($k\in\mathbb Z$).
- **Frange sombre** (destructives) : $\delta=\left(k+\tfrac12\right)\lambda$.
- **Interfrange** (distance entre deux franges brillantes consécutives) :
$$i=\frac{\lambda D}{a}$$

## 📚 4. Conditions d'interférences
Les sources doivent être **cohérentes** (même fréquence, déphasage constant). On obtient des sources cohérentes en éclairant les deux fentes par la même source.

## 📚 5. Lumière blanche
Les franges sont colorées : la frange centrale est blanche, les suivantes sont irisées (chaque longueur d'onde a son interfrange).

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Longueur d'onde dans le verre
$\lambda_0=600$ nm, verre $n=1{,}5$ : $\lambda=\dfrac{600}{1{,}5}=\mathbf{400\ nm}$ ; $v=2\times10^8$ m/s ; la fréquence reste $5\times10^{14}$ Hz.

### Exemple 2 — Largeur d'une fente
Un laser ($\lambda=633$ nm) éclaire une fente et donne une tache centrale de 4 cm à $D=2$ m : $a=\dfrac{2\lambda D}{L}=\dfrac{2\times633\times10^{-9}\times2}{0{,}04}\approx\mathbf{6{,}3\times10^{-5}\ m}$ soit 63 µm.

### Exemple 3 — Interfrange
$\lambda=550$ nm, $a=0{,}5$ mm, $D=2$ m : $i=\dfrac{550\times10^{-9}\times2}{0{,}5\times10^{-3}}=\mathbf{2{,}2\times10^{-3}\ m}$ soit 2,2 mm.

### Exemple 4 — Mesure de $\lambda$
Dix interfranges mesurent 2,6 cm, avec $a=0{,}2$ mm et $D=1$ m : $i=2{,}6$ mm ; $\lambda=\dfrac{ia}{D}=\dfrac{2{,}6\times10^{-3}\times2\times10^{-4}}{1}=\mathbf{5{,}2\times10^{-7}\ m}$ (520 nm, vert).

### Exemple 5 — Nature d'une frange
Au point où $\delta=1{,}5\lambda$ : frange **sombre** ($\delta=(k+\tfrac12)\lambda$ avec $k=1$).

## ✏️ Exercices d'entraînement
**Exercice 1.** Calculer la fréquence d'une lumière de longueur d'onde 500 nm dans le vide.

:::corrige
$\nu=\dfrac{c}{\lambda}=\dfrac{3\times10^8}{5\times10^{-7}}=\mathbf{6\times10^{14}\ Hz}$.
:::

**Exercice 2.** Les fentes d'Young sont distantes de 1 mm, l'écran est à 3 m ; on mesure $i=1{,}8$ mm. Calculer $\lambda$.

:::corrige
$\lambda=\dfrac{ia}{D}=\dfrac{1{,}8\times10^{-3}\times10^{-3}}{3}=\mathbf{6\times10^{-7}\ m}$ (600 nm).
:::

**Exercice 3.** Que devient l'interfrange si on double la distance $D$ ? si on passe du rouge au bleu ?

:::corrige
$i$ est proportionnel à $D$ : il est **doublé**. Le bleu a une $\lambda$ plus petite que le rouge ⇒ interfrange plus **petit**.
:::

**Exercice 4.** Quelle est la largeur de la tache centrale de diffraction d'un fil de 0,1 mm éclairé par un laser rouge de 650 nm à 2 m ?

:::corrige
$L=\dfrac{2\lambda D}{a}=\dfrac{2\times650\times10^{-9}\times2}{10^{-4}}=\mathbf{0{,}026\ m}=2{,}6$ cm.
:::

## ⚠️ Pièges classiques du BAC
- Oublier que la **fréquence** ne dépend pas du milieu.
- Mélanger **interfrange** et distance entre deux franges de natures différentes (brillante-sombre vaut $i/2$).
- Utiliser $\theta=\lambda/a$ pour de grands angles.
- Oublier de convertir mm/nm en m.

## ✅ À retenir
- Diffraction : $\theta\approx\dfrac\lambda a$ ; Young : $i=\dfrac{\lambda D}{a}$.
- Brillante : $\delta=k\lambda$ ; sombre : $\delta=(k+\tfrac12)\lambda$.
- $\lambda=\dfrac{\lambda_0}{n}$ ; $\nu$ constante.
`

DEEP_PC_6["lumiere-particule"] = String.raw`## 💡 L'essentiel en une phrase
La lumière est aussi formée de **photons**, grains d'énergie $E=h\nu$ ; l'**effet photoélectrique** et les **niveaux d'énergie** de l'atome ne s'expliquent que par cet aspect corpusculaire.

## 📚 1. Le photon
- Énergie : $E=h\nu=\dfrac{hc}{\lambda}$ avec $h=6{,}63\times10^{-34}$ J·s.
- Conversion : $1\ \text{eV}=1{,}6\times10^{-19}$ J. Pour $\lambda$ en nm : $E(\text{eV})=\dfrac{1240}{\lambda(\text{nm})}$.

## 📚 2. Effet photoélectrique
Un métal éclairé par une lumière de fréquence suffisante émet des électrons.
- Il existe une **fréquence seuil** $\nu_0$ (ou longueur d'onde seuil $\lambda_0$) propre au métal.
- Si $\nu<\nu_0$ : aucun électron, quelle que soit l'intensité lumineuse.
- Travail d'extraction $W_0=h\nu_0$.
- **Relation d'Einstein** :
$$h\nu=W_0+E_{c,max}\qquad\Rightarrow\qquad E_{c,max}=h(\nu-\nu_0)$$
- L'**intensité lumineuse** (nombre de photons) détermine l'**intensité du courant** photoélectrique ; la fréquence détermine l'**énergie cinétique** maximale.
- Un photon cède toute son énergie à un seul électron (phénomène tout ou rien).
- **Potentiel d'arrêt** : $eU_0=E_{c,max}$.

## 📚 3. Quantification de l'énergie de l'atome
Les niveaux d'énergie de l'atome sont **discrets**. Pour l'atome d'hydrogène :
$$E_n=-\frac{13{,}6}{n^2}\ \text{eV}\qquad(n=1,2,3,\dots)$$
- État fondamental ($n=1$) : $-13{,}6$ eV ; ionisation : $E=0$.
- **Émission** : transition de $E_p$ vers $E_n<E_p$, émission d'un photon $h\nu=E_p-E_n$.
- **Absorption** : un photon absorbé fait passer de $E_n$ à $E_p>E_n$ avec $h\nu=E_p-E_n$ **exactement**.
- Spectre de raies : chaque atome a son spectre de raies caractéristique.
- Formule de Ritz : $\dfrac{1}{\lambda}=R_H\left(\dfrac{1}{n^2}-\dfrac1{p^2}\right)$ avec $R_H=1{,}097\times10^7\ \text{m}^{-1}$.

## 📚 4. Dualité onde-corpuscule
- Un photon a une quantité de mouvement $p=\dfrac{h}{\lambda}$.
- Une particule matérielle a une onde associée de longueur d'onde (de Broglie) $\lambda=\dfrac{h}{mv}$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Énergie d'un photon
$\lambda=500$ nm : $E=\dfrac{hc}{\lambda}=\dfrac{6{,}63\times10^{-34}\times3\times10^8}{5\times10^{-7}}=3{,}98\times10^{-19}$ J $=\mathbf{2{,}49\ eV}$.

### Exemple 2 — Effet photoélectrique
Césium : $W_0=1{,}9$ eV. Lumière de $\lambda=400$ nm ($E=3{,}1$ eV) : $E_{c,max}=3{,}1-1{,}9=\mathbf{1{,}2\ eV}$. Longueur d'onde seuil : $\lambda_0=\dfrac{1240}{1{,}9}\approx653$ nm : pour $\lambda>653$ nm, pas d'effet.

### Exemple 3 — Émission de l'hydrogène
Transition $n=3\to n=2$ : $\Delta E=-1{,}51-(-3{,}40)=1{,}89$ eV ; $\lambda=\dfrac{1240}{1{,}89}\approx\mathbf{656\ nm}$ (raie rouge $H_\alpha$).

### Exemple 4 — Ionisation de l'hydrogène
Pour arracher l'électron de l'état fondamental, il faut au moins $13{,}6$ eV, soit $\lambda\le\dfrac{1240}{13{,}6}\approx91$ nm (ultraviolet).

### Exemple 5 — Longueur d'onde de de Broglie
Électron accéléré à $10^6$ m/s : $\lambda=\dfrac{6{,}63\times10^{-34}}{9{,}1\times10^{-31}\times10^6}\approx\mathbf{7{,}3\times10^{-10}\ m}$ (même ordre que la distance entre atomes ⇒ diffraction des électrons dans les cristaux).

## ✏️ Exercices d'entraînement
**Exercice 1.** Calculer l'énergie en eV d'un photon de 620 nm.

:::corrige
$E=\dfrac{1240}{620}=\mathbf{2\ eV}$.
:::

**Exercice 2.** Le travail d'extraction du zinc vaut 4,3 eV. Quelle est la longueur d'onde seuil ? La lumière visible provoque-t-elle l'effet photoélectrique ?

:::corrige
$\lambda_0=\dfrac{1240}{4{,}3}\approx\mathbf{288\ nm}$ (ultraviolet). La lumière visible (> 400 nm) ne peut **pas** arracher d'électron au zinc.
:::

**Exercice 3.** On éclaire du sodium ($W_0=2{,}3$ eV) avec de la lumière de 300 nm. Calculer $E_{c,max}$ et la vitesse maximale des électrons.

:::corrige
$E=\dfrac{1240}{300}=4{,}13$ eV ; $E_{c,max}=4{,}13-2{,}3=1{,}83$ eV $=2{,}93\times10^{-19}$ J.
$v=\sqrt{\dfrac{2E_c}{m}}=\sqrt{\dfrac{2\times2{,}93\times10^{-19}}{9{,}1\times10^{-31}}}\approx\mathbf{8\times10^5\ m/s}$.
:::

**Exercice 4.** Quelle est l'énergie du photon émis lors de la transition $n=4\to n=2$ de l'hydrogène ?

:::corrige
$\Delta E=-0{,}85-(-3{,}40)=\mathbf{2{,}55\ eV}$ ; $\lambda=\dfrac{1240}{2{,}55}\approx486$ nm (bleu-vert, raie $H_\beta$).
:::

## ⚠️ Pièges classiques du BAC
- Penser qu'augmenter l'**intensité** de la lumière peut compenser une fréquence trop faible.
- Oublier de convertir **eV en joules** (×1,6×10⁻¹⁹).
- Confondre émission (perte d'énergie) et absorption.
- Dire qu'un photon peut être absorbé avec une énergie **quelconque** : il doit être égal à l'écart entre deux niveaux.

## ✅ À retenir
- $E=h\nu=\dfrac{hc}{\lambda}$ ; $E(\text{eV})=\dfrac{1240}{\lambda(\text{nm})}$.
- Effet photoélectrique : $h\nu=W_0+E_c$.
- Hydrogène : $E_n=-\dfrac{13{,}6}{n^2}$ eV ; transitions $\Delta E=h\nu$.
`
