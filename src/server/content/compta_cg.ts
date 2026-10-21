// Comptabilité générale (G2) – version détaillée, d'après le programme communiqué par le propriétaire du site.
// Plan comptable SYSCOHADA révisé. Toujours utiliser les numéros de comptes donnés par l'énoncé ou le professeur.

export const COMPTA_CG: Record<string, string> = {}

COMPTA_CG["cg-operations-courantes"] = String.raw`## 💡 L'essentiel en une phrase
Une **opération courante** (vente, achat, règlement, paie, TVA) se prouve par un **document** (facture, effet, bulletin) et s'enregistre au **journal** par une **écriture en partie double** : total des débits = total des crédits.

## 📚 1. La facture : du brut au net à payer
**Tableau de calcul d'une facture de vente :**

| Ligne | Calcul |
|---|---|
| Prix brut | quantité × prix unitaire |
| − Rabais | accordé pour défaut de qualité (sur le brut) |
| − Remise | accordée selon l'importance de la commande (sur le brut − rabais) |
| − Ristourne | accordée selon le volume annuel (sur le brut − rabais − remise) |
| **= Net commercial** | base de la vente |
| + Frais facturés (port, emballages perdus) | s'ajoutent au prix |
| **= Total hors taxes (HT)** | |
| + TVA 18 % | (net commercial + frais) × 0,18 |
| **= Total TTC** | |
| + Emballages consignés | consigne : **non soumise à la TVA** tant qu'ils sont repris |
| **= Net à payer** | |

**Réductions commerciales** (rabais, remise, ristourne) : elles **ne s'enregistrent pas** ; on comptabilise directement le **net commercial**.
**Escompte de règlement** (pour paiement comptant ou rapide) : c'est un avantage **financier**, enregistré **séparément** (charge financière pour le vendeur, produit financier pour l'acheteur).

## 📚 2. Exemple complet : la facture et son règlement
Le commerçant **ABOU** vend des marchandises à **KONÉ** :
- Prix brut : **1 000 000 F** ; rabais 5 % ; remise 10 % ; port facturé **25 000 F** ; emballages consignés **40 000 F** ; TVA 18 % ; escompte de 2 % pour paiement comptant.

| Calcul | Montant |
|---|---|
| Brut | 1 000 000 |
| − Rabais 5 % | − 50 000 |
| − Remise 10 % × 950 000 | − 95 000 |
| **Net commercial** | **855 000** |
| + Port | 25 000 |
| **Total HT** | **880 000** |
| TVA 18 % | 158 400 |
| **Total TTC** | **1 038 400** |
| + Consigne d'emballages | 40 000 |
| **Net à payer** | **1 078 400** |

**Écriture chez le vendeur (ABOU) – facturation :**

| Compte | Intitulé | Débit | Crédit |
|---|---|---|---|
| 411 | Clients | 1 078 400 | |
| 701 | Ventes de marchandises | | 855 000 |
| 707 | Produits accessoires (port facturé) | | 25 000 |
| 4431 | TVA facturée sur ventes | | 158 400 |
| 4194 | Clients, dettes pour emballages consignés | | 40 000 |

**Règlement comptant avec escompte de 2 % sur 880 000 = 17 600 F :** le client paie 1 078 400 − 17 600 = **1 060 800 F**.

| Compte | Intitulé | Débit | Crédit |
|---|---|---|---|
| 521 | Banque | 1 060 800 | |
| 673 | Escomptes accordés | 17 600 | |
| 411 | Clients | | 1 078 400 |

**Chez l'acheteur (KONÉ)**, l'écriture est le « miroir » : Débit 601 Achats de marchandises 855 000 ; Débit 611 Transports sur achats 25 000 ; Débit 4452 TVA récupérable 158 400 ; Débit consigne 40 000 / Crédit 401 Fournisseurs 1 078 400.

## 📚 3. Les effets de commerce
Une **traite** (lettre de change) est un écrit par lequel le **tireur** (fournisseur) ordonne au **tiré** (client) de payer une somme à une date (l'**échéance**) au **bénéficiaire**.

**Trois façons de l'utiliser :**
1. **Encaissement à l'échéance** : le vendeur la garde et la présente à sa banque.
2. **Endossement** : le vendeur la **transmet** à un de ses fournisseurs pour payer une dette.
3. **Escompte** : le vendeur la **cède à sa banque** avant l'échéance, qui avance l'argent moins des **agios**.

**Écritures chez le vendeur (créance de 1 000 000 F) :**

| Opération | Débit | Crédit |
|---|---|---|
| Acceptation de la traite par le client | 412 Clients, effets à recevoir 1 000 000 | 411 Clients 1 000 000 |
| Encaissement à l'échéance | 521 Banque 1 000 000 | 412 1 000 000 |
| Endossement (dette fournisseur) | 401 Fournisseurs 1 000 000 | 412 1 000 000 |

**Escompte :** nominal 1 000 000 F, taux 12 %, 60 jours, commission 5 000 F, TVA sur commission 18 %.
- Agio d'escompte = 1 000 000 × 12 % × 60 / 360 = **20 000 F**.
- TVA sur commission = 5 000 × 18 % = **900 F**.
- Total retenu = 20 000 + 5 000 + 900 = **25 900 F** ; net crédité = **974 100 F**.

| Compte | Intitulé | Débit | Crédit |
|---|---|---|---|
| 521 | Banque | 974 100 | |
| 67 | Charges d'intérêts (agios d'escompte) | 20 000 | |
| 631 | Frais bancaires (commission) | 5 000 | |
| 4452 | TVA récupérable | 900 | |
| 412 | Clients, effets à recevoir | | 1 000 000 |

**Chez le client (tiré)** : à l'acceptation, Débit 401 Fournisseurs / Crédit 402 Fournisseurs, effets à payer ; à l'échéance, Débit 402 / Crédit 521.

## 📚 4. Les frais de personnel
**Bulletin de paie (exemple, taux donnés par l'énoncé) :**

| Élément | Montant |
|---|---|
| Salaire brut | 400 000 |
| Retenue CNPS salarié (6,3 %) | − 25 200 |
| Impôt sur salaire retenu | − 21 000 |
| **Net à payer** | **353 800** |
| Charges patronales CNPS (14,7 %) | 58 800 (à la charge de l'entreprise) |

**Écritures :**

| N° | Compte | Débit | Crédit |
|---|---|---|---|
| 1 – Paie du mois | 661 Rémunérations directes | 400 000 | |
| | 421 Personnel, rémunérations dues | | 353 800 |
| | 431 Sécurité sociale (CNPS) | | 25 200 |
| | 447 État, impôts retenus à la source | | 21 000 |
| 2 – Charges patronales | 664 Charges sociales | 58 800 | |
| | 431 Sécurité sociale (CNPS) | | 58 800 |
| 3 – Paiement des salaires | 421 | 353 800 | |
| | 521 Banque | | 353 800 |
| 4 – Reversement à la CNPS et à l'État | 431 (25 200 + 58 800) | 84 000 | |
| | 447 | 21 000 | |
| | 521 Banque | | 105 000 |

## 📚 5. La déclaration de TVA
$$ TVA\ due = TVA\ factur\acute{e}e\ (4431) - TVA\ r\acute{e}cup\acute{e}rable\ (4452) $$
Si le résultat est positif : on **verse** à l'État ; s'il est négatif : **crédit de TVA** reporté.
Exemple : TVA facturée 158 400 ; TVA récupérable 100 000 ⇒ TVA due = **58 400 F**.

| Compte | Débit | Crédit |
|---|---|---|
| 4431 TVA facturée sur ventes | 158 400 | |
| 4452 TVA récupérable sur achats | | 100 000 |
| 4441 État, TVA due | | 58 400 |

Paiement : Débit 4441 / Crédit 521 : 58 400.

## ✏️ Exercices
**Exercice 1.** Facture : prix brut 800 000 F ; rabais 5 % ; remise 10 % ; port 12 000 F ; TVA 18 %. Calcule le net commercial, le HT, la TVA, le TTC et passe l'écriture chez le vendeur.

:::corrige
Rabais = 40 000 ⇒ 760 000 ; remise 10 % = 76 000 ⇒ **net commercial = 684 000**. + port 12 000 ⇒ **HT = 696 000**. TVA = 696 000 × 0,18 = **125 280**. **TTC = 821 280**.
Écriture : Débit 411 Clients 821 280 / Crédit 701 Ventes 684 000 / Crédit 707 Port facturé 12 000 / Crédit 4431 TVA facturée 125 280 (total crédit = 821 280 ✓).
:::

**Exercice 2.** Une traite de 600 000 F est escomptée à 9 % pour 40 jours. Commission : 3 000 F ; TVA 18 % sur commission. Calcule le net crédité et passe l'écriture.

:::corrige
Agio = 600 000 × 0,09 × 40 / 360 = **6 000**. TVA sur commission = 3 000 × 0,18 = **540**. Total retenu = 6 000 + 3 000 + 540 = 9 540 ⇒ **net = 590 460 F**.
Écriture : Débit 521 590 460 ; Débit 67 6 000 ; Débit 631 3 000 ; Débit 4452 540 / Crédit 412 600 000.
:::

**Exercice 3.** Salaire brut 250 000 F ; CNPS salarié 6,3 % ; impôt retenu 10 000 F. Calcule le net et passe l'écriture de paie.

:::corrige
CNPS = 15 750 ; net = 250 000 − 15 750 − 10 000 = **224 250 F**.
Écriture : Débit 661 250 000 / Crédit 421 224 250 / Crédit 431 15 750 / Crédit 447 10 000.
:::

## ⚠️ Pièges
- Les **réductions commerciales** ne s'enregistrent pas ; l'**escompte** si.
- La **TVA** se calcule sur le net commercial **plus les frais**, pas sur le brut.
- La **consigne** d'emballages n'est pas soumise à la TVA tant que les emballages sont repris.
- Total des **débits = total des crédits** : vérifie toujours.

## 🏆 À retenir pour le BAC
Brut → net commercial → HT → TTC ; escompte de règlement ≠ remise ; agio = N × t × j / 360 ; écritures d'effets (412 / 402), de paie (661, 421, 431, 447), de TVA (4431 − 4452 = 4441).
`

