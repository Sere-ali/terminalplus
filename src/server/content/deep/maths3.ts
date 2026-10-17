// Leçons approfondies – Mathématiques Tle C et D (3/3)

export const DEEP_MATHS_3: Record<string, string> = {}

DEEP_MATHS_3["equations-differentielles"] = String.raw`## 💡 L'essentiel en une phrase
Une **équation différentielle** relie une fonction $y$ à ses dérivées. Elle décrit comment un phénomène **évolue dans le temps** (refroidissement, décharge d'un condensateur, désintégration, oscillations) et sa solution est une **fonction**.

## 📚 1. Équation $y'=ay$
Pour $a$ réel, les solutions sur $\mathbb{R}$ sont les fonctions
$$y(x)=Ce^{ax},\qquad C\in\mathbb{R}$$
Avec une **condition initiale** $y(x_0)=y_0$, il y a **une seule** solution : on détermine $C$ avec cette condition.

## 📚 2. Équation $y'=ay+b$ ($a\ne0$)
- Une **solution constante** existe : $y=-\dfrac ba$ (c'est l'état d'équilibre).
- Toutes les solutions s'écrivent
$$y(x)=Ce^{ax}-\frac ba$$
- On trouve $C$ avec la condition initiale. On rencontre souvent la forme $y'+\dfrac1\tau y=\dfrac{E}{\tau}$, avec $\tau$ = **constante de temps**.

## 📚 3. Équation $y''+\omega^2y=0$ ($\omega>0$)
Les solutions sont les fonctions
$$y(x)=A\cos\omega x+B\sin\omega x$$
ou, de façon équivalente, $y(x)=K\cos(\omega x+\varphi)$ (oscillation sinusoïdale d'amplitude $K$ et de **période** $T=\dfrac{2\pi}{\omega}$).
Il y a deux constantes : il faut **deux conditions initiales** ($y(0)$ et $y'(0)$).

## 📚 4. Pour aller plus loin : $y''+py'+qy=0$
On résout l'**équation caractéristique** $r^2+pr+q=0$ :
- $\Delta>0$ (racines $r_1,r_2$) : $y=Ae^{r_1x}+Be^{r_2x}$.
- $\Delta=0$ (racine double $r$) : $y=(Ax+B)e^{rx}$.
- $\Delta<0$ (racines $\alpha\pm i\beta$) : $y=e^{\alpha x}(A\cos\beta x+B\sin\beta x)$.

## 📚 5. Méthode générale
1. Reconnaître le **type** d'équation.
2. Écrire la **forme générale** des solutions.
3. Utiliser les **conditions initiales** pour trouver les constantes.
4. **Vérifier** en dérivant.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — $y'=2y$
Solutions : $y=Ce^{2x}$. Avec $y(0)=3$ : $C=3$, donc $y=\mathbf{3e^{2x}}$.

### Exemple 2 — $y'=-3y+6$
Solution constante : $-\dfrac ba=-\dfrac{6}{-3}=2$. Solutions : $y=Ce^{-3x}+2$.
Avec $y(0)=5$ : $C+2=5$, donc $C=3$ et $y=\mathbf{3e^{-3x}+2}$.
*Vérification* : $y'=-9e^{-3x}$ et $-3y+6=-9e^{-3x}-6+6$ ✓.

### Exemple 3 — $y''+4y=0$
$\omega=2$ : $y=A\cos2x+B\sin2x$. Avec $y(0)=1$ et $y'(0)=2$ :
$y(0)=A=1$ ; $y'(x)=-2A\sin2x+2B\cos2x$ donc $y'(0)=2B=2$ et $B=1$.
$y=\cos2x+\sin2x=\sqrt2\cos\left(2x-\dfrac\pi4\right)$, de période $\pi$.

### Exemple 4 — Équation caractéristique
$y''-3y'+2y=0$ : $r^2-3r+2=0$ donne $r=1$ ou $r=2$, donc $y=Ae^x+Be^{2x}$.

### Exemple 5 — Loi de refroidissement (Newton)
Un café à $90\,^\circ\text{C}$ est dans une pièce à $20\,^\circ\text{C}$. La température vérifie $\theta'=-k(\theta-20)$ avec $k=0{,}1\ \text{min}^{-1}$, soit $\theta'=-0{,}1\theta+2$.
Solutions : $\theta(t)=Ce^{-0{,}1t}+20$ ; $\theta(0)=90$ donne $C=70$.
$$\theta(t)=20+70e^{-0{,}1t}$$
Temps pour atteindre $40\,^\circ\text{C}$ : $20+70e^{-0{,}1t}=40\iff e^{-0{,}1t}=\dfrac27\iff t=10\ln\dfrac72\approx12{,}5$ minutes.

## ✏️ Exercices d'entraînement
**Exercice 1.** Résoudre $y'=5y$ avec $y(0)=2$.

:::corrige
$y=Ce^{5x}$ et $y(0)=C=2$. Donc $\mathbf{y=2e^{5x}}$.
:::

**Exercice 2.** Résoudre $2y'+y=3$.

:::corrige
$y'=-\dfrac12y+\dfrac32$. Solution constante : $-\dfrac ba=-\dfrac{3/2}{-1/2}=3$.
$\mathbf{y=Ce^{-x/2}+3}$, $C\in\mathbb{R}$.
:::

**Exercice 3.** Résoudre $y''+9y=0$ avec $y(0)=0$ et $y'(0)=3$.

:::corrige
$y=A\cos3x+B\sin3x$ ; $y(0)=A=0$ ; $y'(0)=3B=3$ donc $B=1$. Donc $\mathbf{y=\sin3x}$.
:::

**Exercice 4.** Un condensateur se décharge dans une résistance : $u'=-\dfrac{u}{\tau}$ avec $\tau=RC=0{,}1$ s et $u(0)=12$ V. Donner $u(t)$ et le temps pour atteindre 1 V.

:::corrige
$u(t)=12e^{-t/0{,}1}=12e^{-10t}$.
$12e^{-10t}=1\iff e^{-10t}=\dfrac1{12}\iff t=\dfrac{\ln12}{10}\approx\mathbf{0{,}25\ s}$.
:::

**Exercice 5.** Le nombre de noyaux de carbone 14 vérifie $N'=-\lambda N$ ; sa demi-vie est 5 730 ans. Calculer $\lambda$, puis l'âge d'un fossile qui contient 25 % du $^{14}\text{C}$ initial.

:::corrige
$N(t)=N_0e^{-\lambda t}$ et $t_{1/2}=\dfrac{\ln2}\lambda$, donc $\lambda=\dfrac{\ln2}{5730}\approx\mathbf{1{,}21\times10^{-4}\ \text{an}^{-1}}$.
25 % restant : $N=\dfrac{N_0}{4}$, soit **deux demi-vies** : $t=2\times5730=\mathbf{11\,460}$ ans.
:::

## ⚠️ Pièges classiques du BAC
- Oublier la **constante** $C$ (ou les **deux** constantes pour une équation d'ordre 2).
- Se tromper de signe pour la solution constante : c'est $-\dfrac ba$.
- Ne pas **utiliser les conditions initiales** après avoir donné la forme générale.
- Écrire $y=e^{ax}+C$ au lieu de $Ce^{ax}$ : la constante **multiplie** l'exponentielle.

## ✅ À retenir
- $y'=ay\Rightarrow y=Ce^{ax}$ ; $y'=ay+b\Rightarrow y=Ce^{ax}-\dfrac ba$.
- $y''+\omega^2y=0\Rightarrow y=A\cos\omega x+B\sin\omega x$.
- Conditions initiales $\Rightarrow$ **une seule** solution.
- Modèles : refroidissement, décharge RC, désintégration radioactive.
`

