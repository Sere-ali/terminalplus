// Comptabilité des sociétés (G2) – d'après le programme communiqué par le propriétaire du site.
// Droit des sociétés OHADA (Acte uniforme révisé). Les seuils exacts sont à vérifier avec l'énoncé et le cours du professeur.

export const COMPTA_CS: Record<string, string> = {}

COMPTA_CS["cs-generalites"] = String.raw`## 💡 L'essentiel en une phrase
Une **société** est un contrat par lequel deux ou plusieurs personnes mettent en commun des **apports** pour réaliser des **bénéfices** et en partager les profits comme les pertes ; elle est régie dans l'espace OHADA par l'**Acte uniforme sur les sociétés commerciales**.

## 📚 1. Conditions de validité du contrat de société
- **Conditions générales** de tout contrat : consentement, capacité, objet licite, cause.
- **Conditions propres** : pluralité d'associés (sauf société unipersonnelle), **apports**, **partage des bénéfices et des pertes**, **affectio societatis** (volonté de s'associer).

## 📚 2. Classification
- **Sociétés de personnes** : **SNC**. Les associés sont **commerçants** et **solidairement et indéfiniment responsables** des dettes. Pas de capital minimum.
- **Sociétés de capitaux** : **SA**. Les actionnaires ne risquent que leur apport. Capital minimum **10 000 000 F** (plus élevé si appel public à l'épargne).
- **Sociétés mixtes** : **SARL**. Responsabilité limitée aux apports ; capital minimum **1 000 000 F** ; les parts sociales ne sont pas librement cessibles.

## 🧪 Exemple
Trois amis créent une SARL avec 3 000 000 F de capital : si l'entreprise s'endette lourdement, chacun ne perd au maximum que son apport.

## ✏️ Exercices
**Exercice 1.** Cite deux conditions propres au contrat de société.

:::corrige
Les apports, le partage des bénéfices et des pertes, l'affectio societatis, la pluralité d'associés.
:::

**Exercice 2.** Compare la responsabilité des associés d'une SNC et d'une SARL.

:::corrige
SNC : solidaire et indéfinie (sur tous leurs biens). SARL : limitée à leurs apports.
:::

## ⚠️ Pièges
- Une société est une **personne morale** distincte de ses associés.
- Dans la SNC, les associés ont la **qualité de commerçant**.

## 🏆 À retenir pour le BAC
Conditions générales et spécifiques du contrat de société ; SNC (personnes), SA (capitaux), SARL (mixte) ; responsabilité et capital minimum.
`

COMPTA_CS["cs-constitution"] = String.raw`## 💡 L'essentiel en une phrase
À la **constitution**, les associés font des **apports** qui forment le **capital social** ; la comptabilité enregistre d'abord la **promesse** d'apport (souscription), puis sa **libération**.

## 📚 1. Les apports
- **En numéraire** : argent.
- **En nature** : biens (immeuble, matériel, marchandises, fonds de commerce) évalués à leur valeur.
- **En industrie** : savoir-faire ou travail (SNC uniquement) ; ils **ne comptent pas dans le capital**.

## 📚 2. Écritures (comptes usuels)
- **Promesse (souscription)** : Débit **461** Apporteurs, opérations sur le capital / Crédit **101** Capital social.
- **Libération en numéraire** : Débit **521** Banque / Crédit **461**.
- **Apport en nature** : Débit compte du bien (ex. **231** Bâtiments) / Crédit **461**.
- La **libération** peut être partielle : la fraction non libérée reste inscrite en **461** (capital appelé non versé) selon les règles de la forme juridique (SARL, SA : minimum à verser dès la constitution, solde dans un délai maximal fixé par la loi).

## 📚 3. Frais de constitution
Frais d'actes, d'enregistrement, honoraires : ce sont des **frais d'établissement** ; on les inscrit à l'**actif** (immobilisation incorporelle) puis on les **amortit rapidement** (en général en cinq ans au plus).

## 🧪 Exemple corrigé
SARL : capital de 8 000 000 F = 5 000 000 F en numéraire + immeuble de 3 000 000 F, entièrement libérés.
1. Débit 461 / Crédit 101 : **8 000 000**.
2. Débit 521 / Crédit 461 : **5 000 000**.
3. Débit 231 / Crédit 461 : **3 000 000**.
Frais de constitution payés par banque : 600 000 F ⇒ Débit 201 Frais d'établissement / Crédit 521 : **600 000**.

## ✏️ Exercices
**Exercice 1.** Un associé apporte du matériel de 2 500 000 F à une SARL. Écriture de l'apport ?

:::corrige
Débit 24 Matériel / Crédit 461 Apporteurs : **2 500 000 F** (après la souscription à la ligne 101).
:::

**Exercice 2.** Peut-on inclure un apport en industrie dans le capital ?

:::corrige
Non : l'apport en industrie ne fait pas partie du capital social, mais donne droit à une part des bénéfices (SNC).
:::

## ⚠️ Pièges
- Distinguer **souscrit** (promis) et **libéré** (versé).
- Les frais de constitution ne sont pas une charge immédiate : on les **immobilise** puis on les amortit.

## 🏆 À retenir pour le BAC
Types d'apports, écriture 461 / 101, libération, frais d'établissement amortis rapidement.
`

