'use client'

import { useState } from 'react'
import { subscribeToNewsletter } from './newsletter'

export default function NewsletterBar() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    const result = await subscribeToNewsletter(email)
    setStatus(result.success ? 'success' : 'error')
    if (result.success) setEmail('')
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
        {status === 'success' ? (
          <p style={{ color: 'rgba(255,255,255,1)', fontWeight: 700, fontSize: '0.9rem' }}>
            Merci ! Vous recevrez mes prochaines publications par mail.
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
            <button
              type="submit"
              className="btn-primary"
              disabled={status === 'loading'}
              style={{ whiteSpace: 'nowrap', background: 'var(--c2)', opacity: status === 'loading' ? 0.7 : 1 }}
            >
              {status === 'loading' ? 'Inscription...' : "S'abonner"}
            </button>
            {status === 'error' && (
              <p style={{ width: '100%', margin: '0.25rem 0 0', color: 'rgba(255,200,200,1)', fontSize: '0.82rem' }}>
                ❌ Une erreur est survenue, réessayez.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
