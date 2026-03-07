import Link from 'next/link'
import type { ReactNode } from 'react'

const offresPrincipale = {
  title: 'Applications PowerApps, Power Automate & Agents Copilot',
  description:
    'Conception et développement d\'applications métier sur mesure, d\'automatisations intelligentes et d\'agents conversationnels — de l\'analyse des besoins à la mise en production. Découvrez',
  methodLink: '/offres',
  methodLinkLabel: 'ma méthode',
  bullets: [
    'PowerApps sur mesure (20–30j) pour TPE/PME',
    'Automatisations Power Automate : approbations, alertes, synchronisations',
    'Agents Copilot Studio connectés à vos données SharePoint',
    'Documentation technique et fonctionnelle incluse',
    'Forfait maintenance mensuel disponible',
  ],
}

const coaching = {
  title: 'Coaching Power Automate',
  description: 'Montez en compétence sur Power Automate avec un accompagnement personnalisé.',
  bullets: [
    'Sessions 1:1 en visio ou présentiel',
    'Cas pratiques sur vos flux existants',
    'Bonnes pratiques et anti-patterns',
    'Support entre les sessions par email',
  ],
}

const audit = {
  title: 'Audit SharePoint & Power Platform',
  description: 'Diagnostic complet de votre environnement M365 avec recommandations actionnables.',
  bullets: [
    'Analyse de la gouvernance SharePoint',
    'Revue des flux Power Automate existants',
    'Évaluation de la sécurité et des permissions',
    'Roadmap priorisée avec ROI estimé',
  ],
}

export default function OffresSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section" style={{ background: 'var(--off)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div>
            <p
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--c2)',
                marginBottom: '0.4rem',
              }}
            >
              Ce que je propose
            </p>
            <h2
              style={{
                fontFamily: 'Lora, serif',
                fontWeight: 700,
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              Mes offres
            </h2>
          </div>
          <Link href="/offres" className="btn-ghost">
            Discutons de votre projet →
          </Link>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
          }}
          className="offres-grid"
        >
          {/* Offre principale — span 2 */}
          <div
            className="card offre-featured"
            style={{
              gridColumn: 'span 2',
              padding: '2rem',
              background: 'white',
              border: '1.5px solid var(--border)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Featured badge */}
            <span
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'var(--grad)',
                color: 'white',
                fontSize: '0.72rem',
                fontWeight: 700,
                padding: '0.25rem 0.75rem',
                borderRadius: '99px',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              Offre principale
            </span>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }} className="offre-inner">
              {/* Left */}
              <div>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(77,255,214,0.15) 0%, rgba(24,176,232,0.15) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.25rem', color: 'var(--ink)', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                  {offresPrincipale.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  {offresPrincipale.description}{' '}
                  <Link href={offresPrincipale.methodLink} style={{ color: 'var(--c3)', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 600 }}>
                    {offresPrincipale.methodLinkLabel}
                  </Link>
                  .
                </p>
                <Link href="/offres" className="btn-primary">
                  Parlons de votre projet
                </Link>
              </div>

              {/* Right — bullet points */}
              <div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {offresPrincipale.bullets.map((bullet) => (
                    <li key={bullet} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <span
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          background: 'var(--grad)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--ink)', lineHeight: 1.55 }}>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Coaching */}
          <OffreCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} aria-hidden="true">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            }
            badge="Coaching"
            title={coaching.title}
            description={coaching.description}
            bullets={coaching.bullets}
          />

          {/* Audit */}
          <OffreCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} aria-hidden="true">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            }
            badge="Audit & Conseil"
            title={audit.title}
            description={audit.description}
            bullets={audit.bullets}
          />
        </div>

        {/* Free tool banner */}
        <div
          style={{
            marginTop: '1.5rem',
            padding: '1.25rem 1.5rem',
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '1.5rem' }} aria-hidden="true">🛠️</span>
            <div>
              <span style={{ fontWeight: 700, color: 'var(--ink)', fontSize: '0.95rem' }}>
                OneDrive Path Checker
              </span>
              <span style={{ color: 'var(--muted)', fontSize: '0.875rem', marginLeft: '0.5rem' }}>
                — Outil gratuit pour diagnostiquer les chemins OneDrive trop longs
              </span>
            </div>
          </div>
          <Link href="/outils/onedrive-path-checker" className="btn-outline">
            Accéder à l&apos;outil →
          </Link>
        </div>
      </div>

    </section>
  )
}

function OffreCard({
  icon,
  badge,
  title,
  description,
  bullets,
}: {
  icon: ReactNode
  badge: string
  title: string
  description: string
  bullets: string[]
}) {
  return (
    <div className="card" style={{ padding: '1.75rem', background: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(77,255,214,0.15) 0%, rgba(24,176,232,0.15) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </div>
        <span
          style={{
            background: 'var(--off)',
            border: '1px solid var(--border)',
            borderRadius: '99px',
            fontSize: '0.72rem',
            fontWeight: 700,
            padding: '0.2rem 0.65rem',
            color: 'var(--c3)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          {badge}
        </span>
      </div>

      <h3 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--ink)', marginBottom: '0.6rem', lineHeight: 1.4 }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1rem' }}>
        {description}
      </p>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
        {bullets.map((b) => (
          <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--ink)' }}>
            <span style={{ color: 'var(--c2)', fontWeight: 700, flexShrink: 0 }}>·</span>
            {b}
          </li>
        ))}
      </ul>

      <Link href="/offres" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
        En savoir plus
      </Link>
    </div>
  )
}
