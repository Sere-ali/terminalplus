// Comptabilité des sociétés (G2) – version détaillée, d'après le programme communiqué par le propriétaire du site.
// Droit des sociétés OHADA (Acte uniforme révisé). Les seuils exacts et les numéros de comptes sont à confirmer avec l'énoncé et le professeur.

export const COMPTA_CS: Record<string, string> = {}

COMPTA_CS["cs-generalites"] = String.raw`## 💡 L'essentiel en une phrase
Une **société** est un **contrat** par lequel deux ou plusieurs personnes mettent en commun des **apports** pour réaliser des **bénéfices** et en partager les profits comme les pertes ; une fois immatriculée, elle devient une **personne morale** distincte de ses associés. Dans l'espace OHADA, elle est régie par l'**Acte uniforme relatif au droit des sociétés commerciales et du GIE**.

## 📚 1. Les conditions de validité du contrat de société
| Type | Conditions |
|---|---|
| **Générales** (tout contrat) | Consentement libre, **capacité**, objet **licite**, cause licite |
| **Spécifiques** (société) | **Apports** de chaque associé ; **participation aux bénéfices et aux pertes** ; **affectio societatis** (volonté de collaborer sur un pied d'égalité) ; **pluralité d'associés** (sauf société unipersonnelle) |

**Sanctions :** si une condition manque, la société peut être **annulée**.

## 📚 2. Classification des sociétés
| | **SNC** (Société en nom collectif) | **SARL** | **SA** (Société anonyme) |
|---|---|---|---|
| Catégorie | **Société de personnes** | **Société mixte** | **Société de capitaux** |
| Associés | Au moins 2, **commerçants** | 1 ou plusieurs | 1 ou plusieurs |
| Responsabilité | **Solidaire et indéfinie** (sur tous leurs biens) | **Limitée aux apports** | **Limitée aux apports** |
| Capital minimum | Aucun | **1 000 000 F** | **10 000 000 F** (plus si appel public à l'épargne) |
| Titres | **Parts d'intérêt** | **Parts sociales** (non librement cessibles) | **Actions** (librement négociables) |
| Dirigeant | Gérant | **Gérant** | PDG, DG ou administrateur |
| Importance de la personne des associés | **Très forte** | Moyenne | **Faible** (c'est le capital qui compte) |

**Remarque :** dans les sociétés de capitaux, l'apport en **industrie** est interdit ; seules les SNC l'acceptent (sans que cela compte dans le capital).

## 📚 3. Les organes
- **SNC / SARL** : un **gérant** dirige, les associés décident en **assemblée**.
- **SA** : **conseil d'administration**, **assemblée générale**, **commissaire aux comptes**.
- Dans tous les cas, l'assemblée **approuve les comptes** et **décide de l'affectation du résultat**.

## 🧪 Exemple
Trois amis créent une SARL avec 3 000 000 F de capital. L'entreprise accumule 10 000 000 F de dettes qu'elle ne peut pas payer : chaque associé perd au maximum **son apport**. Dans une SNC, les créanciers pourraient saisir **leurs biens personnels**.

## ✏️ Exercices
**Exercice 1.** Cite quatre conditions de validité du contrat de société.

:::corrige
Consentement, capacité, objet licite, cause licite (générales) ; apports, partage des bénéfices et pertes, affectio societatis, pluralité d'associés (spécifiques) : quatre au choix.
:::

**Exercice 2.** Compare la responsabilité des associés d'une SNC et d'une SARL.

:::corrige
SNC : **solidaire et indéfinie** sur tous leurs biens. SARL : **limitée aux apports**.
:::

**Exercice 3.** Quelle société choisir pour lancer un commerce avec trois amis en limitant les risques et avec un petit capital ?

:::corrige
La **SARL** (capital minimum de 1 000 000 F, responsabilité limitée aux apports).
:::

## ⚠️ Pièges
- Une société est une **personne morale** : elle a son propre patrimoine, distinct de celui des associés.
- Les associés d'une SNC ont la **qualité de commerçant**.
- Dans la SARL, les parts sociales ne sont **pas librement cessibles**.

## 🏆 À retenir pour le BAC
Conditions générales et spécifiques ; SNC (personnes, responsabilité indéfinie), SARL (mixte, 1 000 000 F), SA (capitaux, 10 000 000 F) ; parts sociales et actions.
`

