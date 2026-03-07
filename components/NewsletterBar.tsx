'use client'

import { useState } from 'react'

export default function NewsletterBar() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    if (process.env.NEXT_PUBLIC_MAILCHIMP_URL) {
      // Mailchimp integration to plug in later
      console.log('Subscribe:', email)
    }
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section
      style={{
        background: 'var(--grad)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '1.75rem 6%',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Left label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }} aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 8l8.5 5.5a2 2 0 002 0L21 8" />
              <path d="M12 12v4M10 16h4" />
            </svg>
          </div>
          <div>
            <p style={{ fontWeight: 700, fontSize: '1rem', color: 'white', margin: 0 }}>
              Recevoir mes prochains articles
            </p>
            <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,1)', margin: 0 }}>
              sur SharePoint, la Power Platform et Copilot Studio
            </p>
          </div>
        </div>

        {/* Form */}
        {submitted ? (
          <p style={{ color: 'rgba(255,255,255,1)', fontWeight: 700, fontSize: '0.9rem' }}>
            Merci ! Vous allez recevoir une confirmation par mail.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}
            aria-label="Formulaire d'abonnement newsletter"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              required
              aria-label="Adresse email"
              style={{
                padding: '0.6rem 1rem',
                border: '1.5px solid var(--border)',
                borderRadius: '10px',
                fontSize: '0.9rem',
                outline: 'none',
                color: 'var(--ink)',
                background: 'white',
                width: '220px',
                transition: 'border-color 0.2s ease',
              }}
            />
            <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap', background: 'var(--c2)' }}>
              S&apos;abonner
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