DEEP_MATHS_3["statistiques-deux-variables"] = String.raw`## 💡 L'essentiel en une phrase
Quand on observe **deux caractères** sur les mêmes individus (par exemple *heures de révision* et *note*), on cherche s'ils sont **liés** et on construit une **droite de régression** pour faire des prévisions.

## 📚 1. Nuage de points et point moyen
Pour une série $(x_i\,;y_i)$ de $n$ couples, le **nuage de points** est l'ensemble des points $M_i(x_i\,;y_i)$.
Le **point moyen** est $G(\bar x\,;\bar y)$ avec
$$\bar x=\frac1n\sum x_i,\qquad\bar y=\frac1n\sum y_i$$

## 📚 2. Variance et covariance
- **Variance** : $V(x)=\dfrac1n\sum x_i^2-\bar x^{\,2}$ ; **écart-type** : $\sigma_x=\sqrt{V(x)}$.
- **Covariance** : $\text{cov}(x,y)=\dfrac1n\sum x_iy_i-\bar x\,\bar y$.
Elle mesure si $x$ et $y$ varient **dans le même sens** (cov $>0$) ou en **sens contraire** (cov $<0$).

## 📚 3. Droite de régression (méthode des moindres carrés)
La droite d'ajustement de $y$ en $x$ a pour équation
$$y=ax+b\qquad\text{avec}\qquad a=\frac{\text{cov}(x,y)}{V(x)},\quad b=\bar y-a\bar x$$
- Elle **passe par le point moyen** $G$.
- Elle sert à **estimer** $y$ pour une valeur de $x$ (interpolation si $x$ est dans la plage observée, extrapolation sinon).

## 📚 4. Coefficient de corrélation linéaire
$$r=\frac{\text{cov}(x,y)}{\sigma_x\,\sigma_y},\qquad-1\le r\le1$$
- $|r|$ **proche de 1** : très bon ajustement linéaire (le signe de $r$ donne le sens).
- $r$ **proche de 0** : pas de lien linéaire.
- En pratique, on retient un bon ajustement si $|r|\ge0{,}87$ environ.

## 📚 5. Ajustements non affines
Si le nuage n'est pas « allongé » en ligne droite, on peut changer de variable :
- **Exponentiel** : poser $z=\ln y$, puis faire la régression de $z$ en $x$ : $z=ax+b$ donne $y=e^b\,(e^a)^x$.
- **Puissance** : poser $X=\ln x$ et $z=\ln y$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Régression complète
$x$ = heures de révision par semaine et $y$ = note sur 20, pour 5 élèves :

| $x_i$ | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| $y_i$ | 3 | 5 | 6 | 8 | 10 |

- $\bar x=3$ et $\bar y=\dfrac{32}5=6{,}4$.
- $\sum x_iy_i=3+10+18+32+50=113$, donc $\dfrac1n\sum x_iy_i=22{,}6$ et $\text{cov}=22{,}6-3\times6{,}4=3{,}4$.
- $\sum x_i^2=55$, donc $V(x)=11-9=2$.
- $a=\dfrac{3{,}4}{2}=1{,}7$ et $b=6{,}4-1{,}7\times3=1{,}3$.
$$\boxed{y=1{,}7x+1{,}3}$$
- $\sum y_i^2=234$ donc $V(y)=46{,}8-6{,}4^2=5{,}84$, $\sigma_y\approx2{,}417$ et $\sigma_x=\sqrt2\approx1{,}414$.
$r=\dfrac{3{,}4}{1{,}414\times2{,}417}\approx\mathbf{0{,}995}$ : **excellent ajustement**.
- **Prévision** : pour 7 heures : $y=1{,}7\times7+1{,}3=13{,}2$.

### Exemple 2 — Ajustement exponentiel
$x=0,1,2,3$ et $y=2,6,18,54$. Avec $z=\ln y$ : $z=\ln2,\ \ln2+\ln3,\ \ln2+2\ln3,\ \ln2+3\ln3$.
La relation est exactement $z=\ln2+x\ln3$, donc $y=2\times3^x$.

### Exemple 3 — Interpréter $r$
- $r=-0{,}92$ : forte corrélation **négative** (quand $x$ augmente, $y$ diminue).
- $r=0{,}2$ : lien linéaire **faible**, la droite de régression n'est pas fiable.

## ✏️ Exercices d'entraînement
**Exercice 1.** Pour la série $x=2,4,6,8$ et $y=3,5,6,10$, calculer $G$, la droite de régression de $y$ en $x$, la valeur estimée pour $x=10$ et $r$.

:::corrige
- $\bar x=5$ et $\bar y=6$, donc $G(5\,;6)$.
- $\sum x_iy_i=6+20+36+80=142$ ; $\dfrac{142}4=35{,}5$ ; $\text{cov}=35{,}5-30=5{,}5$.
- $\sum x_i^2=120$ ; $V(x)=30-25=5$. $a=\dfrac{5{,}5}5=1{,}1$ et $b=6-1{,}1\times5=0{,}5$.
$\mathbf{y=1{,}1x+0{,}5}$.
- Pour $x=10$ : $y=11{,}5$ (extrapolation).
- $\sum y_i^2=170$ ; $V(y)=42{,}5-36=6{,}5$ ; $r=\dfrac{5{,}5}{\sqrt5\times\sqrt{6{,}5}}\approx\mathbf{0{,}965}$.
:::

**Exercice 2.** Un commerçant relève son chiffre d'affaires (en millions de F) sur 5 années de rang $x_i=1,2,3,4,5$ : $y_i=10,12,15,17,21$. Déterminer la droite de régression et estimer le chiffre d'affaires de la 7e année.

:::corrige
- $\bar x=3$ ; $\bar y=15$ ; $\sum x_iy_i=10+24+45+68+105=252$ ; $\dfrac{252}5=50{,}4$ ; $\text{cov}=50{,}4-45=5{,}4$.
- $V(x)=2$ donc $a=2{,}7$ et $b=15-2{,}7\times3=6{,}9$.
$\mathbf{y=2{,}7x+6{,}9}$.
- 7e année : $y=2{,}7\times7+6{,}9=\mathbf{25{,}8}$ millions de F.
- $\sum y_i^2=1199$ ; $V(y)=239{,}8-225=14{,}8$ ; $r=\dfrac{5{,}4}{\sqrt2\times\sqrt{14{,}8}}\approx0{,}993$ : l'ajustement est très bon.
:::

**Exercice 3.** On trouve $r=0{,}35$ pour deux caractères. Peut-on prévoir l'un avec l'autre ?

:::corrige
Non : $|r|=0{,}35$ est loin de 1, le lien linéaire est **faible**. Une droite de régression donnerait des prévisions peu fiables.
:::

**Exercice 4.** Montrer que la droite de régression passe par $G$.

:::corrige
Par définition $b=\bar y-a\bar x$, donc $\bar y=a\bar x+b$ : les coordonnées de $G(\bar x\,;\bar y)$ vérifient l'équation $y=ax+b$.
:::

## ⚠️ Pièges classiques du BAC
- Mélanger $\sum x_iy_i$ (somme des **produits**) avec $\sum x_i\times\sum y_i$.
- Oublier de **diviser par $n$** dans la covariance et la variance.
- Conclure à un lien de **cause à effet** : une forte corrélation ne prouve pas que $x$ cause $y$.
- Extrapoler très loin de la plage observée : l'estimation devient peu fiable.
- Confondre la droite de $y$ en $x$ et celle de $x$ en $y$ : ce ne sont pas les mêmes droites.

## ✅ À retenir
- $G(\bar x\,;\bar y)$ ; $\text{cov}=\overline{xy}-\bar x\bar y$ ; $V(x)=\overline{x^2}-\bar x^{\,2}$.
- Régression : $y=ax+b$ avec $a=\dfrac{\text{cov}(x,y)}{V(x)}$ et $b=\bar y-a\bar x$.
- $r=\dfrac{\text{cov}}{\sigma_x\sigma_y}$ : plus $|r|$ est proche de 1, meilleur est l'ajustement.
- Ajustement exponentiel : poser $z=\ln y$.
`

