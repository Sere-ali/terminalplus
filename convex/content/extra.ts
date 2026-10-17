// Résumés supplémentaires (Physique-Chimie, Français…), ajoutés au fur et à mesure.
// Clé = clé de la leçon (commune aux séries C et D) ou slug complet (ex. "d-pc-cinematique").

export const EXTRA: Record<string, string> = {}

EXTRA["cinematique"] = String.raw`## 💡 L'essentiel en une phrase
La **cinématique** décrit **comment un point se déplace** (position, vitesse, accélération) **sans chercher la cause** du mouvement.

## 📚 1. Les trois vecteurs du mouvement
Dans un repère $(O;\vec i,\vec j,\vec k)$ :
- **Vecteur position** : $\overrightarrow{OM}=x\,\vec i+y\,\vec j+z\,\vec k$.
- **Vecteur vitesse** : $\vec v=\dfrac{d\overrightarrow{OM}}{dt}$ (on dérive la position).
- **Vecteur accélération** : $\vec a=\dfrac{d\vec v}{dt}$ (on dérive la vitesse).
Le vecteur vitesse est **tangent à la trajectoire**. Unités : $\text{m}$, $\text{m/s}$, $\text{m/s}^2$.

**Accélération tangentielle et normale** : $a_T=\dfrac{dv}{dt}$ (change la valeur de la vitesse) et $a_N=\dfrac{v^2}{R}$ (change sa direction, vers le centre de la trajectoire).

## 🏃 2. Les trois mouvements à connaître
| Mouvement | Condition | Équations horaires |
|---|---|---|
| **Rectiligne uniforme** | $a=0$, $v$ constante | $x(t)=vt+x_0$ |
| **Rectiligne uniformément varié** | $a$ constante | $v(t)=at+v_0$ ; $x(t)=\tfrac12at^2+v_0t+x_0$ |
| **Circulaire uniforme** | $v$ constante, trajectoire circulaire de rayon $R$ | $\theta(t)=\omega t+\theta_0$ |

**Relations utiles**
- Sans durée : $v^2-v_0^2=2a\,(x-x_0)$ (et $v^2=2ax$ si départ au repos depuis $x_0=0$).
- Circulaire uniforme : $v=R\omega$, $s=R\theta$, $a_T=0$, $a_N=\dfrac{v^2}{R}=R\omega^2$, période $T=\dfrac{2\pi}{\omega}$.
- Mouvement rectiligne **accéléré** si $a$ et $v$ ont le **même signe**, **retardé** (freinage) sinon.

## ✍️ 3. Méthode : exploiter un enregistrement
1. Mesurer les distances entre positions successives du mobile.
2. Vitesse à l'instant $t_i$ : $v_i\approx\dfrac{M_{i-1}M_{i+1}}{2\tau}$ ($\tau$ = durée entre deux points).
3. Accélération : $a_i\approx\dfrac{v_{i+1}-v_{i-1}}{2\tau}$.
4. Si les distances sont égales : mouvement **uniforme** ; si elles augmentent régulièrement : **uniformément accéléré**.

## ✅ Exemple corrigé
Un élève démarre sans vitesse initiale avec $a=2\ \text{m/s}^2$ sur une piste rectiligne.
- $v(t)=2t$ ; il atteint $v=8\ \text{m/s}$ à $t=4\ \text{s}$.
- Distance parcourue : $x=\tfrac12\times2\times4^2=16\ \text{m}$ (vérification : $v^2=2ax\Rightarrow64=2\times2\times16$ ✔).

## ⚠️ Pièges fréquents
- Mélanger **vitesse** (vecteur) et **valeur de la vitesse**.
- Oublier de convertir : $72\ \text{km/h}=20\ \text{m/s}$ (diviser par $3{,}6$).
- Écrire $a_N=0$ dans un virage : sur une trajectoire courbe, $a_N\neq0$.

## 🏆 À retenir pour le BAC
Sache écrire les équations horaires à partir de $a$, $v_0$, $x_0$, et utiliser $v^2-v_0^2=2a\Delta x$.`

