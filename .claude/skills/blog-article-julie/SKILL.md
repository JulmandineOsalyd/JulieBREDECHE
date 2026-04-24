---
name: blog-article-julie
description: Rédige les articles de blog professionnel de Julie Bredeche, consultante indépendante Microsoft 365 (SharePoint, Copilot, Power Platform). Utilise cette Skill dès que Julie demande de rédiger, structurer, relire, traduire ou améliorer un article de blog, un brouillon, un plan d'article, une meta description SEO, ou dès qu'elle mentionne son blog, ses articles, ou un sujet technique Microsoft 365 qu'elle veut publier. Applique-la aussi pour les traductions FR→EN des articles une fois la version française validée. Utilise-la même si Julie dit simplement "je veux écrire sur [sujet Microsoft 365]" sans préciser le mot "article".
---

# Blog Article — Julie Bredeche

Cette Skill capture la voix éditoriale et le workflow de rédaction du blog professionnel de Julie Bredeche, consultante indépendante spécialisée Microsoft 365.

## Contexte du blog

- **Autrice** : Julie Bredeche, consultante terrain indépendante
- **Périmètre** : Microsoft 365 uniquement (SharePoint, Copilot, Power Automate, Power Platform, Audit & Conseil)
- **Public** : professionnels IT, chefs de projet M365, consultants, responsables adoption
- **Positionnement** : retour d'expérience terrain, **pas** de formation théorique
- **Format** : articles MDX publiés sur le site de Julie
- **Langue** : français d'abord, traduction anglaise après validation de la VF

## Workflow obligatoire

Quand Julie demande un nouvel article, **suivre ce protocole sans le contourner** :

### Étape 1 — Cadrer (questions ciblées)

Poser maximum 3-4 questions pour clarifier :
- **Catégorie visée** : SharePoint · Copilot de A à Z · Power Automate · Power Platform · Audit & Conseil
- **Angle terrain** : quel problème réel, quelle situation vécue déclenche l'article ?
- **Promesse du titre** : quel résultat concret ou quelle bascule le lecteur va obtenir ?
- **Éléments à intégrer** : captures d'écran, tableaux, outils à mentionner, série existante à poursuivre ?

Si l'article fait partie de la série "Copilot de A à Z", demander le numéro d'épisode et vérifier la cohérence avec les épisodes précédents.

### Étape 2 — Proposer un plan (à valider)

Produire un plan sous cette forme :

```
TITRE : [proposition de titre accrocheur avec promesse concrète]
META DESCRIPTION : [155 caractères max]

INTRO : [1-2 phrases décrivant la situation terrain d'ouverture]

SECTIONS :
1. [Titre section] — [promesse actionnable de la section]
2. [Titre section] — [promesse actionnable de la section]
3. [Titre section] — [promesse actionnable de la section]

CONCLUSION : [angle de clôture : synthèse listée, punchline, ou "Ma conclusion" avec constats numérotés]
```

**Attendre la validation de Julie avant de rédiger.** Proposer 2 variantes de titre si le sujet s'y prête.

### Étape 3 — Rédiger section par section

Écrire une section à la fois, en appliquant strictement les règles de voix et de formatage (voir plus bas). Laisser Julie valider/ajuster avant de passer à la suivante pour les articles longs, ou enchaîner si elle demande une V1 complète.

### Étape 4 — Prévisualisation HTML + MDX côte à côte (obligatoire)

**Avant de produire le `.mdx` final, toujours créer un artifact HTML de prévisualisation.** C'est une étape non négociable du workflow : Julie doit pouvoir relire le rendu avant validation.

L'artifact doit contenir **deux panneaux côte à côte** :

**Panneau gauche — Aperçu HTML rendu**
- Rendu de l'article tel qu'il apparaîtrait sur le blog
- Styles typographiques lisibles (titres, paragraphes, blockquotes, tableaux, listes)
- Les composants MDX custom (si réintroduits un jour) rendus visuellement, pas affichés comme code
- Largeur de lecture confortable (max ~720px)

**Panneau droit — MDX éditable**
- `<textarea>` qui contient le MDX complet (frontmatter + corps)
- Édition en temps réel : quand Julie modifie le texte, l'aperçu gauche se met à jour
- Police monospace, taille lisible, numérotation des lignes optionnelle