COMPTA_CG["cg-amortissements"] = String.raw`## 💡 L'essentiel en une phrase
L'**amortissement** constate la **dépréciation irréversible** d'une immobilisation (usure, temps, évolution technique) en répartissant son coût sur sa **durée d'utilisation**.

## 📚 1. Généralités
- **Immobilisation amortissable** : bien durable utilisé par l'entreprise (bâtiment, matériel, véhicule, mobilier). Le **terrain** ne s'amortit pas.
- **Base amortissable** = valeur d'origine (prix d'achat HT + frais d'acquisition, hors TVA récupérable).
- **Date de mise en service** : début du calcul ; la première année se calcule **au prorata du temps** (mois ou jours).
- **Annuité** : montant amorti chaque année. **Cumul** : somme des annuités. **VNC** = valeur d'origine − cumul.
- **Amortissement ≠ provision** : l'amortissement est **irréversible**, la provision (dépréciation) est **réversible**.

**Écriture annuelle :**

| Compte | Intitulé | Débit | Crédit |
|---|---|---|---|
| 681 | Dotations aux amortissements d'exploitation | annuité | |
| 28x | Amortissements du bien (ex. 2841 matériel) | | annuité |

## 📚 2. Amortissement linéaire (constant)
$$ Annuit\acute{e} = \frac{Valeur\ d'origine}{Dur\acute{e}e} \qquad Taux = \frac{100}{Dur\acute{e}e} $$

**Exemple :** matériel de **3 000 000 F** mis en service le **1ᵉʳ avril N**, durée 5 ans (taux 20 %). Annuité pleine = 600 000. Première année : 9 mois (avril à décembre).

| Année | Annuité | Cumul | VNC |
|---|---|---|---|
| N (9/12) | 450 000 | 450 000 | 2 550 000 |
| N+1 | 600 000 | 1 050 000 | 1 950 000 |
| N+2 | 600 000 | 1 650 000 | 1 350 000 |
| N+3 | 600 000 | 2 250 000 | 750 000 |
| N+4 | 600 000 | 2 850 000 | 150 000 |
| N+5 (3/12) | 150 000 | 3 000 000 | 0 |

## 📚 3. Amortissement dégressif (à taux décroissant)
- **Taux dégressif = taux linéaire × coefficient** (le coefficient est **donné par l'énoncé**).
- On l'applique à la **VNC de début d'année** : les annuités **diminuent**.
- On **bascule en linéaire** dès que l'annuité linéaire (VNC ÷ années restantes) devient **supérieure** à l'annuité dégressive.

**Exemple :** matériel de **3 000 000 F** mis en service le 1ᵉʳ janvier N, 5 ans, coefficient 2 ⇒ taux dégressif = 20 % × 2 = **40 %**.

| Année | VNC début | Dégressif (40 %) | Linéaire (VNC ÷ années restantes) | Annuité retenue | VNC fin |
|---|---|---|---|---|---|
| N | 3 000 000 | 1 200 000 | 600 000 | 1 200 000 | 1 800 000 |
| N+1 | 1 800 000 | 720 000 | 450 000 | 720 000 | 1 080 000 |
| N+2 | 1 080 000 | 432 000 | 360 000 | 432 000 | 648 000 |
| N+3 | 648 000 | 259 200 | **324 000** | **324 000** | 324 000 |
| N+4 | 324 000 | 129 600 | 324 000 | 324 000 | 0 |

À partir de N+3, l'annuité linéaire est plus forte : on **passe au linéaire**.

## 📚 4. Amortissement par unités d'œuvre (production)
$$ Annuit\acute{e} = \frac{Valeur\ d'origine}{Capacit\acute{e}\ totale} \times Production\ de\ l'ann\acute{e}e $$
**Exemple :** machine de **2 400 000 F**, capacité totale **40 000 heures** ⇒ **60 F par heure**.

| Année | Heures | Annuité | VNC |
|---|---|---|---|
| N | 5 000 | 300 000 | 2 100 000 |
| N+1 | 8 000 | 480 000 | 1 620 000 |
| N+2 | 7 000 | 420 000 | 1 200 000 |

## 📚 5. Cession d'une immobilisation
**Étapes :**
1. **Amortissement complémentaire** jusqu'à la date de cession (prorata).
2. Calcul de la **VNC** à la date de cession.
3. Comparer au **prix de cession** : **plus-value** si prix > VNC, **moins-value** sinon.
4. Écritures de sortie du bien.

**Exemple :** matériel de **3 000 000 F** acquis le 1ᵉʳ janvier N, linéaire sur 5 ans (annuité 600 000), **cédé le 30 septembre N+3** pour **1 100 000 F**.
- Amortissement complémentaire N+3 = 600 000 × 9/12 = **450 000**.
- Cumul = 3 × 600 000 + 450 000 = **2 250 000** ; VNC = 3 000 000 − 2 250 000 = **750 000**.
- Plus-value = 1 100 000 − 750 000 = **350 000 F**.

| N° | Compte | Débit | Crédit |
|---|---|---|---|
| 1 – Dotation complémentaire | 681 | 450 000 | |
| | 2841 Amortissements du matériel | | 450 000 |
| 2 – Sortie du bien | 2841 | 2 250 000 | |
| | 81 Valeurs comptables des cessions (VNC) | 750 000 | |
| | 241 Matériel | | 3 000 000 |
| 3 – Prix de cession | 485 Créances sur cessions d'immobilisations (ou 521) | 1 100 000 | |
| | 82 Produits des cessions d'immobilisations | | 1 100 000 |

(Dans l'ancien plan comptable : 654 pour la VNC et 754 pour le produit de cession.) Résultat de cession = 82 − 81 = **+ 350 000**.

## ✏️ Exercices
**Exercice 1.** Véhicule de **8 000 000 F** mis en service le 1ᵉʳ juillet N, linéaire sur 4 ans. Dresse le tableau d'amortissement.

:::corrige
Annuité pleine = 2 000 000 (taux 25 %). N : 6/12 = **1 000 000** ; N+1, N+2, N+3 : **2 000 000** chacune ; N+4 : 6/12 = **1 000 000**.
Cumuls : 1 000 000 ; 3 000 000 ; 5 000 000 ; 7 000 000 ; 8 000 000. VNC : 7 000 000 ; 5 000 000 ; 3 000 000 ; 1 000 000 ; 0.
:::

**Exercice 2.** Matériel de **1 600 000 F**, 4 ans, dégressif de coefficient 1,5, mis en service le 1ᵉʳ janvier N. Calcule les annuités.

:::corrige
Taux linéaire 25 % ⇒ dégressif 37,5 %.
N : 1 600 000 × 0,375 = **600 000** ⇒ VNC 1 000 000.
N+1 : 1 000 000 × 0,375 = **375 000** ⇒ VNC 625 000.
N+2 : linéaire = 625 000 / 2 = 312 500 ; dégressif = 234 375 ⇒ on passe au **linéaire** : **312 500**.
N+3 : **312 500** ⇒ VNC 0.
:::

**Exercice 3.** Machine acquise **5 000 000 F** le 1ᵉʳ janvier N, linéaire 10 ans, cédée le 31 décembre N+4 (5 ans pleins) pour **2 000 000 F**. Calcule la VNC et le résultat de cession.

:::corrige
Annuité = 500 000 ; cumul = 2 500 000 ; VNC = 2 500 000. Prix 2 000 000 ⇒ **moins-value de 500 000 F**.
Écritures : Débit 2841 2 500 000 ; Débit 81 2 500 000 / Crédit 2xx Matériel 5 000 000. Puis Débit 485 (ou 521) 2 000 000 / Crédit 82 2 000 000.
:::

## ⚠️ Pièges
- La **première année** se calcule au **prorata** de la date de mise en service.
- En dégressif, le taux s'applique à la **VNC**, pas à la valeur d'origine.
- La plus-value se compare à la **VNC**, jamais au prix d'achat.
- Avant la cession, il faut passer l'**amortissement complémentaire**.

## 🏆 À retenir pour le BAC
Linéaire (VO ÷ durée), dégressif (taux × coefficient sur la VNC, bascule en linéaire), unités d'œuvre (VO ÷ capacité × production), écritures 681 / 28x, cession : amortissement complémentaire → VNC → plus ou moins-value.
`

