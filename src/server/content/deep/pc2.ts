// Leçons approfondies – Physique-Chimie : électromagnétisme (2/4)

export const DEEP_PC_2: Record<string, string> = {}

DEEP_PC_2["champ-magnetique"] = String.raw`## 💡 L'essentiel en une phrase
Un **aimant** ou un **courant électrique** crée dans l'espace un **champ magnétique** $\vec B$ (en tesla, T) qui oriente une aiguille aimantée.

## 📚 1. Notion de champ magnétique
- Vecteur $\vec B$ en chaque point : direction de l'aiguille aimantée (du pôle Sud vers le pôle Nord de l'aiguille), valeur mesurée au **teslamètre**.
- **Ordres de grandeur** : champ terrestre $\approx 5\times10^{-5}$ T ; aimant usuel $\approx 10^{-2}$ à $10^{-1}$ T ; électroaimant puissant $\approx 1$ T.
- Une **ligne de champ** est tangente à $\vec B$ en chaque point ; à l'extérieur d'un aimant elle va du pôle **Nord** vers le pôle **Sud**.
- Un champ est **uniforme** si $\vec B$ est le même en tout point (lignes parallèles et équidistantes).

## 📚 2. Règles d'orientation
- **Bonhomme d'Ampère** : couché sur le fil, le courant entrant par les pieds et sortant par la tête, regardant l'intérieur, le Nord de l'aiguille est à sa **gauche**.
- **Règle de la main droite** : pouce dans le sens du courant, les doigts repliés donnent le sens de $\vec B$ autour du fil.
- **Tire-bouchon** : on tourne dans le sens du courant ; le sens d'avancement donne le sens de $\vec B$ (pour une spire ou un solénoïde).

## 📚 3. Les trois champs à connaître
**Fil rectiligne infini**, à la distance $d$ du fil :
$$B=\frac{\mu_0I}{2\pi d}\qquad\mu_0=4\pi\times10^{-7}\ \text{T·m/A}$$

**Spire circulaire** de rayon $R$, au centre :
$$B=\frac{\mu_0I}{2R}$$

**Solénoïde** (long, $N$ spires sur la longueur $L$, $n=N/L$), à l'intérieur loin des bords :
$$B=\mu_0\,n\,I=\mu_0\frac{N}{L}I$$
- Champ **uniforme** à l'intérieur, de direction l'axe.
- Les faces sont **Nord** (là où sortent les lignes) ou **Sud** : vue de la face, si le courant tourne dans le sens **trigonométrique** c'est une face Nord ; sens horaire, une face Sud.

## 📚 4. Superposition de champs
Quand plusieurs sources agissent : $\vec B=\vec B_1+\vec B_2+\dots$ (somme **vectorielle**).
- Même direction et même sens : on **ajoute** les valeurs ; sens opposés : on **soustrait** ; directions perpendiculaires : $B=\sqrt{B_1^2+B_2^2}$ et $\tan\alpha=\dfrac{B_2}{B_1}$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Fil rectiligne
$I=10$ A à $d=5$ cm : $B=\dfrac{4\pi\times10^{-7}\times10}{2\pi\times0{,}05}=\mathbf{4\times10^{-5}\ T}$ (comparable au champ terrestre).

### Exemple 2 — Solénoïde
$N=500$ spires, $L=25$ cm, $I=2$ A : $n=2000$ spires/m ; $B=4\pi\times10^{-7}\times2000\times2\approx\mathbf{5\times10^{-3}\ T}$ soit 5 mT.

### Exemple 3 — Intensité nécessaire
Pour obtenir $B=2\times10^{-2}$ T dans un solénoïde de $n=1000$ spires/m : $I=\dfrac{B}{\mu_0n}=\dfrac{0{,}02}{4\pi\times10^{-7}\times1000}\approx\mathbf{15{,}9\ A}$.

### Exemple 4 — Spire et champ terrestre
Une aiguille aimantée est placée au centre d'une spire de $R=10$ cm dont le plan est vertical, orienté dans le plan du méridien magnétique. $B_{spire}=\dfrac{\mu_0I}{2R}$ est perpendiculaire à la composante horizontale $B_H=2\times10^{-5}$ T. L'aiguille dévie de $\alpha=45^\circ$ quand $B_{spire}=B_H\tan45^\circ=2\times10^{-5}$ T, soit $I=\dfrac{2RB}{\mu_0}=\dfrac{0{,}2\times2\times10^{-5}}{4\pi\times10^{-7}}\approx\mathbf{3{,}2\ A}$.

### Exemple 5 — Deux fils parallèles
Deux fils parcourus par $I=5$ A dans le **même sens**, distants de 10 cm : au milieu, les champs sont de **sens opposés** et de même valeur, donc $B=0$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Calculer le champ à 2 cm d'un long fil parcouru par 20 A.

:::corrige
$B=\dfrac{4\pi\times10^{-7}\times20}{2\pi\times0{,}02}=\mathbf{2\times10^{-4}\ T}$.
:::

**Exercice 2.** Un solénoïde de 40 cm comporte 800 spires et est parcouru par 1,5 A. Calculer $B$ à l'intérieur.

:::corrige
$n=\dfrac{800}{0{,}4}=2000\ \text{m}^{-1}$ ; $B=4\pi\times10^{-7}\times2000\times1{,}5\approx\mathbf{3{,}8\times10^{-3}\ T}$.
:::

**Exercice 3.** Une spire de rayon 4 cm crée au centre un champ de $1{,}6\times10^{-4}$ T. Calculer l'intensité.

:::corrige
$I=\dfrac{2RB}{\mu_0}=\dfrac{2\times0{,}04\times1{,}6\times10^{-4}}{4\pi\times10^{-7}}\approx\mathbf{10{,}2\ A}$.
:::

**Exercice 4.** Un champ uniforme $B_1=3\times10^{-3}$ T (horizontal) et le champ d'un aimant $B_2=4\times10^{-3}$ T (perpendiculaire) agissent en un point. Calculer la valeur du champ résultant.

:::corrige
$B=\sqrt{9+16}\times10^{-3}=\mathbf{5\times10^{-3}\ T}$ et l'angle avec $\vec B_1$ : $\tan\alpha=\dfrac43\Rightarrow\alpha\approx53^\circ$.
:::

## ⚠️ Pièges classiques du BAC
- Oublier de convertir **cm en m** ou de calculer $n=N/L$ avec $L$ en mètre.
- Appliquer $B=\mu_0nI$ **hors du solénoïde** ou près des bords.
- Additionner les valeurs au lieu des **vecteurs**.
- Se tromper de **sens** (face Nord/Sud, règle de la main droite).

## ✅ À retenir
- $B_{fil}=\dfrac{\mu_0I}{2\pi d}$ ; $B_{spire}=\dfrac{\mu_0I}{2R}$ ; $B_{sol}=\mu_0nI$.
- $\mu_0=4\pi\times10^{-7}$ T·m/A ; le tesla est l'unité.
- Les champs s'ajoutent **vectoriellement**.
`