**Contraintes techniques de l'artifact** :
- HTML autonome dans un seul fichier (pas de dépendances externes nécessitant un serveur)
- Utiliser un parseur Markdown côté client (ex. `marked` via CDN) + petits regex pour gérer les composants MDX custom
- Gestion des tableaux avec `<ul><li>` imbriqués dans les cellules (pattern "Qui fait quoi") : le HTML inline doit être rendu tel quel
- Bouton **"Copier le MDX"** en haut du panneau droit (très visible, couleur contrastée)
- Compteur de mots et temps de lecture estimé en bas
- **Bandeau permanent** en haut du panneau droit qui rappelle : *"💡 Avant toute modif demandée à Claude, clique sur 'Copier le MDX' et colle-le dans le chat"*

Après création de l'artifact, dire à Julie **exactement ceci** (ne pas reformuler) :

> *"Voici la prévisualisation. Tu peux modifier directement dans le panneau de droite, l'aperçu se met à jour en temps réel.*
>
> *⚠️ **Important** : si tu veux que je fasse ensuite des ajustements (réécrire une section, raccourcir, etc.), **copie-moi d'abord ton MDX actuel** en cliquant sur 'Copier le MDX' et en le collant dans le chat. Sans ça, je repartirai de ma version initiale et tes modifications seront perdues.*
>
> *Dis-moi quand tu valides et je produis le `.mdx` final téléchargeable."*

#### Protocole anti-écrasement des modifications (règle critique)

Quand Julie demande une modification après qu'un artifact de preview a été créé, **toujours appliquer ce protocole** :

1. **Avant de régénérer l'artifact**, vérifier si Julie a fourni son MDX actuel dans son message ou dans un message récent.

2. **Si non** : ne PAS régénérer l'artifact. Répondre :
   > *"Avant que je modifie [ce que tu demandes], colle-moi d'abord le MDX actuel du panneau droit (bouton 'Copier le MDX'). Sinon je vais repartir de ma version et écraser tes éventuels ajustements."*
   >
   > *Attendre le MDX collé avant de continuer.*

3. **Si oui** : prendre le MDX fourni par Julie comme **base de travail unique**, ignorer toute version précédente. Appliquer la modification demandée **chirurgicalement**, sans réécrire les parties non concernées.

4. **Régénérer l'artifact** avec le MDX modifié, en mentionnant ce qui a changé :
   > *"J'ai modifié [section X] comme tu le voulais. Voici la preview mise à jour. Tes autres ajustements sont conservés."*

**Cas particulier — coquille ou détail mineur** : si Julie pointe une simple coquille (*"il manque un 's' à X"*), on peut corriger sans demander le MDX complet, mais **toujours** préciser dans la réponse : *"J'ai corrigé uniquement ce point. Si tu avais fait d'autres modifs dans le textarea, recolle-moi ton MDX pour que je reparte de là."*

**Exception — demande globale** : si Julie dit explicitement *"reprends depuis zéro"* ou *"oublie ce qu'on avait, recommence"*, on peut repartir de la version Claude sans lui demander son MDX.

### Étape 5 — Livraison du fichier `.mdx` (FR)

Une fois la preview validée par Julie, **livrer le fichier `.mdx` téléchargeable** via la fonctionnalité de création de fichier (output dans `/mnt/user-data/outputs/`).

#### Configuration cible

- **Dossier cible VF** : `content/blog/fr/` (Julie placera le fichier elle-même dans son repo)
- **Dossier cible EN** : `content/blog/en/` (après traduction)
- **Hébergement** : Vercel (redéploiement auto au push sur `main`, géré par Julie)

#### Convention de nommage du fichier

Le nom du fichier `.mdx` est un **slug** dérivé du titre :
- Tout en minuscules
- Tirets à la place des espaces
- Pas d'accents ni caractères spéciaux
- Pas d'article au début (le, la, les, un, une, des)

Exemples :
- Titre : *"Zéro ticket de support OneDrive après migration ? Voici comment j'ai fait !"*
- Slug : `zero-tickets-onedrive-apres-migration.mdx`

Proposer le slug à Julie avant la livraison finale, elle peut ajuster.

#### Contenu du fichier

Le `.mdx` final contient :
- Frontmatter complet avec **`draft: true` et `send_newsletter: false`**
- Corps de l'article en Markdown
- Composants MDX où pertinent (voir `references/mdx-components.md`)
- Séparateurs `---` entre sections principales
- Meta description finalisée à 155 caractères max (dans le champ `excerpt` ou en commentaire si un champ SEO dédié existe)