COMPTA_CG["cg-provisions"] = String.raw`## 💡 L'essentiel en une phrase
Une **provision pour dépréciation** (ou pour risques) constate une **perte probable mais non définitive** ; elle respecte le principe de **prudence** et peut être **reprise** si la perte n'a pas lieu.

## 📚 1. Les quatre familles de provisions

| Nature | Cause | Calcul | Compte de dépréciation |
|---|---|---|---|
| Immobilisations, titres de participation | Valeur actuelle < valeur comptable | VC − valeur actuelle | 29x (ex. 296 titres) |
| Stocks et encours | Valeur probable de vente < coût | coût − valeur de vente | 39x (ex. 391 marchandises) |
| Créances clients | Client douteux | créance **HT** × taux de perte | 491 |
| Risques et charges | Litige, garantie, grosse réparation | montant estimé du risque | 19x (ex. 191 litiges) |

**Principe de prudence :** on enregistre les pertes **probables**, pas les gains probables.

## 📚 2. Les écritures
**Constitution (dotation) :** Débit 691 Dotations aux provisions et dépréciations d'exploitation (697 pour les titres, financier) / Crédit compte de dépréciation.
**Reprise :** Débit compte de dépréciation / Crédit 791 Reprises de provisions et dépréciations d'exploitation (797 pour les titres).

### Stock déprécié
Stock de marchandises : coût 800 000 F ; valeur probable de vente 650 000 F ⇒ dépréciation = **150 000 F**.

| Compte | Débit | Crédit |
|---|---|---|
| 691 Dotations aux dépréciations | 150 000 | |
| 391 Dépréciations des stocks de marchandises | | 150 000 |

### Titres de participation
Acquis 2 000 000 F ; valeur d'usage 1 700 000 F ⇒ dépréciation **300 000 F** : Débit 697 / Crédit 296.

### Créance douteuse : les 3 temps
**Client DIARRA** : créance **590 000 F TTC** (TVA 18 %) ⇒ HT = 590 000 / 1,18 = **500 000**. Perte probable : 40 %.
1. **Reclassement en client douteux** : Débit 416 Clients douteux 590 000 / Crédit 411 Clients 590 000.
2. **Dépréciation** : 500 000 × 40 % = **200 000** : Débit 691 / Crédit 491 Dépréciations des comptes clients : 200 000.
3. **Si la créance devient irrécouvrable** (perte définitive) : Débit 654 Pertes sur créances clients 500 000 ; Débit 4431 TVA facturée 90 000 / Crédit 416 590 000 ; puis **reprise** de la provision : Débit 491 200 000 / Crédit 791 200 000.
Si le client **paie** : Débit 521 590 000 / Crédit 416 590 000 ; reprise : Débit 491 / Crédit 791.

### Provision pour risques
Un client réclame **1 500 000 F** de dommages-intérêts ; l'avocat juge la perte probable : Débit 691 / Crédit 191 Provisions pour litiges : **1 500 000**.

## 📚 3. L'ajustement chaque année
On compare la **provision nécessaire à la clôture** à la **provision déjà constituée** :

| Cas | Calcul | Écriture |
|---|---|---|
| Nouvelle > ancienne | différence | **dotation complémentaire** (Débit 691 / Crédit compte de provision) |
| Nouvelle < ancienne | différence | **reprise** (Débit compte de provision / Crédit 791) |
| Risque disparu | totalité | **reprise totale** |

**Exemple :** provision clients en N : 200 000. En N+1, la perte probable est estimée à 60 000 ⇒ reprise de **140 000** (Débit 491 / Crédit 791). Si elle passe à 260 000 ⇒ dotation complémentaire de **60 000**.

## ✏️ Exercices
**Exercice 1.** Créance douteuse de **1 180 000 F TTC** (TVA 18 %), perte probable **50 %**. Passe les écritures de reclassement et de dépréciation.

:::corrige
HT = 1 000 000 ⇒ provision = **500 000**.
Reclassement : Débit 416 1 180 000 / Crédit 411 1 180 000.
Dépréciation : Débit 691 500 000 / Crédit 491 500 000.
:::

**Exercice 2.** Au 31/12/N, provision clients = 300 000. Au 31/12/N+1, la créance est estimée perdue à 45 % sur 500 000 HT. Quelle écriture ?

:::corrige
Nouvelle provision = 225 000 ⇒ **reprise de 75 000** : Débit 491 75 000 / Crédit 791 75 000.
:::

**Exercice 3.** Stock A : coût 400 000, valeur de vente 350 000 ; stock B : coût 600 000, valeur de vente 700 000. Dépréciation totale ?

:::corrige
A : 50 000 de dépréciation. B : **aucune** (valeur supérieure au coût : on ne constate pas de gain). Total = **50 000 F**.
:::

## ⚠️ Pièges
- La provision sur créance se calcule sur le montant **HT**, pas sur le TTC.
- On passe **seulement la différence** avec la provision déjà existante.
- On ne comptabilise **jamais** de plus-value latente (prudence).
- Une créance **irrécouvrable** : la perte est de **500 000 HT** et la TVA (90 000) est **récupérée** auprès de l'État.

## 🏆 À retenir pour le BAC
Quatre familles de provisions, écritures de dotation et de reprise, client douteux en trois temps (416, 491, perte), ajustement annuel (dotation complémentaire ou reprise).
`