EXTRA["centre-inertie"] = String.raw`## 💡 L'essentiel en une phrase
Les **forces** appliquées à un solide déterminent l'**accélération** de son centre d'inertie $G$ : c'est la **deuxième loi de Newton**.

## 📚 1. Référentiel galiléen
Un référentiel est **galiléen** si le **principe d'inertie** y est vérifié (un solide isolé est au repos ou en mouvement rectiligne uniforme). Exemples : référentiel **terrestre** (pour des expériences courtes), **géocentrique** (satellites de la Terre), **héliocentrique** (planètes).

## 🎯 2. Théorème du centre d'inertie (TCI)
Dans un référentiel galiléen :
$$\sum\vec F_{ext}=m\,\vec a_G$$
- Si $\sum\vec F_{ext}=\vec0$ : $\vec a_G=\vec0$ et $G$ est immobile ou en mouvement rectiligne uniforme.
- On **projette** la relation sur des axes bien choisis pour obtenir des équations scalaires.

## ⚡ 3. Théorème de l'énergie cinétique (TEC)
Entre deux positions $A$ et $B$ :
$$\tfrac12mv_B^2-\tfrac12mv_A^2=\sum W_{A\to B}(\vec F_{ext})$$
- **Travail d'une force constante** : $W=\vec F\cdot\overrightarrow{AB}=F\cdot AB\cdot\cos\alpha$.
- **Travail du poids** : $W=mg\,(z_A-z_B)$, positif si le solide descend.
- La réaction normale d'un support **sans frottement** ne travaille pas ($\perp$ au déplacement).
Le TEC est idéal quand on cherche une **vitesse** entre deux positions, sans le temps.

## ✍️ 4. Protocole de résolution
1. Définir le **système** (le solide).
2. Choisir le **référentiel galiléen**.
3. Faire le **bilan des forces** (poids, réaction, frottement, tension…) et les **représenter sur un schéma**.
4. Appliquer le **TCI** (ou le TEC) et **projeter**.
5. Résoudre, vérifier l'unité et le sens du résultat.

## ✅ Exemple corrigé : plan incliné
Un solide de masse $m$ glisse **sans frottement** sur un plan incliné d'un angle $\alpha=30^\circ$ ($g=10\ \text{m/s}^2$).
- Forces : poids $\vec P$ et réaction $\vec R$ (perpendiculaire au plan).
- TCI projeté sur l'axe du plan (vers le bas) : $mg\sin\alpha=ma\Rightarrow a=g\sin\alpha=5\ \text{m/s}^2$.
- Après $2\ \text{m}$ sans vitesse initiale : $v^2=2a\,d=20$ donc $v\approx4{,}5\ \text{m/s}$.
- Vérification avec le TEC : $\tfrac12mv^2=mg\,h$ avec $h=2\sin30^\circ=1\ \text{m}$ donne $v^2=20$ ✔.
**Avec frottement constant $f$** : $a=g\sin\alpha-\dfrac fm$.

## ⚠️ Pièges fréquents
- Oublier une force (surtout la **réaction** du support).
- Se tromper de signe dans la projection.
- Appliquer le TCI dans un référentiel non galiléen.

## 🏆 À retenir pour le BAC
TCI pour trouver $\vec a$ (donc $v(t)$ et $x(t)$), TEC pour trouver une **vitesse** entre deux points.`