DEEP_PC_2["particule-champ-magnetique"] = String.raw`## 💡 L'essentiel en une phrase
Une particule chargée en mouvement dans un champ magnétique subit la **force de Lorentz**, perpendiculaire à sa vitesse : elle **ne travaille pas**, la vitesse garde la même valeur et la trajectoire est un **cercle**.

## 📚 1. Force de Lorentz
$$\vec F=q\,\vec v\wedge\vec B\qquad F=|q|\,v\,B\sin\alpha$$
où $\alpha$ est l'angle entre $\vec v$ et $\vec B$.
- $\vec F\perp\vec v$ et $\vec F\perp\vec B$.
- Sens : règle de la **main droite** (ou des trois doigts) pour $q>0$ ; sens inverse pour $q<0$.
- La force est **nulle** si $\vec v\parallel\vec B$ ou si la particule est immobile.
- Puissance $P=\vec F\cdot\vec v=0$ : le travail est **nul**, donc $E_c$ et $v$ restent constants.

## 📚 2. Mouvement dans un champ uniforme, $\vec v_0\perp\vec B$
D'après la 2e loi de Newton, $m\vec a=q\vec v\wedge\vec B$ :
- L'accélération est perpendiculaire à $\vec v$ : mouvement **circulaire uniforme**, dans le plan perpendiculaire à $\vec B$.
- **Rayon** : $a=\dfrac{v^2}{R}=\dfrac{|q|vB}{m}$, donc
$$R=\frac{mv}{|q|B}$$
- **Période** : $T=\dfrac{2\pi R}{v}=\dfrac{2\pi m}{|q|B}$ (indépendante de $v$ et de $R$).
- Pulsation cyclotron : $\omega=\dfrac{|q|B}{m}$.

Si $\vec v_0$ fait un angle avec $\vec B$ : le mouvement est une **hélice** (cercle dans le plan $\perp\vec B$ + translation uniforme le long de $\vec B$).

## 📚 3. Déviation dans une zone de largeur $\ell$
Une particule entre perpendiculairement dans une région de champ de largeur $\ell$ et en ressort déviée de l'angle $\alpha$ avec $\sin\alpha=\dfrac{\ell}{R}$ (si $\ell<R$). Pour $\alpha$ petit : $\alpha\approx\dfrac{\ell}{R}=\dfrac{|q|B\ell}{mv}$.

## 📚 4. Applications
**Spectrographe de masse** : les ions, accélérés par $U$ ($v=\sqrt{2|q|U/m}$), sont déviés par $\vec B$ sur un demi-cercle de rayon $R=\dfrac{1}{B}\sqrt{\dfrac{2mU}{|q|}}$. Le rayon permet de **trier les isotopes** selon leur masse.

**Sélecteur de vitesse (filtre de Wien)** : avec $\vec E\perp\vec B$ tels que $qE=qvB$ la particule n'est pas déviée si $v=\dfrac EB$.

**Cyclotron** : les particules tournent dans un champ $\vec B$ et sont accélérées par un champ électrique alternatif de fréquence $f=\dfrac{|q|B}{2\pi m}$ à chaque demi-tour.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Valeur de la force
Un proton ($q=1{,}6\times10^{-19}$ C) va à $v=10^6$ m/s perpendiculairement à $B=0{,}5$ T : $F=qvB=1{,}6\times10^{-19}\times10^6\times0{,}5=\mathbf{8\times10^{-14}\ N}$.

### Exemple 2 — Rayon d'un électron
Un électron ($m=9{,}1\times10^{-31}$ kg) à $v=2\times10^7$ m/s dans $B=10^{-3}$ T : $R=\dfrac{mv}{eB}=\dfrac{9{,}1\times10^{-31}\times2\times10^7}{1{,}6\times10^{-19}\times10^{-3}}\approx\mathbf{0{,}114\ m}$.

### Exemple 3 — Période
Pour cet électron, $T=\dfrac{2\pi m}{eB}=\dfrac{2\pi\times9{,}1\times10^{-31}}{1{,}6\times10^{-19}\times10^{-3}}\approx\mathbf{3{,}6\times10^{-8}\ s}$.

### Exemple 4 — Séparation des isotopes
Des ions $^{20}$Ne$^+$ et $^{22}$Ne$^+$ sont accélérés par la même tension $U$ puis déviés par le même $B$. Le rapport des rayons est $\dfrac{R_{22}}{R_{20}}=\sqrt{\dfrac{22}{20}}\approx\mathbf{1{,}049}$. Si $R_{20}=10$ cm, alors $R_{22}\approx10{,}5$ cm : les deux impacts sont distants de $2(R_{22}-R_{20})\approx\mathbf{1}$ cm.

### Exemple 5 — Sélecteur de vitesse
$E=2\times10^4$ V/m et $B=0{,}05$ T : $v=\dfrac EB=\mathbf{4\times10^5\ m/s}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Une particule $\alpha$ ($q=3{,}2\times10^{-19}$ C, $m=6{,}64\times10^{-27}$ kg) entre perpendiculairement dans $B=0{,}2$ T à $v=3\times10^6$ m/s. Calculer le rayon.

:::corrige
$R=\dfrac{mv}{qB}=\dfrac{6{,}64\times10^{-27}\times3\times10^6}{3{,}2\times10^{-19}\times0{,}2}\approx\mathbf{0{,}31\ m}$.
:::

**Exercice 2.** Un proton décrit un cercle de rayon 5 cm dans $B=0{,}1$ T. Calculer sa vitesse et son énergie cinétique.

:::corrige
$v=\dfrac{qBR}{m}=\dfrac{1{,}6\times10^{-19}\times0{,}1\times0{,}05}{1{,}67\times10^{-27}}\approx\mathbf{4{,}8\times10^5\ m/s}$.
$E_c=\tfrac12mv^2\approx1{,}9\times10^{-16}$ J $\approx1{,}2$ keV.
:::

**Exercice 3.** Montrer que le travail de la force magnétique est nul.

:::corrige
Le travail élémentaire est $\delta W=\vec F\cdot\vec v\,dt$. Or $\vec F=q\vec v\wedge\vec B$ est perpendiculaire à $\vec v$, donc $\vec F\cdot\vec v=0$ et $W=0$. D'après le théorème de l'énergie cinétique, $E_c$ (donc $v$) est constante.
:::

**Exercice 4.** Calculer la fréquence cyclotron d'un proton dans $B=1{,}2$ T.

:::corrige
$f=\dfrac{qB}{2\pi m}=\dfrac{1{,}6\times10^{-19}\times1{,}2}{2\pi\times1{,}67\times10^{-27}}\approx\mathbf{1{,}83\times10^7\ Hz}$ (18,3 MHz).
:::

## ⚠️ Pièges classiques du BAC
- Dire que le champ magnétique **accélère** la particule : il ne modifie que la **direction**.
- Oublier le **signe** de $q$ pour le sens de la déviation.
- Confondre le rôle du champ **électrique** (qui change $v$) et du champ **magnétique** (qui courbe).
- Utiliser $R=\dfrac{mv}{qB}$ sans vérifier que $\vec v\perp\vec B$.

## ✅ À retenir
- $\vec F=q\vec v\wedge\vec B$ ; $W=0$ ; $v$ constante.
- $R=\dfrac{mv}{|q|B}$ ; $T=\dfrac{2\pi m}{|q|B}$.
- $v=E/B$ pour le sélecteur de vitesse.
`