COMPTA_CS["cs-constitution"] = String.raw`## 💡 L'essentiel en une phrase
À la **constitution**, les associés font des **apports** qui forment le **capital social** ; la comptabilité enregistre d'abord la **souscription** (promesse d'apport) puis sa **libération** (réalisation effective), et immobilise les **frais de constitution**.

## 📚 1. Les trois sortes d'apports
| Apport | Contenu | Particularité |
|---|---|---|
| **En numéraire** | Argent (espèces, virement) | Libéré en **tout ou partie** à la constitution |
| **En nature** | Biens : immeuble, matériel, marchandises, fonds de commerce | Doit être **évalué** (commissaire aux apports si nécessaire) et **libéré intégralement** |
| **En industrie** | Savoir-faire, travail | **SNC seulement** ; ne fait pas partie du **capital** |

## 📚 2. Souscription et libération (comptes)
- **101** Capital social ; **461** Apporteurs, opérations sur le capital (4611 apports en nature, 4612 apports en numéraire, 4613 capital appelé non versé).
- **109** Actionnaires, capital souscrit **non appelé** (pour les SA).
- **Règle de libération** (fixée par l'Acte uniforme et les statuts) : une **fraction minimale** du capital en numéraire est versée dès la constitution, le **reste** dans un délai maximal.

**① Souscription :** Débit 4611 / 4612 / Crédit 101.
**② Libération :** les associés versent leur apport : Débit 521 (ou compte du bien) / Crédit 4611 / 4612.
**③ Pour une SA :** capital non appelé : Débit 109 / Crédit 101 ; appel de fonds : Débit 4613 / Crédit 109 ; versement : Débit 521 / Crédit 4613.

## 📚 3. Exemple complet : une SARL de 10 000 000 F
Apports : **numéraire 6 000 000** (50 % libérés à la constitution), **matériel 3 000 000**, **marchandises 1 000 000**.

| N° | Compte | Débit | Crédit |
|---|---|---|---|
| **1 – Souscription** | 4611 Apporteurs, apports en nature | 4 000 000 | |
| | 4612 Apporteurs, apports en numéraire | 6 000 000 | |
| | 101 Capital social | | 10 000 000 |
| **2 – Apports en nature** | 241 Matériel | 3 000 000 | |
| | 311 Marchandises | 1 000 000 | |
| | 4611 Apporteurs, apports en nature | | 4 000 000 |
| **3 – Versement de 50 % du numéraire** | 521 Banque | 3 000 000 | |
| | 4612 Apporteurs, apports en numéraire | | 3 000 000 |

Il reste **3 000 000 F** à verser : le compte **4612** garde un solde débiteur de 3 000 000 (**capital souscrit non encore libéré**), qui sera soldé lors de l'appel de fonds : Débit 521 / Crédit 4612.

## 📚 4. Les frais de constitution (frais d'établissement)
Frais d'actes notariés, d'enregistrement, honoraires, publicité légale : ce sont des **frais d'établissement** ; on peut les **immobiliser** (actif, **compte 201**) et les **amortir rapidement** (en général sur cinq ans au plus), ou les passer directement en charges selon l'énoncé.

**Exemple :** frais de constitution de **600 000 F** payés par banque.

| Compte | Intitulé | Débit | Crédit |
|---|---|---|---|
| 201 | Frais d'établissement (frais de constitution) | 600 000 | |
| 521 | Banque | | 600 000 |

**Amortissement sur 5 ans : 600 000 / 5 = 120 000 F par an.**
Chaque année : Débit 681 Dotations aux amortissements 120 000 / Crédit 280 Amortissements des charges immobilisées 120 000.

## ✏️ Exercices
**Exercice 1.** Une SARL est créée avec un capital de **5 000 000 F** : numéraire 3 500 000 (libéré à 50 %), mobilier de bureau 1 500 000 (libéré). Passe les écritures de constitution.

:::corrige
① Souscription : Débit 4612 3 500 000 ; Débit 4611 1 500 000 / Crédit 101 5 000 000.
② Mobilier : Débit 244 Matériel et mobilier de bureau 1 500 000 / Crédit 4611 1 500 000.
③ Versement de 50 % du numéraire : Débit 521 1 750 000 / Crédit 4612 1 750 000.
Reste à libérer : **1 750 000 F**.
:::

**Exercice 2.** Les frais de constitution de la société sont de 450 000 F, amortis sur 5 ans. Quelle annuité ?

:::corrige
450 000 / 5 = **90 000 F par an** (Débit 681 / Crédit 280).
:::

**Exercice 3.** L'associé X apporte son savoir-faire dans une SNC : cet apport est-il compris dans le capital ?

:::corrige
Non : l'apport en industrie **ne compte pas dans le capital**, mais donne droit à une part des bénéfices.
:::

## ⚠️ Pièges
- Distinguer **souscrit** (promis) et **libéré** (versé).
- Un apport **en nature** doit être **intégralement libéré** à la constitution.
- Les frais de constitution **ne sont pas** passés directement en charges quand on les immobilise : on les **amortit** ensuite.

## 🏆 À retenir pour le BAC
Trois sortes d'apports ; écritures de souscription (101 / 461) puis de libération (521 ou bien / 461) ; frais d'établissement immobilisés (201) et amortis rapidement.
`

