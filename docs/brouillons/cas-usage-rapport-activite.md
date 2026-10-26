# Brouillon : cas d'usage Conseil (rapport d'activité automatisé)

Brouillon selon `docs/modele-page-cas-usage.md`. **Validé et intégré** (page `/portfolio/rapport-activite-automatise`). Le texte du site est dans `lib/i18n/fr.ts` et `en.ts`.

- **Page :** `/portfolio/rapport-activite-automatise`
- **Secteur :** Conseil / Consulting
- **Technologies :** SharePoint, Power Automate, Outlook, AI Builder *(inchangées)*
- **Chiffre de la carte :** 30 min / Gagnées par jour sur le reporting *(inchangé)*

---

## FR

### Titre
Rapport d'activité automatisé : 30 min gagnées par jour *(inchangé)*

### Contexte
Un prestataire devait rédiger chaque soir un rapport d'activité pour son client et le prévenir de ses jours d'absence. Ce reporting manuel prenait du temps, et chaque oubli obligeait à reconstituer la journée a posteriori.

### Solution mise en place
Chaque soir, un flux **Power Automate** lit l'agenda Outlook et les mails envoyés dans la journée. L'extract est analysé par l'IA et celle-ci génère automatiquement un rapport d'activité concis, stocké dans un **calendrier SharePoint** partagé avec le client.

### Fonctionnalités clés
1. **Détection automatique** des jours de présence et d'absence
2. **Synthèse AI Builder** des événements de la journée
3. **Création automatique** des résumés dans un calendrier SharePoint
4. **Historique extractable** de l'activité en Excel par le client

### Améliorations apportées (avant → après)
1. Reporting quotidien **rédigé à la main** → **Rapport généré** chaque soir, sans saisie
2. **Facturation** comparée à la main aux jours travaillés → **Export Excel** à la demande pour contrôler la facturation
3. Activité suivie par une **multitude de mails** → **Calendrier partagé**, source unique pour le client

### Valeur business (ROI)
| Valeur | Libellé |
|---|---|
| 30 min | Gagnées par jour |
| 0 | Jour de reporting oublié |
| 1 | Source de vérité partagée avec le client |

*Remplace « Ø Reporting manquant » et « 1 source de vérité », qui n'étaient pas mis en forme comme des chiffres. Le « 1 » reprend ton libellé d'origine.*

---

## EN

### Title
Automated activity report: 30 minutes saved every day

### Context
An independent consultant, on assignment 3.5 days a week, had to write an activity report for her client every evening and notify them of her days off. This manual reporting took time, and every missed day had to be pieced together afterwards.

### Solution implemented
Every evening, a **Power Automate** flow reads the Outlook calendar and the emails sent during the day. It automatically generates the activity report in a **SharePoint calendar** shared with the client.

### Key features
1. **Automatic detection** of presence and absence days
2. **AI Builder summary** of the day's events
3. **Automatic creation** of summaries in a SharePoint calendar
4. **Activity history** that the client can extract to Excel

### Improvements delivered (before → after)
1. Daily reporting **written by hand** → **Report generated** every evening, with no input
2. **Billing** compared by hand with days worked → **On-demand Excel export** to check billing
3. Activity tracked through a **stream of emails** → **Shared calendar**, a single source for the client

### Business value (ROI)
| Value | Label |
|---|---|
| 30 min | Saved per day |
| 0 | Missed reporting day |
| 1 | Source of truth shared with the client |

---

## Points à confirmer
- Les fonctionnalités passent à 4 (au lieu de 6 recommandées par le modèle), comme demandé.
- L'ancienne puce « informer régulièrement le client des jours d'absence » est fusionnée dans le contexte et dans l'avant/après 2.
- Le ROI « 1 source de vérité » et l'amélioration 3 (calendrier partagé) disent la même chose : à garder tel quel ou à différencier.

## Médias
- **Vidéo :** `public/portfolio/DailyReport/DailyReport-demo.mp4` (35,2 s, 5 étapes, sans musique) et son aperçu `DailyReport-demo-poster.jpg`, produits avec /brag selon `docs/modele-video-demo-cas-usage.md`. Données fictives (prestataire « Camille », juin 2026).
- **Étapes :** flux du soir (présence du jour détectée, puis 3 événements et 2 mails lus), synthèse AI Builder, résumé dans le calendrier SharePoint, liste fixe de l'historique avec 2 absences (durée 0), export Excel par le client. La vidéo s'arrête sur la notification « Export Excel prêt », sans ouvrir le fichier.
- **Vignette de la carte :** `DailyReport-thumbnail.png`, le calendrier SharePoint (étape 3).
