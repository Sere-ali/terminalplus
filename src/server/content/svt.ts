// Résumés – SVT Terminale C et D

export const SVT_CONTENT: Record<string, string> = {}

SVT_CONTENT["heredite"] = String.raw`## 💡 L'essentiel en une phrase
Les **caractères héréditaires** sont portés par des **gènes** situés sur les **chromosomes** ; les **lois de Mendel** expliquent leur transmission.

## 📚 1. Vocabulaire
- **Gène** : portion d'ADN qui code un caractère ; **allèles** : versions d'un gène.
- **Homozygote** (deux allèles identiques) ; **hétérozygote** (deux allèles différents).
- **Dominant** : s'exprime chez l'hétérozygote ; **récessif** : s'exprime seulement à l'état homozygote.
- **Phénotype** : caractère observable ; **génotype** : combinaison d'allèles.

## 🌱 2. Monohybridisme (un caractère)
Croisement de deux lignées **pures** :
- **1ʳᵉ loi (uniformité)** : tous les hybrides de **F1** sont identiques.
- **2ᵉ loi (disjonction)** : en **F2**, on obtient **¾ phénotype dominant** et **¼ récessif** ($3:1$), car chaque individu F1 forme deux types de gamètes.
- **Test-cross** : croiser un individu de phénotype dominant avec un **homozygote récessif** pour connaître son génotype ; résultat $1:1$ si hétérozygote, $100\ \%$ dominant si homozygote.

## 🌿 3. Dihybridisme (deux caractères)
Si les deux gènes sont sur des **chromosomes différents** (indépendants), la F2 donne $9:3:3:1$ (4 phénotypes). Si les gènes sont **liés** (même chromosome), les proportions sont différentes (on obtient surtout les phénotypes parentaux).

## 🧬 4. Méiose et fécondation
- **Méiose** : une cellule $2n$ donne **4 cellules** $n$ (gamètes). Elle comprend deux divisions.
- **Brassage** : **interchromosomique** (distribution au hasard des chromosomes) et **intrachromosomique** (crossing-over).
- **Fécondation** : rétablit le nombre $2n$ et crée une cellule-œuf **unique**.
- **Mitose** : une cellule $2n$ donne **2 cellules** $2n$ identiques (croissance, renouvellement).

## ✅ Exemple
Pois lisse (**L**, dominant) × pois ridé (**l**) : parents $LL\times ll$ ; F1 : $Ll$ lisses ; F2 : $\tfrac14LL$, $\tfrac12Ll$, $\tfrac14ll$ soit **3 lisses : 1 ridé**.

## 🧪 5. Exercice type résolu : monohybridisme avec échiquier
**Énoncé.** Chez la drosophile, l'allèle « ailes longues » (**L**) domine l'allèle « ailes vestigiales » (**v**). On croise deux drosophiles hétérozygotes **Lv × Lv**.

| ♂ \ ♀ | L | v |
|---|---|---|
| **L** | LL (longues) | Lv (longues) |
| **v** | Lv (longues) | vv (vestigiales) |

**Résultat** : $\tfrac34$ longues, $\tfrac14$ vestigiales ; génotypes $\tfrac14LL$, $\tfrac12Lv$, $\tfrac14vv$.

## 📊 6. Dihybridisme : échiquier à 16 cases (gènes indépendants)
Parents **LlRr × LlRr** (L : lisse, R : jaune) : gamètes **LR, Lr, lR, lr** (chacun $\tfrac14$) :

| Phénotype | Proportion |
|---|---|
| lisse jaune | $\tfrac9{16}$ |
| lisse vert | $\tfrac3{16}$ |
| ridé jaune | $\tfrac3{16}$ |
| ridé vert | $\tfrac1{16}$ |

## ✏️ Exercices
**Exercice 1.** Un croisement donne 150 plantes à fleurs rouges et 50 à fleurs blanches. Quel génotype des parents ?

:::corrige
Rapport $150 : 50 = 3 : 1$ ⇒ monohybridisme avec dominance : parents **hétérozygotes** (Rr × Rr), rouge dominant.
:::

**Exercice 2.** Test-cross d'un individu à phénotype dominant donne 50 % dominants, 50 % récessifs. Quel est son génotype ?

:::corrige
**Hétérozygote** (Aa) : il produit deux types de gamètes (A et a).
:::

**Exercice 3.** Combien de chromosomes dans les gamètes humains ?

:::corrige
$n=23$ (la cellule diploïde a $2n=46$).
:::

## ⚠️ Pièges fréquents
- Mélanger **génotype** et **phénotype**.
- Oublier l'**échiquier de croisement**.

## 🏆 À retenir pour le BAC
Écris toujours : **parents → gamètes → échiquier → proportions**, avec les lois de Mendel.`

