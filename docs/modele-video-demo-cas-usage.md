# Modèle : vidéo de démonstration d'un cas d'usage

Modèle réutilisable pour produire la vidéo fonctionnelle d'un cas d'usage du portfolio. Remplacer chaque `{{variable}}` avant de lancer la demande.

## 1. Objectif

Produire une vidéo de démonstration fonctionnelle de `{{nom_cas_usage}}` (`{{resume_cas_usage}}`, par exemple « 33 sites, zéro document obsolète »). Elle suit les captures d'écran et montre le parcours complet, de `{{etape_depart}}` jusqu'à `{{etape_arrivee}}`.

## 2. Contexte

- **Source visuelle :** les captures d'écran du cas d'usage (`{{dossier_captures}}`) servent de référence visuelle.
- **Outils à afficher :** `{{outils}}` (par exemple SharePoint, Power Apps, Power Automate, Powell).
- **Logo / nom de l'interface :** `{{nom_interface}}`.
- **Parcours (une étape = un écran) :** `{{liste_etapes}}`. Numéroter les étapes dans la légende.
- **Validation :** `{{nb_validations}}` étape(s) d'approbation. Le validateur reçoit un e-mail, clique sur son lien, arrive sur ses tâches d'approbation, puis ouvre la tâche.
- **Champs de métadonnées à montrer :** `{{champs_metadonnees}}`. Retirer tout champ non listé.
- **Intégration :** la vidéo remplace les captures dans la fenêtre du portfolio (`{{page_portfolio}}`). Les captures ne sont plus affichées, mais restent sur le disque tant qu'elles n'ont pas été supprimées.

## 3. Contraintes

### Contenu
- Données fictives ou génériques uniquement : ne pas reprendre les valeurs saisies dans le cas d'usage réel.
- N'ajouter aucun élément absent des captures ou de la liste d'étapes, sauf demande explicite.
- En cas d'ambiguïté, poser la question avant de produire.
- Vérification et métadonnées sont deux écrans distincts.
- Pas de clic sur « Mes publications en cours » après la soumission.
- Ne pas afficher l'écran d'accueil après la soumission : enchaîner directement vers `{{ecran_suivant_soumission}}` (la boîte mail du validateur dans le cas GED).
- Pas d'écran de fin : la vidéo s'arrête par un fondu au noir au clic sur `{{element_final}}` (par exemple la carte du document). Mentionner `{{plateforme_finale}}` dans la légende.

### Durée et format
- Durée maximale : `{{duree_max}}` secondes (40 s pour GED ; 38,3 s obtenues).
- Format : MP4, 1080p, 30 images/s, avec légendes.
- Rendu déterministe : chaque image est calculée depuis l'animation HTML, puis encodée en H.264 en plage TV (`-crf 20`, `+faststart`).

### Design
- Charte du site : bleu `{{couleur_principale}}` (#0f5fad), encre #071828, polices Lora et Plus Jakarta Sans.
- Interface légèrement retravaillée : angles arrondis, dégradés bleus.
- **Écran titre épuré :** « Démonstration `{{nom_court}}` », puis uniquement les outils dans des pills. Pas de sous-titre.
- **Légende :** placée en haut (l'ombre du player peut masquer le bas), en pastille arrondie bleu foncé (couleur du cadre de l'interface), avec le numéro d'étape dans un cercle blanc. Pas de sous-titres, car ils sont trop courts à lire.
- **Copyright :** mention « © `{{annee}}` `{{auteur}}` » à deux endroits : sous les pills de l'écran titre, puis en petit (16 px, gris-bleu) sous les barres de progression en haut à droite pendant toute la vidéo, à l'abri de l'ombre du player. Elle disparaît avec le fondu au noir final.
- Vérifier que les boutons ne se superposent pas (par exemple un bouton actif posé sur le bouton grisé).

### Livraison
- Contrôler chaque révision sur des images extraites avant de rendre la vidéo.
- Copier la vidéo dans `{{chemin_video_site}}` et en exporter une copie dans `{{chemin_export}}`.
- Fournir aussi une image d'aperçu (l'écran titre à 1 s).
- Ne pas committer sans demande.

## 4. Résultat attendu

- Une vidéo MP4 1080p de `{{duree_max}}` s au plus, qui présente le parcours de `{{etape_depart}}` à `{{etape_arrivee}}` selon `{{liste_etapes}}`.
- Le copyright « © `{{annee}}` `{{auteur}}` » visible sur l'écran titre et pendant toute la vidéo.
- Une image d'aperçu `{{chemin_poster}}` (écran titre avec le copyright).
- La page portfolio affiche la vidéo seule, sans captures.
- Un compte rendu bref en français indiquant la durée, les chemins des fichiers et ce qui reste à décider (commit, suppression des captures).

## 5. Variables

| Variable | Description | Exemple (GED Qualité) |
|---|---|---|
| `{{nom_cas_usage}}` | Nom du cas d'usage | GED Qualité |
| `{{nom_court}}` | Nom pour l'écran titre | GED Qualité |
| `{{resume_cas_usage}}` | Accroche chiffrée | 33 sites industriels, zéro document obsolète |
| `{{etape_depart}}` / `{{etape_arrivee}}` | Bornes du parcours | Dépôt du document / document retrouvé dans SharePoint |
| `{{dossier_captures}}` | Captures de référence | `public/portfolio/GED/` |
| `{{outils}}` | Outils affichés en pills | SharePoint, Power Apps, Power Automate, Powell |
| `{{nom_interface}}` | Logo / titre de l'interface | GED |
| `{{liste_etapes}}` | Étapes numérotées | Soumission, vérification, métadonnées, e-mail, tâche, approbation, document publié |
| `{{nb_validations}}` | Nombre d'approbations | 1 |
| `{{champs_metadonnees}}` | Champs conservés | Domaine, Périmètre principal, Thème, Code de recherche, Titre, Rédacteur |
| `{{ecran_suivant_soumission}}` | Écran après la soumission | Boîte mail du validateur |
| `{{element_final}}` | Dernier clic avant le noir | Carte du document |
| `{{plateforme_finale}}` | Plateforme citée dans la légende | SharePoint |
| `{{duree_max}}` | Durée maximale (s) | 40 |
| `{{couleur_principale}}` | Bleu des légendes et accents | #0f5fad |
| `{{annee}}` | Année du copyright | 2026 |
| `{{auteur}}` | Titulaire du copyright | Julie Bredeche |
| `{{page_portfolio}}` | Page qui affiche la vidéo | `app/portfolio/page.tsx` |
| `{{chemin_video_site}}` | Vidéo servie par le site | `public/portfolio/GED/GED-demo.mp4` |
| `{{chemin_poster}}` | Image d'aperçu | `public/portfolio/GED/GED-demo-poster.jpg` |
| `{{chemin_export}}` | Copie exportée | `~/Downloads/GED-Qualite-demo.mp4` |
