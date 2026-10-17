// Leçons approfondies – Mathématiques série C uniquement

export const DEEP_MATHS_4: Record<string, string> = {}

DEEP_MATHS_4["barycentre-lignes-niveau"] = String.raw`## 💡 L'essentiel en une phrase
Le **barycentre** de points pondérés est le « point d'équilibre » du système ; il permet de simplifier des sommes vectorielles et de déterminer des **lignes de niveau** (droites, cercles).

## 📚 1. Barycentre
Soit $(A_i,\alpha_i)$ des points pondérés avec $\sum\alpha_i\neq0$. Le barycentre $G$ est l'unique point tel que
$$\sum\alpha_i\overrightarrow{GA_i}=\vec0$$
- **Isobarycentre** : tous les poids égaux (centre de gravité d'un triangle).
- **Milieu** de $[AB]$ : barycentre de $(A,1),(B,1)$.
- Pour deux points : $G=\text{bar}\{(A,a),(B,b)\}$ ($a+b\ne0$) vérifie $\overrightarrow{AG}=\dfrac{b}{a+b}\overrightarrow{AB}$.

## 📚 2. Propriétés
- **Homogénéité** : $(\alpha_i)$ et $(k\alpha_i)$ ($k\neq0$) donnent le même barycentre.
- **Réduction** : pour tout point $M$, $\sum\alpha_i\overrightarrow{MA_i}=\left(\sum\alpha_i\right)\overrightarrow{MG}$.
- **Associativité** : on peut remplacer un sous-ensemble de points par son barycentre affecté de la somme des poids.
- **Coordonnées** : $x_G=\dfrac{\sum\alpha_ix_i}{\sum\alpha_i}$ (de même pour $y_G$, $z_G$).
- **Alignement** : trois points sont alignés si l'un est barycentre des deux autres.

## 📚 3. Fonction scalaire de Leibniz
Pour $f(M)=\sum\alpha_iMA_i^2$ avec $\sum\alpha_i=s\ne0$ :
$$f(M)=s\,MG^2+f(G)$$
- Pour $\sum\alpha_i=0$ : $\sum\alpha_i\overrightarrow{MA_i}$ est un vecteur constant, et $f(M)=2\overrightarrow{MO}\cdot\vec u+\text{const}$ (fonction affine).

## 📚 4. Lignes de niveau
**Ensemble $\{M\ ;\ \overrightarrow{AB}\cdot\overrightarrow{AM}=k\}$** : une droite perpendiculaire à $(AB)$.
**$\{M\ ;\ \overrightarrow{MA}\cdot\overrightarrow{MB}=0\}$** : le cercle de diamètre $[AB]$.
**$\{M\ ;\ MA^2-MB^2=k\}$** : une droite perpendiculaire à $(AB)$.
**$\{M\ ;\ MA/MB=k\}$** ($k\ne1$) : un cercle (cercle d'Apollonius).
**$\{M\ ;\ \sum\alpha_iMA_i^2=k\}$** ($s\ne0$) : $MG^2=\dfrac{k-f(G)}{s}$, soit un cercle de centre $G$, un point ou l'ensemble vide.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Construire un barycentre
$G=\text{bar}\{(A,2),(B,3)\}$ : $\overrightarrow{AG}=\dfrac35\overrightarrow{AB}$. Le point $G$ est plus près de $B$ (poids plus grand).

### Exemple 2 — Coordonnées
$A(1;2)$, $B(5;6)$, $C(3;-1)$, poids $1,2,1$ : $s=4$ ; $x_G=\dfrac{1+10+3}{4}=3{,}5$ ; $y_G=\dfrac{2+12-1}{4}=3{,}25$ ; $G(3{,}5\,;\,3{,}25)$.

### Exemple 3 — Réduction d'une somme vectorielle
Simplifier $2\overrightarrow{MA}+\overrightarrow{MB}-3\overrightarrow{MC}$ : somme des poids $0$ ⇒ vecteur constant : en passant par $C$, $2\overrightarrow{MA}+\overrightarrow{MB}-3\overrightarrow{MC}=2\overrightarrow{CA}+\overrightarrow{CB}$.

### Exemple 4 — Ligne de niveau (cercle)
Déterminer $\{M\ ;\ MA^2+MB^2=10\}$ avec $AB=4$ : $I$ milieu de $[AB]$ ; $MA^2+MB^2=2MI^2+\dfrac{AB^2}{2}=2MI^2+8$. Donc $2MI^2+8=10$, $MI=1$ : **cercle** de centre $I$, de rayon 1.

### Exemple 5 — Cercle d'Apollonius
$MA=2MB$ avec $AB=3$ : $MA^2-4MB^2=0$ ; avec les points pondérés $(A,1)$, $(B,-4)$ de somme $-3\ne0$ : on obtient un cercle dont le centre $G=\text{bar}\{(A,1),(B,-4)\}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Placer $G=\text{bar}\{(A,3),(B,-1)\}$ et exprimer $\overrightarrow{AG}$.

:::corrige
$s=2$ ; $\overrightarrow{AG}=\dfrac{-1}{2}\overrightarrow{AB}$ : $G$ est situé sur $(AB)$, du côté opposé à $B$ par rapport à $A$, avec $AG=\tfrac12AB$.
:::

**Exercice 2.** Montrer que le centre de gravité $G$ d'un triangle $ABC$ vérifie $\overrightarrow{AG}=\tfrac23\overrightarrow{AI}$ avec $I$ milieu de $[BC]$.

:::corrige
$G=\text{bar}\{(A,1),(B,1),(C,1)\}=\text{bar}\{(A,1),(I,2)\}$ (associativité). Donc $\overrightarrow{AG}=\dfrac{2}{3}\overrightarrow{AI}$.
:::

**Exercice 3.** Déterminer l'ensemble des points $M$ tels que $\|\overrightarrow{MA}+2\overrightarrow{MB}\|=6$ avec $AB=3$.

:::corrige
$\overrightarrow{MA}+2\overrightarrow{MB}=3\overrightarrow{MG}$ avec $G=\text{bar}\{(A,1),(B,2)\}$. Donc $3MG=6$, $MG=2$ : **cercle** de centre $G$ et de rayon 2.
:::

**Exercice 4.** Déterminer $\{M\ ;\ \overrightarrow{MA}\cdot\overrightarrow{MB}=-5\}$ avec $AB=6$.

:::corrige
$I$ milieu de $[AB]$ : $\overrightarrow{MA}\cdot\overrightarrow{MB}=MI^2-\dfrac{AB^2}{4}=MI^2-9=-5$, donc $MI=2$ : **cercle** de centre $I$, de rayon 2.
:::

## ⚠️ Pièges classiques du BAC
- Oublier de vérifier que $\sum\alpha_i\ne0$.
- Se tromper de **signe** dans $\overrightarrow{AG}=\dfrac{b}{a+b}\overrightarrow{AB}$.
- Oublier la réduction $\sum\alpha_i\overrightarrow{MA_i}=s\,\overrightarrow{MG}$.
- Conclure « cercle » sans vérifier que le rayon est positif.

## ✅ À retenir
- $\sum\alpha_i\overrightarrow{GA_i}=\vec0$ ; réduction : $s\,\overrightarrow{MG}$.
- Leibniz : $\sum\alpha_iMA_i^2=sMG^2+\sum\alpha_iGA_i^2$.
- $\overrightarrow{MA}\cdot\overrightarrow{MB}=0$ : cercle de diamètre $[AB]$.
`

