// Résumés de cours – Mathématiques Terminale C et D (programme éducatif ivoirien, MENA/DPFC)
// Chapitres communs aux séries C et D. Formules en LaTeX ($...$).

export const MATHS_1: Record<string, string> = {}

MATHS_1["nombres-complexes"] = String.raw`## 💡 L'essentiel en une phrase
Un **nombre complexe** s'écrit $z = a + ib$ avec $i^2 = -1$. Il sert à résoudre des équations comme $x^2+1=0$ et à décrire des **points, des rotations et des angles** dans le plan.

## 📚 1. Forme algébrique
- $z = a + ib$ avec $a,b \in \mathbb{R}$ : $a=\text{Re}(z)$ (partie réelle) et $b=\text{Im}(z)$ (partie imaginaire).
- **Conjugué** : $\bar z = a - ib$.
- **Module** : $|z|=\sqrt{a^2+b^2}$, et on a toujours $z\,\bar z = |z|^2$.
- **Égalité** : $a+ib=a'+ib' \iff a=a'$ et $b=b'$.
- **Quotient** : on multiplie en haut et en bas par le conjugué du dénominateur.
$$\frac{1}{a+ib}=\frac{a-ib}{a^2+b^2}$$

## 🗺️ 2. Le plan complexe
Le point $M(a;b)$ a pour **affixe** $z=a+ib$. Pour deux points $A$ et $B$ : $\;AB=|z_B-z_A|$ et le vecteur $\overrightarrow{AB}$ a pour affixe $z_B-z_A$.

## 📐 3. Forme trigonométrique et exponentielle
Si $z\neq 0$, on pose $r=|z|$ et $\theta=\arg(z)$ (à $2\pi$ près) :
$$z=r(\cos\theta+i\sin\theta)=r\,e^{i\theta}$$
avec $\cos\theta=\dfrac{a}{r}$ et $\sin\theta=\dfrac{b}{r}$.

**Règles à connaître**
- $|zz'|=|z||z'|$ et $\arg(zz')=\arg z+\arg z'$
- $\left|\dfrac{z}{z'}\right|=\dfrac{|z|}{|z'|}$ et $\arg\dfrac{z}{z'}=\arg z-\arg z'$
- $|z^n|=|z|^n$ et $\arg(z^n)=n\arg z$
- $\arg(\bar z)=-\arg z$
- **Moivre** : $(\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta$
- **Euler** : $\cos\theta=\dfrac{e^{i\theta}+e^{-i\theta}}{2}$ et $\sin\theta=\dfrac{e^{i\theta}-e^{-i\theta}}{2i}$ (servent à **linéariser** $\cos^n x$ et $\sin^n x$).

## 🧮 4. Équations dans $\mathbb{C}$
- **Second degré** $az^2+bz+c=0$ avec $\Delta=b^2-4ac<0$ : deux solutions conjuguées $\;z=\dfrac{-b\pm i\sqrt{-\Delta}}{2a}$.
- **Racines carrées** de $a+ib$ : on cherche $x+iy$ tel que $x^2-y^2=a$, $2xy=b$ et $x^2+y^2=\sqrt{a^2+b^2}$.
- **Racines $n$-ièmes** de $z=re^{i\theta}$ : $\;\sqrt[n]{r}\,e^{i\frac{\theta+2k\pi}{n}}$ pour $k=0,1,\dots,n-1$. Leurs images forment un **polygone régulier** à $n$ côtés.
- **Racines $n$-ièmes de l'unité** : $e^{\frac{2ik\pi}{n}}$.

## 📍 5. Complexes et géométrie
Pour trois points distincts $A,B,C$ :
$$\arg\frac{z_C-z_A}{z_B-z_A}=(\overrightarrow{AB},\overrightarrow{AC})\ [2\pi]$$
- $A,B,C$ **alignés** $\iff$ ce quotient est **réel**.
- $ABC$ **rectangle en $A$** $\iff$ ce quotient est **imaginaire pur**.
- $ABC$ **équilatéral** $\iff$ ce quotient vaut $e^{\pm i\pi/3}$.
- **Cercle** de centre $\Omega$ et de rayon $R$ : $|z-z_\Omega|=R$.
- **Médiatrice** de $[AB]$ : $|z-z_A|=|z-z_B|$.

## ✅ Exemples corrigés
**Exemple 1.** Forme trigonométrique de $z=1+i\sqrt3$.
$|z|=\sqrt{1+3}=2$, $\cos\theta=\frac12$, $\sin\theta=\frac{\sqrt3}{2}$ donc $\theta=\frac{\pi}{3}$ et $z=2e^{i\pi/3}$.
Alors $z^6=2^6e^{2i\pi}=64$.

**Exemple 2.** Résoudre $z^2-2z+5=0$.
$\Delta=4-20=-16$, donc $z=\dfrac{2\pm4i}{2}=1\pm2i$.

## ⚠️ Pièges fréquents
- Oublier que $i^2=-1$ (et non $+1$).
- Donner un argument sans vérifier **le cosinus ET le sinus** (le signe compte !).
- Écrire $\sqrt{-4}=2i$ : en Terminale, on écrit plutôt « $z^2=-4$ donc $z=\pm 2i$ ».

## 🏆 À retenir pour le BAC
Sache passer **sans hésiter** de la forme algébrique à la forme exponentielle, calculer une puissance avec Moivre, résoudre une équation du second degré dans $\mathbb{C}$ et traduire un alignement, un angle droit ou un cercle avec des complexes.`

