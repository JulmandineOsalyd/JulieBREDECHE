import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'A propos — Julie BREDECHE',
  description:
    'Consultante Microsoft 365 indépendante depuis 5 ans. Spécialiste SharePoint, Power Platform et Copilot Studio. Découvrez mon parcours et mes valeurs.',
  openGraph: {
    title: 'A propos — Julie BREDECHE',
    description: 'Consultante Microsoft 365 indépendante depuis 6 ans.',
    url: 'https://juliebredeche.pro/a-propos',
    type: 'profile',
  },
}

const approche = [
  {
    icon: '💡',
    title: 'Mon approche',
    items: [
      'Compréhension des enjeux métiers',
      'Cadrage des besoins',
      'Conception de solutions sur-mesure et évolutives',
      'Intégration dans l\'écosystème IT existant',
      'Accompagnement à l\'adoption',
    ],
  },
  {
    icon: '🔍',
    title: 'Ma valeur ajoutée',
    items: [
      'Vision technico-fonctionnelle',
      'Discours accessible pour les métiers',
      'Capacité d’arbitrage entre besoins, contraintes et priorités',
      'Rigueur et sens du détail',
      'Documentation claire et maintenable',
    ],
  },
  {
    icon: '🏢',
    title: 'Périmètre d\'intervention',
    items: [
      'Accompagnement au changement et adoption',
      'Architecture de solutions',
      'Conception et développement de solutions sur-mesure',
      'Gouvernance et bonnes pratiques',
      'Accompagnement au changement',
    ],
  },
]

export default function QuiSuisJePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '5rem 6% 3rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: '4rem', alignItems: 'center' }} className="qs-hero-grid">
          <div>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '0.75rem' }}>
              À propos
            </p>

            {/* Avatar + Titres */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 100, height: 100, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, boxShadow: '0 6px 20px rgba(15,95,173,0.2)' }}>
                <Image
                  src="/images/JBR.png"
                  alt="Julie BREDECHE"
                  width={100}
                  height={100}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <div>
                <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', color: 'var(--ink)', lineHeight: 1.2, margin: 0 }}>
                  Julie BREDECHE
                </h1>
                <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--ink)', lineHeight: 1.3, margin: '0.25rem 0 0' }}>
                  Consultante{' '}
                  <span style={{ background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Microsoft 365
                  </span>
                </h2>
              </div>
            </div>
            <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Spécialiste SharePoint et Power Platform depuis plus de 10 ans, j&apos;accompagne les directions métiers dans la <b>modernisation de leurs outils collaboratifs</b>, l&apos;<b>automatisation de processus</b> et la <b>structuration efficace des contenus,</b> en m&apos;appuyant sur les solutions Microsoft 365.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/portfolio" className="btn-primary">Mon portfolio</Link>
              <Link href="https://linkedin.com/in/juliebredeche" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Certification card */}
          <div style={{ background: 'linear-gradient(160deg, #f0f8ff 0%, #e6f4fd 100%)', borderRadius: '20px', border: '1px solid var(--border)', padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <a
              href="https://learn.microsoft.com/en-us/users/juliebredeche-7611/credentials/c3637ace7f120052"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
            >
              <Image
                src="/images/MSCertif.png"
                alt="Microsoft Certified: Power Platform Solution Architect Expert"
                width={140}
                height={140}
                style={{ objectFit: 'contain' }}
              />
              <span style={{ fontSize: '0.95rem', color: 'var(--c3)', fontWeight: 600, lineHeight: 1.9, textAlign: 'center' }}>
                Certifiée Microsoft : <br/><u>Power Platform Solution Architect Expert</u> 
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Biographie */}
      <section style={{ padding: '3rem 6%', background: 'var(--off)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '1.5rem' }}>
            Mon parcours
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--muted)', lineHeight: 1.75, fontSize: '1rem' }}>
            <p>
              Mon aventure avec Microsoft 365 a débuté en 2014, en participant au déploiement du plus gros intranet SharePoint pour un grand groupe de l&apos;énergie.
              J&apos;ai immédiatement été fascinée par la puissance et les possibilités infinies de SharePoint ! 
              Très vite, je me suis spécialisée dans l&apos;automatisation de processus avec SharePoint Designer et Nintex, avant l&apos;arrivée de Power Automate.
            </p>
            <p>
              Après avoir intégré une ESN spécialisée autour des outils Microsoft 365 et réalisé des missions pour plusieurs grands comptes, 
              j&apos;ai créé Osalyd Consulting en 2020. Cette liberté entrepreneuriale m&apos;a permis de me concentrer sur mes domaines d&apos;excellence : SharePoint et la Power Platform.
            </p>
            <p>
              Le fossé entre ce que la technologie peut faire et ce que les équipes savent en faire reste important. 
              C&apos;est là que je fais la différence, transformer des besoins métiers en outils, en solutions concrètes intégrées dans l&apos;écosystème M365.
            </p>
            <p>
              Issue d&apos;une école de commerce, j&apos;assure une double compétence technique et fonctionnelle. 
              Mon appétence naturelle pour la technique m&apos;a conduite à maîtriser en profondeur l&apos;ensemble des technologies Microsoft 365 que je déploie.
            </p>
</div>

        </div>
      </section>

      {/* Mon Approche */}
      <section style={{ padding: '4rem 6%', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '2rem', textAlign: 'center' }}>
            Mon Approche
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="valeurs-grid">
            {approche.map(({ icon, title, items }) => (
              <div key={title} className="card" style={{ padding: '1.75rem' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }} aria-hidden="true">{icon}</span>
                <h3 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>{title}</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {items.map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.55 }}>
                      <span style={{ color: 'var(--c2)', fontWeight: 700, flexShrink: 0 }}>·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 6%', background: '#ffffff', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '1rem' }}>
          Vous avez un projet Microsoft 365 ?
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '1.75rem' }}>
          Discutons de vos besoins et voyons comment je peux vous aider.
        </p>
        <Link href="/services" className="btn-primary">Voir mes offres →</Link>
      </section>
    </>
  )
}
