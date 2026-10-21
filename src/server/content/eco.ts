// Économie générale et SES (séries B, G1, G2) – leçons détaillées rédigées avec nos propres mots.
// Liste des chapitres à valider avec le programme officiel de l'année.

export const ECO: Record<string, string> = {}

ECO["eco-croissance-developpement"] = String.raw`## 💡 L'essentiel en une phrase
La **croissance économique** est l'augmentation **durable** de la production d'un pays, mesurée par le **PIB** ; le **développement** est plus large : il améliore aussi la **santé**, l'**éducation**, les **conditions de vie** et réduit les **inégalités**.

## 📚 1. Mesurer la production : la comptabilité nationale
- **Production** : valeur des biens et services produits.
- **Consommations intermédiaires (CI)** : biens et services **détruits ou transformés** dans la production (matières, énergie).
- **Valeur ajoutée (VA)** : $$ VA = Production - Consommations\ interm\acute{e}diaires $$
- **PIB** (produit intérieur brut) : **somme des valeurs ajoutées** des entreprises installées sur le territoire en un an (plus les impôts sur les produits).

**Exemple (chaîne du chocolat) :**

| Étape | Production | CI | VA |
|---|---|---|---|
| Planteur (fèves) | 100 000 | 0 | 100 000 |
| Usine (chocolat) | 250 000 | 100 000 | 150 000 |
| Commerçant | 320 000 | 250 000 | 70 000 |
| **Total** | | | **320 000** (= valeur finale du chocolat vendu) |

**Les trois approches du PIB :**

| Approche | Formule |
|---|---|
| **Production** | Somme des valeurs ajoutées |
| **Revenus** | Salaires + profits + impôts |
| **Dépenses (demande)** | $$ PIB = C + I + G + (X - M) $$ avec **C** consommation des ménages, **I** investissement, **G** dépenses publiques, **X** exportations, **M** importations |

## 📚 2. Taux de croissance et PIB réel
$$ Taux\ de\ croissance = \frac{PIB_n - PIB_{n-1}}{PIB_{n-1}} \times 100 $$
- **PIB nominal** : aux **prix courants** ; **PIB réel** : aux **prix constants** (inflation éliminée) : $$ PIB\ r\acute{e}el = \frac{PIB\ nominal}{Indice\ des\ prix} \times 100 $$
- **PIB par habitant** = PIB ÷ population (indique le niveau de vie moyen).

## 📚 3. Les sources de la croissance

| Facteur | Explication |
|---|---|
| **Travail** | Plus de travailleurs, mieux formés (**capital humain**) |
| **Capital** | **Investissement** (machines, routes, énergie) |
| **Progrès technique** | Innovation, productivité |
| **Commerce extérieur** | Débouchés, technologies importées |
| **Institutions** | Stabilité, sécurité juridique |

**Croissance extensive** : plus de facteurs ; **intensive** : meilleure **productivité**.

## 📚 4. Du PIB au développement
- **Limites du PIB** : ignore les **inégalités**, la **production non marchande** (travail domestique), le **secteur informel**, les **dégâts à l'environnement**.
- **IDH** (indicateur de développement humain du **PNUD**) : combine **santé** (espérance de vie), **éducation** (durée de scolarisation) et **niveau de vie** (revenu par habitant), de 0 à 1.
- **Développement durable** : répondre aux besoins d'aujourd'hui **sans compromettre** ceux des générations futures ; trois piliers : **économique, social, environnemental** (ODD 2030 de l'ONU).

## 📚 5. Les phases du cycle économique
**Expansion** → **sommet (boom)** → **récession** (baisse du PIB) → **creux (dépression)** → **reprise**. Une **crise** survient quand la production chute fortement.

## ✏️ Exercices
**Exercice 1.** Un PIB passe de 8 000 à 8 400 milliards de F. Calcule le taux de croissance.

:::corrige
(8 400 − 8 000) / 8 000 × 100 = **5 %**.
:::

**Exercice 2.** C = 600 ; I = 200 ; G = 150 ; X = 120 ; M = 170. Calcule le PIB (approche des dépenses).

:::corrige
PIB = 600 + 200 + 150 + (120 − 170) = **900**.
:::

**Exercice 3.** PIB nominal = 1 200 ; indice des prix = 120 (base 100). PIB réel ?

:::corrige
1 200 / 120 × 100 = **1 000**.
:::

**Exercice 4.** Un agriculteur vend du maïs 80 000 F à une minoterie, qui vend de la farine 130 000 F à une boulangerie, qui vend du pain 200 000 F aux ménages. Calcule la valeur ajoutée de chacun et le PIB.

:::corrige
Agriculteur : 80 000 ; minoterie : 130 000 − 80 000 = **50 000** ; boulangerie : 200 000 − 130 000 = **70 000**. PIB = 80 000 + 50 000 + 70 000 = **200 000** (= valeur du pain).
:::

## ⚠️ Pièges
- Confondre **PIB** et **PIB par habitant**, **valeur nominale** et **réelle**.
- Compter deux fois les **consommations intermédiaires** (double compte) : on additionne les **valeurs ajoutées**.
- **Croissance** (quantité) ≠ **développement** (qualité de vie).

## 🏆 À retenir pour le BAC
VA = production − CI ; PIB = ΣVA = C + I + G + X − M ; taux de croissance ; PIB réel ; sources de la croissance ; limites du PIB ; IDH ; développement durable.
`

