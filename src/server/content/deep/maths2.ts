// Leçons approfondies – Mathématiques Tle C et D (2/3)

export const DEEP_MATHS_2: Record<string, string> = {}

DEEP_MATHS_2["fonctions-logarithmes"] = String.raw`## 💡 L'essentiel en une phrase
Le **logarithme népérien** $\ln$ transforme les **produits en sommes** : $\ln(ab)=\ln a+\ln b$. C'est la primitive de $\dfrac1x$ qui s'annule en 1, définie sur $]0\,;+\infty[$.

## 📚 1. Définition et premières propriétés
- $\ln$ est définie sur $]0\,;+\infty[$ : on ne peut pas prendre le logarithme d'un nombre négatif ou nul.
- $\ln'(x)=\dfrac1x>0$, donc **$\ln$ est strictement croissante**.
- $\ln1=0$ et $\ln e=1$ où $e\approx2{,}718$.
- $\ln a=\ln b\iff a=b$ et $\ln a<\ln b\iff a<b$ (pour $a,b>0$).
- Signe : $\ln x<0$ si $0<x<1$ et $\ln x>0$ si $x>1$.

## 📚 2. Relations fondamentales
Pour $a>0$, $b>0$ et $n\in\mathbb{Z}$ :
- $\ln(ab)=\ln a+\ln b$
- $\ln\dfrac1a=-\ln a$ et $\ln\dfrac ab=\ln a-\ln b$
- $\ln(a^n)=n\ln a$ et $\ln\sqrt a=\dfrac12\ln a$

## 📚 3. Limites à connaître
$$\lim_{x\to+\infty}\ln x=+\infty,\qquad\lim_{x\to0^+}\ln x=-\infty$$
**Croissances comparées** (le logarithme « perd » toujours face aux puissances) :
$$\lim_{x\to+\infty}\frac{\ln x}{x}=0,\qquad\lim_{x\to0^+}x\ln x=0,\qquad\lim_{x\to+\infty}\frac{\ln x}{x^n}=0$$
Et : $\displaystyle\lim_{x\to0}\frac{\ln(1+x)}{x}=1$ (c'est le nombre dérivé de $\ln$ en 1).

## 📚 4. Dérivée et primitive
- $\bigl(\ln u\bigr)'=\dfrac{u'}{u}$ (avec $u>0$).
- Une primitive de $\dfrac{u'}{u}$ est $\ln|u|$.
- Une primitive de $\ln x$ est $x\ln x-x$ (obtenue par intégration par parties).

## 📚 5. Équations et inéquations
1. **Domaine** : écrire que tout ce qui est dans un $\ln$ est $>0$.
2. Se ramener à la forme $\ln A=\ln B$ ou $\ln A\le k$.
3. Pour $\ln A\le k$ : $0<A\le e^k$. Pour $\ln A\ge k$ : $A\ge e^k$.
4. **Vérifier** que les solutions trouvées sont dans le domaine.

## 📚 6. Logarithme décimal
$\log x=\dfrac{\ln x}{\ln10}$, avec $\log10=1$ et $\log10^n=n$. On l'utilise pour le **pH** : $\text{pH}=-\log[\text{H}_3\text{O}^+]$, et pour le **nombre de chiffres** d'un entier.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Équation avec deux logarithmes
Résoudre $\ln(x-1)+\ln(x+1)=\ln3$.
**Domaine** : $x-1>0$ et $x+1>0$, donc $x>1$.
$\ln\bigl((x-1)(x+1)\bigr)=\ln3\iff x^2-1=3\iff x^2=4\iff x=\pm2$. Seul $x=2$ est dans le domaine : $S=\{2\}$.

### Exemple 2 — Inéquation
Résoudre $\ln(2x-1)\le1$.
**Domaine** : $2x-1>0$, soit $x>\dfrac12$. Alors $\ln(2x-1)\le\ln e\iff2x-1\le e\iff x\le\dfrac{e+1}{2}$.
$S=\left]\dfrac12\,;\dfrac{e+1}2\right]$.

### Exemple 3 — Limite
$\displaystyle\lim_{x\to+\infty}(x-\ln x)$ est une forme $\infty-\infty$. On factorise : $x-\ln x=x\left(1-\dfrac{\ln x}{x}\right)$. Comme $\dfrac{\ln x}x\to0$, on obtient $+\infty\times1=+\infty$.

### Exemple 4 — Étude de $f(x)=\dfrac{\ln x}{x}$
- Domaine $]0\,;+\infty[$ ; $\lim_{0^+}f=-\infty$ (asymptote verticale $x=0$) ; $\lim_{+\infty}f=0$ (asymptote horizontale $y=0$).
- $f'(x)=\dfrac{\frac1x\times x-\ln x}{x^2}=\dfrac{1-\ln x}{x^2}$.
- $f'>0\iff\ln x<1\iff x<e$. $f$ croît sur $]0\,;e]$ puis décroît ; **maximum** $f(e)=\dfrac1e$.

### Exemple 5 — Dérivées
$\bigl(\ln(x^2+1)\bigr)'=\dfrac{2x}{x^2+1}$ ; $\bigl(\ln(\ln x)\bigr)'=\dfrac1{x\ln x}$ pour $x>1$.

### Exemple 6 — Nombre de chiffres de $2^{100}$
$\log(2^{100})=100\log2\approx100\times0{,}30103=30{,}103$.
Un entier $N$ a $\lfloor\log N\rfloor+1$ chiffres, donc $2^{100}$ a **31 chiffres**.

### Exemple 7 — Placement financier
On place 1 000 000 F à 5 % par an. Au bout de combien d'années le capital double-t-il ?
On cherche $n$ tel que $1{,}05^n\ge2$, soit $n\ln1{,}05\ge\ln2$, donc $n\ge\dfrac{\ln2}{\ln1{,}05}\approx\dfrac{0{,}6931}{0{,}0488}\approx14{,}2$. Il faut **15 ans**.

## ✏️ Exercices d'entraînement
**Exercice 1.** Simplifier $A=\ln12-2\ln2+\ln\dfrac13$.

:::corrige
$\ln12=\ln(4\times3)=2\ln2+\ln3$ et $\ln\dfrac13=-\ln3$.
$A=2\ln2+\ln3-2\ln2-\ln3=\mathbf0$.
:::

**Exercice 2.** Résoudre $\ln x+\ln(x-3)=\ln4$.

:::corrige
**Domaine** : $x>0$ et $x-3>0$, donc $x>3$.
$x(x-3)=4\iff x^2-3x-4=0\iff(x-4)(x+1)=0$. Les solutions sont $4$ et $-1$ ; seule $4>3$ convient. $S=\{4\}$.
:::

**Exercice 3.** Résoudre $(\ln x)^2-\ln x-2=0$.

:::corrige
On pose $t=\ln x$ : $t^2-t-2=0$, donc $(t-2)(t+1)=0$, soit $t=2$ ou $t=-1$.
$x=e^2$ ou $x=e^{-1}=\dfrac1e$. $S=\left\{\dfrac1e\,;\,e^2\right\}$.
:::

**Exercice 4.** Déterminer le nombre de solutions de $\dfrac{\ln x}{x}=m$ selon la valeur de $m$.

:::corrige
D'après l'exemple 4, $f(x)=\dfrac{\ln x}x$ croît de $-\infty$ à $\dfrac1e$ sur $]0\,;e]$ puis décroît de $\dfrac1e$ à $0$ (sans l'atteindre) sur $[e\,;+\infty[$.
- $m>\dfrac1e$ : aucune solution.
- $m=\dfrac1e$ : une solution ($x=e$).
- $0<m<\dfrac1e$ : **deux** solutions (une dans $]1\,;e[$, une dans $]e\,;+\infty[$).
- $m\le0$ : une seule solution (dans $]0\,;1]$).
:::

**Exercice 5.** Calculer $\displaystyle\lim_{x\to+\infty}\frac{\ln x}{\sqrt x}$ et $\displaystyle\lim_{x\to0^+}\sqrt x\ln x$.

:::corrige
Par croissances comparées ($\ln x$ est négligeable devant toute puissance de $x$) : $\displaystyle\lim_{x\to+\infty}\frac{\ln x}{\sqrt x}=\mathbf0$.
Avec $X=\sqrt x$ : $\ln x=2\ln X$, donc $\sqrt x\ln x=2X\ln X\to\mathbf0$ quand $X\to0^+$.
:::

## ⚠️ Pièges classiques du BAC
- **Oublier le domaine** : $\ln(x-3)$ n'existe que pour $x>3$.
- Écrire $\ln(a+b)=\ln a+\ln b$ : c'est **faux**, la formule est pour le produit.
- Résoudre $\ln A\le k$ sans écrire $A>0$ : on perd la condition $A>0$.
- Confondre $\ln(x^2)=2\ln|x|$ et $(\ln x)^2$ : ce sont deux choses différentes.

## ✅ À retenir
- $\ln(ab)=\ln a+\ln b$, $\ln a^n=n\ln a$, $\ln e=1$.
- $\ln'=\dfrac1x$ ; $(\ln u)'=\dfrac{u'}u$.
- Croissances comparées : $\dfrac{\ln x}{x}\to0$ en $+\infty$ et $x\ln x\to0$ en $0^+$.
- Toujours écrire le **domaine** avant de résoudre.
`