COMPTA_CS["cs-associes"] = String.raw`## 💡 L'essentiel en une phrase
Les associés peuvent **prêter de l'argent** à leur société sous forme d'**avances en compte courant** ; ces sommes sont des **dettes** de la société envers eux, rémunérées par des **intérêts**.

## 📚 1. Les comptes courants d'associés (compte 462)
- **Avance** d'un associé : Débit **521** Banque / Crédit **462** Associés, comptes courants.
- **Remboursement** : Débit 462 / Crédit 521.
- **Intérêts** de l'avance : $$ Int\acute{e}r\hat{e}ts = Avance \times taux \times \frac{dur\acute{e}e}{12} $$ comptabilisés en **charges financières** (Débit 67 / Crédit 462).
- Le compte courant n'augmente **pas** le capital : ce n'est pas un apport.

## 📚 2. Versements anticipés et libérations tardives
- **Versement anticipé** : l'associé verse sa part avant que la société ne l'appelle.
- **Libération tardive** : retard dans le versement d'une somme appelée : la société peut réclamer des **intérêts de retard** (et même vendre les titres dans certains cas).

## 🧪 Exemple corrigé
Un associé avance 2 000 000 F à 6 % l'an pendant 6 mois.
Intérêts = 2 000 000 × 0,06 × 6/12 = **60 000 F**.
Écriture : Débit 67 Intérêts / Crédit 462 : 60 000.

## ✏️ Exercices
**Exercice 1.** Avance de 1 500 000 F à 8 % pendant 3 mois. Intérêts ?

:::corrige
1 500 000 × 0,08 × 3/12 = **30 000 F**.
:::

**Exercice 2.** Quelle est la différence entre apport et compte courant d'associé ?

:::corrige
L'apport augmente le **capital** (et donne des droits d'associé) ; le compte courant est un **prêt** remboursable, rémunéré par des intérêts, qui ne change pas le capital.
:::

## ⚠️ Pièges
- Le compte courant est une **dette**, pas un capital.
- Les intérêts sont une **charge** de la société.

## 🏆 À retenir pour le BAC
Compte 462, avances et remboursements, intérêts (taux × durée), différence avec l'apport.
`

