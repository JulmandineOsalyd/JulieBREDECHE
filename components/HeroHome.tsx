'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/lib/i18n'
import { clients } from '@/lib/clients'

export default function HeroHome() {
  const { t } = useTranslation()

  return (
    <section
      style={{ padding: '5rem 6% 4rem', background: '#ffffff' }}
      className="hero-section"
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 420px',
          gap: '4rem',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        {/* Left column */}
        <div>
          {/* H1 */}
          <h1
            className="animate-fadeUp animate-fadeUp-2"
            style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
              color: 'var(--ink)',
              lineHeight: 1.3,
              marginBottom: '1.25rem',
              marginTop: 0,
              width: '97%',
            }}
          >
            {t.hero.h1.before}{' '}
            <span style={{ background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              SharePoint
            </span>
            , {t.hero.h1.articlePP}
            <span style={{ background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Power Platform{' '}
            </span>
            {t.hero.h1.and}{' '}
            <span style={{ background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Copilot Studio
            </span>
          </h1>

          {/* Description */}
          <p
            className="animate-fadeUp animate-fadeUp-3"
            style={{
              fontSize: '1.15rem',
              color: 'var(--muted)',
              lineHeight: 1.7,
              maxWidth: '680px',
              marginBottom: '2.95rem',
            }}
          >
            {t.hero.description}
          </p>

          {/* CTAs */}
          <div
            className="animate-fadeUp animate-fadeUp-4"
            style={{ display: 'flex', alignItems: 'center', gap: '1.55rem', flexWrap: 'wrap', marginBottom: '2.55rem' }}
          >
            <Link href="/#services" className="btn-primary">
              {t.hero.cta1}
            </Link>
            <Link href="/#ressources" className="btn-ghost">
              {t.hero.cta2}
            </Link>
          </div>
        </div>

        {/* Right column — Profile card */}
        <div
          className="animate-fadeUp animate-fadeUp-2 hero-profile-card"
          style={{
            background: 'white',
            borderRadius: '20px',
            border: '1px solid var(--border)',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: '0 8px 32px rgba(15, 95, 173, 0.08)',
            marginTop: '2.5rem',
          }}
        >
          {/* Avatar + name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: '50%',
                background: 'var(--grad)',
                padding: '0px',
                flexShrink: 0,
              }}
            >
              <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', background: 'white' }}>
                <Image src="/images/JBR.png" alt="Julie Bredeche" width={66} height={66} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
              </div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--ink)' }}>
                Julie BREDECHE
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.45 }}>
                {t.hero.cardSubtitle}<br />SharePoint · Power Platform · Copilot Studio
              </div>
            </div>
          </div>

          {/* Experience counter */}
          <div
            style={{
              alignSelf: 'flex-start',
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.5rem',
              background: 'var(--off)',
              border: '1px solid var(--border)',
              borderRadius: '10px',
              padding: '0.4rem 0.8rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-lora), Georgia, serif',
                fontWeight: 700,
                fontSize: '1.1rem',
                background: 'var(--grad)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: 1.2,
              }}
            >
              10+
            </span>
            <span style={{ fontSize: '0.72rem', color: 'var(--muted)', lineHeight: 1.3 }}>
              {t.hero.cardExperience}
            </span>
          </div>

          {/* Clients strip */}
          <div
            className="animate-fadeUp animate-fadeUp-3"
            style={{ marginTop: '1.5rem' }}
          >
            <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.6rem' }}>
              {t.hero.clients}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {clients.map((c) => (
                <span
                  key={c}
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--c3)',
                    border: '1px solid var(--border)',
                    borderRadius: '8px',
                    padding: '0.25rem 0.65rem',
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
