// Leçons approfondies – SVT (séries C et D)

export const DEEP_SVT: Record<string, string> = {}

DEEP_SVT["heredite"] = String.raw`## 💡 L'essentiel en une phrase
Les caractères héréditaires sont déterminés par des **gènes** portés par les chromosomes ; leur transmission obéit aux **lois de Mendel**, qu'on vérifie avec des **croisements** et des **échiquiers de croisement**.

## 📚 1. Vocabulaire
- **Gène** : portion d'ADN qui détermine un caractère ; **allèle** : version d'un gène.
- **Locus** : emplacement du gène sur le chromosome.
- **Génotype** : ensemble des allèles ; **phénotype** : caractère observable.
- **Homozygote** (deux allèles identiques, $AA$ ou $aa$) / **hétérozygote** ($Aa$).
- Allèle **dominant** (s'exprime chez l'hétérozygote) / **récessif** (ne s'exprime qu'à l'état homozygote).
- **Lignée pure** : individus homozygotes, qui donnent toujours le même phénotype.

## 📚 2. Monohybridisme (un seul caractère)
Exemple : croisement de pois à graines lisses $(LL)$ et ridées $(ll)$ de lignées pures.
- **Première loi de Mendel (uniformité)** : tous les hybrides de la $F_1$ sont identiques ($Ll$, lisses).
- **Deuxième loi (disjonction)** : en $F_2$ ($Ll\times Ll$) on obtient $\tfrac34$ lisses et $\tfrac14$ ridées, soit les génotypes $\tfrac14LL,\ \tfrac12Ll,\ \tfrac14ll$.
- Les gamètes sont **purs** : chacun ne porte qu'un seul allèle.

| Gamètes | $L$ | $l$ |
|---|---|---|
| $L$ | $LL$ | $Ll$ |
| $l$ | $Ll$ | $ll$ |

## 📚 3. Test-cross (croisement-test)
On croise un individu au phénotype dominant de génotype inconnu avec un homozygote **récessif** $(aa)$.
- Si tous les descendants ont le phénotype dominant : l'individu est $AA$.
- Si la moitié est de chaque phénotype : il est $Aa$.

## 📚 4. Dihybridisme (deux caractères)
Deux gènes portés par **deux paires de chromosomes différentes** (gènes indépendants).
- Croisement $AaBb\times AaBb$ : proportions $\dfrac{9}{16}\ [A,B]$ ; $\dfrac{3}{16}\ [A,b]$ ; $\dfrac{3}{16}\ [a,B]$ ; $\dfrac1{16}\ [a,b]$.
- **Troisième loi** : indépendance de la transmission des caractères. Elle s'explique par le **brassage interchromosomique** à la méiose.
- Test-cross $AaBb\times aabb$ : 4 phénotypes en proportions égales ($\tfrac14$ chacun).

## 📚 5. Gènes liés et crossing-over
Quand deux gènes sont sur le **même chromosome** (gènes liés), ils ont tendance à être transmis ensemble : le test-cross donne deux phénotypes **parentaux** majoritaires et deux **recombinés** minoritaires (par **crossing-over**). Le pourcentage de recombinés mesure la distance entre les gènes (en centimorgans).

## 📚 6. Cas particuliers
- **Codominance** : les deux allèles s'expriment (groupe sanguin AB).
- **Dominance incomplète** : phénotype intermédiaire de l'hétérozygote (fleurs roses chez le mirabilis).
- **Allèles létaux** : certains génotypes ne sont pas viables.
- **Hérédité liée au sexe** : gène porté par le chromosome $X$ (hémophilie, daltonisme).

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Résultat d'un croisement
Croisement $Ll\times Ll$ : 400 descendants. On attend 300 lisses et 100 ridées (3:1).

### Exemple 2 — Identification d'un génotype
Un pois lisse croisé avec un pois ridé donne 52 lisses et 48 ridés : proportions 1:1, donc le parent lisse est **hétérozygote** $Ll$.

### Exemple 3 — Dihybridisme
Pois jaunes lisses $(AaBb)\times$ pois jaunes lisses $(AaBb)$ avec 1 600 descendants : $\dfrac{9}{16}\times1600=900$ jaunes lisses ; $300$ jaunes ridés ; $300$ verts lisses ; $100$ verts ridés.

### Exemple 4 — Gènes liés
Test-cross : 42 % $[A,B]$, 42 % $[a,b]$, 8 % $[A,b]$, 8 % $[a,B]$. Les phénotypes parentaux (84 %) sont majoritaires : les gènes sont **liés**. Distance : $16$ centimorgans.

### Exemple 5 — Hérédité liée au X (daltonisme)
Une mère conductrice $(X^DX^d)$ et un père normal $(X^DY)$ : parmi les garçons, la moitié est daltonienne ; les filles sont normales (la moitié étant conductrices).

## ✏️ Exercices d'entraînement
**Exercice 1.** Chez la drosophile, le gène « ailes vestigiales » $(vg)$ est récessif sur « ailes normales » $(vg^+)$. Donner le résultat du croisement de deux hétérozygotes.

:::corrige
$vg^+vg\times vg^+vg$ : $\tfrac34$ ailes normales ($\tfrac14\,vg^+vg^+$ + $\tfrac12\,vg^+vg$) et $\tfrac14$ ailes vestigiales ($vg\,vg$).
:::

**Exercice 2.** Un test-cross de $AaBb$ avec $aabb$ donne 25 % de chaque phénotype. Que peut-on conclure ?

:::corrige
Les quatre phénotypes sont équiprobables : les gènes sont **indépendants** (portés par des chromosomes différents).
:::

**Exercice 3.** Deux parents de groupe sanguin AB et O peuvent-ils avoir un enfant de groupe AB ?

:::corrige
Non : le parent O donne toujours l'allèle $O$, donc les enfants sont $A\,O$ ou $B\,O$ (groupes A ou B).
:::

**Exercice 4.** Un homme daltonien $(X^dY)$ et une femme normale non porteuse $(X^DX^D)$ : quelle est la probabilité d'avoir un fils daltonien ?

:::corrige
Les fils reçoivent le $Y$ du père et un $X^D$ de la mère : tous normaux. Probabilité **0**. Les filles seront conductrices $(X^DX^d)$.
:::

## ⚠️ Pièges classiques du BAC
- Écrire le génotype d'un gamète avec **deux** allèles pour le même gène.
- Oublier la **justification** (« on constate… donc… »).
- Croire que le gène dominant est « le plus fréquent » : dominance et fréquence sont indépendantes.
- Confondre « gènes liés » et « gènes indépendants ».

## ✅ À retenir
- 1ère loi : $F_1$ homogène ; 2e loi : $\tfrac34$ / $\tfrac14$ en $F_2$.
- Dihybridisme : 9 / 3 / 3 / 1 ; test-cross : 1 / 1 / 1 / 1.
- Gènes liés : deux types parentaux + deux types recombinés minoritaires.
`

