---
name: draft-always-true
description: "Le frontmatter doit toujours avoir draft: true — Julie a tendance à le mettre false avant publication"
metadata:
  type: feedback
---

Le champ `draft` dans le frontmatter doit toujours être `true` lors d'un audit éditorial, même si l'article semble terminé. Idem pour `send_newsletter: false`.

**Why:** La checklist éditoriale l'impose explicitement. L'article trouvé le 2026-06-26 avait `draft: false` alors qu'il n'avait pas encore été audité.

**How to apply:** En mode --write, corriger systématiquement `draft: false` → `draft: true` sans attendre confirmation. C'est une correction mécanique, pas une question éditoriale.