COMPTA_CS["cs-associes"] = String.raw`## 💡 L'essentiel en une phrase
Les associés peuvent **prêter** de l'argent à leur société sous forme d'**avances en compte courant** (dette de la société, rémunérée par des intérêts) ; ils peuvent aussi verser leurs apports **avant** les appels de fonds (**versement anticipé**) ou **en retard** (**libération tardive**).

## 📚 1. Le compte courant d'associé (compte 462)
**Différence entre un apport et un compte courant :**

| | **Apport** | **Compte courant** |
|---|---|---|
| Nature | Augmente le **capital** | **Prêt** à la société |
| Droits de l'associé | Droit aux dividendes, au vote | Droit à des **intérêts** et au remboursement |
| Remboursement | Seulement à la **liquidation** | **À tout moment** (selon la convention) |
| Compte | 101 | **462** |

**Écritures :**

| Opération | Débit | Crédit |
|---|---|---|
| **Avance** de l'associé | 521 Banque | 462 Associés, comptes courants |
| **Remboursement** | 462 | 521 |
| **Intérêts de l'exercice** | 67 Charges d'intérêts | 462 |

$$ Int\acute{e}r\hat{e}ts = Avance \times Taux \times \frac{Dur\acute{e}e\ en\ mois}{12} $$

**Exemple :** l'associé KONAN avance **2 000 000 F** le 1ᵉʳ juillet, à **6 %** l'an. Intérêts au 31 décembre = 2 000 000 × 6 % × 6/12 = **60 000 F**.

| Date | Compte | Débit | Crédit |
|---|---|---|---|
| 01/07 | 521 Banque | 2 000 000 | |
| | 462 Associés, comptes courants | | 2 000 000 |
| 31/12 | 67 Charges d'intérêts | 60 000 | |
| | 462 Associés, comptes courants | | 60 000 |

**Remarque :** la retenue à la source éventuelle sur les intérêts (au taux donné par l'énoncé) se comptabilise au crédit d'un compte d'impôt (447).

## 📚 2. Versements anticipés
Un associé **verse avant** que l'assemblée n'appelle les fonds : la somme est inscrite au **crédit de 4615 Apporteurs, versements anticipés** (dette), puis virée au capital au moment de l'appel.

| Opération | Débit | Crédit |
|---|---|---|
| Versement anticipé | 521 | 4615 |
| À l'appel de fonds | 4615 | 4613 / 4612 (apport appelé) |

## 📚 3. Libérations tardives
Si un associé **ne verse pas** à la date d'appel : il devient **associé défaillant** (compte **4616**). La société peut lui réclamer des **intérêts de retard**, puis, après mise en demeure, **vendre ses titres**.

## ✏️ Exercices
**Exercice 1.** L'associé DIALLO avance **1 500 000 F** à 8 % pendant 3 mois. Intérêts ?

:::corrige
1 500 000 × 0,08 × 3/12 = **30 000 F**. Écriture : Débit 67 30 000 / Crédit 462 30 000.
:::

**Exercice 2.** Quelle est la différence entre apport et compte courant d'associé ?

:::corrige
L'apport augmente le **capital** et ne se rembourse qu'à la liquidation ; le compte courant est un **prêt** remboursable, rémunéré par des intérêts, qui n'augmente pas le capital.
:::

**Exercice 3.** Un associé rembourse sa part avant l'appel de fonds : 500 000 F virés le 10 mars. Écriture ?

:::corrige
Débit 521 Banque 500 000 / Crédit 4615 Apporteurs, versements anticipés 500 000.
:::

## ⚠️ Pièges
- Le compte courant est une **dette** de la société (passif), pas un capital.
- Les intérêts sont une **charge** de la société.
- Ne pas confondre **versement anticipé** (avant l'appel) et **libération tardive** (après).

## 🏆 À retenir pour le BAC
Compte 462 (avances, remboursements, intérêts), différences avec l'apport, versement anticipé (4615), associé défaillant (4616).
`