DEEP_SVT["genetique-humaine"] = String.raw`## 💡 L'essentiel en une phrase
L'étude du **caryotype** et des **arbres généalogiques** permet de détecter les **anomalies chromosomiques** et de déterminer le mode de transmission des **maladies héréditaires**.

## 📚 1. Le caryotype humain
- 46 chromosomes en 23 paires : 22 paires d'**autosomes** et 1 paire de **gonosomes** (XX chez la femme, XY chez l'homme).
- Formules : $46,XX$ (femme) ; $46,XY$ (homme).
- On le réalise sur des cellules en **métaphase** (colchicine), après étalement, coloration et classement par paires.

## 📚 2. Anomalies de nombre
Une erreur de répartition des chromosomes à la méiose (**non-disjonction**) produit des gamètes avec un chromosome en plus ou en moins.
- **Trisomie 21** (syndrome de Down) : $47,XX,+21$ ou $47,XY,+21$.
- **Syndrome de Klinefelter** : $47,XXY$ (homme).
- **Syndrome de Turner** : $45,X$ (femme).
- Le risque de trisomie 21 augmente avec l'âge de la mère.

## 📚 3. Anomalies de structure
Délétion, translocation, inversion, duplication d'un fragment de chromosome (par exemple le syndrome du « cri du chat »).

## 📚 4. Maladies héréditaires monogéniques
Dues à une mutation d'un seul gène :
- **Autosomique récessive** : drépanocytose, mucoviscidose. Les parents sont hétérozygotes sains.
- **Autosomique dominante** : chorée de Huntington. Un parent atteint suffit.
- **Récessive liée à X** : hémophilie, daltonisme, myopathie de Duchenne ; touche surtout les garçons.

### Drépanocytose
Mutation du gène de la β-globine : un acide aminé change (glutamate → valine). L'hémoglobine S forme des fibres, déforme les globules rouges (forme de faucille). Les hétérozygotes $(AS)$ sont protégés contre le paludisme.

## 📚 5. Analyse d'un arbre généalogique
Méthode :
1. **Dominant ou récessif ?** Deux parents sains qui ont un enfant malade ⇒ allèle **récessif**.
2. **Autosomique ou lié à X ?** Une fille malade de père sain ⇒ pas lié à X récessif ; une maladie transmise de père à fils ⇒ pas liée à X.
3. Déduire les génotypes de chaque individu.
4. Calculer les **probabilités** d'avoir un enfant malade.

## 📚 6. Diagnostic et conseil génétique
Diagnostic prénatal (amniocentèse, biopsie de trophoblaste), diagnostic préimplantatoire, conseil génétique.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Lire un caryotype
$47,XY,+21$ : garçon, 47 chromosomes, un chromosome 21 en plus : **trisomie 21**.

### Exemple 2 — Arbre généalogique
Deux parents sains ont une fille malade. Si la maladie était dominante, un parent serait malade ; donc elle est **récessive**. Le père étant sain, elle n'est pas liée à X récessif (la fille aurait un père atteint) : **autosomique récessive**. Génotypes : parents $Aa$, fille $aa$.

### Exemple 3 — Probabilité
Deux parents $Aa$ : probabilité d'un enfant malade $=\tfrac14$ ; d'un enfant sain porteur $=\tfrac12$ ; d'un enfant sain non porteur $=\tfrac14$.
Pour un enfant sain (dont on ignore s'il est porteur), probabilité d'être porteur $=\dfrac{1/2}{3/4}=\dfrac23$.

### Exemple 4 — Hémophilie
Mère porteuse $(X^HX^h)$ et père sain $(X^HY)$ : fils malade avec une probabilité de $\tfrac12$ chez les garçons, soit $\tfrac14$ pour un enfant quelconque.

### Exemple 5 — Origine d'une trisomie
La non-disjonction de la paire 21 à la méiose I ou II produit un gamète à 24 chromosomes (22 + 2 du 21). Après fécondation par un gamète normal (23), le zygote a 47 chromosomes.

## ✏️ Exercices d'entraînement
**Exercice 1.** Donner le caryotype d'une fille atteinte du syndrome de Turner.

:::corrige
$45,X$ : un seul chromosome sexuel $X$.
:::

**Exercice 2.** Dans une famille, une maladie touche un père et la moitié de ses enfants, filles et garçons, et la mère est saine. Quel mode de transmission est probable ?

:::corrige
Maladie transmise de père à fils et à filles avec une proportion de ½ : **autosomique dominante** (le père $Aa$ × mère $aa$).
:::

**Exercice 3.** Deux parents sains ont un premier enfant drépanocytaire. Quelle est la probabilité que leur second enfant soit lui aussi drépanocytaire ?

:::corrige
Les deux parents sont hétérozygotes $(AS)$ : probabilité $=\tfrac14$ (indépendante du premier enfant).
:::

**Exercice 4.** Expliquer pourquoi un garçon daltonien a une mère porteuse (ou atteinte) du gène.

:::corrige
Le garçon reçoit son unique $X$ de sa mère : l'allèle daltonien ne peut venir que d'elle, qui est donc porteuse ou atteinte.
:::

## ⚠️ Pièges classiques du BAC
- Confondre « fille malade, père sain » avec une maladie liée à X.
- Oublier que chaque naissance est **indépendante**.
- Écrire un caryotype sans la formule chromosomique complète.
- Dire que la trisomie est héréditaire : elle résulte en général d'une **erreur de méiose** (accident).

## ✅ À retenir
- $46,XX$ / $46,XY$ ; trisomie 21 : $47,+21$.
- Parents sains + enfant malade ⇒ récessif.
- Récessive liée à X : atteint surtout les garçons, transmise par la mère.
`