DEEP_MATHS_4["coniques"] = String.raw`## 💡 L'essentiel en une phrase
Les **coniques** (ellipse, hyperbole, parabole) sont les courbes définies par une propriété **foyer-directrice** ; chacune a une équation réduite simple dans un repère adapté.

## 📚 1. Définition par foyer, directrice et excentricité
Soit un point $F$ (foyer), une droite $(\Delta)$ (directrice) et un réel $e>0$. L'ensemble des points $M$ tels que
$$\frac{MF}{MH}=e\qquad(H\text{ projeté de }M\text{ sur }(\Delta))$$
est une conique : **ellipse** si $e<1$ ; **parabole** si $e=1$ ; **hyperbole** si $e>1$.

## 📚 2. Parabole
Foyer $F\left(\dfrac p2;0\right)$, directrice $x=-\dfrac p2$ : équation réduite
$$y^2=2px$$
- Sommet $O$, axe de symétrie $(Ox)$.
- Tangente au point $M_0(x_0;y_0)$ : $y\,y_0=p(x+x_0)$.

## 📚 3. Ellipse
Équation réduite : $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ avec $a>b>0$.
- $c=\sqrt{a^2-b^2}$ ; foyers $F(c;0)$, $F'(-c;0)$ ; excentricité $e=\dfrac ca<1$.
- Définition bifocale : $MF+MF'=2a$.
- Sommets $(\pm a;0)$ et $(0;\pm b)$ ; directrices $x=\pm\dfrac{a^2}{c}$.
- Tangente en $M_0$ : $\dfrac{xx_0}{a^2}+\dfrac{yy_0}{b^2}=1$.

## 📚 4. Hyperbole
Équation réduite : $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$.
- $c=\sqrt{a^2+b^2}$ ; foyers $(\pm c;0)$ ; $e=\dfrac ca>1$.
- Définition bifocale : $|MF-MF'|=2a$.
- **Asymptotes** : $y=\pm\dfrac bax$.
- Sommets $(\pm a;0)$. Hyperbole équilatère : $a=b$ ($e=\sqrt2$).

## 📚 5. Reconnaître une conique
Mettre l'équation sous forme canonique par **complétion de carrés** : $Ax^2+By^2+Dx+Ey+F=0$. Si $A$ et $B$ sont de même signe ⇒ ellipse ; de signes contraires ⇒ hyperbole ; si l'un des deux est nul ⇒ parabole.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Ellipse
$\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ : $a=5$, $b=3$, $c=4$, foyers $(\pm4;0)$, $e=\dfrac45$.

### Exemple 2 — Hyperbole
$\dfrac{x^2}{16}-\dfrac{y^2}{9}=1$ : $a=4$, $b=3$, $c=5$, foyers $(\pm5;0)$, asymptotes $y=\pm\dfrac34x$, $e=\dfrac54$.

### Exemple 3 — Parabole
$y^2=8x$ : $p=4$, foyer $(2;0)$, directrice $x=-2$.

### Exemple 4 — Forme canonique
$4x^2+9y^2-16x+18y-11=0$ : $4(x-2)^2+9(y+1)^2=11+16+9=36$ ; $\dfrac{(x-2)^2}{9}+\dfrac{(y+1)^2}{4}=1$ : **ellipse** de centre $(2;-1)$, $a=3$, $b=2$.

### Exemple 5 — Tangente à une ellipse
Au point $M_0(3;\tfrac{12}{5})$ de l'ellipse $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ : $\dfrac{3x}{25}+\dfrac{12y/5}{9}=1$, soit $\dfrac{3x}{25}+\dfrac{4y}{15}=1$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Déterminer l'équation de l'ellipse de foyers $(\pm3;0)$ et de sommet $(5;0)$.

:::corrige
$c=3$, $a=5$, $b^2=a^2-c^2=16$ : $\dfrac{x^2}{25}+\dfrac{y^2}{16}=1$.
:::

**Exercice 2.** Donner les asymptotes et les foyers de $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$.

:::corrige
$a=3$, $b=4$, $c=5$ ; foyers $(\pm5;0)$ ; asymptotes $y=\pm\dfrac43x$.
:::

**Exercice 3.** Identifier $y^2-4y-8x+12=0$.

:::corrige
$(y-2)^2=8x-8=8(x-1)$ : **parabole** de sommet $(1;2)$, $p=4$, d'axe horizontal.
:::

**Exercice 4.** Montrer que pour l'ellipse $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$, $MF+MF'=2a$ au sommet $(a;0)$.

:::corrige
$M=(a;0)$ : $MF=a-c$ et $MF'=a+c$ ; somme $=2a$ ✔.
:::

## ⚠️ Pièges classiques du BAC
- Confondre $c=\sqrt{a^2-b^2}$ (ellipse) et $c=\sqrt{a^2+b^2}$ (hyperbole).
- Oublier que $a>b$ pour placer les foyers sur $(Ox)$.
- Oublier le **centre** quand l'équation est décalée.
- Se tromper dans la direction de la directrice.

## ✅ À retenir
- Ellipse $e<1$, parabole $e=1$, hyperbole $e>1$.
- $y^2=2px$ ; $\dfrac{x^2}{a^2}\pm\dfrac{y^2}{b^2}=1$.
- Ellipse $MF+MF'=2a$ ; hyperbole $|MF-MF'|=2a$.
`