ECO["eco-chomage-inflation"] = String.raw`## 💡 L'essentiel en une phrase
Le **chômage** touche les personnes qui **cherchent un emploi sans en trouver** ; l'**inflation** est la **hausse générale et durable des prix**. Ce sont deux grands **déséquilibres** de l'économie.

## 📚 1. Population active et chômage
- **Population totale** → **population en âge de travailler** → **population active** (= actifs occupés + chômeurs) et **inactifs** (élèves, étudiants, retraités, personnes au foyer).
- **Chômeur** (définition du **BIT**) : personne **sans emploi**, **disponible** et qui **cherche activement** un emploi.
- $$ Taux\ d'activit\acute{e} = \frac{Population\ active}{Population\ en\ \hat{a}ge\ de\ travailler} \qquad Taux\ de\ ch\hat{o}mage = \frac{Ch\hat{o}meurs}{Population\ active} \times 100 $$

**Exemple :** population en âge de travailler : 8 000 000 ; actifs occupés : 4 750 000 ; chômeurs : 250 000.
Population active = 5 000 000 ; taux d'activité = 62,5 % ; **taux de chômage = 250 000 / 5 000 000 = 5 %**.

## 📚 2. Les formes de chômage

| Forme | Cause | Exemple |
|---|---|---|
| **Conjoncturel** | Ralentissement de l'économie | Crise : entreprises licencient |
| **Structurel** | Inadaptation entre emplois et compétences, mutations | Métier qui disparaît, jeunes sans qualification |
| **Frictionnel** | Délai de recherche | Passer d'un emploi à un autre |
| **Saisonnier** | Activité saisonnière | Campagne cacao |
| **Sous-emploi / informel** | Emplois précaires, faible revenu | Petits métiers de rue (très répandu en Afrique) |
| **Chômage des jeunes diplômés** | Peu d'offres adaptées | |

**Conséquences :** baisse des revenus, **pauvreté**, **exclusion**, tensions sociales, perte de recettes pour l'État, **exode** et migrations.
**Remèdes :** **formation** et enseignement technique, **soutien aux PME**, **emploi des jeunes**, **investissements** et croissance, **incitations** à l'entrepreneuriat, réduction des charges, **agences pour l'emploi**.

## 📚 3. L'inflation
- Mesurée par l'**indice des prix à la consommation (IPC)**, calculé sur un **panier** de biens et services.
$$ Taux\ d'inflation = \frac{IPC_n - IPC_{n-1}}{IPC_{n-1}} \times 100 $$
- **Désinflation** : l'inflation **ralentit** ; **déflation** : les prix **baissent**.

**Causes :**

| Cause | Explication |
|---|---|
| **Par la demande** | Demande supérieure à l'offre (trop de monnaie pour trop peu de biens) |
| **Par les coûts** | Hausse des salaires, du carburant, des matières premières |
| **Importée** | Hausse des prix des produits importés (dollar fort, pétrole) |
| **Monétaire** | Création excessive de monnaie |

**Effets :** baisse du **pouvoir d'achat** (si les revenus augmentent moins vite que les prix), **perte pour les épargnants**, **avantage pour les débiteurs**, perte de compétitivité, tensions sociales.
$$ Salaire\ r\acute{e}el = \frac{Salaire\ nominal}{Indice\ des\ prix} \times 100 $$

**Lutte contre l'inflation :** **politique monétaire** (la **BCEAO** relève ses taux directeurs, limite le crédit), politique budgétaire (réduire les dépenses), soutien à l'**offre** locale (agriculture, stocks), contrôle des prix des produits de base.
**UEMOA :** objectif d'une inflation **≤ 3 %** par an.

## 🧪 Exemple
L'IPC passe de 100 à 104 : inflation de **4 %**. Un salaire passé de 100 000 à 102 000 F (+2 %) perd en **pouvoir d'achat** : salaire réel = 102 000 / 104 × 100 = **98 077 F**.

## ✏️ Exercices
**Exercice 1.** L'IPC passe de 125 à 130. Taux d'inflation ?

:::corrige
(130 − 125) / 125 × 100 = **4 %**.
:::

**Exercice 2.** Population active : 6 000 000 ; chômeurs : 480 000. Taux de chômage ?

:::corrige
480 000 / 6 000 000 × 100 = **8 %**.
:::

**Exercice 3.** Un étudiant à l'université et une femme au foyer sont-ils chômeurs ?

:::corrige
**Non** : ils sont **inactifs** (ne cherchent pas d'emploi). Un chômeur doit être **sans emploi, disponible et en recherche active**.
:::

**Exercice 4.** Un salaire nominal de 150 000 F est passé à 156 000 F ; l'indice des prix est de 104. Le pouvoir d'achat a-t-il augmenté ?

:::corrige
Salaire réel = 156 000 / 104 × 100 = **150 000 F** : le pouvoir d'achat est **inchangé** (hausse du salaire = hausse des prix).
:::

## ⚠️ Pièges
- Le taux de chômage se calcule sur la population **active**, pas sur la population totale.
- **Inflation** = hausse **générale** et **durable**, pas la hausse d'un seul produit.
- Une hausse de salaire **n'améliore pas** le pouvoir d'achat si les prix augmentent autant.

## 🏆 À retenir pour le BAC
Taux d'activité, taux de chômage ; formes de chômage ; IPC et taux d'inflation ; causes et effets de l'inflation ; salaire réel ; rôle de la BCEAO.
`

