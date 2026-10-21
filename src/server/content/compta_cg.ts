// Comptabilité générale (G2) – d'après le programme communiqué par le propriétaire du site.
// Plan comptable SYSCOHADA révisé. Les numéros de comptes cités sont les plus courants ; suivre ceux de l'énoncé.

export const COMPTA_CG: Record<string, string> = {}

COMPTA_CG["cg-operations-courantes"] = String.raw`## 💡 L'essentiel en une phrase
Les **opérations courantes** (achats, ventes, règlements, salaires, TVA) se comptabilisent à partir de **factures** qui peuvent contenir des réductions, des frais de port, des emballages consignés ; les règlements peuvent se faire par **effets de commerce**.

## 📚 1. La facture complexe
- **Réductions commerciales** (rabais, remise, ristourne) : elles **diminuent le prix** et ne sont **pas comptabilisées** séparément ; on enregistre le **net commercial**.
- **Escompte de règlement** (pour paiement rapide) : c'est un **produit financier** (pour le vendeur : charge financière) ; on le comptabilise à part.
- **Frais accessoires** (port, transport) : s'ajoutent au prix ; ils entrent dans le coût d'achat.
- **Emballages consignés** : facturés puis repris ; compte de tiers **« emballages consignés »** jusqu'à leur retour.
- **Calcul** : Brut − réductions = **net commercial** ; + port = **net HT** ; + TVA 18 % = **net TTC**.

## 📚 2. Les effets de commerce
- **Traite (lettre de change)** : tireur → tiré ; **billet à ordre / LCR**.
- **Encaissement à l'échéance**, **endossement** (transfert à un fournisseur), **escompte** (la banque avance l'argent avant l'échéance).
- **Agios d'escompte** : $$ Agio = \frac{Valeur\ nominale \times taux \times jours}{360} $$ Net crédité = nominal − agios (et commissions).

## 📚 3. Frais de personnel et déclarations
- Salaire brut − retenues salariales (CNPS, impôt sur salaires) = **net à payer**.
- L'employeur déclare et verse : **impôts sur salaires**, **cotisations CNPS**, ainsi que la **TVA** (collectée − déductible) et les taxes assimilées.

## 🧪 Exemple corrigé
Marchandises 500 000 F ; remise 10 % ; port 20 000 F ; TVA 18 %.
Remise = 50 000 ⇒ net commercial 450 000 ; + port 20 000 = **470 000 HT** ; TVA = 84 600 ; **TTC = 554 600 F**.
Traite de 1 000 000 F escomptée à 12 % pour 60 jours : agio = 1 000 000 × 0,12 × 60/360 = **20 000 F**, net crédité = **980 000 F**.

## ✏️ Exercices
**Exercice 1.** Facture : prix brut 800 000 F ; rabais 5 % ; port 10 000 F ; TVA 18 %. Calcule le net à payer.

:::corrige
Rabais = 40 000 ⇒ net commercial 760 000 ; + port = 770 000 HT ; TVA = 138 600 ; **TTC = 908 600 F**.
:::

**Exercice 2.** Un effet de 600 000 F est escompté à 9 % pour 40 jours. Quel est le net crédité (sans commission) ?

:::corrige
Agio = 600 000 × 0,09 × 40/360 = 6 000 ; net = **594 000 F**.
:::

## ⚠️ Pièges
- La **réduction commerciale** n'apparaît pas dans les comptes, l'**escompte de règlement** si.
- Ne pas oublier la TVA sur le **port** facturé.

## 🏆 À retenir pour le BAC
Net commercial → HT → TTC (TVA 18 %), escompte de règlement ≠ remise, agio d'escompte = N × t × j / 360, salaires et déclarations.
`

