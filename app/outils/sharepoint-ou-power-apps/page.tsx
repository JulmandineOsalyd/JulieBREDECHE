import type { Metadata } from 'next'
import Link from 'next/link'
import Quiz from './Quiz'

export const metadata: Metadata = {
  title: 'SharePoint ou Power Apps ? Le quiz pour choisir — Julie Bredeche',
  description:
    'Répondez à 6 questions sur votre processus et obtenez une recommandation personnalisée : SharePoint, Power Apps, ou les deux.',
  openGraph: {
    title: 'SharePoint ou Power Apps ? Le quiz pour choisir',
    description:
      'Répondez à 6 questions sur votre processus et obtenez une recommandation personnalisée : SharePoint, Power Apps, ou les deux.',
    url: 'https://juliebredeche.pro/outils/sharepoint-ou-power-apps',
    type: 'website',
  },
}

export default function SharePointOuPowerAppsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '5rem 6% 3rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, rgba(77,255,214,0.12) 0%, rgba(24,176,232,0.12) 100%)',
              border: '1px solid rgba(24,176,232,0.3)',
              borderRadius: '99px',
              padding: '0.35rem 1rem',
              marginBottom: '1.5rem',
            }}
          >
            <span style={{ fontSize: '1rem' }} aria-hidden="true">🛠️</span>
            <span
              style={{
                fontSize: '0.82rem',
                fontWeight: 700,
                background: 'var(--grad)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Outil gratuit
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: 'var(--ink)',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
            }}
          >
            SharePoint ou Power Apps ?
          </h1>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--muted)',
              lineHeight: 1.75,
              maxWidth: '620px',
              margin: '0 auto 2rem',
            }}
          >
            6 questions sur votre processus, et vous obtenez une recommandation adaptée à votre situation — avec les points d&apos;attention à ne pas rater.
          </p>
          <a href="#quiz" className="btn-primary">
            Démarrer le quiz ↓
          </a>
        </div>
      </section>

      {/* Quiz */}
      <section id="quiz" style={{ padding: '3rem 6% 5rem', background: 'var(--off)' }}>
        <Quiz />
      </section>

      {/* CTA article */}
      <section style={{ padding: '4rem 6%', background: '#ffffff', textAlign: 'center' }}>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
          Vous voulez comprendre la logique derrière ce choix ?
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-lora), Georgia, serif',
            fontWeight: 700,
            fontSize: '1.4rem',
            color: 'var(--ink)',
            marginBottom: '1.25rem',
          }}
        >
          Lisez la grille de décision complète
        </h2>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/blog/sharepoint-ou-power-apps-grille-de-decision" className="btn-primary">
            Lire l&apos;article →
          </Link>
          <Link href="/services" className="btn-outline">
            Me contacter pour un cadrage
          </Link>
        </div>
      </section>
    </>
  )
}
