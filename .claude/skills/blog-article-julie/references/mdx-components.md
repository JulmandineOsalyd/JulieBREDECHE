# Composants MDX — Blog Julie Bredeche

Composants et patterns de formatage MDX utilisés dans les articles. Insérer uniquement quand le contexte le justifie, jamais par défaut.

## Tableaux — Patterns

### Tableau simple de comparaison

Pour comparer 2-3 options, outils, ou versions :

```mdx
| Outil | Limite | Impact |
|---|---|---|
| SharePoint (stockage en ligne) | 400 caractères | ✅ &nbsp; Contrôlée par ShareGate |
| OneDrive (synchronisation locale) | 255 caractères | ❌ &nbsp; **Non contrôlée** |
```

- `&nbsp;` pour créer un petit espace après ✅ ou ❌
- `<br/>` dans les cellules si besoin de multiple lignes
- Gras dans les cellules uniquement pour souligner un verdict

### Tableau "Qui fait quoi ?" avec listes imbriquées

Pour les articles méthodologiques, un tableau récapitulatif de la répartition des actions entre Julie et le client. Syntaxe spéciale avec `<ul><li>` dans les cellules :

```mdx
| Phase | **Mes actions** | **Actions client** |
|---|---|---|
| **1. Prérequis et parties prenantes** | <ul><li>Call de cadrage avec les métiers</li><li>Identification du sponsor et du référent DSI</li></ul> | <ul><li>Récupérer les infos licences auprès de la DSI</li></ul> |
| **2. Structurer la connaissance** | <ul><li>Atelier métier sur les cas d'usages</li><li>Atelier DSI sur la gouvernance</li></ul> | <ul><li>Formalisation des besoins</li><li>Validation des prérequis techniques</li></ul> |
```

**Règles** :
- Placer ce tableau en fin d'article, juste avant la conclusion `## Ma conclusion`
- Précéder d'un titre de section `## Qui fait quoi ? La répartition en synthèse`
- Colonnes typiques : phase/étape + **Mes actions** + **Actions client**
- Les en-têtes de colonnes "actions" sont en gras dans le markdown
- Chaque élément de liste court (une ligne chacun)

## Bullets avec ouverture en gras

Pattern récurrent : chaque bullet s'ouvre par un terme clé en gras, suivi de deux points et de l'explication.

```mdx
- **Lien Copilot direct** : le plus rapide, on envoie un lien aux utilisateurs ciblés.
- **Mise à disposition sur un site SharePoint** : l'agent devient accessible par les utilisateurs autorisés.
- **Intégration dans une app Teams dédiée** : pour les agents qui s'inscrivent dans des usages quotidiens.
```

Utile pour :
- Listes d'options à présenter
- Énumérations de cas d'usage
- Checklists où chaque point mérite un label clair

## Questions rhétoriques en bullets

Pour les sections de cadrage ou d'atelier, on peut lister des questions à poser avec la question en gras, puis le commentaire :

```mdx
- **Si l'agent ne devait répondre qu'à 3 usages prioritaires, lesquels ?** La question force le métier à trancher.
- **Qui va utiliser l'agent ?** Collaborateurs, managers, équipe RH ? Et surtout pourquoi ?
- **Quelles licences Copilot avez-vous ?** Je leur demande de récupérer l'info auprès de la DSI.
```

## Blockquotes

Syntaxe Markdown standard, pas de composant custom :

```mdx
> **Texte du verdict en gras.**
```

Ou avec citation incarnée :

```mdx
> *"Citation en italique."*
```

Ou avec un livrable mis en avant :

```mdx
> **Livrable produit** : un document de **spécifications de l'agent**. C'est la référence pour les itérations suivantes.
```

## Séparateurs de sections

Trois tirets sur une ligne vide :

```
---
```

Utiliser entre les sections principales (`## ...`), pas entre les sous-sections.

## Pictos et émojis

Stricte sélection :
- ⚠️ — point de vigilance (corps de texte, pas dans les titres)
- ✅ / ❌ — tableaux de comparaison uniquement
- • — séparateur dans les titres de série (ex. `## Phase 1 • Identifier...`)
- → — flèche en fin de lien interne éventuel

Pas d'autres émojis dans les articles.

## Composants qu'on n'utilise PAS

- **Pas de CTA** `<div className="card-series cta-tool">` — retiré du blog. La conclusion se suffit à elle-même.
- Pas de `<Callout>`, `<Alert>`, `<Info>` — on utilise blockquote + ⚠️ à la place
- Pas de `<CodeBlock>` custom — les blocs de code Markdown suffisent
- Pas de `<Image>` custom — on insère les images via Markdown standard quand nécessaire
- Pas de composants de partage social — gérés au niveau du template de page

## Ajouter un nouveau composant

Si Julie mentionne un nouveau composant MDX (ex. une FAQ, une timeline, un nouveau CTA), lui demander :
1. Le JSX complet avec les `className` utilisées
2. Un exemple d'usage validé
3. Les règles d'utilisation (fréquence, placement)

Puis ajouter la doc dans ce fichier avant de l'utiliser dans un article.