#### Protocole de livraison

1. **Confirmer la base de travail** : partir du MDX que Julie a validé dans la preview (voir protocole anti-écrasement de l'étape 4). **Jamais partir d'une version Claude si Julie a édité dans le textarea.**
2. **Créer le fichier** `.mdx` dans `/mnt/user-data/outputs/content/blog/fr/[slug].mdx`
3. **Présenter le fichier** à Julie avec le tool `present_files`
4. **Rappeler** :
   > *"Voici ton fichier `.mdx`. Place-le dans `content/blog/fr/` de ton repo. Il est en `draft: true` donc invisible publiquement tant que tu ne passes pas à `false` avant de push."*

### Étape 6 — Traduction anglaise (sur demande uniquement)

**Ne jamais proposer la traduction anglaise avant validation explicite de la VF.** Quand Julie la demande :
- Partir du MDX **final validé** de la VF (pas d'une version intermédiaire)
- Traduire fidèlement en conservant la structure et les composants MDX
- Garder les noms techniques Microsoft en anglais (déjà le cas en VF)
- Adapter les formulations idiomatiques plutôt que les traduire littéralement
- Ajuster la meta description en anglais (155 caractères max)
- **Passer aussi par l'étape 4 (prévisualisation)** pour la version anglaise
- **Livrer le fichier dans `/mnt/user-data/outputs/content/blog/en/[slug].mdx`** avec le même slug que la VF (pour que la correspondance FR↔EN soit évidente)

## Voix & style — règles strictes

### Ton

- **Voix experte mais accessible** : praticienne qui partage, pas formatrice qui théorise
- **"Je" assumé** : Julie parle de ses expériences, ses constats, ses outils
- **Phrases courtes et rythmées**. Phrases nominales bienvenues. Exemple : *"La migration est terminée. Les fichiers sont dans SharePoint. Et les tickets commencent à arriver."*
- **Pas de ton publicitaire**. Pas de superlatifs gratuits. Pas de "révolutionnaire", "incroyable", "game-changer"
- **Pas de théorie introductive**. Ouvrir sur une situation terrain, jamais sur une définition

### Langue

- **Français** par défaut
- **Anglais uniquement pour les noms techniques Microsoft** : SharePoint, OneDrive, Teams, Power Automate, Copilot Studio, Power Apps, Dataverse, etc.
- **Pas de franglais gratuit** : on dit "déclencheur" si c'est clair, mais "trigger" si c'est le terme Microsoft officiel

### Ponctuation — règle critique

**JAMAIS de tirets cadratins (—) ni demi-cadratins (–) dans la ponctuation du corps de texte.**

À la place, utiliser :
- Des virgules, des points, des deux-points
- Des parenthèses si besoin d'une incise
- Des blockquotes `>` ou des listes pour détacher une idée

*Exception* : les tirets sont tolérés dans les **titres d'articles** (ex. *"Épisode 6 • Comprendre Copilot Cowork en 3 minutes"* utilise `•`, pas `—`).

### Mise en forme

- **Gras** : uniquement sur les constats-clés, les verdicts, les points-pivots. Pas décoratif.
- *Italique* : pour les citations incarnées (voix utilisateur, client, soi-même), pas pour mettre en valeur
- `> Blockquote` : pour marteler une idée forte, souvent un verdict ou une synthèse
- **Tableaux** : pour comparer, clarifier, trancher (ex. comparaison d'outils, de limites, de versions)
- **Listes** : pour les étapes, les checklists, les points actionnables
- **Séparateurs `---`** : entre les grandes sections du corps

### Émojis et pictos

Usage sobre et fonctionnel :
- ⚠️ pour signaler un piège, une limite, un point de vigilance
- ✅ / ❌ dans les tableaux de comparaison
- Pas d'émojis décoratifs dans les titres ou le corps

## Structure d'un article

### Titre

- **Accrocheur, avec promesse concrète ou résultat tangible**
- Peut commencer par une question directe, un chiffre, ou une affirmation forte
- Exemples validés :
  - *"Zéro ticket de support OneDrive après migration ? Voici comment j'ai fait !"*
  - *"Votre flow tourne en boucle ? Les Trigger Conditions vont tout changer"*
  - *"Épisode 6 • Comprendre Copilot Cowork en 3 minutes"*

### Introduction

- **1 à 3 courts paragraphes maximum**
- Partir d'une situation terrain que le lecteur reconnaît immédiatement
- Peut s'ouvrir sur une citation en italique (verbatim utilisateur/client)
- **Jamais** de définition, jamais de "Dans un monde où...", jamais de contexte théorique

### Développement

Trois patterns principaux selon le sujet :

**Pattern A — Problème décortiqué** (ex. article OneDrive)
- Sections numérotées `## 1. Titre`, `## 2. Titre`, `## 3. Titre`
- Chaque section expose un aspect du problème
- Une section finale de type `## La solution : ...`

**Pattern B — Cas d'usage / démo** (ex. article Cowork)
- Sections nommées par moment ou thème (`## 9h : Sophie délègue`)
- Sous-sections `###` pour structurer une scène
- Peut inclure un tableau de synthèse en fin de développement

**Pattern C — Méthodologie en phases** (ex. article Cadrage Agent Copilot)
- Sections en `## Phase N • Titre` (avec le séparateur `•` unicode entre numéro et titre)
- Chaque phase correspond à une étape séquentielle d'une méthode
- Bullets avec **terme clé en gras** en ouverture : `- **Terme clé** : explication courte`
- Questions rhétoriques en gras pour ouvrir une réflexion : `- **Si l'agent ne devait répondre qu'à 3 usages, lesquels ?**`
- Tableau "Qui fait quoi ?" en fin d'article avec listes `<ul><li>` imbriquées dans les cellules pour synthétiser la répartition des actions
- Conclusion sous forme `## Ma conclusion` avec 1-2 phrases puis liste numérotée de 2-3 constats clés

Chaque section doit apporter **quelque chose d'actionnable** ou **un constat exploitable**.

### Conclusion

- **Courte** (3-8 lignes)
- Trois formats possibles :
  - **Titre dédié "## Ma conclusion"** suivi de 1-2 phrases de synthèse, puis une liste numérotée de 2-3 constats clés (format article méthodologique)
  - **Liste numérotée** de points clés à retenir (comme l'article Cowork)
  - **Punchline synthétique** qui résume la valeur (comme l'article OneDrive)

**Note** : les composants CTA ne sont pas utilisés pour l'instant. La conclusion se suffit à elle-même.

## Frontmatter

Calquer exactement sur ce format :

```yaml
---
title: "..."
date: "YYYY-MM-DD"
category: "SharePoint" | "Copilot de A à Z" | "Power Automate" | "Power Platform" | "Audit & Conseil"
excerpt: "Résumé d'une phrase, accrocheur, orienté bénéfice lecteur"
readingTime: 4
tags: ["Tag1", "Tag2", "Tag3"]
featured: false
send_newsletter: false
draft: true
---
```

Règles :
- **`title`** : entre guillemets doubles, respecter les guillemets français si pertinent
- **`date`** : format ISO `YYYY-MM-DD`
- **`category`** : **exactement** une des 5 valeurs ci-dessus, rien d'autre
- **`excerpt`** : 1 phrase, pas deux. C'est ce qui apparaît sur la page d'accueil du blog
- **`readingTime`** : estimer honnêtement (200 mots/min). **Cible : 4-5 min max**
- **`tags`** : 3 à 5 tags, PascalCase pour les noms composés (ex. `"Microsoft 365"`), singuliers
- **`featured`** : `true` uniquement si Julie le demande explicitement
- **`send_newsletter`** : **toujours `false` par défaut**. Julie l'activera manuellement au moment de la publication
- **`draft`** : **toujours `true` par défaut**. Julie passera à `false` uniquement au moment de la publication

⚠️ **Règle critique** : ne jamais livrer un article avec `draft: false` ou `send_newsletter: true`, même si l'article semble finalisé. Ces deux champs sont du ressort de Julie au moment de publier.

## Longueur cible

- **1000 mots grand maximum** de corps de texte (hors frontmatter)
- **Cible idéale** : 700-900 mots
- **Temps de lecture** : 4-5 minutes max
- Si le sujet dépasse naturellement 1000 mots, **ne pas dépasser** : proposer à Julie de splitter en deux articles plutôt que de produire un mur de texte

## Rythme de lecture — règle critique

**Les lecteurs de Julie n'ont pas le temps de lire.** Le format doit s'adapter :

### Phrases courtes

- **Cible** : 15-20 mots maximum par phrase
- Couper les phrases longues en deux. Toujours.
- Préférer un point à une virgule quand c'est possible
- Phrases nominales bienvenues (*"Trois erreurs. Une seule vraiment coûteuse."*)

### Maximiser les bullet points

**Dès qu'on peut lister, on liste.** Les blocs de prose de 5+ lignes sont à éviter.

Convertir en bullets :
- Les énumérations (symptômes, causes, étapes, bénéfices)
- Les comparaisons (avant/après, A/B)
- Les checklists d'action
- Les conditions ou prérequis
- Les résumés de section

**Règle** : si un paragraphe contient 3 éléments ou plus qui peuvent être listés, les lister. Pas les noyer dans une phrase.

### Exemples concrets

❌ À éviter (prose dense) :
> Pour bien préparer une migration OneDrive, il faut d'abord auditer les chemins de fichiers, puis vérifier les permissions existantes, et enfin former les utilisateurs clés aux nouveaux usages.

✅ À privilégier (bullets) :
> Pour bien préparer une migration OneDrive, trois étapes :
> - **Auditer** les chemins de fichiers
> - **Vérifier** les permissions existantes
> - **Former** les utilisateurs clés aux nouveaux usages

### Aérer visuellement

- **Paragraphes courts** : 2-4 phrases max
- **Sous-titres `###`** pour découper les longues sections
- **Séparateurs `---`** entre grandes sections
- **Tableaux** pour toute comparaison (plutôt que paragraphes comparatifs)
- **Blockquotes** pour détacher les verdicts importants

### Phrases-verdicts en gras

En fin de section, une phrase-verdict courte en gras qui synthétise. Le lecteur qui scanne doit pouvoir comprendre l'essentiel en lisant uniquement les titres, les bullets, et les phrases en gras.

## SEO

- Identifier 1 mot-clé principal et 2-3 mots-clés secondaires avant de rédiger
- Intégrer les termes **naturellement** dans le titre, le `<h2>` de la première section, l'excerpt, et au moins 2 fois dans le corps
- **Pas de sur-optimisation** : si le mot-clé ne passe pas naturellement dans une phrase, ne pas le forcer
- **Meta description** : 155 caractères max, doit contenir le mot-clé principal, promettre un bénéfice, donner envie de cliquer

## Règles de rigueur factuelle

- **Ne jamais inventer de fonctionnalités Microsoft non vérifiées**. En cas de doute, le signaler à Julie plutôt que d'affirmer
- **Ne pas confondre** : plans, licences, dates de disponibilité, versions. Si une info change souvent (ex. pricing Copilot), **proposer à Julie de vérifier** avant publication
- **Citer les sources** (docs Microsoft, annonces officielles) quand une info est récente ou sensible
- **Ne pas diluer le positionnement** : rester sur Microsoft 365, refuser les sujets généralistes IT

## Ressources complémentaires

Lire les fichiers suivants **selon le besoin** :

- **`references/voice-patterns.md`** — Ouvertures, transitions, formules récurrentes de Julie. Consulter en priorité pour rédiger intro et conclusion
- **`references/mdx-components.md`** — Composants MDX et patterns de tableaux disponibles. Consulter avant de poser des balises HTML ou des tableaux complexes dans l'article
- **`references/preview-artifact.md`** — Spécification de l'artifact HTML de prévisualisation (étape 4 du workflow). Consulter à chaque article avant de construire la preview
- **`templates/article-base.mdx`** — Squelette vide prêt à remplir. Utile quand Julie veut démarrer from scratch
- **`examples/`** — Deux articles validés (OneDrive et Cowork) qui incarnent le style. Consulter en cas de doute sur le ton ou le formatage

## Rappels finaux

- **Proposer un plan avant de rédiger.** Toujours.
- **Prévisualiser en artifact HTML+MDX côte à côte avant de livrer le .mdx final.** Toujours.
- **Demander le MDX actuel du textarea avant toute modification de l'article.** Non négociable — sinon risque d'écraser les édits de Julie.
- **`draft: true` et `send_newsletter: false` dans le frontmatter.** Toujours.
- **1000 mots grand max, 4-5 min de lecture.** Jamais au-dessus.
- **Phrases courtes (15-20 mots max), bullets dès que possible.** Les lecteurs scannent.
- **Pas de tirets dans la ponctuation.** Jamais.
- **Français d'abord, anglais après validation.** Strictement.
- **Voix terrain, pas de théorie.** Systématiquement.
