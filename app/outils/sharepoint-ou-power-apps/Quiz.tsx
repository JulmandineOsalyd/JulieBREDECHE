'use client'

import { useState } from 'react'
import Link from 'next/link'

type Answer = 'yes' | 'no' | null

interface Question {
  id: string
  text: string
  hint?: string
}

const QUESTIONS: Question[] = [
  {
    id: 'multiscreen',
    text: 'Votre processus nécessite-t-il plusieurs écrans ou étapes (saisie → validation → consultation) ?',
    hint: 'Ex. : un formulaire de demande, puis un écran de suivi pour le manager, puis un récapitulatif.',
  },
  {
    id: 'conditional',
    text: "Le formulaire doit-il afficher ou masquer des champs selon le profil ou les réponses de l'utilisateur ?",
    hint: 'Ex. : afficher un champ "justification" uniquement si le montant dépasse 500 €.',
  },
  {
    id: 'multisource',
    text: 'Faut-il connecter plusieurs sources de données (plusieurs listes, un ERP, une base Dataverse… ) ?',
    hint: "Ex. : croiser une liste SharePoint d'employés avec une liste de projets dans Dataverse.",
  },
  {
    id: 'dashboard',
    text: "Avez-vous besoin d'un dashboard avancé filtré par profil utilisateur, avec indicateurs calculés en temps réel ?",
    hint: 'Ex. : un manager voit ses équipes, un RH voit tout le monde, avec des compteurs dynamiques.',
  },
  {
    id: 'volume',
    text: 'La liste de données dépasse-t-elle (ou pourrait-elle dépasser) 2 000 lignes ?',
    hint: 'Important si vous choisissez Power Apps avec SharePoint : la délégation devient alors critique.',
  },
  {
    id: 'external',
    text: "Des utilisateurs extérieurs à votre organisation doivent-ils accéder à l'outil ?",
    hint: 'Ex. : prestataires, clients, partenaires sans compte Microsoft 365.',
  },
]

function getResult(answers: Record<string, Answer>) {
  const yes = (id: string) => answers[id] === 'yes'
  const no = (id: string) => answers[id] === 'no'

  const needsPowerApps =
    yes('multiscreen') || yes('conditional') || yes('multisource') || yes('dashboard')

  const sharePointWarning = yes('external')
  const delegationWarning = yes('volume') && needsPowerApps

  if (!needsPowerApps && no('multiscreen') && no('conditional') && no('multisource') && no('dashboard')) {
    return {
      tool: 'SharePoint',
      color: '#0f5fad',
      icon: '📋',
      title: 'SharePoint couvre votre besoin',
      summary:
        'Votre processus est simple : une liste bien configurée avec les bonnes vues et un flux Power Automate suffisent. Pas besoin de développer une application.',
      tips: [
        'Configurez des vues personnalisées par équipe pour le suivi.',
        'Utilisez Power Automate pour les notifications et validations automatiques.',
        sharePointWarning
          ? '⚠️ Accès externe : SharePoint permet les partages avec des invités, mais vérifiez les paramètres de votre tenant.'
          : null,
      ].filter(Boolean) as string[],
    }
  }

  if (needsPowerApps) {
    return {
      tool: 'Power Apps',
      color: '#7c2de8',
      icon: '⚡',
      title: 'Power Apps est la bonne réponse',
      summary:
        'Votre processus demande une logique applicative réelle : formulaire conditionnel, navigation multi-écrans ou plusieurs sources de données. SharePoint seul ne suffira pas.',
      tips: [
        'Gardez SharePoint (ou Dataverse) comme source de données derrière Power Apps.',
        delegationWarning
          ? '⚠️ Volume > 2 000 lignes : maîtrisez la délégation avant de démarrer. Une mauvaise formule peut tronquer silencieusement vos données.'
          : null,
        sharePointWarning
          ? '⚠️ Accès externe : les utilisateurs hors organisation nécessitent une licence Power Apps payante par utilisateur.'
          : null,
        'Commencez par un prototype sur 2-3 écrans avant de tout développer.',
      ].filter(Boolean) as string[],
    }
  }

  return {
    tool: 'À affiner',
    color: '#18b0e8',
    icon: '🤔',
    title: 'Votre besoin est à affiner',
    summary:
      "Votre situation est à mi-chemin. Clarifiez vos besoins de saisie et de suivi avant de choisir l'outil.",
    tips: [
      "Listez les 3 actions principales que vos utilisateurs feront dans l'outil.",
      'Identifiez qui consulte quoi : tout le monde voit tout, ou par profil ?',
    ],
  }
}

