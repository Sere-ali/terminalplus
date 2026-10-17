// Résumés de cours – Mathématiques Terminale C et D (suite)

export const MATHS_2: Record<string, string> = {}

MATHS_2["calcul-integral"] = String.raw`## 💡 L'essentiel en une phrase
L'**intégrale** d'une fonction continue sur $[a;b]$ mesure l'**aire algébrique** sous sa courbe ; on la calcule avec une **primitive**.

## 📚 1. Définition
Si $F$ est une primitive de $f$ continue sur $[a;b]$ :
$$\int_a^bf(t)\,dt=\Big[F(t)\Big]_a^b=F(b)-F(a)$$
- Si $f\ge0$ sur $[a;b]$, l'intégrale est l'**aire** (en unités d'aire) du domaine entre la courbe, l'axe des abscisses et les droites $x=a$, $x=b$.
- 1 unité d'aire = $\|\vec i\|\times\|\vec j\|$ (par exemple 4 cm² si l'unité est 2 cm sur chaque axe). **Donne toujours l'unité demandée.**
- $\int_a^af=0$ et $\int_b^af=-\int_a^bf$.
- La fonction $x\mapsto\int_a^xf(t)dt$ est **l'unique primitive de $f$ qui s'annule en $a$**.

## 🧩 2. Propriétés
- **Linéarité** : $\int(\lambda f+\mu g)=\lambda\int f+\mu\int g$.
- **Chasles** : $\int_a^bf=\int_a^cf+\int_c^bf$.
- **Positivité** : si $f\ge0$ et $a\le b$ alors $\int_a^bf\ge0$.
- **Comparaison** : si $f\le g$ sur $[a;b]$ alors $\int_a^bf\le\int_a^bg$.
- **Inégalité de la moyenne**
  - Si $m\le f\le M$ : $\;m(b-a)\le\int_a^bf\le M(b-a)$.
  - Si $|f|\le M$ : $\;\left|\int_a^bf\right|\le M|b-a|$.
- **Valeur moyenne** de $f$ sur $[a;b]$ : $\;\mu=\dfrac1{b-a}\int_a^bf(t)dt$.

## ✍️ 3. Techniques de calcul
**Intégration par parties (IPP)**
$$\int_a^bu(t)\,v'(t)\,dt=\Big[u\,v\Big]_a^b-\int_a^bu'(t)\,v(t)\,dt$$
Choisis $u$ simple à dériver (polynôme, $\ln$) et $v'$ simple à intégrer ($e^x$, $\sin$, $\cos$). **L'énoncé indique en général qu'il faut une IPP.**

**Changement de variable affine.** Si $F$ est une primitive de $f$ : $\int_a^bf(\alpha t+\beta)dt=\dfrac1\alpha\Big[F(\alpha t+\beta)\Big]_a^b$.

**Parité / périodicité**
- $f$ impaire : $\int_{-a}^af=0$ ; $f$ paire : $\int_{-a}^af=2\int_0^af$.
- $f$ périodique de période $T$ : $\int_a^{a+T}f$ ne dépend pas de $a$.

## 📐 4. Calcul d'une aire
- Entre la courbe de $f$ et l'axe des abscisses : $\mathcal A=\int_a^b|f(t)|dt$ (**découper selon le signe de $f$**).
- Entre deux courbes avec $f\ge g$ : $\mathcal A=\int_a^b\big(f(t)-g(t)\big)dt$.

## ✅ Exemples corrigés
**Exemple 1 (IPP).** $\displaystyle\int_0^1xe^x\,dx$ avec $u=x$ et $v'=e^x$ :
$$\Big[xe^x\Big]_0^1-\int_0^1e^x\,dx=e-(e-1)=1$$

**Exemple 2.** $\displaystyle\int_1^e\ln x\,dx=\Big[x\ln x-x\Big]_1^e=(e-e)-(0-1)=1$.

**Exemple 3 (variable affine).** $\displaystyle\int_0^{\pi/2}\cos(2t)\,dt=\left[\frac{\sin 2t}{2}\right]_0^{\pi/2}=0$.

## ⚠️ Pièges fréquents
- Oublier les **crochets** $[\ ]_a^b$ ou inverser $F(b)-F(a)$.
- Se tromper de signe dans l'IPP : $[uv]-\int u'v$.
- Calculer une aire en oubliant la valeur absolue quand $f$ change de signe.

## 🏆 À retenir pour le BAC
Maîtrise **primitives + IPP**, sache encadrer une intégrale, calculer une aire **avec la bonne unité** et étudier une fonction définie par $F(x)=\int_a^xf(t)dt$ (sa dérivée est $f(x)$).`

