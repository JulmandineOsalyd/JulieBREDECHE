import Link from 'next/link'

const popularArticles = [
  { href: '/blog/adoption-copilot-essoufflement', label: 'Adoption de Copilot : éviter l\'essoufflement' },
  { href: '/blog/agents-sans-licence-copilot', label: 'Créer des agents sans licence Copilot' },
  { href: '/blog/onboarding-rh-copilot', label: 'OneDrive Path Checker : l\'outil gratuit' },
  { href: '/blog', label: 'Tous les articles →' },
]

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/qui-suis-je', label: 'Qui suis-je ?' },
  { href: '/offres', label: 'Mes offres' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/outils/onedrive-path-checker', label: 'Outil gratuit' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--off)', borderTop: '1px solid var(--border)' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3.5rem 6% 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '3rem',
        }}
        className="footer-grid"
      >
        {/* Brand column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: 'var(--grad)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span style={{ color: 'white', fontWeight: 800, fontSize: '0.95rem' }}>JB</span>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontFamily: 'Lora, serif', color: 'var(--ink)' }}>
                Julie Bredeche
              </div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Osalyd Consulting</div>
            </div>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
            Consultante Microsoft 365 indépendante, spécialisée SharePoint, Power Platform et Copilot Studio.
          </p>
          <a
            href="https://linkedin.com/in/juliebredeche"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn de Julie Bredeche"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: 'var(--c3)',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.875rem',
              transition: 'color 0.2s ease',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Popular articles */}
        <div>
          <h3
            style={{
              fontFamily: 'Lora, serif',
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--ink)',
              marginBottom: '1rem',
            }}
          >
            Articles populaires
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {popularArticles.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    transition: 'color 0.2s ease',
                  }}
                  className="footer-link"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3
            style={{
              fontFamily: 'Lora, serif',
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--ink)',
              marginBottom: '1rem',
            }}
          >
            Navigation
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    color: 'var(--muted)',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.2s ease',
                  }}
                  className="footer-link"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1.25rem 6%',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
          &copy; 2026 Julie Bredeche · Osalyd Consulting
        </span>
        <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
          Consultante Microsoft 365 · SharePoint · Power Platform · Copilot Studio
        </span>
      </div>

    </footer>
  )
}
