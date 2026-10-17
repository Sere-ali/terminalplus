// Résumés Physique-Chimie (suite) : oscillations, électromagnétisme, électricité.

export const EXTRA2: Record<string, string> = {}

EXTRA2["oscillations-mecaniques"] = String.raw`## 💡 L'essentiel en une phrase
Un **oscillateur mécanique** (ressort, pendule) est un système qui **va et vient** autour d'une position d'équilibre ; sans frottement, son énergie mécanique se **conserve**.

## 📚 1. Pendule élastique horizontal (sans frottement)
Un solide de masse $m$ fixé à un ressort de raideur $k$ ; $x$ est l'écart par rapport à l'équilibre.
- Forces : poids, réaction (se compensent) et **force de rappel** $F=-kx$.
- TCI : $m\ddot x=-kx$ donc l'**équation différentielle** est
$$\ddot x+\frac kmx=0\quad\Longleftrightarrow\quad\ddot x+\omega_0^2\,x=0$$
- **Solution** : $x(t)=X_m\cos(\omega_0t+\varphi)$ (mouvement **sinusoïdal**).

## 🔢 2. Grandeurs caractéristiques
- **Pulsation propre** : $\omega_0=\sqrt{\dfrac km}$ (rad/s).
- **Période propre** : $T_0=\dfrac{2\pi}{\omega_0}=2\pi\sqrt{\dfrac mk}$ ; **fréquence propre** $N_0=\dfrac1{T_0}$ (Hz).
- **Amplitude** $X_m$ et **phase à l'origine** $\varphi$ : déterminées par les **conditions initiales** ($x(0)$ et $v(0)$).
- Vitesse : $v(t)=-X_m\omega_0\sin(\omega_0t+\varphi)$.
La période ne dépend **pas de l'amplitude**.

## ⚡ 3. Énergie
- $E_c=\tfrac12mv^2$ et $E_p=\tfrac12kx^2$.
- $E_m=E_c+E_p=\tfrac12kX_m^2$ : **constante** (conservation de l'énergie mécanique).
- Avec frottements, l'amplitude **décroît** : l'oscillateur est amorti.

## ✅ Exemple corrigé
$m=0{,}2\ \text{kg}$, $k=20\ \text{N/m}$. Lâché sans vitesse depuis $x_0=+4\ \text{cm}$.
- $\omega_0=\sqrt{20/0{,}2}=10\ \text{rad/s}$ ; $T_0=0{,}63\ \text{s}$.
- $X_m=4\ \text{cm}$ et $\varphi=0$ : $x(t)=0{,}04\cos(10t)$ (en m).
- $E_m=\tfrac12\times20\times0{,}04^2=1{,}6\times10^{-2}\ \text{J}$.

## ⚠️ Pièges fréquents
- Oublier de convertir $\text{cm}\to\text{m}$.
- Confondre pulsation $\omega_0$ (rad/s) et fréquence $N_0$ (Hz).
- Écrire $\ddot x=+\omega_0^2x$ (mauvais signe).

## 🏆 À retenir pour le BAC
Établis l'équation différentielle avec le TCI, donne $\omega_0$, $T_0$, écris $x(t)$ avec les conditions initiales et montre que $E_m$ est constante.`