COMPTA_CG["cg-amortissements"] = String.raw`## 💡 L'essentiel en une phrase
L'**amortissement** constate la **dépréciation irréversible** d'une immobilisation (usure, temps, évolution technique) en répartissant son coût sur sa durée d'utilisation.

## 📚 1. Généralités
- Base amortissable = **valeur d'origine** (coût d'acquisition).
- **VNC** (valeur nette comptable) = valeur d'origine − amortissements cumulés.
- **Écriture annuelle** : Débit **681** Dotations aux amortissements / Crédit **28x** Amortissements de l'immobilisation.
- Les **terrains** ne s'amortissent pas.

## 📚 2. Amortissement linéaire
$$ Annuité = \frac{Valeur\ d'origine}{Durée} \qquad Taux = \frac{100}{Durée} $$
Première année : **prorata temporis** si l'achat n'a pas lieu en début d'exercice.

## 📚 3. Amortissement dégressif (à taux décroissant)
- Taux dégressif = **taux linéaire × coefficient** (donné par l'énoncé).
- On l'applique à la **VNC** de début d'année : annuités **décroissantes**.
- On passe au **linéaire** quand l'annuité linéaire (VNC ÷ années restantes) devient plus forte.

## 📚 4. Amortissement par unité d'œuvre
$$ Annuité = \frac{Valeur\ d'origine}{Capacit\acute{e}\ totale} \times Production\ de\ l'ann\acute{e}e $$ (heures machine, kilomètres, unités produites).

## 📚 5. Cession d'une immobilisation
1. Compléter l'amortissement jusqu'à la date de cession.
2. $$ VNC = Valeur\ d'origine - Amortissements\ cumul\acute{e}s $$
3. **Plus-value** si prix de cession > VNC ; **moins-value** sinon.

## 🧪 Exemple corrigé
Matériel de 3 000 000 F, 5 ans, dégressif de coefficient 2 (taux linéaire 20 % ⇒ 40 %).
- Année 1 : 1 200 000 ; VNC = 1 800 000.
- Année 2 : 720 000 ; VNC = 1 080 000.
- Année 3 : 432 000 ; VNC = 648 000.
- Année 4 : dégressif = 259 200 ; linéaire = 648 000 / 2 = **324 000** ⇒ on passe au linéaire.
Cession : acquis 3 000 000, amortissements cumulés 1 800 000 ⇒ VNC 1 200 000 ; vendu 1 500 000 ⇒ **plus-value de 300 000 F**.

## ✏️ Exercices
**Exercice 1.** Camion de 8 000 000 F, durée 4 ans, linéaire. Annuité, taux, VNC après 3 ans ?

:::corrige
Annuité = 2 000 000 ; taux = 25 % ; VNC = 8 000 000 − 6 000 000 = **2 000 000 F**.
:::

**Exercice 2.** Machine de 2 400 000 F, capacité 40 000 heures, 5 000 heures utilisées dans l'année. Annuité ?

:::corrige
Annuité = 2 400 000 / 40 000 × 5 000 = **300 000 F**.
:::

## ⚠️ Pièges
- En dégressif, le taux s'applique à la **VNC** et non à la valeur d'origine.
- Une **plus-value** se calcule par rapport à la **VNC**, pas au prix d'achat.

## 🏆 À retenir pour le BAC
Linéaire (VO / durée), dégressif (taux × coefficient sur la VNC), unité d'œuvre, VNC, plus ou moins-value de cession.
`

COMPTA_CG["cg-provisions"] = String.raw`## 💡 L'essentiel en une phrase
Une **provision** (ou **dépréciation**) constate une **perte probable mais pas définitive** de valeur d'un actif ou un **risque** à venir ; elle respecte le principe de **prudence**.

## 📚 1. Les dépréciations d'actifs
- **Immobilisations / titres de participation** : dépréciation = valeur comptable − valeur d'usage (ou valeur actuelle).
- **Stocks** : dépréciation = coût − valeur probable de vente (ou valeur nette de réalisation).
- **Créances clients** : le client devient **douteux** (compte 416) ; on évalue la perte sur le **montant HT** $$ Provision = Cr\acute{e}ance\ HT \times Taux\ de\ perte\ probable $$ Si la créance est définitivement perdue : **créance irrécouvrable** (perte, et TVA récupérable).

## 📚 2. Provisions pour risques et charges
Pour un **litige**, une **garantie donnée**, une grosse réparation : elles s'enregistrent en passif (provisions) dès que le risque est probable.

## 📚 3. Ajustement chaque année
- **Dotation complémentaire** si la nouvelle provision > ancienne ; **reprise** si elle est plus faible ; reprise totale si le risque disparaît.
- Écritures : dotation = charge (classe 6) ; reprise = produit (classe 7).

## 🧪 Exemple corrigé
Client douteux : 590 000 F TTC (500 000 HT), perte probable 40 % ⇒ provision = **200 000 F**.
Si l'année précédente la provision était de 100 000 F ⇒ **dotation complémentaire de 100 000 F**. Si elle devient 60 000 F ⇒ **reprise de 40 000 F**.
Stock acheté 800 000 F, valeur de vente 650 000 F ⇒ dépréciation **150 000 F**.

## ✏️ Exercices
**Exercice 1.** Créance douteuse de 1 180 000 F TTC (TVA 18 %), perte probable 50 %. Provision ?

:::corrige
HT = 1 180 000 / 1,18 = 1 000 000 ; provision = **500 000 F**.
:::

**Exercice 2.** Titres acquis 2 000 000 F ; valeur d'usage 1 700 000 F. Dépréciation ?

:::corrige
2 000 000 − 1 700 000 = **300 000 F**.
:::

## ⚠️ Pièges
- La provision sur créance se calcule sur le **HT**.
- On passe seulement la **différence** avec la provision déjà existante.

## 🏆 À retenir pour le BAC
Provision clients (HT × taux), dépréciation de stocks et de titres, dotation / reprise, prudence.
`