DEEP_MATHS_3["probabilites-variable-aleatoire"] = String.raw`## 💡 L'essentiel en une phrase
La **probabilité conditionnelle** mesure la chance d'un événement **sachant qu'un autre est réalisé**. Avec une **variable aléatoire**, on résume une expérience par une **loi**, une **espérance** (moyenne) et un **écart-type** (dispersion).

## 📚 1. Rappels
- $0\le P(A)\le1$ ; $P(\bar A)=1-P(A)$.
- $P(A\cup B)=P(A)+P(B)-P(A\cap B)$.
- **Équiprobabilité** : $P(A)=\dfrac{\text{nombre de cas favorables}}{\text{nombre de cas possibles}}$.

## 📚 2. Probabilité conditionnelle
Pour $P(A)\ne0$ :
$$P_A(B)=\frac{P(A\cap B)}{P(A)}\qquad\text{donc}\qquad P(A\cap B)=P(A)\times P_A(B)$$
Sur un **arbre pondéré**, on **multiplie** les probabilités le long d'une branche, et on **additionne** les branches qui mènent au même événement.

## 📚 3. Formule des probabilités totales
Si $A_1,\dots,A_n$ forment une **partition** de l'univers (ils sont disjoints et leur réunion est tout l'univers) :
$$P(B)=P(A_1)P_{A_1}(B)+\dots+P(A_n)P_{A_n}(B)$$
En particulier : $P(B)=P(A)P_A(B)+P(\bar A)P_{\bar A}(B)$.
**Formule de Bayes** : $P_B(A)=\dfrac{P(A)P_A(B)}{P(B)}$.

## 📚 4. Événements indépendants
$A$ et $B$ sont **indépendants** si $P(A\cap B)=P(A)\times P(B)$, c'est-à-dire si $P_A(B)=P(B)$ : savoir $A$ ne change pas la chance de $B$.

## 📚 5. Variable aléatoire discrète
Une variable aléatoire $X$ prend les valeurs $x_1,\dots,x_n$ avec les probabilités $p_i=P(X=x_i)$ (la somme des $p_i$ vaut 1).
- **Espérance** : $E(X)=\sum x_ip_i$ (valeur moyenne à long terme).
- **Variance** : $V(X)=E(X^2)-\bigl(E(X)\bigr)^2$ ; **écart-type** $\sigma(X)=\sqrt{V(X)}$.
- $E(aX+b)=aE(X)+b$ et $V(aX+b)=a^2V(X)$.

## 📚 6. Loi binomiale $\mathcal B(n\,;p)$
On répète $n$ fois, **de façon indépendante**, une épreuve à deux issues (succès de probabilité $p$, échec de probabilité $1-p$). $X$ = nombre de succès :
$$P(X=k)=\binom nk\,p^k(1-p)^{n-k},\qquad E(X)=np,\qquad V(X)=np(1-p)$$
où $\dbinom nk=\dfrac{n!}{k!(n-k)!}$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Arbre et probabilités totales
Dans un lycée, 55 % des élèves sont des filles. 30 % des filles et 20 % des garçons font du sport.
$P(F\cap S)=0{,}55\times0{,}30=0{,}165$ et $P(G\cap S)=0{,}45\times0{,}20=0{,}09$.
$P(S)=0{,}165+0{,}09=\mathbf{0{,}255}$.
**Sachant qu'un élève fait du sport, quelle est la probabilité que ce soit une fille ?** $P_S(F)=\dfrac{0{,}165}{0{,}255}=\dfrac{11}{17}\approx0{,}65$.

### Exemple 2 — Loi, espérance, variance
On lance un dé équilibré. On gagne 5 F si on obtient 6, 1 F si on obtient 4 ou 5, et on perd 2 F sinon.

| $x_i$ | $5$ | $1$ | $-2$ |
|---|---|---|---|
| $p_i$ | $\dfrac16$ | $\dfrac13$ | $\dfrac12$ |

$E(X)=\dfrac56+\dfrac13-1=\dfrac16$. $E(X^2)=\dfrac{25}6+\dfrac13+2=\dfrac{39}6=6{,}5$.
$V(X)=6{,}5-\dfrac1{36}=\dfrac{233}{36}\approx6{,}47$ et $\sigma\approx2{,}54$.

### Exemple 3 — Loi binomiale
On lance 10 fois une pièce équilibrée. $P(X=3)=\dbinom{10}3\left(\dfrac12\right)^{10}=\dfrac{120}{1024}\approx0{,}117$.
Un QCM de 5 questions à 4 choix répondu au hasard ($p=\dfrac14$) : $P(\text{au moins une bonne})=1-\left(\dfrac34\right)^5=1-\dfrac{243}{1024}\approx0{,}76$.

### Exemple 4 — Test médical (Bayes)
Une maladie touche 1 % de la population. Un test est positif pour 95 % des malades et pour 5 % des non-malades.
$P(T)=0{,}01\times0{,}95+0{,}99\times0{,}05=0{,}0095+0{,}0495=0{,}059$.
$P_T(M)=\dfrac{0{,}0095}{0{,}059}\approx\mathbf{0{,}16}$ : un test positif n'indique une maladie que dans **16 %** des cas, car la maladie est rare.

## ✏️ Exercices d'entraînement
**Exercice 1.** Une urne contient 3 boules rouges et 2 vertes. On tire deux boules **sans remise**. Calculer $P(\text{deux rouges})$ et $P(\text{2e boule rouge})$.

:::corrige
$P(R_1\cap R_2)=\dfrac35\times\dfrac24=\dfrac3{10}$.
$P(R_2)=P(R_1)P_{R_1}(R_2)+P(V_1)P_{V_1}(R_2)=\dfrac35\times\dfrac24+\dfrac25\times\dfrac34=\dfrac6{20}+\dfrac6{20}=\mathbf{\dfrac35}$.
:::

**Exercice 2.** Une machine $A$ produit 60 % des pièces, avec 2 % de défauts ; une machine $B$ produit 40 %, avec 5 % de défauts. Calculer la probabilité qu'une pièce soit défectueuse, puis qu'elle vienne de $A$ sachant qu'elle est défectueuse.

:::corrige
$P(D)=0{,}6\times0{,}02+0{,}4\times0{,}05=0{,}012+0{,}020=\mathbf{0{,}032}$.
$P_D(A)=\dfrac{0{,}012}{0{,}032}=\mathbf{0{,}375}$.
:::

**Exercice 3.** Un archer atteint sa cible avec la probabilité 0,7. Il tire 4 fois indépendamment. Calculer $P(X=2)$, $E(X)$ et $P(X\ge1)$.

:::corrige
$X\sim\mathcal B(4\,;0{,}7)$.
$P(X=2)=\dbinom42(0{,}7)^2(0{,}3)^2=6\times0{,}49\times0{,}09=\mathbf{0{,}2646}$.
$E(X)=4\times0{,}7=\mathbf{2{,}8}$.
$P(X\ge1)=1-P(X=0)=1-0{,}3^4=1-0{,}0081=\mathbf{0{,}9919}$.
:::

**Exercice 4.** Un ticket de loterie coûte 10 F. Un ticket sur 100 gagne 500 F. Calculer l'espérance du gain algébrique.

:::corrige
Gain algébrique : $490$ F avec $p=0{,}01$ et $-10$ F avec $p=0{,}99$.
$E=490\times0{,}01-10\times0{,}99=4{,}9-9{,}9=\mathbf{-5}$ F. En moyenne, le joueur perd 5 F par ticket.
:::

**Exercice 5.** On donne $P(A)=0{,}5$, $P(B)=0{,}4$ et $P(A\cup B)=0{,}7$. $A$ et $B$ sont-ils indépendants ?

:::corrige
$P(A\cap B)=P(A)+P(B)-P(A\cup B)=0{,}9-0{,}7=0{,}2$ et $P(A)P(B)=0{,}5\times0{,}4=0{,}2$.
Les deux valeurs sont égales : **$A$ et $B$ sont indépendants**.
:::

## ⚠️ Pièges classiques du BAC
- Confondre $P_A(B)$ et $P_B(A)$ : ce sont deux probabilités différentes.
- **Additionner** au lieu de multiplier le long d'une branche de l'arbre.
- Dire que des événements incompatibles sont indépendants : c'est presque toujours faux.
- Appliquer la loi binomiale **sans indépendance** (tirage sans remise).
- Oublier que $P(X\ge1)=1-P(X=0)$ : c'est le calcul le plus rapide.

## ✅ À retenir
- $P_A(B)=\dfrac{P(A\cap B)}{P(A)}$ ; probabilités totales ; Bayes.
- Indépendance : $P(A\cap B)=P(A)P(B)$.
- $E(X)=\sum x_ip_i$ ; $V(X)=E(X^2)-E(X)^2$.
- $\mathcal B(n\,;p)$ : $P(X=k)=\dbinom nkp^k(1-p)^{n-k}$, $E=np$, $V=np(1-p)$.
`