EXTRA2["champ-magnetique"] = String.raw`## 💡 L'essentiel en une phrase
Un **champ magnétique** $\vec B$ est créé par un **aimant** ou un **courant** ; il oriente une aiguille aimantée et se mesure en **tesla (T)**.

## 📚 1. Vecteur champ magnétique
En un point, $\vec B$ est caractérisé par sa **direction** (celle de l'aiguille aimantée), son **sens** (du pôle sud vers le pôle nord de l'aiguille) et sa **valeur** (en tesla, mesurée au teslamètre).
- **Ligne de champ** : courbe tangente en chaque point à $\vec B$ ; à l'extérieur d'un aimant, elle va du **nord vers le sud**.
- **Spectre magnétique** : ensemble des lignes de champ (visible avec de la limaille de fer).
- Champ **uniforme** : lignes parallèles et équidistantes (cas entre les branches d'un aimant en U).

## 🌀 2. Solénoïde parcouru par un courant
Un **solénoïde** est un long fil enroulé en spires régulières ($N$ spires, longueur $\ell$).
- À l'intérieur, le champ est **uniforme**, dirigé selon l'axe, et son **sens dépend de celui du courant** (règle de la **main droite**, du **bonhomme d'Ampère** ou du **tire-bouchon**).
$$B=\mu_0\,n\,I\qquad\text{avec } n=\frac N\ell,\quad\mu_0=4\pi\times10^{-7}\ \text{SI}$$
- $B$ est proportionnel à $I$ ($B=kI$) et à $n$.
- Le **bout du solénoïde** par lequel sortent les lignes est la **face nord**.

## 🌍 3. Champ magnétique terrestre
Il a une composante **horizontale** $B_H$ (environ $2\times10^{-5}\ \text{T}$, orienté vers le nord magnétique) et une composante **verticale** $B_V$. L'**inclinaison** $I$ vérifie $\tan I=\dfrac{B_V}{B_H}$.

## ✅ Exemple corrigé
Solénoïde de $\ell=50\ \text{cm}$ avec $N=1000$ spires et $I=2\ \text{A}$.
$n=\dfrac{1000}{0{,}5}=2000\ \text{spires/m}$ donc $B=4\pi\times10^{-7}\times2000\times2\approx5\times10^{-3}\ \text{T}$ ($5\ \text{mT}$).

## ⚠️ Pièges fréquents
- Utiliser $n=N$ au lieu de $N/\ell$ (et $\ell$ en **mètres**).
- Se tromper de sens : refais toujours la règle de la main droite.

## 🏆 À retenir pour le BAC
Retiens $B=\mu_0nI$, la règle d'orientation et les caractéristiques du vecteur $\vec B$ (direction, sens, valeur).`

EXTRA2["particule-champ-magnetique"] = String.raw`## 💡 L'essentiel en une phrase
Un champ magnétique **dévie** une particule chargée en mouvement par la **force de Lorentz** ; si $\vec v\perp\vec B$, la trajectoire est un **cercle**.

## 📚 1. Force de Lorentz
$$\vec F=q\,\vec v\wedge\vec B\qquad F=|q|\,v\,B\,\sin\alpha$$
- Direction : **perpendiculaire** à $\vec v$ **et** à $\vec B$ ; sens : règle des **trois doigts** de la main droite (attention au signe de $q$).
- Elle **ne travaille pas** : la **valeur de la vitesse reste constante** (seule la direction change).

## ⭕ 2. Mouvement dans un champ uniforme ($\vec v\perp\vec B$)
Le mouvement est **circulaire uniforme**, de rayon et de période :
$$R=\frac{mv}{|q|B}\qquad T=\frac{2\pi m}{|q|B}$$
Si $\vec v$ n'est pas perpendiculaire à $\vec B$, la trajectoire est une **hélice**.
**Déflexion magnétique** : pour des plaques de longueur $\ell$, l'angle de déviation vérifie $\sin\alpha\approx\dfrac{\ell}{R}$ (petits angles).

## 🔧 3. Applications
- **Spectromètre de masse** : accélération $\tfrac12mv^2=|q|U$, puis demi-cercle de rayon $R=\dfrac1B\sqrt{\dfrac{2mU}{|q|}}$. Il **sépare des isotopes** (même charge, masses différentes $\Rightarrow$ rayons différents).
- **Cyclotron** : la particule tourne entre deux « dees » ; la fréquence $f=\dfrac{|q|B}{2\pi m}$ est **indépendante de la vitesse**. À la sortie : $E_c=\dfrac{q^2B^2R^2}{2m}$.
- **Filtre de Wien (de vitesses)** : champs $\vec E$ et $\vec B$ croisés. La particule n'est pas déviée si $|q|E=|q|vB$, soit $v=\dfrac EB$.

## ✅ Exemple corrigé
Un proton ($m=1{,}67\times10^{-27}\ \text{kg}$, $q=1{,}6\times10^{-19}\ \text{C}$) entre perpendiculairement dans $B=0{,}5\ \text{T}$ avec $v=2\times10^6\ \text{m/s}$.
$R=\dfrac{1{,}67\times10^{-27}\times2\times10^6}{1{,}6\times10^{-19}\times0{,}5}\approx4{,}2\times10^{-2}\ \text{m}$ soit $4{,}2\ \text{cm}$.

## ⚠️ Pièges fréquents
- Oublier que la force est **perpendiculaire** à la vitesse : elle ne change pas $v$.
- Se tromper de sens pour une charge **négative**.

## 🏆 À retenir pour le BAC
Utilise $R=\dfrac{mv}{|q|B}$, retiens le rôle du spectromètre, du cyclotron et du filtre de Wien.`