ECO["eco-monnaie-banques"] = String.raw`## 💡 L'essentiel en une phrase
La **monnaie** facilite les échanges ; les **banques** collectent l'épargne et **créent de la monnaie par le crédit** ; la **banque centrale** (la **BCEAO** dans l'UEMOA) émet la monnaie et **régule** le système.

## 📚 1. La monnaie
**Du troc à la monnaie :** le troc exige une « double coïncidence des besoins » ; la monnaie résout ce problème.
**Fonctions :** **intermédiaire des échanges** (acheter et vendre), **unité de compte** (exprimer les prix), **réserve de valeur** (garder son pouvoir d'achat).
**Formes de la monnaie :**

| Forme | Exemples |
|---|---|
| **Monnaie fiduciaire** | Pièces et **billets** (confiance dans l'émetteur) |
| **Monnaie scripturale** | Écritures en compte : chèques, virements, cartes |
| **Monnaie électronique** | **Mobile money** (Wave, Orange Money, MTN Money…), cartes prépayées |

## 📚 2. Le franc CFA et l'UEMOA
- **FCFA (XOF)** : monnaie des **8 pays de l'UEMOA** (Bénin, Burkina Faso, Côte d'Ivoire, Guinée-Bissau, Mali, Niger, Sénégal, Togo), émise par la **BCEAO** (siège à **Dakar**).
- **Parité fixe avec l'euro** : 1 euro = **655,957 FCFA**, garantie par le Trésor français ; libre convertibilité.
- Un projet de réforme (monnaie **ECO** de la CEDEAO) est en discussion.

## 📚 3. Les banques

| Fonction | Contenu |
|---|---|
| **Collecter l'épargne** | Comptes courants, **dépôts**, livrets |
| **Accorder des crédits** | Aux ménages, entreprises, État : contre **intérêts** |
| **Gérer les moyens de paiement** | Chèques, cartes, virements |
| **Services** | Change, transfert d'argent, conseil |

Le **système financier** comprend aussi les **microfinances**, les **assurances**, la **bourse régionale (BRVM** à Abidjan) et le **mobile money**.

## 📚 4. La création monétaire
**Les crédits font les dépôts** : quand une banque accorde un crédit, elle **crée de la monnaie scripturale** (le client reçoit un dépôt).
**Multiplicateur de crédit :** les banques doivent garder une fraction **r** de leurs dépôts en **réserves obligatoires** auprès de la banque centrale. Pour un dépôt initial D :
$$ Total\ des\ d\acute{e}p\hat{o}ts\ cr\acute{e}\acute{e}s = \frac{D}{r} \qquad Cr\acute{e}dits\ cr\acute{e}\acute{e}s = \frac{D}{r} - D $$

**Exemple :** D = 1 000 000 F ; r = 10 %.

| Tour | Dépôt | Réserve (10 %) | Crédit accordé |
|---|---|---|---|
| 1 | 1 000 000 | 100 000 | 900 000 |
| 2 | 900 000 | 90 000 | 810 000 |
| 3 | 810 000 | 81 000 | 729 000 |
| … | … | … | … |
| **Total** | **10 000 000** | 1 000 000 | **9 000 000** |

## 📚 5. La banque centrale (BCEAO)
**Missions :** **émettre** la monnaie ; **définir la politique monétaire** (stabilité des prix) ; **contrôler** les banques (avec la Commission bancaire) ; **gérer les réserves de change** ; **banque des banques** (elle leur prête).
**Instruments :**

| Instrument | Effet |
|---|---|
| **Taux directeurs** (taux de refinancement) | Hausse ⇒ crédit **plus cher** ⇒ moins de monnaie ⇒ **freine l'inflation** ; baisse ⇒ **encourage** le crédit |
| **Réserves obligatoires** | Plus élevées ⇒ moins de crédits |
| **Opérations sur le marché monétaire** | Injecter ou retirer des liquidités |

## ✏️ Exercices
**Exercice 1.** Cite les trois fonctions de la monnaie.

:::corrige
**Intermédiaire des échanges**, **unité de compte**, **réserve de valeur**.
:::

**Exercice 2.** Dépôt initial 2 000 000 F ; réserves obligatoires 20 %. Total des dépôts et crédits créés ?

:::corrige
Dépôts = 2 000 000 / 0,2 = **10 000 000** ; crédits = 10 000 000 − 2 000 000 = **8 000 000 F**.
:::

**Exercice 3.** La BCEAO augmente ses taux directeurs. Quel effet attendu ?

:::corrige
Le **crédit devient plus cher** ⇒ moins de crédits ⇒ moins de demande et de monnaie en circulation ⇒ **ralentissement de l'inflation**, mais aussi risque de **frein à l'investissement**.
:::

**Exercice 4.** Le mobile money est-il de la monnaie fiduciaire ?

:::corrige
Non : c'est de la **monnaie électronique** (écritures sur un compte de monnaie électronique), proche de la monnaie scripturale.
:::

## ⚠️ Pièges
- La monnaie **n'est pas la richesse** : c'est un moyen d'échange.
- Les banques ne prêtent pas seulement l'argent déposé : elles **créent** de la monnaie par le crédit.
- Une banque commerciale **n'émet pas** les billets : c'est la **banque centrale**.

## 🏆 À retenir pour le BAC
Fonctions et formes de la monnaie ; FCFA, UEMOA, parité avec l'euro ; rôle des banques ; création monétaire et multiplicateur de crédit ; rôle et instruments de la BCEAO.
`

