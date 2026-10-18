---
name: gras-comme-sous-titre
description: "Remplacer le gras utilisé comme faux sous-titre par un vrai ### dans la hiérarchie Markdown"
metadata:
  type: feedback
---

Quand une phrase en gras sert de titre de sous-section (elle introduit un bloc et n'est pas dans un paragraphe), la convertir en `###` plutôt que de la laisser en `**texte**`.

**Why:** Le gras dans la charte de Julie est réservé aux constats-clés et verdicts dans la prose, pas à la structuration visuelle. Un gras-titre crée une ambiguïté sémantique et un rendu fragile selon les rendus Markdown.

**How to apply:** Repérer les lignes seules entièrement en gras qui se comportent comme des titres (rien avant, paragraphe après). Les convertir en `### Titre` dans la hiérarchie de section.