MATHS_2["suites-numeriques"] = String.raw`## 💡 L'essentiel en une phrase
Une **suite** $(u_n)$ est une liste de nombres indexée par $n$. On étudie son **sens de variation** et sa **limite** quand $n\to+\infty$.

## 📚 1. Rappels : suites arithmétiques et géométriques
| | Arithmétique (raison $r$) | Géométrique (raison $q$) |
|---|---|---|
| Relation | $u_{n+1}=u_n+r$ | $u_{n+1}=q\,u_n$ |
| Terme général | $u_n=u_0+nr$ | $u_n=u_0\,q^n$ |
| Somme des $n+1$ premiers termes | $\dfrac{(n+1)(u_0+u_n)}2$ | $u_0\dfrac{1-q^{n+1}}{1-q}$ ($q\neq1$) |

## 📏 2. Suites bornées et monotones
- **Majorée** : $u_n\le M$ ; **minorée** : $u_n\ge m$ ; **bornée** : les deux.
- **Croissante** : $u_{n+1}-u_n\ge0$ ; **décroissante** : $u_{n+1}-u_n\le0$. Pour des termes positifs, on peut comparer $\dfrac{u_{n+1}}{u_n}$ à $1$.

## 🎯 3. Convergence
- $(u_n)$ **converge** vers $\ell$ si ses termes se rapprochent aussi près qu'on veut de $\ell$ pour $n$ grand. Sinon elle **diverge**.
- **La limite, si elle existe, est unique.**
- **Suites de référence** : $q^n\to0$ si $|q|<1$ ; $q^n\to+\infty$ si $q>1$ ; pas de limite si $q\le-1$. De plus $n^\alpha\to+\infty$ si $\alpha>0$ et $n^\alpha\to0$ si $\alpha<0$.
- **Théorèmes essentiels**
  - Toute suite **croissante et majorée** converge ; toute suite **décroissante et minorée** converge.
  - Suite **croissante non majorée** $\to+\infty$ ; **décroissante non minorée** $\to-\infty$.
  - **Gendarmes** : $v_n\le u_n\le w_n$ et $v_n,w_n\to\ell$ implique $u_n\to\ell$.
  - **Comparaison** : $u_n\ge v_n$ et $v_n\to+\infty$ implique $u_n\to+\infty$.
  - Si $u_n=f(n)$ et $\lim_{x\to+\infty}f(x)=\ell$ alors $u_n\to\ell$.
  - **Comparaison de croissances** : $\ln n\ll n^\alpha\ll a^n$ (avec $\alpha>0$, $a>1$).

## 🔄 4. Suites récurrentes $u_{n+1}=f(u_n)$
Si $f$ est **continue** et si $(u_n)$ converge vers $\ell$, alors $\ell$ vérifie $f(\ell)=\ell$ (on cherche les « points fixes »). Pour **prouver** une propriété pour tout $n$, on utilise le **raisonnement par récurrence** :
1. **Initialisation** : la propriété est vraie au premier rang.
2. **Hérédité** : on suppose $P(n)$ vraie et on démontre $P(n+1)$.
3. **Conclusion** : $P(n)$ est vraie pour tout $n$.

## 🧪 5. Suite arithmético-géométrique $u_{n+1}=a\,u_n+b$
On cherche le point fixe $\ell=\dfrac b{1-a}$ puis on pose $v_n=u_n-\ell$ : $(v_n)$ est **géométrique** de raison $a$, donc $u_n=\ell+(u_0-\ell)a^n$.

## ✅ Exemple corrigé (situation du programme)
Un capital de $300\,000$ F est placé 7 mois.
- **Option 1** : $+2\,500$ F par mois (suite arithmétique) : $u_7=300\,000+7\times2\,500=317\,500$ F.
- **Option 2** : $+5\ \%$ par mois (suite géométrique de raison $1{,}05$) : $v_7=300\,000\times1{,}05^7\approx422\,130$ F.

L'option 2 est la plus avantageuse et permet d'atteindre les $400\,000$ F du budget.

## ⚠️ Pièges fréquents
- Confondre « suite croissante » et « suite qui tend vers $+\infty$ » (une suite croissante peut converger).
- Oublier l'**initialisation** dans une récurrence.
- Appliquer $q^n\to0$ sans vérifier $|q|<1$.

## 🏆 À retenir pour le BAC
Sache montrer qu'une suite est **monotone, bornée, convergente**, trouver sa limite par $f(\ell)=\ell$ et traiter une suite arithmético-géométrique.`

