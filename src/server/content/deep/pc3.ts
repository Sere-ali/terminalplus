// Leçons approfondies – Physique-Chimie : circuits électriques (3/4)

export const DEEP_PC_3: Record<string, string> = {}

DEEP_PC_3["derivateur-integrateur"] = String.raw`## 💡 L'essentiel en une phrase
Un circuit **RC** peut **dériver** ou **intégrer** un signal selon ce que l'on observe : la tension aux bornes du condensateur est (approximativement) l'**intégrale** de l'entrée, celle aux bornes du résistor en est la **dérivée**.

## 📚 1. Rappels sur le condensateur
- Charge : $q=Cu_C$ ; intensité : $i=\dfrac{dq}{dt}=C\dfrac{du_C}{dt}$.
- Énergie : $E=\tfrac12Cu_C^2$.
- Résistor : $u_R=Ri$.
- **Constante de temps** du circuit RC : $\tau=RC$.

## 📚 2. Charge et décharge d'un condensateur (échelon)
**Charge** sous l'échelon $E$ : $u_C(t)=E\left(1-e^{-t/\tau}\right)$, $i(t)=\dfrac ER e^{-t/\tau}$.
**Décharge** : $u_C(t)=E\,e^{-t/\tau}$.
- À $t=\tau$ : $u_C=0{,}63E$ (charge) ou $0{,}37E$ (décharge). Régime permanent après $\approx5\tau$.
- $u_C$ est **continue** ; $i$ peut présenter une discontinuité.

## 📚 3. Circuit intégrateur
On applique une tension $u_e(t)$ à l'ensemble $R$-$C$ en série et on observe $u_C$ comme sortie $u_s$.
- Équation : $u_e=Ri+u_C=RC\dfrac{du_C}{dt}+u_C$.
- Si **$RC\gg T$** (période du signal), $u_C\ll u_e$, donc $u_e\approx RC\dfrac{du_C}{dt}$, soit
$$u_s(t)\approx\frac1{RC}\int u_e(t)\,dt$$
- Avec un **signal carré** en entrée, la sortie est une **tension triangulaire**.

## 📚 4. Circuit dérivateur
On observe maintenant $u_R$ comme sortie.
- Si **$RC\ll T$**, $u_C\approx u_e$ et $u_s=Ri=RC\dfrac{du_C}{dt}\approx RC\dfrac{du_e}{dt}$ :
$$u_s(t)\approx RC\frac{du_e}{dt}$$
- Avec un **signal triangulaire** en entrée, la sortie est une tension **carrée** ; avec un signal carré, on obtient des **impulsions** brèves à chaque front.

## 📚 5. Pourquoi ces conditions ?
| Fonction | Sortie | Condition |
|---|---|---|
| Intégrateur | aux bornes de $C$ | $\tau=RC\gg T$ |
| Dérivateur | aux bornes de $R$ | $\tau=RC\ll T$ |
Un bon montage utilise $\tau$ au moins **10 fois** plus grand (intégrateur) ou plus petit (dérivateur) que $T$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Constante de temps
$R=10\ \text{k}\Omega$ et $C=100\ \text{nF}$ : $\tau=10^4\times10^{-7}=\mathbf{1\ ms}$.

### Exemple 2 — Durée de charge
Pour atteindre 95 % de $E$ : $1-e^{-t/\tau}=0{,}95\Rightarrow t=\tau\ln20\approx\mathbf{3\tau=3\ ms}$.

### Exemple 3 — Choix du montage
Un signal de $f=1$ kHz ($T=1$ ms) est appliqué à $R=100\ \text{k}\Omega$, $C=1\ \mu\text{F}$ : $\tau=0{,}1$ s $\gg T$ : on peut **intégrer** en prenant $u_C$.

### Exemple 4 — Pente de la sortie d'un intégrateur
Entrée constante $+5$ V pendant une demi-période de 0,5 ms, avec $RC=5$ ms : $\dfrac{du_s}{dt}=\dfrac{u_e}{RC}=1000\ \text{V/s}$, donc $u_s$ monte de $\mathbf{0{,}5\ V}$ pendant 0,5 ms (pente rectiligne : triangle).

### Exemple 5 — Dérivateur
Entrée triangulaire de pente $+2000$ V/s, avec $RC=10\ \mu$s : $u_s=RC\dfrac{du_e}{dt}=10^{-5}\times2000=\mathbf{0{,}02\ V}$ (créneaux de 20 mV).

## ✏️ Exercices d'entraînement
**Exercice 1.** Un condensateur de 2 $\mu$F est chargé à travers 5 kΩ sous 12 V. Calculer $\tau$ et la tension à $t=10$ ms.

:::corrige
$\tau=5000\times2\times10^{-6}=\mathbf{10\ ms}$. À $t=\tau$ : $u_C=12(1-e^{-1})\approx\mathbf{7{,}6\ V}$.
:::

**Exercice 2.** Un condensateur de 100 $\mu$F chargé sous 6 V se décharge dans un résistor de 20 kΩ. Quelle est l'énergie initiale et la tension après 4 s ?

:::corrige
$E=\tfrac12\times10^{-4}\times36=\mathbf{1{,}8\times10^{-3}\ J}$.
$\tau=20\,000\times10^{-4}=2$ s ; $u_C(4)=6e^{-2}\approx\mathbf{0{,}81\ V}$.
:::

**Exercice 3.** On veut intégrer un signal de fréquence 5 kHz avec $C=47$ nF. Proposer $R$.

:::corrige
$T=0{,}2$ ms ; il faut $RC\ge10T=2$ ms, donc $R\ge\dfrac{2\times10^{-3}}{47\times10^{-9}}\approx42\ \text{k}\Omega$. On peut prendre $R=47\ \text{k}\Omega$.
:::

**Exercice 4.** Justifier qu'un circuit RC avec $RC\ll T$ dérive le signal aux bornes de $R$.

:::corrige
Si $RC\ll T$, le condensateur se charge presque instantanément et $u_C\approx u_e$. Alors $u_R=Ri=RC\dfrac{du_C}{dt}\approx RC\dfrac{du_e}{dt}$.
:::

## ⚠️ Pièges classiques du BAC
- Prendre la sortie **aux mauvaises bornes** (C pour intégrer, R pour dériver).
- Oublier la **condition** sur $RC$ par rapport à $T$.
- Oublier de convertir µF, nF, kΩ.
- Dire que $u_C$ peut varier brusquement : il est toujours **continu**.

## ✅ À retenir
- $\tau=RC$ ; charge $u_C=E(1-e^{-t/\tau})$.
- Intégrateur : sortie sur $C$, $RC\gg T$ ; dérivateur : sortie sur $R$, $RC\ll T$.
- Carré $\to$ intégrateur $\to$ triangle ; triangle $\to$ dérivateur $\to$ carré.
`

