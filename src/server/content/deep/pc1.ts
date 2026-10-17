// Leçons approfondies – Physique-Chimie Tle C et D : mécanique (1/4)
// Dans tous les calculs : g = 10 m/s² sauf indication contraire.

export const DEEP_PC_1: Record<string, string> = {}

DEEP_PC_1["cinematique"] = String.raw`## 💡 L'essentiel en une phrase
La **cinématique** décrit le mouvement d'un point **sans chercher ses causes** : on relie la **position**, la **vitesse** et l'**accélération** en fonction du temps, par dérivation successive.

## 📚 1. Repère, référentiel, trajectoire
- Un mouvement n'a de sens que **par rapport à un référentiel** (objet de référence, par exemple la Terre ou la salle de classe).
- On y associe un **repère** $(O\,;\vec i,\vec j,\vec k)$ et une **horloge**.
- La **trajectoire** est l'ensemble des positions successives du point.
- Les **équations horaires** donnent $x(t)$, $y(t)$, $z(t)$.

## 📚 2. Vecteurs position, vitesse, accélération
$$\overrightarrow{OM}=x\vec i+y\vec j+z\vec k$$
$$\vec v=\frac{d\overrightarrow{OM}}{dt}=\dot x\,\vec i+\dot y\,\vec j+\dot z\,\vec k\qquad\text{(en m/s)}$$
$$\vec a=\frac{d\vec v}{dt}=\ddot x\,\vec i+\ddot y\,\vec j+\ddot z\,\vec k\qquad\text{(en m/s}^2)$$
- Le vecteur vitesse est **tangent à la trajectoire** et dirigé dans le sens du mouvement.
- Valeur de la vitesse : $v=\sqrt{v_x^2+v_y^2+v_z^2}$.
- Pour retrouver la vitesse à partir de l'accélération, ou la position à partir de la vitesse, on **primitive** et on utilise les **conditions initiales**.

## 📚 3. Mouvements rectilignes
**Rectiligne uniforme** ($a=0$, $v$ constante) : $x(t)=v\,t+x_0$.

**Rectiligne uniformément varié** ($a$ constante) :
$$v(t)=at+v_0,\qquad x(t)=\tfrac12at^2+v_0t+x_0,\qquad v^2-v_0^2=2a(x-x_0)$$
- Le mouvement est **accéléré** si $a$ et $v$ ont le **même signe**, **retardé** (freinage) s'ils sont de signes contraires.

**Rectiligne sinusoïdal** : $x(t)=X_m\cos(\omega t+\varphi)$.
- $v(t)=-X_m\omega\sin(\omega t+\varphi)$ et $a(t)=-\omega^2x(t)$.
- Période $T=\dfrac{2\pi}{\omega}$, fréquence $f=\dfrac1T$, amplitude $X_m$, phase à l'origine $\varphi$.

## 📚 4. Mouvement circulaire uniforme
Un point décrit un cercle de rayon $R$ avec une **vitesse de valeur constante** $v$.
- **Vitesse angulaire** $\omega=\dfrac{d\theta}{dt}$ (en rad/s) et $v=R\,\omega$.
- **Période** $T=\dfrac{2\pi}{\omega}$ ; **fréquence** $f=\dfrac1T$ ; $\omega=2\pi f$.
- L'accélération est **centripète** (dirigée vers le centre) : $a=\dfrac{v^2}{R}=R\omega^2$.
- Conversion : $1\ \text{tr/min}=\dfrac{2\pi}{60}\ \text{rad/s}$.

## 📚 5. Accélération dans la base de Frenet
Pour un mouvement quelconque, on décompose $\vec a=a_t\,\vec\tau+a_n\,\vec n$ :
- $a_t=\dfrac{dv}{dt}$ (composante **tangentielle**, change la valeur de la vitesse) ;
- $a_n=\dfrac{v^2}{\rho}$ (composante **normale**, change la direction) où $\rho$ est le rayon de courbure.
Dans un mouvement circulaire uniforme, $a_t=0$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Démarrage d'une voiture
Une voiture part du repos avec $a=2\ \text{m/s}^2$ pendant 10 s.
$v=at=20\ \text{m/s}=72\ \text{km/h}$ et $x=\tfrac12at^2=\tfrac12\times2\times100=\mathbf{100\ m}$.

### Exemple 2 — Distance de freinage
À $72\ \text{km/h}=20\ \text{m/s}$, un conducteur freine avec $a=-5\ \text{m/s}^2$.
Durée : $v=0\Rightarrow t=\dfrac{20}{5}=4$ s. Distance : $v^2-v_0^2=2ad\Rightarrow d=\dfrac{0-400}{2\times(-5)}=\mathbf{40\ m}$.
*À retenir* : la distance de freinage est proportionnelle à $v_0^2$ (si la vitesse double, elle est multipliée par 4).

### Exemple 3 — Chute libre
On lâche un objet d'une hauteur $h=45$ m sans vitesse initiale.
$h=\tfrac12gt^2\Rightarrow t=\sqrt{\dfrac{2h}g}=\sqrt9=3$ s et $v=gt=\mathbf{30\ m/s}$.

### Exemple 4 — Mouvement circulaire uniforme
Une roue de rayon $R=0{,}5$ m tourne à 120 tr/min.
$f=2$ Hz, $\omega=2\pi f=4\pi\approx12{,}6$ rad/s, $v=R\omega=2\pi\approx6{,}28$ m/s et $a=\dfrac{v^2}R\approx\mathbf{79\ m/s^2}$.

### Exemple 5 — Mouvement sinusoïdal
$x(t)=0{,}05\cos\left(10\pi t+\dfrac\pi3\right)$ (en m).
$T=\dfrac{2\pi}{10\pi}=0{,}2$ s ; $v_{max}=X_m\omega=0{,}05\times10\pi\approx1{,}57$ m/s ; $a_{max}=X_m\omega^2\approx49{,}3\ \text{m/s}^2$.

### Exemple 6 — Rencontre de deux mobiles
Le mobile A part de $x=0$ à $20$ m/s ; le mobile B part au même instant de $x=100$ m à $10$ m/s dans le même sens.
$x_A=20t$ et $x_B=100+10t$. Rencontre : $20t=100+10t\Rightarrow t=10$ s et $x=\mathbf{200\ m}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Un mobile part du repos avec $a=3\ \text{m/s}^2$. Calculer sa vitesse et la distance parcourue après 6 s.

:::corrige
$v=at=18$ m/s et $x=\tfrac12at^2=\tfrac12\times3\times36=\mathbf{54\ m}$.
:::

**Exercice 2.** Une voiture roulant à $90\ \text{km/h}$ s'arrête sur $50$ m. Calculer son accélération et la durée du freinage.

:::corrige
$v_0=25$ m/s. De $v^2-v_0^2=2ad$ : $a=\dfrac{-625}{2\times50}=\mathbf{-6{,}25\ m/s^2}$.
Durée : $t=\dfrac{v_0}{|a|}=\dfrac{25}{6{,}25}=\mathbf4$ s.
:::

**Exercice 3.** Une pierre est lancée verticalement vers le haut à $v_0=20$ m/s. Déterminer la hauteur maximale, la durée de la montée et le temps total avant le retour au sol.

:::corrige
Axe vertical vers le haut, $a=-g$ : $v=v_0-gt$. Au sommet $v=0$ : $t=\dfrac{v_0}g=\mathbf2$ s.
Hauteur : $h=\dfrac{v_0^2}{2g}=\dfrac{400}{20}=\mathbf{20\ m}$.
Le mouvement est symétrique : retour au sol après $\mathbf4$ s.
:::

**Exercice 4.** Un manège a un rayon de $4$ m et fait un tour en $8$ s. Calculer $\omega$, $v$ et l'accélération.

:::corrige
$\omega=\dfrac{2\pi}{T}=\dfrac\pi4\approx0{,}785$ rad/s ; $v=R\omega\approx3{,}14$ m/s ; $a=R\omega^2\approx4\times0{,}617\approx\mathbf{2{,}47\ m/s^2}$.
:::

**Exercice 5.** $x(t)=0{,}04\cos(5\pi t)$ en m. Donner l'amplitude, la période, la fréquence et la vitesse maximale.

:::corrige
Amplitude $X_m=4$ cm ; $\omega=5\pi$ rad/s donc $T=\dfrac{2\pi}{5\pi}=\mathbf{0{,}4}$ s et $f=\mathbf{2{,}5}$ Hz.
$v(t)=-0{,}04\times5\pi\sin(5\pi t)$, donc $v_{max}=0{,}2\pi\approx\mathbf{0{,}63\ m/s}$.
:::

## ⚠️ Pièges classiques du BAC
- Oublier de **convertir** les unités : $\text{km/h}\to\text{m/s}$ (diviser par 3,6) et $\text{tr/min}\to\text{rad/s}$.
- Confondre **vitesse constante** et **accélération nulle** : dans un mouvement circulaire uniforme, $v$ est constante mais $a\ne0$.
- Oublier les **conditions initiales** quand on primitive.
- Se tromper de signe de $a$ lors d'un freinage ou d'une montée verticale.

## ✅ À retenir
- $\vec v=\dfrac{d\overrightarrow{OM}}{dt}$ et $\vec a=\dfrac{d\vec v}{dt}$.
- MRUV : $v=at+v_0$ ; $x=\tfrac12at^2+v_0t+x_0$ ; $v^2-v_0^2=2a\Delta x$.
- MCU : $v=R\omega$ ; $a=\dfrac{v^2}R$ vers le centre.
- Sinusoïdal : $a=-\omega^2x$ ; $T=\dfrac{2\pi}\omega$.
`

