'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/lib/i18n'

const approachIcons = [
  // Conception sur-mesure
  (
    <svg key="icon-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  ),
  // Valeur ajoutée
  (
    <svg key="icon-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  // Périmètre d'intervention
  (
    <svg key="icon-2" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
]

const iconColors = ['var(--c3)', 'var(--c2)', '#4dffd6']

export default function AboutContent() {
  const { t } = useTranslation()
  const a = t.about

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '5rem 6% 3rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '4rem', alignItems: 'center' }} className="qs-hero-grid">
          <div>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '1.75rem' }}>
              {a.sectionLabel}
            </p>

            {/* Avatar + Titres */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, boxShadow: '0 6px 20px rgba(15,95,173,0.2)' }}>
                <Image
                  src="/images/JBR.png"
                  alt="Julie BREDECHE"
                  width={100}
                  height={100}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div>
                <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--ink)', lineHeight: 1.2, margin: 0 }}>
                  <span style={{ background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Julie BREDECHE{' '}
                  </span>
                </h1>
                <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--ink)', lineHeight: 1.3, margin: '0.75rem 0 0' }}>
                  {a.role}
                </h2>
              </div>
            </div>
            <p
              style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '2.15rem' }}
              dangerouslySetInnerHTML={{ __html: a.speciality }}
            />
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="https://linkedin.com/in/juliebredeche" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                {a.linkedin}
              </Link>
            </div>
          </div>

          {/* Certification card */}
          <div style={{ background: 'linear-gradient(160deg, #f0f8ff 0%, #e6f4fd 100%)', borderRadius: '20px', border: '1px solid var(--border)', padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <a
              href="https://learn.microsoft.com/en-us/users/juliebredeche-7611/credentials/c3637ace7f120052"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
            >
              <Image
                src="/images/MSCertif.png"
                alt="Microsoft Certified: Power Platform Solution Architect Expert"
                width={140}
                height={140}
                style={{ objectFit: 'contain' }}
              />
              <span style={{ fontSize: '0.95rem', color: 'var(--c3)', fontWeight: 600, lineHeight: 1.9, textAlign: 'center' }}>
                {a.certif.split(':')[0]} :<br /><u>{a.certif.split(':')[1]?.trim()}</u>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Biographie */}
      <section style={{ padding: '3rem 6%', background: 'var(--off)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '1.5rem' }}>
            {a.journeyTitle}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--muted)', lineHeight: 1.75, fontSize: '1rem' }}>
            {a.journey.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Mon Approche */}
      <section style={{ padding: '4rem 6%', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '2rem', textAlign: 'center' }}>
            {a.approachTitle}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="valeurs-grid">
            {a.approach.map(({ title, items }, idx) => (
              <div key={title} className="card" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: iconColors[idx], flexShrink: 0 }}>{approachIcons[idx]}</span>
                  {title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.55 }}>
                      <span style={{ color: 'var(--c2)', fontWeight: 700, flexShrink: 0 }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 6%', background: '#ffffff', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '1rem' }}>
          {a.cta.titlePre}{' '}
          <span style={{ background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Microsoft 365
          </span>
          {a.cta.titlePost ? ` ${a.cta.titlePost}` : ''}
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '1.75rem' }}>
          {a.cta.description}
        </p>
        <Link href="/contact" className="btn-primary">{a.cta.button}</Link>
      </section>
    </>
  )
}