DEEP_PC_3["circuit-lc"] = String.raw`## 💡 L'essentiel en une phrase
Un condensateur chargé relié à une bobine **sans résistance** forme un circuit **LC** qui oscille indéfiniment : l'énergie passe sans cesse de l'électrique au magnétique.

## 📚 1. Équation différentielle
Un condensateur $C$ chargé, de charge initiale $q_0=CE$, est relié à une bobine idéale $L$. Loi des mailles : $u_C+L\dfrac{di}{dt}=0$, avec $i=\dfrac{dq}{dt}$ (selon convention de signe) :
$$\ddot q+\frac1{LC}\,q=0\qquad\text{soit}\qquad\ddot q+\omega_0^2q=0$$
$$\omega_0=\frac1{\sqrt{LC}},\qquad T_0=2\pi\sqrt{LC},\qquad f_0=\frac1{2\pi\sqrt{LC}}$$

## 📚 2. Solution
$q(t)=Q_m\cos(\omega_0t+\varphi)$ ; $u_C=\dfrac qC$ ; $i=\dfrac{dq}{dt}=-Q_m\omega_0\sin(\omega_0t+\varphi)$.
- Si le condensateur est chargé à $t=0$ sous $E$, sans courant : $q=CE\cos\omega_0t$, $\varphi=0$, $Q_m=CE$.
- $I_m=\omega_0Q_m$.
- **Analogie mécanique** : $q\leftrightarrow x$ ; $i\leftrightarrow v$ ; $L\leftrightarrow m$ ; $\dfrac1C\leftrightarrow k$. La formule $T_0=2\pi\sqrt{LC}$ correspond à $T_0=2\pi\sqrt{m/k}$.

## 📚 3. Énergie
- Énergie électrique : $E_e=\dfrac{q^2}{2C}$ ; énergie magnétique : $E_m=\tfrac12Li^2$.
- Énergie totale **constante** : $E=\dfrac{Q_m^2}{2C}=\tfrac12LI_m^2$.
- Quand $E_e$ est maximale ($i=0$), $E_m=0$ et inversement ; l'énergie oscille à la fréquence $2f_0$.
- Relation utile : $i^2=\omega_0^2\left(Q_m^2-q^2\right)$ ou $I_m=\dfrac{Q_m}{\sqrt{LC}}$.

## 📚 4. Cas réel
Une bobine réelle a une résistance : l'énergie est dissipée par effet Joule et les oscillations sont **amorties** (voir circuit RLC).

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Période
$L=0{,}1$ H et $C=10\ \mu$F : $\omega_0=\dfrac1{\sqrt{10^{-6}}}=1000$ rad/s ; $T_0=\dfrac{2\pi}{1000}=\mathbf{6{,}28\ ms}$ ; $f_0\approx159$ Hz.

### Exemple 2 — Charge et intensité maximales
$C=10\ \mu$F chargé sous $E=20$ V : $Q_m=CE=\mathbf{2\times10^{-4}\ C}$ ; $I_m=\omega_0Q_m=1000\times2\times10^{-4}=\mathbf{0{,}2\ A}$.

### Exemple 3 — Énergie
$E=\dfrac{Q_m^2}{2C}=\dfrac{4\times10^{-8}}{2\times10^{-5}}=\mathbf{2\times10^{-3}\ J}$ ; vérifie $\tfrac12LI_m^2=\tfrac12\times0{,}1\times0{,}04=2\times10^{-3}$ ✔.

### Exemple 4 — Intensité pour une charge donnée
Quand $q=1\times10^{-4}$ C : $i=\omega_0\sqrt{Q_m^2-q^2}=1000\sqrt{4\times10^{-8}-10^{-8}}=1000\times1{,}73\times10^{-4}\approx\mathbf{0{,}173\ A}$.

### Exemple 5 — Radio
Pour accorder un poste sur 100 kHz avec $L=0{,}2$ mH : $C=\dfrac{1}{4\pi^2f_0^2L}=\dfrac{1}{39{,}5\times10^{10}\times2\times10^{-4}}\approx\mathbf{12{,}7\ nF}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Calculer la fréquence propre d'un circuit LC avec $L=50$ mH et $C=2\ \mu$F.

:::corrige
$f_0=\dfrac{1}{2\pi\sqrt{0{,}05\times2\times10^{-6}}}=\dfrac{1}{2\pi\times3{,}16\times10^{-4}}\approx\mathbf{503\ Hz}$.
:::

**Exercice 2.** Établir l'équation différentielle de la charge dans un circuit LC et donner $\omega_0$.

:::corrige
Maille : $u_C+u_L=0\Rightarrow\dfrac qC+L\dfrac{di}{dt}=0$. Comme $i=\dfrac{dq}{dt}$ : $\ddot q+\dfrac{1}{LC}q=0$, d'où $\omega_0=\dfrac1{\sqrt{LC}}$.
:::

**Exercice 3.** Un condensateur de 5 $\mu$F chargé sous 10 V est relié à une bobine de 0,02 H. Calculer $I_m$.

:::corrige
$Q_m=5\times10^{-5}$ C ; $\omega_0=\dfrac1{\sqrt{0{,}02\times5\times10^{-6}}}=\dfrac1{3{,}16\times10^{-4}}\approx3162$ rad/s ; $I_m=\omega_0Q_m\approx\mathbf{0{,}158\ A}$.
:::

**Exercice 4.** À quel instant l'énergie est-elle entièrement magnétique pour la première fois ?

:::corrige
Quand $q=0$ : $\cos\omega_0t=0\Rightarrow\omega_0t=\dfrac\pi2$, soit $t=\dfrac{T_0}{4}$.
:::

## ⚠️ Pièges classiques du BAC
- Confondre $T_0=2\pi\sqrt{LC}$ avec $2\pi LC$ (oubli de la racine).
- Oublier les **puissances de 10** (µF, mH).
- Oublier que l'énergie totale est constante **seulement** sans résistance.
- Utiliser $u_C$ au lieu de $q$ dans $E_e$ sans diviser/multiplier par $C$.

## ✅ À retenir
- $\ddot q+\dfrac{q}{LC}=0$ ; $T_0=2\pi\sqrt{LC}$.
- $E=\dfrac{Q_m^2}{2C}=\tfrac12LI_m^2$ constante.
- Analogie avec le ressort : $L\leftrightarrow m$, $1/C\leftrightarrow k$.
`

