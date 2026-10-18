import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OneDrive Path Checker : chemins de fichiers trop longs',
  description:
    'Détectez les chemins OneDrive >260 caractères qui bloquent la synchronisation. Analyse 100% locale, export CSV, remédiation intégrée.',
  openGraph: {
    title: 'OneDrive Path Checker : chemins de fichiers trop longs',
    description:
      'Détectez les chemins OneDrive >260 caractères qui bloquent la synchronisation. Analyse 100% locale, export CSV, remédiation intégrée.',
    url: 'https://juliebredeche.pro/outils/onedrive-path-checker',
    type: 'website',
  },
}

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" stroke="var(--c3)">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <polyline points="8 11 10.5 13.5 14 9" />
      </svg>
    ),
    title: 'Scans illimités',
    text: 'Avec score de conformité et répartition par gravité.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" stroke="var(--c2)">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Renommage guidé',
    text: "L'élément le plus long est déjà sélectionné, la jauge montre le gain en direct.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" stroke="var(--c3)">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'Suivi des fichiers corrigés',
    text: 'Retrouvez en un clic ce que vous avez déjà traité.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" stroke="var(--c2)">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="12" x2="12" y2="18" />
        <polyline points="9 15 12 18 15 15" />
      </svg>
    ),
    title: 'Rapports PDF et exports CSV',
    text: 'Prêts à partager avec votre équipe ou votre client.',
  },
]

export default function OneDrivePathCheckerPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '5rem 6% 3rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            OneDrive Path Checker
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '640px', margin: '0 auto 2rem' }}>
            Analysez votre arborescence de fichiers et identifiez en quelques secondes tous les chemins trop longs qui empêcheront la synchronisation OneDrive.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://onedrivepathchecker.com/limite-longueur-chemin-onedrive.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Pourquoi cet outil ?
            </a>
            <a
              href="https://onedrivepathchecker.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Accéder à l&apos;outil
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '3rem 6%', background: 'var(--off)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }} className="features-grid">
          {features.map(({ icon, title, text }) => (
            <div key={title} className="card" style={{ padding: '1.25rem', background: 'white', textAlign: 'center' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(96,198,255,0.15) 0%, rgba(24,176,232,0.15) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.75rem',
                }}
              >
                {icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '0.4rem' }}>{title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comment ça marche */}
      <section id="comment-ca-marche" style={{ padding: '4rem 6%', background: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '2rem', textAlign: 'center' }}>
            Comment ça marche ?
          </h2>
          <video
            controls
            playsInline
            preload="metadata"
            poster="/images/DemoPathChecker_FR.jpg"
            aria-label="Démonstration de OneDrive Path Checker"
            style={{ width: '100%', display: 'block', borderRadius: '16px', border: '1px solid var(--border)', boxShadow: '0 8px 32px rgba(15, 95, 173, 0.15)', background: '#000' }}
          >
            <source src="/images/DemoPathChecker_FR.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* CTA essai gratuit */}
      <section style={{ padding: '4rem 6%', background: 'var(--off)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>
          Essayez OneDrive Path Checker gratuitement pendant 24 h
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '1.5rem' }}>
          Détectez dès maintenant les chemins trop longs qui bloquent votre synchronisation OneDrive.
        </p>
        <a
          href="https://onedrivepathchecker.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Démarrer l&apos;essai gratuit
        </a>
      </section>

    </>
  )
}