COMPTA_CG["cg-rapprochement-bancaire"] = String.raw`## 💡 L'essentiel en une phrase
L'**état de rapprochement bancaire** compare le compte **Banque (521)** de l'entreprise avec le **relevé de la banque** pour expliquer les écarts et corriger les comptes.

## 📚 1. Principe et utilité
Contrôler les opérations, détecter les erreurs ou fraudes, connaître le vrai solde disponible.

## 📚 2. Origine des écarts
- **Chèques émis non encore débités** par la banque.
- **Remises de chèques non encore créditées**.
- **Opérations ignorées par l'entreprise** : frais bancaires, agios, virements reçus, prélèvements.
- **Erreurs** de saisie (de l'entreprise ou de la banque).

## 📚 3. Méthode
1. **Pointer** chaque opération entre le relevé et le compte 521.
2. Dresser la liste des opérations **non pointées**.
3. Corriger les deux soldes ; ils doivent être **égaux** : $$ Solde\ relev\acute{e} \pm d\acute{e}calages = Solde\ comptable \pm op\acute{e}rations\ inconnues $$
4. Passer les **écritures de régularisation** (uniquement pour les opérations ignorées de l'entreprise).

## 🧪 Exemple corrigé
Relevé : 780 000 ; chèques émis non débités : −120 000 ; remise non créditée : +45 000 ⇒ solde corrigé = **705 000**.
Compte 521 : 720 000 ; frais bancaires non comptabilisés : −5 000 ; agios : −10 000 ⇒ **705 000** ✓.
Écriture : Débit 631 Frais bancaires 15 000 / Crédit 521 Banque 15 000.

## ✏️ Exercices
**Exercice 1.** Relevé de la banque : 450 000 F ; chèque émis non encore débité : 70 000 F. Compte 521 de l'entreprise : 385 000 F ; frais bancaires non comptabilisés : 5 000 F. Vérifie le rapprochement.

:::corrige
Relevé corrigé = 450 000 − 70 000 = **380 000**. Comptable corrigé = 385 000 − 5 000 = **380 000** ✓. Écriture : Débit 631 Frais bancaires 5 000 / Crédit 521 Banque 5 000.
:::

**Exercice 2.** Quelles écritures de régularisation passe-t-on ?

:::corrige
Seulement celles des opérations que l'entreprise ignorait (frais bancaires, agios, virements ou prélèvements non comptabilisés). Les chèques en transit ne donnent aucune écriture.
:::

## ⚠️ Pièges
- Ne pas comptabiliser les **décalages de date** (chèques en circulation).
- Un virement reçu **augmente** le solde comptable.

## 🏆 À retenir pour le BAC
Pointage, soldes corrigés égaux, écritures pour les opérations ignorées seulement.
`