DEEP_MATHS_4["geometrie-espace"] = String.raw`## 💡 L'essentiel en une phrase
Dans l'espace muni d'un repère orthonormé, droites et plans se décrivent par des **équations paramétriques** et **cartésiennes** ; le **produit scalaire** et le **produit vectoriel** donnent orthogonalité, distances et aires.

## 📚 1. Vecteurs et coordonnées
- $\vec u(x;y;z)$, $\|\vec u\|=\sqrt{x^2+y^2+z^2}$.
- Produit scalaire : $\vec u\cdot\vec v=xx'+yy'+zz'$ ; $\vec u\perp\vec v\iff\vec u\cdot\vec v=0$.
- **Produit vectoriel** : $\vec u\wedge\vec v=(yz'-zy';\ zx'-xz';\ xy'-yx')$, orthogonal à $\vec u$ et $\vec v$ ; $\|\vec u\wedge\vec v\|=\|\vec u\|\|\vec v\|\sin\theta$ = aire du parallélogramme.

## 📚 2. Droites
La droite passant par $A(x_0;y_0;z_0)$ de vecteur directeur $\vec u(a;b;c)$ :
$$\begin{cases}x=x_0+ta\\y=y_0+tb\\z=z_0+tc\end{cases}\quad(t\in\mathbb R)$$

## 📚 3. Plans
- Plan passant par $A$ de vecteur normal $\vec n(a;b;c)$ : $a(x-x_0)+b(y-y_0)+c(z-z_0)=0$, soit $ax+by+cz+d=0$.
- Un vecteur normal d'un plan défini par $A,B,C$ : $\overrightarrow{AB}\wedge\overrightarrow{AC}$.

## 📚 4. Positions relatives
- Deux plans : parallèles si les vecteurs normaux sont colinéaires ; sinon sécants selon une droite.
- Droite $\parallel$ plan : $\vec u\cdot\vec n=0$.
- Droite et plan sécants : on remplace les équations paramétriques dans celle du plan.

## 📚 5. Distances
- Distance d'un point $M_0(x_0;y_0;z_0)$ à un plan $ax+by+cz+d=0$ :
$$d=\frac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}$$
- Distance d'un point à une droite $(A,\vec u)$ : $d=\dfrac{\|\overrightarrow{AM}\wedge\vec u\|}{\|\vec u\|}$.

## 📚 6. Sphère
Centre $\Omega(a;b;c)$, rayon $R$ : $(x-a)^2+(y-b)^2+(z-c)^2=R^2$. Intersection avec un plan : cercle de rayon $r=\sqrt{R^2-d^2}$ ($d$ = distance du centre au plan).

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Plan par trois points
$A(1;0;0)$, $B(0;2;0)$, $C(0;0;3)$ : $\overrightarrow{AB}(-1;2;0)$, $\overrightarrow{AC}(-1;0;3)$ ; $\vec n=(6;3;2)$. Plan : $6x+3y+2z=6$.

### Exemple 2 — Distance point-plan
$M(1;1;1)$ au plan $2x-y+2z-6=0$ : $d=\dfrac{|2-1+2-6|}{3}=\mathbf1$.

### Exemple 3 — Intersection droite-plan
Droite $x=1+t$, $y=2-t$, $z=t$ et plan $x+y+z=5$ : $1+t+2-t+t=5\Rightarrow t=2$ ; point $(3;0;2)$.

### Exemple 4 — Section de sphère
Sphère de centre $O$, $R=5$, plan $z=3$ : $d=3$, $r=\sqrt{25-9}=4$ : cercle de rayon 4.

### Exemple 5 — Aire d'un triangle
$A(0;0;0)$, $B(1;2;0)$, $C(0;1;3)$ : $\overrightarrow{AB}\wedge\overrightarrow{AC}=(6;-3;1)$ ; $\|\cdot\|=\sqrt{46}$ ; aire $=\tfrac{\sqrt{46}}2\approx3{,}39$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Écrire l'équation du plan passant par $A(1;2;3)$ de normale $\vec n(2;-1;4)$.

:::corrige
$2(x-1)-(y-2)+4(z-3)=0\iff2x-y+4z-12=0$.
:::

**Exercice 2.** Donner une représentation paramétrique de la droite $(AB)$ avec $A(1;0;2)$, $B(3;2;1)$.

:::corrige
$\overrightarrow{AB}(2;2;-1)$ : $x=1+2t$, $y=2t$, $z=2-t$.
:::

**Exercice 3.** Calculer la distance de $O$ au plan $x+2y+2z=9$.

:::corrige
$d=\dfrac{|0+0+0-9|}{\sqrt{1+4+4}}=\mathbf3$.
:::

**Exercice 4.** Les plans $x+y+z=1$ et $2x+2y+2z=5$ sont-ils parallèles ?

:::corrige
Normales $(1;1;1)$ et $(2;2;2)$ colinéaires : plans **parallèles**, et distincts car $2(1)\ne5$.
:::

## ⚠️ Pièges classiques du BAC
- Oublier que l'équation d'un plan s'écrit avec **un** vecteur normal.
- Confondre vecteur directeur (droite) et normal (plan).
- Erreur de signe dans le produit vectoriel.
- Oublier la racine au dénominateur dans les distances.

## ✅ À retenir
- Droite : paramétrique ; plan : $ax+by+cz+d=0$.
- $d=\dfrac{|ax_0+by_0+cz_0+d|}{\sqrt{a^2+b^2+c^2}}$.
- $\vec u\wedge\vec v$ : normal et aire.
`