DEEP_PC_2["loi-laplace"] = String.raw`## 💡 L'essentiel en une phrase
Un **conducteur parcouru par un courant** placé dans un champ magnétique subit une **force de Laplace** : c'est le principe des **moteurs électriques** et des haut-parleurs.

## 📚 1. Force de Laplace
Pour un conducteur rectiligne de longueur $\ell$ (dans le champ) parcouru par $I$, placé dans un champ uniforme $\vec B$ :
$$\vec F=I\,\vec\ell\wedge\vec B\qquad F=I\,\ell\,B\sin\alpha$$
où $\vec\ell$ a pour sens celui du courant et $\alpha$ est l'angle entre le fil et $\vec B$.
- $\vec F\perp$ au fil et $\vec F\perp\vec B$ ; elle est **maximale** quand le fil est perpendiculaire à $\vec B$ ($F=I\ell B$).
- **Point d'application** : milieu de la portion de fil dans le champ.
- **Sens** : règle de la main droite (pouce = courant $I$, index = $\vec B$, majeur = $\vec F$).
- Inverser $I$ ou $\vec B$ **inverse** le sens de la force.

## 📚 2. Rails de Laplace
Une tige conductrice mobile repose sur deux rails horizontaux, dans un champ $\vec B$ vertical ; elle est traversée par un courant $I$.
- La force de Laplace est horizontale, perpendiculaire à la tige : elle fait **glisser** la tige sur les rails.
- Sans frottement : $m\,a=IlB$, donc $a=\dfrac{I\ell B}{m}$ (mouvement uniformément accéléré si $I$ constant).
- Le travail de la force : $W=F\cdot d=I\ell B\,d=I\,\Delta\Phi$ (où $\Delta\Phi=B\ell d$ est le **flux coupé**).

**Rails inclinés** : la tige est en équilibre si la composante horizontale de la force équilibre la composante du poids : $F\cos\alpha=mg\sin\alpha$ (pour $\vec B$ vertical).

## 📚 3. Cadre rectangulaire dans un champ — principe du moteur
Un cadre parcouru par $I$ dans un champ uniforme est soumis à un **couple** dont le moment est $\mathcal M=N\,I\,S\,B\sin\theta$ ($N$ spires, surface $S$, $\theta$ angle entre le plan du cadre et $\vec B$ selon la convention de l'énoncé). Un **collecteur** inverse le courant à chaque demi-tour pour maintenir la rotation.

## 📚 4. Équilibre d'une tige suspendue
Une tige de masse $m$ suspendue par des fils dans un champ horizontal $\vec B$ se déplace d'un angle $\theta$ vérifiant $\tan\theta=\dfrac{F}{mg}=\dfrac{I\ell B}{mg}$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Valeur de la force
$\ell=10$ cm, $I=5$ A, $B=0{,}2$ T avec $\vec B\perp$ fil : $F=5\times0{,}1\times0{,}2=\mathbf{0{,}1\ N}$.

### Exemple 2 — Fil incliné
Le même fil fait un angle de $30^\circ$ avec $\vec B$ : $F=0{,}1\times\sin30^\circ=\mathbf{0{,}05\ N}$.

### Exemple 3 — Rails horizontaux
Tige de masse $m=20$ g, $\ell=8$ cm, $I=4$ A, $B=0{,}25$ T :
$F=4\times0{,}08\times0{,}25=0{,}08$ N ; $a=\dfrac{0{,}08}{0{,}02}=\mathbf{4\ m/s^2}$. Après 0,5 s : $v=2$ m/s ; distance $=0{,}5$ m ; $W=0{,}08\times0{,}5=\mathbf{0{,}04\ J}$.

### Exemple 4 — Rails inclinés
Une tige de 60 g, $\ell=10$ cm, repose sur des rails inclinés de $\alpha=20^\circ$ avec $\vec B$ vertical de 0,5 T. À l'équilibre : $I\ell B\cos\alpha=mg\sin\alpha\Rightarrow I=\dfrac{mg\tan\alpha}{\ell B}=\dfrac{0{,}6\times0{,}364}{0{,}1\times0{,}5}\approx\mathbf{4{,}4\ A}$.

### Exemple 5 — Tige suspendue
$m=10$ g, $\ell=5$ cm, $I=2$ A, $B=0{,}1$ T : $\tan\theta=\dfrac{2\times0{,}05\times0{,}1}{0{,}1}=0{,}1\Rightarrow\theta\approx\mathbf{5{,}7^\circ}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Un fil de 20 cm, parcouru par 3 A, est placé perpendiculairement à un champ de 0,4 T. Calculer la force.

:::corrige
$F=3\times0{,}2\times0{,}4=\mathbf{0{,}24\ N}$.
:::

**Exercice 2.** Une tige de 30 g peut glisser sans frottement sur des rails horizontaux distants de 12 cm, dans un champ vertical de 0,5 T. Quelle intensité faut-il pour une accélération de 2 m/s² ?

:::corrige
$F=ma=0{,}03\times2=0{,}06$ N ; $I=\dfrac{F}{\ell B}=\dfrac{0{,}06}{0{,}12\times0{,}5}=\mathbf{1\ A}$.
:::

**Exercice 3.** Pour quelle intensité une tige de 50 g, de longueur utile 10 cm, est-elle en équilibre sur un plan incliné de $30^\circ$ (sans frottement) avec $\vec B$ vertical de 0,5 T ?

:::corrige
$I\ell B\cos\alpha=mg\sin\alpha\Rightarrow I=\dfrac{0{,}5\times\tan30^\circ}{0{,}1\times0{,}5}=\dfrac{0{,}5\times0{,}577}{0{,}05}\approx\mathbf{5{,}8\ A}$.
:::

**Exercice 4.** Comment changer le sens de rotation d'un moteur à aimant permanent ?

:::corrige
Il suffit d'**inverser le sens du courant** (ou, de façon équivalente, le sens de $\vec B$) : la force de Laplace change alors de sens.
:::

## ⚠️ Pièges classiques du BAC
- Prendre $\ell$ égal à la **longueur totale** de la tige au lieu de la partie **dans le champ**.
- Oublier $\sin\alpha$ quand le fil n'est pas perpendiculaire à $\vec B$.
- Se tromper de sens avec la règle de la main droite.
- Écrire que la force de Laplace « **travaille** » toujours : pour un fil **fixe** le travail est nul.

## ✅ À retenir
- $F=I\ell B\sin\alpha$ ; $\vec F\perp\vec\ell,\vec B$.
- $W=I\Delta\Phi$ pour un déplacement dans un champ uniforme.
- Application : moteurs, haut-parleurs, rails de Laplace.
`