DEEP_SVT["reproduction"] = String.raw`## 💡 L'essentiel en une phrase
La fonction de reproduction est contrôlée par un **dialogue hormonal** entre l'hypothalamus, l'hypophyse et les gonades (testicules, ovaires) fondé sur des **rétrocontrôles**.

## 📚 1. Chez l'homme : la spermatogenèse
- Les **testicules** produisent les spermatozoïdes dans les **tubes séminifères** à partir de la puberté, en continu.
- Étapes : multiplication, croissance, méiose, **spermiogenèse**.
- Les cellules de **Leydig** sécrètent la **testostérone**.
- **Régulation** : l'hypothalamus libère la **GnRH** qui stimule l'hypophyse ; l'hypophyse sécrète **LH** (stimule les cellules de Leydig → testostérone) et **FSH** (stimule la spermatogenèse).
- **Rétrocontrôle négatif** : la testostérone freine la sécrétion de GnRH, LH.

## 📚 2. Chez la femme : le cycle ovarien et utérin
Durée moyenne : **28 jours**.
- **Phase folliculaire** (J1–J14) : un follicule mûrit ; il sécrète des **œstrogènes**. L'endomètre se reconstitue.
- **Ovulation** (J14) : déclenchée par un pic de **LH** (pic préovulatoire) dû à un rétrocontrôle **positif** des œstrogènes à forte concentration.
- **Phase lutéale** (J14–J28) : le follicule rompu devient **corps jaune**, qui sécrète de la **progestérone** (et des œstrogènes). L'endomètre se prépare à la nidation.
- En l'absence de fécondation, le corps jaune dégénère : chute des hormones, **menstruations** (début d'un nouveau cycle).

## 📚 3. Régulation hormonale du cycle
- **FSH** : croissance des follicules.
- **Œstrogènes** : faible dose, rétrocontrôle **négatif** ; forte dose, rétrocontrôle **positif** (pic de LH).
- **LH** : ovulation et formation du corps jaune.
- **Progestérone** : rétrocontrôle négatif en phase lutéale ; maintien de l'endomètre.

## 📚 4. Fécondation, nidation, grossesse
- **Fécondation** dans le tiers supérieur de la trompe : fusion des gamètes → **zygote** (2n).
- **Nidation** vers J7 après la fécondation : l'embryon s'implante dans l'endomètre.
- L'embryon sécrète la **hCG**, qui maintient le corps jaune ⇒ la progestérone reste élevée ⇒ pas de règles. Les tests de grossesse détectent l'hCG.
- Placenta : échanges mère-fœtus et sécrétion d'hormones.

## 📚 5. Maîtrise de la reproduction
- **Contraception** : pilule (œstrogènes + progestatifs : bloque l'ovulation par rétrocontrôle négatif), stérilet, préservatif (seul à protéger des IST).
- **Contragestion** : pilule du lendemain, RU-486.
- **Procréation médicalement assistée** : insémination, FIV.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Effet de la castration
Un homme castré n'a plus de testostérone : la LH est élevée (plus de rétrocontrôle négatif). Si on injecte de la testostérone, la LH diminue ⇒ confirmation du rétrocontrôle.

### Exemple 2 — Interpréter les courbes d'un cycle
Un pic de LH précède l'ovulation de 24 h ; les œstrogènes atteignent un maximum juste avant le pic. Après l'ovulation, la progestérone augmente (corps jaune).

### Exemple 3 — Principe de la pilule
Les hormones de synthèse de la pilule maintiennent des taux constants de progestatifs et d'œstrogènes ⇒ rétrocontrôle négatif sur l'hypophyse ⇒ pas de pic de LH ⇒ **pas d'ovulation**.

### Exemple 4 — Rôle de l'hCG
Entre J8 et J12 après la fécondation, l'hCG augmente. Le corps jaune ne dégénère pas ⇒ progestérone maintenue ⇒ endomètre conservé ⇒ grossesse.

### Exemple 5 — Test de grossesse
Un test urinaire positif révèle la présence d'hCG, 8 à 10 jours après la fécondation.

## ✏️ Exercices d'entraînement
**Exercice 1.** Quelles hormones agissent sur les testicules ? Où sont-elles produites ?

:::corrige
La **LH** (stimule la testostérone) et la **FSH** (stimule la spermatogenèse), toutes deux produites par l'**hypophyse**.
:::

**Exercice 2.** Une femme dont les ovaires ont été retirés reçoit des œstrogènes. Que devient la sécrétion de FSH et de LH ?

:::corrige
Sans ovaires, la FSH et la LH sont élevées (pas de rétrocontrôle). Avec les œstrogènes injectés, elles diminuent (rétrocontrôle négatif).
:::

**Exercice 3.** Pourquoi le corps jaune dégénère-t-il en l'absence de fécondation ?

:::corrige
Sans hCG pour le maintenir, le corps jaune dégénère naturellement vers J26–28 : chute de la progestérone, détachement de l'endomètre (règles).
:::

**Exercice 4.** Expliquer le rétrocontrôle positif du pic de LH.

:::corrige
Quand la concentration des œstrogènes dépasse un seuil pendant plusieurs jours (follicule mûr), elle stimule l'hypophyse au lieu de l'inhiber : la sécrétion de LH s'emballe (pic), ce qui déclenche l'ovulation.
:::

## ⚠️ Pièges classiques du BAC
- Confondre FSH et LH, ou ovulation et menstruation.
- Oublier que l'hypothalamus commande l'hypophyse via la **GnRH**.
- Dire que la pilule « empêche la fécondation » : elle **bloque l'ovulation**.
- Oublier de relier une expérience à son interprétation (« donc, l'organe X contrôle Y »).

## ✅ À retenir
- Homme : LH → testostérone ; FSH → spermatogenèse.
- Femme : pic de LH → ovulation ; corps jaune → progestérone.
- hCG maintient le corps jaune pendant le début de la grossesse.
`