DEEP_MATHS_4["isometries"] = String.raw`## 💡 L'essentiel en une phrase
Une **isométrie** est une transformation du plan qui **conserve les distances** : translation, rotation, symétries ; avec les nombres complexes, elles s'écrivent $z'=az+b$ ($|a|=1$) ou $z'=a\bar z+b$.

## 📚 1. Définition et propriétés
Une isométrie $f$ vérifie $f(M)f(N)=MN$.
- Elle conserve les angles géométriques, le parallélisme, les barycentres, les aires.
- Elle est **déplacement** (conserve les angles orientés) ou **antidéplacement**.
- La composée de deux isométries est une isométrie.

## 📚 2. Translations
$t_{\vec u}$ : $M\mapsto M'$ avec $\overrightarrow{MM'}=\vec u$. Écriture complexe : $z'=z+b$.

## 📚 3. Rotations
Centre $\Omega$ (d'affixe $\omega$), angle $\theta$ :
$$z'-\omega=e^{i\theta}(z-\omega)$$
Écriture générale : $z'=az+b$ avec $|a|=1$, $a\neq1$ : rotation d'angle $\arg a$ et de centre $\omega=\dfrac{b}{1-a}$.

## 📚 4. Symétries
- **Symétrie centrale** (rotation d'angle $\pi$) : $z'=-z+2\omega$.
- **Symétrie axiale** : $z'=a\bar z+b$ avec $|a|=1$ ; par exemple par rapport à l'axe réel : $z'=\bar z$.
- La composée de deux symétries axiales d'axes sécants en $O$ est une rotation de centre $O$ et d'angle double de l'angle des axes ; d'axes parallèles : une translation.

## 📚 5. Classification
| Forme complexe | Nature |
|---|---|
| $z'=z+b$ | translation |
| $z'=az+b$, $|a|=1$, $a\ne1$ | rotation |
| $z'=a\bar z+b$, $|a|=1$ | symétrie axiale ou symétrie glissée |

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Rotation
$z'=iz+2-i$ : $a=i$ ($|a|=1$), $\omega=\dfrac{2-i}{1-i}=\dfrac{(2-i)(1+i)}{2}=\dfrac{3+i}{2}$ ; rotation de centre $\Omega\left(\dfrac32;\dfrac12\right)$, d'angle $\dfrac\pi2$.

### Exemple 2 — Image d'un point
$z'=e^{i\pi/3}z$, $M(2)$ : $z'=2e^{i\pi/3}=1+i\sqrt3$.

### Exemple 3 — Composée de deux symétries
Axes $(\Delta_1)$ et $(\Delta_2)$ sécants en $O$ faisant un angle $\dfrac\pi6$ : $S_{\Delta_2}\circ S_{\Delta_1}$ est la rotation de centre $O$ et d'angle $\dfrac\pi3$.

### Exemple 4 — Symétrie axiale
$z'=\bar z+2$ : $a=1$, $b=2$. C'est une **symétrie glissée** : symétrie d'axe $(Ox)$ suivie de la translation de vecteur $2\vec i$ (parallèle à l'axe).

### Exemple 5 — Conservation des distances
$|z'_B-z'_A|=|a||z_B-z_A|=|z_B-z_A|$ : les distances sont conservées dès que $|a|=1$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Déterminer la nature de $z'=-z+4i$.

:::corrige
$a=-1$ : symétrie centrale de centre $\omega=\dfrac{4i}{2}=2i$.
:::

**Exercice 2.** Donner l'écriture complexe de la rotation de centre $\Omega(1+i)$ et d'angle $\dfrac\pi2$.

:::corrige
$z'-(1+i)=i(z-1-i)\Rightarrow z'=iz+(1+i)-i(1+i)=iz+1+i-i+1=iz+2$.
:::

**Exercice 3.** Montrer que $z'=\dfrac{1+i}{\sqrt2}z$ est une rotation et préciser l'angle.

:::corrige
$a=\dfrac{1+i}{\sqrt2}=e^{i\pi/4}$, $|a|=1$ : rotation de centre $O$ et d'angle $\dfrac\pi4$.
:::

**Exercice 4.** Quelle est la composée de la rotation de centre $O$ d'angle $\theta$ et de la rotation de centre $O$ d'angle $\theta'$ ?

:::corrige
La rotation de centre $O$ d'angle $\theta+\theta'$ ($e^{i\theta'}e^{i\theta}=e^{i(\theta+\theta')}$).
:::

## ⚠️ Pièges classiques du BAC
- Calculer le centre avec $\omega=\dfrac{b}{1-a}$ sans vérifier $a\neq1$.
- Confondre rotation et similitude ($|a|\ne1$).
- Oublier que $z'=a\bar z+b$ est un **antidéplacement**.
- Se tromper dans l'ordre de composition ($f\circ g$ : on applique $g$ d'abord).

## ✅ À retenir
- Isométrie : conserve les distances.
- Rotation : $z'-\omega=e^{i\theta}(z-\omega)$.
- $|a|=1$ ⇒ isométrie ; $a\bar z+b$ ⇒ antidéplacement.
`