COMPTA_CG["cg-regularisations"] = String.raw`## 💡 L'essentiel en une phrase
Le principe de **spécialisation des exercices** impose que chaque exercice ne supporte que **ses** charges et ne bénéficie que de **ses** produits : on régularise donc les comptes à la clôture.

## 📚 1. Les quatre régularisations
- **Charges constatées d'avance (CCA)** : charge payée **cette année** mais qui concerne **l'an prochain** (diminue les charges).
- **Produits constatés d'avance (PCA)** : produit encaissé **cette année** mais qui concerne **l'an prochain**.
- **Charges à payer (CAP)** : charge **de l'exercice** pas encore payée ni facturée (augmente les charges).
- **Produits à recevoir (PAR)** : produit **de l'exercice** pas encore encaissé.

## 📚 2. Calcul au prorata
$$ Montant\ r\acute{e}gularis\acute{e} = Montant\ total \times \frac{Dur\acute{e}e\ concernant\ l'autre\ exercice}{Dur\acute{e}e\ totale} $$

## 📚 3. Écritures
À la clôture on passe l'écriture de régularisation ; au début de l'exercice suivant on **l'extourne** (on l'annule) pour enregistrer normalement la facture ou l'encaissement.

## 🧪 Exemple corrigé
Loyer de 600 000 F payé le 1ᵉʳ octobre pour 12 mois (exercice = année civile) : 3 mois consommés ⇒ **CCA = 600 000 × 9/12 = 450 000 F**.
Électricité de décembre de 80 000 F facturée en janvier ⇒ **CAP = 80 000 F**.
Loyer **reçu** 240 000 F le 1ᵉʳ octobre pour 12 mois ⇒ **PCA = 180 000 F**.

## ✏️ Exercices
**Exercice 1.** Assurance de 360 000 F payée le 1ᵉʳ juillet pour 12 mois. CCA au 31 décembre ?

:::corrige
6 mois consommés, 6 restants ⇒ CCA = 360 000 × 6/12 = **180 000 F**.
:::

**Exercice 2.** Intérêts de 50 000 F gagnés mais non encore reçus au 31 décembre. Quelle régularisation ?

:::corrige
**Produits à recevoir** de 50 000 F (produit de l'exercice non encore encaissé).
:::

## ⚠️ Pièges
- CCA et PCA concernent l'**exercice suivant** ; CAP et PAR concernent l'**exercice en cours**.
- Oublier l'**extourne** au début de l'année suivante.

## 🏆 À retenir pour le BAC
Spécialisation des exercices, CCA / PCA / CAP / PAR, prorata temporis, extourne.
`

COMPTA_CG["cg-analyse-financiere"] = String.raw`## 💡 L'essentiel en une phrase
L'**analyse financière** étudie le bilan pour juger de la **santé** de l'entreprise : équilibre entre ses ressources stables et ses emplois, capacité à payer ses dettes.

## 📚 1. Bilan financier / fonctionnel
Le bilan est regroupé en grandes masses :
- **Emplois stables** (immobilisations) et **ressources stables** (capitaux propres + dettes financières).
- **Actif circulant** (stocks, créances) et **passif circulant** (dettes d'exploitation).
- **Trésorerie** (actif et passif).

## 📚 2. Les trois indicateurs d'équilibre
$$ FR = Ressources\ stables - Emplois\ stables $$
$$ BFR = Actif\ circulant\ (hors\ tr\acute{e}sorerie) - Passif\ circulant\ (hors\ tr\acute{e}sorerie) $$
$$ Tr\acute{e}sorerie\ nette = FR - BFR $$
- **FR positif** : les ressources stables financent les immobilisations **et** une part de l'activité.
- **BFR positif** : l'activité a besoin d'être financée.
- **TN positive** : l'entreprise dispose de liquidités ; négative : elle est en découvert.

## 📚 3. Les ratios
- **Autonomie financière** = capitaux propres / dettes financières (≥ 1 est rassurant).
- **Liquidité générale** = actif circulant / dettes à court terme (≥ 1).
- **Rentabilité** = résultat / chiffre d'affaires.

## 🧪 Exemple corrigé
Capitaux propres 8 000 000 ; dettes financières 4 000 000 ; immobilisations nettes 9 000 000 ; stocks 2 500 000 ; créances 3 000 000 ; dettes circulantes 3 500 000.
- FR = 12 000 000 − 9 000 000 = **3 000 000**.
- BFR = 5 500 000 − 3 500 000 = **2 000 000**.
- TN = 3 000 000 − 2 000 000 = **1 000 000**.
Autonomie financière = 8 000 000 / 4 000 000 = **2**.

## ✏️ Exercices
**Exercice 1.** Ressources stables 6 000 000 ; emplois stables 7 500 000. Calcule le FR et commente.

:::corrige
FR = **−1 500 000** : les ressources stables ne couvrent pas les immobilisations ; l'entreprise doit recourir à des dettes à court terme (situation risquée).
:::

**Exercice 2.** FR = 2 500 000 et BFR = 1 800 000. Trésorerie nette ?

:::corrige
TN = 2 500 000 − 1 800 000 = **700 000 F** (situation saine).
:::

## ⚠️ Pièges
- Ne pas mettre la **trésorerie** dans le calcul du BFR.
- Un FR positif ne garantit pas une trésorerie positive : tout dépend du BFR.

## 🏆 À retenir pour le BAC
FR = RS − ES ; BFR = AC − PC ; TN = FR − BFR ; ratios d'autonomie et de liquidité.
`