DEEP_MATHS_2["fonctions-exponentielles"] = String.raw`## 💡 L'essentiel en une phrase
La **fonction exponentielle** $x\mapsto e^x$ est la réciproque de $\ln$. Elle est **égale à sa propre dérivée**, ce qui en fait l'outil idéal pour décrire les phénomènes de **croissance** et de **décroissance** (population, désintégration, charge d'un condensateur).

## 📚 1. Définition et propriétés
- $e^x$ est définie sur $\mathbb{R}$ et $e^x>0$ pour tout $x$.
- $y=e^x\iff x=\ln y$ (pour $y>0$). Donc $\ln(e^x)=x$ et $e^{\ln x}=x$.
- $e^0=1$ et $e^1=e$.
- $\bigl(e^x\bigr)'=e^x$ : $\exp$ est strictement croissante.
- $e^a=e^b\iff a=b$ et $e^a<e^b\iff a<b$.

**Relations** : $e^{a+b}=e^ae^b$ ; $e^{-a}=\dfrac1{e^a}$ ; $e^{a-b}=\dfrac{e^a}{e^b}$ ; $(e^a)^n=e^{na}$.

## 📚 2. Limites
$$\lim_{x\to+\infty}e^x=+\infty,\qquad\lim_{x\to-\infty}e^x=0$$
**Croissances comparées** (l'exponentielle l'emporte toujours) :
$$\lim_{x\to+\infty}\frac{e^x}{x^n}=+\infty,\qquad\lim_{x\to-\infty}x^ne^x=0$$
Et $\displaystyle\lim_{x\to0}\frac{e^x-1}{x}=1$ (nombre dérivé de $\exp$ en 0).

## 📚 3. Dérivées et primitives
- $\bigl(e^u\bigr)'=u'e^u$ ; par exemple $\bigl(e^{ax+b}\bigr)'=ae^{ax+b}$.
- Une primitive de $u'e^u$ est $e^u$ ; une primitive de $e^{ax+b}$ est $\dfrac1ae^{ax+b}$.

## 📚 4. Équations et inéquations
- $e^x=k\iff x=\ln k$ (si $k>0$) ; si $k\le0$, **aucune solution**.
- $e^x\ge k\iff x\ge\ln k$.
- **Équation du type $e^{2x}+\dots e^x+\dots=0$** : on pose $t=e^x$ (avec $t>0$) pour se ramener à un second degré.

## 📚 5. Fonctions puissances
Pour $a>0$ : $a^x=e^{x\ln a}$ et $\bigl(a^x\bigr)'=a^x\ln a$.
Pour $x>0$ et $\alpha$ réel : $x^\alpha=e^{\alpha\ln x}$ ; en particulier $\sqrt[n]x=x^{1/n}$.
- Si $a>1$, $a^x$ est croissante ; si $0<a<1$, elle est décroissante.
- Équation $a^x=b$ : $x=\dfrac{\ln b}{\ln a}$.

## 📚 6. Applications
- **Croissance exponentielle** : $N(t)=N_0e^{kt}$ avec $k>0$.
- **Désintégration radioactive** : $N(t)=N_0e^{-\lambda t}$ ; **demi-vie** $t_{1/2}=\dfrac{\ln2}{\lambda}$.
- **Charge d'un condensateur** : $u(t)=E\left(1-e^{-t/\tau}\right)$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Équation avec changement de variable
Résoudre $e^{2x}-3e^x+2=0$.
On pose $t=e^x>0$ : $t^2-3t+2=0\iff(t-1)(t-2)=0$, donc $t=1$ ou $t=2$.
Alors $x=\ln1=0$ ou $x=\ln2$. $S=\{0\,;\ln2\}$.

### Exemple 2 — Inéquation
$e^{x}\ge5\iff x\ge\ln5$. $S=[\ln5\,;+\infty[$.

### Exemple 3 — Étude de $f(x)=xe^{-x}$
- $\lim_{+\infty}f=0$ (croissances comparées : $xe^{-x}=\dfrac x{e^x}$). Asymptote $y=0$ en $+\infty$. $\lim_{-\infty}f=-\infty$.
- $f'(x)=e^{-x}-xe^{-x}=(1-x)e^{-x}$, du signe de $1-x$.
- $f$ croît sur $]-\infty\,;1]$ puis décroît ; **maximum** $f(1)=\dfrac1e\approx0{,}37$.

### Exemple 4 — Limite
$\displaystyle\lim_{x\to0}\frac{e^{3x}-1}x=3\times\lim_{x\to0}\frac{e^{3x}-1}{3x}=3\times1=\mathbf3$.

### Exemple 5 — Demi-vie
Un isotope a pour constante radioactive $\lambda=0{,}1\ \text{j}^{-1}$. Sa demi-vie est $t_{1/2}=\dfrac{\ln2}{0{,}1}\approx6{,}93$ jours.

### Exemple 6 — Primitive
$f(x)=2xe^{x^2}$. Avec $u=x^2$ : $f=u'e^u$, donc $F(x)=e^{x^2}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Simplifier $\dfrac{e^{x+1}\times e^{2-x}}{e^3}$.

:::corrige
Numérateur : $e^{(x+1)+(2-x)}=e^3$. Le quotient vaut $\dfrac{e^3}{e^3}=\mathbf1$.
:::

**Exercice 2.** Résoudre $e^{2x}-e^x-6=0$.

:::corrige
$t=e^x>0$ : $t^2-t-6=0\iff(t-3)(t+2)=0$, donc $t=3$ ou $t=-2$. La valeur $-2$ est impossible car $e^x>0$.
$e^x=3\iff x=\ln3$. $S=\{\ln3\}$.
:::

**Exercice 3.** Calculer $\displaystyle\lim_{x\to+\infty}(e^x-x)$ et $\displaystyle\lim_{x\to+\infty}x^2e^{-x}$.

:::corrige
- $e^x-x=e^x\left(1-\dfrac x{e^x}\right)$ et $\dfrac x{e^x}\to0$, donc la limite est $+\infty$.
- $x^2e^{-x}=\dfrac{x^2}{e^x}\to\mathbf0$ par croissances comparées.
:::

**Exercice 4.** Étudier $f(x)=(x+1)e^{-x}$ : limites, variations, tangente en 0.

:::corrige
- $\lim_{+\infty}f=0$ (car $xe^{-x}\to0$ et $e^{-x}\to0$) ; $\lim_{-\infty}f=-\infty$.
- $f'(x)=e^{-x}-(x+1)e^{-x}=-xe^{-x}$ : positive pour $x<0$, négative pour $x>0$.
- $f$ croît sur $]-\infty\,;0]$, décroît sur $[0\,;+\infty[$ ; maximum $f(0)=1$. $f(-1)=0$.
- Tangente en 0 : $f(0)=1$ et $f'(0)=0$, donc $y=1$ (horizontale).
:::

**Exercice 5.** Résoudre $2^x=5$ et dériver $g(x)=3^x$.

:::corrige
$2^x=5\iff x\ln2=\ln5\iff x=\dfrac{\ln5}{\ln2}\approx\mathbf{2{,}32}$.
$g(x)=3^x=e^{x\ln3}$, donc $g'(x)=\mathbf{3^x\ln3}$.
:::

## ⚠️ Pièges classiques du BAC
- Écrire $e^{a+b}=e^a+e^b$ : c'est **faux**, c'est un produit.
- Oublier que $e^x>0$ : une équation $e^x=-2$ n'a **aucune** solution.
- Après le changement $t=e^x$, **ne pas rejeter** $t\le0$ ou ne pas revenir à $x$.
- $\bigl(e^{2x}\bigr)'=2e^{2x}$ et non $e^{2x}$.

## ✅ À retenir
- $\exp'=\exp$ ; $(e^u)'=u'e^u$ ; $e^x>0$.
- $e^x=k\iff x=\ln k$ ($k>0$).
- Croissances comparées : $\dfrac{e^x}{x^n}\to+\infty$ et $x^ne^x\to0$ en $-\infty$.
- $a^x=e^{x\ln a}$ ; demi-vie $\dfrac{\ln2}\lambda$.
`