COMPTA_CG["cg-rapprochement-bancaire"] = String.raw`## 💡 L'essentiel en une phrase
L'**état de rapprochement bancaire** compare le compte **521 Banque** de l'entreprise au **relevé de la banque** pour expliquer chaque écart ; seules les opérations **ignorées par l'entreprise** donnent des écritures.

## 📚 1. Principe et utilité
- Le compte 521 (côté entreprise) et le relevé (côté banque) racontent les **mêmes opérations**, vues par deux personnes.
- **Utilité** : détecter les **erreurs**, les opérations oubliées, les fraudes, et connaître le **vrai solde disponible**.
- **Attention aux sens** : le solde du **compte 521** est **débiteur** (l'entreprise a de l'argent) alors que le solde du **relevé** est **créditeur** (la banque doit de l'argent à l'entreprise).

## 📚 2. Origine des écarts

| Écart | Où il se trouve | Écriture ? |
|---|---|---|
| **Chèque émis non encore débité** par la banque | Compta : oui. Banque : pas encore | Non (simple décalage) |
| **Chèque reçu remis, non encore crédité** | Compta : oui. Banque : pas encore | Non |
| **Frais bancaires, agios, commissions** | Banque : oui. Compta : oubli | **Oui** |
| **Virement reçu / prélèvement** non connu de l'entreprise | Banque : oui. Compta : non | **Oui** |
| **Erreur** de saisie | l'un des deux | **Oui** (rectification) |

## 📚 3. Méthode
1. **Pointer** chaque opération du compte 521 avec celle du relevé.
2. Lister les **opérations non pointées** de chaque côté.
3. Dresser l'**état de rapprochement** : les deux soldes **corrigés** doivent être **égaux**.
4. Passer les **écritures de régularisation** pour les opérations non connues de l'entreprise.

## 📚 4. Exemple complet
Au 31 décembre : **solde du compte 521 : 905 000 F (débiteur)** ; **solde du relevé : 1 145 000 F (créditeur)**.

Opérations non pointées :
- Chèque n°…23 émis à un fournisseur, non débité : **230 000**.
- Chèque client remis le 30/12, non encore crédité : **120 000**.
- Frais de tenue de compte : **12 000** (relevé uniquement).
- Virement reçu d'un client : **150 000** (relevé uniquement).
- Agios : **8 000** (relevé uniquement).

**État de rapprochement :**

| Côté entreprise (compte 521) | | Côté banque (relevé) | |
|---|---|---|---|
| Solde du compte 521 | 905 000 | Solde du relevé | 1 145 000 |
| − Frais de tenue de compte | − 12 000 | − Chèque émis non débité | − 230 000 |
| + Virement reçu | + 150 000 | + Chèque remis non crédité | + 120 000 |
| − Agios | − 8 000 | | |
| **Solde corrigé** | **1 035 000** | **Solde corrigé** | **1 035 000** ✓ |

**Écritures de régularisation (uniquement côté entreprise) :**

| Compte | Intitulé | Débit | Crédit |
|---|---|---|---|
| 521 | Banque | 150 000 | |
| 411 | Clients (virement reçu) | | 150 000 |
| 631 | Frais bancaires | 12 000 | |
| 67 | Charges d'intérêts (agios) | 8 000 | |
| 521 | Banque | | 20 000 |

Le compte 521 devient 905 000 + 150 000 − 20 000 = **1 035 000** ✓.

## ✏️ Exercices
**Exercice 1.** Relevé : 450 000 F ; chèque émis non débité : 70 000 F. Compte 521 : 385 000 F ; frais bancaires non comptabilisés : 5 000 F. Dresse l'état de rapprochement.

:::corrige
Banque : 450 000 − 70 000 = **380 000**. Entreprise : 385 000 − 5 000 = **380 000** ✓.
Écriture : Débit 631 5 000 / Crédit 521 5 000.
:::

**Exercice 2.** Solde du compte 521 : 640 000 F ; solde du relevé : 700 000 F. Un chèque émis de 90 000 F n'est pas encore débité ; un prélèvement d'assurance de 30 000 F n'est pas comptabilisé. Dresse l'état de rapprochement et passe l'écriture.

:::corrige
Banque : 700 000 − 90 000 = **610 000**. Entreprise : 640 000 − 30 000 = **610 000** ✓.
Écriture : Débit 625 Primes d'assurances 30 000 / Crédit 521 Banque 30 000.
:::

**Exercice 3.** Cite deux opérations qui ne donnent **aucune écriture** lors d'un rapprochement.

:::corrige
Un chèque émis non encore débité par la banque ; un chèque remis non encore crédité (simples décalages dans le temps).
:::

## ⚠️ Pièges
- **Inverser les sens** : solde 521 débiteur ↔ solde relevé créditeur.
- Ne **pas comptabiliser** les chèques en circulation : ils se régularisent tout seuls.
- Un **virement reçu** augmente le compte, un **prélèvement** le diminue.

## 🏆 À retenir pour le BAC
Pointage, tableau à deux colonnes, soldes corrigés égaux, écritures seulement pour les opérations ignorées de l'entreprise (frais, agios, virements, prélèvements, erreurs).
`

