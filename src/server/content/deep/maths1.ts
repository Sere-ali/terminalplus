// Leçons approfondies – Mathématiques Tle C et D (1/3)
// Format : cours détaillé, exemples corrigés, exercices avec corrigés masqués (:::corrige ... :::).

export const DEEP_MATHS_1: Record<string, string> = {}

DEEP_MATHS_1["nombres-complexes"] = String.raw`## 💡 L'essentiel en une phrase
Un **nombre complexe** s'écrit $z = a + ib$ avec $i^2 = -1$. Il permet de résoudre des équations comme $x^2+1=0$ et de décrire **points, distances, angles et rotations** du plan avec de simples calculs.

## 📚 1. Pourquoi inventer $i$ ?
Dans $\mathbb{R}$, l'équation $x^2 = -1$ n'a pas de solution, car un carré est toujours positif. On invente alors un nombre $i$ tel que $i^2=-1$. Tous les nombres de la forme $a+ib$ ($a$ et $b$ réels) forment l'ensemble $\mathbb{C}$.

## 📚 2. Forme algébrique
- $z = a + ib$ : $a=\text{Re}(z)$ est la **partie réelle**, $b=\text{Im}(z)$ la **partie imaginaire**.
- $z$ est **réel** si $b=0$, **imaginaire pur** si $a=0$.
- **Égalité** : $a+ib = a'+ib' \iff a=a'$ et $b=b'$.
- **Calculs** : on développe comme avec les lettres, puis on remplace $i^2$ par $-1$.

**Puissances de $i$** : elles se répètent par cycle de 4.
$$i^0=1,\quad i^1=i,\quad i^2=-1,\quad i^3=-i,\quad i^4=1$$
Pour calculer $i^n$ : on divise $n$ par 4 et on garde le reste.

### Le conjugué
$\bar z = a - ib$ (on change le signe de la partie imaginaire).
- $\overline{z+z'}=\bar z+\bar z'$ ; $\overline{zz'}=\bar z\,\bar z'$ ; $\overline{\left(\dfrac{z}{z'}\right)}=\dfrac{\bar z}{\bar z'}$ ; $\overline{z^n}=\bar z^{\,n}$.
- $z+\bar z = 2a$ (réel) et $z-\bar z = 2ib$ (imaginaire pur).
- $z$ est réel $\iff z=\bar z$ ; $z$ est imaginaire pur $\iff z=-\bar z$.
- $z\,\bar z = a^2+b^2$ (toujours un réel positif).

### Le module
$|z| = \sqrt{a^2+b^2}$, et donc $z\bar z=|z|^2$.
- $|zz'|=|z||z'|$ ; $\left|\dfrac{z}{z'}\right|=\dfrac{|z|}{|z'|}$ ; $|z^n|=|z|^n$ ; $|\bar z|=|z|$.
- **Inégalité triangulaire** : $|z+z'|\le |z|+|z'|$.

### Diviser par un complexe
On multiplie en haut et en bas par le **conjugué du dénominateur** pour faire disparaître $i$ en bas :
$$\frac{1}{a+ib}=\frac{a-ib}{a^2+b^2}$$

## 🗺️ 3. Le plan complexe
Le point $M(a\,;\,b)$ a pour **affixe** $z=a+ib$. Le vecteur $\vec u(a\,;\,b)$ a la même affixe.
- Pour $A$ et $B$ : le vecteur $\overrightarrow{AB}$ a pour affixe $z_B-z_A$ et $AB=|z_B-z_A|$.
- Milieu de $[AB]$ : affixe $\dfrac{z_A+z_B}{2}$.
- $\bar z$ est le **symétrique** de $z$ par rapport à l'axe des réels ; $-z$ est le symétrique par rapport à l'origine.

## 📐 4. Forme trigonométrique et exponentielle
Si $z\neq 0$, on pose $r=|z|$ et $\theta=\arg(z)$, c'est l'angle $(\vec u,\overrightarrow{OM})$ défini à $2\pi$ près :
$$z=r(\cos\theta+i\sin\theta)=r\,e^{i\theta}$$
avec $\cos\theta=\dfrac{a}{r}$ et $\sin\theta=\dfrac{b}{r}$.

**Méthode pour trouver la forme trigonométrique**
1. Calculer $r=\sqrt{a^2+b^2}$.
2. Écrire $z=r\left(\dfrac{a}{r}+i\dfrac{b}{r}\right)$.
3. Reconnaître un angle $\theta$ qui vérifie $\cos\theta=\dfrac ar$ et $\sin\theta=\dfrac br$ (angles du cercle trigonométrique).

**Règles à connaître**
- $\arg(zz')=\arg z+\arg z'$ et $\arg\dfrac{z}{z'}=\arg z-\arg z'$
- $\arg(z^n)=n\arg z$ et $\arg(\bar z)=-\arg z$
- $\arg(-z)=\arg z+\pi$
- **Moivre** : $(\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta$
- **Euler** : $\cos\theta=\dfrac{e^{i\theta}+e^{-i\theta}}{2}$ et $\sin\theta=\dfrac{e^{i\theta}-e^{-i\theta}}{2i}$

## 🧮 5. Équations dans $\mathbb{C}$
### Second degré $az^2+bz+c=0$ ($a\neq0$)
On calcule $\Delta=b^2-4ac$.
- $\Delta>0$ : deux solutions réelles $\dfrac{-b\pm\sqrt\Delta}{2a}$.
- $\Delta=0$ : une solution double $\dfrac{-b}{2a}$.
- $\Delta<0$ : deux solutions **complexes conjuguées** $\dfrac{-b\pm i\sqrt{-\Delta}}{2a}$.

### Racines carrées d'un complexe
Pour trouver $x+iy$ tel que $(x+iy)^2=a+ib$ : on écrit les trois égalités
$$x^2-y^2=a,\qquad 2xy=b,\qquad x^2+y^2=\sqrt{a^2+b^2}$$
On additionne et soustrait la première et la troisième pour trouver $x^2$ et $y^2$, puis le signe de $2xy$ donne les signes de $x$ et $y$.

### Racines $n$-ièmes
Les solutions de $z^n=re^{i\theta}$ sont
$$z_k=\sqrt[n]{r}\;e^{i\frac{\theta+2k\pi}{n}},\qquad k=0,1,\dots,n-1$$
Leurs images forment un **polygone régulier** à $n$ côtés, centré en $O$.

## 📍 6. Géométrie avec les complexes
Pour trois points distincts $A$, $B$, $C$, on regarde le quotient $q=\dfrac{z_C-z_A}{z_B-z_A}$ :
- $|q|=\dfrac{AC}{AB}$ et $\arg q=(\overrightarrow{AB},\overrightarrow{AC})$.
- $A,B,C$ **alignés** $\iff q\in\mathbb{R}$.
- $(AB)\perp(AC)\iff q$ imaginaire pur.
- $ABC$ **isocèle en $A$** $\iff |q|=1$ ; **équilatéral** $\iff q=e^{\pm i\pi/3}$.
- $ABC$ **rectangle isocèle en $A$** $\iff q=\pm i$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Calculs algébriques
Calculer $(2+3i)(1-i)$ puis $\dfrac{3+2i}{1-i}$.

$(2+3i)(1-i)=2-2i+3i-3i^2=2+i+3=\mathbf{5+i}$.

$\dfrac{3+2i}{1-i}=\dfrac{(3+2i)(1+i)}{(1-i)(1+i)}=\dfrac{3+3i+2i+2i^2}{1+1}=\dfrac{1+5i}{2}=\mathbf{\dfrac12+\dfrac52 i}$.

### Exemple 2 — Équation du second degré
Résoudre $z^2-2z+5=0$.

$\Delta=(-2)^2-4\times1\times5=-16<0$, donc $\sqrt{-\Delta}=4$.
$z=\dfrac{2\pm4i}{2}$, soit $\mathbf{z_1=1+2i}$ et $\mathbf{z_2=1-2i}$.

### Exemple 3 — Forme trigonométrique
Écrire $z=1+i\sqrt3$ sous forme exponentielle, puis calculer $z^6$.

$r=\sqrt{1+3}=2$. Donc $z=2\left(\dfrac12+i\dfrac{\sqrt3}{2}\right)$, avec $\cos\theta=\dfrac12$ et $\sin\theta=\dfrac{\sqrt3}2$, donc $\theta=\dfrac\pi3$.
$$z=2e^{i\pi/3}\qquad z^6=2^6e^{i6\pi/3}=64\,e^{2i\pi}=\mathbf{64}$$

### Exemple 4 — Racine carrée
Trouver les racines carrées de $3+4i$.

On cherche $x+iy$ avec $x^2-y^2=3$, $2xy=4$ et $x^2+y^2=\sqrt{9+16}=5$.
En additionnant : $2x^2=8$ donc $x^2=4$. En soustrayant : $2y^2=2$ donc $y^2=1$.
Comme $2xy=4>0$, $x$ et $y$ ont le même signe. Les racines carrées sont $\mathbf{2+i}$ et $\mathbf{-2-i}$.
*Vérification* : $(2+i)^2=4+4i-1=3+4i$ ✓.

### Exemple 5 — Linéarisation
Linéariser $\cos^3x$.

$\cos^3x=\left(\dfrac{e^{ix}+e^{-ix}}{2}\right)^3=\dfrac{e^{3ix}+3e^{ix}+3e^{-ix}+e^{-3ix}}{8}=\dfrac{2\cos3x+6\cos x}{8}$
$$\cos^3x=\frac{\cos3x+3\cos x}{4}$$

### Exemple 6 — Racines cubiques
Résoudre $z^3=8$ dans $\mathbb{C}$.

$8=8e^{i0}$, donc $z_k=2e^{i\frac{2k\pi}{3}}$ pour $k=0,1,2$ :
$z_0=2$ ; $z_1=2\left(-\dfrac12+i\dfrac{\sqrt3}{2}\right)=-1+i\sqrt3$ ; $z_2=-1-i\sqrt3$.
Les trois images forment un triangle équilatéral inscrit dans le cercle de centre $O$ et de rayon 2.

### Exemple 7 — Nature d'un triangle
Soit $A(1+i)$, $B(3+i)$, $C(1+3i)$. Quelle est la nature de $ABC$ ?

$z_B-z_A=2$ et $z_C-z_A=2i$, donc $q=\dfrac{2i}{2}=i$.
$|q|=1$ donc $AC=AB$ ; $\arg q=\dfrac\pi2$ donc l'angle en $A$ est droit.
$ABC$ est **rectangle isocèle en $A$**.

## ✏️ Exercices d'entraînement
Essaie de chercher seul(e) avant d'ouvrir le corrigé.

**Exercice 1.** Calculer $(1+2i)^2$, $\dfrac{2-i}{1+i}$ et $i^{2024}$.

:::corrige
- $(1+2i)^2=1+4i+4i^2=1+4i-4=\mathbf{-3+4i}$.
- $\dfrac{2-i}{1+i}=\dfrac{(2-i)(1-i)}{2}=\dfrac{2-2i-i+i^2}{2}=\dfrac{1-3i}{2}=\mathbf{\dfrac12-\dfrac32 i}$.
- $2024=4\times506$, donc $i^{2024}=(i^4)^{506}=\mathbf{1}$.
:::

**Exercice 2.** Résoudre dans $\mathbb{C}$ : $z^2+z+1=0$, puis écrire les solutions sous forme exponentielle.

:::corrige
$\Delta=1-4=-3$, donc $z=\dfrac{-1\pm i\sqrt3}{2}$.
$\cos\theta=-\dfrac12$ et $\sin\theta=\pm\dfrac{\sqrt3}2$ donnent $\theta=\pm\dfrac{2\pi}3$.
Les solutions sont $\mathbf{e^{2i\pi/3}}$ et $\mathbf{e^{-2i\pi/3}}$ (on les note $j$ et $\bar j$).
:::

**Exercice 3.** Écrire $\dfrac{1+i}{\sqrt3-i}$ sous forme exponentielle.

:::corrige
$1+i=\sqrt2\,e^{i\pi/4}$ et $\sqrt3-i=2\,e^{-i\pi/6}$.
Le quotient a pour module $\dfrac{\sqrt2}{2}$ et pour argument $\dfrac\pi4-\left(-\dfrac\pi6\right)=\dfrac{5\pi}{12}$.
$$\frac{1+i}{\sqrt3-i}=\frac{\sqrt2}{2}\,e^{i5\pi/12}$$
:::

**Exercice 4.** Déterminer l'ensemble des points $M(z)$ tels que $|z-i|=|z+1|$.

:::corrige
$|z-i|$ est la distance de $M$ au point $A(i)$, c'est-à-dire $(0\,;1)$. $|z+1|$ est la distance de $M$ au point $B(-1)$, c'est-à-dire $(-1\,;0)$.
Les points équidistants de $A$ et $B$ forment la **médiatrice** de $[AB]$. Avec $z=x+iy$ :
$x^2+(y-1)^2=(x+1)^2+y^2\iff -2y+1=2x+1\iff y=-x$.
L'ensemble est la **droite d'équation $y=-x$**.
:::

**Exercice 5.** Calculer $(1+i)^{10}$.

:::corrige
$1+i=\sqrt2\,e^{i\pi/4}$, donc $(1+i)^{10}=(\sqrt2)^{10}e^{i10\pi/4}=32\,e^{i5\pi/2}=32\,e^{i\pi/2}=\mathbf{32\,i}$.
:::

## ⚠️ Pièges classiques du BAC
- Oublier que $i^2=-1$ et laisser des $i^2$ dans le résultat.
- Écrire $\arg$ sans vérifier **à la fois** le cosinus et le sinus : $\tan\theta$ seule donne deux angles possibles.
- Un module est toujours **positif** : si tu trouves $r<0$, c'est une erreur.
- Dans $\Delta<0$, bien écrire $i\sqrt{-\Delta}$ et non $\sqrt\Delta$.
- Pour les racines $n$-ièmes, ne pas oublier **les $n$ solutions**.

## ✅ À retenir
- $z=a+ib$, $\bar z=a-ib$, $|z|^2=z\bar z$.
- Forme exponentielle : $z=re^{i\theta}$ ; produit : on multiplie les modules, on additionne les arguments.
- $\Delta<0$ : solutions conjuguées $\dfrac{-b\pm i\sqrt{-\Delta}}{2a}$.
- $\dfrac{z_C-z_A}{z_B-z_A}$ donne **distances, angles, alignement et orthogonalité**.
`