DEEP_MATHS_2["calcul-integral"] = String.raw`## 💡 L'essentiel en une phrase
L'**intégrale** $\displaystyle\int_a^bf(x)\,dx$ est le nombre $F(b)-F(a)$ où $F$ est une primitive de $f$ : quand $f\ge0$, c'est l'**aire** sous la courbe. Elle sert aussi à calculer des **valeurs moyennes** et des **volumes**.

## 📚 1. Définition
Si $f$ est continue sur $[a\,;b]$ et $F$ une primitive de $f$ :
$$\int_a^bf(x)\,dx=\bigl[F(x)\bigr]_a^b=F(b)-F(a)$$
Le résultat ne dépend pas de la primitive choisie (la constante s'élimine).

## 📚 2. Propriétés
- **Linéarité** : $\int(f+g)=\int f+\int g$ et $\int kf=k\int f$.
- **Chasles** : $\int_a^bf=\int_a^cf+\int_c^bf$.
- $\int_a^af=0$ et $\int_b^af=-\int_a^bf$.
- **Positivité** : si $f\ge0$ sur $[a\,;b]$ ($a<b$), alors $\int_a^bf\ge0$.
- **Croissance** : si $f\le g$ sur $[a\,;b]$, alors $\int_a^bf\le\int_a^bg$.
- **Inégalité de la moyenne** : si $m\le f\le M$, alors $m(b-a)\le\int_a^bf\le M(b-a)$.

## 📚 3. Aires
- Si $f\ge0$ sur $[a\,;b]$, l'aire du domaine entre la courbe, l'axe des abscisses et les droites $x=a$, $x=b$ est $\displaystyle\int_a^bf(x)\,dx$ (en unités d'aire).
- Si $f\le0$, l'aire est $-\displaystyle\int_a^bf$.
- Entre deux courbes avec $f\ge g$ : $\displaystyle\mathcal A=\int_a^b\bigl(f(x)-g(x)\bigr)\,dx$.
- **Unité d'aire** : $1\ \text{u.a.}=\|\vec i\|\times\|\vec j\|$ (à convertir en $\text{cm}^2$ si besoin).

## 📚 4. Valeur moyenne
$$\mu=\frac1{b-a}\int_a^bf(x)\,dx$$

## 📚 5. Intégration par parties (IPP)
Pour $u$ et $v$ dérivables avec $u'$ et $v'$ continues :
$$\int_a^bu(x)v'(x)\,dx=\bigl[u(x)v(x)\bigr]_a^b-\int_a^bu'(x)v(x)\,dx$$
**Comment choisir ?** On pose $u$ la partie qui **se simplifie en dérivant** (polynôme, $\ln x$) et $v'$ la partie qu'on sait **primitiver** (exponentielle, $\cos$, $\sin$).

## 📚 6. Volume d'un solide de révolution
Le volume engendré par la rotation autour de l'axe des abscisses de la courbe de $f$ sur $[a\,;b]$ est
$$V=\pi\int_a^b\bigl(f(x)\bigr)^2\,dx$$

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Calcul direct
$\displaystyle\int_0^1(3x^2+2x)\,dx=\bigl[x^3+x^2\bigr]_0^1=(1+1)-0=\mathbf2$.

### Exemple 2 — Avec $\dfrac1x$
$\displaystyle\int_1^e\frac1x\,dx=\bigl[\ln x\bigr]_1^e=1-0=\mathbf1$.

### Exemple 3 — IPP avec une exponentielle
$\displaystyle I=\int_0^1xe^x\,dx$. On pose $u=x$ ($u'=1$) et $v'=e^x$ ($v=e^x$) :
$I=\bigl[xe^x\bigr]_0^1-\displaystyle\int_0^1e^x\,dx=e-(e-1)=\mathbf1$.

### Exemple 4 — IPP avec le logarithme
$\displaystyle\int_1^e\ln x\,dx$ : on pose $u=\ln x$ ($u'=\frac1x$) et $v'=1$ ($v=x$) :
$\bigl[x\ln x\bigr]_1^e-\displaystyle\int_1^e1\,dx=e-(e-1)=\mathbf1$.

### Exemple 5 — Aire entre deux courbes
Aire délimitée par $y=x$ et $y=x^2$ sur $[0\,;1]$ (où $x\ge x^2$) :
$\displaystyle\int_0^1(x-x^2)\,dx=\left[\frac{x^2}2-\frac{x^3}3\right]_0^1=\frac12-\frac13=\mathbf{\frac16}$ u.a.

### Exemple 6 — Valeur moyenne
$f(x)=x^2$ sur $[0\,;3]$ : $\mu=\dfrac13\displaystyle\int_0^3x^2\,dx=\dfrac13\times\dfrac{27}{3}=\mathbf3$.

### Exemple 7 — Volume de révolution
La courbe $y=\sqrt x$ pour $x\in[0\,;4]$ tourne autour de $(Ox)$ :
$V=\pi\displaystyle\int_0^4x\,dx=\pi\left[\frac{x^2}2\right]_0^4=\mathbf{8\pi}$ unités de volume.

### Exemple 8 — Suite d'intégrales
$I_n=\displaystyle\int_0^1x^n\,dx=\left[\frac{x^{n+1}}{n+1}\right]_0^1=\frac1{n+1}$, qui tend vers 0 quand $n\to+\infty$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Calculer $\displaystyle\int_1^2\left(x-\frac1{x^2}\right)dx$.

:::corrige
Primitive : $\dfrac{x^2}2+\dfrac1x$.
$\left(\dfrac42+\dfrac12\right)-\left(\dfrac12+1\right)=\dfrac52-\dfrac32=\mathbf1$.
:::

**Exercice 2.** Calculer $\displaystyle\int_0^\pi\sin^2x\,dx$.

:::corrige
$\sin^2x=\dfrac{1-\cos2x}2$, donc $\displaystyle\int_0^\pi\sin^2x\,dx=\left[\frac x2-\frac{\sin2x}4\right]_0^\pi=\frac\pi2-0=\mathbf{\frac\pi2}$.
:::

**Exercice 3.** Calculer $\displaystyle\int_0^{\pi/2}x\cos x\,dx$ par parties.

:::corrige
$u=x$, $v'=\cos x$, donc $u'=1$ et $v=\sin x$.
$\bigl[x\sin x\bigr]_0^{\pi/2}-\displaystyle\int_0^{\pi/2}\sin x\,dx=\dfrac\pi2-\bigl[-\cos x\bigr]_0^{\pi/2}=\dfrac\pi2-1$.
:::

**Exercice 4.** Calculer l'aire du domaine compris entre $y=e^x$, $y=1$ et les droites $x=0$ et $x=\ln2$.

:::corrige
Sur $[0\,;\ln2]$, $e^x\ge1$. Aire $=\displaystyle\int_0^{\ln2}(e^x-1)\,dx=\bigl[e^x-x\bigr]_0^{\ln2}=(2-\ln2)-1=\mathbf{1-\ln2}\approx0{,}31$ u.a.
:::

**Exercice 5.** Calculer $\displaystyle\int_0^1\frac{x}{x^2+1}\,dx$.

:::corrige
$\dfrac x{x^2+1}=\dfrac12\times\dfrac{2x}{x^2+1}$, de la forme $\dfrac12\dfrac{u'}u$ :
$\displaystyle\int_0^1\frac x{x^2+1}\,dx=\left[\frac12\ln(x^2+1)\right]_0^1=\mathbf{\frac12\ln2}$.
:::

**Exercice 6.** Un cône de rayon 2 et de hauteur 2 est engendré par la rotation de $y=x$ sur $[0\,;2]$. Calculer son volume.

:::corrige
$V=\pi\displaystyle\int_0^2x^2\,dx=\pi\left[\frac{x^3}3\right]_0^2=\dfrac{8\pi}3$.
On retrouve la formule du cône $\dfrac13\pi r^2h=\dfrac13\pi\times4\times2=\dfrac{8\pi}3$ ✓.
:::

## ⚠️ Pièges classiques du BAC
- Oublier de faire $F(b)-F(a)$ **dans le bon ordre**.
- Calculer une aire sans vérifier le **signe** de $f$ : si $f$ change de signe, on découpe avec Chasles.
- Choisir $u$ et $v'$ à l'envers dans une IPP : l'intégrale devient plus compliquée au lieu de se simplifier.
- Oublier le **crochet** $[uv]_a^b$ dans l'IPP.
- Oublier de convertir l'**unité d'aire** en $\text{cm}^2$.

## ✅ À retenir
- $\int_a^bf=F(b)-F(a)$ ; aire $=\int f$ si $f\ge0$.
- IPP : $\int uv'=[uv]-\int u'v$.
- Valeur moyenne : $\dfrac1{b-a}\int_a^bf$.
- Volume de révolution : $V=\pi\int_a^bf^2$.
`

