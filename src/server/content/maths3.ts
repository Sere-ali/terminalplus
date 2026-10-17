// Résumés de cours – Mathématiques Terminale C et D (géométrie, transformations, arithmétique)

export const MATHS_3: Record<string, string> = {}

MATHS_3["complexes-geometrie"] = String.raw`## 💡 L'essentiel en une phrase
Les **nombres complexes** traduisent les **transformations du plan** (translation, rotation, homothétie, similitude) par de simples formules $z'=az+b$.

## 📚 1. Écritures complexes à connaître
$M(z)$ a pour image $M'(z')$.
| Transformation | Écriture complexe |
|---|---|
| **Translation** de vecteur d'affixe $b$ | $z'=z+b$ |
| **Symétrie centrale** de centre $\Omega(\omega)$ | $z'=2\omega-z$ |
| **Symétrie** par rapport à l'axe des abscisses | $z'=\bar z$ |
| **Symétrie** par rapport à l'axe des ordonnées | $z'=-\bar z$ |
| **Homothétie** de centre $\Omega$, rapport $k$ | $z'-\omega=k\,(z-\omega)$ |
| **Rotation** de centre $\Omega$, angle $\theta$ | $z'-\omega=e^{i\theta}(z-\omega)$ |
| **Similitude directe** | $z'=az+b$ avec $a\neq0$ |

## 🧭 2. Éléments d'une similitude $z'=az+b$
- Si $a=1$ : c'est une **translation** de vecteur d'affixe $b$.
- Si $a\neq1$ : **centre** $\omega=\dfrac{b}{1-a}$ (point invariant), **rapport** $k=|a|$, **angle** $\theta=\arg a$.
- **Détermination** par deux points et leurs images ($A\to A'$, $B\to B'$) : $a=\dfrac{z_{B'}-z_{A'}}{z_B-z_A}$ puis $b=z_{A'}-az_A$.

## 📍 3. Caractérisations complexes (rappels)
- $A,B,C$ **alignés** $\iff\dfrac{z_C-z_A}{z_B-z_A}\in\mathbb{R}$.
- $AB\perp AC\iff\dfrac{z_C-z_A}{z_B-z_A}$ est **imaginaire pur**.
- **Droites parallèles** $(AB)\parallel(CD)\iff\dfrac{z_B-z_A}{z_D-z_C}\in\mathbb{R}$.
- **Points cocycliques** (ou alignés) $\iff\dfrac{z_C-z_A}{z_C-z_B}\Big/\dfrac{z_D-z_A}{z_D-z_B}\in\mathbb{R}$.
- **Triangle équilatéral** : $\dfrac{z_C-z_A}{z_B-z_A}=e^{\pm i\pi/3}$.

## ✍️ 4. Lieux géométriques
Pour trouver l'ensemble des points $M$ : écris $z=x+iy$, traduis la condition avec $|\cdot|$ ou $\arg$, puis reconnais un **cercle**, une **droite** ou un **segment**.
Exemples : $|z-z_A|=r$ est un cercle de centre $A$ ; $|z-z_A|=|z-z_B|$ est la médiatrice de $[AB]$.

## ✅ Exemples corrigés
**Exemple 1.** Rotation de centre $\Omega(1)$ et d'angle $\dfrac\pi2$ : $z'-1=i(z-1)$ soit $z'=iz+1-i$. L'image de $2+i$ est $i(2+i)+1-i=i$.

**Exemple 2.** Éléments de $z'=(1+i)z+2$ : $a=1+i$, donc $k=\sqrt2$ et $\theta=\dfrac\pi4$. Le centre est $\omega=\dfrac2{1-(1+i)}=\dfrac2{-i}=2i$.

## ⚠️ Pièges fréquents
- Confondre le **centre** (point invariant) avec $b$.
- Oublier que le rapport est $|a|$ et l'angle $\arg a$.
- Appliquer $z'=e^{i\theta}z$ quand le centre n'est pas l'origine.

## 🏆 À retenir pour le BAC
Reconnaître la forme $z'=az+b$ et en déduire **nature et éléments** ; écrire la rotation ou l'homothétie avec le centre ; savoir passer des points-images à $a$ et $b$.`

