# Voice Patterns — Julie Bredeche

Patterns récurrents observés dans les articles publiés. À consulter pour s'imprégner du ton avant de rédiger intro/transitions/conclusion.

## Ouvertures d'articles

### Pattern 1 — La situation terrain immédiate

Une ou deux phrases factuelles qui plantent le décor, puis un glissement vers le problème.

> La migration est terminée. Les fichiers sont dans SharePoint. Et les tickets de support commencent à arriver.

> Lundi matin, 9h. Sophie, responsable RH dans une entreprise de 800 personnes, ouvre son agenda.

### Pattern 2 — La citation verbatim

Une ou plusieurs citations en italique qui incarnent la voix du lecteur cible, avant de nommer le vrai problème.

> *"Mes fichiers ne se synchronisent plus."*
> *"Pourquoi il y a une croix rouge sur mon icône OneDrive ?"*

> *"C'est quoi la différence entre Copilot, un agent Copilot et Copilot Cowork ?"*

### Pattern 2 bis — La citation-brief client

Variante : une seule citation qui pose une demande client typique, suivie d'un contexte très court en une phrase, puis du vrai angle de l'article.

> *"On voudrait un agent Copilot pour notre service RH. Tu peux nous le développer ?"*
>
> La demande arrive régulièrement, formulée comme un projet de dev classique.
>
> Sauf que [...] ce n'est pas du développement, c'est du cadrage métier.

### Pattern 3 — La question directe au lecteur

Pose une situation sous forme de question qui provoque un "oui, exactement" chez le lecteur.

## Patterns de bullets typiques

### Bullet "mot-clé gras + explication"

Le format dominant dans tes listes. Le lecteur scanne les mots-clés en gras et lit l'explication seulement si ça l'intéresse.

```mdx
- **Auditer** les chemins de fichiers avant la migration
- **Vérifier** les permissions existantes sur les sites sources
- **Former** les utilisateurs clés aux nouveaux usages
```

Variante avec deux-points :

```mdx
- **Lien Copilot direct** : le plus rapide, on envoie un lien aux utilisateurs ciblés. Adapté aux populations restreintes.
- **Mise à disposition sur un site SharePoint** : l'agent devient accessible par les utilisateurs autorisés. Idéal quand la population cible est large.
```

### Bullet "question directe au lecteur"

Pour forcer le lecteur à se projeter dans sa propre situation.

```mdx
- **Si l'agent ne devait répondre qu'à 3 usages prioritaires, lesquels ?** La question force le métier à trancher.
- **Qui va utiliser l'agent ?** Collaborateurs, managers, équipe RH ? Et surtout pourquoi ?
- **Quelles licences Copilot avez-vous ?** Je leur demande de récupérer l'info auprès de la DSI.
```

Règle : question en gras, puis une ou deux phrases de contexte qui expliquent pourquoi tu la poses ou ce que tu en fais.

## Transitions entre sections

### Le verdict en blockquote

Quand une section se conclut sur un constat fort, le détacher en blockquote pour le marteler.

> **Ce n'est pas un problème de compétence. C'est un problème d'outillage.**

> **Une migration réussie techniquement peut être un échec d'adoption total.**

> **Résultat :** le fichier passe la vérification, la migration s'exécute sans erreur, les fichiers arrivent bien dans SharePoint.

### Le pivot "Mais"

Souvent au milieu d'une section, un paragraphe très court qui bascule l'argument.

> **Mais il vérifie la mauvaise limite.**

### Le point de vigilance

Introduit par ⚠️ et en gras, pour signaler un piège ou une limite importante.

> ⚠️ Point essentiel : **Cowork hérite strictement des permissions de l'utilisateur.**

## Formules récurrentes

### Pour exprimer un constat terrain

- "Côté utilisateur, l'expérience est..."
- "En pratique, ..."
- "Dans la grande majorité des cas, ..."
- "La suite logique : ..."

### Pour introduire une analyse

- "Ce n'est pas X. C'est Y."
- "Le vrai [sujet], ce n'est pas X. C'est Y."
- "Et plus on [action], plus [conséquence]."

### Pour poser une conclusion

- "Concrètement, ..."
- "Résultat : ..."
- "Parce que le vrai [sujet], c'est [verdict]."

## Conclusions — trois formats

### Format A — Liste synthétique

Trois points numérotés avec titre en gras et explication courte. Chaque point est actionnable.

```
Concrètement, trois sujets vont revenir dans la quasi-totalité des missions [X] :

1. **La qualité des permissions** : [explication courte]
2. **Le cadrage des usages** : [explication courte]
3. **La formation des utilisateurs** : [explication courte]
```

### Format B — Punchline

Une ou deux phrases finales qui synthétisent la valeur.

> Parce que le vrai succès d'une migration, ce n'est pas que les fichiers arrivent dans SharePoint. **C'est que les utilisateurs puissent travailler normalement le lendemain.**

### Format C — "Ma conclusion" avec constats numérotés

Titre dédié `## Ma conclusion`, suivi d'une phrase de synthèse qui pose le verdict global, puis 2-3 constats numérotés en gras avec explication.

```mdx
## Ma conclusion

Créer un agent Copilot déclaratif réussi, c'est accepter que le paramétrage n'est pas le cœur du projet.

Trois constats qui reviennent souvent :

1. **Les projets qui ratent**, c'est très souvent un cadrage métier incomplet [...]
2. La **qualité d'un agent déclaratif dépend à 90% de ses sources**, pas de son paramétrage.
3. **Sans sponsor métier, l'agent ne vivra pas bien longtemps.**
```

Ce format convient aux articles méthodologiques où tu veux laisser le lecteur avec des repères à garder en tête.

## Tics à éviter (chez d'autres rédacteurs)

Ne jamais produire ces formulations dans un article de Julie :

- "Dans un monde où..."
- "À l'heure du tout-numérique..."
- "Il est important de noter que..."
- "N'hésitez pas à..."
- "Il va sans dire que..."
- "En conclusion,"
- "Pour conclure,"
- "J'espère que cet article vous a plu"
- "N'hésitez pas à me contacter" (la conclusion se suffit à elle-même)

## Marqueurs stylistiques à garder

- **Phrases nominales** en ouverture ou en transition : *"Trois dossiers à préparer. Une matinée."*
- **Listes à puces courtes** pour les symptômes ou les conséquences
- **Gras stratégique** sur les verdicts, jamais sur les mots-clés SEO
- **Tableaux de synthèse** quand on compare 2-3 outils ou versions
- **Dates explicites** ("À ce jour, avril 2026") quand on parle de disponibilité produit
