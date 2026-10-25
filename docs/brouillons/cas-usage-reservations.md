# Brouillon : cas d'usage Éducation (réservations de déplacements)

Brouillon selon `docs/modele-page-cas-usage.md`. **Validé et intégré** (page `/portfolio/reservation-voyages-staff`). Le texte du site est dans `lib/i18n/fr.ts` et `en.ts`.

- **Page :** `/portfolio/reservation-voyages-staff`
- **Secteur :** Éducation / Education
- **Technologies :** Power Apps, Power Automate, SharePoint, Outlook *(inchangées)*
- **Chiffre de la carte :** ÷3 / Délai de traitement *(inchangé)*

---

## FR

### Titre
Réservation de voyages pour le staff : train et hôtel dans une seule application

*Ancien : « Réservations centralisées, délai de traitement divisé par 3 »*

### Contexte
Centraliser les demandes de déplacement, en train ou à l'hôtel, de 200 professeurs répartis sur 2 campus. Chaque demande doit être validée selon le statut du professeur, puis suivie par la comptabilité.

### Solution mise en place
Une **application Power Apps** mobile qui guide le professeur dans sa demande de réservation. **Power Automate** orchestre la validation et les notifications, et les gestionnaires suivent les demandes et la comptabilité depuis un **back-office centralisé SharePoint**.

### Fonctionnalités clés
1. **Trois parcours de réservation** pour le train, l'hôtel ou les deux, lancés depuis l'accueil
2. **Formulaire adaptatif** avec des champs qui s'ajustent au type de trajet et au profil du demandeur
3. **Horaires SNCF Connect** consultables sans quitter le formulaire
4. **Duplication en 2 clics** des déplacements récurrents
5. **Paramétrage par les gestionnaires** des e-mails, des jours fériés et des rôles utilisateurs
6. **Suivi des demandes** par statut (en attente, en cours, traitée), avec un filtre sur l'accueil

### Améliorations apportées (avant → après)
1. Demandes envoyées **uniquement par mail** aux gestionnaires → Demandes saisies dans une **application unique**
2. **Validations manuelles** retardant le traitement → **Validation adaptée** selon le statut du professeur
3. Allers-retours, oublis et **erreurs de saisie** fréquents → **Formulaire guidé** réduisant de 95 % les erreurs de saisie

### Valeur business (ROI)
| Valeur | Libellé |
|---|---|
| ÷3 | Délai de traitement |
| −70 % | E-mails échangés |
| −95 % | Erreurs de saisie |

*Remplace l'ancien « KPIs / Rationalisation coûts », qui n'était pas un chiffre. Le −95 % vient des bénéfices actuels du site.* 

---

## EN

### Title
Staff travel booking: train and hotel in a single app

### Context
Centralising travel requests, by train or for hotels, for 200 teachers across 2 campuses. Each request must be approved according to the teacher's status, then tracked by the accounting team.

### Solution implemented
A mobile **Power Apps application** guides teachers through their booking request. **Power Automate** handles approval and notifications, and administrators track requests and accounting from a **centralised SharePoint back-office**.

### Key features
1. **Three booking journeys** for train, hotel or both, started from the home screen
2. **Adaptive form** with fields that adjust to the trip type and the requester's profile
3. **SNCF Connect timetables** available without leaving the form
4. **2-click duplication** of recurring trips
5. **Admin-managed settings** for emails, public holidays and user roles
6. **Request tracking** by status (pending, ongoing, completed), with a filter on the home screen

### Improvements delivered (before → after)
1. Requests sent **only by email** to administrators → Requests entered in a **single app**
2. **Manual approvals** delaying processing → **Tailored approval** based on the teacher's status
3. Frequent back-and-forths, oversights and **data entry errors** → **Guided form** cutting data entry errors by 95%

### Business value (ROI)
| Value | Label |
|---|---|
| ÷3 | Processing time |
| −70% | Emails exchanged |
| −95% | Data entry errors |

---

## Médias
- **Vidéo :** `public/portfolio/MyBooking/MyBooking-demo.mp4` (38 s, 5 étapes, sans musique) et son aperçu `MyBooking-demo-poster.jpg`, produits avec /brag selon `docs/modele-video-demo-cas-usage.md`. Données fictives, sans le lien SNCF Connect.
- **Vignette de la carte :** `MyBooking-thumbnail.png`, l'écran du formulaire de la vidéo (étape 2).