MATHS_1["limites-continuite"] = String.raw`## 💡 L'essentiel en une phrase
Une **limite** dit vers quoi s'approche $f(x)$ quand $x$ s'approche d'une valeur (ou de $\pm\infty$). Une fonction est **continue** si on peut tracer sa courbe « sans lever le crayon ».

## 📚 1. Limites de référence
- $\lim_{x\to+\infty}x^n=+\infty$ et $\lim_{x\to+\infty}\dfrac1{x^n}=0$ (pour $n\ge1$).
- $\lim_{x\to0^+}\dfrac1x=+\infty$ et $\lim_{x\to0^-}\dfrac1x=-\infty$.
- $\lim_{x\to+\infty}\sqrt x=+\infty$.
- $\lim_{x\to0}\dfrac{\sin x}{x}=1$ et $\lim_{x\to0}\dfrac{1-\cos x}{x^2}=\dfrac12$.

## ✍️ 2. Calculer une limite : les 4 méthodes
Les **formes indéterminées** sont $\infty-\infty$, $0\times\infty$, $\dfrac\infty\infty$ et $\dfrac00$. Pour les lever :
1. **Factoriser** le terme de plus haut degré (polynômes et fractions).
2. Multiplier par l'**expression conjuguée** (présence de racines carrées).
3. Reconnaître un **nombre dérivé** : $\lim_{x\to a}\dfrac{f(x)-f(a)}{x-a}=f'(a)$.
4. Utiliser **l'encadrement** (théorème des gendarmes) ou la comparaison.

**Théorème des gendarmes.** Si $g(x)\le f(x)\le h(x)$ et si $g$ et $h$ ont la même limite $\ell$, alors $f$ aussi.

**Limite d'une composée.** Si $\lim_{x\to a}u(x)=b$ et $\lim_{X\to b}g(X)=\ell$, alors $\lim_{x\to a}g(u(x))=\ell$.

## 📈 3. Asymptotes et branches infinies
- $\lim_{x\to a}f(x)=\pm\infty$ : **asymptote verticale** $x=a$.
- $\lim_{x\to\pm\infty}f(x)=\ell$ : **asymptote horizontale** $y=\ell$.
- Si $\lim_{x\to+\infty}\dfrac{f(x)}{x}=0$ avec $f(x)\to\pm\infty$ : **branche parabolique** de direction $(OI)$.
- Si $\lim_{x\to+\infty}\dfrac{f(x)}{x}=\pm\infty$ : **branche parabolique** de direction $(OJ)$.

## 🔗 4. Continuité
- $f$ est **continue en $a$** si $\lim_{x\to a}f(x)=f(a)$.
- Les fonctions usuelles (polynômes, fractions rationnelles, racines, $\sin$, $\cos$…) sont continues sur leur ensemble de définition. Somme, produit, quotient et composée de fonctions continues sont continus.
- **Prolongement par continuité** : si $\lim_{x\to a}f(x)=\ell$ existe mais que $f(a)$ n'est pas défini, on pose $f(a)=\ell$.

## 🎯 5. Théorème des valeurs intermédiaires (TVI)
Si $f$ est **continue** sur $[a;b]$, alors $f$ prend **toutes** les valeurs comprises entre $f(a)$ et $f(b)$.

**Fonction continue et strictement monotone sur $I$**
- $f$ est une **bijection** de $I$ sur $f(I)$ ; sa réciproque $f^{-1}$ est continue et a le même sens de variation.
- Pour tout $m\in f(I)$, l'équation $f(x)=m$ a **une solution unique** dans $I$.
- **Corollaire** : si $f(a)\times f(b)<0$ sur $[a;b]$, alors $f(x)=0$ a **une solution unique** dans $]a;b[$.
- Valeur approchée : méthode de **balayage** ou de **dichotomie** (on coupe l'intervalle en deux, on garde la moitié où le signe change).

## 🔢 6. Racine $n$-ième et puissance rationnelle
$\sqrt[n]{x}=x^{\frac1n}$ et $x^{\frac pq}=\left(\sqrt[q]{x}\right)^p$ pour $x>0$. Les règles des puissances restent valables.

## ✅ Exemples corrigés
**Exemple 1.** $\lim_{x\to+\infty}\left(\sqrt{x^2+x}-x\right)$ est de la forme $\infty-\infty$. On multiplie par le conjugué :
$$\sqrt{x^2+x}-x=\frac{x}{\sqrt{x^2+x}+x}=\frac{1}{\sqrt{1+\frac1x}+1}\xrightarrow[x\to+\infty]{}\frac12$$

**Exemple 2.** Montrer que $x^3+x-1=0$ a une seule solution dans $[0;1]$.
$f(x)=x^3+x-1$ est continue et $f'(x)=3x^2+1>0$ donc $f$ est strictement croissante. Comme $f(0)=-1<0$ et $f(1)=1>0$, le corollaire du TVI donne **une unique solution** $\alpha\in]0;1[$.

## ⚠️ Pièges fréquents
- Écrire « $\infty-\infty=0$ » : c'est une forme **indéterminée**, il faut la lever.
- Oublier de dire que $f$ est **continue ET strictement monotone** avant d'invoquer l'unicité.

## 🏆 À retenir pour le BAC
Pour « montrer que l'équation $f(x)=0$ admet une solution unique », rédige toujours : continuité, stricte monotonie, valeurs aux bornes de signes contraires, conclusion avec le TVI.`