DEEP_PC_1["centre-inertie"] = String.raw`## 💡 L'essentiel en une phrase
Pour étudier le mouvement d'un solide, on étudie celui de son **centre d'inertie $G$** avec les **lois de Newton** : la somme des forces extérieures détermine l'accélération de $G$.

## 📚 1. Centre d'inertie et référentiel galiléen
- Le **centre d'inertie** $G$ d'un solide est le point dont le mouvement représente celui du solide entier (pour un solide homogène symétrique, c'est le centre géométrique).
- Un **référentiel galiléen** est un référentiel dans lequel le principe d'inertie s'applique. Le référentiel terrestre est galiléen pour des expériences de courte durée.

## 📚 2. Les trois lois de Newton
1. **Principe d'inertie** : dans un référentiel galiléen, $\sum\vec F_{ext}=\vec0\iff$ le centre d'inertie est **au repos** ou en **mouvement rectiligne uniforme**.
2. **Théorème du centre d'inertie (2e loi)** :
$$\sum\vec F_{ext}=m\,\vec a_G$$
3. **Action-réaction** : si $A$ exerce $\vec F_{A/B}$ sur $B$, alors $B$ exerce $\vec F_{B/A}=-\vec F_{A/B}$ sur $A$.

## 📚 3. Les forces à connaître
- **Poids** $\vec P=m\vec g$ (vertical vers le bas, $P=mg$).
- **Réaction d'un support** $\vec R=\vec R_N+\vec f$ : composante **normale** (perpendiculaire au support) et **frottement** (parallèle, opposé au mouvement).
- **Tension d'un fil** $\vec T$ (le long du fil).
- **Poussée d'Archimède** $\vec\Pi=-\rho_{fluide}Vg$ (verticale vers le haut).
- **Frottement fluide** : $\vec f=-k\vec v$ (faible vitesse).

## 📚 4. Méthode de résolution
1. **Système** étudié et **référentiel**.
2. **Bilan des forces** (schéma).
3. Écrire $\sum\vec F=m\vec a_G$.
4. **Projeter** sur des axes bien choisis (souvent l'axe du mouvement).
5. Résoudre et interpréter.

## 📚 5. Plan incliné
Pour un solide sur un plan incliné d'un angle $\alpha$ avec l'horizontale ($x$ le long de la ligne de plus grande pente, vers le bas) :
- **Sans frottement** : $a=g\sin\alpha$ et $R=mg\cos\alpha$.
- **Avec frottement** $f$ (descente) : $ma=mg\sin\alpha-f$.
- Si les frottements suivent la loi de Coulomb $f=\mu R_N$ avec $R_N=mg\cos\alpha$ : $a=g(\sin\alpha-\mu\cos\alpha)$.

## 📚 6. Chute avec frottement fluide
Pour un solide de masse $m$ dans un fluide, avec $f=kv$ et la poussée négligée : $m\dfrac{dv}{dt}=mg-kv$, soit
$$\frac{dv}{dt}+\frac km\,v=g$$
- **Vitesse limite** : $\dfrac{dv}{dt}=0\Rightarrow v_{lim}=\dfrac{mg}k$.
- **Constante de temps** : $\tau=\dfrac mk$ ; $v(t)=v_{lim}\left(1-e^{-t/\tau}\right)$ si $v(0)=0$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Plan incliné sans frottement
Un solide de $m=2$ kg glisse sur un plan incliné de $\alpha=30^\circ$ sans frottement, parti du repos.
$a=g\sin\alpha=10\times0{,}5=\mathbf{5\ m/s^2}$. Après 4 m : $v=\sqrt{2ad}=\sqrt{40}\approx6{,}3$ m/s.
Réaction : $R=mg\cos\alpha=20\times0{,}866\approx17{,}3$ N.

### Exemple 2 — Plan incliné avec frottement
$m=5$ kg, $\alpha=20^\circ$, force de frottement $f=10$ N.
$ma=mg\sin\alpha-f=50\times0{,}342-10=7{,}1\Rightarrow a\approx\mathbf{1{,}42\ m/s^2}$.

### Exemple 3 — Ascenseur
Une personne de $m=70$ kg est dans un ascenseur. La réaction du plancher (poids apparent) vaut $R=m(g+a)$ où $a$ est l'accélération **vers le haut**.
- Immobile : $R=700$ N.
- Accélération montante $a=+1$ : $R=\mathbf{770}$ N.
- Descente qui s'accélère $a=-1$ : $R=\mathbf{630}$ N.

### Exemple 4 — Câble de grue
Une charge de $200$ kg est soulevée.
- À vitesse constante : $T=mg=\mathbf{2\,000}$ N.
- Avec $a=0{,}5\ \text{m/s}^2$ vers le haut : $T=m(g+a)=\mathbf{2\,100}$ N.

### Exemple 5 — Vitesse limite
Une bille de $m=0{,}02$ kg tombe dans un liquide avec $f=kv$ et $k=0{,}4$ kg/s.
$v_{lim}=\dfrac{mg}k=\dfrac{0{,}2}{0{,}4}=\mathbf{0{,}5\ m/s}$ et $\tau=\dfrac mk=0{,}05$ s. Au bout de $5\tau=0{,}25$ s, la vitesse est pratiquement $v_{lim}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Un skieur descend une piste inclinée de $\alpha=15^\circ$. Le coefficient de frottement est $\mu=0{,}1$. Calculer son accélération.

:::corrige
$a=g(\sin\alpha-\mu\cos\alpha)=10(0{,}2588-0{,}1\times0{,}9659)=10\times0{,}1622\approx\mathbf{1{,}6\ m/s^2}$.
:::

**Exercice 2.** Une voiture de $1\,000$ kg roulant à $72\ \text{km/h}$ s'arrête sur $40$ m. Quelle est la force de freinage moyenne ?

:::corrige
$v_0=20$ m/s : $a=\dfrac{v_0^2}{2d}=\dfrac{400}{80}=5\ \text{m/s}^2$ (décélération).
$F=ma=1000\times5=\mathbf{5\,000}$ N.
:::

**Exercice 3.** Un solide de $10$ kg est maintenu immobile sur un plan incliné de $30^\circ$, sans frottement, par un fil parallèle au plan. Calculer la tension du fil.

:::corrige
À l'équilibre, projection sur l'axe du plan : $T-mg\sin\alpha=0$, donc $T=mg\sin\alpha=100\times0{,}5=\mathbf{50}$ N.
:::

**Exercice 4.** Un parachutiste de $80$ kg atteint une vitesse limite de $5$ m/s avec un frottement $f=kv$. Calculer $k$ et $\tau$.

:::corrige
$k=\dfrac{mg}{v_{lim}}=\dfrac{800}{5}=\mathbf{160\ kg/s}$ et $\tau=\dfrac mk=\dfrac{80}{160}=\mathbf{0{,}5}$ s.
:::

**Exercice 5.** Un ascenseur monte puis ralentit avec $a=-2\ \text{m/s}^2$. Quelle est la lecture d'une balance sur laquelle se tient une personne de $60$ kg ?

:::corrige
$R=m(g+a)=60\times(10-2)=480$ N, soit une masse apparente de $\mathbf{48}$ kg.
:::

## ⚠️ Pièges classiques du BAC
- Oublier un des forces (souvent la **réaction** ou le **frottement**).
- Écrire $\sum F=ma$ avec des **valeurs** au lieu de **projeter** les vecteurs sur un axe.
- Penser que « pas de force » signifie « pas de mouvement » : la 1re loi dit **repos ou MRU**.
- Mal orienter l'axe : le signe de $a$ et des projections dépend du sens choisi.
- Dire que l'action et la réaction se **compensent** : elles s'appliquent sur **deux corps différents**.

## ✅ À retenir
- $\sum\vec F_{ext}=m\vec a_G$ dans un référentiel galiléen.
- Plan incliné sans frottement : $a=g\sin\alpha$.
- Vitesse limite : $v_{lim}=\dfrac{mg}k$ ; $\tau=\dfrac mk$.
- Toujours **faire le bilan des forces, puis projeter**.
`