DEEP_MATHS_1["limites-continuite"] = String.raw`## 💡 L'essentiel en une phrase
Une **limite** décrit ce que devient $f(x)$ quand $x$ s'approche d'une valeur (ou part vers $\pm\infty$). La **continuité** dit qu'on peut tracer la courbe sans lever le crayon, ce qui garantit le **théorème des valeurs intermédiaires**.

## 📚 1. Comprendre la notion de limite
- $\displaystyle\lim_{x\to a}f(x)=\ell$ : quand $x$ est très proche de $a$, $f(x)$ est très proche de $\ell$.
- $\displaystyle\lim_{x\to+\infty}f(x)=\ell$ : quand $x$ devient très grand, $f(x)$ se rapproche de $\ell$. La droite $y=\ell$ est alors une **asymptote horizontale**.
- $\displaystyle\lim_{x\to a}f(x)=\pm\infty$ : la droite $x=a$ est une **asymptote verticale**.
- On peut aussi regarder à **gauche** ($x\to a^-$) et à **droite** ($x\to a^+$) : si elles diffèrent, la limite n'existe pas.

## 📚 2. Limites de référence
- $\lim_{x\to+\infty}x^n=+\infty$ ; $\lim_{x\to\pm\infty}\dfrac1{x^n}=0$.
- $\lim_{x\to0^+}\dfrac1x=+\infty$ ; $\lim_{x\to0^-}\dfrac1x=-\infty$.
- $\lim_{x\to+\infty}\sqrt x=+\infty$ ; $\lim_{x\to+\infty}\dfrac1{\sqrt x}=0$.
- $\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1$ ; $\displaystyle\lim_{x\to0}\frac{1-\cos x}{x^2}=\frac12$ ; $\displaystyle\lim_{x\to0}\frac{\tan x}{x}=1$.

## 📚 3. Opérations sur les limites
Les limites de $f+g$, $f\times g$ et $\dfrac fg$ se déduisent de celles de $f$ et $g$, **sauf** dans quatre cas appelés **formes indéterminées** :
$$+\infty-\infty,\qquad 0\times\infty,\qquad \frac\infty\infty,\qquad \frac00$$
Dans ces cas, il faut **transformer l'écriture** de $f(x)$ avant de conclure.

### Les méthodes pour lever une indétermination
1. **Polynôme ou fraction rationnelle en $\pm\infty$** : seul le terme de plus haut degré compte. On peut aussi factoriser par la plus grande puissance de $x$.
2. **Fraction en $a$ de forme $\frac00$** : factoriser numérateur et dénominateur par $(x-a)$, puis simplifier.
3. **Racines carrées** : multiplier par la **quantité conjuguée** : $\sqrt A-\sqrt B=\dfrac{A-B}{\sqrt A+\sqrt B}$.
4. **Trigonométrie** : se ramener aux limites de référence avec $\dfrac{\sin u}{u}$.

## 📚 4. Théorèmes de comparaison
- **Gendarmes** : si $g(x)\le f(x)\le h(x)$ près de $a$ (ou de $\infty$) et si $g$ et $h$ ont la **même limite** $\ell$, alors $f$ a pour limite $\ell$.
- Si $f\ge g$ et $\lim g=+\infty$, alors $\lim f=+\infty$.
- Si $f\le g$ et $\lim g=-\infty$, alors $\lim f=-\infty$.

## 📚 5. Asymptotes
Une droite d'équation $y=ax+b$ est **asymptote oblique** en $+\infty$ si $\displaystyle\lim_{x\to+\infty}[f(x)-(ax+b)]=0$.
- Pour trouver $a$ et $b$ : $a=\displaystyle\lim\frac{f(x)}{x}$ puis $b=\displaystyle\lim[f(x)-ax]$.
- Pour une fraction rationnelle, on fait la **division euclidienne**.
- **Position** de la courbe par rapport à l'asymptote : on étudie le **signe** de $f(x)-(ax+b)$.

## 📚 6. Continuité
- $f$ est **continue en $a$** si $\displaystyle\lim_{x\to a}f(x)=f(a)$.
- Les fonctions polynômes, rationnelles (là où elles existent), racines, sinus et cosinus sont continues sur leur ensemble de définition.
- Somme, produit, quotient (dénominateur non nul) et **composée** de fonctions continues sont continues.
- **Prolongement par continuité** : si $f$ n'est pas définie en $a$ mais a une limite finie $\ell$ en $a$, on pose $f(a)=\ell$ pour prolonger $f$.

### Théorème des valeurs intermédiaires (TVI)
Si $f$ est **continue** sur $[a\,;b]$, alors $f$ prend **toutes les valeurs** comprises entre $f(a)$ et $f(b)$.
En particulier, si $f(a)\times f(b)<0$, l'équation $f(x)=0$ a **au moins une solution** dans $]a\,;b[$.

### Corollaire (théorème de la bijection)
Si $f$ est continue et **strictement monotone** sur $[a\,;b]$, alors pour tout $k$ entre $f(a)$ et $f(b)$, l'équation $f(x)=k$ a **une solution unique** dans $[a\,;b]$.
Ce théorème sert à justifier qu'une équation a **exactement une** racine, puis à l'**encadrer** par balayage (dichotomie).

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Fraction rationnelle en $+\infty$
$\displaystyle\lim_{x\to+\infty}\frac{3x^2-2x+1}{x^2+5}$.
On garde les termes de plus haut degré : $\dfrac{3x^2}{x^2}=3$. **La limite est 3** (asymptote horizontale $y=3$).

### Exemple 2 — Forme $\frac00$
$\displaystyle\lim_{x\to2}\frac{x^2-4}{x-2}$.
$x^2-4=(x-2)(x+2)$, donc pour $x\neq2$ : $\dfrac{x^2-4}{x-2}=x+2\to4$. **La limite est 4.**

### Exemple 3 — Forme $\infty-\infty$ avec une racine
$\displaystyle\lim_{x\to+\infty}\left(\sqrt{x^2+1}-x\right)$.
On multiplie par la conjuguée : $\sqrt{x^2+1}-x=\dfrac{(x^2+1)-x^2}{\sqrt{x^2+1}+x}=\dfrac1{\sqrt{x^2+1}+x}$.
Le dénominateur tend vers $+\infty$, donc **la limite est 0**.

### Exemple 4 — Trigonométrie
$\displaystyle\lim_{x\to0}\frac{\sin3x}{x}=\lim_{x\to0}3\times\frac{\sin3x}{3x}=3\times1=\mathbf3$.

### Exemple 5 — Théorème des gendarmes
$\displaystyle\lim_{x\to+\infty}\frac{\sin x}{x}$.
Pour $x>0$ : $-1\le\sin x\le1$, donc $-\dfrac1x\le\dfrac{\sin x}{x}\le\dfrac1x$. Les deux bornes tendent vers 0, donc **la limite est 0**.

### Exemple 6 — Asymptotes
$f(x)=\dfrac{2x^2+3x-1}{x+1}$.
Division euclidienne : $2x^2+3x-1=(x+1)(2x+1)-2$, donc $f(x)=2x+1-\dfrac{2}{x+1}$.
- **Asymptote oblique** : $y=2x+1$, car $f(x)-(2x+1)=-\dfrac2{x+1}\to0$.
- **Asymptote verticale** $x=-1$ : en $-1^+$, le numérateur vaut $-2$ et le dénominateur tend vers $0^+$, donc $f\to-\infty$ ; en $-1^-$, $f\to+\infty$.
- **Position** : si $x>-1$, $-\dfrac2{x+1}<0$, la courbe est **sous** l'asymptote ; si $x<-1$, elle est **au-dessus**.

### Exemple 7 — Équation $f(x)=0$ et encadrement
Montrer que $x^3+x-1=0$ a une unique solution $\alpha$ dans $[0\,;1]$ et l'encadrer.
- $f(x)=x^3+x-1$ est continue (polynôme) et **strictement croissante** sur $\mathbb{R}$.
- $f(0)=-1<0$ et $f(1)=1>0$ : d'après le théorème de la bijection, il existe un unique $\alpha\in]0\,;1[$ tel que $f(\alpha)=0$.
- $f(0{,}6)=-0{,}184<0$ et $f(0{,}7)=0{,}043>0$, donc $0{,}6<\alpha<0{,}7$.
- $f(0{,}68)\approx-0{,}0056<0$ et $f(0{,}69)\approx0{,}0185>0$, donc $\mathbf{0{,}68<\alpha<0{,}69}$.

### Exemple 8 — Continuité d'une fonction par morceaux
$f(x)=x^2-1$ si $x\le2$ et $f(x)=ax+1$ si $x>2$. Pour quelle valeur de $a$ $f$ est-elle continue en 2 ?
$f(2)=3$ et $\lim_{x\to2^+}f(x)=2a+1$. Il faut $2a+1=3$, donc $\mathbf{a=1}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Calculer $\displaystyle\lim_{x\to+\infty}\frac{x^3-2x^2+1}{2x^3+x}$ et $\displaystyle\lim_{x\to+\infty}\left(\sqrt{x^2+x}-x\right)$.

:::corrige
- Plus haut degré : $\dfrac{x^3}{2x^3}=\dfrac12$. **Limite : $\dfrac12$.**
- Conjuguée : $\sqrt{x^2+x}-x=\dfrac{x}{\sqrt{x^2+x}+x}=\dfrac{1}{\sqrt{1+\frac1x}+1}\to\dfrac1{1+1}=\mathbf{\dfrac12}$.
:::

**Exercice 2.** Calculer $\displaystyle\lim_{x\to1}\frac{\sqrt x-1}{x-1}$.

:::corrige
Forme $\frac00$. On multiplie par la conjuguée : $\dfrac{\sqrt x-1}{x-1}=\dfrac{x-1}{(x-1)(\sqrt x+1)}=\dfrac1{\sqrt x+1}\to\mathbf{\dfrac12}$.
:::

**Exercice 3.** Montrer que l'équation $\cos x=x$ a une unique solution dans $[0\,;1]$.

:::corrige
Posons $g(x)=\cos x-x$, continue sur $[0\,;1]$. Elle est **strictement décroissante** (somme de $\cos x$ décroissante sur $[0\,;1]$ et de $-x$ décroissante).
$g(0)=1>0$ et $g(1)=\cos1-1<0$. D'après le théorème de la bijection, $g(x)=0$ a **une unique solution** dans $[0\,;1]$.
:::

**Exercice 4.** Soit $f(x)=\dfrac{x^2-3x+2}{x-1}$ pour $x\neq1$. Peut-on prolonger $f$ par continuité en 1 ?

:::corrige
$x^2-3x+2=(x-1)(x-2)$, donc $f(x)=x-2$ pour $x\neq1$, et $\lim_{x\to1}f(x)=-1$.
Oui : on pose $f(1)=\mathbf{-1}$.
:::

**Exercice 5.** Étudier les asymptotes de $f(x)=\dfrac{x^2+1}{x-1}$.

:::corrige
$x^2+1=(x-1)(x+1)+2$, donc $f(x)=x+1+\dfrac2{x-1}$.
- **Asymptote verticale** : $x=1$ (le dénominateur s'annule, le numérateur vaut 2).
- **Asymptote oblique** : $y=x+1$ en $\pm\infty$, car $f(x)-(x+1)=\dfrac2{x-1}\to0$.
- **Position** : la courbe est au-dessus si $x>1$ et en dessous si $x<1$.
:::

## ⚠️ Pièges classiques du BAC
- Conclure qu'une forme $\frac00$ ou $\infty-\infty$ « vaut 0 » ou « vaut 1 » sans la lever.
- Oublier de **distinguer** $x\to a^+$ et $x\to a^-$ pour une asymptote verticale.
- Utiliser le TVI **sans vérifier la continuité**, ou le corollaire **sans la stricte monotonie** : on n'obtient alors pas l'unicité.
- Écrire « $f(a)f(b)<0$ donc une solution unique » : le TVI donne **au moins une** solution.

## ✅ À retenir
- En $\pm\infty$, une fraction rationnelle se comporte comme le rapport de ses termes de plus haut degré.
- Forme $\frac00$ : factoriser ; différence de racines : conjuguée ; trigonométrie : $\dfrac{\sin u}{u}\to1$.
- Asymptote oblique : $f(x)-(ax+b)\to0$ ; position par le signe de cette différence.
- TVI + stricte monotonie $\Rightarrow$ **solution unique**, qu'on encadre ensuite.
`