EXTRA2["loi-laplace"] = String.raw`## 💡 L'essentiel en une phrase
Un fil parcouru par un courant et **plongé dans un champ magnétique** subit une force : la **force de Laplace**.

## 📚 1. Loi de Laplace
Sur une portion de conducteur de longueur $L$ parcourue par $I$ dans un champ uniforme $\vec B$ :
$$\vec F=I\,\vec L\wedge\vec B\qquad F=I\,L\,B\sin\alpha$$
où $\vec L$ est orienté dans le **sens du courant** et $\alpha=(\vec L,\vec B)$.
- **Direction** : perpendiculaire au conducteur et à $\vec B$ ; **sens** : règle des trois doigts de la main droite (ou main droite : pouce = $\vec F$).
- Point d'application : **milieu** de la portion plongée dans le champ.
- $F$ est **maximale** si $\vec L\perp\vec B$ ($F=ILB$).
- Inverser le courant ou le champ **inverse** le sens de la force.

## 🔧 2. Applications
- **Rails de Laplace** : la tige est mise en mouvement par la force.
- **Balance de Cotton** : permet de mesurer un champ $B$ en équilibrant la force de Laplace par le poids : $B=\dfrac{mg\,d}{I\,L\,\ell}$ (selon le montage de l'énoncé).
- **Roue de Barlow** : disque conducteur qui tourne (principe du **moteur électrique**).
- **Haut-parleur** : une bobine mobile, parcourue par le courant audio et placée dans le champ d'un aimant, subit une force de Laplace variable qui fait vibrer la membrane.

## ✅ Exemple corrigé
Un conducteur de $L=10\ \text{cm}$ parcouru par $I=5\ \text{A}$, perpendiculaire à $B=0{,}2\ \text{T}$ :
$F=5\times0{,}10\times0{,}2=0{,}1\ \text{N}$.

## ⚠️ Pièges fréquents
- Oublier de convertir $L$ en mètres.
- Prendre $\sin\alpha=1$ alors que le fil n'est pas perpendiculaire à $\vec B$.

## 🏆 À retenir pour le BAC
$F=ILB\sin\alpha$, ses **trois caractéristiques** et l'explication du fonctionnement d'un moteur ou d'un haut-parleur.`

EXTRA2["auto-induction"] = String.raw`## 💡 L'essentiel en une phrase
Une **bobine** s'oppose aux **variations** du courant qui la traverse : c'est l'**auto-induction**. Elle explique le retard à l'allumage d'une lampe et les étincelles à la coupure.

## 📚 1. Flux propre et inductance
- **Flux propre** : $\Phi_p=L\,i$ où $L$ est l'**inductance** de la bobine, en **henry (H)**.
- **Solénoïde** de $N$ spires, section $S$, longueur $\ell$ : $\;L=\dfrac{\mu_0N^2S}{\ell}$.

## ⚡ 2. Loi de l'auto-induction
- **f.é.m. d'auto-induction** : $e=-\dfrac{d\Phi_p}{dt}=-L\dfrac{di}{dt}$.
- **Tension aux bornes** d'une bobine (résistance interne $r$) : $\;u=L\dfrac{di}{dt}+r\,i$. Pour une bobine **idéale** ($r=0$) : $u=L\dfrac{di}{dt}$.
- **Loi de Lenz** : l'effet induit s'oppose à la cause qui lui donne naissance ; le courant **ne peut pas varier de manière brusque** dans une bobine.
- **Énergie magnétique** emmagasinée : $\;E=\tfrac12\,L\,i^2$.

## ✅ Exemple corrigé
Bobine idéale $L=0{,}5\ \text{H}$ traversée par un courant qui passe de $0$ à $2\ \text{A}$ en $0{,}1\ \text{s}$ (variation linéaire).
- $\dfrac{di}{dt}=20\ \text{A/s}$ donc $|u|=0{,}5\times20=10\ \text{V}$.
- Énergie finale : $E=\tfrac12\times0{,}5\times2^2=1\ \text{J}$.

## ⚠️ Pièges fréquents
- Oublier le **signe moins** de la f.é.m. (convention générateur).
- Oublier que $i$ est **continu** dans une bobine alors que $u$ peut sauter.
- Oublier $r\,i$ pour une bobine réelle.

## 🏆 À retenir pour le BAC
$u=L\frac{di}{dt}+ri$, $E=\tfrac12Li^2$, et l'interprétation avec la loi de Lenz.`