DEEP_SVT["immunologie"] = String.raw`## 💡 L'essentiel en une phrase
L'organisme distingue le **soi** du **non-soi** et se défend par une réaction **non spécifique** (immédiate) puis **spécifique** (anticorps ou cellules) ; le **VIH** détruit les lymphocytes T4 et affaiblit ces défenses.

## 📚 1. Soi et non-soi
- Les cellules d'un organisme portent des marqueurs du soi (le **CMH**, ou HLA).
- Un **antigène** est une molécule étrangère reconnue par le système immunitaire.
- Les **greffes** sont rejetées si les CMH sont incompatibles.

## 📚 2. Immunité non spécifique (innée)
- **Barrières** : peau, muqueuses, larmes, acidité de l'estomac.
- **Réaction inflammatoire** : rougeur, chaleur, gonflement, douleur ; afflux de **phagocytes** (polynucléaires, macrophages).
- **Phagocytose** : adhésion, ingestion, digestion de l'agent pathogène.

## 📚 3. Immunité spécifique à médiation humorale
Elle concerne les antigènes **extracellulaires** (bactéries, toxines) :
1. **Reconnaissance** de l'antigène par un lymphocyte **B** (récepteur) et par un lymphocyte **T4**, après présentation par un macrophage (cellule présentatrice d'antigène).
2. **Activation** : les LT4 sécrètent des **interleukines** qui stimulent les LB.
3. **Multiplication et différenciation** des LB en **plasmocytes** (sécrètent des **anticorps**) et en **cellules mémoire**.
4. Les anticorps se fixent sur l'antigène (complexe immun) ⇒ neutralisation, puis phagocytose.

## 📚 4. Immunité spécifique à médiation cellulaire
Elle concerne les cellules **infectées** ou cancéreuses :
- Les **LT8** reconnaissent l'antigène présenté par les cellules infectées, avec l'aide des LT4.
- Ils se différencient en **LT cytotoxiques** qui détruisent les cellules cibles.

## 📚 5. La mémoire immunitaire : vaccins et sérums
- **Vaccin** : injection d'antigènes inoffensifs ⇒ **réponse primaire** lente, création de cellules mémoire ⇒ protection **durable** (préventif). La **réponse secondaire** est plus rapide et plus intense.
- **Sérothérapie** : injection d'anticorps tout prêts ⇒ protection **immédiate mais temporaire** (curatif).

## 📚 6. Le VIH et le SIDA
- Le **VIH** est un rétrovirus à ARN qui infecte les **lymphocytes T4** (récepteur CD4).
- Il transcrit son ARN en ADN grâce à la **transcriptase inverse**, l'intègre au génome de la cellule et la détruit.
- Évolution : primo-infection → phase asymptomatique (séropositivité) → **SIDA** (maladies opportunistes, chute des LT4).
- **Transmission** : rapports sexuels non protégés, sang, de la mère à l'enfant.
- **Prévention** : préservatif, dépistage, matériel stérile ; **traitement** antirétroviral (trithérapie) qui bloque la multiplication du virus.
- Aucun vaccin efficace à ce jour, car le virus **mute** rapidement.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Réponse primaire et secondaire
Au premier contact avec un antigène $X$, les anticorps apparaissent après 7 jours et atteignent un faible taux. Au second contact, ils apparaissent en 2–3 jours à un taux beaucoup plus élevé : c'est l'effet de la **mémoire immunitaire**.

### Exemple 2 — Expérience de transfert
Des souris sans thymus (sans LT) ne produisent pas d'anticorps contre un antigène nécessitant l'aide des LT ⇒ les LT sont indispensables.

### Exemple 3 — Pourquoi le SIDA rend vulnérable
Le VIH détruit les LT4, qui coordonnent les réponses humorale et cellulaire : sans LT4, ni les LB ni les LT8 ne sont activés ⇒ infections opportunistes.

### Exemple 4 — Vaccin ou sérum ?
Une personne mordue par un animal suspect de rage reçoit **un sérum** (protection immédiate) et **un vaccin** (protection durable).

### Exemple 5 — Test de dépistage
Un test ELISA détecte les **anticorps anti-VIH**. Il faut attendre 3 mois (période de séroconversion) pour un résultat fiable.

## ✏️ Exercices d'entraînement
**Exercice 1.** Expliquer le rôle d'un plasmocyte.

:::corrige
Le plasmocyte est un lymphocyte B différencié, spécialisé dans la sécrétion d'un grand nombre d'**anticorps** spécifiques de l'antigène.
:::

**Exercice 2.** Citer la différence entre immunité humorale et immunité cellulaire.

:::corrige
Humorale : médiée par les **anticorps** (contre les antigènes extracellulaires). Cellulaire : médiée par les **LT cytotoxiques** (contre les cellules infectées ou cancéreuses).
:::

**Exercice 3.** Pourquoi un vaccin est-il préventif et un sérum curatif ?

:::corrige
Le vaccin déclenche la fabrication de cellules mémoire avant l'infection (prévention durable). Le sérum apporte directement des anticorps pour neutraliser un antigène déjà présent (action rapide mais non durable).
:::

**Exercice 4.** Citer trois moyens de prévenir la transmission du VIH.

:::corrige
Utiliser un **préservatif**, utiliser du **matériel d'injection stérile**, **dépister** et traiter la femme enceinte séropositive (prévention de la transmission mère-enfant).
:::

## ⚠️ Pièges classiques du BAC
- Confondre **antigène** (étranger) et **anticorps** (protéine produite par l'organisme).
- Dire que le VIH détruit tous les globules blancs : il cible les **LT4**.
- Confondre séropositivité et SIDA.
- Oublier le rôle de coordination des LT4.

## ✅ À retenir
- LB → plasmocytes → anticorps ; LT8 → LT cytotoxiques.
- Vaccin : mémoire, préventif ; sérum : anticorps, curatif.
- VIH : détruit les LT4 ⇒ SIDA.
`