SVT_CONTENT["genetique-humaine"] = String.raw`## 💡 L'essentiel en une phrase
La **génétique humaine** étudie la transmission des caractères et des **maladies héréditaires** chez l'homme, avec le **caryotype** et les **arbres généalogiques**.

## 📚 1. Le caryotype humain
- **46 chromosomes** : **44 autosomes** + **2 chromosomes sexuels** (**XX** femme, **XY** homme).
- **Anomalie** : **trisomie 21** = 3 chromosomes 21 (**47 chromosomes**), due à une **non-disjonction** pendant la méiose.

## 🧬 2. Maladies héréditaires
- **Autosomique récessive** (ex. **drépanocytose**) : il faut **deux allèles mutés** ; les parents hétérozygotes sont **porteurs sains**. La mutation modifie l'**hémoglobine** (HbS) et déforme les globules rouges.
- **Liée à l'X récessive** (ex. **hémophilie**, daltonisme) : touche surtout les **garçons** (ils n'ont qu'un X).
- **Autosomique dominante** : un seul allèle suffit.

## 🩸 3. Groupes sanguins
- **ABO** : allèles **A** et **B** codominants, **O** récessif. Génotypes : $AA$ ou $AO$ → A ; $BB$ ou $BO$ → B ; $AB$ → AB ; $OO$ → O.
- **Rhésus** : Rh⁺ dominant, Rh⁻ récessif (risque pour un second enfant si mère Rh⁻ et enfant Rh⁺).

## 🌳 4. Arbre généalogique
Pour déterminer le mode de transmission : si deux parents sains ont un enfant malade → maladie **récessive** ; si la maladie touche surtout les garçons → liaison à l'**X**.

## ✅ Exemple
Deux parents hétérozygotes $AS\times AS$ pour la drépanocytose : $\tfrac14$ d'enfants sains ($AA$), $\tfrac12$ porteurs sains ($AS$), $\tfrac14$ malades ($SS$).

## 📊 4. Quelques maladies héréditaires

| Maladie | Type | Cause |
|---|---|---|
| **Drépanocytose** | Autosomique récessive | Allèle muté de l'hémoglobine (HbS) |
| **Mucoviscidose** | Autosomique récessive | Gène CFTR (chromosome 7) |
| **Hémophilie** | Récessive liée à l'X | Défaut de coagulation, touche surtout les garçons |
| **Daltonisme** | Récessive liée à l'X | Perception des couleurs |
| **Trisomie 21** | Anomalie chromosomique | 3 chromosomes 21 (caryotype 47) |
| **Syndrome de Turner** | Anomalie des gonosomes | 45, X0 |

## 🧪 5. Raisonner sur un arbre généalogique
1. Si deux parents sains ont un enfant malade ⇒ allèle **récessif**.
2. Si la maladie touche surtout les garçons et saute des générations ⇒ souvent **liée à l'X**.
3. Calculer le risque : deux parents **hétérozygotes** (Aa × Aa) ⇒ $\tfrac14$ d'enfants malades.

## ✏️ Exercices
**Exercice 1.** Deux parents sains ont un enfant drépanocytaire. Quels sont leurs génotypes ? Quel est le risque d'un autre enfant malade ?

:::corrige
Les deux sont **hétérozygotes** (AS × AS) ; risque $\tfrac14 = 25\ \%$.
:::

**Exercice 2.** Écris la formule chromosomique d'une fille normale et d'un garçon normal.

:::corrige
Fille : **46, XX** ; garçon : **46, XY**.
:::

**Exercice 3.** Pourquoi l'hémophilie touche-t-elle surtout les garçons ?

:::corrige
Gène porté par le chromosome **X** ; le garçon n'en a qu'un (XY), l'allèle récessif s'exprime sans second X pour le compenser.
:::

## 🏆 À retenir pour le BAC
Savoir **lire un caryotype**, un **arbre généalogique** et calculer des **probabilités** (échiquier).`