MATHS_2["equations-differentielles"] = String.raw`## 💡 L'essentiel en une phrase
Une **équation différentielle** a pour **inconnue une fonction** et contient au moins une de ses dérivées. Elle modélise des phénomènes de la physique, de la chimie et de la biologie.

## 📚 1. Les cinq types du programme
| Équation | Solutions ($k,\alpha,\beta,A,B$ réels) |
|---|---|
| $f'+af=0$ | $f(x)=k\,e^{-ax}$ |
| $f'+af=b$ ($a\neq0$) | $f(x)=k\,e^{-ax}+\dfrac ba$ |
| $f''=0$ | $f(x)=\alpha x+\beta$ |
| $f''+\omega^2f=0$ ($\omega\neq0$) | $f(x)=A\cos(\omega x)+B\sin(\omega x)$ |
| $f''-\omega^2f=0$ ($\omega\neq0$) | $f(x)=A\,e^{\omega x}+B\,e^{-\omega x}$ |

Pour $f'=af$, la solution est $f(x)=k\,e^{ax}$.

## ✍️ 2. Méthode pour une condition initiale
1. Identifier le **type** d'équation.
2. Écrire la **forme générale** des solutions (avec la constante $k$, ou $A$ et $B$).
3. Utiliser la condition donnée, par exemple $f(x_0)=y_0$ (une constante à trouver pour l'ordre 1, **deux conditions** pour l'ordre 2).
4. Écrire la solution particulière.

## 🔬 3. Liens avec la physique et la chimie
- **Décharge d'un condensateur** dans un circuit RC : $u_C'+\dfrac1{RC}u_C=0$ $\Rightarrow$ $u_C=U_0e^{-t/RC}$.
- **Oscillateur mécanique** (ressort) : $x''+\omega_0^2x=0$ $\Rightarrow$ $x=X_m\cos(\omega_0t+\varphi)$.
- **Radioactivité** : $N'=-\lambda N$ $\Rightarrow$ $N=N_0e^{-\lambda t}$.
Ce chapitre **justifie** la forme des solutions que tu utilises en Physique-Chimie.

## ✅ Exemples corrigés
**Exemple 1.** Résoudre $2f'+6f=0$ avec $f(0)=5$.
$f'+3f=0$ donc $f(x)=ke^{-3x}$. $f(0)=k=5$ : $\;f(x)=5e^{-3x}$.

**Exemple 2.** Résoudre $f'+2f=4$ avec $f(0)=1$.
Solutions : $f(x)=ke^{-2x}+\dfrac42=ke^{-2x}+2$. $f(0)=k+2=1$ donc $k=-1$ : $\;f(x)=2-e^{-2x}$.

**Exemple 3 (bactéries).** $1\,000$ bactéries, la population double en 4 h et $f'=af$. Alors $f(t)=1000e^{at}$ et $e^{4a}=2$ soit $a=\dfrac{\ln2}4$. Après 12 h : $f(12)=1000\times2^3=8\,000$ bactéries.

## ⚠️ Pièges fréquents
- Oublier le **signe** : pour $f'+af=0$ la solution est $ke^{-ax}$ (moins !).
- Oublier la solution constante $\dfrac ba$ dans $f'+af=b$.
- Utiliser une seule condition initiale pour une équation du second ordre.

## 🏆 À retenir pour le BAC
Apprends le tableau des solutions et entraîne-toi à **déterminer les constantes** à partir des conditions initiales.`