DEEP_MATHS_1["derivabilite-etude-fonctions"] = String.raw`## 💡 L'essentiel en une phrase
La **dérivée** mesure la **vitesse de variation** d'une fonction : elle donne la pente de la tangente et le **sens de variation**, ce qui permet de faire une étude complète et de résoudre des problèmes d'optimisation.

## 📚 1. Nombre dérivé et tangente
- $f$ est **dérivable en $a$** si $\displaystyle\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$ existe et est finie. Cette limite est le **nombre dérivé** $f'(a)$.
- La **tangente** à la courbe au point d'abscisse $a$ a pour équation
$$y=f'(a)\,(x-a)+f(a)$$
- Dérivabilité **à droite** et **à gauche** : $f$ est dérivable en $a$ si les deux nombres dérivés existent et sont **égaux**.
- Si le taux d'accroissement tend vers $\pm\infty$, la courbe a une **tangente verticale** ($\sqrt x$ en 0). Si les deux demi-tangentes diffèrent, c'est un **point anguleux** ($|x|$ en 0).
- **Dérivable $\Rightarrow$ continue**, mais la réciproque est fausse.

## 📚 2. Dérivées usuelles
| $f(x)$ | $f'(x)$ |
|---|---|
| $k$ (constante) | $0$ |
| $x^n$ | $nx^{n-1}$ |
| $\dfrac1x$ | $-\dfrac1{x^2}$ |
| $\sqrt x$ | $\dfrac1{2\sqrt x}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $1+\tan^2x=\dfrac1{\cos^2x}$ |

## 📚 3. Opérations sur les dérivées
- $(u+v)'=u'+v'$ ; $(ku)'=ku'$
- $(uv)'=u'v+uv'$
- $\left(\dfrac1v\right)'=-\dfrac{v'}{v^2}$ ; $\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}$
- $(u^n)'=nu'u^{n-1}$ ; $(\sqrt u)'=\dfrac{u'}{2\sqrt u}$
- **Composée** : $\bigl(f(ax+b)\bigr)'=a\,f'(ax+b)$ ; plus généralement $(f\circ u)'=u'\times f'(u)$.

## 📚 4. Variations et extremums
- $f'\ge0$ sur un intervalle $\Rightarrow$ $f$ **croissante** ; $f'\le0\Rightarrow$ $f$ **décroissante** ; $f'=0\Rightarrow$ $f$ constante.
- Si $f'$ **s'annule en changeant de signe** en $a$, alors $f(a)$ est un **extremum local** (maximum si $+\to-$, minimum si $-\to+$).
- Attention : $f'(a)=0$ ne suffit pas (exemple : $x^3$ en 0).

## 📚 5. Plan d'une étude complète de fonction
1. **Ensemble de définition** (dénominateur non nul, radicande positif).
2. **Limites** aux bornes, donc **asymptotes**.
3. **Dérivée** et **signe** de $f'$ (factoriser !).
4. **Tableau de variations** avec les valeurs aux extremums.
5. **Tangentes** utiles et points particuliers (intersections avec les axes).
6. **Courbe** soignée avec asymptotes et tangentes.

## 📚 6. Inégalité des accroissements finis
Si $f$ est dérivable sur un intervalle $I$ et si $|f'(x)|\le k$ pour tout $x\in I$, alors pour tous $a,b\in I$ :
$$|f(b)-f(a)|\le k\,|b-a|$$
Elle sert à **encadrer des valeurs** et à étudier la convergence de suites $u_{n+1}=f(u_n)$.

## 📚 7. Dérivée d'une fonction réciproque
Si $f$ est continue et strictement monotone sur $I$, elle admet une **réciproque** $f^{-1}$. Si $f'(a)\ne0$ et $b=f(a)$ :
$$\left(f^{-1}\right)'(b)=\frac1{f'(a)}$$
Les courbes de $f$ et de $f^{-1}$ sont **symétriques par rapport à la droite $y=x$**.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Étude et tangente
$f(x)=x^3-3x^2+2$.
- $f'(x)=3x^2-6x=3x(x-2)$ : positive pour $x<0$ et $x>2$, négative sur $]0\,;2[$.
- $f$ est croissante sur $]-\infty\,;0]$, décroissante sur $[0\,;2]$, croissante sur $[2\,;+\infty[$.
- $f(0)=2$ (maximum local) et $f(2)=-2$ (minimum local).
- **Tangente en $x=1$** : $f(1)=0$ et $f'(1)=-3$, donc $y=-3(x-1)+0=\mathbf{-3x+3}$.

### Exemple 2 — Fonction rationnelle
$f(x)=\dfrac{x^2+1}{x-1}$ sur $\mathbb{R}\setminus\{1\}$.
$f'(x)=\dfrac{2x(x-1)-(x^2+1)}{(x-1)^2}=\dfrac{x^2-2x-1}{(x-1)^2}$.
Le numérateur s'annule en $x=1\pm\sqrt2$. D'où :
- $f$ croissante sur $]-\infty\,;1-\sqrt2]$ et sur $[1+\sqrt2\,;+\infty[$ ;
- $f$ décroissante sur $[1-\sqrt2\,;1[$ et sur $]1\,;1+\sqrt2]$.
- $f(1+\sqrt2)=2+2\sqrt2$ (minimum local) et $f(1-\sqrt2)=2-2\sqrt2$ (maximum local).

### Exemple 3 — Composée
$\bigl(\sin(2x+1)\bigr)'=2\cos(2x+1)$ et $\left(\sqrt{x^2+1}\right)'=\dfrac{2x}{2\sqrt{x^2+1}}=\dfrac{x}{\sqrt{x^2+1}}$.

### Exemple 4 — Dérivabilité en un point
$f(x)=|x|$ en 0 : le taux $\dfrac{|h|}{h}$ vaut $+1$ à droite et $-1$ à gauche. $f$ **n'est pas dérivable en 0** (point anguleux).
$f(x)=\sqrt x$ en 0 : le taux $\dfrac{\sqrt h}{h}=\dfrac1{\sqrt h}\to+\infty$ : **tangente verticale**.

### Exemple 5 — Inégalité des accroissements finis
Montrer que pour tous réels $a,b$ : $|\sin a-\sin b|\le|a-b|$.
$f(x)=\sin x$ vérifie $|f'(x)|=|\cos x|\le1$, donc $|\sin b-\sin a|\le1\times|b-a|$.

### Exemple 6 — Dérivée d'une réciproque
$f(x)=x^3+x$ est bijective de $\mathbb{R}$ dans $\mathbb{R}$ ($f'(x)=3x^2+1>0$). Comme $f(1)=2$ et $f'(1)=4$ :
$$(f^{-1})'(2)=\frac1{f'(1)}=\mathbf{\frac14}$$

### Exemple 7 — Problème d'optimisation
Parmi les rectangles de périmètre 40 m, lequel a l'aire maximale ?
Si un côté vaut $x$, l'autre vaut $20-x$ ; l'aire est $A(x)=x(20-x)=20x-x^2$ sur $[0\,;20]$.
$A'(x)=20-2x$, positive pour $x<10$ et négative après. Le maximum est atteint en $x=10$ : c'est un **carré de 10 m de côté**, d'aire $\mathbf{100\ m^2}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Dériver $f(x)=\dfrac{3x-1}{x+2}$, $g(x)=(x^2+1)^3$ et $h(x)=\sin x\cos x$.

:::corrige
- $f'(x)=\dfrac{3(x+2)-(3x-1)}{(x+2)^2}=\mathbf{\dfrac7{(x+2)^2}}$.
- $g'(x)=3\times2x\times(x^2+1)^2=\mathbf{6x(x^2+1)^2}$.
- $h'(x)=\cos x\cos x+\sin x(-\sin x)=\cos^2x-\sin^2x=\mathbf{\cos2x}$.
:::

**Exercice 2.** Étudier $f(x)=x^3-3x+1$ sur $\mathbb{R}$ et montrer que $f(x)=0$ a trois solutions.

:::corrige
$f'(x)=3x^2-3=3(x-1)(x+1)$. $f$ croît sur $]-\infty\,;-1]$, décroît sur $[-1\,;1]$, croît sur $[1\,;+\infty[$.
$f(-1)=3$ (maximum local) et $f(1)=-1$ (minimum local) ; $\lim_{-\infty}f=-\infty$ et $\lim_{+\infty}f=+\infty$.
$f(-2)=-1<0<f(-1)=3$ : une solution dans $]-2\,;-1[$ ; $f(-1)=3>0>f(1)=-1$ : une solution dans $]-1\,;1[$ (et même dans $]0\,;1[$ car $f(0)=1$) ; $f(1)=-1<0<f(2)=3$ : une solution dans $]1\,;2[$.
On applique à chaque intervalle le théorème de la bijection : **trois solutions exactement**.
**Tangente en 0** : $f(0)=1$, $f'(0)=-3$, donc $y=-3x+1$.
:::

**Exercice 3.** Soit $f(x)=x^2\sin\dfrac1x$ pour $x\neq0$ et $f(0)=0$. Montrer que $f$ est dérivable en 0.

:::corrige
Pour $h\neq0$ : $\dfrac{f(h)-f(0)}h=h\sin\dfrac1h$. Comme $\left|h\sin\dfrac1h\right|\le|h|\to0$, le théorème des gendarmes donne $\lim_{h\to0}\dfrac{f(h)-f(0)}{h}=0$. Donc $f$ est dérivable en 0 et $\mathbf{f'(0)=0}$.
:::

**Exercice 4.** Déterminer l'équation de la tangente à la courbe de $f(x)=\dfrac1x$ au point d'abscisse 2.

:::corrige
$f(2)=\dfrac12$ et $f'(x)=-\dfrac1{x^2}$, donc $f'(2)=-\dfrac14$.
$y=-\dfrac14(x-2)+\dfrac12=\mathbf{-\dfrac x4+1}$.
:::

**Exercice 5.** Une boîte sans couvercle à base carrée de côté $x$ doit avoir une surface totale de $12\ m^2$. Quel côté donne le volume maximal ?

:::corrige
Hauteur $h$ : surface $=x^2+4xh=12$, donc $h=\dfrac{12-x^2}{4x}$.
Volume : $V(x)=x^2h=\dfrac{x(12-x^2)}{4}=3x-\dfrac{x^3}4$ pour $0<x<\sqrt{12}$.
$V'(x)=3-\dfrac{3x^2}{4}=\dfrac34(4-x^2)$, qui s'annule en $x=2$, positive avant et négative après : maximum.
Pour $x=2$ m : $h=\dfrac{12-4}{8}=1$ m et $V=\mathbf{4\ m^3}$.
:::

## ⚠️ Pièges classiques du BAC
- Confondre **$f'(a)=0$** avec « extremum » : il faut un **changement de signe**.
- Oublier la **dérivée de la fonction intérieure** dans une composée : $(\sin(2x))'=2\cos2x$ et non $\cos2x$.
- Écrire une tangente avec $f(a)$ mais **sans $f'(a)$**, ou l'inverse.
- Un tableau de variations **sans limites** ni valeurs aux extremums est incomplet.
- Pour $(u/v)'$, ne pas **inverser** $u'v-uv'$.

## ✅ À retenir
- Tangente : $y=f'(a)(x-a)+f(a)$.
- Signe de $f'$ $\Rightarrow$ variations ; changement de signe $\Rightarrow$ extremum.
- $(u^n)'=nu'u^{n-1}$ ; $(\sqrt u)'=\dfrac{u'}{2\sqrt u}$ ; $\bigl(f(ax+b)\bigr)'=af'(ax+b)$.
- $(f^{-1})'(b)=\dfrac1{f'(a)}$ avec $b=f(a)$.
`