ECO["eco-commerce-international"] = String.raw`## 💡 L'essentiel en une phrase
Les pays échangent des **biens, des services et des capitaux** : ils **exportent** ce qu'ils produisent bien et **importent** le reste ; ces échanges se mesurent par la **balance commerciale** et la **balance des paiements**, et s'organisent entre **libre-échange** et **protectionnisme**.

## 📚 1. Les flux et leurs mesures
- **Exportations (X)** : ventes à l'étranger ; **importations (M)** : achats à l'étranger.
- $$ Balance\ commerciale = X - M \qquad Taux\ de\ couverture = \frac{X}{M} \times 100 $$
- **Excédent** si X > M ; **déficit** si X < M. Un taux de couverture supérieur à 100 % signifie que les exportations **couvrent** les importations.
- **Balance des paiements** : toutes les transactions avec l'étranger : **compte courant** (marchandises, services, revenus, transferts des migrants), **compte de capital**, **compte financier** (investissements, prêts).
- **Termes de l'échange** : $$ \frac{Indice\ des\ prix\ des\ exportations}{Indice\ des\ prix\ des\ importations} \times 100 $$ Une **baisse** signifie qu'on doit exporter **plus** pour acheter la même quantité d'importations.

**Exemple :** X = 600 ; M = 750 ⇒ balance = **−150** (déficit) ; taux de couverture = 600/750 × 100 = **80 %**.

## 📚 2. Pourquoi échanger ? Les théories
- **Avantage absolu** (Adam Smith) : un pays se spécialise dans ce qu'il produit **à moindre coût absolu**.
- **Avantage comparatif** (David Ricardo) : même sans avantage absolu, chaque pays gagne à se spécialiser dans la production où son **coût d'opportunité est le plus faible**.

**Exemple chiffré :**

| Heures de travail par unité | Cacao | Tissu |
|---|---|---|
| **Pays A** | 2 h | 4 h |
| **Pays B** | 6 h | 3 h |

Coût d'opportunité : A : 1 cacao = **0,5 tissu** (4 h pour un tissu ⇒ 2/4) ; B : 1 cacao = **2 tissus** (6/3). **A** a l'avantage comparatif en **cacao**, **B** en **tissu** : chacun gagne à se spécialiser puis à échanger.

## 📚 3. Libre-échange et protectionnisme

| | Libre-échange | Protectionnisme |
|---|---|---|
| **Principe** | Suppression des obstacles aux échanges | Protéger les producteurs nationaux |
| **Outils** | Accords commerciaux, OMC, zones de libre-échange | **Droits de douane**, **quotas**, **normes**, **subventions** |
| **Avantages** | Prix bas, choix, concurrence, croissance | Protège les emplois et les **industries naissantes** |
| **Limites** | Concurrence difficile pour les pays pauvres, dépendance | Prix plus élevés, **représailles** |

## 📚 4. Les institutions et accords
- **OMC** (Organisation mondiale du commerce, **1995, Genève**) : règle les échanges, règle les différends.
- **Intégration régionale** : **UEMOA** (union douanière avec **tarif extérieur commun**), **CEDEAO**, **ZLECAf** (zone de libre-échange continentale africaine), **APE** avec l'Union européenne.

## 📚 5. L'Afrique et la Côte d'Ivoire dans le commerce mondial
- Exportations surtout de **matières premières brutes** (cacao, café, pétrole, or, hévéa, coton, anacarde) : forte **dépendance** aux prix mondiaux.
- Importations de **produits manufacturés**, carburants, riz.
- **Enjeux** : **transformer** localement, **diversifier**, augmenter le **commerce intra-africain**, améliorer les **termes de l'échange**.

## ✏️ Exercices
**Exercice 1.** X = 900 ; M = 600. Balance et taux de couverture ?

:::corrige
Balance = **+300** (excédent) ; taux de couverture = **150 %**.
:::

**Exercice 2.** Les prix à l'exportation passent de 100 à 90 et les prix à l'importation de 100 à 110. Calcule les termes de l'échange.

:::corrige
(90 / 110) × 100 = **81,8** : les termes de l'échange se **détériorent**.
:::

**Exercice 3.** Quelle différence entre avantage absolu et avantage comparatif ?

:::corrige
**Absolu** : produire un bien à **moindre coût** qu'un autre pays. **Comparatif** : produire le bien où le **coût d'opportunité** est le plus faible, même si on est moins efficace en tout.
:::

**Exercice 4.** Cite trois instruments du protectionnisme.

:::corrige
Droits de douane, quotas d'importation, normes sanitaires ou techniques, subventions aux producteurs nationaux.
:::

## ⚠️ Pièges
- Un **déficit commercial** n'est pas toujours mauvais : cela dépend de sa durée et de son financement.
- Balance **commerciale** ≠ balance **des paiements**.
- La baisse du prix des matières premières **détériore** les termes de l'échange d'un pays exportateur.

## 🏆 À retenir pour le BAC
Balance commerciale, taux de couverture, termes de l'échange ; avantages absolu et comparatif ; libre-échange / protectionnisme ; OMC, UEMOA, CEDEAO, ZLECAf ; dépendance aux matières premières.
`

