# Brouillon : cas d'usage Achats (gestion des contrats)

Brouillon selon `docs/modele-page-cas-usage.md`. **À valider** avant création de la page `/portfolio/gestion-contrats`.

- **Page :** `/portfolio/gestion-contrats`
- **Secteur :** Achats / Procurement
- **Technologies :** SharePoint, Power Automate, Forms, Teams *(inchangées)*
- **Chiffre de la carte :** 0 / Contrat oublié *(inchangé)*

---

## FR

### Titre
Gestion des contrats : zéro renouvellement oublié *(inchangé)*

### Contexte
Un service Achats compte une dizaine de personnes et traite environ 50 nouveaux contrats par mois. Il peine à retrouver le dernier contrat en vigueur. Il a aussi du mal à anticiper les échéances de renouvellement.

### Solution mise en place
Depuis SharePoint, l'utilisateur clique sur un bouton qui affiche un **formulaire de saisie des métadonnées** (fournisseur, montant, échéance…). Le contrat est ensuite automatiquement classé dans une **contrathèque dédiée**, dotée d'un moteur de recherche avancé.

### Fonctionnalités clés
1. **Envoi en un clic** d'un contrat finalisé vers la contrathèque
2. **Formulaire de métadonnées** : fournisseur, montant, échéance
3. **Déplacement automatique** vers la contrathèque, métadonnées renseignées
4. **Moteur de recherche avancé** par fournisseur, montant ou échéance
5. **Alertes Teams** à l'approche de l'échéance
6. **Statut mis à jour** automatiquement après la date de fin

### Améliorations apportées (avant → après)
1. Contrats finalisés **dispersés parmi les documents de travail** → **Contrathèque unique**, classement guidé en quelques clics
2. Recherche **longue et aléatoire** du dernier contrat → **Recherche avancée**, temps divisé par 3
3. Renouvellements **découverts trop tard** → **Alertes Teams** pour les anticiper

### Valeur business (ROI)
| Valeur | Libellé |
|---|---|
| ÷3 | Temps de recherche |
| 0 | Contrat oublié |
| ~50 | Contrats classés par mois |

*Remplace « ✓ Gouvernance renforcée », qui n'était pas un chiffre. Le « ~50 » vient du champ « utilisateurs » actuel.*

---

## EN

### Title
Contract management: zero forgotten renewal

### Context
A Procurement team of about ten people handles around 50 new contracts a month. It struggles to find the latest contract in force. It also has trouble anticipating renewal dates.

### Solution implemented
From SharePoint, the user clicks a button that opens a **metadata entry form** (supplier, amount, expiry date…). The contract is then automatically filed in a dedicated **contract library** with an advanced search engine.

### Key features
1. **One-click sending** of a finalised contract to the contract library
2. **Metadata form**: supplier, amount, expiry date
3. **Automatic move** to the contract library, metadata filled in
4. **Advanced search** by supplier, amount or expiry date
5. **Teams alerts** as the expiry date approaches
6. **Status updated** automatically after the end date

### Improvements delivered (before → after)
1. Finalised contracts **scattered among working documents** → **Single contract library**, guided filing in a few clicks
2. **Long, hit-and-miss** search for the latest contract → **Advanced search**, search time cut by 3
3. Renewals **spotted too late** → **Teams alerts** to anticipate them

### Business value (ROI)
| Value | Label |
|---|---|
| ÷3 | Search time |
| 0 | Forgotten contract |
| ~50 | Contracts filed per month |

---

## Points à confirmer
- Les critères du moteur de recherche (fournisseur, montant, échéance) sont déduits des métadonnées saisies : à confirmer.
- « Renouvellements découverts trop tard » est une reformulation : confirme que c'était bien le cas avant.

## Médias
- **Vidéo :** `public/portfolio/Contrats/Contrats-demo.mp4` (38,6 s, 5 étapes, sans musique) et son aperçu `Contrats-demo-poster.jpg`, produits avec /brag selon `docs/modele-video-demo-cas-usage.md`. Données fictives (Atlas Logistique, etc.).
- **Étapes :** lien « Envoi Contrathèque » dans une colonne de la bibliothèque, saisie des métadonnées, contrat classé, recherche PnP (mot-clé avec étoile, filtre Fournisseur, résultats), alerte Teams. Références : `public/portfolio/Contratheque/`. L'étape 5 (Teams) n'est pas dans les captures d'origine.
- **Vignette de la carte :** `Contrats-thumbnail.png`, l'écran du formulaire de métadonnées.