MATHS_1["derivabilite-etude-fonctions"] = String.raw`## 💡 L'essentiel en une phrase
La **dérivée** mesure la vitesse à laquelle une fonction change ; son signe donne les **variations**, et on l'utilise pour **étudier et tracer** une fonction.

## 📚 1. Nombre dérivé et tangente
- $f'(a)=\lim_{h\to0}\dfrac{f(a+h)-f(a)}{h}=\lim_{x\to a}\dfrac{f(x)-f(a)}{x-a}$.
- Tangente en $a$ : $\;y=f'(a)(x-a)+f(a)$.
- **Dérivable à droite / à gauche** : on calcule la limite seulement pour $x>a$ ou $x<a$. Si les deux nombres dérivés sont différents, la courbe a un **point anguleux** ; si une limite est infinie, la **demi-tangente est verticale**.
- Dérivable sur un intervalle $\Rightarrow$ continue sur cet intervalle (**la réciproque est fausse** : $|x|$ est continue en $0$ mais pas dérivable).

## ✍️ 2. Formules de dérivation
| Fonction | Dérivée |
|---|---|
| $x^n$ | $nx^{n-1}$ |
| $\sqrt x$ | $\dfrac1{2\sqrt x}$ |
| $\sin x$ ; $\cos x$ | $\cos x$ ; $-\sin x$ |
| $\tan x$ | $1+\tan^2x=\dfrac1{\cos^2x}$ |
| $u\times v$ | $u'v+uv'$ |
| $\dfrac uv$ | $\dfrac{u'v-uv'}{v^2}$ |
| $u^n$ | $nu'u^{n-1}$ |
| $\sqrt u$ | $\dfrac{u'}{2\sqrt u}$ |
| $u^\alpha$ ($\alpha\in\mathbb{Q}$) | $\alpha u'u^{\alpha-1}$ |
| $g\circ u$ | $u'\times g'\circ u$ |
| $\cos(ax+b)$ ; $\sin(ax+b)$ | $-a\sin(ax+b)$ ; $a\cos(ax+b)$ |

**Dérivée d'une réciproque.** Si $f$ est dérivable en $x_0$ avec $f'(x_0)\neq0$ et $y_0=f(x_0)$ :
$$(f^{-1})'(y_0)=\frac{1}{f'(x_0)}$$

## 📏 3. Inégalité des accroissements finis (IAF)
- **Forme 1** : si $|f'(x)|\le M$ sur $I$, alors $|f(b)-f(a)|\le M|b-a|$.
- **Forme 2** : si $m\le f'(x)\le M$ sur $[a;b]$, alors $m(b-a)\le f(b)-f(a)\le M(b-a)$.
Très utile pour **encadrer** une valeur et pour étudier la **convergence de suites** $u_{n+1}=f(u_n)$.

## 🔁 4. Dérivées successives et inflexion
$f''$ est la dérivée de $f'$ ; on note aussi $\dfrac{d^2f}{dx^2}$. Un **point d'inflexion** est un point où $f''$ **s'annule en changeant de signe** (la courbe traverse sa tangente).

## 🗂️ 5. Plan d'étude d'une fonction
1. Ensemble de définition, parité/périodicité éventuelles.
2. Limites aux bornes, **asymptotes** et branches infinies.
3. Dérivée $f'$ et son **signe**.
4. **Tableau de variations**.
5. Équation de la tangente aux points utiles ; points d'inflexion.
6. **Tracé** de la courbe (avec asymptotes et tangentes).

## ✅ Exemple corrigé
Étudions $f(x)=x^3-3x$ sur $\mathbb{R}$.
- $\lim_{x\to+\infty}f=+\infty$ et $\lim_{x\to-\infty}f=-\infty$.
- $f'(x)=3x^2-3=3(x-1)(x+1)$ : $f'>0$ sur $]-\infty;-1[\cup]1;+\infty[$ et $f'<0$ sur $]-1;1[$.
- Maximum local $f(-1)=2$, minimum local $f(1)=-2$.
- $f''(x)=6x$ s'annule en $0$ en changeant de signe : **inflexion** en $O(0;0)$.

## ⚠️ Pièges fréquents
- Oublier la dérivée **intérieure** $u'$ dans $(u^n)'$, $(\sqrt u)'$.
- Confondre signe de $f'$ et signe de $f$.
- Conclure à la dérivabilité sans étudier le **point de raccordement** d'une fonction définie par morceaux.

## 🏆 À retenir pour le BAC
Dérive proprement, factorise $f'$ pour étudier son signe, dresse un tableau de variations propre, et n'oublie pas de **justifier** chaque ligne.`