COMPTA_CS["cs-affectation-resultat"] = String.raw`## 💡 L'essentiel en une phrase
À la clôture, l'assemblée générale **affecte** le résultat : elle constitue d'abord la **réserve légale**, puis les autres réserves, distribue des **dividendes** et reporte le reste à **nouveau**.

## 📚 1. Bénéfice distribuable
$$ B\acute{e}n\acute{e}fice\ distribuable = B\acute{e}n\acute{e}fice\ net - Pertes\ ant\acute{e}rieures - R\acute{e}serve\ l\acute{e}gale + Report\ \grave{a}\ nouveau\ cr\acute{e}diteur $$

## 📚 2. Les réserves
- **Réserve légale** (compte 111) : prélèvement d'au moins **10 % du bénéfice net** (SARL et SA), jusqu'à ce qu'elle atteigne **20 % du capital**.
- **Réserves statutaires** (112) : prévues par les statuts.
- **Réserves facultatives** : décidées par l'assemblée.

## 📚 3. Dividendes et report à nouveau
- **Dividendes** : part des bénéfices distribuée aux associés ; mise en paiement après décision de l'assemblée (compte 465 *Associés, dividendes à payer*).
- **Report à nouveau** (compte 121 créditeur, 129 débiteur) : bénéfice conservé (ou perte reportée) sur l'exercice suivant.

## 🧪 Exemple corrigé
Capital 10 000 000 F (10 000 parts) ; bénéfice net 5 000 000 F.
- Réserve légale : 10 % ⇒ **500 000** (plafond : 2 000 000).
- Bénéfice distribuable = 5 000 000 − 500 000 = **4 500 000**.
- Réserves statutaires 300 000 ; dividendes 3 500 000 ; report à nouveau 700 000 (total 4 500 000 ✓).
- Dividende par part = 3 500 000 / 10 000 = **350 F**.
Écritures : Débit 131 Résultat 5 000 000 / Crédit 111 : 500 000, 112 : 300 000, 465 : 3 500 000, 121 : 700 000.

## ✏️ Exercices
**Exercice 1.** Capital 6 000 000 F ; bénéfice net 2 000 000 F. Réserve légale de l'année, et plafond de cette réserve ?

:::corrige
Réserve légale = 10 % × 2 000 000 = **200 000 F** ; plafond = 20 % × 6 000 000 = **1 200 000 F**.
:::

**Exercice 2.** Bénéfice distribuable = 1 800 000 F ; 3 000 parts ; l'assemblée distribue tout. Dividende par part ?

:::corrige
1 800 000 / 3 000 = **600 F par part**.
:::

## ⚠️ Pièges
- La réserve légale se prélève **avant** les dividendes.
- On ne distribue pas de dividendes en cas de **perte** ou si les capitaux propres deviennent inférieurs au capital.

## 🏆 À retenir pour le BAC
Distribuable = bénéfice − pertes − réserve légale + report ; réserve légale 10 % jusqu'à 20 % du capital ; dividendes ; report à nouveau.
`

COMPTA_CS["cs-modification-capital"] = String.raw`## 💡 L'essentiel en une phrase
Le **capital social** peut être **augmenté** (nouveaux apports ou incorporation de réserves) ou **réduit** (pour absorber des pertes ou racheter des titres) sur décision de l'assemblée.

## 📚 1. Augmentation du capital
- **Par apports nouveaux** (numéraire ou nature) : Débit 521 (ou compte du bien) / Crédit 101 Capital (via 461). Souvent avec une **prime d'émission** (compte 105) si le prix dépasse la valeur nominale.
- **Par incorporation de réserves ou de bénéfices** : **aucun apport nouveau** ; les réserves deviennent du capital (Débit 111 / 112 / 121 / Crédit 101). Les associés reçoivent des **parts ou actions gratuites** ou voient la valeur nominale augmenter.

## 📚 2. Réduction du capital
- **Pour pertes** : on annule une partie du capital et on apure le report à nouveau débiteur (Débit 101 / Crédit 129).
- **Rachat de titres** : la société rachète des parts ou actions et les annule.
- **Règle de sauvegarde (OHADA)** : si, à cause des pertes, les **capitaux propres deviennent inférieurs à la moitié du capital**, l'assemblée doit décider, **dans les quatre mois**, la **dissolution** de la société ou la **reconstitution** de ses capitaux propres.

## 🧪 Exemple corrigé
Capital 10 000 000 F.
- **Augmentation en numéraire** de 2 000 000 F : Débit 521 / Crédit 101 (via 461) : 2 000 000 ⇒ capital **12 000 000**.
- **Incorporation** de réserves de 1 500 000 F : Débit 112 / Crédit 101 : 1 500 000 ⇒ capital **13 500 000**, sans entrée d'argent.
- **Réduction pour pertes** de 4 000 000 F : Débit 101 / Crédit 129 : 4 000 000.

## ✏️ Exercices
**Exercice 1.** Une société incorpore 800 000 F de réserves dans son capital de 5 000 000 F. Nouveau capital ?

:::corrige
5 000 000 + 800 000 = **5 800 000 F** (aucun apport nouveau d'argent).
:::

**Exercice 2.** Capital 10 000 000 F ; capitaux propres après pertes : 4 000 000 F. Que doit faire l'assemblée ?

:::corrige
Les capitaux propres (4 M) sont inférieurs à la moitié du capital (5 M) : l'assemblée doit décider dans les **quatre mois** la **dissolution** ou la **reconstitution** des capitaux propres.
:::

## ⚠️ Pièges
- L'incorporation de réserves ne **change pas** les capitaux propres totaux : elle déplace seulement des fonds de la rubrique réserves vers capital.
- Une réduction du capital pour pertes **ne rend pas d'argent** aux associés.

## 🏆 À retenir pour le BAC
Augmentation (apports nouveaux / incorporation), réduction (pertes / rachat), règle de la moitié du capital et délai de quatre mois.
`