DEEP_PC_1["champs-uniformes"] = String.raw`## 💡 L'essentiel en une phrase
Dans un **champ uniforme** (de pesanteur ou électrique), la force est **constante**, donc l'accélération aussi : la trajectoire est une **parabole**. On la décrit en projetant la 2e loi de Newton sur deux axes.

## 📚 1. Champ de pesanteur uniforme : le projectile
Un projectile lancé de l'origine avec la vitesse $\vec v_0$ (angle $\alpha$ avec l'horizontale), les frottements négligés, n'est soumis qu'à son poids :
$$\vec a=\vec g\qquad\Rightarrow\qquad a_x=0,\quad a_y=-g$$

### Équations horaires
$$\begin{cases}v_x=v_0\cos\alpha\\ v_y=-gt+v_0\sin\alpha\end{cases}\qquad\begin{cases}x=(v_0\cos\alpha)\,t\\ y=-\tfrac12gt^2+(v_0\sin\alpha)\,t\end{cases}$$

### Équation de la trajectoire
En éliminant $t$ :
$$y=-\frac{g}{2v_0^2\cos^2\alpha}\,x^2+x\tan\alpha$$
C'est une **parabole**.

### Grandeurs caractéristiques
- **Flèche** (altitude maximale), atteinte quand $v_y=0$ : $y_{max}=\dfrac{v_0^2\sin^2\alpha}{2g}$.
- **Durée du vol** (retour à $y=0$) : $t_{vol}=\dfrac{2v_0\sin\alpha}{g}$.
- **Portée** : $x_P=\dfrac{v_0^2\sin2\alpha}{g}$, **maximale** pour $\alpha=45^\circ$ : $x_{P,max}=\dfrac{v_0^2}g$.

### Cas particulier : tir horizontal
Lancé d'une hauteur $h$ avec $\vec v_0$ horizontale : $x=v_0t$ et $y=h-\tfrac12gt^2$. Durée de chute $t=\sqrt{\dfrac{2h}{g}}$ (indépendante de $v_0$) et portée $x=v_0\sqrt{\dfrac{2h}g}$.

## 📚 2. Champ électrique uniforme
Entre deux plaques planes parallèles séparées de $d$, avec la tension $U$ :
$$E=\frac Ud\qquad(\text{en V/m})$$
Une particule de charge $q$ subit la force $\vec F=q\vec E$ (même sens que $\vec E$ si $q>0$, sens contraire si $q<0$). L'accélération est
$$\vec a=\frac qm\vec E$$
Le **poids** est négligeable devant la force électrique pour une particule (électron, proton, ion).

### Accélération dans un champ parallèle à la vitesse
Entre deux plaques de tension $U$, une particule initialement au repos acquiert, d'après le théorème de l'énergie cinétique :
$$\tfrac12mv^2=|q|U\qquad\Rightarrow\qquad v=\sqrt{\frac{2|q|U}m}$$

### Déviation dans un champ perpendiculaire à la vitesse
Une particule entre en $O$ avec $\vec v_0=v_0\vec i$ dans un champ $\vec E=E\vec j$ (plaques de longueur $L$) :
- $x=v_0t$ et $y=\dfrac{qE}{2m}t^2$, donc $y=\dfrac{qE}{2mv_0^2}\,x^2$ : **parabole**.
- À la sortie ($x=L$) : $y_S=\dfrac{qEL^2}{2mv_0^2}=\dfrac{qUL^2}{2mdv_0^2}$.
- Application : **oscilloscope** (déviation du faisceau d'électrons).

## 📚 3. Méthode générale
1. **Système**, référentiel, repère (origine et axes).
2. **Forces** et choix de celles qu'on néglige.
3. $\sum\vec F=m\vec a$ puis **projection** sur les axes.
4. **Intégrations** successives avec les **conditions initiales**.
5. Éliminer $t$ pour la trajectoire.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Tir oblique
$v_0=20$ m/s, $\alpha=30^\circ$ ($\sin\alpha=0{,}5$).
- Flèche : $y_{max}=\dfrac{400\times0{,}25}{20}=\mathbf{5\ m}$.
- Durée du vol : $t_{vol}=\dfrac{2\times20\times0{,}5}{10}=\mathbf2$ s.
- Portée : $x_P=\dfrac{400\times\sin60^\circ}{10}\approx\mathbf{34{,}6\ m}$.

### Exemple 2 — Portée maximale
Pour $v_0=20$ m/s, la portée est maximale avec $\alpha=45^\circ$ : $x_{P,max}=\dfrac{400}{10}=\mathbf{40\ m}$.

### Exemple 3 — Bille qui quitte une table
Une bille quitte une table de hauteur $h=0{,}8$ m avec $v_0=2$ m/s (horizontale).
$t=\sqrt{\dfrac{2\times0{,}8}{10}}=0{,}4$ s ; portée $x=2\times0{,}4=\mathbf{0{,}8\ m}$.

### Exemple 4 — Électron accéléré
Un électron (masse $9{,}1\times10^{-31}$ kg, charge $-1{,}6\times10^{-19}$ C) est accéléré par $U=100$ V :
$v=\sqrt{\dfrac{2\times1{,}6\times10^{-19}\times100}{9{,}1\times10^{-31}}}\approx\mathbf{5{,}9\times10^6\ m/s}$ (environ 2 % de la vitesse de la lumière).

### Exemple 5 — Déviation d'un électron
Plaques de longueur $L=10$ cm, distantes de $d=2$ cm, sous $U=50$ V. L'électron entre à $v_0=2\times10^7$ m/s.
$y_S=\dfrac{eUL^2}{2mdv_0^2}=\dfrac{1{,}6\times10^{-19}\times50\times0{,}01}{2\times9{,}1\times10^{-31}\times0{,}02\times4\times10^{14}}\approx\mathbf{5{,}5\times10^{-3}\ m}$, soit **5,5 mm**.

## ✏️ Exercices d'entraînement
**Exercice 1.** Un projectile est lancé à $v_0=10$ m/s avec $\alpha=60^\circ$. Calculer la durée du vol, la portée et la flèche.

:::corrige
$\sin60^\circ=0{,}866$ ; $\sin120^\circ=0{,}866$ ; $\sin^260^\circ=0{,}75$.
- $t_{vol}=\dfrac{2\times10\times0{,}866}{10}\approx\mathbf{1{,}73}$ s.
- $x_P=\dfrac{100\times0{,}866}{10}\approx\mathbf{8{,}7}$ m.
- $y_{max}=\dfrac{100\times0{,}75}{20}=\mathbf{3{,}75}$ m.
:::

**Exercice 2.** Une bille roule sur une table de hauteur $1{,}25$ m et la quitte à $3$ m/s. Calculer la durée de chute, la portée et la vitesse à l'impact.

:::corrige
$t=\sqrt{\dfrac{2\times1{,}25}{10}}=0{,}5$ s ; portée $=3\times0{,}5=\mathbf{1{,}5}$ m.
À l'impact : $v_x=3$ m/s et $v_y=gt=5$ m/s, donc $v=\sqrt{9+25}=\sqrt{34}\approx\mathbf{5{,}8\ m/s}$.
:::

**Exercice 3.** Un proton (masse $1{,}67\times10^{-27}$ kg, charge $1{,}6\times10^{-19}$ C) est accéléré, partant du repos, par une tension de $2\,000$ V. Calculer sa vitesse finale.

:::corrige
$v=\sqrt{\dfrac{2eU}{m}}=\sqrt{\dfrac{2\times1{,}6\times10^{-19}\times2000}{1{,}67\times10^{-27}}}\approx\mathbf{6{,}2\times10^5\ m/s}$.
:::

**Exercice 4.** Entre deux plaques distantes de $4$ cm règne une tension de $200$ V. Calculer le champ électrique et l'accélération d'un électron.

:::corrige
$E=\dfrac Ud=\dfrac{200}{0{,}04}=\mathbf{5\,000\ V/m}$.
$a=\dfrac{eE}m=\dfrac{1{,}6\times10^{-19}\times5000}{9{,}1\times10^{-31}}\approx\mathbf{8{,}8\times10^{14}\ m/s^2}$ (le poids de l'électron est totalement négligeable).
:::

**Exercice 5.** Déterminer l'équation de la trajectoire et la portée d'un tir à $v_0=20$ m/s avec $\alpha=45^\circ$.

:::corrige
$\cos^2\alpha=0{,}5$ donc $y=-\dfrac{10}{2\times400\times0{,}5}x^2+x\tan45^\circ=-\dfrac{x^2}{40}+x$.
$y=0\iff x=0$ ou $x=40$. Portée : $\mathbf{40}$ m.
:::

## ⚠️ Pièges classiques du BAC
- Oublier de **préciser le repère** (origine, sens des axes) : le signe de $g$ en dépend.
- Confondre $\vec v_0$ et ses **composantes** : $v_{0x}=v_0\cos\alpha$ et $v_{0y}=v_0\sin\alpha$.
- Utiliser $y=h-\dfrac12gt^2$ alors que l'axe $y$ est orienté vers le bas (et inversement).
- Négliger le poids d'une **bille** : il ne se néglige que pour les particules chargées.
- Oublier le **signe de la charge** pour le sens de la déviation.

## ✅ À retenir
- Champ de pesanteur : $a_x=0$, $a_y=-g$ ; trajectoire parabolique.
- $x_P=\dfrac{v_0^2\sin2\alpha}g$ ; $y_{max}=\dfrac{v_0^2\sin^2\alpha}{2g}$.
- $E=\dfrac Ud$ ; $\vec a=\dfrac qm\vec E$ ; $\tfrac12mv^2=|q|U$.
- On procède toujours par : forces $\to$ 2e loi $\to$ projection $\to$ intégration.
`