MATHS_1["primitives"] = String.raw`## 💡 L'essentiel en une phrase
Une **primitive** de $f$ est une fonction $F$ dont la dérivée est $f$ : c'est l'opération **inverse de la dérivation**.

## 📚 1. Définition et propriétés
- $F$ est une primitive de $f$ sur $I$ si $F'(x)=f(x)$ pour tout $x\in I$.
- **Toute fonction continue** sur un intervalle admet des primitives.
- Si $F$ en est une, toutes les primitives sont $F(x)+k$ avec $k\in\mathbb{R}$.
- **Unicité** : il existe **une seule** primitive qui prend la valeur $y_0$ en $x_0$.
- 💡 Pour **vérifier** un calcul de primitive, il suffit de **dériver** le résultat.

## 🧾 2. Primitives des fonctions de référence
| $f(x)$ | Une primitive $F(x)$ |
|---|---|
| $a$ (constante) | $ax$ |
| $x^n$ ($n\neq-1$) | $\dfrac{x^{n+1}}{n+1}$ |
| $\dfrac1{x^2}$ | $-\dfrac1x$ |
| $\dfrac1{\sqrt x}$ | $2\sqrt x$ |
| $\cos x$ | $\sin x$ |
| $\sin x$ | $-\cos x$ |
| $1+\tan^2x=\dfrac1{\cos^2x}$ | $\tan x$ |
| $\dfrac1x$ | $\ln\vert x\vert$ *(vu au chapitre des logarithmes)* |
| $e^x$ | $e^x$ *(vu au chapitre des exponentielles)* |

## 🧩 3. Formules avec une fonction $u$ dérivable
| Forme de $f$ | Primitive |
|---|---|
| $u'+v'$ ; $\lambda u'$ | $u+v$ ; $\lambda u$ |
| $u'\,u^m$ ($m\neq-1$) | $\dfrac{u^{m+1}}{m+1}$ |
| $\dfrac{u'}{u^r}$ ($r\neq1$) | $\dfrac{u^{1-r}}{1-r}$ (cas $r=2$ : $-\dfrac1u$) |
| $\dfrac{u'}{\sqrt u}$ | $2\sqrt u$ |
| $u'\cos u$ ; $u'\sin u$ | $\sin u$ ; $-\cos u$ |
| $v'\times(u'\circ v)$ | $u\circ v$ |
| $\dfrac{u'}{u}$ | $\ln\vert u\vert$ |
| $u'e^u$ | $e^u$ |

## 🛠️ 4. Astuces de calcul
- **Linéariser** : $\cos^2x=\dfrac{1+\cos2x}2$ et $\sin^2x=\dfrac{1-\cos2x}2$.
- **Décomposer** une fraction en éléments simples (l'énoncé guide l'élève).
- Pour $f(ax+b)$ : une primitive est $\dfrac1a F(ax+b)$.

## ✅ Exemples corrigés
**Exemple 1.** Primitive de $f(x)=3x^2-4x+5$ : $F(x)=x^3-2x^2+5x+k$.

**Exemple 2.** Primitive de $f(x)=\dfrac{2x}{x^2+1}$ qui vaut $3$ en $0$.
On reconnaît $\dfrac{u'}{u}$ avec $u=x^2+1>0$ : $F(x)=\ln(x^2+1)+k$. Comme $F(0)=3$, on trouve $k=3$ :
$$F(x)=\ln(x^2+1)+3$$

**Exemple 3.** Primitive de $f(x)=\sin x\cos^2x$ : c'est $-u'u^2$ avec $u=\cos x$, donc $F(x)=-\dfrac{\cos^3x}{3}$.

## ⚠️ Pièges fréquents
- Oublier la **constante** $k$ quand on demande « les primitives ».
- Appliquer $\dfrac{x^{n+1}}{n+1}$ quand $n=-1$ (c'est $\ln\vert x\vert$ dans ce cas).
- Ne pas faire apparaître **exactement** $u'$ : ajuste avec un coefficient constant.

## 🏆 À retenir pour le BAC
Apprends le tableau par cœur et **entraîne-toi à reconnaître la forme $u'\times(\dots)$** : c'est la compétence clé pour les intégrales.`