EXTRA["champs-uniformes"] = String.raw`## 💡 L'essentiel en une phrase
Dans un **champ uniforme** (pesanteur $\vec g$ ou électrique $\vec E$), le mouvement d'une particule ou d'un projectile est **parabolique** et se calcule avec les **équations horaires**.

## 📚 1. Champ de pesanteur uniforme (projectile)
On néglige les frottements : la seule force est le poids, donc $\vec a=\vec g$ (vertical, vers le bas).
Lancement depuis l'origine avec la vitesse $v_0$ faisant l'angle $\alpha$ avec l'horizontale ($y$ vers le haut) :
$$x(t)=v_0\cos\alpha\ t\qquad y(t)=-\tfrac12gt^2+v_0\sin\alpha\ t$$
**Trajectoire (parabole)** : $\;y=-\dfrac{g}{2v_0^2\cos^2\alpha}\,x^2+x\tan\alpha$
- **Sommet** (flèche) : $t_S=\dfrac{v_0\sin\alpha}{g}$ et $h=\dfrac{v_0^2\sin^2\alpha}{2g}$.
- **Portée** (retour à la hauteur de départ) : $d=\dfrac{v_0^2\sin2\alpha}{g}$, **maximale pour $\alpha=45^\circ$**.

## ⚡ 2. Champ électrostatique uniforme
Entre deux plaques parallèles distantes de $d$ avec la tension $U$ : $E=\dfrac Ud$.
La force sur une charge $q$ est $\vec F=q\vec E$, donc $\vec a=\dfrac{q\vec E}{m}$ (le poids est négligeable devant $F$ pour un électron).
- Un **électron** ($q=-e$) est dévié **à l'opposé** de $\vec E$.
- **Accélération initiale** par une tension $U_{acc}$ : $\tfrac12mv_0^2=eU_{acc}$.
- **Déflexion** dans les plaques (longueur $\ell$) : à la sortie
$$y_S=\frac{eU\ell^2}{2mdv_0^2}\qquad\tan\alpha=\frac{eU\ell}{mdv_0^2}$$
- **Sur un écran** à la distance $L$ du centre des plaques : $Y=L\tan\alpha$ (déflexion électrostatique).

## ✍️ 3. Méthode
1. Système, référentiel, **bilan des forces** (poids seul, ou force électrique seule).
2. TCI : $\vec a=\vec g$ ou $\vec a=\dfrac{q\vec E}m$ ; choisir les axes.
3. **Intégrer** deux fois : $a\to v\to$ position (avec les conditions initiales).
4. Éliminer $t$ pour avoir l'équation de la trajectoire.

## ✅ Exemple corrigé
Un ballon est lancé à $v_0=10\ \text{m/s}$ avec $\alpha=45^\circ$ ($g=10\ \text{m/s}^2$).
- Portée : $d=\dfrac{10^2\times\sin90^\circ}{10}=10\ \text{m}$.
- Hauteur maximale : $h=\dfrac{100\times0{,}5}{20}=2{,}5\ \text{m}$.

## ⚠️ Pièges fréquents
- Écrire $a=0$ sur l'axe vertical (c'est sur l'axe **horizontal** que $a=0$).
- Oublier que l'électron va **contre** le champ.
- Négliger de convertir les unités ($\text{cm}\to\text{m}$, $\text{kV}\to\text{V}$).

## 🏆 À retenir pour le BAC
Établis toujours $\vec a$ d'abord, puis $v(t)$, $x(t)$, $y(t)$, puis la trajectoire.`

EXTRA["nucleaire-spontanees"] = String.raw`## 💡 L'essentiel en une phrase
Certains noyaux instables **se désintègrent spontanément** en émettant un rayonnement ; leur nombre **diminue de façon exponentielle** avec le temps.

## 📚 1. Notions de base
- **Nucléide** $\,{}^{A}_{Z}X$ : $A$ nucléons (protons + neutrons), $Z$ protons.
- **Isotopes** : même $Z$, $A$ différent (ex. carbone 12 et carbone 14).
- **Unité de masse atomique** : $1\ \text{u}=1{,}66\times10^{-27}\ \text{kg}$.

## ☢️ 2. Les types de radioactivité
| Type | Particule émise | Transformation |
|---|---|---|
| **$\alpha$** | noyau d'hélium $\,{}^4_2\text{He}$ | $Z\to Z-2$ et $A\to A-4$ |
| **$\beta^-$** | électron $\,{}^0_{-1}e$ | $Z\to Z+1$, $A$ inchangé |
| **$\beta^+$** | positon $\,{}^0_{+1}e$ | $Z\to Z-1$, $A$ inchangé |
| **$\gamma$** | photon (énergie) | pas de changement de $A$ ni de $Z$ |

**Lois de conservation** : la somme des $A$ et la somme des $Z$ sont **conservées** dans l'équation de la réaction.
Exemple : $\,{}^{14}_{6}\text{C}\to{}^{14}_{7}\text{N}+{}^{0}_{-1}e$ (radioactivité $\beta^-$ du carbone 14).

## 📉 3. Loi de décroissance radioactive
- $N(t)=N_0\,e^{-\lambda t}$ où $\lambda$ est la **constante radioactive** (en $\text{s}^{-1}$).
- **Activité** : $A(t)=\lambda N(t)=A_0e^{-\lambda t}$, en **becquerels** (1 Bq = 1 désintégration par seconde).
- **Période (demi-vie)** $T$ : durée au bout de laquelle la moitié des noyaux a disparu : $\;T=\dfrac{\ln2}{\lambda}$.
- Après $n$ périodes : $N=\dfrac{N_0}{2^n}$.

## ✍️ 4. Datation au carbone 14
Un organisme vivant garde une activité constante ; à sa mort, elle décroît. L'âge est
$$t=\frac1\lambda\ln\frac{A_0}{A}=\frac{T}{\ln2}\ln\frac{A_0}{A}$$

## ✅ Exemple corrigé
Un objet a une activité égale à **25 %** de celle d'un échantillon vivant ($T=5\,730$ ans, donnée de l'énoncé).
$\dfrac{A_0}{A}=4=2^2$ : deux périodes se sont écoulées, donc $t=2T=11\,460$ ans.

## ⚠️ Pièges fréquents
- Oublier de convertir la période en **secondes** pour calculer $\lambda$ en $\text{s}^{-1}$.
- Confondre **activité** (désintégrations par seconde) et **nombre de noyaux**.
- Mal équilibrer l'équation (vérifie $A$ et $Z$ de chaque côté).

## 🏆 À retenir pour le BAC
Équilibre l'équation avec les deux lois de conservation, retiens $T=\dfrac{\ln2}\lambda$ et utilise $N=N_0e^{-\lambda t}$ pour dater.`