MATHS_3["barycentre-lignes-niveau"] = String.raw`## 💡 L'essentiel en une phrase
Le **barycentre** est le « point d'équilibre » de points affectés de coefficients (masses) ; il sert à **prouver des alignements** et à **trouver des lieux géométriques** (lignes de niveau).

## 📚 1. Définition et propriétés
Pour des points pondérés $(A_i;\alpha_i)$ avec $\sum\alpha_i\neq0$, le barycentre $G$ vérifie
$$\sum\alpha_i\overrightarrow{GA_i}=\vec0\iff\overrightarrow{OG}=\frac{\sum\alpha_i\overrightarrow{OA_i}}{\sum\alpha_i}\quad\text{(pour tout }O\text{)}$$
- **Isobarycentre** : tous les coefficients sont égaux (centre de gravité).
- **Homogénéité** : on peut multiplier tous les coefficients par un même réel non nul.
- **Barycentres partiels** : on peut remplacer des points par leur barycentre partiel affecté de la somme de leurs coefficients.
- **Coordonnées** : $x_G=\dfrac{\sum\alpha_ix_i}{\sum\alpha_i}$, de même pour $y_G$ et $z_G$.
- Trois points non alignés : leurs barycentres forment **tout le plan**.

## 🔧 2. Réduction de sommes
- Si $\sum\alpha_i\neq0$ : $\;\sum\alpha_i\overrightarrow{MA_i}=\left(\sum\alpha_i\right)\overrightarrow{MG}$ et
$$\sum\alpha_iMA_i^2=\left(\sum\alpha_i\right)MG^2+\sum\alpha_iGA_i^2$$
- Si $\sum\alpha_i=0$ : $\sum\alpha_i\overrightarrow{MA_i}$ est un **vecteur constant**.

## 📈 3. Lignes de niveau
**Ligne de niveau $k$** : ensemble des $M$ tels que $f(M)=k$.
- $f(M)=\sum\alpha_iMA_i^2$ avec $\sum\alpha_i\neq0$ : **cercle** de centre $G$, **un point** ou **ensemble vide** (selon le signe de $k-\sum\alpha_iGA_i^2$ ; avec $\sum\alpha_i=0$ on obtient une **droite**).
- $f(M)=\dfrac{MA}{MB}=k$ : $k=1$ médiatrice de $[AB]$ ; $k\neq1$ **cercle** dont le centre est sur $(AB)$.
- $f(M)=\text{mes}(\overrightarrow{MA},\overrightarrow{MB})$ : **arc de cercle** passant par $A$ et $B$ (ou une droite si l'angle vaut $0$ ou $\pi$).

## ✅ Exemples corrigés
**Exemple 1 (bain de bébé).** On veut $30$ L d'eau à $34\,^\circ\text{C}$ avec de l'eau à $100\,^\circ\text{C}$ ($x$ L) et à $10\,^\circ\text{C}$ ($30-x$ L). La température est le barycentre pondéré par les volumes :
$$100x+10(30-x)=34\times30\Rightarrow90x=720\Rightarrow x=8\ \text{L}$$

**Exemple 2.** $AB=3$. Ensemble des $M$ tels que $MA^2+2MB^2=15$ : $G$ barycentre de $(A;1),(B;2)$ donc $AG=2$ et $GB=1$.
$MA^2+2MB^2=3MG^2+GA^2+2GB^2=3MG^2+6$. L'égalité devient $MG^2=3$ : **cercle de centre $G$ et de rayon $\sqrt3$**.

## ⚠️ Pièges fréquents
- Oublier de vérifier que $\sum\alpha_i\neq0$.
- Se tromper de signe dans la réduction de $\sum\alpha_iMA_i^2$.
- Confondre barycentre de $(A;1),(B;2)$ (plus près de $B$) et de $(A;2),(B;1)$.

## 🏆 À retenir pour le BAC
Réduis toujours la somme avec $G$, puis **reconnais la ligne de niveau**. Pour un alignement, montre qu'un point est barycentre de deux autres.`