DEEP_PC_3["circuit-rlc"] = String.raw`## 💡 L'essentiel en une phrase
Dans un circuit **RLC série**, la résistance dissipe l'énergie : les oscillations sont **amorties** (régimes pseudo-périodique, critique ou apériodique). Si un générateur compense les pertes, elles sont **entretenues**.

## 📚 1. Équation différentielle
Un condensateur chargé est relié à $R$, $L$ en série :
$$L\ddot q+R\dot q+\frac qC=0\quad\Longleftrightarrow\quad\ddot q+\frac RL\dot q+\frac{1}{LC}q=0$$
- Le terme $R\dot q$ est l'**amortissement** (frottement).
- Analogie mécanique : frottement fluide $\to$ $R\leftrightarrow k$ (coefficient de frottement).

## 📚 2. Régimes libres
Selon la valeur de $R$, trois régimes :
1. **Pseudo-périodique** ($R$ petite) : oscillations d'amplitude décroissante, de **pseudo-période** $T\gtrsim T_0=2\pi\sqrt{LC}$ ; $T\approx T_0$ si $R$ est faible.
2. **Critique** : retour le plus rapide à zéro **sans oscillation**, $R_c=2\sqrt{L/C}$.
3. **Apériodique** ($R>R_c$) : retour lent à zéro, sans oscillation.

## 📚 3. Énergie
$$\frac{dE}{dt}=-Ri^2<0,\qquad E=\frac{q^2}{2C}+\tfrac12Li^2$$
L'énergie diminue : elle est convertie en **chaleur** (effet Joule) dans la résistance. La perte entre deux instants est $\Delta E=-R\int i^2dt$.

## 📚 4. Oscillations entretenues
On ajoute un dispositif (amplificateur) qui fournit une tension $u=+R_0i$ proportionnelle à $i$, de sorte que la tension résiduelle compense les pertes. Si $R_0=R$, l'équation devient celle d'un circuit LC : oscillations **sinusoïdales non amorties** de période $T_0=2\pi\sqrt{LC}$.

## 📚 5. Lecture d'un enregistrement
- La pseudo-période se lit sur la courbe $u_C(t)$ comme l'intervalle entre deux maxima successifs de même signe.
- Décrément logarithmique : $\ln\dfrac{u_n}{u_{n+1}}$ est constant.
- La durée de vie des oscillations est d'autant plus courte que $R$ est grande.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Résistance critique
$L=0{,}1$ H et $C=10\ \mu$F : $R_c=2\sqrt{\dfrac{0{,}1}{10^{-5}}}=2\times100=\mathbf{200\ \Omega}$. Pour $R=50\ \Omega$ on a un régime pseudo-périodique ; pour $R=500\ \Omega$, apériodique.

### Exemple 2 — Pertes d'énergie
Au départ $E_0=\tfrac12CE^2=\tfrac12\times10^{-5}\times100=5\times10^{-4}$ J ($E=10$ V). Après plusieurs oscillations, $u_C$ maximale n'est plus que 5 V : $E=\tfrac12\times10^{-5}\times25=1{,}25\times10^{-4}$ J. Énergie dissipée : $\mathbf{3{,}75\times10^{-4}\ J}$ (75 %).

### Exemple 3 — Pseudo-période
Pour $L=0{,}1$ H, $C=10\ \mu$F : $T_0=6{,}28$ ms. Avec $R=20\ \Omega$ très faible devant $R_c$, la pseudo-période mesurée est $T\approx6{,}3$ ms.

### Exemple 4 — Entretien
Pour un circuit de résistance totale $R=30\ \Omega$, un montage d'entretien doit fournir une tension $u=30\,i$ : la tension aux bornes de la résistance est compensée.

## ✏️ Exercices d'entraînement
**Exercice 1.** Quel régime obtient-on avec $L=0{,}5$ H, $C=2\ \mu$F, $R=1\ \text{k}\Omega$ ?

:::corrige
$R_c=2\sqrt{\dfrac{0{,}5}{2\times10^{-6}}}=2\times500=1000\ \Omega$. On a donc $R=R_c$ : régime **critique**.
:::

**Exercice 2.** Écrire l'équation différentielle en $u_C$ du circuit RLC série.

:::corrige
Avec $i=C\dfrac{du_C}{dt}$ : $LC\ddot u_C+RC\dot u_C+u_C=0$.
:::

**Exercice 3.** Calculer l'énergie dissipée entre $t=0$ ($u_C=8$ V) et un instant où $u_C=2$ V et $i=0$, avec $C=4\ \mu$F.

:::corrige
$E_0=\tfrac12\times4\times10^{-6}\times64=1{,}28\times10^{-4}$ J ; $E_1=\tfrac12\times4\times10^{-6}\times4=8\times10^{-6}$ J. Dissipée : $\mathbf{1{,}2\times10^{-4}\ J}$.
:::

**Exercice 4.** Pourquoi la pseudo-période est-elle voisine de $T_0$ quand $R$ est faible ?

:::corrige
L'effet de l'amortissement sur la fréquence est un terme du second ordre en $R$ : si $R\ll R_c$, la pseudo-période est quasiment égale à la période propre $T_0=2\pi\sqrt{LC}$.
:::

## ⚠️ Pièges classiques du BAC
- Dire que l'énergie se « perd » : elle est **transformée en chaleur**.
- Confondre pseudo-période et période propre.
- Confondre régime critique et apériodique (le critique est le plus rapide).
- Oublier la résistance **interne de la bobine** dans $R$.

## ✅ À retenir
- $\ddot q+\dfrac RL\dot q+\dfrac{q}{LC}=0$ ; $R_c=2\sqrt{L/C}$.
- Trois régimes : pseudo-périodique, critique, apériodique.
- $\dfrac{dE}{dt}=-Ri^2$ ; entretien : on compense $Ri$.
`