DEEP_SVT["systeme-nerveux"] = String.raw`## 💡 L'essentiel en une phrase
Le **message nerveux** est un signal électrique (**potentiel d'action**) qui se propage le long des neurones ; il est transmis d'un neurone à l'autre par un **neurotransmetteur** au niveau des **synapses**.

## 📚 1. Le neurone et le réflexe
- Neurone : **corps cellulaire**, **dendrites** (réception), **axone** (conduction), terminaisons synaptiques.
- **Arc réflexe** : récepteur → neurone sensitif → centre nerveux (moelle épinière) → neurone moteur → effecteur (muscle).
- **Réflexe myotatique** (réflexe rotulien) : à deux neurones, mono-synaptique.
- Le **réflexe** est involontaire, rapide et automatique.

## 📚 2. Le potentiel de repos et le potentiel d'action
- **Potentiel de repos** : environ **−70 mV** (intérieur négatif) dû à la pompe $Na^+/K^+$ et à la perméabilité sélective.
- **Potentiel d'action** (PA) : inversion brève de polarité (~+30 mV), phénomène **tout ou rien**, d'**amplitude constante**.
  1. **Dépolarisation** : entrée massive de $Na^+$ (canaux voltage-dépendants).
  2. **Repolarisation** : sortie de $K^+$.
  3. **Hyperpolarisation** puis retour au repos (**période réfractaire**).
- **Seuil** : il faut une stimulation suffisante (≈ −55 mV) pour déclencher un PA.
- L'**intensité** du stimulus est codée par la **fréquence** des PA, pas par leur amplitude.

## 📚 3. Propagation
- Le PA se propage sans atténuation le long de l'axone.
- **Vitesse** : plus grande dans les fibres **myélinisées** (conduction saltatoire, de nœud de Ranvier en nœud de Ranvier) : jusqu'à 100 m/s ; 1 m/s environ dans les fibres amyéliniques.

## 📚 4. La synapse
- Zone de contact entre un neurone et une autre cellule : bouton présynaptique, **fente synaptique** (20 nm), membrane postsynaptique.
- Transmission **chimique** à sens unique :
  1. PA arrivant ⇒ entrée de $Ca^{2+}$.
  2. **Exocytose** des vésicules : libération du **neurotransmetteur** (acétylcholine, par exemple).
  3. Fixation sur des **récepteurs** postsynaptiques ⇒ ouverture de canaux ⇒ **potentiel postsynaptique**.
- Synapse **excitatrice** (dépolarisation) ou **inhibitrice** (hyperpolarisation).
- **Intégration** : addition de plusieurs PPS (sommation spatiale et temporelle).
- Le neurotransmetteur est dégradé par une enzyme (acétylcholinestérase) ou recapté.

## 📚 5. Substances agissant sur la synapse
- Le **curare** bloque les récepteurs de l'acétylcholine ⇒ paralysie.
- Certains insecticides inhibent l'acétylcholinestérase ⇒ contraction permanente.
- Drogues, médicaments (anesthésiques) modifient la transmission.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Enregistrement d'un PA
Sur l'oscilloscope : repos à −70 mV, pic à +30 mV, retour à −70 mV après 2 ms. Amplitude : $30-(-70)=\mathbf{100\ mV}$.

### Exemple 2 — Vitesse de conduction
Deux électrodes distantes de 5 cm enregistrent le PA avec un décalage de 1 ms : $v=\dfrac{0{,}05}{0{,}001}=\mathbf{50\ m/s}$ (fibre myélinisée).

### Exemple 3 — Intensité du stimulus
Un stimulus faible provoque 5 PA/s ; un stimulus fort provoque 40 PA/s, de même amplitude : l'information d'intensité est codée par la **fréquence**.

### Exemple 4 — Effet du curare
Après injection de curare, la stimulation du nerf moteur produit un PA dans l'axone mais **aucune contraction** : le blocage a lieu au niveau de la **synapse neuromusculaire**.

### Exemple 5 — Réflexe myotatique
En frappant le tendon rotulien, le muscle quadriceps s'étire ⇒ récepteur ⇒ neurone sensitif ⇒ synapse avec le motoneurone dans la moelle ⇒ contraction du quadriceps.

## ✏️ Exercices d'entraînement
**Exercice 1.** Pourquoi un stimulus plus fort ne produit-il pas un PA plus grand ?

:::corrige
Le PA obéit à la loi du **tout ou rien** : son amplitude est fixée par les canaux ioniques et les gradients de concentration, pas par le stimulus.
:::

**Exercice 2.** Calculer la vitesse d'un influx qui parcourt 90 cm en 9 ms.

:::corrige
$v=\dfrac{0{,}9}{0{,}009}=\mathbf{100\ m/s}$.
:::

**Exercice 3.** Pourquoi la transmission synaptique est-elle unidirectionnelle ?

:::corrige
Le neurotransmetteur n'est libéré que par l'élément **présynaptique** et les récepteurs ne se trouvent que sur la membrane **postsynaptique**.
:::

**Exercice 4.** Décrire le rôle du calcium dans la synapse.

:::corrige
L'arrivée du PA ouvre des canaux calciques présynaptiques ; l'entrée de $Ca^{2+}$ déclenche la fusion des vésicules synaptiques avec la membrane et la libération du neurotransmetteur.
:::

## ⚠️ Pièges classiques du BAC
- Parler d'« électricité » dans la synapse : elle est **chimique**.
- Croire que l'amplitude du PA varie avec l'intensité du stimulus.
- Oublier de citer **l'ion** ($Na^+$ entre, $K^+$ sort).
- Confondre fibre myélinisée (rapide) et amyélinique.

## ✅ À retenir
- Repos : −70 mV ; PA : tout ou rien, $Na^+$ puis $K^+$.
- Intensité codée en fréquence ; synapse chimique et unidirectionnelle.
- Curare : bloque les récepteurs de l'acétylcholine.
`

