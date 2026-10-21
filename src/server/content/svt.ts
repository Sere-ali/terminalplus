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

## ⚠️ Pièges fréquents
- Confondre **plaque** et **continent**.
- Oublier que la subduction concerne la **plaque plus dense**.

## 🏆 À retenir pour le BAC
Un **schéma annoté** des trois types de limites de plaques et leurs conséquences.`
