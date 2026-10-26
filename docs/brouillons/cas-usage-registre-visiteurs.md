# Brouillon : cas d'usage Services (registre des visiteurs)

Brouillon selon `docs/modele-page-cas-usage.md`. **Validé et intégré** (page `/portfolio/registre-visiteurs`). Le texte du site est dans `lib/i18n/fr.ts` et `en.ts`. Captures de référence : `public/portfolio/RegistreVisiteurs/` (accueil, inscription, sortie).

- **Page :** `/portfolio/registre-visiteurs`
- **Secteur :** Services / Bureaux, Services / Offices
- **Technologies :** Power Apps, SharePoint
- **Chiffre de la carte :** 1 clic / Pour indiquer sa sortie

---

## FR

### Titre
Registre des visiteurs : liste des présents à jour en temps réel

### Contexte
Une application d'accueil enregistre les quelque 1 000 visiteurs par mois d'un site de bureaux, à leur arrivée et à leur départ. Chaque visiteur doit consentir à l'enregistrement de ses informations, et l'équipe doit toujours savoir qui est présent.

### Solution mise en place
Une application **Power Apps** en libre-service sur une tablette, en français et en anglais, guide le visiteur : il saisit son identité, choisit la personne visitée et consent à l'enregistrement. Les visites sont stockées dans une **liste SharePoint**, où le visiteur indique sa sortie en un clic.

### Fonctionnalités clés
1. **Accueil bilingue** en français et en anglais, sur chaque écran
2. **Recherche de la personne visitée** dans l'annuaire du personnel
3. **Heure d'arrivée automatique** avec consentement à l'enregistrement
4. **Sortie en un clic** depuis la liste des visiteurs présents

### Améliorations apportées (avant → après)
1. **Registre papier** rempli à l'accueil → **Enregistrement autonome** du visiteur, en français ou en anglais
2. **Heures** d'arrivée et de départ notées à la main → **Heure d'arrivée automatique** et sortie en un clic
3. **Présents** difficiles à identifier → **Liste des visiteurs présents** à jour en temps réel

### Valeur business (ROI)
| Valeur | Libellé |
|---|---|
| 2 | Langues d'accueil, français et anglais |
| 1 clic | Pour indiquer sa sortie |
| 1 | Liste des visiteurs présents, à jour en temps réel |

*Chiffres tirés des captures, faute de mesure réelle : à remplacer par tes chiffres si tu en as (visiteurs par mois, minutes gagnées…).*

---

## EN

### Title
Visitor register: a real-time list of who is on site

### Context
A reception app records the roughly 1,000 monthly visitors of an office site on arrival and departure. Each visitor must consent to their details being stored, and the team must always know who is on site.

### Solution implemented
A self-service **Power Apps** app on a tablet, in French and English, guides the visitor: they enter their identity, choose the person they are visiting and consent to being recorded. Visits are stored in a **SharePoint list**, where the visitor signs out in one click.

### Key features
1. **Bilingual welcome** in French and English, on every screen
2. **Search for the person visited** in the staff directory
3. **Automatic arrival time** with consent to being recorded
4. **One-click sign-out** from the list of visitors on site

### Improvements delivered (before → after)
1. **Paper register** filled in at reception → **Self-service check-in** for the visitor, in French or English
2. **Arrival and departure times** noted by hand → **Automatic arrival time** and one-click sign-out
3. **People on site** hard to identify → **List of visitors on site** updated in real time

### Business value (ROI)
| Value | Label |
|---|---|
| 2 | Welcome languages, French and English |
| 1 click | To sign out |
| 1 | List of visitors on site, updated in real time |

---

## Points à confirmer
- **Échelle :** 1 000 visiteurs par mois, confirmé. La personne visitée vient de l'annuaire du personnel, confirmé.
- **Avant :** le registre papier est confirmé. « Heures d'arrivée et de départ notées à la main » en découle, à confirmer.
- **Technologies :** Power Apps et SharePoint seulement, comme choisi.
- **ROI :** chiffres tirés des captures, à remplacer par des mesures réelles si possible.
- **Anonymat :** la capture d'accueil nomme le client et deux captures montrent un logo (flouté ou masqué). La vidéo et la vignette utiliseront un nom et des données fictifs, sans logo.

## Médias
- **Vidéo :** `public/portfolio/RegistreVisiteurs/Registre-demo.mp4` (31,8 s, 4 étapes, sans musique) et son aperçu `Registre-demo-poster.jpg`, produits avec /brag selon `docs/modele-video-demo-cas-usage.md`. L'application est montrée dans une tablette, avec des données fictives (site « Alderan », visiteuse « Claire Dupont ») et sans logo.
- **Étapes :** accueil bilingue, inscription du visiteur (recherche dans l'annuaire, consentement), liste des visiteurs présents, sortie en un clic.
- **Vignette de la carte :** `Registre-thumbnail.png`, l'écran d'inscription de la vidéo (étape 2).