EXTRA2["circuit-lc"] = String.raw`## 💡 L'essentiel en une phrase
Un condensateur chargé relié à une bobine donne des **oscillations électriques** : l'énergie passe **sans cesse** du condensateur à la bobine.

## 📚 1. Équation différentielle du circuit LC
Pour une bobine idéale ($r=0$) et un condensateur de capacité $C$ ($q$ = charge de l'armature) :
$$u_C+L\frac{di}{dt}=0\quad\text{avec}\ i=\frac{dq}{dt},\ u_C=\frac qC\ \Longrightarrow\ \ddot q+\frac1{LC}\,q=0$$
- **Solution** : $q(t)=Q_m\cos(\omega_0t+\varphi)$.
- **Pulsation propre** $\omega_0=\dfrac1{\sqrt{LC}}$ ; **période propre** $T_0=2\pi\sqrt{LC}$ ; $N_0=\dfrac1{T_0}$.
- Intensité : $i=\dfrac{dq}{dt}=-Q_m\omega_0\sin(\omega_0t+\varphi)$.

## ⚡ 3. Énergie
$$E=\underbrace{\frac{q^2}{2C}}_{\text{condensateur}}+\underbrace{\frac12Li^2}_{\text{bobine}}=\frac{Q_m^2}{2C}=\text{constante}$$

## 🔁 4. Analogie avec l'oscillateur mécanique
| Mécanique | Électrique |
|---|---|
| $x$ | $q$ |
| $v=\dot x$ | $i=\dot q$ |
| $m$ | $L$ |
| $k$ | $\dfrac1C$ |
| $E_p=\tfrac12kx^2$ | $\dfrac{q^2}{2C}$ |
| $E_c=\tfrac12mv^2$ | $\tfrac12Li^2$ |

## 🔧 5. Amortissement et entretien
La **résistance** (de la bobine et du circuit) **dissipe l'énergie par effet Joule** : les oscillations sont **amorties**. Pour les **entretenir**, on ajoute un montage à **résistance négative** (amplificateur opérationnel) qui compense les pertes.

## ✅ Exemple corrigé
$L=0{,}1\ \text{H}$ et $C=10\ \mu\text{F}$ : $\omega_0=\dfrac1{\sqrt{0{,}1\times10^{-5}}}=1\,000\ \text{rad/s}$, $T_0=2\pi\sqrt{10^{-6}}\approx6{,}3\ \text{ms}$, $N_0\approx159\ \text{Hz}$.

## ⚠️ Pièges fréquents
- Oublier de convertir $\mu\text{F}\to\text{F}$ ($1\ \mu\text{F}=10^{-6}\ \text{F}$).
- Confondre la charge $q$ et la tension $u_C$.

## 🏆 À retenir pour le BAC
Établis $\ddot q+\dfrac q{LC}=0$, donne $T_0=2\pi\sqrt{LC}$, montre la conservation de l'énergie, cite l'analogie.`

