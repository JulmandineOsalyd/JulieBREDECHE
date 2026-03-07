import Link from 'next/link'
import Image from 'next/image'
import type { ReactNode } from 'react'

const offresPrincipale = {
  title: 'Solutions PowerApps, Power Automate & Agents Copilot',
  description:
    'Conception et développement de solutions métier sur mesure, d\'automatisations intelligentes et d\'agents conversationnels — de l\'analyse des besoins à la mise en production.',
  methodLink: '/offres',
  methodLinkLabel: 'ma méthode',
  bullets: [
    'Applications PowerApps sur mesure',
    'Automatisations Power Automate : approbations, alertes, gestion des droits',
    'Agents Copilot Studio connectés à votre environnement Microsoft',
    'Documentation technique et fonctionnelle incluse',
    'Forfait maintenance mensuel disponible',
  ],
}

const coaching = {
  title: 'Coaching Power Automate',
  description: 'Montez en compétence sur Power Automate avec un accompagnement personnalisé.',
  bullets: [
    'Sessions 1:1 en visio',
    'Cas pratiques sur vos flux existants',
    'Bonnes pratiques et anti-patterns',
    'Support entre les sessions par email',
  ],
}

const audit = {
  title: 'Audit SharePoint & Power Platform',
  description: 'Analyse approfondie de votre environnement SharePoint pour en tirer le meilleur parti.',
  bullets: [
    'Analyse de l\'architecture des sites',
    'Évaluation des droits et des permissions',
    'Optimisation de la gestion des métadonnées',
    'Mise en place d\'une recherche PnP ou d\'agents Copilot',
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
            Détail des offres →
          </Link>
        </div>

        {/* Grid — 3 colonnes */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
            alignItems: 'stretch',
          }}
          className="offres-grid"
        >
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

          {/* Offre principale — featured, au milieu */}
          <OffreCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            }
            badge="Offre principale"
            title={offresPrincipale.title}
            description={offresPrincipale.description}
            bullets={offresPrincipale.bullets}
            featured
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
        <a
          href="https://onedrivepathchecker.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: '1.5rem',
            padding: '1.25rem 1.5rem',
            background: '#0d1f35',
            border: '1px solid rgba(77,255,214,0.2)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            textDecoration: 'none',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <Image
              src="/images/logoOneDrivePathChecker.svg"
              alt="OneDrive Path Checker"
              width={40}
              height={40}
              style={{ flexShrink: 0 }}
            />
            <div>
              <div style={{ fontWeight: 700, color: 'white', fontSize: '0.95rem' }}>
                OneDrive Path Checker
              </div>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', marginTop: '0.15rem' }}>
                Outil de détection de chemins de fichiers trop longs pour SharePoint &amp; OneDrive
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--c1)', fontWeight: 600, marginTop: '0.25rem' }}>
                Disponible sur le Microsoft Store · 24h d&apos;essai gratuit
              </div>
            </div>
          </div>
          <span className="btn-primary" style={{ whiteSpace: 'nowrap', pointerEvents: 'none' }}>
            Découvrir l&apos;outil →
          </span>
        </a>
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
  featured = false,
}: {
  icon: ReactNode
  badge: string
  title: string
  description: string
  bullets: string[]
  featured?: boolean
}) {
  const ink = featured ? 'white' : 'var(--ink)'
  const muted = featured ? 'rgba(255,255,255,0.7)' : 'var(--muted)'

  return (
    <div
      className="card"
      style={{
        padding: '1.75rem',
        background: featured ? '#0d1f35' : 'white',
        border: featured ? '1.5px solid rgba(96,198,255,0.3)' : '1.5px solid var(--border)',
        boxShadow: featured ? '0 8px 32px rgba(15,95,173,0.22)' : undefined,
        transform: featured ? 'translateY(-8px)' : undefined,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: '12px',
            background: featured
              ? 'rgba(96,198,255,0.15)'
              : 'linear-gradient(135deg, rgba(96,198,255,0.15) 0%, rgba(24,176,232,0.15) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </div>
        <span
          style={{
            background: featured ? 'var(--grad)' : 'var(--off)',
            border: featured ? 'none' : '1px solid var(--border)',
            borderRadius: '99px',
            fontSize: '0.72rem',
            fontWeight: 700,
            padding: '0.2rem 0.65rem',
            color: featured ? 'white' : 'var(--c3)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          {badge}
        </span>
      </div>

      <h3 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.15rem', color: ink, marginBottom: '0.6rem', lineHeight: 1.4 }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.875rem', color: muted, lineHeight: 1.65, marginBottom: '1rem' }}>
        {description}
      </p>

      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem', flex: 1 }}>
        {bullets.map((b) => (
          <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: ink }}>
            {featured ? (
              <span
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  background: 'var(--grad)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            ) : (
              <span style={{ color: 'var(--c2)', fontWeight: 700, flexShrink: 0 }}>·</span>
            )}
            {b}
          </li>
        ))}
      </ul>

      <Link
        href="/offres"
        className={featured ? 'btn-primary' : 'btn-outline'}
        style={{ width: '100%', justifyContent: 'center' }}
      >
        {featured ? 'Parlons de votre projet' : 'En savoir plus'}
      </Link>
    </div>
  )
}
