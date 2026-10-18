---
name: blog-article-julie
description: Rédige les articles de blog professionnel de Julie Bredeche, consultante indépendante Microsoft 365 (SharePoint, Copilot, Power Platform). Utilise cette Skill dès que Julie demande de rédiger, structurer, relire ou améliorer un article de blog, un brouillon, un plan d'article, une meta description SEO, ou dès qu'elle mentionne son blog, ses articles, ou un sujet technique Microsoft 365 qu'elle veut publier. La traduction anglaise relève de l'agent article-translator. Utilise-la même si Julie dit simplement "je veux écrire sur [sujet Microsoft 365]" sans préciser le mot "article".
---

# Blog Article — Julie Bredeche

Cette Skill capture la voix éditoriale et le workflow de rédaction du blog professionnel de Julie Bredeche, consultante indépendante spécialisée Microsoft 365.

## Contexte du blog

- **Autrice** : Julie Bredeche, consultante terrain indépendante
- **Périmètre** : Microsoft 365 uniquement (SharePoint, Copilot, Copilot Studio, Power Automate, Power Apps)
- **Public** : professionnels IT, chefs de projet M365, consultants, responsables adoption
- **Positionnement** : retour d'expérience terrain, **pas** de formation théorique
- **Format** : articles MDX publiés sur le site de Julie
- **Langue** : français (la traduction anglaise relève de l'agent `article-translator`)

## Workflow obligatoire

Quand Julie demande un nouvel article, **suivre ce protocole sans le contourner** :

### Étape 1 — Cadrer (brief structuré)

Présenter ce brief à Julie, pré-rempli avec ce qu'elle a déjà dit, et ne poser que les questions des champs encore vides. Maximum 3-4 questions à la fois.

```
BRIEF
- Catégorie : [SharePoint · Copilot de A à Z · Copilot · Copilot Studio · Power Automate · Power Apps]
- Lecteur cible : [profil précis : IT, chef de projet, responsable adoption…]
- Situation terrain : [problème réel vécu, avec un détail non reproductible par une IA : client, chiffre, verbatim ou erreur vécue]
- Promesse du titre : [résultat concret ou bascule pour le lecteur]
- Mot-clé principal : [expression visée]
- Pattern : [A explication technique · B méthode · C retour d'expérience · D nouveau concept Microsoft]
- Action attendue du lecteur : [décision à prendre ou geste à faire après lecture]
- Éléments à intégrer : [captures, tableaux, outils, sources Microsoft à citer]
- À ne pas dire : [sujets, clients ou formulations à éviter]
- Longueur visée : [500-800 mots par défaut]
- Série : [numéro d'épisode si "Copilot de A à Z", sinon aucune]
```

Si l'article fait partie de la série "Copilot de A à Z", vérifier la cohérence avec les épisodes précédents.

**Vérifications avant le plan**
- **Articles connexes et doublons** : lister avec `Glob`/`Grep` sur `content/blog/fr/` les articles proches (voir la méthode de recherche des slugs à l'étape 3). Si un article traite déjà le même sujet sous le même angle, le dire à Julie et proposer un angle différent. Noter les articles à référencer.
- **Élément non reproductible** : si le champ « Situation terrain » ne contient aucun détail vécu, le redemander. C'est ce qui évite les réécritures.

**Reformulation** : résumer le brief en 3 lignes (lecteur, situation, promesse) et obtenir un « ok » de Julie avant de passer au plan.

### Étape 2 — Proposer un plan (à valider)

Produire un plan sous cette forme :

```
TITRE : [proposition de titre accrocheur avec promesse concrète]
SLUG : [slug proposé, voir convention ci-dessous]
META DESCRIPTION : [150-160 caractères]
MOT-CLÉ PRINCIPAL : [issu du brief]
QUESTION CIBLE (GEO) : [la question à laquelle l'article répond directement]
PATTERN : [A / B / C / D, issu du brief]

INTRO : [1-2 phrases décrivant la situation terrain d'ouverture]

SECTIONS :
1. [Titre section] — [promesse actionnable] — verdict : [phrase-verdict de la section] — ~[N] mots
2. [Titre section] — [promesse actionnable] — verdict : [phrase-verdict de la section] — ~[N] mots
3. [Titre section] — [promesse actionnable] — verdict : [phrase-verdict de la section] — ~[N] mots

CONCLUSION : [angle de clôture : synthèse listée, punchline, ou "Ma conclusion" avec constats numérotés]

LIENS INTERNES PRESSENTIS : [articles connexes repérés au cadrage, avec slug réel]
```

**Attendre la validation de Julie avant de rédiger.** Proposer 2 variantes de titre si le sujet s'y prête.

#### Convention de nommage du fichier

Le nom du fichier `.mdx` est un **slug** dérivé du titre :
- Tout en minuscules
- Tirets à la place des espaces
- Pas d'accents ni caractères spéciaux
- Pas d'article au début (le, la, les, un, une, des)

Exemple : *"Zéro ticket de support OneDrive après migration ? Voici comment j'ai fait !"* devient `zero-tickets-onedrive-apres-migration.mdx`.

Le slug est proposé dans le plan et validé avec lui : le fichier est créé dès l'étape 3.

### Étape 3 — Rédiger section par section

Dès le plan validé, **créer `content/blog/fr/[slug].mdx`** (frontmatter complet avec `draft: true` et `send_newsletter: false`) et y écrire l'article. Écrire une section à la fois, en appliquant strictement les règles de voix et de formatage (voir plus bas). Laisser Julie valider/ajuster avant de passer à la suivante pour les articles longs, ou enchaîner si elle demande une V1 complète.

**Liens internes vers d'autres articles du blog** : insérer pendant la rédaction, avec de **vrais slugs** trouvés dans le repo. Jamais de slug à compléter.

1. `Glob` sur `content/blog/fr/*.mdx` : le nom du fichier est le slug.
2. `Grep` sur `^title:`, `^tags:`, `^excerpt:` et `^draft:` pour connaître le thème de chaque article.
3. Lire l'article cible pour confirmer qu'il traite bien le concept.
4. Écarter les articles `draft: true` (lien mort en production) et l'article en cours.

```markdown
[Texte du lien](/blog/slug-reel)
```

Privilégier les liens **contextuels** (au fil du texte, là où le concept est mentionné), pas les "pour aller plus loin" en fin d'article. 1 à 3 liens internes par article : au moins un dès qu'un article connexe existe, jamais forcé. Si aucun article ne convient, ne pas en inventer et le dire à Julie. Pas d'ancre générique ("ici", "cet article"), pas de lien vers un sujet identique.

### Étape 3 bis — Auto-contrôle (avant la preview)

**Avant de renvoyer Julie vers la preview, toujours lancer le script d'auto-contrôle** sur le fichier du repo, puis corriger soi-même ce qui est en échec.

1. Lancer : `python3 -I .claude/skills/blog-article-julie/scripts/autocontrole.py content/blog/fr/[slug].mdx --blog content/blog/fr`
2. Corriger les `[KO]` : couper les phrases de plus de 25 mots, supprimer les tirets cadratins, remplacer le tutoiement du lecteur par du vouvoiement, ajuster la longueur, recalculer `readingTime` (mots ÷ 300, arrondi supérieur), réécrire `metaTitle` (60 caractères maximum) et `metaDescription` (150 à 160), corriger les liens internes.
3. Relancer jusqu'à zéro échec. Une phrase longue qui est une citation de dialogue ou un prompt peut rester : le signaler à Julie au lieu de la modifier.
4. Résumer le résultat en une ligne dans le message de preview (ex. : *"Auto-contrôle : 0 échec, 640 mots, 3 min de lecture"*).

Le script vérifie : phrases de plus de 25 mots, tirets — et –, tutoiement hors citations, longueur, `readingTime`, `metaTitle`, `metaDescription`, `draft: true`, `send_newsletter: false`, nombre de liens internes (3 maximum), slugs existants et non `draft`. Il ne juge ni la voix ni le fond. Option `--publie` pour auditer un article déjà en ligne.

### Étape 4 — Prévisualisation sur le site en local (obligatoire)

**Pas de fichier HTML de preview ni de build.** Julie voit l'article avec le vrai rendu du site, via le serveur de dev Next.js, qui recharge à chaud à chaque enregistrement du fichier.

1. **Serveur de dev** : s'il ne tourne pas, demander à Julie de lancer `npm run dev` à la racine du repo (ou le démarrer si l'environnement le permet). Ne jamais lancer `next build`.
2. **URL** : donner `http://localhost:3000/blog/[slug]`. Un article en `draft: true` n'apparaît pas dans les listes du blog mais s'affiche à son URL directe.
3. **Message à Julie** (court) : l'URL, le résultat de l'auto-contrôle, les liens internes insérés (ancre et cible), et ce qu'elle peut faire : relire à l'écran, puis demander des ajustements en chat, ou modifier le fichier elle-même dans son éditeur.

#### Protocole de modification (remplace le copier-coller)

Julie peut éditer le `.mdx` directement. L'agent travaille donc toujours à partir du fichier :

1. **Avant toute modification**, relire `content/blog/fr/[slug].mdx` avec l'outil Read. Le fichier est la seule source de vérité, jamais la version précédemment produite par l'agent ni sa mémoire de la conversation.
2. Appliquer les ajustements avec Edit (modifications ciblées), jamais en réécrivant le fichier entier sans nécessité. Les passages modifiés par Julie ne sont pas retouchés sans demande.
3. Relancer l'auto-contrôle puis annoncer en une phrase ce qui a changé (*"J'ai modifié [section X]. Tes autres modifications sont conservées."*). Le rechargement du navigateur est automatique.

### Étape 5 — Livraison

Une fois la preview validée par Julie :

1. Relire le fichier et relancer l'auto-contrôle une dernière fois.
2. **Rappeler** :
   > *"L'article est dans `content/blog/fr/[slug].mdx`. Il est en `draft: true`, donc non listé tant que tu ne passes pas à `false` avant de push."*
3. **Proposer** une revue complète avec `@seo-reviewer` (éditorial, SEO, GEO, frontmatter).

**Hébergement** : Vercel (redéploiement auto au push sur `main`, géré par Julie).

### Étape 6 — Traduction anglaise (hors périmètre de cette skill)

La traduction FR→EN est gérée par l'agent `article-translator`. Ne jamais proposer la traduction avant validation explicite de la VF. Quand Julie la demande, lui indiquer de passer par `article-translator` (les règles de frontmatter et de style EN y sont définies).

## Voix & style — règles strictes

### Ton

- **Voix experte mais accessible** : praticienne qui partage, pas formatrice qui théorise
- **"Je" assumé** : Julie parle de ses expériences, ses constats, ses outils
- **Phrases courtes et rythmées**. Phrases nominales bienvenues. Exemple : *"La migration est terminée. Les fichiers sont dans SharePoint. Et les tickets commencent à arriver."*
- **Pas de ton publicitaire**. Pas de superlatifs gratuits. Pas de "révolutionnaire", "incroyable", "game-changer"
- **Pas de théorie introductive**. Ouvrir sur une situation terrain, jamais sur une définition

### Langue

- **Français** par défaut
- **Adresse au lecteur : vouvoiement** ("vous", "votre"). Le tutoiement n'apparaît que dans une citation de dialogue (brief client, exemple de prompt, verbatim), jamais pour s'adresser au lecteur
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

Quatre patterns selon le sujet (typologie unique, partagée avec `@seo-reviewer`) :

**Pattern A : explication technique** (ex. delegation warning Power Apps, 3 erreurs Power Automate, synchronisation OneDrive)
- Partir d'un symptôme terrain que le lecteur reconnaît, puis expliquer le mécanisme technique
- Identifier les causes fréquentes, puis donner des solutions classées du plus simple au plus structurel
- Chaque solution inclut ses conditions d'application et ses limites
- Sections souvent numérotées `## 1. Titre`

**Pattern B : méthode** (ex. méthode projet Power Platform, cadrage d'agent Copilot)
- Fil rouge avec un cas d'usage concret illustrant chaque étape
- Chaque étape : ce que Julie fait concrètement, pourquoi, et les pièges à éviter
- Variante phases : `## Phase N • Titre` (séparateur `•`), bullets `- **Terme clé** : explication courte`, questions rhétoriques en gras, tableau "Qui fait quoi ?" en fin d'article

**Pattern C : retour d'expérience** (ex. certifications AB-730 et AB-731, zéro ticket OneDrive)
- Extraire les apprentissages clés et les reformuler comme des prises de position, sans récit chronologique
- Sections thématiques, conclusion `## Ma conclusion` avec 2-3 constats numérotés et blockquote verdict final

**Pattern D : nouveau concept ou fonctionnalité Microsoft** (ex. facturation Copilot Studio, IA dans SharePoint, Copilot Cowork)
- Expliquer les briques, puis "Ce que ça change concrètement" (enjeux métier, budgétaires, organisationnels), puis "Points de vigilance" (limites réelles, coûts cachés, prérequis)
- Le lecteur repart avec une décision à prendre, pas juste une information
- Variante démo : sections nommées par moment ou thème (`## 9h : Sophie délègue`), sous-sections `###`, tableau de synthèse en fin de développement

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
title: "[Titre éditorial accrocheur, peut conserver Épisode N • si série]"
metaTitle: "[Mot-clé principal en tête, ≤ 60 caractères]"
metaDescription: "[Orientée conversion, 150-160 caractères, distincte de l'excerpt]"
slug: "[mots-cles-courts-sans-mots-de-liaison]"
canonical: "https://juliebredeche.pro/blog/[slug]"
date: "YYYY-MM-DD"
category: "Power Apps"  # ou liste de 2 valeurs maximum : ["Power Apps","Power Automate"]
# valeurs possibles : SharePoint | Copilot de A à Z | Copilot | Copilot Studio | Power Automate | Power Apps
parentTag: "Copilot"  # optionnel, pour les articles de série Copilot
excerpt: "Résumé éditorial d'une phrase, accrocheur, orienté bénéfice lecteur"
readingTime: 4
tags: ["Tag1", "Tag2", "Tag3", "Tag4"]
featured: false
send_newsletter: false
draft: true
---
```

### Champs SEO (à GÉNÉRER pour chaque article)

- **`metaTitle`** : ≤ 60 caractères. **Mot-clé principal au début**. **Sans** "Épisode N •" (le SEO préfère le mot-clé en tête, contrairement au `title` qui peut le conserver).
- **`metaDescription`** : strictement entre **150 et 160 caractères**. Orientée conversion : verbe d'action, livrables concrets, persona ciblé si pertinent. Doit être **distincte** de l'`excerpt` (qui reste éditorial pour l'affichage blog).
- **`slug`** : court, en minuscules, séparé par des tirets, sans mots de liaison ("le", "la", "de", "et", "pour", "the", "a", "of"). **Identique FR/EN**.
- **`canonical`** : toujours `https://juliebredeche.pro/blog/[slug]`. **Pas de `/en/`** dans l'URL — le routing Next.js ne distingue pas la locale dans le path.

### Champs édito (à conserver ou affiner)

- **`title`** : entre guillemets doubles, respecter les guillemets français si pertinent. Peut conserver "Épisode N •" si série "Copilot de A à Z".
- **`date`** : format ISO `YYYY-MM-DD`
- **`category`** : 1 ou 2 valeurs (liste de 2 maximum), choisies parmi celles listées ci-dessus, rien d'autre
- **`parentTag`** : optionnel. Utilisé pour les articles de série (ex: `"Copilot"` pour les articles "Copilot de A à Z" et Copilot Studio)
- **`excerpt`** : 1 phrase éditoriale, pas deux. C'est ce qui apparaît sur la page d'accueil du blog. **Distinct du `metaDescription`** (qui sert au SEO).
- **`readingTime`** : **mots du corps de l'article ÷ 300, arrondi à l'entier supérieur**. Compter uniquement le contenu après le frontmatter. Cible 2-3 min sur articles de 500-800 mots.
- **`tags`** : **4 maximum**. Pas de doublons sémantiques (ex: éviter "IA" + "Copilot" si le sujet est Copilot ; éviter "Méthodologie" générique si "Cadrage projet" est plus précis). Privilégier les tags transactionnels/spécifiques aux génériques. PascalCase pour les noms composés (ex. `"Microsoft 365"`), singuliers.

### Champs de publication (à PRÉSERVER tels quels)

- **`featured`** : `false` par défaut. `true` uniquement si Julie le demande explicitement (met l'article en avant dans le BentoGrid)
- **`send_newsletter`** : **toujours `false` par défaut**. Julie l'activera manuellement au moment de la publication
- **`draft`** : **toujours `true` par défaut**. Julie passera à `false` uniquement au moment de la publication

⚠️ **Règle critique** : ne jamais livrer un article avec `draft: false` ou `send_newsletter: true`, même si l'article semble finalisé. Ces deux champs sont du ressort de Julie au moment de publier.

### Workflow de génération du frontmatter

1. Rédiger le corps de l'article
2. **Compter les mots du corps** (hors frontmatter) → calculer `readingTime` = ⌈mots ÷ 300⌉
3. Définir le **mot-clé principal SEO**
4. Rédiger `metaTitle` (≤ 60 car., mot-clé en tête) puis `metaDescription` (150-160 car., orientée conversion)
5. Vérifier les longueurs : `metaTitle` ≤ 60, `metaDescription` ∈ [150, 160]
6. Vérifier que `tags` ≤ 4 sans doublon sémantique

### Exemple concret (référence)

```yaml
title: "Épisode 7 • Créer un agent Copilot : 80% de cadrage métier, 20% de paramétrage"
metaTitle: "Créer un agent Copilot : méthode en 5 phases"
metaDescription: "Méthodologie en 5 phases pour cadrer et déployer un agent Copilot déclaratif réussi : prérequis, sources, itérations, déploiement. Guide consultant M365."
slug: "methodologie-cadrage-agent-copilot"
canonical: "https://juliebredeche.pro/blog/methodologie-cadrage-agent-copilot"
tags: ["Copilot", "Agents déclaratifs", "Cadrage projet", "Microsoft 365"]
readingTime: 4
```

## Longueur cible

- **1000 mots grand maximum** de corps de texte (hors frontmatter)
- **Cible idéale** : 500-800 mots (médiane réelle des 26 articles : 590). Alerte sous 400 mots
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
- **`metaTitle`** : ≤ 60 caractères, mot-clé principal au début, sans "Épisode N •"
- **`metaDescription`** : strictement 150-160 caractères, orientée conversion, distincte de l'`excerpt`
- **`slug`** : court, sans mots de liaison, identique FR/EN
- **`canonical`** : `https://juliebredeche.pro/blog/[slug]`, identique FR/EN (pas de `/en/`)

## Règles de rigueur factuelle

- **Ne jamais inventer de fonctionnalités Microsoft non vérifiées**. En cas de doute, le signaler à Julie plutôt que d'affirmer
- **Ne pas confondre** : plans, licences, dates de disponibilité, versions. Si une info change souvent (ex. pricing Copilot), **proposer à Julie de vérifier** avant publication
- **Citer les sources** (docs Microsoft, annonces officielles) quand une info est récente ou sensible
- **Ne pas diluer le positionnement** : rester sur Microsoft 365, refuser les sujets généralistes IT

## Ressources complémentaires

Lire les fichiers suivants **selon le besoin** :

- **`scripts/autocontrole.py`** — Auto-contrôle chiffré d'un brouillon MDX (étape 3 bis).
- **`references/voice-patterns.md`** — Ouvertures, transitions, formules récurrentes de Julie. Consulter en priorité pour rédiger intro et conclusion
- **`references/mdx-components.md`** — Composants MDX et patterns de tableaux disponibles. Consulter avant de poser des balises HTML ou des tableaux complexes dans l'article
- **`templates/article-base.mdx`** — Squelette de frontmatter + structure d'article. Utile quand Julie veut démarrer from scratch
- **`examples/`** — Trois articles validés (OneDrive, Cowork, cadrage d'agent) qui incarnent le style. Consulter en cas de doute sur le ton ou le formatage

## Rappels finaux

- **Proposer un plan avant de rédiger.** Toujours.
- **Lancer l'auto-contrôle avant toute preview.** Zéro échec ou échec expliqué.
- **Prévisualiser sur le site en local (`npm run dev`), jamais de build.** Toujours.
- **Relire le fichier `.mdx` avant toute modification.** Non négociable, Julie peut l'avoir édité.
- **Frontmatter complet** : `metaTitle` (≤60), `metaDescription` (150-160), `slug`, `canonical`, `tags` (≤4), `readingTime` (mots÷300 arrondi sup.).
- **`draft: true` et `send_newsletter: false`.** Toujours.
- **1000 mots grand max, 4-5 min de lecture.** Jamais au-dessus.
- **Phrases courtes (15-20 mots max), bullets dès que possible.** Les lecteurs scannent.
- **Pas de tirets dans la ponctuation.** Jamais.
- **Français uniquement ici. Traduction EN : agent `article-translator`, après validation de la VF.**
- **Vouvoyer le lecteur.** Tutoiement uniquement dans une citation de dialogue.
- **Voix terrain, pas de théorie.** Systématiquement.