ECO["eco-etat-budget"] = String.raw`## 💡 L'essentiel en une phrase
L'**État** intervient dans l'économie : il **prélève des impôts**, **dépense** pour les services publics et les investissements, **redistribue** les richesses et **régule** la conjoncture ; son action se lit dans le **budget**.

## 📚 1. Les fonctions de l'État (Musgrave)

| Fonction | Contenu | Exemples |
|---|---|---|
| **Allocation** | Produire les **biens publics** que le marché ne fournit pas | Routes, sécurité, écoles, justice |
| **Redistribution** | Réduire les **inégalités** | Impôts progressifs, aides sociales, bourses |
| **Stabilisation (régulation)** | Lisser les **cycles** : emploi, prix | Relance en cas de crise, rigueur en cas de surchauffe |

## 📚 2. Le budget de l'État (loi de finances)
**Principes budgétaires :** **annualité** (voté pour un an), **unité**, **universalité** (toutes les recettes et dépenses sont inscrites), **spécialité** (crédits affectés).

| **Recettes** | **Dépenses** |
|---|---|
| **Fiscales** : impôts directs (sur le revenu, sur les sociétés), indirects (**TVA**), **droits de douane** | **Fonctionnement** : salaires, biens et services, subventions |
| **Non fiscales** : domaines, redevances, dividendes | **Investissement** : routes, écoles, hôpitaux |
| **Ressources d'emprunt** et dons | **Service de la dette** (intérêts et remboursement) |

$$ Solde\ budg\acute{e}taire = Recettes - D\acute{e}penses \qquad (positif : excédent,\ n\acute{e}gatif : d\acute{e}ficit) $$
Un **déficit** est financé par **l'emprunt** (intérieur ou extérieur) ⇒ augmentation de la **dette publique**. $$ Dette\ publique = cumul\ des\ d\acute{e}ficits $$

## 📚 3. Les impôts
- **Impôt direct** : payé **directement** par le contribuable (impôt sur le revenu, sur les bénéfices).
- **Impôt indirect** : **inclus dans le prix** (TVA à **18 %**, droits d'accises).
- **Progressif** (le taux augmente avec le revenu : redistribution) / **proportionnel** / **dégressif**.
- **Pression fiscale** = recettes fiscales / PIB (norme UEMOA : au moins **20 %**).
- **Courbe de Laffer** : un impôt trop élevé peut **décourager** l'activité et réduire les recettes.

## 📚 4. Les politiques économiques

| Politique | Instrument | Exemple |
|---|---|---|
| **Budgétaire** | Dépenses et impôts | **Relance** : on augmente les dépenses, on baisse les impôts. **Rigueur** : l'inverse |
| **Monétaire** | Taux, crédit | BCEAO |
| **Structurelle** | Réformes | Éducation, climat des affaires |

**Écoles de pensée :** **keynésienne** (l'État soutient la demande en période de crise) ; **libérale** (l'État intervient peu, laisse le marché agir).

## 📚 5. Les critères de convergence de l'UEMOA
Pour garantir la stabilité de la zone : **déficit budgétaire ≤ 3 % du PIB**, **dette publique ≤ 70 % du PIB**, **inflation ≤ 3 %**, **pression fiscale ≥ 20 %**.

## 🧪 Exemple
Recettes 5 000 milliards ; dépenses 5 600 milliards ⇒ **déficit de 600** ; si le PIB est de 25 000, le déficit représente 600/25 000 = **2,4 % du PIB** : **conforme** au critère de 3 %.

## ✏️ Exercices
**Exercice 1.** Donne un impôt direct et un impôt indirect.

:::corrige
Direct : impôt sur le revenu ou sur les sociétés. Indirect : **TVA**.
:::

**Exercice 2.** Recettes 7 200 ; dépenses 7 800 ; PIB 30 000. Solde et % du PIB ?

:::corrige
Solde = **−600** (déficit) ; 600 / 30 000 = **2 % du PIB**.
:::

**Exercice 3.** Quelles sont les trois fonctions de l'État ?

:::corrige
**Allocation** (biens publics), **redistribution** (réduire les inégalités), **stabilisation** (réguler la conjoncture).
:::

**Exercice 4.** En période de crise, que fait un État keynésien ?

:::corrige
Il **relance** la demande : hausse des dépenses publiques, baisse des impôts, même au prix d'un déficit.
:::

## ⚠️ Pièges
- Confondre **déficit** (une année) et **dette** (cumul).
- Les impôts **indirects** pèsent relativement plus sur les **petits revenus** (même TVA pour tous).
- L'État n'a pas seulement un rôle de **dépense** : il **prélève**, **redistribue** et **régule**.

## 🏆 À retenir pour le BAC
Fonctions de l'État ; recettes et dépenses ; solde et dette ; impôts directs / indirects ; politiques budgétaire et monétaire ; critères de convergence de l'UEMOA.
`