MATHS_1["fonctions-logarithmes"] = String.raw`## 💡 L'essentiel en une phrase
Le **logarithme népérien** $\ln$ transforme les produits en sommes ; c'est la primitive de $\dfrac1x$ sur $]0;+\infty[$ qui s'annule en $1$.

## 📚 1. Définition et propriétés
$\ln$ est définie sur $]0;+\infty[$, avec $\ln1=0$ et $\ln e=1$ (où $e\approx2{,}718$).
Pour $a>0$, $b>0$ et $n\in\mathbb{Z}$ :
- $\ln(ab)=\ln a+\ln b$
- $\ln\dfrac1a=-\ln a$ et $\ln\dfrac ab=\ln a-\ln b$
- $\ln(a^n)=n\ln a$ et $\ln\sqrt a=\dfrac12\ln a$
- $\ln a=\ln b\iff a=b$ et $\ln a<\ln b\iff a<b$ (**$\ln$ est strictement croissante**)

## 📈 2. Étude de la fonction $\ln$
- **Dérivée** : $(\ln x)'=\dfrac1x>0$.
- **Limites** : $\lim_{x\to+\infty}\ln x=+\infty$ ; $\lim_{x\to0^+}\ln x=-\infty$.
- $\lim_{x\to+\infty}\dfrac{\ln x}{x}=0$ ; $\lim_{x\to0^+}x\ln x=0$ ; $\lim_{x\to0}\dfrac{\ln(1+x)}{x}=1$.
- Signe : $\ln x<0$ si $0<x<1$ et $\ln x>0$ si $x>1$.
- Inégalité utile : $\ln x\le x-1$ pour tout $x>0$.
- La courbe a une **asymptote verticale** $x=0$ et une **branche parabolique** de direction $(OI)$.

## 🔧 3. Fonctions composées avec $\ln$
- $(\ln u)'=\dfrac{u'}{u}$ (avec $u>0$) et $(\ln\vert u\vert)'=\dfrac{u'}{u}$ (avec $u\neq0$).
- **Primitive** de $\dfrac{u'}{u}$ : $\ln\vert u\vert$.

## 🔟 4. Autres logarithmes
- **Décimal** : $\log x=\dfrac{\ln x}{\ln10}$ (utile en chimie : $\text{pH}=-\log[\text{H}_3\text{O}^+]$).
- **De base $a$** ($a>0,\ a\neq1$) : $\log_ax=\dfrac{\ln x}{\ln a}$.

## ✍️ 5. Équations et inéquations
**Toujours commencer par l'ensemble de définition** (ce qui est dans $\ln$ doit être $>0$).
- $\ln x=k\iff x=e^k$.
- Résoudre $q^n\ge a$ avec $q>1$ : $n\ge\dfrac{\ln a}{\ln q}$. **Attention :** si $0<q<1$, $\ln q<0$ et le **sens de l'inégalité s'inverse**.

## ✅ Exemple corrigé (situation du programme)
Après avoir examiné $n$ élèves, la probabilité d'avoir au moins un élève non atteint est $1-0{,}325^n$. À partir de quel $n$ dépasse-t-elle $0{,}98$ ?
$$1-0{,}325^n>0{,}98\iff0{,}325^n<0{,}02\iff n\ln0{,}325<\ln0{,}02$$
Comme $\ln0{,}325<0$, on divise **en changeant le sens** : $n>\dfrac{\ln0{,}02}{\ln0{,}325}\approx3{,}48$. Il faut donc **$n\ge4$ élèves**.

## ⚠️ Pièges fréquents
- $\ln(a+b)\neq\ln a+\ln b$ !
- Oublier le domaine de définition avant de résoudre.
- Ne pas inverser le sens de l'inégalité en divisant par un nombre négatif.

## 🏆 À retenir pour le BAC
Maîtrise les propriétés algébriques, les limites de référence, la dérivée de $\ln u$ et la résolution de $q^n\ge a$.`