DEEP_PC_1["oscillations-mecaniques"] = String.raw`## 💡 L'essentiel en une phrase
Un système **écarté de sa position d'équilibre** et soumis à une force de rappel oscille de façon **sinusoïdale** : sa période ne dépend que des caractéristiques du système (masse, raideur, longueur), pas de l'amplitude.

## 📚 1. Oscillateur élastique (ressort horizontal)
Un solide de masse $m$ attaché à un ressort de raideur $k$ glisse sans frottement. Avec $x$ l'écart par rapport à l'équilibre, la force de rappel est $F=-kx$. La 2e loi de Newton donne
$$m\ddot x=-kx\quad\Longleftrightarrow\quad\ddot x+\frac km\,x=0$$
C'est l'équation $\ddot x+\omega_0^2x=0$ avec la **pulsation propre** $\omega_0=\sqrt{\dfrac km}$.

**Solution** : $x(t)=X_m\cos(\omega_0t+\varphi)$ où $X_m$ et $\varphi$ dépendent des **conditions initiales**.
- **Période propre** : $T_0=\dfrac{2\pi}{\omega_0}=2\pi\sqrt{\dfrac mk}$ ; **fréquence** $f_0=\dfrac1{T_0}$.
- Plus la masse est grande, plus la période est grande ; plus le ressort est raide, plus elle est petite.

**Ressort vertical** : à l'équilibre, l'allongement vaut $\Delta\ell_0=\dfrac{mg}k$. Les oscillations autour de cette position ont **la même période** $T_0=2\pi\sqrt{m/k}$.

## 📚 2. Pendule simple
Une masse ponctuelle au bout d'un fil de longueur $\ell$, écartée d'un **petit angle** $\theta$ ($\theta<15^\circ$) : $\sin\theta\approx\theta$ et
$$\ddot\theta+\frac g\ell\,\theta=0\qquad T_0=2\pi\sqrt{\frac\ell g}$$
La période ne dépend **ni de la masse, ni de l'amplitude** (petits angles).

## 📚 3. Pendule de torsion
Un fil de torsion de **constante** $C$ (moment du couple de rappel $\mathcal M=-C\theta$) supporte un solide de moment d'inertie $J_\Delta$ :
$$J_\Delta\ddot\theta+C\theta=0\qquad T_0=2\pi\sqrt{\frac{J_\Delta}C}$$

## 📚 4. Énergie de l'oscillateur élastique
- Énergie cinétique $E_c=\tfrac12mv^2$ ; énergie potentielle élastique $E_p=\tfrac12kx^2$.
- Énergie mécanique : $E_m=E_c+E_p=\tfrac12kX_m^2=\tfrac12mv_{max}^2=\text{constante}$ (sans frottement).
- L'énergie **passe de la forme cinétique à la forme potentielle** et inversement, à la fréquence $2f_0$.
- Vitesse en fonction de la position : $v=\omega_0\sqrt{X_m^2-x^2}$.

## 📚 5. Déterminer $X_m$ et $\varphi$
À $t=0$ : $x(0)=X_m\cos\varphi$ et $v(0)=-X_m\omega_0\sin\varphi$.
- Si on lâche sans vitesse en $x_0>0$ : $\varphi=0$ et $X_m=x_0$.
- Si on lance depuis $x=0$ avec $v_0>0$ : $\varphi=-\dfrac\pi2$ et $X_m=\dfrac{v_0}{\omega_0}$, donc $x=X_m\sin\omega_0t$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Période d'un oscillateur
$m=0{,}2$ kg et $k=20$ N/m : $\omega_0=\sqrt{\dfrac{20}{0{,}2}}=10$ rad/s ; $T_0=\dfrac{2\pi}{10}\approx\mathbf{0{,}63}$ s ; $f_0\approx1{,}6$ Hz.

### Exemple 2 — Loi horaire et énergie
Avec les données de l'exemple 1, on écarte le solide de $x_0=5$ cm et on le lâche sans vitesse.
$x(t)=0{,}05\cos(10t)$ ; $v_{max}=X_m\omega_0=\mathbf{0{,}5\ m/s}$ ; $E_m=\tfrac12\times20\times0{,}05^2=\mathbf{0{,}025\ J}$.

### Exemple 3 — Vitesse en un point
Pour $X_m=0{,}05$ m et $x=0{,}03$ m : $v=10\sqrt{0{,}05^2-0{,}03^2}=10\times0{,}04=\mathbf{0{,}4\ m/s}$.

### Exemple 4 — Pendule simple
$\ell=1$ m : $T_0=2\pi\sqrt{\dfrac1{10}}\approx2{,}0$ s. Un pendule **battant la seconde** ($T_0=2$ s) a pour longueur $\ell=\dfrac{gT_0^2}{4\pi^2}\approx\mathbf{1{,}01\ m}$.

### Exemple 5 — Déterminer la raideur d'un ressort
On mesure $T_0=0{,}4$ s pour $m=0{,}1$ kg : $k=\dfrac{4\pi^2m}{T_0^2}=\dfrac{39{,}5\times0{,}1}{0{,}16}\approx\mathbf{24{,}7\ N/m}$.

### Exemple 6 — Ressort vertical
Pour $m=0{,}2$ kg et $k=20$ N/m, l'allongement à l'équilibre est $\Delta\ell_0=\dfrac{0{,}2\times10}{20}=\mathbf{0{,}1\ m}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** $m=0{,}5$ kg et $k=50$ N/m. Calculer $\omega_0$ et $T_0$. Écrire $x(t)$ si $x(0)=0{,}04$ m et $v(0)=0$.

:::corrige
$\omega_0=\sqrt{\dfrac{50}{0{,}5}}=10$ rad/s ; $T_0=\dfrac{2\pi}{10}\approx\mathbf{0{,}63}$ s.
$v(0)=0\Rightarrow\varphi=0$ et $X_m=0{,}04$ m : $\mathbf{x(t)=0{,}04\cos(10t)}$.
:::

**Exercice 2.** Un oscillateur a $X_m=0{,}1$ m et $k=40$ N/m. Calculer $E_m$, puis $E_p$ et $E_c$ pour $x=0{,}06$ m.

:::corrige
$E_m=\tfrac12\times40\times0{,}01=\mathbf{0{,}2}$ J.
$E_p=\tfrac12\times40\times0{,}0036=\mathbf{0{,}072}$ J et $E_c=E_m-E_p=\mathbf{0{,}128}$ J.
:::

**Exercice 3.** Calculer la période d'un pendule simple de longueur $0{,}5$ m.

:::corrige
$T_0=2\pi\sqrt{\dfrac{0{,}5}{10}}=2\pi\times0{,}2236\approx\mathbf{1{,}4}$ s.
:::

**Exercice 4.** À $t=0$, le solide passe par $x=0$ avec une vitesse positive. Donner la phase $\varphi$ et la forme de $x(t)$.

:::corrige
$x(0)=X_m\cos\varphi=0\Rightarrow\varphi=\pm\dfrac\pi2$ et $v(0)=-X_m\omega_0\sin\varphi>0\Rightarrow\sin\varphi<0$, donc $\varphi=-\dfrac\pi2$.
$x(t)=X_m\cos\left(\omega_0t-\dfrac\pi2\right)=\mathbf{X_m\sin\omega_0t}$.
:::

**Exercice 5.** Un pendule de torsion a une constante $C=0{,}01$ N·m/rad et un moment d'inertie $J=4\times10^{-5}\ \text{kg·m}^2$. Calculer sa période.

:::corrige
$T_0=2\pi\sqrt{\dfrac{J}{C}}=2\pi\sqrt{0{,}004}\approx2\pi\times0{,}0632\approx\mathbf{0{,}40}$ s.
:::

## ⚠️ Pièges classiques du BAC
- Confondre **pulsation** $\omega_0$ (en rad/s) et **fréquence** $f_0$ (en Hz) : $\omega_0=2\pi f_0$.
- Utiliser la formule du pendule simple pour de **grands angles**.
- Croire que la **période dépend de l'amplitude** : ce n'est pas le cas.
- Oublier de convertir $x_0$ de **cm en m** dans l'énergie.
- Inverser $m$ et $k$ dans $T_0=2\pi\sqrt{m/k}$.

## ✅ À retenir
- $\ddot x+\omega_0^2x=0$ ; $x=X_m\cos(\omega_0t+\varphi)$.
- Ressort : $T_0=2\pi\sqrt{m/k}$ ; pendule simple : $T_0=2\pi\sqrt{\ell/g}$ ; torsion : $T_0=2\pi\sqrt{J/C}$.
- $E_m=\tfrac12kX_m^2$ constante ; $v=\omega_0\sqrt{X_m^2-x^2}$.
- $X_m$ et $\varphi$ viennent des **conditions initiales**.
`