DEEP_SVT["glycemie"] = String.raw`## 💡 L'essentiel en une phrase
La **glycémie** (taux de glucose dans le sang) est maintenue autour de **1 g/L** par deux hormones pancréatiques aux effets opposés : l'**insuline** (hypoglycémiante) et le **glucagon** (hyperglycémiant). Le **diabète** résulte d'un dérèglement de cette régulation.

## 📚 1. La glycémie
- Valeur normale à jeun : **0,8 à 1,2 g/L** (≈ 1 g/L).
- Elle varie peu malgré les repas et l'effort : c'est la **constante** du milieu intérieur.
- Dosage : glucomètre, bandelettes, méthode enzymatique.

## 📚 2. Le pancréas endocrine
- Les **îlots de Langerhans** contiennent deux types de cellules :
  - **cellules β** : sécrètent l'**insuline** ;
  - **cellules α** : sécrètent le **glucagon**.
- Ces hormones sont déversées directement dans le sang (glande **endocrine**).

## 📚 3. Régulation de la glycémie
**Hyperglycémie** (après un repas) :
- les cellules β libèrent l'**insuline** ;
- l'insuline stimule l'entrée du glucose dans les cellules (foie, muscles, tissu adipeux) et son stockage sous forme de **glycogène** (glycogénogenèse) ou de graisse ;
- la glycémie **diminue**.

**Hypoglycémie** (jeûne, effort) :
- les cellules α libèrent le **glucagon** ;
- le glucagon stimule dans le foie la **glycogénolyse** (libération de glucose à partir du glycogène) et la néoglucogenèse ;
- la glycémie **augmente**.

C'est une régulation par **rétroaction négative** (feedback).

## 📚 4. Expériences historiques
- **Pancréatectomie** chez le chien : hyperglycémie, diabète.
- **Greffe** du pancréas ou injection d'extrait pancréatique (insuline) : guérison.
- La ligature du canal pancréatique détruit les acini mais pas les îlots : pas de diabète ⇒ les îlots sont à l'origine de la régulation.

## 📚 5. Le diabète sucré
- **Type 1** (insulinodépendant) : destruction auto-immune des cellules β ⇒ **pas d'insuline** ; apparaît chez le sujet jeune ; traitement par **injections d'insuline**.
- **Type 2** : **résistance à l'insuline** (obésité, sédentarité) ⇒ traitement par régime, activité physique, antidiabétiques oraux.
- Signes : polyurie, soif intense, amaigrissement, **glycosurie** (glucose dans les urines lorsque la glycémie dépasse 1,8 g/L).
- Complications : atteintes des yeux, reins, nerfs, vaisseaux.

## 📚 6. Test d'hyperglycémie provoquée
On donne 75 g de glucose et on suit la glycémie : chez un sujet sain elle remonte puis revient à la normale en 2 h ; chez le diabétique, elle reste élevée.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Interprétation d'un résultat
Après un repas, la glycémie passe de 1 g/L à 1,4 g/L puis revient à 1 g/L en 2 h, tandis que l'insulinémie augmente puis diminue : la régulation est **normale**.

### Exemple 2 — Diabète de type 1
Un jeune de 15 ans présente une glycémie à jeun de 3 g/L, une glycosurie et un taux d'insuline quasi nul ⇒ **diabète de type 1** : injections d'insuline.

### Exemple 3 — Expérience de parabiose
On relie les circulations d'un chien diabétique (pancréatectomisé) et d'un chien normal : la glycémie du chien diabétique baisse ⇒ le sang du chien normal contient une substance hypoglycémiante, l'**insuline**.

### Exemple 4 — Diabète de type 2
Un sujet obèse a une glycémie à jeun de 1,6 g/L avec une **insulinémie élevée** : ses cellules cibles ne répondent plus à l'insuline ⇒ **type 2**.

### Exemple 5 — Rôle du foie
Un jeûne de 12 h fait chuter la glycémie à 0,9 g/L, mais elle est maintenue grâce à la libération de glucose par le foie sous l'action du glucagon.

## ✏️ Exercices d'entraînement
**Exercice 1.** Quelle hormone est sécrétée en cas d'hypoglycémie ? Quel est son effet ?

:::corrige
Le **glucagon**, sécrété par les cellules α des îlots de Langerhans ; il stimule la dégradation du glycogène hépatique en glucose ⇒ la glycémie augmente.
:::

**Exercice 2.** Justifier le caractère endocrine du pancréas pour la glycémie.

:::corrige
Les cellules des îlots de Langerhans déversent l'insuline et le glucagon **directement dans le sang**, sans canal excréteur.
:::

**Exercice 3.** Pourquoi un diabétique de type 1 ne peut-il pas prendre l'insuline par voie orale ?

:::corrige
L'insuline est une **protéine** : elle serait digérée dans le tube digestif avant d'être absorbée. On l'injecte donc par voie sous-cutanée.
:::

**Exercice 4.** Le glucose apparaît dans les urines pour une glycémie de 2,2 g/L. Pourquoi ?

:::corrige
Le rein réabsorbe tout le glucose jusqu'à un seuil (≈ 1,8 g/L). Au-delà, la capacité de réabsorption est dépassée et le glucose passe dans l'urine (glycosurie).
:::

## ⚠️ Pièges classiques du BAC
- Confondre **glycémie** (dans le sang) et **glycosurie** (dans l'urine).
- Inverser les rôles de l'insuline et du glucagon.
- Dire que le pancréas est « seulement » endocrine : il a aussi une fonction **exocrine** (suc pancréatique).
- Oublier la rétroaction négative.

## ✅ À retenir
- Glycémie normale : ≈ 1 g/L.
- Insuline ↓ glycémie ; glucagon ↑ glycémie.
- Type 1 : pas d'insuline ; type 2 : résistance à l'insuline.
`