SVT_CONTENT["reproduction"] = String.raw`## 💡 L'essentiel en une phrase
La **reproduction humaine** est contrôlée par des **hormones** produites par l'**hypophyse** et les **gonades** selon un **rétrocontrôle**.

## 📚 1. Chez l'homme
- **Testicules** : **spermatogenèse** (production continue de spermatozoïdes) et **testostérone** (cellules de Leydig).
- **Hypophyse** : **FSH** (stimule la spermatogenèse) et **LH** (stimule la production de testostérone). La testostérone **freine** l'hypophyse (rétrocontrôle négatif).

## 📚 2. Chez la femme : le cycle (≈ 28 jours)
- **Ovaire** : **phase folliculaire** (jours 1–14) : maturation d'un follicule qui produit des **œstrogènes** ; **ovulation** vers le **14ᵉ jour** (pic de **LH**) ; **phase lutéale** (jours 15–28) : le **corps jaune** produit **progestérone** (et œstrogènes).
- **Utérus** : règles (1–5) ; **épaississement de la muqueuse** (préparation à la nidation).
- **Régulation** : FSH et LH de l'hypophyse ; pic d'œstrogènes → pic de LH (rétrocontrôle **positif**) ; progestérone → freine l'hypophyse.
- **Sans fécondation**, le corps jaune disparaît, les hormones chutent, la muqueuse s'élimine : nouvelles règles.

## 👶 3. Fécondation et grossesse
**Fécondation** dans la trompe, **nidation** vers J7. L'embryon sécrète l'**hCG** qui maintient le corps jaune : pas de règles. Le **placenta** prend ensuite le relais hormonal.

## 🛡️ 4. Contrôle des naissances
- **Pilule** : œstrogènes + progestérone synthétiques bloquant l'**ovulation**.
- **Stérilet**, **préservatif** (protège aussi des **IST/VIH**), méthodes naturelles.

## 📊 4. Hormones de la reproduction

| Hormone | Origine | Rôle |
|---|---|---|
| **GnRH** | Hypothalamus | Stimule l'hypophyse |
| **FSH** | Hypophyse | Croissance des follicules / spermatogenèse |
| **LH** | Hypophyse | Ovulation / sécrétion de testostérone |
| **Œstrogènes** | Ovaire (follicule) | Croissance de l'endomètre, caractères sexuels féminins |
| **Progestérone** | Corps jaune | Prépare et maintient l'endomètre |
| **Testostérone** | Testicules | Spermatogenèse, caractères sexuels masculins |

## 🧪 5. Le cycle ovarien (28 jours)

| Phase | Jours | Événements |
|---|---|---|
| **Folliculaire** | 1-14 | FSH → croissance du follicule, œstrogènes ↑ |
| **Ovulation** | 14 | Pic de LH → libération de l'ovocyte |
| **Lutéale** | 14-28 | Corps jaune → progestérone ↑ ; sans fécondation, chute hormonale → règles |

## ✏️ Exercices
**Exercice 1.** Quel est le rôle du pic de LH ?

:::corrige
Il déclenche l'**ovulation** (vers le 14ᵉ jour).
:::

**Exercice 2.** Comment fonctionne la pilule contraceptive ?

:::corrige
Elle apporte œstrogènes/progestatifs qui exercent un **rétrocontrôle négatif** sur l'hypophyse : plus de pic de LH, **pas d'ovulation**.
:::

**Exercice 3.** Quelle hormone maintient la grossesse au début ?

:::corrige
La **progestérone** (corps jaune puis placenta), stimulée par l'hormone **hCG**.
:::

## ⚠️ Pièges fréquents
- Confondre **FSH/LH** (hypophyse) et **œstrogènes/progestérone** (ovaire).

## 🏆 À retenir pour le BAC
Savoir **lire un graphique** de cycle, nommer les **hormones** et expliquer le **rétrocontrôle**.`