DEEP_MATHS_1["primitives"] = String.raw`## 💡 L'essentiel en une phrase
**Primitiver**, c'est faire le chemin inverse de la dérivation : trouver une fonction $F$ dont la dérivée est $f$. C'est l'outil de base du **calcul intégral** et des **équations différentielles**.

## 📚 1. Définition et unicité
$F$ est une **primitive** de $f$ sur un intervalle $I$ si $F'(x)=f(x)$ pour tout $x\in I$.
- Une fonction **continue** sur un intervalle admet des primitives.
- Si $F$ est une primitive de $f$, **toutes** les autres sont $F+C$, avec $C$ constante réelle.
- **Condition initiale** : pour $x_0$ et $y_0$ donnés, il existe **une seule** primitive $F$ avec $F(x_0)=y_0$. On détermine $C$ avec cette condition.

## 📚 2. Primitives usuelles
| $f(x)$ | Une primitive $F(x)$ |
|---|---|
| $a$ (constante) | $ax$ |
| $x^n$ ($n\ne-1$) | $\dfrac{x^{n+1}}{n+1}$ |
| $\dfrac1{x^2}$ | $-\dfrac1x$ |
| $\dfrac1{\sqrt x}$ | $2\sqrt x$ |
| $\cos x$ | $\sin x$ |
| $\sin x$ | $-\cos x$ |
| $\dfrac1{\cos^2x}=1+\tan^2x$ | $\tan x$ |
| $\cos(ax+b)$ | $\dfrac1a\sin(ax+b)$ |
| $\sin(ax+b)$ | $-\dfrac1a\cos(ax+b)$ |

## 📚 3. Opérations et formes à reconnaître
- **Linéarité** : une primitive de $f+g$ est $F+G$ ; une primitive de $kf$ est $kF$.
- Pour une fonction composée, on repère la forme « $u'\times\ldots$ » :

| Forme de $f$ | Une primitive |
|---|---|
| $u'u^n$ ($n\ne-1$) | $\dfrac{u^{n+1}}{n+1}$ |
| $\dfrac{u'}{u^2}$ | $-\dfrac1u$ |
| $\dfrac{u'}{\sqrt u}$ | $2\sqrt u$ |
| $\dfrac{u'}{u}$ | $\ln|u|$ |
| $u'\cos u$ | $\sin u$ |
| $u'\sin u$ | $-\cos u$ |

### Astuces pour les fonctions trigonométriques
- **Linéariser** : $\cos^2x=\dfrac{1+\cos2x}2$ et $\sin^2x=\dfrac{1-\cos2x}2$.
- $\sin x\cos x=\dfrac12\sin2x$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Fonction polynôme
$f(x)=3x^2-4x+5$. Une primitive : $F(x)=x^3-2x^2+5x$. Toutes les primitives : $F(x)+C$.

### Exemple 2 — Forme $u'/u^2$
$f(x)=\dfrac{x}{(x^2+1)^2}$. Avec $u=x^2+1$, $u'=2x$ : $f=\dfrac12\times\dfrac{u'}{u^2}$.
$$F(x)=-\frac1{2(x^2+1)}$$
*Vérification* : $F'(x)=\dfrac12(x^2+1)^{-2}\times2x=\dfrac{x}{(x^2+1)^2}$ ✓.

### Exemple 3 — Forme $u'/\sqrt u$
$f(x)=\dfrac{2x}{\sqrt{x^2+1}}$. Avec $u=x^2+1$ : $F(x)=\mathbf{2\sqrt{x^2+1}}$.

### Exemple 4 — Linéarisation
$f(x)=\cos^2x=\dfrac{1+\cos2x}2$. Primitive : $F(x)=\dfrac x2+\dfrac{\sin2x}4$.

### Exemple 5 — Condition initiale
Trouver la primitive $F$ de $f(x)=2x+1$ telle que $F(1)=3$.
$F(x)=x^2+x+C$ et $F(1)=2+C=3$, donc $C=1$ : $\mathbf{F(x)=x^2+x+1}$.

### Exemple 6 — Forme $u'/u$
$f(x)=\dfrac{2x+3}{x^2+3x+1}$ sur un intervalle où le dénominateur ne s'annule pas : le numérateur est la dérivée du dénominateur, donc $F(x)=\ln|x^2+3x+1|$.

### Exemple 7 — Produit $\sin x\cos x$
$f(x)=\sin x\cos x$ : avec $u=\sin x$, $f=u'u$, donc $F(x)=\dfrac{\sin^2x}{2}$.

### Exemple 8 — Application à la physique
Un mobile a une accélération constante $a=2\ m/s^2$, une vitesse initiale $v(0)=3\ m/s$ et une position initiale $x(0)=0$.
- Vitesse : primitive de $a$ : $v(t)=2t+C$, et $v(0)=3$ donne $v(t)=2t+3$.
- Position : primitive de $v$ : $x(t)=t^2+3t+C'$, et $x(0)=0$ donne $\mathbf{x(t)=t^2+3t}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Déterminer une primitive de $f(x)=x^3-\dfrac1{x^2}+\sqrt x$ sur $]0\,;+\infty[$.

:::corrige
$F(x)=\dfrac{x^4}4+\dfrac1x+\dfrac23x^{3/2}=\mathbf{\dfrac{x^4}4+\dfrac1x+\dfrac23x\sqrt x}$.
Vérification : $\left(\dfrac1x\right)'=-\dfrac1{x^2}$ ✓ et $\left(\dfrac23x^{3/2}\right)'=\sqrt x$ ✓.
:::

**Exercice 2.** Primitive de $g(x)=(3x+1)(3x^2+2x)^3$.

:::corrige
Avec $u=3x^2+2x$, $u'=6x+2=2(3x+1)$, donc $g=\dfrac12u'u^3$.
$G(x)=\dfrac12\times\dfrac{u^4}4=\mathbf{\dfrac{(3x^2+2x)^4}{8}}$.
:::

**Exercice 3.** Primitive de $h(x)=\sin2x+\cos3x$.

:::corrige
$H(x)=-\dfrac{\cos2x}2+\dfrac{\sin3x}3$.
:::

**Exercice 4.** Primitive de $k(x)=\dfrac{x}{\sqrt{1-x^2}}$ sur $]-1\,;1[$.

:::corrige
Avec $u=1-x^2$, $u'=-2x$, donc $k=-\dfrac12\times\dfrac{u'}{\sqrt u}$.
$K(x)=-\dfrac12\times2\sqrt u=\mathbf{-\sqrt{1-x^2}}$.
:::

**Exercice 5.** Déterminer la fonction $f$ telle que $f'(x)=3x^2-2$ et $f(0)=1$.

:::corrige
$f(x)=x^3-2x+C$, et $f(0)=C=1$. Donc $\mathbf{f(x)=x^3-2x+1}$.
:::

## ⚠️ Pièges classiques du BAC
- **Oublier la constante** $+C$ quand on demande « toutes les primitives ».
- Appliquer $\dfrac{x^{n+1}}{n+1}$ pour $n=-1$ : dans ce cas la primitive de $\dfrac1x$ est $\ln|x|$.
- Oublier le **facteur $\dfrac1a$** : une primitive de $\cos(3x)$ est $\dfrac13\sin3x$.
- Ne pas **vérifier** en dérivant le résultat : c'est le moyen le plus sûr de se corriger.
- Primitiver un **produit** comme le produit des primitives : c'est faux.

## ✅ À retenir
- $F'=f$ ; deux primitives diffèrent d'une **constante**.
- Reconnaître $u'u^n$, $\dfrac{u'}{u}$, $\dfrac{u'}{\sqrt u}$, $u'\cos u$ pour primitiver une composée.
- Linéariser $\cos^2$ et $\sin^2$ avant de primitiver.
- La condition initiale fixe **la** primitive cherchée.
`