COMPTA_CS["cs-dissolution-liquidation"] = String.raw`## 💡 L'essentiel en une phrase
La société prend fin par la **dissolution**, puis ses biens sont vendus et ses dettes payées lors de la **liquidation** ; le **boni** éventuel est partagé entre les associés.

## 📚 1. Causes de dissolution
- Arrivée du **terme** (durée statutaire) ; **réalisation de l'objet** ou impossibilité.
- **Décision** des associés ; **jugement** du tribunal.
- **Perte de plus de la moitié du capital** non régularisée dans le délai légal.
- Autres causes prévues par la loi ou les statuts (décès d'un associé en SNC, par exemple, si les statuts le prévoient).

## 📚 2. Les opérations de liquidation
1. Nomination d'un **liquidateur**.
2. **Réalisation de l'actif** (vente des biens).
3. **Apurement du passif** (paiement des créanciers).
4. **Partage de l'actif net** : on rembourse d'abord le capital, puis on partage l'excédent (le **boni**) entre les associés proportionnellement à leurs droits. En cas de **mali**, les associés supportent la perte.
$$ Boni = Actif\ r\acute{e}alis\acute{e} - Dettes - Capital\ et\ r\acute{e}serves\ rembours\acute{e}s $$

## 🧪 Exemple corrigé
Actif réalisé : 12 000 000 ; dettes payées : 3 000 000 ⇒ actif net = **9 000 000**.
Capital 6 000 000 (A : 3 M, B : 2 M, C : 1 M) ⇒ on rembourse 6 000 000 ; boni = 3 000 000 partagé : A 50 % = **1 500 000** ; B 33,3 % = **1 000 000** ; C 16,7 % = **500 000**.

## ✏️ Exercices
**Exercice 1.** Actif net de liquidation : 4 000 000 F ; capital : 5 000 000 F. Que se passe-t-il ?

:::corrige
Il y a un **mali** de 1 000 000 F : les associés ne récupèrent que 80 % de leurs apports (4/5).
:::

**Exercice 2.** Cite deux causes de dissolution.

:::corrige
Arrivée du terme, réalisation de l'objet, décision des associés, jugement, perte de plus de la moitié du capital non régularisée.
:::

## ⚠️ Pièges
- On paie **d'abord les créanciers**, ensuite les associés.
- La dissolution est la **décision** ; la liquidation est son **exécution**.

## 🏆 À retenir pour le BAC
Causes de dissolution, liquidateur, réalisation de l'actif, apurement du passif, partage du boni.
`