SVT_CONTENT["immunologie"] = String.raw`## 💡 L'essentiel en une phrase
Le **système immunitaire** distingue le **soi** du **non-soi** et défend l'organisme contre les **agents infectieux**.

## 📚 1. Les défenses
- **Immunité innée** (non spécifique) : barrières (peau, muqueuses), **inflammation**, **phagocytose** (macrophages, polynucléaires).
- **Immunité adaptative** (spécifique) :
  - **Humorale** : **lymphocytes B** → **plasmocytes** qui sécrètent des **anticorps** (neutralisent l'antigène).
  - **Cellulaire** : **lymphocytes T8** (cytotoxiques) détruisent les cellules infectées ; **T4** (auxiliaires) **coordonnent** la réponse.
- **Mémoire immunitaire** : la 2ᵉ rencontre avec l'antigène provoque une réponse **plus rapide et plus forte**.

## 💉 2. Vaccination et sérothérapie
- **Vaccin** : antigène **atténué ou inactivé** → mémoire immunitaire (**préventif**, durable).
- **Sérum** : **anticorps déjà fabriqués** → protection **immédiate** mais **temporaire** (**curatif**).

## 🎗️ 3. VIH et SIDA
- Le **VIH** infecte les **lymphocytes T4** et les détruit : l'organisme devient vulnérable aux **maladies opportunistes** (**SIDA**).
- **Transmission** : rapports sexuels non protégés, sang, **mère-enfant** ; pas par les gestes de la vie courante.
- **Prévention** : **préservatif**, dépistage, matériel stérile. **Traitement** : **antirétroviraux (ARV)** qui contrôlent le virus.

## ✅ Exemple
Après un **vaccin** contre l'hépatite B, des lymphocytes **mémoire** sont produits ; lors d'une infection ultérieure la réponse est **rapide**.

## 📊 4. Immunité innée et adaptative

| | **Innée (non spécifique)** | **Adaptative (spécifique)** |
|---|---|---|
| Rapidité | Immédiate | Plusieurs jours |
| Acteurs | Phagocytes (macrophages), inflammation | Lymphocytes **B** (anticorps), **T** (T4, T8) |
| Mémoire | Non | **Oui** |

## 🧪 5. Réponses spécifiques
- **Réponse humorale** : LB → plasmocytes → **anticorps** (neutralisent l'antigène).
- **Réponse cellulaire** : LT8 → **cellules cytotoxiques** (détruisent les cellules infectées) ; LT4 = « chefs d'orchestre » (cible du VIH).
- **Vaccination** : antigène atténué → **mémoire immunitaire**. **Sérothérapie** : anticorps tout faits (protection immédiate, brève).

## ✏️ Exercices
**Exercice 1.** Pourquoi le VIH provoque-t-il le sida ?

:::corrige
Il détruit les **lymphocytes T4** : les défenses s'effondrent ⇒ maladies opportunistes.
:::

**Exercice 2.** Différence entre vaccin et sérum ?

:::corrige
Le **vaccin** (préventif) stimule la mémoire, durable ; le **sérum** (curatif) apporte des anticorps, effet immédiat et bref.
:::

**Exercice 3.** Que contient un antigène ?

:::corrige
Une molécule étrangère reconnue par les lymphocytes (protéine du microbe) déclenchant la réponse immunitaire.
:::

## ⚠️ Pièges fréquents
- Confondre **vaccin** (prévention) et **sérum** (guérison immédiate).
- Dire que le VIH **est** le SIDA (le SIDA est la **maladie** due au virus).

## 🏆 À retenir pour le BAC
Le **schéma de la réponse immunitaire** (B/T), la **mémoire**, le **rôle des T4** et la **prévention**.`