EXTRA["solutions-ph"] = String.raw`## 💡 L'essentiel en une phrase
Le **pH** mesure l'**acidité** d'une solution aqueuse ; il se calcule à partir de la concentration en ions oxonium $\text{H}_3\text{O}^+$.

## 📚 1. L'eau et son autoprotolyse
L'eau est un solvant **ionisant, dissociant, hydratant et dispersant**. Elle réagit un peu avec elle-même :
$$2\,\text{H}_2\text{O}\rightleftharpoons\text{H}_3\text{O}^++\text{OH}^-$$
**Produit ionique** à $25\,^\circ\text{C}$ : $\;K_e=[\text{H}_3\text{O}^+]\,[\text{OH}^-]=10^{-14}$.

## 🧪 2. Concentrations
- **Concentration molaire** : $C=\dfrac nV$ (en $\text{mol/L}$) avec $n=\dfrac mM$.
- **Concentration massique** : $C_m=\dfrac mV=C\times M$ (en $\text{g/L}$).

## 📏 3. Définition du pH
$$\text{pH}=-\log[\text{H}_3\text{O}^+]\iff[\text{H}_3\text{O}^+]=10^{-\text{pH}}$$
- $\text{pH}<7$ : solution **acide** ; $\text{pH}=7$ : **neutre** ; $\text{pH}>7$ : **basique** (à $25\,^\circ\text{C}$).
- Relation valable pour des solutions **diluées** ($[\text{H}_3\text{O}^+]\le10^{-1}\ \text{mol/L}$).
- Une unité de pH en moins = concentration en $\text{H}_3\text{O}^+$ **multipliée par 10**.

## ⚖️ 4. Deux lois pour calculer les concentrations
- **Électroneutralité** : somme des concentrations des charges $+$ = somme des charges $-$ (en tenant compte des charges).
- **Conservation de la matière** : la quantité d'un élément introduit se retrouve dans les espèces qui le contiennent.

## ✅ Exemple corrigé
Une boisson a un pH de $3{,}5$.
$[\text{H}_3\text{O}^+]=10^{-3{,}5}\approx3{,}2\times10^{-4}\ \text{mol/L}$ et $[\text{OH}^-]=\dfrac{10^{-14}}{3{,}2\times10^{-4}}\approx3{,}2\times10^{-11}\ \text{mol/L}$.
La boisson est **acide**.

## ⚠️ Pièges fréquents
- Oublier le **signe moins** dans $-\log$.
- Prendre le pH pour une concentration.
- Utiliser $K_e=10^{-14}$ à une température autre que $25\,^\circ\text{C}$.

## 🏆 À retenir pour le BAC
Maîtrise $\text{pH}=-\log[\text{H}_3\text{O}^+]$, $K_e$ et les deux lois (électroneutralité, conservation de la matière).`