DEEP_MATHS_4["similitudes"] = String.raw`## 💡 L'essentiel en une phrase
Une **similitude directe** est une transformation qui multiplie les distances par un réel $k>0$ ; en complexes elle s'écrit $z'=az+b$ ($a\ne0$), avec **rapport** $|a|$ et **angle** $\arg a$.

## 📚 1. Définition
Une **similitude** multiplie les distances par un réel $k>0$ (le rapport). C'est la composée d'une homothétie et d'une isométrie.
- Conserve les angles géométriques, le parallélisme, l'orthogonalité ; multiplie les aires par $k^2$.
- **Directe** : conserve les angles orientés ; **indirecte** sinon.

## 📚 2. Écriture complexe d'une similitude directe
$$z'=az+b,\qquad a\in\mathbb C^*,\ b\in\mathbb C$$
- **Rapport** $k=|a|$ ; **angle** $\theta=\arg a$.
- Si $a\ne1$, il existe un unique point fixe (centre) $\omega=\dfrac{b}{1-a}$ et $z'-\omega=a(z-\omega)$.
- Si $a=1$ : translation.
- Cas particuliers : $a$ réel $\neq1$ ⇒ homothétie ; $|a|=1$ ⇒ rotation.

## 📚 3. Éléments caractéristiques
Une similitude directe de centre $\Omega$, de rapport $k$, d'angle $\theta$ est la composée (commutative) de la rotation de centre $\Omega$ et d'angle $\theta$ et de l'homothétie de centre $\Omega$ et de rapport $k$.

## 📚 4. Déterminer une similitude à partir de deux points
Si $A\mapsto A'$ et $B\mapsto B'$, alors $a=\dfrac{z_{B'}-z_{A'}}{z_B-z_A}$ puis $b=z_{A'}-az_A$.

## 📚 5. Similitudes indirectes
$z'=a\bar z+b$ : composée d'une symétrie axiale et d'une similitude directe ; rapport $|a|$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Éléments caractéristiques
$z'=(1+i)z+2$ : $a=1+i$, $k=\sqrt2$, $\theta=\dfrac\pi4$ ; $\omega=\dfrac{2}{1-(1+i)}=\dfrac{2}{-i}=2i$. Centre $\Omega(0;2)$.

### Exemple 2 — Image d'un point
$M(1)$ : $z'=(1+i)\times1+2=3+i$.

### Exemple 3 — Déterminer une similitude
$A(0)\mapsto A'(1)$ et $B(1)\mapsto B'(1+2i)$ : $a=\dfrac{1+2i-1}{1-0}=2i$ ; $b=1$ ; $z'=2iz+1$ : rapport 2, angle $\dfrac\pi2$.

### Exemple 4 — Aire
Une similitude de rapport 3 multiplie les aires par 9 : un triangle d'aire 4 devient un triangle d'aire 36.

### Exemple 5 — Une suite de points
$M_0=1$ et $M_{n+1}=s(M_n)$ avec $s:z'=\dfrac{1+i}{2}z$ : $z_n=\left(\dfrac{1+i}{2}\right)^n$ ; $|z_n|=\left(\dfrac{\sqrt2}{2}\right)^n\to0$. Les points tournent en spirale vers l'origine.

## ✏️ Exercices d'entraînement
**Exercice 1.** Donner les éléments de $z'=2iz+3-i$.

:::corrige
$a=2i$ : rapport 2, angle $\dfrac\pi2$ ; $\omega=\dfrac{3-i}{1-2i}=\dfrac{(3-i)(1+2i)}{5}=\dfrac{5+5i}{5}=1+i$. Centre $(1;1)$.
:::

**Exercice 2.** Écrire la similitude directe de centre $\Omega(1)$, de rapport $2$ et d'angle $\dfrac\pi3$.

:::corrige
$z'-1=2e^{i\pi/3}(z-1)$, soit $z'=(1+i\sqrt3)(z-1)+1=(1+i\sqrt3)z-i\sqrt3$.
:::

**Exercice 3.** Une similitude transforme $A(1)$ en $A'(2)$ et $B(i)$ en $B'(1+i)$. Déterminer $a$ et $b$.

:::corrige
$a=\dfrac{(1+i)-2}{i-1}=\dfrac{-1+i}{-1+i}=1$ : translation ; $b=2-1=1$ : $z'=z+1$.
:::

**Exercice 4.** Quelle est l'image d'un cercle de rayon 2 par une similitude de rapport $\tfrac12$ ?

:::corrige
Un cercle de rayon $2\times\tfrac12=1$.
:::

## ⚠️ Pièges classiques du BAC
- Confondre rapport $|a|$ et angle $\arg a$.
- Oublier que le centre est le point fixe.
- Dire que l'aire est multipliée par $k$ (c'est $k^2$).
- Appliquer $\omega=\dfrac b{1-a}$ si $a=1$.

## ✅ À retenir
- $z'=az+b$ : rapport $|a|$, angle $\arg a$, centre $\dfrac b{1-a}$.
- Aires $\times k^2$.
- Détermination : $a=\dfrac{z_{B'}-z_{A'}}{z_B-z_A}$.
`