DEEP_PC_3["resonance"] = String.raw`## 💡 L'essentiel en une phrase
Un circuit **RLC série** alimenté par un générateur sinusoïdal oscille à la fréquence du générateur ; l'intensité est **maximale** quand cette fréquence est égale à la fréquence propre $f_0$ : c'est la **résonance d'intensité**.

## 📚 1. Régime sinusoïdal forcé
Le générateur impose $u(t)=U_m\cos(\omega t)$ ; le circuit (R, L, C série) répond par $i(t)=I_m\cos(\omega t+\varphi)$ de **même fréquence**.
- Valeurs efficaces : $U=\dfrac{U_m}{\sqrt2}$ et $I=\dfrac{I_m}{\sqrt2}$.
- $\varphi$ est le **déphasage de $i$ par rapport à $u$**.

## 📚 2. Impédance
$$Z=\frac UI=\sqrt{R^2+\left(L\omega-\frac1{C\omega}\right)^2}$$
$$\tan\varphi_{u/i}=\frac{L\omega-\frac{1}{C\omega}}{R}$$
- Si $L\omega>\dfrac1{C\omega}$ : circuit **inductif** ($u$ en avance sur $i$).
- Si $L\omega<\dfrac1{C\omega}$ : circuit **capacitif** ($u$ en retard sur $i$).

## 📚 3. Résonance d'intensité
$I=\dfrac UZ$ est maximale quand $Z$ est minimale, c'est-à-dire pour
$$L\omega_0=\frac1{C\omega_0}\ \Longleftrightarrow\ \omega_0=\frac1{\sqrt{LC}},\qquad f_0=\frac1{2\pi\sqrt{LC}}$$
À la résonance :
- $Z=R$ et $I_0=\dfrac UR$ (maximum) ;
- $u$ et $i$ sont **en phase** ($\varphi=0$) : le circuit se comporte comme un résistor ;
- $U_C=U_L=\dfrac{I_0}{C\omega_0}=L\omega_0I_0$ : **surtension** possible.

## 📚 4. Facteur de qualité et bande passante
- **Facteur de qualité** : $Q=\dfrac{L\omega_0}{R}=\dfrac1{RC\omega_0}=\dfrac{U_C}{U}$ (à la résonance).
- **Bande passante à $-3$ dB** : $\Delta f=f_2-f_1=\dfrac{R}{2\pi L}=\dfrac{f_0}{Q}$, où l'intensité vaut $\dfrac{I_0}{\sqrt2}$.
- Plus $R$ est faible, plus la résonance est **aiguë** (Q grand, $\Delta f$ petit).

## 📚 5. Applications
Récepteur radio : en réglant $C$ pour faire coïncider $f_0$ avec la fréquence de la station, on **sélectionne** une émission parmi toutes celles captées par l'antenne.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Impédance
$R=50\ \Omega$, $L=0{,}2$ H, $C=5\ \mu$F à $f=100$ Hz ($\omega=628$ rad/s) :
$L\omega=125{,}7\ \Omega$ ; $\dfrac1{C\omega}=\dfrac{1}{5\times10^{-6}\times628}\approx318{,}3\ \Omega$ ; $Z=\sqrt{2500+(125{,}7-318{,}3)^2}\approx\mathbf{199{,}0\ \Omega}$ (capacitif).

### Exemple 2 — Fréquence de résonance
$f_0=\dfrac{1}{2\pi\sqrt{0{,}2\times5\times10^{-6}}}=\dfrac{1}{2\pi\times10^{-3}}\approx\mathbf{159\ Hz}$.

### Exemple 3 — Intensité à la résonance
Pour $U=10$ V : $I_0=\dfrac{10}{50}=\mathbf{0{,}2\ A}$ ; $U_C=\dfrac{I_0}{C\omega_0}=\dfrac{0{,}2}{5\times10^{-6}\times1000}=\mathbf{40\ V}$ (surtension de 4 fois $U$).

### Exemple 4 — Facteur de qualité et bande passante
$\omega_0=1000$ rad/s : $Q=\dfrac{L\omega_0}{R}=\dfrac{200}{50}=\mathbf4$ ; $\Delta f=\dfrac{f_0}{Q}=\dfrac{159}{4}\approx\mathbf{40\ Hz}$.

### Exemple 5 — Accord radio
Pour capter une station à $f_0=1\ \text{MHz}$ avec $L=100\ \mu$H : $C=\dfrac{1}{4\pi^2f_0^2L}\approx\mathbf{253\ pF}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Un circuit a $R=20\ \Omega$, $L=0{,}1$ H, $C=1\ \mu$F. Calculer $f_0$, $Q$ et la bande passante.

:::corrige
$\omega_0=\dfrac{1}{\sqrt{10^{-7}}}=3162$ rad/s ; $f_0\approx\mathbf{503\ Hz}$ ; $Q=\dfrac{0{,}1\times3162}{20}\approx\mathbf{15{,}8}$ ; $\Delta f=\dfrac{503}{15{,}8}\approx\mathbf{31{,}8\ Hz}$.
:::

**Exercice 2.** À la résonance, $U=6$ V, $R=30\ \Omega$. Calculer $I$, la puissance moyenne consommée.

:::corrige
$I=\dfrac{6}{30}=\mathbf{0{,}2\ A}$ ; $P=RI^2=30\times0{,}04=\mathbf{1{,}2\ W}$ (=$UI$ car $\cos\varphi=1$).
:::

**Exercice 3.** Quelle est la nature du circuit à $f>f_0$ ?

:::corrige
Pour $f>f_0$, $L\omega>\dfrac{1}{C\omega}$ : le circuit est **inductif** ; la tension est en avance sur l'intensité.
:::

**Exercice 4.** Un circuit a $L=50$ mH et on veut $f_0=1$ kHz. Calculer $C$.

:::corrige
$C=\dfrac{1}{4\pi^2f_0^2L}=\dfrac{1}{39{,}48\times10^6\times0{,}05}\approx\mathbf{5{,}07\times10^{-7}\ F}$ soit 0,51 µF.
:::

## ⚠️ Pièges classiques du BAC
- Confondre **résonance** (excitation à $f_0$) et **oscillations libres**.
- Oublier que la résonance dépend de $L$ et $C$, **pas de $R$** (mais $R$ fixe le maximum).
- Confondre $Q$ élevé avec large bande : c'est l'inverse.
- Mélanger valeurs **efficaces** et **maximales**.

## ✅ À retenir
- $Z=\sqrt{R^2+(L\omega-\frac1{C\omega})^2}$.
- Résonance : $f_0=\dfrac{1}{2\pi\sqrt{LC}}$, $Z=R$, $\varphi=0$, $I=\dfrac UR$.
- $Q=\dfrac{L\omega_0}{R}$ ; $\Delta f=\dfrac{f_0}Q$.
`