EXTRA["acide-fort-base-forte"] = String.raw`## 💡 L'essentiel en une phrase
Un **acide fort** (ou une **base forte**) réagit **totalement** avec l'eau : le pH se calcule **directement** à partir de la concentration $C$.

## 📚 1. Acide fort
- Exemple : $\text{HCl}+\text{H}_2\text{O}\rightarrow\text{H}_3\text{O}^++\text{Cl}^-$ (réaction **totale**, une seule flèche).
- Autres monoacides forts : $\text{HNO}_3$, $\text{HBr}$, $\text{HI}$, $\text{HClO}_4$.
- Pour un **monoacide fort** de concentration $C$ : $\;\text{pH}=-\log C$.
- Validité : $10^{-6}\ \text{mol/L}\le C\le10^{-1}\ \text{mol/L}$ (en dessous, l'eau apporte aussi des ions).

## 📚 2. Base forte
- Exemple : $\text{NaOH}\rightarrow\text{Na}^++\text{OH}^-$ (dissociation **totale**).
- Autres : $\text{KOH}$ (monobases fortes).
- Pour une **monobase forte** de concentration $C$ : $\;\text{pH}=14+\log C$.
- Même domaine de validité.
- Usage domestique : acides forts dilués (détartrants), bases fortes (soude pour déboucher, savonnerie).

## 🔀 3. Mélange acide fort + base forte
La réaction est **totale et exothermique** : $\;\text{H}_3\text{O}^++\text{OH}^-\rightarrow2\,\text{H}_2\text{O}$.
1. Calculer $n_a=C_aV_a$ et $n_b=C_bV_b$.
2. Comparer :
   - $n_a>n_b$ : excès d'acide, $[\text{H}_3\text{O}^+]=\dfrac{n_a-n_b}{V_a+V_b}$, $\text{pH}=-\log[\text{H}_3\text{O}^+]$.
   - $n_a<n_b$ : excès de base, $[\text{OH}^-]=\dfrac{n_b-n_a}{V_a+V_b}$, $\text{pH}=14+\log[\text{OH}^-]$.
   - $n_a=n_b$ : **équivalence**, $\text{pH}=7$.
3. **Mélange de deux acides forts** : $[\text{H}_3\text{O}^+]=\dfrac{C_1V_1+C_2V_2}{V_1+V_2}$.

## ✅ Exemple corrigé
On mélange $20\ \text{mL}$ d'acide chlorhydrique à $0{,}10\ \text{mol/L}$ et $10\ \text{mL}$ de soude à $0{,}10\ \text{mol/L}$.
- $n_a=2{,}0\ \text{mmol}$, $n_b=1{,}0\ \text{mmol}$ : **excès d'acide** de $1{,}0\ \text{mmol}$.
- $[\text{H}_3\text{O}^+]=\dfrac{1{,}0\times10^{-3}}{0{,}030}\approx3{,}3\times10^{-2}\ \text{mol/L}$.
- $\text{pH}=-\log(3{,}3\times10^{-2})\approx1{,}5$.

## ⚠️ Pièges fréquents
- Oublier de **diviser par le volume total** du mélange.
- Utiliser $\text{pH}=-\log C$ pour une base forte.
- Oublier les unités ($\text{mL}\to\text{L}$).

## 🏆 À retenir pour le BAC
$\text{pH}=-\log C$ (acide fort), $\text{pH}=14+\log C$ (base forte) et le **tableau en quantités de matière** pour les mélanges.`

EXTRA["commentaire-compose"] = String.raw`## 💡 L'essentiel en une phrase
Le **commentaire composé** est une analyse **organisée** d'un texte : on explique **ce que le texte dit** et **comment il le dit**, en suivant des **centres d'intérêt** (axes de lecture).

## 📚 1. Comprendre le libellé
Le sujet comprend le **texte** et un **libellé** (consigne). Souvent il propose deux ou trois centres d'intérêt. Exemple : « Vous ferez de ce texte un commentaire composé. Vous pourrez, par exemple, étudier la dénonciation de la colonisation, puis la force de l'écriture. »
**À faire** : souligne les mots-clés et reformule chaque centre d'intérêt avec tes mots.

## 🗺️ 2. Préparer le plan détaillé
1. Lis le texte **deux fois** (sens général puis détails).
2. Relève des **indices** : énonciation (je/nous), lexique (champs lexicaux), temps verbaux, figures de style, rythme, ponctuation, tonalités.
3. Classe ces indices **sous chaque centre d'intérêt** (titres + sous-titres).
4. Chaque idée doit être **justifiée par une citation** et **analysée** (quel effet de sens ?).

## ✍️ 3. Rédiger
**Introduction** (un paragraphe) :
1. **Perspective générale** (le thème ou l'époque, 1–2 phrases).
2. **Présentation du texte** : auteur, titre, genre, source, sujet.
3. **Annonce des centres d'intérêt** (le plan).
**Développement** : un grand paragraphe par centre d'intérêt, composé de **sous-parties**. Chaque sous-partie suit la chaîne :
> **Idée** → **Indice** (citation courte entre guillemets) → **Analyse** (procédé + effet de sens).
Utilise des **transitions** entre les centres d'intérêt et une **mini-conclusion** à la fin de chacun.
**Conclusion** : **bilan** (réponse aux centres d'intérêt) puis **ouverture** (rapprochement avec une autre œuvre ou un autre texte sur le même thème).

## ✅ Exemple de modèle (introduction)
« Au milieu du XXᵉ siècle, les écrivains africains font de la littérature une arme contre l'injustice. Dans ce poème, [auteur] [verbe] … Nous verrons d'abord comment le poète dénonce …, puis comment l'écriture donne force à son message. »

## ⚠️ Pièges fréquents
- **Paraphraser** le texte au lieu de l'analyser.
- Faire un **catalogue** de figures de style sans dire leur effet.
- Faire **deux parties « fond » puis « forme »** séparées : mélange toujours le fond et la forme dans chaque centre d'intérêt.
- Citations trop longues ou absentes.

## 🏆 À retenir pour le BAC
**Plan clair + citation + analyse** dans chaque paragraphe. Soigne l'introduction et la conclusion, relis-toi pour l'orthographe.`