DEEP_MATHS_4["divisibilite"] = String.raw`## 💡 L'essentiel en une phrase
Dans $\mathbb Z$, on étudie la **divisibilité**, la **division euclidienne** et les **congruences**, qui permettent de résoudre des problèmes sur les restes, les chiffres et les équations en nombres entiers.

## 📚 1. Divisibilité
$a$ divise $b$ ($a\mid b$) s'il existe $k\in\mathbb Z$ tel que $b=ka$.
- Si $a\mid b$ et $a\mid c$ alors $a\mid(ub+vc)$ pour tous entiers $u,v$.
- Si $a\mid b$ et $b\mid c$ alors $a\mid c$.
- Les diviseurs de $n$ viennent par paires $(d,n/d)$.

## 📚 2. Division euclidienne
Pour $a\in\mathbb Z$ et $b\in\mathbb N^*$ : il existe un unique couple $(q,r)$ tel que $a=bq+r$ avec $0\le r<b$.

## 📚 3. Congruences
$a\equiv b\pmod n$ si $n\mid(a-b)$, c'est-à-dire si $a$ et $b$ ont le même reste dans la division par $n$.
- Compatibles avec l'**addition**, la **multiplication** et les **puissances** : $a\equiv b\Rightarrow a^k\equiv b^k$.
- On ne peut pas simplifier librement : $ka\equiv kb$ n'implique pas $a\equiv b$ si $k$ n'est pas premier avec $n$.

## 📚 4. Critères de divisibilité
- Par **2** : dernier chiffre pair ; par **5** : dernier chiffre 0 ou 5.
- Par **3** (resp. 9) : somme des chiffres divisible par 3 (resp. 9).
- Par **4** : les deux derniers chiffres forment un multiple de 4.
- Par **11** : somme alternée des chiffres divisible par 11.

## 📚 5. Nombres premiers
Un entier $p\geq2$ est premier s'il n'a que 1 et lui-même comme diviseurs positifs.
- **Décomposition** en facteurs premiers unique.
- $n$ est premier s'il n'est divisible par aucun premier $\le\sqrt n$.
- Il existe une infinité de nombres premiers.

## 📚 6. Méthodes types
- Étudier $a^n\bmod m$ : chercher la **période** des restes.
- Dernier chiffre : calculer modulo 10.
- Résoudre $ax\equiv b\pmod n$ : si $a$ est inversible mod $n$, multiplier par l'inverse.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Division euclidienne
$1\,234=17\times72+10$ : $q=72$, $r=10$.

### Exemple 2 — Congruences
$7^4\equiv1\pmod{10}$ ($7^1=7,\ 7^2=49\equiv9,\ 7^3\equiv3,\ 7^4\equiv1$). Donc $7^{2025}=7^{4\times506+1}\equiv7\pmod{10}$ : dernier chiffre **7**.

### Exemple 3 — Divisibilité d'une expression
Montrer que $n^3-n$ est divisible par 6 : $n^3-n=(n-1)n(n+1)$, produit de trois entiers consécutifs ⇒ multiple de 2 et de 3, donc de 6.

### Exemple 4 — Reste d'une puissance
Reste de $3^{100}$ dans la division par 7 : $3^6\equiv1\pmod7$ ; $100=6\times16+4$ ; $3^4=81\equiv4$ ; reste **4**.

### Exemple 5 — Équation de congruence
$5x\equiv3\pmod7$ : l'inverse de 5 modulo 7 est 3 ($15\equiv1$) ; $x\equiv9\equiv2\pmod7$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Quel est le reste de $2^{50}$ dans la division par 7 ?

:::corrige
$2^3=8\equiv1\pmod7$ ; $50=3\times16+2$ ; $2^{50}\equiv2^2=4$. Reste **4**.
:::

**Exercice 2.** Montrer que $n^2+n$ est toujours pair.

:::corrige
$n^2+n=n(n+1)$, produit de deux entiers consécutifs : l'un est pair. ∎
:::

**Exercice 3.** Trouver tous les entiers $n$ tels que $(n-1)\mid(n+5)$.

:::corrige
$n+5=(n-1)+6$ ; donc $(n-1)\mid6$ ; $n-1\in\{\pm1,\pm2,\pm3,\pm6\}$ ; $n\in\{2,0,3,-1,4,-2,7,-5\}$.
:::

**Exercice 4.** Le nombre 8 421 est-il divisible par 3 ? par 11 ?

:::corrige
Somme des chiffres $=15$ : divisible par 3 (non par 9). Somme alternée $8-4+2-1=5$ : non divisible par 11.
:::

## ⚠️ Pièges classiques du BAC
- Simplifier une congruence par un facteur non inversible.
- Oublier que $0\le r<b$.
- Confondre « $a\mid b$ » et « $b\mid a$ ».
- Ne pas justifier la période des restes.

## ✅ À retenir
- $a=bq+r$, $0\le r<b$.
- Congruences compatibles avec $+$, $\times$, puissance.
- Période des restes pour les grandes puissances.
`

