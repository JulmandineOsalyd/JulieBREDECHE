import type { Metadata } from 'next'
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
          <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Un projet Microsoft 365 ?{' '}
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
            SharePoint, Power Platform, Copilot Studio ? Décrivez-moi votre besoin, je vous réponds sous 24h ouvrées.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '1rem 6% 5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="card" style={{ padding: '2rem' }}>
            <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.2rem', color: 'var(--ink)', marginBottom: '1.5rem' }}>
              Votre message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
