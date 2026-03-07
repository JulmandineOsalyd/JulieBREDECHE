import Link from 'next/link'
import Image from 'next/image'
import type { ArticleMeta } from '@/lib/mdx'

const clients = ['TotalEnergies', 'PwC', 'Sacem', 'BPI France', 'Groupama']
const tags = ['Microsoft 365', 'SharePoint', 'Power Automate', 'PowerApps', 'Copilot Studio']

const stats = [
  { value: '10+', label: 'ans en freelance' },
  { value: '15+', label: 'clients' },
  { value: '100%', label: 'de satisfaction' },
]

export default function HeroHome({ lastArticle }: { lastArticle?: ArticleMeta }) {
  return (
    <section
      style={{ padding: '5rem 6% 4rem', background: '#ffffff' }}
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
          {/* Eyebrow badge */}
          <div
            className="animate-fadeUp animate-fadeUp-1"
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
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--grad)',
                display: 'inline-block',
              }}
            />
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
              Consultante Microsoft 365
            </span>
          </div>

          {/* H1 */}
          <h1
            className="animate-fadeUp animate-fadeUp-2"
            style={{
              fontFamily: 'Lora, serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              color: 'var(--ink)',
              lineHeight: 1.2,
              marginBottom: '1.25rem',
            }}
          >
            Maîtrisez SharePoint,{' '}
            <em
              style={{
                fontStyle: 'italic',
                background: 'var(--grad)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Copilot
            </em>{' '}
            et la Power Platform
          </h1>

          {/* Description */}
          <p
            className="animate-fadeUp animate-fadeUp-3"
            style={{
              fontSize: '1.05rem',
              color: 'var(--muted)',
              lineHeight: 1.7,
              maxWidth: '440px',
              marginBottom: '1.75rem',
            }}
          >
            Je transforme vos processus métier en applications et automatisations Microsoft 365 qui fonctionnent vraiment. De la stratégie à la mise en production.
          </p>

          {/* CTAs */}
          <div
            className="animate-fadeUp animate-fadeUp-4"
            style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}
          >
            <Link href="/offres" className="btn-primary">
              Voir mes offres →
            </Link>
            <Link href="/blog" className="btn-ghost">
              Lire le blog ↓
            </Link>
          </div>
        </div>

        {/* Right column — Profile card */}
        <div
          className="animate-fadeUp animate-fadeUp-2"
          style={{
            background: 'linear-gradient(160deg, #f0f8ff 0%, #e6f4fd 100%)',
            borderRadius: '20px',
            borderLeft: '1px solid var(--border)',
            border: '1px solid var(--border)',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {/* Avatar + name */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                flexShrink: 0,
                boxShadow: '0 4px 16px rgba(15,95,173,0.25)',
                overflow: 'hidden',
              }}
            >
              <Image src="/images/JBR.png" alt="Julie Bredeche" width={64} height={64} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
            <div>
              <div style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--ink)' }}>
                Julie Bredeche
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
                Consultante Microsoft 365
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--c3)', fontWeight: 600, marginTop: '0.1rem' }}>
                Osalyd Consulting
              </div>
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '0.2rem 0.55rem',
                  color: 'var(--c3)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Last article */}
          {lastArticle && (
            <Link
              href={`/blog/${lastArticle.slug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '0.85rem 1rem',
                textDecoration: 'none',
                transition: 'border-color 0.2s ease',
              }}
            >
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--c2)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Dernier article
              </span>
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4 }}>
                {lastArticle.title}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--c3)', fontWeight: 600, marginTop: '0.1rem' }}>
                Lire →
              </span>
            </Link>
          )}

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
            {stats.map(({ value, label }) => (
              <div
                key={label}
                style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '0.75rem 0.5rem',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'Lora, serif',
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    background: 'var(--grad)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1.2,
                  }}
                >
                  {value}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--muted)', lineHeight: 1.3, marginTop: '0.2rem' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Ils m'ont fait confiance */}
          <div
            style={{
              background: 'var(--off)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '0.9rem',
            }}
          >
            <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.5rem' }}>
              Ils m&apos;ont fait confiance
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {clients.map((c) => (
                <span
                  key={c}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: 'white',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                    padding: '0.15rem 0.5rem',
                    color: 'var(--ink)',
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