DEEP_MATHS_4["pgcd-ppcm"] = String.raw`## 💡 L'essentiel en une phrase
Le **PGCD** de deux entiers se calcule par l'**algorithme d'Euclide** ; les théorèmes de **Bézout** et de **Gauss** servent à résoudre des équations $ax+by=c$ en nombres entiers.

## 📚 1. PGCD et PPCM
- $\text{PGCD}(a,b)$ : plus grand diviseur commun ; $\text{PPCM}(a,b)$ : plus petit multiple commun strictement positif.
- Relation fondamentale : $\text{PGCD}(a,b)\times\text{PPCM}(a,b)=|ab|$.
- $a$ et $b$ sont **premiers entre eux** si $\text{PGCD}(a,b)=1$.

## 📚 2. Algorithme d'Euclide
$\text{PGCD}(a,b)=\text{PGCD}(b,r)$ où $r$ est le reste de la division de $a$ par $b$. On répète jusqu'à obtenir un reste nul : le dernier reste non nul est le PGCD.

## 📚 3. Théorème de Bézout
$a$ et $b$ sont premiers entre eux $\iff$ il existe $u,v\in\mathbb Z$ tels que $au+bv=1$.
Plus généralement, $\text{PGCD}(a,b)=d\iff$ il existe $u,v$ tels que $au+bv=d$ (et les $au+bv$ sont les multiples de $d$).

## 📚 4. Théorème de Gauss
Si $a\mid bc$ et $\text{PGCD}(a,b)=1$ alors $a\mid c$.
- **Corollaire** : si $a\mid c$, $b\mid c$ et $\text{PGCD}(a,b)=1$ alors $ab\mid c$.

## 📚 5. Équation diophantienne $ax+by=c$
1. Existence de solutions $\iff\text{PGCD}(a,b)\mid c$.
2. On divise par $d=\text{PGCD}(a,b)$ : $a'x+b'y=c'$ avec $\text{PGCD}(a',b')=1$.
3. On cherche une solution particulière $(x_0,y_0)$ (algorithme d'Euclide étendu).
4. Solutions générales : $\begin{cases}x=x_0+b'k\\y=y_0-a'k\end{cases}$, $k\in\mathbb Z$.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Algorithme d'Euclide
$\text{PGCD}(252,105)$ : $252=2\times105+42$ ; $105=2\times42+21$ ; $42=2\times21+0$. PGCD $=\mathbf{21}$. PPCM $=\dfrac{252\times105}{21}=\mathbf{1\,260}$.

### Exemple 2 — Relation de Bézout
$\text{PGCD}(17,5)=1$ : $17=3\times5+2$ ; $5=2\times2+1$. Remontée : $1=5-2\times2=5-2(17-3\times5)=7\times5-2\times17$. Donc $u=-2$, $v=7$ : $17(-2)+5(7)=1$.

### Exemple 3 — Équation diophantienne
$17x+5y=3$ : solution particulière $(x_0,y_0)=(-6,21)$ (3 fois la relation $-2\cdot17+7\cdot5=1$ donne $-6\cdot17+21\cdot5=3$). Solutions : $x=-6+5k$, $y=21-17k$.

### Exemple 4 — Théorème de Gauss
Résoudre $7x\equiv0\pmod{15}$ : $15\mid7x$ avec $\text{PGCD}(7,15)=1$ ⇒ $15\mid x$.

### Exemple 5 — Système de congruences
$x\equiv1\pmod3$ et $x\equiv2\pmod5$ : $x=1+3k$ ; $1+3k\equiv2\pmod5\Rightarrow3k\equiv1\Rightarrow k\equiv2\pmod5$ ; $x=7+15m$. Solution : $x\equiv7\pmod{15}$.

## ✏️ Exercices d'entraînement
**Exercice 1.** Calculer $\text{PGCD}(1\,001,462)$.

:::corrige
$1001=2\times462+77$ ; $462=6\times77+0$. PGCD $=\mathbf{77}$.
:::

**Exercice 2.** Résoudre $3x+7y=1$ dans $\mathbb Z^2$.

:::corrige
Solution particulière $(x_0,y_0)=(-2,1)$ ($-6+7=1$). Solutions : $x=-2+7k$, $y=1-3k$.
:::

**Exercice 3.** Montrer que $\text{PGCD}(n,n+1)=1$ pour tout $n\in\mathbb N^*$.

:::corrige
Un diviseur commun $d$ divise $(n+1)-n=1$, donc $d=1$.
:::

**Exercice 4.** Existe-t-il des entiers tels que $6x+9y=10$ ?

:::corrige
$\text{PGCD}(6,9)=3$ ne divise pas 10 : **aucune** solution.
:::

## ⚠️ Pièges classiques du BAC
- Oublier de vérifier que $d\mid c$ avant de chercher des solutions.
- Se tromper dans la **remontée** d'Euclide.
- Oublier le paramètre $k\in\mathbb Z$ dans les solutions générales.
- Confondre Bézout (existence) et Gauss (divisibilité).

## ✅ À retenir
- Euclide : $\text{PGCD}(a,b)=\text{PGCD}(b,r)$.
- Bézout : $au+bv=1\iff\text{PGCD}=1$ ; Gauss : $a\mid bc$, $a\wedge b=1\Rightarrow a\mid c$.
- $ax+by=c$ : solutions si et seulement si $d\mid c$.
`
