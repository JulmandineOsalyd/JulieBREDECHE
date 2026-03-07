'use client'

import { useState } from 'react'
import { sendContactEmail } from './actions'

const subjects = [
  'Projet SharePoint',
  'Projet Power Automate / Power Apps',
  'Copilot Studio / Agent IA',
  'Audit Microsoft 365',
  'Formation & accompagnement',
  'Autre',
]

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.72rem 1rem',
  border: '1.5px solid var(--border)',
  borderRadius: '10px',
  fontSize: '0.9rem',
  color: 'var(--ink)',
  background: '#ffffff',
  outline: 'none',
  fontFamily: 'inherit',
  boxSizing: 'border-box',
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    const result = await sendContactEmail(form)
    setStatus(result.success ? 'success' : 'error')
  }

  if (status === 'success') {
    return (
      <div className="card" style={{ padding: '3rem', textAlign: 'center' }}>
        <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(96,198,255,0.2) 0%, rgba(15,95,173,0.15) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.4rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>
          Message envoyé !
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
          Merci pour votre message. Je vous réponds sous 24h ouvrées.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Nom + Email */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }} className="contact-fields">
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.4rem' }}>
            Nom <span style={{ color: 'var(--c3)' }}>*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            placeholder="Votre nom"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.4rem' }}>
            Email <span style={{ color: 'var(--c3)' }}>*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            placeholder="votre@email.com"
            style={inputStyle}
          />
        </div>
      </div>

      {/* Sujet */}
      <div style={{ marginBottom: '1.25rem' }}>
        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.4rem' }}>
          Sujet <span style={{ color: 'var(--c3)' }}>*</span>
        </label>
        <select
          required
          value={form.subject}
          onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
          style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%234a6080' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.9rem center', paddingRight: '2.5rem', cursor: 'pointer' }}
        >
          <option value="">Choisir un sujet...</option>
          {subjects.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {/* Message */}
      <div style={{ marginBottom: '1.75rem' }}>
        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '0.4rem' }}>
          Message <span style={{ color: 'var(--c3)' }}>*</span>
        </label>
        <textarea
          required
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="Décrivez votre projet ou votre besoin..."
          rows={6}
          style={{ ...inputStyle, resize: 'vertical', minHeight: '150px', lineHeight: 1.65 }}
        />
      </div>

      {/* Erreur */}
      {status === 'error' && (
        <p style={{ fontSize: '0.85rem', color: '#c53030', marginBottom: '1rem', padding: '0.75rem 1rem', background: '#fff5f5', borderRadius: '8px', border: '1px solid #fed7d7' }}>
          Une erreur s&apos;est produite. Veuillez réessayer ou me contacter directement sur LinkedIn.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary"
        style={{ width: '100%', justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer', border: 'none' }}
      >
        {status === 'loading' ? 'Envoi en cours…' : 'Envoyer le message →'}
      </button>
    </form>
  )
}