SVT_CONTENT["systeme-nerveux"] = String.raw`## 💡 L'essentiel en une phrase
Le **système nerveux** transmet des **messages nerveux** (influx) par des **neurones** reliés par des **synapses**.

## 📚 1. Le neurone
**Corps cellulaire**, **dendrites** (reçoivent), **axone** (conduit), **terminaisons synaptiques**. Les nerfs sont des faisceaux d'axones (**sensitifs** → centre ; **moteurs** → muscle).

## ⚡ 2. L'influx nerveux
- **Potentiel de repos** : environ $-70\ \text{mV}$ (membrane **polarisée**).
- **Potentiel d'action** : inversion rapide et brève de la polarité, **tout ou rien**, qui se propage le long de l'axone.
- Le message est **codé en fréquence** de potentiels d'action (plus le stimulus est intense, plus la fréquence est élevée).

## 🔗 3. La synapse
Entre deux neurones : **fente synaptique**. Le potentiel d'action libère un **neurotransmetteur** (ex. **acétylcholine**) qui se fixe sur des **récepteurs** du neurone suivant : transmission **à sens unique** et **chimique**. Certaines **drogues** et **toxines** perturbent la synapse.

## 🦵 4. Le réflexe
**Arc réflexe** : **récepteur** → **nerf sensitif** → **centre nerveux** (moelle épinière) → **nerf moteur** → **effecteur** (muscle). Exemple : **réflexe rotulien** (myotatique).

## ✅ Exemple
Piqûre au doigt : récepteurs cutanés → nerf sensitif → moelle épinière → nerf moteur → muscle du bras qui se contracte : le retrait est **involontaire et rapide**.

## 📊 4. Neurone et message nerveux

| Notion | Description |
|---|---|
| **Neurone** | Corps cellulaire, dendrites, axone |
| **Potentiel de repos** | Environ −70 mV (intérieur négatif) |
| **Potentiel d'action** | Inversion brève de la polarisation, tout ou rien |
| **Synapse** | Jonction entre deux neurones ; **neurotransmetteurs** (acétylcholine…) |
| **Arc réflexe** | Récepteur → nerf sensitif → moelle → nerf moteur → effecteur |
| **Réflexe** | Réponse involontaire et rapide (rotulien, retrait) |

## 📊 5. Les parties du cerveau

| Partie | Rôle |
|---|---|
| **Cortex** | Pensée, mouvement volontaire, sensations |
| **Cervelet** | Équilibre, coordination |
| **Bulbe rachidien** | Respiration, rythme cardiaque |

## ✏️ Exercices
**Exercice 1.** Décris le trajet d'un réflexe de retrait de la main.

:::corrige
Récepteur de la peau → nerf sensitif → **moelle épinière** → nerf moteur → muscle (effecteur).
:::

**Exercice 2.** Que se passe-t-il à une synapse ?

:::corrige
L'influx provoque la libération de **neurotransmetteurs** qui traversent la fente synaptique et excitent (ou inhibent) le neurone suivant.
:::

**Exercice 3.** Effet de la drogue ou de l'alcool ?

:::corrige
Ils perturbent les neurotransmetteurs, ralentissent les réactions et provoquent des dépendances.
:::

## ⚠️ Pièges fréquents
- Croire que la synapse est **électrique** (elle est **chimique**).
- Oublier le caractère **tout ou rien** du potentiel d'action.

## 🏆 À retenir pour le BAC
Savoir **analyser un enregistrement** (potentiel de repos/d'action) et décrire l'**arc réflexe** et la **synapse**.`

SVT_CONTENT["glycemie"] = String.raw`## 💡 L'essentiel en une phrase
La **glycémie** (taux de glucose dans le sang) est maintenue autour de **1 g/L** par deux hormones du pancréas : l'**insuline** et le **glucagon**.

## 📚 1. Régulation
- **Hyperglycémie** (après un repas) : le pancréas (cellules **β** des îlots de Langerhans) sécrète de l'**insuline** → le glucose entre dans les cellules et est **stocké en glycogène** (foie, muscles) : la glycémie **baisse**.
- **Hypoglycémie** (jeûne, effort) : les cellules **α** sécrètent du **glucagon** → le foie libère du glucose : la glycémie **monte**.
- Système à **rétrocontrôle négatif** : la variation provoque l'effet inverse.

## 🩺 2. Le diabète
- **Diabète de type 1** : manque d'insuline (cellules β détruites) → insuline en **injection**.
- **Diabète de type 2** : **résistance** à l'insuline (surpoids, sédentarité).
- **Symptômes** : soif intense, urines abondantes, fatigue, amaigrissement.
- **Prévention** : alimentation équilibrée, activité physique, dépistage.

## ✅ Exemple
Une glycémie à jeun de $1{,}8\ \text{g/L}$ répétée évoque un **diabète**.

## 📊 4. Régulation de la glycémie

| | Hyperglycémie (après repas) | Hypoglycémie (jeûne) |
|---|---|---|
| **Hormone** | **Insuline** (cellules β du pancréas) | **Glucagon** (cellules α) |
| **Effet** | Stocke le glucose en **glycogène** (foie, muscles) | Libère le glucose du glycogène |
| **Résultat** | La glycémie baisse | La glycémie remonte |

**Valeur normale** : environ **1 g/L** (0,8 à 1,2).

## 🧪 5. Diabète

| | Diabète de type 1 | Diabète de type 2 |
|---|---|---|
| Cause | Destruction des cellules β (auto-immune) | Résistance à l'insuline (surpoids, sédentarité) |
| Traitement | **Insuline** | Régime, activité, médicaments |

## ✏️ Exercices
**Exercice 1.** Pourquoi un diabétique de type 1 doit-il s'injecter de l'insuline ?

:::corrige
Son pancréas n'en produit plus ; sans insuline, le glucose reste dans le sang (hyperglycémie).
:::

**Exercice 2.** Où est stocké le glucose ?

:::corrige
Sous forme de **glycogène** dans le foie et les muscles.
:::

## ⚠️ Pièges fréquents
- Inverser les rôles **insuline** (abaisse) et **glucagon** (élève).

## 🏆 À retenir pour le BAC
Schéma de **régulation de la glycémie** avec organes, hormones et effets.`