MATHS_3["coniques"] = String.raw`## 💡 L'essentiel en une phrase
Les **coniques** (parabole, ellipse, hyperbole) sont des courbes données par une équation du second degré ; on les étudie à partir de leur **équation réduite**.

## 📚 1. Équations réduites et éléments
| | **Parabole** | **Ellipse** | **Hyperbole** |
|---|---|---|---|
| Équation | $y^2=2px$ | $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ ($a>b>0$) | $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ |
| Sommets | $O(0;0)$ | $(\pm a;0)$ et $(0;\pm b)$ | $(\pm a;0)$ |
| $c$ (demi-distance focale) | — | $c^2=a^2-b^2$ | $c^2=a^2+b^2$ |
| Foyers | $F\left(\dfrac p2;0\right)$ | $(\pm c;0)$ | $(\pm c;0)$ |
| Directrices | $x=-\dfrac p2$ | $x=\pm\dfrac{a^2}{c}$ | $x=\pm\dfrac{a^2}{c}$ |
| Excentricité $e$ | $e=1$ | $e=\dfrac ca<1$ | $e=\dfrac ca>1$ |
| Autre | axe focal $(Ox)$ | axe focal $(Ox)$ | asymptotes $y=\pm\dfrac bax$ |

Définition par foyer et directrice : $\dfrac{MF}{d(M,\text{directrice})}=e$.

## ✍️ 2. Réduire l'équation $ax^2+by^2+2cx+2dy+e=0$
1. **Regrouper** les termes en $x$ et ceux en $y$.
2. Écrire sous **forme canonique** (compléter le carré).
3. Reconnaître l'équation réduite dans le repère translaté de centre $\Omega(x_0;y_0)$ avec $X=x-x_0$, $Y=y-y_0$.
4. Si $a$ et $b$ ont même signe : ellipse (ou cercle si $a=b$) ; de signes opposés : hyperbole ; un seul des deux nul : parabole.

## ✅ Exemple corrigé
$x^2+4y^2-2x+8y-11=0$.
$(x-1)^2-1+4\left[(y+1)^2-1\right]-11=0\iff(x-1)^2+4(y+1)^2=16\iff\dfrac{(x-1)^2}{16}+\dfrac{(y+1)^2}{4}=1$.
**Ellipse** de centre $\Omega(1;-1)$ avec $a=4$, $b=2$, $c=\sqrt{12}=2\sqrt3$, foyers $(1\pm2\sqrt3;-1)$ et $e=\dfrac{\sqrt3}{2}$.

## ⚠️ Pièges fréquents
- Mélanger $c^2=a^2-b^2$ (ellipse) et $c^2=a^2+b^2$ (hyperbole).
- Oublier de revenir au repère d'origine pour donner les coordonnées finales.
- Oublier de diviser par le coefficient pour obtenir « $=1$ ».

## 🏆 À retenir pour le BAC
Maîtrise la **forme canonique**, le **tableau des éléments** ci-dessus, et sache **tracer** la conique avec foyers, directrices et asymptotes.`

MATHS_3["geometrie-espace"] = String.raw`## 💡 L'essentiel en une phrase
Dans un repère orthonormé de l'espace, un **plan** a une **équation cartésienne** et une **droite** une **représentation paramétrique** ; on étudie **parallélisme, orthogonalité et distances** par le calcul.

## 📚 1. Plan de l'espace
- **Vecteur normal** $\vec n(a;b;c)$ : vecteur non nul orthogonal à tout vecteur du plan.
- Le plan passant par $A(x_0;y_0;z_0)$ de vecteur normal $\vec n$ : $M\in(P)\iff\overrightarrow{AM}\cdot\vec n=0$, d'où
$$ax+by+cz+d=0\qquad(d=-ax_0-by_0-cz_0)$$
- **Distance d'un point à un plan** : 
$$d(M_0;P)=\frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}$$

## 📏 2. Droite de l'espace
Droite passant par $A(x_0;y_0;z_0)$ de vecteur directeur $\vec u(\alpha;\beta;\gamma)$ : $M\in(D)\iff\overrightarrow{AM}=k\vec u$, soit
$$\begin{cases}x=x_0+k\alpha\\y=y_0+k\beta\\z=z_0+k\gamma\end{cases}\quad k\in\mathbb{R}$$

## 🔁 3. Positions relatives
- **Deux plans** : parallèles $\iff$ vecteurs normaux colinéaires ; perpendiculaires $\iff\vec n\cdot\vec n'=0$ ; sinon sécants suivant une droite.
- **Droite et plan** : $(D)\parallel(P)\iff\vec u\cdot\vec n=0$ ; $(D)\perp(P)\iff\vec u$ colinéaire à $\vec n$. Sinon sécants : on remplace $x,y,z$ de la droite dans l'équation du plan pour trouver $k$.
- **Deux droites** : parallèles (vecteurs directeurs colinéaires), sécantes (un seul point commun) ou non coplanaires.

## ✅ Exemple corrigé
Plan $(P):2x-y+2z-6=0$, vecteur normal $\vec n(2;-1;2)$, $\|\vec n\|=3$.
- Distance de $M(1;1;1)$ : $\dfrac{|2-1+2-6|}{3}=1$.
- Droite $(D)$ passant par $M$ et perpendiculaire à $(P)$ : $x=1+2k,\ y=1-k,\ z=1+2k$. Intersection avec $(P)$ : $2(1+2k)-(1-k)+2(1+2k)-6=0\Rightarrow9k=3\Rightarrow k=\tfrac13$, donc $H\left(\tfrac53;\tfrac23;\tfrac53\right)$ est le **projeté orthogonal** de $M$ sur $(P)$.

## ⚠️ Pièges fréquents
- Prendre les coefficients $(a;b;c)$ dans le mauvais ordre.
- Oublier la **valeur absolue** et la racine dans la formule de distance.
- Confondre vecteur directeur d'une droite et vecteur normal d'un plan.

## 🏆 À retenir pour le BAC
Retiens les trois formules : équation du plan, distance point-plan, représentation paramétrique, puis utilise le produit scalaire pour parallélisme et orthogonalité.`