export default function Quiz() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const [current, setCurrent] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const question = QUESTIONS[current]
  const answered = Object.keys(answers).length
  const progress = Math.round((answered / QUESTIONS.length) * 100)

  function answer(id: string, value: Answer) {
    const next = { ...answers, [id]: value }
    setAnswers(next)
    if (current < QUESTIONS.length - 1) {
      setCurrent(current + 1)
    } else {
      setShowResult(true)
    }
  }

  function reset() {
    setAnswers({})
    setCurrent(0)
    setShowResult(false)
  }

  const result = showResult ? getResult(answers) : null

  if (showResult && result) {
    return (
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        {/* Result card */}
        <div
          style={{
            borderRadius: 20,
            padding: '2.5rem 2rem',
            background: `linear-gradient(135deg, ${result.color}18 0%, ${result.color}08 100%)`,
            border: `1.5px solid ${result.color}40`,
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}
        >
          <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.75rem' }}>
            {result.icon}
          </span>
          <div
            style={{
              display: 'inline-block',
              background: result.color,
              color: 'white',
              borderRadius: 99,
              padding: '0.25rem 1rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            {result.tool}
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontWeight: 700,
              fontSize: '1.5rem',
              color: 'var(--ink)',
              marginBottom: '0.75rem',
            }}
          >
            {result.title}
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{result.summary}</p>
        </div>

        {/* Tips */}
        {result.tips.length > 0 && (
          <div
            className="card"
            style={{ padding: '1.5rem', marginBottom: '1.5rem' }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--ink)',
                marginBottom: '0.75rem',
              }}
            >
              Points d'attention
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {result.tips.map((tip, i) => (
                <li key={i} style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.6, paddingLeft: '1.25rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0 }}>→</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/blog/sharepoint-ou-power-apps-grille-de-decision" className="btn-primary">
            Lire l'article complet →
          </Link>
          <button
            onClick={reset}
            className="btn-outline"
            style={{
              background: 'none',
              border: '1.5px solid var(--border)',
              borderRadius: 10,
              padding: '0.65rem 1.4rem',
              fontWeight: 600,
              fontSize: '0.95rem',
              color: 'var(--muted)',
              cursor: 'pointer',
            }}
          >
            Recommencer
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 640, margin: '0 auto' }}>
      {/* Progress */}
      <div style={{ marginBottom: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.8rem',
            color: 'var(--muted)',
            marginBottom: '0.5rem',
          }}
        >
          <span>Question {current + 1} sur {QUESTIONS.length}</span>
          <span>{progress}%</span>
        </div>
        <div style={{ height: 6, background: 'var(--border)', borderRadius: 99, overflow: 'hidden' }}>
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: 'var(--grad)',
              borderRadius: 99,
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="card" style={{ padding: '2rem', marginBottom: '1.25rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-lora), Georgia, serif',
            fontWeight: 700,
            fontSize: '1.15rem',
            color: 'var(--ink)',
            lineHeight: 1.5,
            marginBottom: question.hint ? '0.75rem' : '1.5rem',
          }}
        >
          {question.text}
        </h2>
        {question.hint && (
          <p
            style={{
              fontSize: '0.85rem',
              color: 'var(--muted)',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              paddingLeft: '0.75rem',
              borderLeft: '2px solid var(--border)',
            }}
          >
            {question.hint}
          </p>
        )}

        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={() => answer(question.id, 'yes')}
            style={{
              flex: 1,
              padding: '0.85rem',
              borderRadius: 12,
              border: '1.5px solid var(--border)',
              background: 'white',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--ink)',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#18b0e8'
              ;(e.currentTarget as HTMLButtonElement).style.background = '#f0f8ff'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'
              ;(e.currentTarget as HTMLButtonElement).style.background = 'white'
            }}
          >
            ✅ Oui
          </button>
          <button
            onClick={() => answer(question.id, 'no')}
            style={{
              flex: 1,
              padding: '0.85rem',
              borderRadius: 12,
              border: '1.5px solid var(--border)',
              background: 'white',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '1rem',
              color: 'var(--ink)',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#18b0e8'
              ;(e.currentTarget as HTMLButtonElement).style.background = '#f0f8ff'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--border)'
              ;(e.currentTarget as HTMLButtonElement).style.background = 'white'
            }}
          >
            ❌ Non
          </button>
        </div>
      </div>

      {/* Back */}
      {current > 0 && (
        <button
          onClick={() => setCurrent(current - 1)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--muted)',
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.3rem',
          }}
        >
          ← Question précédente
        </button>
      )}
    </div>
  )
}