DEEP_PC_3["puissance-sinusoidal"] = String.raw`## 💡 L'essentiel en une phrase
En régime sinusoïdal, la **puissance moyenne** reçue par un dipôle est $P=UI\cos\varphi$ : seul le résistor consomme réellement de l'énergie ; le facteur de puissance $\cos\varphi$ mesure l'efficacité du transfert.

## 📚 1. Puissance instantanée
$p(t)=u(t)\,i(t)$. Avec $u=U\sqrt2\cos\omega t$ et $i=I\sqrt2\cos(\omega t+\varphi)$ :
$$p(t)=UI\cos\varphi+UI\cos(2\omega t+\varphi)$$
- Elle comprend une partie **constante** $UI\cos\varphi$ et une partie fluctuante à la fréquence $2f$ (de valeur moyenne nulle).

## 📚 2. Puissance moyenne (active)
$$P=U\,I\cos\varphi\qquad(\text{watt, W})$$
où $U$, $I$ sont les valeurs **efficaces** et $\varphi$ le déphasage entre $u$ et $i$.
- **Facteur de puissance** : $\cos\varphi$.
- **Puissance apparente** : $S=UI$ (en volt-ampère, VA) ; **puissance réactive** : $Q=UI\sin\varphi$ (en var).
- Pour un résistor ($\varphi=0$) : $P=RI^2=\dfrac{U^2}{R}$. Pour une bobine idéale ou un condensateur ($\varphi=\pm\dfrac\pi2$) : $P=0$.
- Dans un circuit RLC série : $P=RI^2$ (toute la puissance est consommée par $R$), et $\cos\varphi=\dfrac RZ$.

## 📚 3. Énergie consommée
$W=P\,\Delta t$, exprimée en joule ou en **kilowattheure** ($1\ \text{kWh}=3{,}6\times10^6$ J).

## 📚 4. Intérêt d'un bon facteur de puissance
Pour une même puissance utile $P$ à fournir sous la tension $U$, l'intensité en ligne est $I=\dfrac{P}{U\cos\varphi}$.
- Si $\cos\varphi$ est faible, $I$ est grande, d'où des **pertes par effet Joule** $r_{ligne}I^2$ plus élevées dans les lignes.
- Les distributeurs imposent donc $\cos\varphi\ge0{,}9$ environ.
- On **relève le facteur de puissance** en plaçant un **condensateur en dérivation** aux bornes de l'installation inductive (moteurs).

## 📚 5. Condensateur de relèvement
Pour passer de $\cos\varphi_1$ à $\cos\varphi_2$ avec une puissance $P$ et une tension $U$ à la pulsation $\omega$ :
$$C=\frac{P\,(\tan\varphi_1-\tan\varphi_2)}{\omega\,U^2}$$

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Puissance d'un moteur
$U=220$ V, $I=5$ A, $\cos\varphi=0{,}8$ : $P=220\times5\times0{,}8=\mathbf{880\ W}$ ; $S=1\,100$ VA.

### Exemple 2 — Circuit RLC
$R=40\ \Omega$, $Z=50\ \Omega$, $U=100$ V : $I=2$ A ; $\cos\varphi=\dfrac{40}{50}=0{,}8$ ; $P=RI^2=40\times4=\mathbf{160\ W}=UI\cos\varphi=100\times2\times0{,}8$ ✔.

### Exemple 3 — Pertes en ligne
Il faut fournir $P=11$ kW sous 220 V.
Avec $\cos\varphi=1$ : $I=50$ A ; avec $\cos\varphi=0{,}5$ : $I=100$ A. Pour une ligne de $r=0{,}2\ \Omega$ : pertes $=500$ W contre $\mathbf{2\,000}$ W (4 fois plus).

### Exemple 4 — Relèvement
$P=2$ kW, $U=220$ V, $f=50$ Hz ($\omega=314$ rad/s), $\cos\varphi_1=0{,}6$ ($\tan\varphi_1=1{,}333$) et on veut $\cos\varphi_2=0{,}95$ ($\tan\varphi_2=0{,}329$) :
$C=\dfrac{2000\times(1{,}333-0{,}329)}{314\times220^2}=\dfrac{2008}{1{,}52\times10^7}\approx\mathbf{132\ \mu F}$.

### Exemple 5 — Consommation
Un radiateur de 1 500 W fonctionne 4 h : $W=1{,}5\times4=\mathbf{6\ kWh}$ ; à 100 F le kWh, le coût est de 600 F.

## ✏️ Exercices d'entraînement
**Exercice 1.** Un dipôle sous 230 V absorbe 4 A avec $\cos\varphi=0{,}7$. Calculer $P$ et $S$.

:::corrige
$P=230\times4\times0{,}7=\mathbf{644\ W}$ ; $S=230\times4=\mathbf{920\ VA}$.
:::

**Exercice 2.** Un circuit RLC série ($R=30\ \Omega$) est parcouru par $I=1{,}5$ A. Quelle est la puissance moyenne ?

:::corrige
$P=RI^2=30\times2{,}25=\mathbf{67{,}5\ W}$.
:::

**Exercice 3.** Pourquoi une bobine idéale ne consomme-t-elle aucune puissance moyenne ?

:::corrige
Pour une bobine idéale, le déphasage est $\varphi=\dfrac\pi2$ donc $\cos\varphi=0$ et $P=0$ : elle emmagasine de l'énergie puis la restitue.
:::

**Exercice 4.** Une installation de 5 kW sous 220 V a un $\cos\varphi$ de 0,5. Calculer $I$ puis $I$ après relèvement à $\cos\varphi=1$.

:::corrige
$I_1=\dfrac{5000}{220\times0{,}5}\approx\mathbf{45{,}5\ A}$ ; $I_2=\dfrac{5000}{220}\approx\mathbf{22{,}7\ A}$ (la moitié, donc 4 fois moins de pertes Joule).
:::

## ⚠️ Pièges classiques du BAC
- Utiliser des valeurs **maximales** au lieu des **efficaces** dans $P=UI\cos\varphi$.
- Oublier $\cos\varphi$ et écrire $P=UI$.
- Confondre watt (W) et volt-ampère (VA).
- Placer le condensateur de relèvement **en série** (il se place en **dérivation**).

## ✅ À retenir
- $P=UI\cos\varphi=RI^2$ ; $S=UI$.
- Un bon $\cos\varphi$ réduit l'intensité et les pertes en ligne.
- $1\ \text{kWh}=3{,}6\times10^6$ J.
`