MATHS_2["statistiques-deux-variables"] = String.raw`## 💡 L'essentiel en une phrase
On étudie **deux caractères** mesurés sur la même population (par exemple l'année et le chiffre d'affaires) pour savoir s'ils sont liés et **faire une prévision**.

## 📚 1. Vocabulaire
- **Série statistique double** : couples $(x_i;y_i)$, $i=1,\dots,n$.
- **Nuage de points** : on place chaque couple dans un repère.
- **Point moyen** $G(\bar x;\bar y)$ avec $\bar x=\dfrac1n\sum x_i$ et $\bar y=\dfrac1n\sum y_i$.

## 🧮 2. Formules
$$V(x)=\frac1n\sum x_i^2-\bar x^2\qquad V(y)=\frac1n\sum y_i^2-\bar y^2$$
$$\text{cov}(x,y)=\frac1n\sum x_iy_i-\bar x\,\bar y$$
$$r=\frac{\text{cov}(x,y)}{\sigma_x\,\sigma_y}\quad\text{avec}\quad\sigma_x=\sqrt{V(x)},\ \sigma_y=\sqrt{V(y)}$$
- $-1\le r\le1$. Plus $|r|$ est proche de $1$, plus les points sont **alignés** (bon ajustement linéaire). Si $r$ est proche de $0$, il n'y a pas de relation linéaire.

## 📈 3. Droites de régression (moindres carrés)
- **De $y$ en $x$** : $\;y=ax+b$ avec $a=\dfrac{\text{cov}(x,y)}{V(x)}$ et $b=\bar y-a\bar x$.
- **De $x$ en $y$** : $\;x=a'y+b'$ avec $a'=\dfrac{\text{cov}(x,y)}{V(y)}$ et $b'=\bar x-a'\bar y$.
- Les deux droites passent par le **point moyen** $G$.

## ✍️ 4. Méthode (à rédiger)
1. Calculer $\bar x$, $\bar y$, $\sum x_i^2$, $\sum y_i^2$, $\sum x_iy_i$ (tableau de calculs).
2. Calculer $V(x)$, $V(y)$, $\text{cov}(x,y)$ puis $r$.
3. Écrire la droite de régression demandée **avec l'arrondi imposé**.
4. Faire la **prévision** en remplaçant $x$ (ou $y$) et **interpréter**.
💡 Vérifie tes résultats avec les fonctions statistiques de la calculatrice.

## ✅ Exemple corrigé (situation du programme)
Rang $x_i$ : $1,2,3,4,5,6$ (années 2013 à 2018). Chiffre d'affaires $y_i$ (millions F CFA) : $99,\,130,\,92,\,108,\,232,\,150$.
- $\bar x=3{,}5$ ; $\bar y=\dfrac{811}6\approx135{,}17$.
- $\sum x_i^2=91$ donc $V(x)=\dfrac{91}6-3{,}5^2\approx2{,}92$.
- $\sum x_iy_i=3\,127$ donc $\text{cov}(x,y)=\dfrac{3127}6-3{,}5\times135{,}17\approx48{,}07$.
- $a=\dfrac{48{,}07}{2{,}92}\approx16{,}48$ et $b=135{,}17-16{,}48\times3{,}5\approx77{,}49$.

**Droite de régression** : $y\approx16{,}48\,x+77{,}49$.
**Prévision pour 2030** (rang $x=18$) : $y\approx16{,}48\times18+77{,}49\approx374$ millions de F CFA.
**Fiabilité** : $r\approx0{,}59$ est assez éloigné de $1$, la prévision est donc **peu fiable** (en plus, 2030 est très loin des données).

## ⚠️ Pièges fréquents
- Confondre la régression de $y$ en $x$ et celle de $x$ en $y$.
- Prévoir très loin des données (extrapolation risquée) sans commentaire.
- Arrondir trop tôt les calculs intermédiaires.

## 🏆 À retenir pour le BAC
Connais les 5 formules ($V$, cov, $r$, $a$, $b$), écris-les **avant** l'application numérique et commente toujours la valeur de $r$.`

