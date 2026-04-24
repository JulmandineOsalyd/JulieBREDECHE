# Prévisualisation MDX — Spécification de l'artifact

Document de référence pour construire l'artifact HTML de prévisualisation à l'étape 4 du workflow.

## Principe

L'artifact permet à Julie de **relire son article dans un rendu proche de la publication** tout en gardant la possibilité d'**éditer le MDX source** dans le même écran. C'est une étape de validation qui évite les allers-retours entre le chat et son éditeur de code.

## Layout

```
┌───────────────────────────────────────────────────────────────┐
│  [📄 Nom de l'article]          [Mots: 823 • Temps: 5 min]   │
├──────────────────────────────────┬────────────────────────────┤
│                                  │ [Copier MDX]  [Reset]     │
│   APERÇU HTML RENDU              │                            │
│   (panneau gauche)               │   MDX ÉDITABLE             │
│                                  │   (panneau droit)          │
│   - Titres stylés                │   - Textarea monospace     │
│   - Paragraphes                  │   - Édition temps réel     │
│   - Blockquotes                  │   - Synchro auto → gauche  │
│   - Tableaux                     │                            │
│   - Composants MDX rendus        │                            │
│                                  │                            │
└──────────────────────────────────┴────────────────────────────┘
```

Largeur : 50/50 sur desktop, empilé sur mobile.

## Fonctionnalités obligatoires

1. **Édition temps réel** : chaque frappe dans le textarea met à jour l'aperçu (avec un petit debounce ~150ms pour la perf)
2. **Parsing du frontmatter YAML** : extraire et afficher le titre, l'excerpt, la date dans l'aperçu (comme sur le blog)
3. **Rendu Markdown complet** : titres, paragraphes, gras, italique, blockquotes, listes, tableaux, séparateurs `---`, code inline
4. **Rendu des composants MDX si présents** : actuellement aucun composant MDX custom n'est utilisé dans les articles. Si Julie en réintroduit un (voir `mdx-components.md`), mettre à jour cette spec pour gérer son rendu visuel.
5. **Bouton "Copier MDX"** : copie le contenu du textarea dans le presse-papier. **Très visible, couleur contrastée (ex. bleu ou vert)**, placé en haut du panneau droit
6. **Bouton "Reset"** : restaure le MDX initial (avec confirmation pour éviter les pertes)
7. **Compteur de mots** : hors frontmatter, recalculé en temps réel
8. **Temps de lecture** : `readingTime = Math.ceil(wordCount / 200)` minutes
9. **Bandeau d'avertissement permanent** en haut du panneau droit, non dismissable :
   ```
   💡 Avant de demander une modif à Claude dans le chat, clique sur
   "Copier MDX" et colle-le. Sinon tes éditions seront écrasées.
   ```
   Style : fond jaune/orangé clair (#fff4e6 ou similaire), bordure, texte lisible, reste toujours visible

## Styles typographiques

Calquer un style éditorial sobre, proche de ce qu'on voit sur un blog tech professionnel :
- **Police de lecture** : serif ou sans-serif système, taille ~17-18px, interligne ~1.7
- **Titres** : `h2` ~28px bold, `h3` ~20px semibold
- **Blockquotes** : bordure gauche épaisse, fond légèrement grisé, italique conservé
- **Tableaux** : bordures fines, en-têtes en gras, padding généreux
- **Code inline** : fond gris clair, monospace, padding horizontal

**Important** : ne PAS chercher à reproduire pixel-perfect le blog de Julie. L'objectif est la lisibilité du contenu, pas le mimétisme visuel.

## Dépendances autorisées (via CDN)

- **marked** (parseur Markdown) : `https://cdn.jsdelivr.net/npm/marked/marked.min.js`
- **js-yaml** (parseur frontmatter) : `https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/dist/js-yaml.min.js`
- Pas d'autres dépendances nécessaires

Si ces CDN sont indisponibles, un parseur Markdown minimaliste maison est acceptable pour les cas d'usage de Julie (titres, paragraphes, gras, italique, blockquote, listes, tableaux, séparateurs).

## Gestion des composants MDX custom

Actuellement, **aucun composant MDX custom n'est utilisé** dans les articles de Julie (le composant CTA a été mis en pause).

Le parseur doit donc :
- Rendre correctement le Markdown standard (titres, paragraphes, gras, italique, blockquotes, listes, tableaux, séparateurs `---`)
- Bien gérer les **tableaux avec `<ul><li>` imbriqués** dans les cellules (pattern "Qui fait quoi") : le contenu HTML à l'intérieur d'une cellule doit être rendu tel quel

Si un composant MDX custom réapparaît dans le futur (CTA réactivé, ou nouveau composant), la spec devra être mise à jour avant de gérer son rendu.

## Restrictions techniques (artifact Claude)

- **Pas de `localStorage`, `sessionStorage`** ni aucune autre API de stockage navigateur (non supporté dans les artifacts)
- **Pas de balise `<form>`** dans les artifacts React
- **Tout en un seul fichier HTML** : CSS inline dans `<style>`, JS inline dans `<script>`

## Contenu initial du textarea

Au chargement de l'artifact, le textarea contient le MDX complet de l'article (frontmatter + corps) que Claude vient de rédiger. Julie peut directement éditer à partir de là.

## Ce qu'on ne cherche PAS à faire

- Pas de rendu MDX "complet" avec composants React complexes : on reste sur du Markdown standard et des patterns de formatage (tableaux avec `<ul><li>` imbriqués)
- Pas de coloration syntaxique dans le textarea (un simple `<textarea>` suffit)
- Pas de sauvegarde automatique : c'est une preview éphémère, Julie copie le MDX quand elle est prête
- Pas de comparaison avant/après : une seule version à la fois
