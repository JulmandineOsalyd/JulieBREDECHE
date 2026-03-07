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
        background: 'var(--off)',
        borderTop: '1px solid var(--border)',
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
          <span style={{ fontSize: '1.25rem' }} aria-hidden="true">
            ✉️
          </span>
          <div>
            <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)', margin: 0 }}>
              Recevoir les nouveaux articles
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', margin: 0 }}>
              SharePoint, Copilot Studio, Power Platform — chaque semaine.
            </p>
          </div>
        </div>

        {/* Form */}
        {submitted ? (
          <p style={{ color: 'var(--c3)', fontWeight: 700, fontSize: '0.9rem' }}>
            Merci ! Vous allez recevoir une confirmation.
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
            <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
              S&apos;abonner
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