MATHS_3["isometries"] = String.raw`## 💡 L'essentiel en une phrase
Une **isométrie** est une transformation du plan qui **conserve les distances** ; on les classe en **déplacements** et **antidéplacements**.

## 📚 1. Définitions
- **Isométrie** : transformation qui conserve les distances. Elle conserve aussi les **angles géométriques**, le **parallélisme**, l'**orthogonalité**, l'**alignement**, le **barycentre**, les **aires** et le **contact**.
- **Déplacement** : isométrie qui conserve les **angles orientés** : translation, rotation.
- **Antidéplacement** : isométrie qui change le sens des angles orientés : symétrie orthogonale, **symétrie glissée** (symétrie orthogonale suivie d'une translation de vecteur **parallèle à l'axe**).

## 🧩 2. Classification par les points invariants
| Points invariants | Déplacement | Antidéplacement |
|---|---|---|
| Tout le plan | identité | — |
| Une droite | — | symétrie orthogonale |
| Un seul point | rotation | — |
| Aucun | translation | symétrie glissée |

## 🔗 3. Composées et décompositions
- **Deux symétries d'axes parallèles** : translation (de vecteur $2\,\overrightarrow{HH'}$, perpendiculaire aux axes).
- **Deux symétries d'axes sécants en $O$** : rotation de centre $O$ et d'angle égal au **double** de l'angle entre les axes.
- **Décomposition** : toute translation ou rotation s'écrit comme **produit de deux symétries orthogonales**.
- Composée de deux déplacements : un déplacement ; de deux antidéplacements : un déplacement ; d'un déplacement et d'un antidéplacement : un antidéplacement.
- Rotation $\circ$ translation : une **rotation de même angle**.

## ✍️ 4. Utilisation
- **Démontrer** une propriété (égalité de longueurs, alignement) en introduisant l'isométrie qui envoie une figure sur l'autre.
- **Construire** l'image d'une droite, d'un segment, d'un cercle.
- **Lieu géométrique** : l'image d'un lieu connu par une isométrie.

## ✅ Exemple corrigé
$s_1$ et $s_2$ sont les symétries d'axes $(d_1)$ et $(d_2)$ sécants en $O$ avec $(d_1,d_2)=\dfrac\pi6$. Alors $s_2\circ s_1$ est la **rotation de centre $O$ et d'angle $\dfrac\pi3$**.

## ⚠️ Pièges fréquents
- Oublier que l'ordre de composition compte ($s_2\circ s_1\neq s_1\circ s_2$).
- Confondre rotation d'angle $\theta$ et composée de symétries d'angle $\theta/2$.

## 🏆 À retenir pour le BAC
Sache **classer** une isométrie, **décomposer** en symétries et **justifier** par les points invariants.`