COMPTA_CS["cs-affectation-resultat"] = String.raw`## 💡 L'essentiel en une phrase
À la clôture, l'**assemblée générale** décide de l'**affectation du résultat** : elle constitue d'abord la **réserve légale**, puis les réserves facultatives, distribue des **dividendes** et reporte le solde à **nouveau**.

## 📚 1. Les étapes de l'affectation
1. **Résultat net** de l'exercice (compte 131 bénéfice ; 139 perte).
2. On **retranche les pertes antérieures** (report à nouveau débiteur).
3. On prélève la **réserve légale** : au moins **10 % du bénéfice net** (après pertes antérieures), tant que la réserve n'atteint pas **20 % du capital**.
4. On obtient le **bénéfice distribuable** : $$ B\acute{e}n\acute{e}fice\ distribuable = B\acute{e}n\acute{e}fice\ net - Pertes\ ant\acute{e}rieures - R\acute{e}serve\ l\acute{e}gale + Report\ \grave{a}\ nouveau\ cr\acute{e}diteur $$
5. L'assemblée répartit le distribuable : **réserves statutaires / facultatives**, **dividendes**, **report à nouveau**.

## 📚 2. Les comptes
| Compte | Intitulé |
|---|---|
| 131 | Résultat net : bénéfice (139 : perte) |
| 111 | Réserve légale |
| 112 | Réserves statutaires ou contractuelles |
| 118 | Autres réserves (facultatives) |
| 121 | Report à nouveau créditeur (129 : débiteur) |
| 465 | Associés, dividendes à payer |

## 📚 3. Exemple 1 : affectation complète
SARL : capital **10 000 000 F** (10 000 parts de 1 000 F) ; bénéfice net **5 000 000 F** ; pas de report antérieur.
- Réserve légale = 10 % × 5 000 000 = **500 000** (plafond : 20 % × 10 000 000 = 2 000 000).
- Bénéfice distribuable = 5 000 000 − 500 000 = **4 500 000**.
- L'assemblée décide : réserves statutaires **300 000** ; dividendes **3 500 000** ; report à nouveau **700 000** (total 4 500 000 ✓).
- **Dividende par part** = 3 500 000 / 10 000 = **350 F**.

**Tableau d'affectation :**

| Origine | Montant | Affectation | Montant |
|---|---|---|---|
| Bénéfice net | 5 000 000 | Réserve légale | 500 000 |
| | | Réserves statutaires | 300 000 |
| | | Dividendes | 3 500 000 |
| | | Report à nouveau | 700 000 |
| **Total** | **5 000 000** | **Total** | **5 000 000** |

**Écritures :**

| N° | Compte | Débit | Crédit |
|---|---|---|---|
| **Affectation (après l'AG)** | 131 Résultat net : bénéfice | 5 000 000 | |
| | 111 Réserve légale | | 500 000 |
| | 112 Réserves statutaires | | 300 000 |
| | 465 Associés, dividendes à payer | | 3 500 000 |
| | 121 Report à nouveau créditeur | | 700 000 |
| **Mise en paiement des dividendes** | 465 Associés, dividendes à payer | 3 500 000 | |
| | 521 Banque | | 3 500 000 |

(Si une retenue à la source s'applique aux dividendes, au taux de l'énoncé : on crédite 447 de la retenue et 521 du net.)

## 📚 4. Exemple 2 : avec perte antérieure
Bénéfice net **3 000 000** ; report à nouveau **débiteur** de **400 000** (perte antérieure) ; capital 10 000 000.
- Bénéfice après pertes = 3 000 000 − 400 000 = **2 600 000**.
- Réserve légale = 10 % × 2 600 000 = **260 000**.
- **Distribuable = 2 600 000 − 260 000 = 2 340 000**.

## 📚 5. En cas de perte
Débit 129 Report à nouveau débiteur / Crédit 139 Résultat net : perte. La perte est **reportée** et sera absorbée par les bénéfices futurs.

## ✏️ Exercices
**Exercice 1.** Capital 6 000 000 F ; bénéfice net 2 000 000 F. Calcule la réserve légale de l'année, son plafond, et le distribuable.

:::corrige
Réserve légale = **200 000** ; plafond = 20 % × 6 000 000 = **1 200 000** ; distribuable = 2 000 000 − 200 000 = **1 800 000 F**.
:::

**Exercice 2.** Distribuable 1 800 000 F ; 3 000 parts ; l'assemblée distribue tout. Dividende par part ? Passe l'écriture d'affectation.

:::corrige
1 800 000 / 3 000 = **600 F par part**. Écriture : Débit 131 2 000 000 / Crédit 111 200 000 / Crédit 465 1 800 000.
:::

**Exercice 3.** La société a déjà une réserve légale de 1 150 000 F ; capital 6 000 000 F ; bénéfice net 2 000 000 F. Quelle réserve légale constituer ?

:::corrige
Plafond = 1 200 000 ; il ne reste que **50 000 F** à doter (10 % × 2 000 000 = 200 000 serait supérieur). Réserve légale = **50 000 F**.
:::

## ⚠️ Pièges
- La **réserve légale** se prélève **avant** les dividendes.
- On **déduit les pertes antérieures** avant de calculer la réserve légale.
- On ne distribue pas de dividendes si les capitaux propres deviennent inférieurs au capital.

## 🏆 À retenir pour le BAC
Distribuable = bénéfice − pertes antérieures − réserve légale + report ; réserve légale 10 % jusqu'à 20 % du capital ; écriture d'affectation (131 → 111, 112, 465, 121) ; dividende par part.
`

