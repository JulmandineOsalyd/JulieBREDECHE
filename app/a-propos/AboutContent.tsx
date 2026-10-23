'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/lib/i18n'
import { clients } from '@/lib/clients'

export default function AboutContent() {
  const { t } = useTranslation()
  const a = t.about

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '5rem 6% 3rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '1.75rem' }}>
            {a.sectionLabel}
          </p>

          {/* Avatar + Titres */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 110, height: 110, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, boxShadow: '0 6px 20px rgba(15,95,173,0.2)' }}>
              <Image
                src="/images/JBR.png"
                alt="Julie BREDECHE"
                width={110}
                height={110}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <div>
              <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--ink)', lineHeight: 1.2, margin: 0 }}>
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
            // SAFETY: content is static i18n strings
            dangerouslySetInnerHTML={{ __html: a.speciality }}
          />
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link href="https://linkedin.com/in/juliebredeche" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
              {a.linkedin}
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section style={{ padding: '3rem 6%', background: 'var(--off)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '2rem', textAlign: 'center' }}>
            {a.certificationsTitle}
          </h2>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {a.certifications.map((c) =>
              'badges' in c && c.badges ? (
                <div
                  key={c.href}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem', background: 'linear-gradient(160deg, #f0f8ff 0%, #e6f4fd 100%)', borderRadius: '20px', border: '1px solid var(--border)', padding: '2rem 2.5rem', flex: '1 1 280px', maxWidth: '360px' }}
                >
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    {c.badges.map((b) => (
                      <a
                        key={b.href}
                        href={b.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={b.alt}
                      >
                        <Image
                          src={b.src}
                          alt={b.alt}
                          width={120}
                          height={120}
                          style={{ objectFit: 'contain' }}
                        />
                      </a>
                    ))}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    {c.badges.map((b) => (
                      <a
                        key={b.href}
                        href={b.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.95rem', color: 'var(--c3)', fontWeight: 600, lineHeight: 1.5, textAlign: 'center', textDecoration: 'none' }}
                      >
                        <u>{b.label}</u>
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={c.href}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textDecoration: 'none', background: 'linear-gradient(160deg, #f0f8ff 0%, #e6f4fd 100%)', borderRadius: '20px', border: '1px solid var(--border)', padding: '2rem 2.5rem', flex: '1 1 280px', maxWidth: '360px' }}
                >
                  <Image
                    src={c.src}
                    alt={c.alt}
                    width={130}
                    height={130}
                    style={{ objectFit: 'contain' }}
                  />
                  <span style={{ fontSize: '0.95rem', color: 'var(--c3)', fontWeight: 600, lineHeight: 1.5, textAlign: 'center' }}>
                    <u>{c.label}</u>
                  </span>
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* Biographie */}
      <section style={{ padding: '3rem 6%', background: '#ffffff' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '1.5rem', textAlign: 'center' }}>
            {a.journeyTitle}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--muted)', lineHeight: 1.75, fontSize: '1rem' }}>
            {a.journey.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Ils m'ont fait confiance */}
      <section style={{ padding: '4rem 6%', background: 'var(--off)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '2rem', textAlign: 'center' }}>
            {a.clientsTitle}
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
            {clients.map((c) => (
              <span
                key={c}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--c3)',
                  background: '#ffffff',
                  border: '1px solid var(--border)',
                  borderRadius: '10px',
                  padding: '0.45rem 1rem',
                }}
              >
                {c}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-6 testimonials-grid" style={{ marginTop: '2.5rem' }}>
            {a.testimonials.map((item, i) => (
              <div key={i} className="card p-6 bg-white relative">
                <svg
                  className="absolute top-4 left-4 opacity-30"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="var(--c2)"
                  aria-hidden="true"
                >
                  <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                </svg>
                <p className="text-[0.85rem] text-[var(--ink)] leading-[1.65] italic mb-3 mt-6">
                  “{item.quote}”
                </p>
                <div className="text-[0.8rem] font-bold text-[var(--ink)]">{item.author}</div>
                <div className="text-[0.72rem] text-[var(--muted)] mt-0.5">{item.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