MATHS_3["similitudes"] = String.raw`## 💡 L'essentiel en une phrase
Une **similitude directe** agrandit ou réduit une figure **sans la déformer** et **en conservant les angles orientés** ; c'est la composée d'une homothétie et d'une rotation (ou d'un déplacement).

## 📚 1. Définition et propriétés
- **Similitude directe** de rapport $k>0$ : composée d'une homothétie de rapport $k$ et d'un déplacement. Les translations, rotations et homothéties en sont des cas particuliers.
- Elle **multiplie les distances par $k$** et les **aires par $k^2$**.
- Elle conserve : le parallélisme, l'orthogonalité, l'alignement, le barycentre, le contact et les **angles orientés**.
- Deux figures sont **semblables** si l'une est l'image de l'autre par une similitude.

## 🎯 2. Forme réduite (si ce n'est pas une translation)
Il existe un point unique $\Omega$ (**centre**), un rapport $k$ et un angle $\theta$ tels que $s=h(\Omega,k)\circ r(\Omega,\theta)$.

## 🔢 3. Écriture complexe
$$z'=az+b\quad(a\neq0)\qquad k=|a|,\ \theta=\arg a,\ \omega=\frac b{1-a}\ (a\neq1)$$
- **Réciproque** : $z=\dfrac{z'-b}{a}$ (même centre, rapport $\dfrac1k$, angle $-\theta$).
- **Composée** de deux similitudes $a_1z+b_1$ et $a_2z+b_2$ : coefficient $a_1a_2$ (rapports multipliés, angles ajoutés).
- **Détermination** : par centre, rapport et angle ; par centre, un point et son image ; par deux points et leurs images ($a=\dfrac{z_{B'}-z_{A'}}{z_B-z_A}$).

## ✍️ 4. À quoi ça sert ?
Construire une figure, démontrer un parallélisme ou une orthogonalité, déterminer un **lieu géométrique**, calculer des distances et des aires.

## ✅ Exemple corrigé
Similitude envoyant $A(0)$ sur $A'(1)$ et $B(1)$ sur $B'(2+i)$.
$a=\dfrac{(2+i)-1}{1-0}=1+i$ et $b=1$ : $z'=(1+i)z+1$.
Rapport $\sqrt2$, angle $\dfrac\pi4$, centre $\omega=\dfrac1{1-(1+i)}=\dfrac1{-i}=i$. Vérification : $(1+i)i+1=i$ ✔. Un triangle d'aire $3$ a pour image un triangle d'aire $3\times2=6$.

## ⚠️ Pièges fréquents
- Multiplier les aires par $k$ au lieu de $k^2$.
- Oublier que le centre est invariant : $s(\Omega)=\Omega$.

## 🏆 À retenir pour le BAC
Détermine $a$ et $b$, lis **rapport, angle, centre**, et utilise la conservation des angles orientés pour démontrer.`

MATHS_3["divisibilite"] = String.raw`## 💡 L'essentiel en une phrase
L'**arithmétique** étudie les entiers : divisibilité, restes, nombres premiers et congruences.

## 📚 1. Divisibilité dans $\mathbb{Z}$
- $a$ **divise** $b$ ($a\mid b$) s'il existe $k\in\mathbb{Z}$ tel que $b=ka$.
- Si $a\mid b$ et $a\mid c$, alors $a\mid(pb+qc)$ pour tous entiers $p,q$ (très utile !).
- **Division euclidienne** : pour $a\in\mathbb{Z}$ et $b\in\mathbb{N}^*$, il existe un unique couple $(q;r)$ tel que $a=bq+r$ avec $0\le r<b$.

## 🔁 2. Congruences
$a\equiv b\ [n]$ signifie que $n\mid(a-b)$, c'est-à-dire que $a$ et $b$ ont **le même reste** dans la division par $n$.
- Compatibles avec **la somme, le produit et les puissances**.
- ⚠️ **On ne simplifie pas** librement : $2x\equiv6\ [10]$ n'équivaut **pas** à $x\equiv3\ [10]$.

## 🔢 3. Nombres premiers
- Un entier $p\ge2$ est **premier** s'il n'a que deux diviseurs : $1$ et $p$. Il y en a une **infinité**.
- **Test** : $n$ est premier si aucun nombre premier $\le\sqrt n$ ne le divise (crible d'Ératosthène).
- **Théorème fondamental** : tout entier $n\ge2$ s'écrit de façon **unique** comme produit de facteurs premiers.

## ➗ 4. Critères de divisibilité
- Par $2$ : dernier chiffre pair ; par $5$ : $0$ ou $5$ ; par $10$ : $0$.
- Par $3$ (ou $9$) : somme des chiffres divisible par $3$ (ou $9$).
- Par $11$ : somme **alternée** des chiffres divisible par $11$.

## 💻 5. Numération
Tout entier s'écrit de façon unique en base $b$. Pour passer de la base $10$ à la base $b$ : **divisions successives** par $b$ (on lit les restes à l'envers). Pour revenir : $\overline{a_na_{n-1}\dots a_0}^{\,b}=\sum a_ib^i$.
Exemple : $4358=2^{12}+2^8+2^2+2^1=\overline{1000100000110}^{\,2}$.

## ✅ Exemples corrigés
- **Reste de $7^{2026}$ dans la division par $5$.** $7\equiv2\ [5]$ et $2^4=16\equiv1\ [5]$. Comme $2026=4\times506+2$ : $7^{2026}\equiv2^2=4\ [5]$. **Reste $4$.**
- **$n(n+1)$ est pair** pour tout $n$ : si $n$ est pair c'est évident ; sinon $n+1$ est pair.

## ⚠️ Pièges fréquents
- Diviser une congruence sans vérifier que le nombre est premier avec le module.
- Confondre « $a$ divise $b$ » et « $b$ divise $a$ ».

## 🏆 À retenir pour le BAC
Sache raisonner **modulo $n$** (tableau des restes), décomposer en facteurs premiers et utiliser $a\mid(pb+qc)$.`