COMPTA_CG["cg-regularisations"] = String.raw`## 💡 L'essentiel en une phrase
Selon le principe de **spécialisation (indépendance) des exercices**, chaque exercice ne supporte que **ses** charges et ne reçoit que **ses** produits ; à la clôture on **régularise** les comptes de charges et de produits.

## 📚 1. Les quatre régularisations

| Nom | Définition | Effet sur le résultat | Compte de bilan |
|---|---|---|---|
| **CCA** Charges constatées d'avance | Charge **payée** cette année mais qui concerne l'**exercice suivant** | Charges ↓, résultat ↑ | **476** (actif) |
| **PCA** Produits constatés d'avance | Produit **encaissé** cette année mais qui concerne l'**exercice suivant** | Produits ↓, résultat ↓ | **477** (passif) |
| **CAP** Charges à payer | Charge **de l'exercice** non encore payée ni facturée | Charges ↑, résultat ↓ | 4081, 4286, 4486, 166 (passif) |
| **PAR** Produits à recevoir | Produit **de l'exercice** non encore encaissé ni facturé | Produits ↑, résultat ↑ | 418 (actif) |

## 📚 2. Calcul au prorata
$$ Montant\ r\acute{e}gularis\acute{e} = Montant\ total \times \frac{Dur\acute{e}e\ concernant\ l'autre\ exercice}{Dur\acute{e}e\ totale} $$

## 📚 3. Exemples complets (exercice = année civile)
### CCA : loyer payé d'avance
Loyer annuel de **600 000 F** payé le **1ᵉʳ octobre N** pour 12 mois : 3 mois (octobre à décembre) concernent N ; **9 mois** concernent N+1 ⇒ **CCA = 600 000 × 9/12 = 450 000**.

| Date | Compte | Débit | Crédit |
|---|---|---|---|
| 01/10/N (paiement) | 622 Locations | 600 000 | |
| | 521 Banque | | 600 000 |
| 31/12/N (régularisation) | 476 Charges constatées d'avance | 450 000 | |
| | 622 Locations | | 450 000 |
| 01/01/N+1 (extourne) | 622 Locations | 450 000 | |
| | 476 | | 450 000 |

### CAP : électricité non facturée
Consommation de décembre : **80 000 F**, facture reçue en janvier.

| Date | Compte | Débit | Crédit |
|---|---|---|---|
| 31/12/N | 605 Autres achats (eau, électricité) | 80 000 | |
| | 4081 Fournisseurs, factures non parvenues | | 80 000 |
| 01/01/N+1 (extourne) | 4081 | 80 000 | |
| | 605 | | 80 000 |

Intérêts d'emprunt courus : emprunt de 5 000 000 F à 8 % depuis le 1ᵉʳ octobre, intérêts payés en avril ⇒ 3 mois = 5 000 000 × 8 % × 3/12 = **100 000** : Débit 671 Intérêts des emprunts / Crédit 166 Intérêts courus.

### PCA : produit encaissé d'avance
Loyer **reçu** : 240 000 F le 1ᵉʳ octobre pour 12 mois ⇒ 9 mois à reporter = 240 000 × 9/12 = **180 000** : Débit 706/707 (produit) / Crédit 477 Produits constatés d'avance : 180 000.

### PAR : travaux terminés non facturés
Travaux de **300 000 F** réalisés en décembre, facturés en janvier : Débit 418 Clients, produits à recevoir / Crédit 706 Services vendus : 300 000.

## ✏️ Exercices
**Exercice 1.** Assurance de **360 000 F** payée le 1ᵉʳ juillet N pour 12 mois. CCA au 31/12/N et écritures ?

:::corrige
6 mois consommés, 6 mois restants ⇒ **CCA = 360 000 × 6/12 = 180 000**.
31/12/N : Débit 476 180 000 / Crédit 625 Primes d'assurances 180 000. Extourne au 01/01/N+1 : Débit 625 180 000 / Crédit 476 180 000.
:::

**Exercice 2.** Salaire de décembre (50 000 F) payé le 5 janvier. Quelle régularisation au 31/12 ?

:::corrige
**Charge à payer** : Débit 661 Rémunérations 50 000 / Crédit 4286 Personnel, charges à payer 50 000. Extourne au 01/01.
:::

**Exercice 3.** Une entreprise a reçu le 1ᵉʳ novembre N un loyer de 120 000 F couvrant 6 mois. PCA au 31/12/N ?

:::corrige
2 mois sur N, 4 mois sur N+1 ⇒ **PCA = 120 000 × 4/6 = 80 000** : Débit 706 80 000 / Crédit 477 80 000.
:::

## ⚠️ Pièges
- **CCA / PCA** concernent l'**exercice suivant** ; **CAP / PAR** concernent l'**exercice en cours**.
- Compter correctement les **mois** de chaque exercice.
- Penser à l'**extourne** au début de l'exercice suivant.

## 🏆 À retenir pour le BAC
Spécialisation des exercices ; CCA (476), PCA (477), CAP (4081, 4286, 166…), PAR (418) ; prorata ; régularisation au 31/12 puis extourne au 01/01.
`