DEEP_PC_1["gravitation"] = String.raw`## 💡 L'essentiel en une phrase
Deux masses s'**attirent** avec une force proportionnelle aux masses et inversement proportionnelle au **carré de la distance**. Cette loi explique le **poids**, le mouvement des **planètes** et des **satellites**.

## 📚 1. Loi de gravitation universelle
Deux corps ponctuels (ou à répartition sphérique) de masses $m_A$ et $m_B$, distants de $r$, s'attirent avec des forces de même valeur :
$$F=G\,\frac{m_Am_B}{r^2},\qquad G=6{,}67\times10^{-11}\ \text{N·m}^2\text{·kg}^{-2}$$
Les forces sont **opposées** et dirigées selon la droite qui joint les deux centres.

## 📚 2. Champ de gravitation
Un astre de masse $M$ crée en un point à la distance $r$ de son centre un champ de gravitation
$$g(r)=\frac{GM}{r^2}$$
dirigé **vers le centre de l'astre**.
- À la surface de la Terre : $g_0=\dfrac{GM_T}{R_T^2}\approx9{,}8\ \text{m/s}^2$.
- À l'altitude $h$ : $g(h)=g_0\dfrac{R_T^2}{(R_T+h)^2}$.
- **Données utiles** : $M_T=5{,}97\times10^{24}$ kg, $R_T=6\,370$ km, donc $GM_T\approx3{,}98\times10^{14}\ \text{m}^3\text{/s}^2$.

## 📚 3. Mouvement d'un satellite en orbite circulaire
Un satellite de masse $m$ en orbite circulaire de rayon $r=R_T+h$ autour de la Terre, dans un référentiel géocentrique (supposé galiléen), est soumis à la seule force de gravitation.

La 2e loi donne $m\,a=\dfrac{GM_Tm}{r^2}$, avec $a=\dfrac{v^2}r$ :
- **Mouvement circulaire uniforme** (la force est toujours perpendiculaire à la vitesse).
- **Vitesse** : $v=\sqrt{\dfrac{GM_T}{r}}$ (indépendante de la masse du satellite).
- **Période** : $T=\dfrac{2\pi r}v=2\pi\sqrt{\dfrac{r^3}{GM_T}}$.
- Plus le satellite est haut, plus il est **lent** et plus sa période est **longue**.

## 📚 4. Lois de Kepler
1. Les planètes décrivent des **ellipses** dont le Soleil occupe un des foyers.
2. Le rayon vecteur balaie des **aires égales** pendant des durées égales (loi des aires).
3. $\dfrac{T^2}{a^3}=\text{constante}=\dfrac{4\pi^2}{GM}$ (où $a$ est le demi-grand axe ; $a=r$ pour un cercle).
La 3e loi permet de **déterminer la masse de l'astre attracteur** : $M=\dfrac{4\pi^2r^3}{GT^2}$.

## 📚 5. Satellite géostationnaire
Il paraît **immobile** dans le ciel d'un observateur terrestre. Il faut :
- une orbite **circulaire dans le plan équatorial** ;
- le **même sens** de rotation que la Terre ;
- une **période égale à celle de la Terre** : $T=86\,164$ s (jour sidéral).
Le rayon de l'orbite vaut $r=\left(\dfrac{GM_TT^2}{4\pi^2}\right)^{1/3}\approx4{,}22\times10^7$ m, soit une altitude $h\approx3{,}6\times10^4$ km.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Attraction Terre-homme
Pour $m=70$ kg à la surface : $F=\dfrac{GM_Tm}{R_T^2}=\dfrac{3{,}98\times10^{14}\times70}{(6{,}37\times10^6)^2}\approx\mathbf{687\ N}$, ce qui est le **poids** de la personne ($70\times9{,}8$).

### Exemple 2 — Champ à l'altitude de la station spatiale
$h=400$ km donc $r=6\,770$ km : $g=\dfrac{3{,}98\times10^{14}}{(6{,}77\times10^6)^2}\approx\mathbf{8{,}7\ m/s^2}$.
La pesanteur n'est donc qu'**11 % plus faible** : les astronautes sont en **chute libre permanente**, d'où l'impesanteur.

### Exemple 3 — Vitesse et période de la station
$v=\sqrt{\dfrac{3{,}98\times10^{14}}{6{,}77\times10^6}}\approx\mathbf{7\,670\ m/s}$ ($\approx27\,600$ km/h) et $T=\dfrac{2\pi\times6{,}77\times10^6}{7\,670}\approx5\,550$ s $\approx\mathbf{92{,}5}$ min.

### Exemple 4 — Satellite géostationnaire
$r^3=\dfrac{3{,}98\times10^{14}\times(86\,164)^2}{4\pi^2}\approx7{,}5\times10^{22}$ donc $r\approx4{,}22\times10^7$ m et $h\approx\mathbf{3{,}58\times10^7\ m}$.
Vitesse : $v=\dfrac{2\pi r}{T}\approx\mathbf{3\,075\ m/s}$.

### Exemple 5 — Masse de la Terre à partir de la Lune
La Lune tourne en $T=27{,}3$ j $=2{,}36\times10^6$ s à $r=3{,}84\times10^8$ m :
$M=\dfrac{4\pi^2r^3}{GT^2}=\dfrac{39{,}5\times5{,}66\times10^{25}}{6{,}67\times10^{-11}\times5{,}57\times10^{12}}\approx\mathbf{6{,}0\times10^{24}\ kg}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Calculer $g$ à la surface de Mars ($M=6{,}42\times10^{23}$ kg ; $R=3{,}39\times10^6$ m).

:::corrige
$g=\dfrac{GM}{R^2}=\dfrac{6{,}67\times10^{-11}\times6{,}42\times10^{23}}{(3{,}39\times10^6)^2}=\dfrac{4{,}28\times10^{13}}{1{,}149\times10^{13}}\approx\mathbf{3{,}7\ m/s^2}$.
:::

**Exercice 2.** Un satellite évolue à $h=800$ km. Calculer sa vitesse et sa période.

:::corrige
$r=7\,170$ km. $v=\sqrt{\dfrac{3{,}98\times10^{14}}{7{,}17\times10^6}}\approx\mathbf{7\,450\ m/s}$.
$T=\dfrac{2\pi\times7{,}17\times10^6}{7\,450}\approx6\,050$ s $\approx\mathbf{101}$ min.
:::

**Exercice 3.** Pourquoi un satellite géostationnaire ne peut-il pas survoler la Côte d'Ivoire sans être sur l'équateur ?

:::corrige
Il doit rester **à la verticale d'un point fixe** de la Terre. Son orbite est un cercle dont le centre est le centre de la Terre : le plan de l'orbite passe donc par ce centre. Seul un point de l'**équateur** reste en permanence dans ce plan quand la Terre tourne. Un satellite géostationnaire est donc nécessairement dans le plan équatorial (il se trouve au-dessus de l'équateur, pas au-dessus d'Abidjan, mais il est « visible » de Côte d'Ivoire car il est assez haut).
:::

**Exercice 4.** La Terre tourne autour du Soleil à $r=1{,}5\times10^{11}$ m en $T=3{,}156\times10^7$ s. Calculer la masse du Soleil.

:::corrige
$M_S=\dfrac{4\pi^2r^3}{GT^2}=\dfrac{39{,}5\times3{,}375\times10^{33}}{6{,}67\times10^{-11}\times9{,}96\times10^{14}}\approx\mathbf{2{,}0\times10^{30}\ kg}$.
:::

## ⚠️ Pièges classiques du BAC
- Utiliser $r=h$ au lieu de $r=R_T+h$ : $r$ est la distance **au centre** de l'astre.
- Mélanger **km et m** : la loi demande des mètres.
- Penser que la vitesse d'un satellite **dépend de sa masse** : elle n'en dépend pas.
- Oublier de justifier que le mouvement est **circulaire uniforme** (force centripète $\perp\vec v$).
- Croire que les astronautes n'ont « pas de gravité » : ils sont en **chute libre**.

## ✅ À retenir
- $F=G\dfrac{m_Am_B}{r^2}$ ; $g=\dfrac{GM}{r^2}$.
- Orbite circulaire : $v=\sqrt{\dfrac{GM}r}$ ; $T=2\pi\sqrt{\dfrac{r^3}{GM}}$.
- 3e loi de Kepler : $\dfrac{T^2}{r^3}=\dfrac{4\pi^2}{GM}$.
- Géostationnaire : plan équatorial, $T=86\,164$ s, $h\approx36\,000$ km.
`