MATHS_3["pgcd-ppcm"] = String.raw`## 💡 L'essentiel en une phrase
Le **PGCD** est le plus grand diviseur commun de deux entiers, le **PPCM** leur plus petit multiple commun ; les théorèmes de **Bézout** et de **Gauss** permettent de résoudre des équations en nombres entiers.

## 📚 1. Définitions et propriétés
- $\text{PGCD}(a;b)$ : plus grand entier qui divise $a$ et $b$ ; $\text{PPCM}(a;b)$ : plus petit multiple commun strictement positif.
- $\text{PGCD}(a;b)\times\text{PPCM}(a;b)=|ab|$.
- $a$ et $b$ sont **premiers entre eux** si $\text{PGCD}(a;b)=1$.
- **Algorithme d'Euclide** : $\text{PGCD}(a;b)=\text{PGCD}(b;r)$ où $r$ est le reste de $a$ par $b$ ; le PGCD est le **dernier reste non nul**.
- **Par décomposition** : PGCD = produit des facteurs premiers communs avec le plus petit exposant ; PPCM = produit de tous les facteurs avec le plus grand exposant.

## 🎓 2. Les deux grands théorèmes
- **Bézout** : $a$ et $b$ sont premiers entre eux $\iff$ il existe $u,v\in\mathbb{Z}$ tels que $au+bv=1$.
- **Gauss** : si $a\mid bc$ et si $a$ et $b$ sont premiers entre eux, alors $a\mid c$.

## ✍️ 3. Résoudre $ax+by=c$
1. Calculer $d=\text{PGCD}(a;b)$ : il y a des solutions **si et seulement si $d\mid c$**.
2. Diviser par $d$ pour se ramener à des nombres premiers entre eux.
3. Trouver une **solution particulière** (algorithme d'Euclide « remonté »).
4. Utiliser **Gauss** pour écrire la **solution générale**.
Pour $ax\equiv b\ [n]$ : on écrit $ax-ny=b$ et on applique la même méthode.

## ✅ Exemples corrigés
**Exemple 1.** $\text{PGCD}(105;81)$ : $105=81\times1+24$ ; $81=24\times3+9$ ; $24=9\times2+6$ ; $9=6\times1+3$ ; $6=3\times2+0$. Donc **PGCD $=3$** et PPCM $=\dfrac{105\times81}{3}=2\,835$.

**Exemple 2 (corps célestes).** Le corps $A$ apparaît tous les $105$ jours (vu à $J_0$), le corps $B$ tous les $81$ jours (vu à $J_0+6$). Simultanéité : $105a=81b+6\iff35a-27b=2$.
Solution particulière : $a=7$, $b=9$ ($245-243=2$). Solution générale : $a=7+27k$.
**Première apparition simultanée** : $105\times7=735$ jours après $J_0$.

## ⚠️ Pièges fréquents
- Arrêter l'algorithme d'Euclide trop tôt ou prendre le dernier reste **nul**.
- Appliquer Gauss sans vérifier que $a$ et $b$ sont **premiers entre eux**.
- Oublier la condition « le PGCD divise $c$ ».

## 🏆 À retenir pour le BAC
Euclide pour le PGCD, **Bézout** pour l'existence, **Gauss** pour la résolution complète.`