ECO["ses-stratification-sociale"] = String.raw`## 💡 L'essentiel en une phrase
Toute société est **stratifiée** : ses membres occupent des **positions inégales** (classes, catégories) selon leurs **revenus, diplômes, professions, pouvoir et prestige** ; la **mobilité sociale** mesure les changements de position.

## 📚 1. Les grandes analyses

| Auteur | Idée principale |
|---|---|
| **Karl Marx** | La société est divisée en **classes** selon la propriété des moyens de production (**bourgeoisie** / **prolétariat**), en conflit |
| **Max Weber** | Trois dimensions de la hiérarchie : **classe** (économique), **statut** (prestige), **parti** (pouvoir) |
| **Pierre Bourdieu** | Les positions dépendent de quatre **capitaux** : **économique**, **culturel** (diplômes, savoirs), **social** (réseau), **symbolique** (prestige) |

## 📚 2. Mesurer : les CSP
Les **catégories socioprofessionnelles (CSP)** regroupent les actifs selon leur **profession** et leur **statut** : agriculteurs, artisans et commerçants, cadres et professions intellectuelles supérieures, professions intermédiaires, employés, ouvriers.
**Critères de la stratification :** **revenu, patrimoine, diplôme, profession, lieu de résidence, réseau relationnel**. En Afrique : poids du **secteur informel**, de la **famille élargie**, de la **distinction ville / campagne**.

## 📚 3. La mobilité sociale
- **Intergénérationnelle** : par rapport à la position des **parents**. **Intragénérationnelle** : au cours de sa **propre carrière**.
- **Ascendante** (vers le haut), **descendante** (vers le bas), **immobilité** (même position).
- **Structurelle** (due à l'évolution de la société : recul de l'agriculture, essor des services) et **nette (fluidité)**.

**Table de mobilité (exemple, 100 fils d'agriculteurs) :**

| Position des fils | Nombre |
|---|---|
| Agriculteurs (immobilité) | 60 |
| Ouvriers | 25 |
| Cadres | 15 |
| **Total** | **100** |

- **Taux d'immobilité** : 60 %.
- **Taux de sortie** (mobilité) : **40 %**.
- Mobilité ascendante vers les cadres : 15 %.

## 📚 4. Les inégalités et leur mesure
- **Inégalités** de revenus, de patrimoine, d'éducation, de santé, de genre, entre ville et campagne.
- **Rapport interdécile** D9/D1 : revenu minimal des 10 % les plus riches ÷ revenu maximal des 10 % les plus pauvres.
- **Coefficient de Gini** : de **0** (égalité parfaite) à **1** (inégalité maximale).
- **Seuil de pauvreté** : niveau de revenu en dessous duquel une personne est considérée comme pauvre.

**Le rôle de l'école :** moteur de **mobilité**, mais les **inégalités d'origine** (capital culturel) persistent (Bourdieu, « héritiers »).
**Politiques :** **bourses**, école gratuite, santé accessible, **redistribution** (impôts progressifs), **microcrédit**, emploi des jeunes, égalité femmes-hommes.

## ✏️ Exercices
**Exercice 1.** Définis la mobilité sociale et distingue ses formes.

:::corrige
Changement de **position sociale** d'un individu au cours de sa vie (**intragénérationnelle**) ou par rapport à ses parents (**intergénérationnelle**), **ascendante** ou **descendante**.
:::

**Exercice 2.** Sur 200 fils de cadres : 120 cadres, 50 professions intermédiaires, 20 employés, 10 ouvriers. Calcule le taux d'immobilité et le taux de mobilité descendante.

:::corrige
Immobilité = 120/200 = **60 %**. Descendante = (50 + 20 + 10)/200 = **40 %**.
:::

**Exercice 3.** Quels sont les quatre capitaux de Bourdieu ?

:::corrige
**Économique, culturel, social, symbolique.**
:::

**Exercice 4.** Un coefficient de Gini passe de 0,35 à 0,45. Que cela signifie-t-il ?

:::corrige
Les **inégalités augmentent** (on se rapproche de 1).
:::

## ⚠️ Pièges
- Confondre **classe sociale** (Marx) et **CSP** (outil statistique).
- La **mobilité** ne veut pas dire **égalité** des chances.
- Une **mobilité structurelle** (changement des emplois) n'est pas une vraie **fluidité** sociale.

## 🏆 À retenir pour le BAC
Marx, Weber, Bourdieu ; CSP ; mobilité inter / intragénérationnelle, ascendante / descendante ; table de mobilité ; inégalités (Gini, interdécile, pauvreté) ; rôle de l'école ; politiques sociales.
`