SVT_CONTENT["geologie"] = String.raw`## 💡 L'essentiel en une phrase
La **Terre** est formée de couches ; sa **lithosphère** est découpée en **plaques** en mouvement (**tectonique des plaques**), ce qui explique **séismes**, **volcans** et **montagnes**.

## 📚 1. Structure du globe
**Croûte** (continentale et océanique) → **manteau** → **noyau** (externe liquide, interne solide). La **lithosphère** (croûte + haut du manteau) est rigide ; l'**asthénosphère** est plastique.

## 🌍 2. Tectonique des plaques
- **Dorsale océanique** : plaques qui s'**écartent**, **création** de croûte océanique (accrétion).
- **Subduction** : une plaque océanique **plonge** sous une autre (fosse, volcans, séismes profonds).
- **Collision** : deux continents se heurtent → **chaînes de montagnes**.
- **Séismes** et **volcans** se situent surtout aux **limites** de plaques.

## 🪨 3. Les roches
- **Magmatiques** : refroidissement du magma (**basalte**, granite).
- **Sédimentaires** : dépôt de sédiments (**calcaire**, grès, argile).
- **Métamorphiques** : transformation sous forte pression/température (schiste, gneiss).

## 🇨🇮 4. La Côte d'Ivoire
Elle repose surtout sur un **socle ancien** (granites, schistes) et au sud sur un **bassin sédimentaire côtier** (ressources pétrolières offshore). Ressources : **or, manganèse, diamant, nickel**.

## 📊 4. Tectonique des plaques

| Frontière | Mouvement | Exemple |
|---|---|---|
| **Divergente** (dorsale) | Les plaques s'écartent | Dorsale médio-atlantique |
| **Convergente** (subduction/collision) | Les plaques se rapprochent | Andes, Himalaya |
| **Transformante** | Coulissement | Faille de San Andreas |

## 🧪 5. Preuves de la dérive des continents (Wegener)
- **Emboîtement** des côtes (Afrique / Amérique du Sud).
- **Fossiles identiques** (Mesosaurus) des deux côtés de l'Atlantique.
- **Âge des fonds océaniques** croissant en s'éloignant des dorsales.
- **Paléomagnétisme**, séismes et volcans alignés aux limites.

## 📊 6. Roches

| Famille | Origine | Exemple |
|---|---|---|
| **Sédimentaire** | Dépôt et compaction | Calcaire, grès |
| **Magmatique** | Refroidissement du magma | Basalte, granite |
| **Métamorphique** | Transformation sous pression/température | Gneiss, marbre |

## ✏️ Exercices
**Exercice 1.** Pourquoi la Côte d'Ivoire est-elle peu exposée aux séismes ?

:::corrige
Elle se situe au **cœur d'une plaque** (africaine), loin des frontières de plaques actives.
:::

**Exercice 2.** Que prouve l'âge croissant des fonds océaniques ?

:::corrige
Que le plancher océanique se **forme aux dorsales** et s'écarte : c'est l'**expansion océanique**.
:::

## ⚠️ Pièges fréquents
- Confondre **plaque** et **continent**.
- Oublier que la subduction concerne la **plaque plus dense**.

## 🏆 À retenir pour le BAC
Un **schéma annoté** des trois types de limites de plaques et leurs conséquences.`