DEEP_MATHS_2["suites-numeriques"] = String.raw`## 💡 L'essentiel en une phrase
Une **suite** $(u_n)$ est une liste de nombres indexée par les entiers. Savoir calculer son terme général, sa **somme**, son **sens de variation** et sa **limite** permet de modéliser des phénomènes qui évoluent pas à pas (capital, population…).

## 📚 1. Modes de définition
- **Explicite** : $u_n=f(n)$ (on calcule directement n'importe quel terme).
- **Par récurrence** : $u_0$ donné et $u_{n+1}=f(u_n)$ (chaque terme se déduit du précédent).

## 📚 2. Suites arithmétiques
$u_{n+1}=u_n+r$ ($r$ = **raison**).
- Terme général : $u_n=u_p+(n-p)r$, en particulier $u_n=u_0+nr$.
- Somme de termes consécutifs : $S=\dfrac{\text{(nombre de termes)}\times(\text{premier}+\text{dernier})}{2}$.
- $1+2+\dots+n=\dfrac{n(n+1)}2$.
- Sens : croissante si $r>0$, décroissante si $r<0$.

## 📚 3. Suites géométriques
$u_{n+1}=q\,u_n$ ($q$ = **raison**).
- $u_n=u_pq^{\,n-p}$, en particulier $u_n=u_0q^n$.
- Somme (pour $q\ne1$) : $1+q+\dots+q^n=\dfrac{1-q^{n+1}}{1-q}$.
- Limite de $q^n$ : $q>1\to+\infty$ ; $-1<q<1\to0$ ; $q\le-1$ pas de limite.

## 📚 4. Monotonie et suites bornées
- **Croissante** : $u_{n+1}-u_n\ge0$ (ou $\dfrac{u_{n+1}}{u_n}\ge1$ si $u_n>0$).
- **Majorée** : $u_n\le M$ ; **minorée** : $u_n\ge m$ ; **bornée** : les deux.

## 📚 5. Raisonnement par récurrence
Pour démontrer une propriété $P(n)$ pour tout $n\ge n_0$ :
1. **Initialisation** : vérifier $P(n_0)$.
2. **Hérédité** : supposer $P(n)$ vraie et démontrer $P(n+1)$.
3. **Conclusion** : $P(n)$ est vraie pour tout $n\ge n_0$.

## 📚 6. Convergence
- Une suite **croissante et majorée** converge ; une suite **décroissante et minorée** converge.
- **Gendarmes** : $v_n\le u_n\le w_n$ avec $v_n$ et $w_n$ de même limite $\ell$ $\Rightarrow$ $u_n\to\ell$.
- **Suite $u_{n+1}=f(u_n)$** : si elle converge vers $\ell$ et si $f$ est continue, alors $\ell=f(\ell)$ (**point fixe**).
- **Suites adjacentes** : $(u_n)$ croissante, $(v_n)$ décroissante et $v_n-u_n\to0$ : elles convergent vers la **même limite**.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Suite arithmétique
$u_0=3$ et $r=2$ : $u_n=3+2n$. Somme $S_n=u_0+\dots+u_n=\dfrac{(n+1)(u_0+u_n)}2=\dfrac{(n+1)(6+2n)}{2}=(n+1)(n+3)$.
*Vérification pour $n=1$* : $3+5=8=2\times4$ ✓.

### Exemple 2 — Suite géométrique
$v_0=2$, $q=3$ : $v_n=2\times3^n$ et $\displaystyle\sum_{k=0}^nv_k=2\times\frac{1-3^{n+1}}{1-3}=3^{n+1}-1$.

### Exemple 3 — Récurrence
Montrer que $1+2+\dots+n=\dfrac{n(n+1)}2$.
- **Initialisation** : pour $n=1$ : $1=\dfrac{1\times2}2$ ✓.
- **Hérédité** : si $1+\dots+n=\dfrac{n(n+1)}2$, alors $1+\dots+n+(n+1)=\dfrac{n(n+1)}2+(n+1)=\dfrac{(n+1)(n+2)}2$ ✓.
- **Conclusion** : vraie pour tout $n\ge1$.

### Exemple 4 — Suite auxiliaire
$u_0=1$ et $u_{n+1}=\dfrac12u_n+3$.
- Point fixe : $\ell=\dfrac12\ell+3\iff\ell=6$.
- On pose $v_n=u_n-6$ : $v_{n+1}=\dfrac12u_n+3-6=\dfrac12(u_n-6)=\dfrac12v_n$. $(v_n)$ est géométrique de raison $\dfrac12$ et $v_0=-5$.
- $v_n=-5\left(\dfrac12\right)^n$, donc $u_n=6-5\left(\dfrac12\right)^n\to\mathbf6$.
*Vérification* : $u_1=\dfrac12+3=3{,}5$ et $6-\dfrac52=3{,}5$ ✓.

### Exemple 5 — Suite croissante majorée
$u_0=0$ et $u_{n+1}=\sqrt{2+u_n}$.
- **Majorée par 2** (récurrence) : $u_0=0\le2$ ; si $u_n\le2$ alors $u_{n+1}\le\sqrt4=2$.
- **Croissante** : $u_{n+1}-u_n=\dfrac{(2+u_n)-u_n^2}{\sqrt{2+u_n}+u_n}=\dfrac{(2-u_n)(1+u_n)}{\sqrt{2+u_n}+u_n}\ge0$ car $0\le u_n\le2$.
- Elle converge vers $\ell$ tel que $\ell=\sqrt{2+\ell}$, soit $\ell^2=\ell+2$, donc $\ell=2$ (la racine $-1$ est négative).

### Exemple 6 — Gendarmes
$u_n=\dfrac{2n+\sin n}{n}$. Comme $-1\le\sin n\le1$ : $\dfrac{2n-1}n\le u_n\le\dfrac{2n+1}n$. Les deux bornes tendent vers 2, donc $u_n\to\mathbf2$.

## ✏️ Exercices d'entraînement
**Exercice 1.** $(u_n)$ est arithmétique avec $u_5=11$ et $u_9=23$. Déterminer $r$, $u_0$ et $u_n$.

:::corrige
$r=\dfrac{23-11}{9-5}=3$. $u_0=u_5-5r=11-15=-4$. Donc $u_n=\mathbf{-4+3n}$.
:::

**Exercice 2.** Une ville compte 2 000 habitants et sa population augmente de 3 % par an. Donner $u_n$, la population dans 10 ans et le nombre d'années pour dépasser 4 000 habitants.

:::corrige
$u_n=2000\times1{,}03^n$ (suite géométrique de raison 1,03).
$u_{10}=2000\times1{,}03^{10}\approx2000\times1{,}3439\approx\mathbf{2\,688}$ habitants.
$2000\times1{,}03^n>4000\iff n\ln1{,}03>\ln2\iff n>\dfrac{0{,}6931}{0{,}02956}\approx23{,}4$. Il faut **24 ans**.
:::

**Exercice 3.** $u_0=5$ et $u_{n+1}=2u_n-3$. Exprimer $u_n$ et étudier la limite.

:::corrige
Point fixe : $\ell=2\ell-3\iff\ell=3$. On pose $v_n=u_n-3$ : $v_{n+1}=2u_n-6=2v_n$, géométrique de raison 2 avec $v_0=2$.
$v_n=2^{n+1}$, donc $u_n=\mathbf{3+2^{n+1}}$ et $u_n\to+\infty$ (la suite diverge).
*Vérification* : $u_1=2\times5-3=7=3+4$ ✓.
:::

**Exercice 4.** Montrer par récurrence que $2^n\ge n+1$ pour tout $n\in\mathbb{N}$, puis en déduire $\lim2^n$.

:::corrige
- **Initialisation** : $2^0=1\ge1$ ✓.
- **Hérédité** : si $2^n\ge n+1$, alors $2^{n+1}=2\times2^n\ge2n+2\ge n+2$ ✓.
- Conclusion : $2^n\ge n+1$ pour tout $n$. Comme $n+1\to+\infty$, **$2^n\to+\infty$**.
:::

**Exercice 5.** Calculer $S=1+3+9+\dots+3^{10}$.

:::corrige
Somme géométrique de raison 3 avec 11 termes : $S=\dfrac{3^{11}-1}{3-1}=\dfrac{177\,147-1}{2}=\mathbf{88\,573}$.
:::

**Exercice 6.** Étudier la suite $u_n=\dfrac{3n+1}{n+2}$ (sens de variation, borne, limite).

:::corrige
$u_{n+1}-u_n=\dfrac{(3n+4)(n+2)-(3n+1)(n+3)}{(n+2)(n+3)}=\dfrac{(3n^2+10n+8)-(3n^2+10n+3)}{(n+2)(n+3)}=\dfrac5{(n+2)(n+3)}>0$ : **croissante**.
$3-u_n=\dfrac{3n+6-3n-1}{n+2}=\dfrac5{n+2}>0$ : **majorée par 3**.
Donc elle converge ; $u_n=\dfrac{3+1/n}{1+2/n}\to\mathbf3$.
:::

## ⚠️ Pièges classiques du BAC
- Confondre $u_n$ (terme d'indice $n$) et $u_{n+1}$ ou $u_n+1$.
- **Compter les termes** : de $u_0$ à $u_n$, il y a $n+1$ termes (et non $n$).
- Oublier l'**initialisation** dans une récurrence (ou l'écrire sans la vérifier).
- Dire qu'une suite majorée converge : il faut aussi qu'elle soit **croissante**.
- Utiliser le point fixe $\ell=f(\ell)$ **avant** d'avoir prouvé que la suite converge.

## ✅ À retenir
- Arithmétique : $u_n=u_0+nr$ ; géométrique : $u_n=u_0q^n$.
- Somme géométrique : $\dfrac{1-q^{n+1}}{1-q}$.
- Récurrence : initialisation, hérédité, conclusion.
- Croissante + majorée $\Rightarrow$ converge ; limite = point fixe.
`
