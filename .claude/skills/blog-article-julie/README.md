# Skill : `blog-article-julie`

Skill de rédaction pour le blog professionnel de Julie Bredeche (consultante Microsoft 365).

## 📁 Contenu du dossier

```
blog-article-julie/
├── SKILL.md                          # Règles de voix, structure, workflow
├── README.md                         # Ce fichier
├── references/
│   ├── voice-patterns.md             # Patterns d'ouverture, transitions, conclusion
│   └── mdx-components.md             # Composants MDX disponibles
├── templates/
│   └── article-base.mdx              # Squelette d'article vide
└── examples/
    ├── copilot-cowork-explique.mdx           # Article de référence
    └── zero-tickets-onedrive-apres-migration.mdx  # Article de référence
```

## 🚀 Installation — Claude Code (VS Code)

### Option 1 — Skill personnelle (disponible partout)

Place le dossier dans le répertoire Skills de ton utilisateur :

```bash
# Sur macOS / Linux
mkdir -p ~/.claude/skills
mv blog-article-julie ~/.claude/skills/

# Sur Windows (PowerShell)
New-Item -ItemType Directory -Path "$HOME\.claude\skills" -Force
Move-Item blog-article-julie "$HOME\.claude\skills\"
```

Claude Code la chargera automatiquement dans tous tes projets.

### Option 2 — Skill projet (uniquement dans ton repo blog)

Place le dossier à la racine de ton repo blog :

```bash
mkdir -p .claude/skills
mv blog-article-julie .claude/skills/
```

Puis commit (ou ajoute à `.gitignore` si tu préfères la garder locale) :

```bash
git add .claude/skills/blog-article-julie
git commit -m "Ajoute la Skill de rédaction blog"
```

### Vérifier que Claude Code la voit

Dans VS Code, ouvre Claude Code et demande :

> *"Quelles skills as-tu chargées pour ce projet ?"*

La Skill `blog-article-julie` doit apparaître.

### Utilisation

Ouvre n'importe quelle session Claude Code dans ton repo blog et tape par exemple :

> *"J'aimerais écrire un nouvel article sur les Trigger Conditions dans Power Automate."*

Claude Code détectera la Skill et lancera le workflow :
1. Il te posera 3-4 questions de cadrage
2. Il te proposera un plan à valider
3. Il rédigera section par section
4. Il produira le `.mdx` final

## 🌐 Installation — Claude.ai (web)

Les Skills personnalisées sur Claude.ai nécessitent un plan **Pro, Max, Team ou Enterprise**.

### Étapes

1. Va sur [claude.ai](https://claude.ai) et connecte-toi
2. Clique sur ton avatar → **Settings** → **Capabilities** → **Skills**
3. Clique sur **Create skill** (ou **Upload skill** selon la version)
4. Upload l'archive `blog-article-julie.zip` fournie
5. Active la Skill

### Utilisation sur Claude.ai

- **En chat libre** : la Skill se déclenchera quand tu parles d'un article à rédiger
- **Dans un Projet** : crée un Projet "Blog Julie" et associe cette Skill. Tes conversations de rédaction seront toutes regroupées au même endroit, avec la Skill toujours active.

### 📤 Workflow de livraison

1. L'agent crée `content/blog/fr/[slug].mdx` en `draft: true` dès que le plan est validé
2. Tu lis l'article sur `http://localhost:3000/blog/[slug]` (lance `npm run dev` une fois, la page se recharge à chaque enregistrement, aucun build)
3. Tu demandes des ajustements en chat ou tu modifies le fichier toi-même : l'agent relit le fichier avant chaque modification
4. Tu demandes la version anglaise à l'agent `article-translator` quand tu es prête
5. Il crée `content/blog/en/[slug].mdx`
6. Tu commits et tu pousses toi-même

**Les articles sont en `draft: true`** : non listés sur le blog, mais accessibles par leur URL directe en local. Tu passes à `false` quand tu es prête à publier.

## 🔄 Faire évoluer la Skill

Au fil de tes articles, tu remarqueras peut-être :
- Des tournures qui reviennent et qui mériteraient d'être codifiées
- Des règles qui ne sont plus pertinentes
- De nouveaux composants MDX à ajouter

Pour mettre à jour :

1. Édite les fichiers directement (`SKILL.md`, `references/*.md`, etc.)
2. Si tu es dans Claude Code avec l'Option 1, les changements sont immédiats
3. Si tu es sur Claude.ai, re-upload l'archive via Settings → Skills

### Raccourci : demander à Claude de mettre à jour

Tu peux aussi dire à Claude en conversation :

> *"Ajoute cette nouvelle règle à ma Skill blog : [règle]"*

Et Claude modifiera le bon fichier pour toi.

## ✅ Test rapide après installation

Pour vérifier que la Skill fonctionne bien, essaie ce prompt :

> *"J'aimerais écrire un article court sur les 3 erreurs les plus courantes lors d'une migration SharePoint. Lance le workflow."*

Tu devrais voir Claude :
- Te poser des questions sur l'angle et la catégorie
- Proposer un plan avec titre, sections, conclusion
- Attendre ta validation avant de rédiger

Si Claude rédige directement sans te poser de questions, c'est que la Skill n'a pas été chargée. Vérifie son emplacement.

---

**Version** : 1.0 · **Créée le** : 2026-04-23