EXTRA["dissertation-litteraire"] = String.raw`## 💡 L'essentiel en une phrase
La **dissertation littéraire** est un devoir où tu **réponds à une question sur la littérature** par une argumentation **organisée** appuyée sur des **exemples d'œuvres**.

## 📚 1. Analyser le sujet
Le sujet comporte une **information** (souvent une citation) et une **consigne** (« Vous direz… », « Discutez… », « Commentez… »).
- Souligne les **mots-clés** et explique leur sens.
- **Reformule** le sujet avec tes mots.
- Dégage la **problématique** : la question qu'il pose (par exemple : « La littérature doit-elle seulement créer de la beauté ? »).
Les sujets tournent autour de **trois axes** : le point de vue de l'**auteur** (pourquoi/comment écrit-on ?), l'**œuvre** (réalité ou imagination ? beau, vrai, bon ?), le **lecteur** (que cherche-t-on, quels effets ?).

## 🗂️ 2. Chercher les idées et construire le plan
- Cherche des **arguments** et des **exemples** (œuvres lues en classe, personnages, auteurs africains et étrangers).
- **Types de plans**
  - **Dialectique** : thèse $\to$ antithèse $\to$ synthèse (sujet à discuter).
  - **Thématique** : plusieurs aspects d'une même idée.
  - **Analytique** : causes $\to$ conséquences.
- Classe les arguments en **parties** et **sous-parties**, du moins fort au plus fort, avec des **transitions**.

## ✍️ 3. Rédiger
**Introduction**
1. **Perspective générale** (amener le sujet).
2. **Sujet** recopié et **reformulé**.
3. **Problématique**.
4. **Annonce du plan**.
**Chaque paragraphe argumentatif**
> **Argument** → **Explication** → **Exemple** (œuvre, auteur, citation courte) → **Phrase conclusive** (et transition).
**Conclusion**
- **Bilan** : réponse claire à la problématique.
- **Ouverture** : élargir vers une autre question ou un autre thème.

## ✅ Exemple de problématisation
Sujet : « Le but ultime de la vie d'un homme est de créer des œuvres de beauté » (idée défendue par L. S. Senghor). Partagez-vous ce point de vue pour la littérature ?
- Mots-clés : **but ultime**, **œuvres de beauté**, **littérature**.
- Problématique : la littérature a-t-elle pour seule mission d'être belle ou doit-elle aussi dénoncer, éduquer, engager ?
- Plan dialectique : I. La littérature est création de beauté. II. Mais elle est aussi engagée et utile. III. Beauté et engagement se complètent.

## ⚠️ Pièges fréquents
- Réciter un **cours** sur l'œuvre sans répondre au sujet.
- **Oublier les exemples** ou les citer sans les expliquer.
- Plan sans **transition**, ou un « hors-sujet » (traiter un autre problème).

## 🏆 À retenir pour le BAC
Un sujet bien analysé = une copie à moitié réussie. Écris la **problématique**, annonce ton **plan**, et appuie **chaque idée** sur un **exemple précis**.`
