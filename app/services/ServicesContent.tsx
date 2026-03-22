'use client'

import Link from 'next/link'
import { useTranslation } from '@/lib/i18n'

export default function ServicesContent() {
  const { t } = useTranslation()
  const s = t.services

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '5rem 6% 3rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '0.75rem' }}>
            {s.hero.label}
          </p>
          <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.7rem)', color: 'var(--ink)', lineHeight: 1.4, marginBottom: '1.25rem', marginTop: '1rem' }}>
            {s.hero.h1.before}{' '}
            <span style={{ background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {s.hero.h1.highlight}
            </span>
            {s.hero.h1.after}
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75 }}>
            {s.hero.description}
          </p>
        </div>
      </section>

      {/* Offre 1 — Développement */}
      <section style={{ padding: '3rem 6%', background: 'var(--off)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="offre-grid">
            <div>
              <span style={{ display: 'inline-block', background: 'var(--grad)', color: 'white', fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '99px', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
                {s.offer1.badge}
              </span>
              <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.6rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '1rem' }}>
                {s.offer1.title}
              </h2>
              <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                {s.offer1.p1}
              </p>
              <p
                style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.75rem' }}
                dangerouslySetInnerHTML={{ __html: s.offer1.p2 }}
              />
              <Link href="#contact" className="btn-primary">{s.offer1.cta}</Link>
            </div>
            <div className="offre-list-col">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {(s.offer1.bullets as unknown as string[]).map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--ink)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offre 2 & 3 */}
      <section style={{ padding: '3rem 6%', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="offre-grid">
          {/* Coaching */}
          <div className="card" style={{ padding: '2rem', background: 'white' }}>
            <span style={{ display: 'inline-block', background: 'var(--off)', border: '1px solid var(--border)', borderRadius: '99px', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.65rem', color: 'var(--c3)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              {s.coaching.badge}
            </span>
            <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.4rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
              {s.coaching.title}
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {s.coaching.description}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {(s.coaching.bullets as unknown as string[]).map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--ink)' }}>
                  <span style={{ color: 'var(--c2)', fontWeight: 700, flexShrink: 0 }}>·</span>{b}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              {s.coaching.cta}
            </Link>
          </div>

          {/* Audit */}
          <div className="card" style={{ padding: '2rem', background: 'white' }}>
            <span style={{ display: 'inline-block', background: 'var(--off)', border: '1px solid var(--border)', borderRadius: '99px', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.65rem', color: 'var(--c3)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              {s.audit.badge}
            </span>
            <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.4rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
              {s.audit.title}
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {s.audit.description}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {(s.audit.bullets as unknown as string[]).map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--ink)' }}>
                  <span style={{ color: 'var(--c2)', fontWeight: 700, flexShrink: 0 }}>·</span>{b}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              {s.audit.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Ma méthode */}
      <section style={{ padding: '4rem 6%', background: 'var(--off)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '0.5rem' }}>
              {s.method.label}
            </p>
            <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2rem)', color: 'var(--ink)', margin: 0 }}>
              {s.method.title}
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="method-grid">
            {(s.method.steps as unknown as { n: string; title: string; text: string }[]).map(({ n, title, text }) => (
              <div key={n} className="card" style={{ padding: '1.5rem', background: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 800, fontSize: '2.5rem', color: 'rgba(24,176,232,0.1)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '0.6rem' }}>{title}</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/blog/methode-infaillible-projets-power-platform" className="btn-outline" style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
              {s.method.readMore}
            </Link>
          </div>
        </div>
      </section>

      {/* Outil — OneDrive Path Checker */}
      <section style={{ padding: '4rem 6%', background: '#ffffff', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '0.5rem' }}>
              {s.tool.label}
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="offre-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'linear-gradient(135deg, rgba(96,198,255,0.15) 0%, rgba(24,176,232,0.15) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 3v18h17v-3H7V3z" />
                    <line x1="7" y1="7" x2="10" y2="7" />
                    <line x1="7" y1="11" x2="10" y2="11" />
                    <line x1="7" y1="15" x2="10" y2="15" />
                    <line x1="11" y1="18" x2="11" y2="15" />
                    <line x1="15" y1="18" x2="15" y2="15" />
                    <line x1="19" y1="18" x2="19" y2="15" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.3rem', color: 'var(--ink)', margin: 0 }}>
                  {s.tool.title}
                </h3>
              </div>
              <p
                style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '0.5rem' }}
                dangerouslySetInnerHTML={{ __html: s.tool.p1 }}
              />
              <p
                style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.75rem' }}
                dangerouslySetInnerHTML={{ __html: s.tool.p2 }}
              />
              <Link href="https://onedrivepathchecker.com/" target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ display: 'inline-flex', padding: '0.6rem 1.3rem', fontSize: '0.9rem' }}>
                {s.tool.cta}
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {(s.tool.features as unknown as { title: string; text: string }[]).map(({ title, text }, i) => {
                const icons = [
                  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
                  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c2)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" /><rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" /></svg>,
                  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
                  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c2)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>,
                ]
                return (
                  <div key={title} className="card" style={{ padding: '1.25rem', background: 'var(--off)' }}>
                    <div style={{ width: 40, height: 40, borderRadius: '10px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.6rem', border: '1px solid var(--border)' }}>{icons[i]}</div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--ink)', marginBottom: '0.3rem' }}>{title}</div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.5, margin: 0 }}>{text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA contact */}
      <section id="contact" style={{ padding: '5rem 6%', background: 'var(--off)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--ink)', marginBottom: '1rem' }}>
            {s.cta.title}
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            {s.cta.description}
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">
              {s.cta.contact}
            </Link>
            <a href="https://linkedin.com/in/juliebredeche" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
              {s.cta.linkedin}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