MATHS_2["probabilites-variable-aleatoire"] = String.raw`## 💡 L'essentiel en une phrase
Les **probabilités conditionnelles** mesurent la chance d'un événement **sachant qu'un autre est réalisé** ; une **variable aléatoire** associe un nombre à chaque issue d'une expérience.

## 📚 1. Probabilité conditionnelle
$$P_B(A)=P(A\,|\,B)=\frac{P(A\cap B)}{P(B)}\qquad(P(B)\neq0)$$
- **Probabilités composées** : $P(A\cap B)=P(B)\times P_B(A)$.
- **Indépendance** : $A$ et $B$ sont indépendants $\iff P(A\cap B)=P(A)\times P(B)$.
- **Arbre pondéré** : sur chaque branche on écrit une probabilité ; on **multiplie** le long d'un chemin et on **additionne** les chemins qui mènent au même événement.

## 🧩 2. Probabilités totales
Si $A_1,\dots,A_n$ forment un **système complet** d'événements (deux à deux incompatibles, réunion = univers) :
$$P(B)=\sum_{i=1}^nP(A_i)\times P_{A_i}(B)$$

## 🎲 3. Variable aléatoire discrète $X$
- **Loi** : tableau des $x_i$ et des $p_i=P(X=x_i)$, avec $\sum p_i=1$.
- **Fonction de répartition** : $F(x)=P(X\le x)$ (en escalier, croissante, de $0$ à $1$).
- **Espérance** (moyenne) : $E(X)=\sum x_ip_i$.
- **Variance** : $V(X)=\sum p_ix_i^2-E(X)^2$ ; **écart-type** : $\sigma(X)=\sqrt{V(X)}$.
💡 Une variable aléatoire est **une fonction** ; l'espérance joue le rôle de la moyenne en statistique.

## 🔁 4. Loi binomiale
- **Épreuve de Bernoulli** : deux issues, « succès » (proba $p$) et « échec » (proba $1-p$).
- **Schéma de Bernoulli** : on **répète $n$ fois**, de façon **identique et indépendante**, la même épreuve.
- $X$ = nombre de succès suit la **loi binomiale** $\mathcal B(n;p)$ :
$$P(X=k)=\binom nk p^k(1-p)^{n-k}\qquad k=0,1,\dots,n$$
$$E(X)=np\qquad V(X)=np(1-p)$$

## ✅ Exemple corrigé (kermesse du lycée)
Une urne contient 3 boules rouges (numérotées $100,200,300$) et 2 boules noires ($2$ et $5$). On tire **deux boules avec remise**. Si elles ont la **même couleur**, le joueur perd ; sinon il reçoit le **produit** des numéros. La mise est $X$ francs (perdue dans tous les cas).
- $P(\text{même couleur})=\left(\dfrac35\right)^2+\left(\dfrac25\right)^2=\dfrac{13}{25}$, donc gain $0$ avec la probabilité $\dfrac{13}{25}$.
- Pour deux couleurs différentes, il y a 12 tirages équiprobables (probabilité $\dfrac1{25}$ chacun) ; les produits $200,400,600,500,1000,1500$ apparaissent chacun **deux fois** (rouge puis noire, ou noire puis rouge).
- Espérance du gain : $E(G)=\dfrac2{25}\times(200+400+600+500+1000+1500)=\dfrac2{25}\times4200=336$ F.

Le jeu est **avantageux pour les organisateurs** si la mise dépasse l'espérance du gain : **$X>336$ F**, donc par exemple $X=350$ F.

## ⚠️ Pièges fréquents
- Confondre $P_B(A)$ et $P_A(B)$.
- Dire que deux événements sont « indépendants » parce qu'ils sont « incompatibles » (c'est presque le contraire !).
- Appliquer la loi binomiale sans vérifier **répétitions identiques et indépendantes**.

## 🏆 À retenir pour le BAC
Dessine **toujours l'arbre**, nomme tes événements, écris la formule utilisée, et reconnais vite une loi binomiale ($n$ et $p$ à identifier).`