COMPTA_CG["cg-analyse-financiere"] = String.raw`## 💡 L'essentiel en une phrase
L'**analyse financière** étudie le **bilan** pour juger de l'**équilibre financier** de l'entreprise (est-elle solvable ? finance-t-elle bien son activité ?) grâce au **fonds de roulement**, au **besoin en fonds de roulement**, à la **trésorerie nette** et aux **ratios**.

## 📚 1. Du bilan comptable au bilan fonctionnel
On regroupe le bilan en **grandes masses** selon la **fonction** (et la durée) de chaque élément :

| Cycle | Emplois (actif) | Ressources (passif) |
|---|---|---|
| **Investissement** (stable) | **Emplois stables** : immobilisations nettes | **Ressources stables** : capitaux propres + dettes financières + amortissements et provisions |
| **Exploitation** (circulant) | **Actif circulant** : stocks, créances clients | **Passif circulant** : dettes fournisseurs, fiscales et sociales |
| **Trésorerie** | **Trésorerie-actif** : banque, caisse | **Trésorerie-passif** : découverts bancaires |

## 📚 2. Les trois indicateurs d'équilibre
$$ FR = Ressources\ stables - Emplois\ stables $$
$$ BFR = Actif\ circulant\ (hors\ tr\acute{e}sorerie) - Passif\ circulant\ (hors\ tr\acute{e}sorerie) $$
$$ Tr\acute{e}sorerie\ nette\ (TN) = FR - BFR = Tr\acute{e}sorerie\text{-}actif - Tr\acute{e}sorerie\text{-}passif $$

**Interprétation :**
- **FR > 0** : les ressources stables financent **tous** les investissements et il reste une marge de sécurité. **FR < 0** : situation risquée (des immobilisations sont financées par des dettes à court terme).
- **BFR > 0** : l'activité **consomme** de l'argent (stocks et créances plus élevés que les dettes d'exploitation). **BFR < 0** : l'activité **finance** l'entreprise (cas de la grande distribution).
- **TN > 0** : l'entreprise a des liquidités. **TN < 0** : elle est en **découvert**.

## 📚 3. Exemple complet
Bilan fonctionnel (en F) :

| Emplois | Montant | Ressources | Montant |
|---|---|---|---|
| Immobilisations nettes (emplois stables) | 9 000 000 | Capitaux propres | 8 000 000 |
| Stocks | 2 500 000 | Dettes financières | 4 000 000 |
| Créances clients | 3 000 000 | Dettes circulantes | 3 500 000 |
| Trésorerie-actif | 1 400 000 | Trésorerie-passif | 400 000 |
| **Total** | **15 900 000** | **Total** | **15 900 000** |

- **Ressources stables** = 8 000 000 + 4 000 000 = **12 000 000**.
- **FR** = 12 000 000 − 9 000 000 = **3 000 000** (calcul « par le haut »).
- **BFR** = (2 500 000 + 3 000 000) − 3 500 000 = **2 000 000**.
- **TN** = FR − BFR = 3 000 000 − 2 000 000 = **1 000 000**, vérification : 1 400 000 − 400 000 = **1 000 000** ✓.

**Commentaire :** l'entreprise a un fonds de roulement positif qui couvre son besoin de financement et dégage une trésorerie positive : situation **saine**.

## 📚 4. Les principaux ratios

| Famille | Ratio | Formule | Lecture |
|---|---|---|---|
| Structure | **Autonomie financière** | Capitaux propres ÷ dettes financières | ≥ 1 : entreprise peu dépendante |
| Structure | **Indépendance financière** | Capitaux propres ÷ total du passif | élevé = bon |
| Liquidité | **Liquidité générale** | Actif circulant (stocks + créances + trésorerie) ÷ dettes à court terme | ≥ 1 : peut payer ses dettes à court terme |
| Liquidité | **Liquidité immédiate** | Trésorerie-actif ÷ dettes à court terme | |
| Rentabilité | **Rentabilité financière** | Résultat net ÷ capitaux propres | gain des associés |
| Rentabilité | **Marge nette** | Résultat net ÷ chiffre d'affaires | |

**Application :** autonomie financière = 8 000 000 / 4 000 000 = **2** (bon). Liquidité générale = (5 500 000 + 1 400 000) / (3 500 000 + 400 000) = 6 900 000 / 3 900 000 ≈ **1,77** (bon). Si le résultat net est de 1 200 000 : rentabilité financière = 1 200 000 / 8 000 000 = **15 %**.

## ✏️ Exercices
**Exercice 1.** Capitaux propres 5 000 000 ; dettes financières 3 000 000 ; immobilisations nettes 9 500 000. Calcule le FR et commente.

:::corrige
Ressources stables = 8 000 000 ; **FR = 8 000 000 − 9 500 000 = −1 500 000**. Les ressources stables ne financent pas toutes les immobilisations : situation **risquée**, l'entreprise doit rééquilibrer (augmenter ses ressources stables).
:::

**Exercice 2.** Stocks 1 200 000 ; clients 1 800 000 ; fournisseurs et dettes fiscales 2 000 000 ; FR = 1 500 000. Calcule le BFR et la trésorerie nette.

:::corrige
BFR = (1 200 000 + 1 800 000) − 2 000 000 = **1 000 000** ; TN = 1 500 000 − 1 000 000 = **500 000 F** (positive).
:::

**Exercice 3.** Trésorerie-actif 600 000 ; trésorerie-passif 900 000. Interprète.

:::corrige
TN = −300 000 : l'entreprise est en **découvert** ; il faut réduire son BFR ou augmenter ses ressources stables.
:::

## ⚠️ Pièges
- Ne **jamais** mettre la trésorerie dans le calcul du BFR.
- Un FR positif ne garantit pas une trésorerie positive : tout dépend du **BFR**.
- Un ratio ne s'interprète que **comparé** à une norme, à l'année précédente ou à la concurrence.

## 🏆 À retenir pour le BAC
FR = ressources stables − emplois stables ; BFR = actif circulant − passif circulant ; TN = FR − BFR ; autonomie financière, liquidité générale, rentabilité financière.
`
