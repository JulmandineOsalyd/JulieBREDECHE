import Link from 'next/link'
import Image from 'next/image'
import type { ArticleMeta } from '@/lib/mdx'

const clients = ['TotalEnergies', 'PwC', 'Sacem', 'BPI France', 'Groupama', 'Medtronic', 'PMU','Candriam']
const tags = ['Microsoft 365', 'SharePoint', 'Power Automate', 'PowerApps', 'Copilot Studio']

const stats = [
  { value: '10+', label: 'ans d\'expérience' },
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
              Consultante indépendante Microsoft 365
            </span>
          </div>

          {/* H1 */}
          <h1
            className="animate-fadeUp animate-fadeUp-2"
            style={{
              fontFamily: 'Lora, serif',
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
              color: 'var(--ink)',
              lineHeight: 1.3,
              marginBottom: '1.25rem',
              marginTop: '1.25rem',
              width:'97%',
            }}
          >
            Je vous aide à tirer le meilleur parti de{' '}
            <em style={{ fontStyle: 'italic', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              SharePoint
            </em>
            , la{' '}
            <em style={{ fontStyle: 'italic', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Power Platform
            </em>{' '}
            et{' '}
            <em style={{ fontStyle: 'italic', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Copilot Studio
            </em>
          </h1>

          {/* Description */}
          <p
            className="animate-fadeUp animate-fadeUp-3"
            style={{
              fontSize: '1.05rem',
              color: 'var(--muted)',
              lineHeight: 1.7,
              maxWidth: '680px',
              marginBottom: '2.95rem',
            }}
          >
            Je transforme vos processus métier en applications et automatisations Microsoft 365 qui vous font gagner en productivité. <br/>
          
          </p>



          {/* CTAs */}
          <div
            className="animate-fadeUp animate-fadeUp-4"
            style={{ display: 'flex', alignItems: 'center', gap: '1.55rem', flexWrap: 'wrap', marginBottom: '2.55rem',}}
          >
            <Link href="/offres" className="btn-primary">
              Voir mes offres →
            </Link>
            <Link href="/blog" className="btn-ghost">
              Lire mes articles ↓
            </Link>
          </div>
        </div>

        {/* Right column — Profile card */}
        <div
          className="animate-fadeUp animate-fadeUp-2"
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
            {/* Gradient ring around avatar */}
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
              <div style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--ink)' }}>
                Julie BREDECHE
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.45 }}>
                Consultante indépendante<br/>SharePoint · Power Platform · Copilot Studio
              </div>
            </div>
          </div>



          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
            {stats.map(({ value, label }) => (
              <div
                key={label}
                style={{
                  background: 'var(--off)',
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

                    {/* Clients strip */}
          <div
            className="animate-fadeUp animate-fadeUp-3"
            style={{ marginTop: '1.5rem' }}
          >
            <p style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.6rem' }}>
              Ils m'ont fait confiance :
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
