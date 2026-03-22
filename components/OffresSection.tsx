'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { useTranslation } from '@/lib/i18n'

export default function OffresSection({ compact = false }: { compact?: boolean }) {
  const { t } = useTranslation()
  const { coaching, main, audit, onedrive, badge } = t.offers

  return (
    <section id="services" className="section" style={{ background: 'var(--off)' }}>
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
              {t.offers.sectionLabel}
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontWeight: 700,
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              {t.offers.sectionTitle}
            </h2>
          </div>
          <Link href="/services" className="btn-ghost">
            {t.offers.viewAll}
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
            badge={badge.coaching}
            title={coaching.title}
            description={coaching.description}
            bullets={coaching.bullets as unknown as string[]}
            learnMore={t.offers.learnMore}
          />

          {/* Offre principale — featured, au milieu */}
          <OffreCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            }
            badge={badge.main}
            title={main.title}
            description={main.description}
            bullets={main.bullets as unknown as string[]}
            featured
            learnMore={t.offers.learnMore}
          />

          {/* Audit */}
          <OffreCard
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} aria-hidden="true">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
            }
            badge={badge.audit}
            title={audit.title}
            description={audit.description}
            bullets={audit.bullets as unknown as string[]}
            learnMore={t.offers.learnMore}
          />
        </div>

        {/* OneDrive Path Checker card */}
        <div
          className="card"
          style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'white', border: '1.5px solid var(--border)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'linear-gradient(135deg, rgba(96,198,255,0.15) 0%, rgba(24,176,232,0.15) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 3v18h17v-3H7V3z" />
                <line x1="7" y1="7" x2="10" y2="7" />
                <line x1="7" y1="11" x2="10" y2="11" />
                <line x1="7" y1="15" x2="10" y2="15" />
                <line x1="11" y1="18" x2="11" y2="15" />
                <line x1="15" y1="18" x2="15" y2="15" />
                <line x1="19" y1="18" x2="19" y2="15" />
              </svg>
            </div>
            <h3 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.15rem', color: 'var(--ink)', lineHeight: 1.35, margin: 0, flex: 1 }}>
              {onedrive.title}
            </h3>
            <span className="onedrive-badge" style={{ color: 'var(--c3)', borderRadius: '99px', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.65rem', textTransform: 'uppercase', letterSpacing: '0.04em', whiteSpace: 'nowrap', flexShrink: 0 }}>
              {onedrive.badge}
            </span>
          </div>

          <div className="onedrive-body" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--ink)', lineHeight: 1.65, margin: 0 }}>
              {onedrive.description}
            </p>
            <Link
              href="https://onedrivepathchecker.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
              style={{ whiteSpace: 'nowrap', flexShrink: 0, fontSize: '0.90rem' }}
            >
              {onedrive.cta}
            </Link>
          </div>
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
  featured = false,
  href = '/services',
  cta,
  external = false,
  learnMore,
}: {
  icon: ReactNode
  badge: string
  title: string
  description: string
  bullets: string[]
  featured?: boolean
  href?: string
  cta?: string
  external?: boolean
  learnMore: string
}) {
  const ink = featured ? 'white' : 'var(--ink)'
  const muted = featured ? 'rgba(255,255,255,0.7)' : 'var(--muted)'

  return (
    <div
      className={`card${featured ? ' offre-featured' : ''}`}
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

      <h3 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.15rem', color: ink, marginBottom: '0.6rem', lineHeight: 1.4 }}>
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
        href={href}
        className={featured ? 'btn-primary' : 'btn-outline'}
        style={{ width: '100%', justifyContent: 'center' }}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {cta ?? learnMore}
      </Link>
    </div>
  )
}