DEEP_MATHS_3["complexes-geometrie"] = String.raw`## 💡 L'essentiel en une phrase
Une **similitude directe** s'écrit $z'=az+b$ avec $a\ne0$. Le nombre $a$ donne le **rapport** (son module) et l'**angle** (son argument), et le point fixe donne le **centre**. Avec les complexes, toute la géométrie des transformations devient du calcul.

## 📚 1. Les transformations du plan en écriture complexe
| Transformation | Écriture complexe |
|---|---|
| **Translation** de vecteur $\vec u$ (affixe $b$) | $z'=z+b$ |
| **Homothétie** de centre $\Omega(\omega)$ et rapport $k$ | $z'-\omega=k(z-\omega)$ |
| **Rotation** de centre $\Omega(\omega)$ et d'angle $\theta$ | $z'-\omega=e^{i\theta}(z-\omega)$ |
| **Similitude directe** | $z'=az+b$ ($a\ne0$) |

## 📚 2. La similitude directe $z'=az+b$
- Si $a=1$ : c'est une **translation** (pas de point fixe, sauf $b=0$).
- Si $a\ne1$ : il y a **un seul point fixe**, le **centre** $\Omega$ d'affixe
$$\omega=\frac{b}{1-a}$$
On peut alors écrire $z'-\omega=a(z-\omega)$.
- **Rapport** : $k=|a|$. **Angle** : $\theta=\arg a$.
- La similitude est donc la composée d'une **rotation** d'angle $\theta$ et d'une **homothétie** de rapport $k$, toutes deux de centre $\Omega$.

## 📚 3. Propriétés
- Les **distances** sont multipliées par $k$ : $A'B'=k\,AB$.
- Les **aires** sont multipliées par $k^2$.
- Les **angles orientés** sont conservés.
- L'image d'une droite est une droite, l'image d'un cercle est un cercle de rayon multiplié par $k$.
- Cas particuliers : $|a|=1$ : **rotation** ; $a$ réel : **homothétie** (de rapport $a$, de centre $\omega$) ; $a=-1$ : **symétrie centrale**.

## 📚 4. Déterminer une similitude à partir de deux points
Si $S(z_1)=z_1'$ et $S(z_2)=z_2'$ avec $z_1\ne z_2$ :
$$a=\frac{z_2'-z_1'}{z_2-z_1},\qquad b=z_1'-az_1$$

## 📚 5. Construire des figures
- Triangle **équilatéral direct** $ABC$ : $z_C-z_A=e^{i\pi/3}(z_B-z_A)$.
- Carré direct $ABCD$ : $z_D-z_A=i(z_B-z_A)$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Rotation
Rotation de centre $O$ et d'angle $\dfrac\pi2$ : $z'=iz$. L'image de $A(2+i)$ est $z'=i(2+i)=2i-1$, soit $A'(-1+2i)$.

### Exemple 2 — Homothétie
Homothétie de centre $\Omega(1+i)$ et de rapport 3 : $z'-(1+i)=3\bigl(z-(1+i)\bigr)$, donc $z'=3z-2-2i$.

### Exemple 3 — Éléments caractéristiques
Soit $S\,:\,z'=(1+i)z+2$.
- $a=1+i\ne1$ : $\omega=\dfrac{2}{1-(1+i)}=\dfrac2{-i}=2i$. *Vérification* : $(1+i)(2i)+2=2i-2+2=2i$ ✓.
- Rapport $k=|1+i|=\sqrt2$ ; angle $\theta=\arg(1+i)=\dfrac\pi4$.
$S$ est la similitude directe de **centre $\Omega(2i)$, de rapport $\sqrt2$ et d'angle $\dfrac\pi4$**.

### Exemple 4 — Trouver $S$ avec deux images
$S(0)=1+i$ et $S(1)=2i$ :
$a=\dfrac{2i-(1+i)}{1-0}=-1+i$ et $b=1+i$, donc $z'=(-1+i)z+1+i$.
Rapport $\sqrt2$, angle $\dfrac{3\pi}4$, centre $\omega=\dfrac{1+i}{2-i}=\dfrac{(1+i)(2+i)}5=\dfrac{1+3i}5$.

### Exemple 5 — Reconnaître une transformation
- $z'=-z+4$ : $a=-1$, centre $\omega=\dfrac42=2$ : **symétrie centrale** de centre $2$.
- $z'=iz+1-i$ : $a=i$, $\omega=\dfrac{1-i}{1-i}=1$ : **rotation** de centre $1$ et d'angle $\dfrac\pi2$.

### Exemple 6 — Triangle équilatéral
$A(0)$ et $B(2)$ : le point $C$ tel que $ABC$ soit équilatéral direct vérifie $z_C=2e^{i\pi/3}=1+i\sqrt3$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Écrire la rotation de centre $\Omega(2)$ et d'angle $-\dfrac\pi2$, puis donner l'image de $M(3)$.

:::corrige
$z'-2=e^{-i\pi/2}(z-2)=-i(z-2)$, donc $\mathbf{z'=-iz+2+2i}$.
Image de $z=3$ : $z'=-3i+2+2i=\mathbf{2-i}$.
:::

**Exercice 2.** Donner les éléments caractéristiques de $S\,:\,z'=2iz+1$.

:::corrige
$a=2i$ : rapport $|a|=\mathbf2$, angle $\arg a=\mathbf{\dfrac\pi2}$ ; centre $\omega=\dfrac1{1-2i}=\dfrac{1+2i}5$.
:::

**Exercice 3.** Déterminer la transformation $S$ telle que $S(1)=1$ et $S(0)=2$.

:::corrige
$a=\dfrac{1-2}{1-0}=-1$ et $b=2$, donc $z'=-z+2$ : **symétrie centrale** de centre $\omega=\dfrac22=1$.
:::

**Exercice 4.** $A(1+i)$ et $B(3+i)$. Déterminer $C$ pour que $ABC$ soit équilatéral direct.

:::corrige
$z_C-z_A=e^{i\pi/3}(z_B-z_A)=2\left(\dfrac12+i\dfrac{\sqrt3}{2}\right)=1+i\sqrt3$.
$z_C=(1+i)+(1+i\sqrt3)=\mathbf{2+i(1+\sqrt3)}$.
:::

**Exercice 5.** Une similitude de rapport 2 transforme un cercle de rayon 3 : quel est le rayon de l'image ? Et le rapport des aires ?

:::corrige
Rayon : $2\times3=\mathbf6$. Aires multipliées par $k^2=\mathbf4$ (de $9\pi$ à $36\pi$).
:::

## ⚠️ Pièges classiques du BAC
- Confondre le **rapport** $|a|$ avec $a$ lui-même (qui peut être complexe).
- Oublier que le **centre** vaut $\dfrac{b}{1-a}$ et non $\dfrac ba$.
- Donner un angle à partir de $\tan\theta$ seulement : vérifier cosinus **et** sinus.
- Oublier de traiter à part le cas $a=1$ (translation, pas de centre).

## ✅ À retenir
- $z'=az+b$ : rapport $|a|$, angle $\arg a$, centre $\dfrac b{1-a}$.
- Rotation : $|a|=1$ ; homothétie : $a$ réel ; translation : $a=1$.
- Distances $\times k$, aires $\times k^2$, angles conservés.
- Avec deux points et leurs images : $a=\dfrac{z_2'-z_1'}{z_2-z_1}$.
`
