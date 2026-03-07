import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Julie Bredeche',
  description:
    'Vous avez un projet Microsoft 365 ? Contactez Julie Bredeche, consultante SharePoint, Power Platform et Copilot Studio. Réponse sous 24h.',
  openGraph: {
    title: 'Contact — Julie Bredeche',
    description: 'Contactez Julie Bredeche pour vos projets Microsoft 365.',
    url: 'https://juliebredeche.pro/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '5rem 6% 3rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '0.75rem' }}>
            Parlons de votre projet
          </p>
          <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Un projet{' '}
            <em style={{ fontStyle: 'italic', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Microsoft 365 ?
            </em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
            SharePoint, Power Platform, Copilot Studio — décrivez-moi votre besoin, je vous réponds sous 24h ouvrées.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section style={{ padding: '1rem 6% 5rem', background: '#ffffff' }}>
        <div
          style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem', alignItems: 'start' }}
          className="contact-grid"
        >
          {/* Form */}
          <div className="card" style={{ padding: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.2rem', color: 'var(--ink)', marginBottom: '1.5rem' }}>
              Votre message
            </h2>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Disponibilité */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ width: 40, height: 40, borderRadius: '12px', background: 'linear-gradient(135deg, rgba(96,198,255,0.15) 0%, rgba(24,176,232,0.15) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.9rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <p style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '0.4rem' }}>
                Disponibilité
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                Actuellement disponible pour de nouvelles missions. Je réponds sous 24h ouvrées.
              </p>
            </div>

            {/* Remote */}
            <div className="card" style={{ padding: '1.5rem' }}>
              <div style={{ width: 40, height: 40, borderRadius: '12px', background: 'linear-gradient(135deg, rgba(96,198,255,0.15) 0%, rgba(24,176,232,0.15) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.9rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <p style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '0.4rem' }}>
                Remote & présentiel
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                Missions en France entière. Déplacements ponctuels possibles selon le projet.
              </p>
            </div>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/juliebredeche"
              target="_blank"
              rel="noopener noreferrer"
              style={{ background: 'linear-gradient(160deg, #f0f8ff 0%, #e6f4fd 100%)', border: '1.5px solid var(--border)', borderRadius: '16px', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--c3)" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <div>
                <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--ink)', margin: 0 }}>LinkedIn</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--muted)', margin: 0 }}>Julie Bredeche</p>
              </div>
            </a>

            {/* Offres */}
            <div style={{ background: 'linear-gradient(160deg, #f0f8ff 0%, #e6f4fd 100%)', border: '1.5px solid var(--border)', borderRadius: '16px', padding: '1.25rem' }}>
              <p style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '0.9rem', color: 'var(--ink)', marginBottom: '0.4rem' }}>
                Mes offres
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.75rem', lineHeight: 1.5 }}>
                Découvrez mes prestations avant de me contacter.
              </p>
              <Link href="/services" className="btn-outline" style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem' }}>
                Voir mes offres →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
