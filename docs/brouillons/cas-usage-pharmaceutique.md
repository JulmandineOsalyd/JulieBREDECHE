# Brouillon : cas d'usage Pharmaceutique (extraction de factures)

Brouillon selon `docs/modele-page-cas-usage.md`. **Validé et intégré** (page `/portfolio/extraction-factures-ocr`). Le texte du site est dans `lib/i18n/fr.ts` et `en.ts`.

- **Page :** `/portfolio/extraction-factures-ocr`
- **Secteur :** Pharmaceutique / Pharmaceutical
- **Technologies :** Power Automate, AI Builder, SharePoint, Office Scripts *(ajout d'Office Scripts, utilisé pour la REGEX)*
- **Chiffre de la carte :** −90 % / Temps manuel éliminé *(inchangé)*

---

## FR

### Titre
Extraire les n° de commande de milliers de factures, automatiquement

### Contexte
Résorber un retard de traitement de 10 000 factures PDF. Deux personnes à temps plein extrayaient à la main le numéro de commande de chaque facture pour l'intégrer à nouvel outil de facturation.

### Solution mise en place
Un **flux Power Automate** parcourt les factures d'une bibliothèque SharePoint. Pour chaque facture, le flux détecte le numéro de commande correspondant à un format prédéfini, et renomme le fichier en conséquent.

### Fonctionnalités clés
1. **Lecture OCR** du contenu du PDF grâce au connecteur AI Builder
2. **Détection par REGEX** du numéro de commande dans un Office Script
3. **Renommage automatique** des fichiers avec leur numéro de commande
4. **Mise en révision** des cas non conformes dans un dossier dédié

### Améliorations apportées (avant → après)
1. **Extraction manuelle** des numéros de commande sur des milliers de factures PDF → Les numéros de commande sont **extraits automatiquement** par OCR
2. **Ressaisie** dans le nouvel outil de facturation, source d'**erreurs** → Les fichiers sont **renommés avec leur numéro**, puis intégrés sans ressaisie
3. **Retards de facturation** avec 10 000 factures en attente → **Un clic** suffit pour traiter des milliers de factures

### Valeur business (ROI)
| Valeur | Libellé |
|---|---|
| −90 % | Temps manuel éliminé |
| 10 000 | Factures en retard résorbées |
| 2 | Personnes libérées de la saisie manuelle |

*Remplace l'ancien ROI « −80 % / ✓ / ♻ » : deux symboles n'étaient pas des chiffres, et −80 % contredisait le −90 % de la carte.*

---

## EN

### Title
Extracting order numbers from thousands of invoices, automatically

### Context
Clearing a processing backlog of 10,000 PDF invoices. Two full-time staff were manually extracting the order number from each invoice to load it into the new billing tool.

### Solution implemented
A **Power Automate flow** scans the invoices in a SharePoint library. For each invoice, the flow detects the order number matching a predefined format and renames the file accordingly.

### Key features
1. **OCR reading** of the PDF content with the AI Builder connector
2. **REGEX detection** of the order number in an Office Script
3. **Automatic renaming** of files with their order number
4. **Review routing** of non-conforming cases to a dedicated folder

### Improvements delivered (before → after)
1. **Manual extraction** of order numbers from thousands of PDF invoices → Order numbers are **extracted automatically** by OCR
2. **Re-entry** into the new billing tool, a source of **errors** → Files are **renamed with their number**, then loaded without re-entry
3. **Billing delays** with 10,000 invoices pending → **One click** processes thousands of invoices

### Business value (ROI)
| Value | Label |
|---|---|
| −90% | Manual time eliminated |
| 10,000 | Backlogged invoices cleared |
| 2 | People freed from manual entry |

---

## Médias
- **Vidéo :** `public/portfolio/LecturePDF/LecturePDF-demo.mp4` (33 s, 4 étapes, sans musique) et son aperçu `LecturePDF-demo-poster.jpg`, produits avec /brag selon `docs/modele-video-demo-cas-usage.md`.
- **Vignette de la carte :** dégradé avec icône (`projectThumbImages` à `null`). Une capture dédiée pourra être ajoutée plus tard.