EXTRA2["circuit-rlc"] = String.raw`## 💡 L'essentiel en une phrase
Un circuit **RLC série** alimenté par un générateur sinusoïdal (GBF) est traversé par un courant sinusoïdal de **même fréquence**, avec un **déphasage** et une **impédance** qui dépendent de $R$, $L$, $C$ et de la fréquence.

## 📚 1. Grandeurs sinusoïdales
- $u(t)=U_m\cos(\omega t+\varphi_u)$ et $i(t)=I_m\cos(\omega t+\varphi_i)$ avec $\omega=2\pi N=\dfrac{2\pi}T$.
- **Valeurs efficaces** : $U=\dfrac{U_m}{\sqrt2}$ et $I=\dfrac{I_m}{\sqrt2}$ (ce que mesure un multimètre).
- **Déphasage** de $u$ par rapport à $i$ : $\varphi=\varphi_u-\varphi_i$.

## 🔢 2. Impédance et phase
$$U=Z\,I\qquad Z=\sqrt{R^2+\left(L\omega-\frac1{C\omega}\right)^2}\ (\Omega)$$
$$\tan\varphi=\frac{L\omega-\frac1{C\omega}}{R}\qquad\cos\varphi=\frac RZ$$
- $L\omega>\dfrac1{C\omega}$ : circuit **inductif** ($\varphi>0$, $u$ en avance sur $i$).
- $L\omega<\dfrac1{C\omega}$ : circuit **capacitif** ($\varphi<0$).

## 📐 3. Construction de Fresnel
On représente chaque tension par un vecteur de longueur $U$ (ou $U_m$) :
- $\vec U_R$ (même direction que $\vec I$), $\vec U_L$ (en **avance de $\tfrac\pi2$**), $\vec U_C$ (en **retard de $\tfrac\pi2$**).
- $\vec U=\vec U_R+\vec U_L+\vec U_C$ ; le théorème de Pythagore donne $U^2=U_R^2+(U_L-U_C)^2$, d'où l'impédance.
On lit $\varphi$ comme l'angle entre $\vec U$ et $\vec I$.

## ✅ Exemple corrigé
$R=100\ \Omega$, $L=0{,}5\ \text{H}$, $C=20\ \mu\text{F}$, $N=50\ \text{Hz}$ ($\omega\approx314\ \text{rad/s}$), $U=10\ \text{V}$.
- $L\omega=157\ \Omega$ et $\dfrac1{C\omega}=\dfrac1{20\times10^{-6}\times314}\approx159\ \Omega$.
- $Z=\sqrt{100^2+(157-159)^2}\approx100\ \Omega$ ; $I=\dfrac{10}{100}=0{,}1\ \text{A}$ ; $\varphi\approx0$ : on est **près de la résonance**.

## ⚠️ Pièges fréquents
- Oublier $\omega=2\pi N$.
- Mélanger valeurs **maximales** et **efficaces**.
- Se tromper de signe du déphasage.

## 🏆 À retenir pour le BAC
$Z$, $\tan\varphi$, $U=ZI$ et savoir **construire le diagramme de Fresnel**.`

EXTRA2["resonance"] = String.raw`## 💡 L'essentiel en une phrase
À une fréquence particulière (**résonance d'intensité**), l'intensité efficace dans un circuit RLC série est **maximale** : c'est le principe de l'accord d'un poste de radio.

## 📚 1. Conditions de résonance
La résonance a lieu quand la fréquence imposée $N$ est égale à la **fréquence propre** :
$$N=N_0=\frac1{2\pi\sqrt{LC}}\iff L\omega_0=\frac1{C\omega_0}$$
À la résonance :
- $Z=R$ (**impédance minimale**) ;
- $I=I_0=\dfrac UR$ (**intensité maximale**) ;
- $\varphi=0$ : $u$ et $i$ sont **en phase** ; le circuit se comporte comme une **résistance pure**.

## 📈 2. Courbe de résonance $I=f(N)$
- Plus $R$ est **faible**, plus la courbe est **haute et étroite** (résonance **aiguë**).
- **Bande passante** $\Delta N$ : largeur de l'intervalle où $I\ge\dfrac{I_0}{\sqrt2}$ (à $-3\ \text{dB}$).
- **Facteur de qualité** : 
$$Q=\frac{L\omega_0}{R}=\frac1{RC\omega_0}=\frac{N_0}{\Delta N}$$
$Q$ grand $\Rightarrow$ circuit **sélectif**.

## ⚡ 3. Surtension
À la résonance : $U_L=U_C=Q\,U$. Si $Q>1$, les tensions aux bornes de la bobine et du condensateur dépassent celle du générateur : c'est la **surtension** (attention aux composants !).

## 🔧 4. Applications
- **Électronique** : accord des récepteurs radio (on règle $C$ pour avoir $N_0$ = fréquence de la station, ex. 102,3 MHz sur la bande FM).
- **Mécanique** : balançoire, ponts, verres qui se brisent sous un son.
- **Acoustique** : caisse de résonance d'une guitare, d'un balafon.

## ✅ Exemple corrigé
$L=50\ \text{mH}$, $C=0{,}5\ \mu\text{F}$, $R=25\ \Omega$, $U=2\ \text{V}$.
- $N_0=\dfrac1{2\pi\sqrt{0{,}05\times0{,}5\times10^{-6}}}\approx1\,007\ \text{Hz}$.
- $I_0=\dfrac2{25}=0{,}08\ \text{A}$.
- $Q=\dfrac{L\omega_0}R=\dfrac{0{,}05\times6\,325}{25}\approx12{,}6$ et $\Delta N=\dfrac{N_0}Q\approx80\ \text{Hz}$.

## ⚠️ Pièges fréquents
- Penser que la résonance dépend de $R$ pour la fréquence (elle n'en dépend pas ; seule la hauteur change).
- Oublier que $\varphi=0$ à la résonance.

## 🏆 À retenir pour le BAC
$N_0$, $I_0=U/R$, $Q=L\omega_0/R=N_0/\Delta N$ et le phénomène de surtension.`

