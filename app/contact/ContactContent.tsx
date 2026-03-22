'use client'

import { useTranslation } from '@/lib/i18n'
import ContactForm from './ContactForm'

export default function ContactContent() {
  const { t } = useTranslation()
  const c = t.contact

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '5rem 6% 3rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '0.75rem' }}>
            {c.hero.label}
          </p>
          <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            {c.hero.titlePre}{' '}
            <span style={{ background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Microsoft 365
            </span>
            {' '}{c.hero.titlePost}
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
            {c.hero.description}
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '1rem 6% 5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="card" style={{ padding: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.2rem', color: 'var(--ink)', marginBottom: '1.5rem' }}>
              {c.form.title}
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