ECO["ses-socialisation-changement-social"] = String.raw`## 💡 L'essentiel en une phrase
La **socialisation** est le processus par lequel un individu **apprend et intériorise** les normes, valeurs et rôles de sa société ; le **changement social** transforme les structures, les comportements et les institutions au fil du temps.

## 📚 1. La socialisation

| Type | Période | Agents | Contenu |
|---|---|---|---|
| **Primaire** | **Enfance** | **Famille** (parents, famille élargie), quartier | Langue, **valeurs de base**, manières, rôles de genre |
| **Secondaire** | **Adolescence et vie adulte** | **École**, **groupe de pairs**, **travail**, **médias**, **religion**, associations | Savoirs, compétences, normes professionnelles |

La socialisation dure **toute la vie** (socialisation continue) ; elle peut changer avec les **nouveaux contextes** (migration, emploi).

## 📚 2. Normes, valeurs et rôles
- **Valeurs** : idéaux collectifs (respect des aînés, solidarité, honnêteté).
- **Normes** : règles de conduite qui en découlent (saluer, politesse).
- **Statut** (place dans la société) et **rôle** (comportement attendu : père, élève, chef).
- **Contrôle social** : moyens de faire respecter les normes, **sanctions positives** (félicitations) et **négatives** (désapprobation, punitions).
- **Déviance** : comportement qui **transgresse** les normes ; elle est **relative** à la société et à l'époque.

## 📚 3. Les grands auteurs

| Auteur | Idée |
|---|---|
| **Émile Durkheim** | La société s'impose aux individus par l'**éducation** ; **solidarité mécanique** (sociétés traditionnelles) → **organique** (sociétés modernes, division du travail) ; **anomie** : affaiblissement des normes |
| **Pierre Bourdieu** | L'**habitus** : manières de penser et d'agir intériorisées dans l'enfance |
| **Max Weber** | Le sens que les individus donnent à leurs actions ; **rationalisation** |
| **Karl Marx** | Le changement social vient du **conflit** entre classes |

## 📚 4. Le changement social

| Cause | Exemples en Afrique |
|---|---|
| **Urbanisation** | **Exode rural** vers Abidjan, familles plus petites |
| **Scolarisation** | Recul de l'analphabétisme, nouveaux métiers, **place des filles** |
| **Technologies** | **Téléphone mobile**, internet, réseaux sociaux, mobile money |
| **Mondialisation** | Consommation, modes de vie, migrations |
| **Économie** | Salariat, secteur informel |

**Effets :** passage de la **famille élargie** à la **famille nucléaire**, évolution du **rôle des femmes**, **individualisme**, nouveaux conflits de générations, tension **tradition / modernité**.
**Le changement social** peut être **rapide** (révolution) ou **lent** (évolution) ; il crée des **conflits** mais aussi de nouvelles **solidarités**.

## 🧪 Exemple
Une jeune fille de village, scolarisée jusqu'au lycée, part étudier à Abidjan : sa **socialisation secondaire** (école, amis, médias) élargit ses valeurs ; elle garde les **valeurs familiales** mais adopte de nouveaux **comportements** (travail salarié, choix de son conjoint, usage d'internet).

## ✏️ Exercices
**Exercice 1.** Distingue socialisation primaire et secondaire.

:::corrige
**Primaire** : dans l'enfance, surtout en **famille**. **Secondaire** : plus tard, par l'**école**, les **pairs**, le **travail**, les **médias**.
:::

**Exercice 2.** Cite trois causes du changement social.

:::corrige
Urbanisation, scolarisation, nouvelles technologies, mondialisation, évolution de l'économie (trois au choix).
:::

**Exercice 3.** Qu'est-ce que l'anomie selon Durkheim ?

:::corrige
L'**affaiblissement ou l'absence de normes** qui guident les individus ; il peut conduire à la **déviance** et à des comportements désorientés.
:::

**Exercice 4.** Donne un exemple de sanction positive et un de sanction négative.

:::corrige
Positive : **félicitations**, prix, promotion. Négative : **blâme**, amende, exclusion.
:::

## ⚠️ Pièges
- La socialisation **ne s'arrête pas** à l'enfance.
- La **déviance** n'est pas la même partout : ce qui est normal ailleurs peut ne pas l'être ici.
- Le changement social n'est pas **toujours progressiste** : il peut aussi créer des **tensions**.

## 🏆 À retenir pour le BAC
Socialisation primaire / secondaire ; valeurs, normes, statut et rôle ; contrôle social et déviance ; Durkheim, Bourdieu, Weber, Marx ; causes et effets du changement social en Afrique.
`