DEEP_SVT["geologie"] = String.raw`## 💡 L'essentiel en une phrase
La surface du globe est découpée en **plaques lithosphériques** mobiles dont les mouvements (divergence, convergence, coulissage) expliquent les séismes, les volcans, les chaînes de montagnes et l'origine de nombreuses **roches**.

## 📚 1. Structure interne du globe
- **Croûte** (continentale ~30 km, océanique ~7 km), **manteau** (jusqu'à 2 900 km), **noyau** externe liquide, noyau interne solide.
- **Lithosphère** : croûte + partie supérieure rigide du manteau (≈ 100 km) ; **asthénosphère** : manteau ductile, sur lequel glissent les plaques.
- Les ondes sismiques (P et S) permettent d'étudier l'intérieur : les ondes S ne traversent pas le noyau externe (liquide).

## 📚 2. Dérive des continents et tectonique des plaques
- Arguments de Wegener : emboîtement des côtes, fossiles identiques, roches et chaînes de montagnes continues, traces glaciaires.
- **Expansion océanique** : la croûte océanique naît aux **dorsales** et s'éloigne ; son âge augmente symétriquement de part et d'autre de la dorsale (anomalies magnétiques).
- **Subduction** : une plaque océanique plonge sous une autre dans les **fosses**.

## 📚 3. Les trois types de frontières
| Frontière | Mouvement | Exemple | Phénomènes |
|---|---|---|---|
| **Divergente** | écartement | dorsale médio-atlantique | volcanisme basaltique, séismes superficiels |
| **Convergente** | rapprochement (subduction ou collision) | Andes, Himalaya | séismes profonds, volcans andésitiques, chaînes de montagnes |
| **Transformante** | coulissage | faille de San Andreas | séismes |

## 📚 4. Séismes et volcans
- **Séisme** : libération brutale d'énergie à partir du **foyer** (hypocentre) ; **épicentre** à la verticale en surface. Mesure : magnitude (échelle de Richter), intensité.
- Les foyers des séismes dessinent le **plan de Benioff** dans une zone de subduction.
- **Volcanisme** : de dorsale (basalte, éruptions effusives) ; de subduction (andésite, éruptions explosives) ; de **point chaud** (Hawaï).

## 📚 5. Les roches
- **Roches magmatiques** (refroidissement d'un magma) : basalte (volcanique), granite (plutonique).
- **Roches sédimentaires** (accumulation, compaction, cimentation) : grès, calcaire, argile ; elles contiennent des **fossiles**.
- **Roches métamorphiques** (transformation à l'état solide par T et P élevées) : schistes, gneiss, marbre.
- **Cycle des roches** : érosion → sédimentation → diagenèse → métamorphisme → fusion → magmatisme.

## 📚 6. Géologie de la Côte d'Ivoire
Le sous-sol ivoirien appartient au **craton ouest-africain** : roches très anciennes (socle précambrien, granites, schistes, roches volcano-sédimentaires du **Birimien**), riches en ressources (or, manganèse, nickel). Le bassin sédimentaire côtier contient du pétrole et du gaz.

## 🧪 Exemples corrigés pas à pas
### Exemple 1 — Vitesse d'expansion
Une dorsale produit une croûte dont l'âge est de 10 millions d'années à 250 km de l'axe : $v=\dfrac{250\ \text{km}}{10\times10^6\ \text{ans}}=\dfrac{2{,}5\times10^7\ \text{cm}}{10^7\ \text{ans}}=\mathbf{2{,}5\ cm/an}$ (de chaque côté ; 5 cm/an d'écartement total).

### Exemple 2 — Localisation d'un épicentre
Trois stations sismiques mesurent les temps d'arrivée des ondes P et S ; la différence $t_S-t_P$ donne la distance à l'épicentre. Les trois cercles de rayon correspondant se coupent en un point : l'**épicentre**.

### Exemple 3 — Plan de Benioff
Les foyers des séismes sont de plus en plus profonds en s'éloignant de la fosse : ils matérialisent la plaque plongeante.

### Exemple 4 — Identifier une roche
Roche à grain fin, noire, avec des bulles ⇒ **basalte** (volcanique, refroidissement rapide). Roche à gros cristaux visibles de quartz, feldspath, mica ⇒ **granite** (plutonique, refroidissement lent).

### Exemple 5 — Âge des fonds océaniques
Les roches les plus jeunes se trouvent à l'axe de la dorsale, les plus vieilles près des continents (au plus 180 millions d'années) ⇒ la croûte océanique est **renouvelée** par la subduction.

## ✏️ Exercices d'entraînement
**Exercice 1.** Comment les anomalies magnétiques démontrent-elles l'expansion des fonds océaniques ?

:::corrige
Les basaltes enregistrent la polarité du champ magnétique terrestre au moment de leur refroidissement. De part et d'autre de la dorsale, des bandes d'aimantation alternée sont **symétriques** : elles prouvent la création continue de croûte au niveau de l'axe et son écartement.
:::

**Exercice 2.** Un séisme est enregistré avec $t_S-t_P=40$ s. Sachant que $v_P=8$ km/s et $v_S=4{,}6$ km/s, calculer la distance à l'épicentre.

:::corrige
$d\left(\dfrac1{v_S}-\dfrac1{v_P}\right)=t_S-t_P\Rightarrow d\times(0{,}217-0{,}125)=40\Rightarrow d=\dfrac{40}{0{,}092}\approx\mathbf{435\ km}$.
:::

**Exercice 3.** Pourquoi les volcans de subduction sont-ils explosifs ?

:::corrige
La fusion partielle du manteau hydraté produit un magma andésitique, **visqueux et riche en gaz** : les gaz ne s'échappent pas facilement, d'où les explosions.
:::

**Exercice 4.** Quelle est la différence entre lithosphère et croûte ?

:::corrige
La croûte est la couche superficielle du globe. La lithosphère comprend la croûte **et** le manteau supérieur rigide ; c'est elle qui est découpée en plaques.
:::

## ⚠️ Pièges classiques du BAC
- Confondre **épicentre** et **foyer**.
- Dire que les continents « flottent sur l'océan » : ils sont portés par les plaques sur l'**asthénosphère**.
- Oublier que les ondes S ne traversent pas les milieux liquides.
- Confondre roches magmatiques plutoniques et volcaniques.

## ✅ À retenir
- Trois frontières : divergente, convergente, transformante.
- Dorsale : création de croûte ; subduction : destruction.
- Roches : magmatiques, sédimentaires, métamorphiques.
`