DEEP_PC_2["auto-induction"] = String.raw`## 💡 L'essentiel en une phrase
Une **bobine** s'oppose aux **variations** du courant qui la traverse : la tension à ses bornes est $u=L\dfrac{di}{dt}+ri$, et elle emmagasine l'**énergie magnétique** $\tfrac12Li^2$.

## 📚 1. Flux propre et inductance
- Le **flux propre** (flux du champ créé par la bobine à travers elle-même) est proportionnel à l'intensité : $\Phi=L\,i$.
- $L$ est l'**inductance** de la bobine, en **henry (H)**. Pour un solénoïde long : $L=\mu_0\dfrac{N^2S}{\ell}$.

## 📚 2. Auto-induction
Quand $i$ varie, le flux propre varie, ce qui produit une **f.é.m. d'auto-induction**
$$e=-\frac{d\Phi}{dt}=-L\frac{di}{dt}$$
(loi de Lenz : elle **s'oppose** à la cause qui lui donne naissance, c'est-à-dire à la variation du courant).

**Tension aux bornes d'une bobine** (convention récepteur, résistance interne $r$) :
$$u=L\frac{di}{dt}+r\,i$$
Pour une bobine **idéale** ($r=0$) : $u=L\dfrac{di}{dt}$.
- En **régime permanent** ($i$ constant), $u=ri$ : la bobine se comporte comme un simple **résistor**.

## 📚 3. Établissement du courant (circuit RL)
Un échelon de tension $E$ est appliqué à une bobine ($L,r$) en série avec un résistor $R$ ; $R_t=R+r$.
$$L\frac{di}{dt}+R_ti=E\qquad\Rightarrow\qquad i(t)=I_0\left(1-e^{-t/\tau}\right)$$
- **Intensité finale** $I_0=\dfrac{E}{R_t}$.
- **Constante de temps** $\tau=\dfrac{L}{R_t}$ (en secondes).
- Le régime permanent est atteint après environ $5\tau$ ; à $t=\tau$, $i=0{,}63\,I_0$.
- Le courant **ne peut pas** varier brusquement : $i$ est continu.

## 📚 4. Rupture du courant
Après ouverture de l'interrupteur et fermeture sur $R_t$ : $i(t)=I_0\,e^{-t/\tau}$. Si l'on coupe brutalement le courant dans une bobine, $\dfrac{di}{dt}$ est très grand et il apparaît une **surtension** (étincelle de rupture).

## 📚 5. Énergie magnétique
$$E_m=\tfrac12L\,i^2$$
Cette énergie est emmagasinée dans le champ magnétique de la bobine et restituée lors de la rupture du courant. La **puissance** reçue est $p=L\,i\dfrac{di}{dt}$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Inductance d'un solénoïde
$N=1000$, $\ell=0{,}5$ m, $S=10$ cm² $=10^{-3}$ m² : $L=4\pi\times10^{-7}\times\dfrac{10^6\times10^{-3}}{0{,}5}\approx\mathbf{2{,}5\times10^{-3}\ H}$ = 2,5 mH.

### Exemple 2 — f.é.m. d'auto-induction
$L=0{,}2$ H et $i$ passe de 0 à 2 A en 0,1 s : $e=-L\dfrac{\Delta i}{\Delta t}=-0{,}2\times\dfrac{2}{0{,}1}=\mathbf{-4\ V}$.

### Exemple 3 — Circuit RL
$E=12$ V, $R=10\ \Omega$, bobine $L=0{,}1$ H, $r=2\ \Omega$ : $R_t=12\ \Omega$ ; $I_0=\mathbf{1\ A}$ ; $\tau=\dfrac{0{,}1}{12}\approx\mathbf{8{,}3\ ms}$ ; régime permanent après $\approx42$ ms.
Intensité à $t=10$ ms : $i=1-e^{-1{,}2}\approx\mathbf{0{,}70\ A}$.

### Exemple 4 — Énergie
Avec $L=0{,}1$ H et $I_0=1$ A : $E_m=\tfrac12\times0{,}1\times1=\mathbf{0{,}05\ J}$.

### Exemple 5 — Déterminer $\tau$ graphiquement
On trace $i(t)$. La **tangente à l'origine** coupe l'asymptote $I_0$ en $t=\tau$. On peut aussi lire le temps pour atteindre $0{,}63\,I_0$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Une bobine ($L=50$ mH, $r=5\ \Omega$) est traversée par un courant constant de 0,4 A. Quelle est la tension à ses bornes ?

:::corrige
Régime permanent : $\dfrac{di}{dt}=0$ donc $u=ri=5\times0{,}4=\mathbf{2\ V}$.
:::

**Exercice 2.** Un courant croît linéairement de 0 à 3 A en 30 ms dans une bobine idéale de 0,5 H. Calculer $u$ pendant cette durée.

:::corrige
$\dfrac{di}{dt}=\dfrac{3}{0{,}03}=100\ \text{A/s}$ ; $u=0{,}5\times100=\mathbf{50\ V}$.
:::

**Exercice 3.** Établir l'équation différentielle du courant dans le circuit RL soumis à $E$ et vérifier que $i=I_0(1-e^{-t/\tau})$ est solution.

:::corrige
Loi des mailles : $E=R_ti+L\dfrac{di}{dt}$. Avec $i=I_0(1-e^{-t/\tau})$ : $\dfrac{di}{dt}=\dfrac{I_0}{\tau}e^{-t/\tau}$.
$R_ti+L\dfrac{di}{dt}=R_tI_0-R_tI_0e^{-t/\tau}+\dfrac{LI_0}{\tau}e^{-t/\tau}$.
Avec $\tau=\dfrac{L}{R_t}$, $\dfrac{LI_0}{\tau}=R_tI_0$, les exponentielles s'annulent et il reste $R_tI_0=E$. ✔
:::

**Exercice 4.** Dans un circuit RL, $E=6$ V, $R_t=30\ \Omega$, $L=60$ mH. Calculer $\tau$, $I_0$ et l'énergie finale.

:::corrige
$\tau=\dfrac{0{,}06}{30}=\mathbf{2\ ms}$ ; $I_0=\dfrac{6}{30}=\mathbf{0{,}2\ A}$ ; $E_m=\tfrac12\times0{,}06\times0{,}04=\mathbf{1{,}2\times10^{-3}\ J}$.
:::

## ⚠️ Pièges classiques du BAC
- Oublier la **résistance interne** $r$ de la bobine dans $R_t$.
- Croire que le courant s'établit **instantanément** : $i$ est continue dans une bobine (la tension, elle, peut sauter).
- Se tromper dans $\tau$ : $\tau=\dfrac{L}{R_t}$ (et non $R_tL$).
- Confondre avec le circuit RC dont $\tau=RC$.

## ✅ À retenir
- $u=L\dfrac{di}{dt}+ri$ ; $e=-L\dfrac{di}{dt}$.
- RL : $i=I_0(1-e^{-t/\tau})$, $\tau=\dfrac{L}{R_t}$.
- $E_m=\tfrac12Li^2$ ; l'intensité est **continue** dans une bobine.
`