MATHS_1["fonctions-exponentielles"] = String.raw`## 💡 L'essentiel en une phrase
La fonction **exponentielle** $e^x$ est la **réciproque** de $\ln$ ; elle modélise les phénomènes qui **croissent ou décroissent très vite** (population, médicament, radioactivité…).

## 📚 1. Définition et propriétés
- $e^x$ est définie sur $\mathbb{R}$, et $e^x>0$ pour tout $x$.
- $y=e^x\iff x=\ln y$ (pour $y>0$) ; $\ln(e^x)=x$ et $e^{\ln y}=y$.
- $e^0=1$ ; $e^{a+b}=e^ae^b$ ; $e^{-a}=\dfrac1{e^a}$ ; $\dfrac{e^a}{e^b}=e^{a-b}$ ; $(e^a)^n=e^{na}$.
- $e^a=e^b\iff a=b$ et $e^a<e^b\iff a<b$ (**strictement croissante**).
- **Dérivée** : $(e^x)'=e^x$ ; $(e^u)'=u'e^u$ ; primitive de $u'e^u$ : $e^u$.

## 📈 2. Limites et croissances comparées
- $\lim_{x\to+\infty}e^x=+\infty$ ; $\lim_{x\to-\infty}e^x=0$ (asymptote $y=0$).
- $\lim_{x\to+\infty}\dfrac{e^x}{x}=+\infty$ ; $\lim_{x\to-\infty}xe^x=0$ ; $\lim_{x\to0}\dfrac{e^x-1}{x}=1$.
- **Croissances comparées** ($\alpha>0$) :
$$\lim_{x\to+\infty}\frac{\ln x}{x^\alpha}=0\qquad\lim_{x\to+\infty}\frac{e^x}{x^\alpha}=+\infty\qquad\lim_{x\to0^+}x^\alpha\ln x=0$$
Retiens : **l'exponentielle l'emporte sur la puissance, qui l'emporte sur le logarithme**.

## 🔢 3. Exponentielle de base $a$ et puissances réelles
- $a^x=e^{x\ln a}$ pour $a>0$ ($a\neq1$). Si $a>1$ : croissante ; si $0<a<1$ : décroissante.
- $x^\alpha=e^{\alpha\ln x}$ pour $x>0$ ; sa dérivée est $(x^\alpha)'=\alpha x^{\alpha-1}$.

## ✍️ 4. Équations et inéquations
- $e^x=k$ ($k>0$) $\iff x=\ln k$ ; $e^x\le k\iff x\le\ln k$.
- Pour $e^{2x}-3e^x+2=0$ : poser $X=e^x$ (avec $X>0$) et résoudre $X^2-3X+2=0$.

## ✅ Exemple corrigé (situation du programme)
La masse de médicament dans le sang est $M(t)=50\,e^{-0{,}75t}$ (en mg, $t$ en heures).
- $M$ est **décroissante** car $M'(t)=-37{,}5\,e^{-0{,}75t}<0$, et $\lim_{t\to+\infty}M(t)=0$.
- **Demi-vie** (quand il reste la moitié) : $50e^{-0{,}75t}=25\iff e^{-0{,}75t}=\dfrac12\iff t=\dfrac{\ln2}{0{,}75}\approx0{,}92\ \text{h}$ (environ 55 minutes).

## ⚠️ Pièges fréquents
- $e^{a+b}\neq e^a+e^b$ ; $e^{ab}\neq e^a\times e^b$.
- Oublier que $e^x>0$ : l'équation $e^x=-2$ n'a **aucune** solution.
- Oublier de poser la condition $X>0$ après un changement de variable.

## 🏆 À retenir pour le BAC
Sache dériver $e^u$, lever les formes indéterminées avec les **croissances comparées**, étudier une fonction contenant $e^x$ et résoudre une équation en posant $X=e^x$.`
