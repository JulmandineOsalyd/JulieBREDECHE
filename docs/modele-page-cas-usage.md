# Modèle : page dédiée d'un cas d'usage

Modèle de la page `/portfolio/[slug]`, validé avec le cas **GED Qualité** (`/portfolio/ged-qualite`). Toutes les pages cas d'usage partagent le même composant : seul le contenu change.

## 1. Comment c'est construit

| Élément | Fichier |
|---|---|
| Composant de la page (mise en page, ne pas dupliquer) | `components/UseCasePage.tsx` |
| Page du cas (métadonnées SEO, 3 lignes) | `app/portfolio/[slug]/page.tsx` |
| Textes FR / EN du cas | `lib/i18n/fr.ts` et `lib/i18n/en.ts`, dans `portfolio.projects` |
| Libellés communs (Avant, Après, Secteur…) | `portfolio.detail` dans les mêmes fichiers |
| Technologies, vidéo, lien vers la page | `lib/portfolio.ts` (`projectTechs`, `projectVideos`, `projectPages`) |
| Sitemap | `app/sitemap.ts` |

Le composant reçoit l'index du cas dans `portfolio.projects` : `<UseCasePage index={0} />`.

## 2. Structure de la page (dans l'ordre)

1. **Lien retour** « Tous les cas d'usage ».
2. **Encadré** secteur + technologies, puis le **titre** (H1).
3. **Contexte** : 2 phrases, sans liste ni sous-titre.
4. **Solution mise en place** : 2-3 phrases, puis la **vidéo** juste dessous (sans titre ni légende).
5. **Fonctionnalités clés** : tuiles claires avec icône, titre court et une ligne de détail. Pas de numéro.
6. **Améliorations apportées** : chaque puce « avant » est reliée à sa puce « après » par une flèche.
7. **Valeur business (ROI)** : 3 chiffres.

Pas d'appel à l'action en bas de page. Largeur unique de 880 px pour tout le contenu.

## 2 bis. Tailles de texte

| Élément | Taille |
|---|---|
| Titre de page (H1) | `clamp(1.75rem, 3.5vw, 2.4rem)`, identique aux titres des articles de blog |
| Titres de section (H2) | `clamp(1.3rem, 2.5vw, 1.6rem)` |
| Contexte et solution | 1rem (`text-base`), interligne 1.75 |
| Titre d'une fonctionnalité | 1rem, gras (Lora) |
| Détail d'une fonctionnalité | 0.85rem |
| Cases avant / après | 0.9rem |
| Chiffres du ROI | 2.1rem (Lora, gras) ; libellé 0.85rem |
| Technologies et lien retour | 0.8rem et 0.85rem |

## 3. Règles de contenu

- **Titre** : « Nom : résultat ». Un nom d'abord, jamais un verbe, puis un résultat concret avec un chiffre quand il existe (60 à 80 caractères). Exemple : « Gestion des contrats : zéro renouvellement oublié ».
- **Contexte** : exactement 2 phrases. Phrase 1 = ce qui est déployé, pour qui, à quelle échelle. Phrase 2 = la contrainte principale. Pas de liste d'utilisateurs.
- **Fonctionnalités** : chaque entrée commence par `**Titre court**` (2 à 4 mots) suivi d'une phrase de détail, par exemple `**Workflow d'approbation** avec un circuit multi-sites et multi-niveaux`. Le titre s'affiche en gras, le reste en dessous avec une majuscule. 6 entrées idéalement (6 icônes ; au-delà elles tournent). Une fonctionnalité sans gras s'affiche sans détail.
- **Améliorations** : `problem` et `benefits` ont **le même nombre d'entrées, dans le même ordre** (3 recommandé). La 1re puce « avant » répond à la 1re puce « après », et ainsi de suite.
- **ROI** : 3 entrées `{ val, label }`.
- Règles éditoriales (phrases courtes, gras sur le mot clé, pas de deux-points ni de tirets cadratins) : voir `.claude/agents/portfolio-usecase.md`.

## 4. Champs i18n à fournir (FR et EN)

```typescript
{
  title: '...',                       // H1 et carte de la liste
  sector: '...',
  teaser: '...',                      // repli si `context` est absent
  context: '...',                     // 2 phrases (section Contexte)
  keyMetric: { val: '...', label: '...' },
  screenshots: [{ title: '...' }],    // fenêtre de la liste, si le cas n'a pas de page dédiée
  problem: ['...', '...', '...'],     // colonne « Avant »
  users: ['...'],                     // fenêtre de la liste uniquement
  solution: '...',
  features: ['**Titre** détail', '...'],
  benefits: ['...', '...', '...'],    // colonne « Après », même ordre que `problem`
  roi: [{ val: '...', label: '...' }],
}
```

## 5. Créer une nouvelle page cas d'usage

1. Ajouter le cas dans `portfolio.projects` (`fr.ts` et `en.ts`), avec les champs ci-dessus.
2. Dans `lib/portfolio.ts`, à l'index du cas :
   - `projectTechs` : les technologies ;
   - `projectVideos` : `{ src, poster }` ou `null` ;
   - `projectThumbImages` : capture de la vignette de la carte (image 16/9 dans `public/portfolio/[NomProjet]/`) ou `null` pour le dégradé avec icône ;
   - `projectPages` : `'/portfolio/[slug]'`.
3. Dans `app/portfolio/page.tsx`, ajouter le dégradé de la vignette dans `projectThumbs`.
4. Copier la vidéo et son aperçu dans `public/portfolio/[NomProjet]/` (voir `docs/modele-video-demo-cas-usage.md`).
5. Créer `app/portfolio/[slug]/page.tsx` en copiant `app/portfolio/ged-qualite/page.tsx` : adapter `title`, `description`, l'URL canonique, l'image Open Graph et l'index de `<UseCasePage index={n} />`.
6. Ajouter l'URL dans `app/sitemap.ts`.
7. Vérifier en local : `npm run dev`, puis `/portfolio/[slug]` sur ordinateur et sur mobile.

Un cas sans `projectPages` continue de s'ouvrir dans la fenêtre de la liste.