COMPTA_CS["cs-modification-capital"] = String.raw`## 💡 L'essentiel en une phrase
Le **capital social** peut être **augmenté** (nouveaux apports ou incorporation de réserves) ou **réduit** (pour absorber des pertes ou racheter des titres) sur **décision de l'assemblée** ; certaines pertes obligent à agir.

## 📚 1. Augmentation du capital
| Mode | Principe | Effet sur les capitaux propres |
|---|---|---|
| **Apports nouveaux** (numéraire ou nature) | De l'**argent frais** entre dans la société | Augmentent |
| **Incorporation de réserves ou de bénéfices** | On **transforme** des réserves en capital ; **aucun apport** | **Inchangés** (virement interne) |

**① Apports nouveaux avec prime d'émission**
La société émet **1 000 parts nouvelles** de valeur nominale **1 000 F** à **1 200 F** : le versement est de **1 200 000 F** ; la **prime d'émission** (compte **105**) est de **200 000 F**.

| N° | Compte | Débit | Crédit |
|---|---|---|---|
| Versement des souscripteurs | 521 Banque | 1 200 000 | |
| | 4614 Apporteurs, versements reçus sur augmentation de capital | | 1 200 000 |
| Réalisation de l'augmentation | 4614 | 1 200 000 | |
| | 101 Capital social | | 1 000 000 |
| | 105 Primes liées au capital social | | 200 000 |

**② Incorporation de réserves de 1 500 000 F** (les associés reçoivent des parts gratuites ou la valeur nominale augmente) :

| Compte | Débit | Crédit |
|---|---|---|
| 112 / 118 Réserves | 1 500 000 | |
| 101 Capital social | | 1 500 000 |

## 📚 2. Réduction du capital
- **Pour pertes** : on **annule** une partie du capital pour apurer un report à nouveau débiteur ; aucune somme n'est rendue aux associés.
- **Par remboursement ou rachat de titres** : la société rachète des parts ou actions, puis les **annule**.

**③ Réduction de 4 000 000 F pour absorber des pertes (report à nouveau débiteur de 4 000 000) :**

| Compte | Débit | Crédit |
|---|---|---|
| 101 Capital social | 4 000 000 | |
| 129 Report à nouveau débiteur | | 4 000 000 |

**④ Rachat et annulation de 500 parts** de nominal 1 000 F rachetées à **1 100 F** : paiement 550 000 F ; capital réduit de 500 000 F ; l'excédent de 50 000 F s'impute sur les réserves disponibles.

| Compte | Débit | Crédit |
|---|---|---|
| 101 Capital social | 500 000 | |
| 118 Autres réserves | 50 000 | |
| 521 Banque | | 550 000 |

## 📚 3. La règle de sauvegarde (OHADA)
Si, du fait des pertes, les **capitaux propres deviennent inférieurs à la moitié du capital social**, l'assemblée doit décider, **dans les quatre mois** suivant l'approbation des comptes, s'il y a lieu de **dissoudre** la société ou de **reconstituer** les capitaux propres (par augmentation de capital ou réduction suivie de reconstitution).

## ✏️ Exercices
**Exercice 1.** Une société incorpore 800 000 F de réserves dans son capital de 5 000 000 F. Nouveau capital et écriture ?

:::corrige
Nouveau capital = **5 800 000 F**. Écriture : Débit 118 Réserves 800 000 / Crédit 101 Capital social 800 000 (aucun argent nouveau).
:::

**Exercice 2.** Capital 10 000 000 F ; capitaux propres après pertes : 4 000 000 F. Que doit faire l'assemblée ?

:::corrige
Les capitaux propres (4 000 000) sont inférieurs à la **moitié du capital** (5 000 000) : l'assemblée doit décider **dans les quatre mois** la **dissolution** ou la **reconstitution** des capitaux propres.
:::

**Exercice 3.** Émission de 2 000 parts de nominal 500 F au prix de 650 F. Calcule le versement, l'augmentation de capital et la prime.

:::corrige
Versement = 2 000 × 650 = **1 300 000** ; capital = 2 000 × 500 = **1 000 000** ; prime d'émission = **300 000 F**.
:::

## ⚠️ Pièges
- L'**incorporation de réserves** ne change **pas** les capitaux propres totaux : elle déplace des fonds des réserves vers le capital.
- Une **réduction pour pertes** ne rend **pas d'argent** aux associés.
- La **prime d'émission** ne fait pas partie du capital.

## 🏆 À retenir pour le BAC
Augmentation par apports ou par incorporation, prime d'émission (105), réduction pour pertes ou par rachat, règle de la moitié du capital et délai de quatre mois.
`