EXTRA2["puissance-sinusoidal"] = String.raw`## 💡 L'essentiel en une phrase
En courant alternatif, la **puissance** réellement consommée dépend du **déphasage** entre la tension et l'intensité ; le **facteur de puissance** $\cos\varphi$ mesure cette efficacité.

## 📚 1. Puissances
- **Puissance instantanée** : $p(t)=u(t)\,i(t)$.
- **Puissance moyenne** (active) consommée par un dipôle :
$$P=U\,I\cos\varphi\quad\text{(en watts)}$$
- Dans un **résistor** $R$ : $P=RI^2=\dfrac{U^2}R$ (toute la puissance est dissipée par effet Joule).
- Dans une **bobine idéale** ou un **condensateur** : $P=0$ (ils échangent de l'énergie mais n'en consomment pas).
- Dans un **dipôle RLC série** : $P=RI^2=UI\cos\varphi$ (seule la résistance consomme).
- **Énergie** échangée pendant $\Delta t$ : $W=P\,\Delta t$.

## 🎚️ 2. Facteur de puissance
$k=\cos\varphi=\dfrac RZ=\dfrac P{UI}$. À la résonance, $\cos\varphi=1$ : **puissance maximale** pour un courant donné. Dans une installation, un $\cos\varphi$ **faible** impose un courant plus grand pour la même puissance : on cherche à le **relever** (en général $\cos\varphi\ge0{,}9$).

## 🏭 3. Transport de l'énergie électrique
Pour transporter la puissance $P$ sous la tension $U$ : $I=\dfrac P{U\cos\varphi}$. Les **pertes en ligne** par effet Joule valent $r\,I^2$ ($r$ = résistance de la ligne). **Élever la tension** (transformateur élévateur, haute tension) **diminue $I$** donc **réduit fortement les pertes** ; un transformateur abaisseur ramène ensuite la tension à l'usage domestique.

## ✅ Exemple corrigé
Moteur : $U=220\ \text{V}$, $I=10\ \text{A}$, $\cos\varphi=0{,}8$.
- $P=220\times10\times0{,}8=1\,760\ \text{W}$.
- Pour la même puissance avec $\cos\varphi=1$ : $I'=\dfrac{1\,760}{220}=8\ \text{A}$ (moins de pertes).
- Ligne de $r=2\ \Omega$ : pertes $2\times10^2=200\ \text{W}$ contre $2\times8^2=128\ \text{W}$.

## ⚠️ Pièges fréquents
- Oublier $\cos\varphi$ dans $P$.
- Utiliser des valeurs **maximales** au lieu des **efficaces**.

## 🏆 À retenir pour le BAC
$P=UI\cos\varphi=RI^2$ et l'**intérêt de la haute tension** pour le transport.`