COMPTA_CS["cs-dissolution-liquidation"] = String.raw`## 💡 L'essentiel en une phrase
La société prend fin par la **dissolution** ; elle est alors **liquidée** : on vend les biens, on paie les dettes, puis on **partage l'actif net** entre les associés (**boni**) ou on répartit la perte (**mali**).

## 📚 1. Les causes de dissolution
- **Arrivée du terme** fixé par les statuts.
- **Réalisation de l'objet** ou impossibilité de le réaliser.
- **Décision des associés** (dissolution anticipée volontaire).
- **Jugement** du tribunal (par exemple pour justes motifs ou en cas de faillite).
- **Perte de plus de la moitié du capital** non régularisée dans les délais légaux.
- **Autres causes** : décès d'un associé en SNC (si les statuts le prévoient), réunion de toutes les parts en une seule main, etc.

**Effet :** la société **conserve la personnalité morale pour les besoins de la liquidation**.

## 📚 2. Les opérations de liquidation
1. **Nomination d'un liquidateur** (les associés ou le juge).
2. **Réalisation de l'actif** : vente des immobilisations, des stocks, recouvrement des créances (résultat : plus ou moins-values).
3. **Apurement du passif** : paiement des dettes et des **frais de liquidation**.
4. **Calcul de l'actif net** : $$ Actif\ net\ \grave{a}\ partager = Produit\ de\ la\ r\acute{e}alisation\ de\ l'actif - Dettes - Frais\ de\ liquidation $$
5. **Partage** : on rembourse le **capital**, puis on partage l'**excédent** (**boni de liquidation**) **proportionnellement aux droits** ; si l'actif net est inférieur au capital, c'est un **mali** supporté par les associés.
$$ Boni = Actif\ net\ \grave{a}\ partager - Capital $$

## 📚 3. Exemple complet
Société ABC (SARL). **Avant liquidation** : actif comptable 13 000 000 (immobilisations 8 000 000 ; stocks 3 000 000 ; créances 1 500 000 ; banque 500 000) ; dettes 4 000 000 ; **capital 6 000 000** ; **réserves 3 000 000**. Associés : **A 50 %**, **B 30 %**, **C 20 %**.

**Réalisation de l'actif :**

| Élément | Valeur comptable | Produit de la réalisation | Écart |
|---|---|---|---|
| Immobilisations | 8 000 000 | 7 000 000 | − 1 000 000 |
| Stocks | 3 000 000 | 2 500 000 | − 500 000 |
| Créances | 1 500 000 | 1 400 000 | − 100 000 |
| Banque | 500 000 | 500 000 | 0 |
| **Total** | 13 000 000 | **11 400 000** | **− 1 600 000** |

**Apurement :** dettes payées **4 000 000** ; frais de liquidation **200 000**.
**Actif net à partager** = 11 400 000 − 4 000 000 − 200 000 = **7 200 000 F**.
Résultat de la liquidation = −1 600 000 − 200 000 = **−1 800 000**, absorbé par les réserves (3 000 000 − 1 800 000 = **1 200 000** de réserves restantes) ⇒ capitaux propres de **7 200 000** ✓.

**Partage :**

| Associé | Droit | Remboursement du capital | Part du boni (1 200 000) | **Total reçu** |
|---|---|---|---|---|
| A | 50 % | 3 000 000 | 600 000 | **3 600 000** |
| B | 30 % | 1 800 000 | 360 000 | **2 160 000** |
| C | 20 % | 1 200 000 | 240 000 | **1 440 000** |
| **Total** | 100 % | 6 000 000 | 1 200 000 | **7 200 000** |

**Écritures de clôture :**

| N° | Compte | Débit | Crédit |
|---|---|---|---|
| Partage | 101 Capital social | 6 000 000 | |
| | 11x Réserves restantes | 1 200 000 | |
| | 462 Associés (boni et capital à rembourser) | | 7 200 000 |
| Paiement | 462 Associés | 7 200 000 | |
| | 521 Banque | | 7 200 000 |

## 📚 4. Et en cas de mali ?
Si l'actif net à partager est de **4 500 000 F** pour un capital de 6 000 000 F, il y a un **mali de 1 500 000** : chaque associé perd **25 %** de son apport (4 500 000 / 6 000 000 = 75 % remboursés) ⇒ A reçoit 2 250 000 (au lieu de 3 000 000), B 1 350 000, C 900 000. (Dans une **SNC**, les associés restent tenus **indéfiniment** si les dettes ne sont pas payées.)

## ✏️ Exercices
**Exercice 1.** Cite quatre causes de dissolution d'une société.

:::corrige
Arrivée du terme ; réalisation de l'objet ; décision des associés ; jugement du tribunal ; perte de plus de la moitié du capital non régularisée (quatre au choix).
:::

**Exercice 2.** Actif réalisé : 9 000 000 F ; dettes : 3 500 000 F ; frais : 300 000 F ; capital : 4 000 000 F ; deux associés à parts égales. Calcule l'actif net, le boni et la part de chacun.

:::corrige
Actif net = 9 000 000 − 3 500 000 − 300 000 = **5 200 000**. Boni = 5 200 000 − 4 000 000 = **1 200 000**. Chaque associé : capital 2 000 000 + boni 600 000 = **2 600 000 F**.
:::

**Exercice 3.** Actif net à partager : 3 000 000 F ; capital : 4 000 000 F (A 60 %, B 40 %). Quelle part reçoit chacun ?

:::corrige
Mali de 1 000 000 (25 %). A : 60 % × 3 000 000 = **1 800 000** ; B : 40 % × 3 000 000 = **1 200 000**.
:::

## ⚠️ Pièges
- On paie **d'abord les créanciers**, **ensuite** les associés.
- La **dissolution** est la décision ; la **liquidation** est son exécution.
- Le **boni** se calcule **après** remboursement du capital.

## 🏆 À retenir pour le BAC
Causes de dissolution ; liquidateur ; réalisation de l'actif, apurement du passif ; actif net = produit − dettes − frais ; capital remboursé puis boni partagé ; mali supporté par les associés.
`
