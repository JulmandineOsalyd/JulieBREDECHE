import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Qui suis-je ? — Julie Bredeche',
  description:
    'Consultante Microsoft 365 indépendante depuis 5 ans. Spécialiste SharePoint, Power Platform et Copilot Studio. Découvrez mon parcours et mes valeurs.',
  openGraph: {
    title: 'Qui suis-je ? — Julie Bredeche',
    description: 'Consultante Microsoft 365 indépendante depuis 6 ans.',
    url: 'https://juliebredeche.pro/qui-suis-je',
    type: 'profile',
  },
}


const valeurs = [
  { icon: '🎯', title: 'Pragmatisme', text: 'Je livre des solutions qui fonctionnent dans votre contexte réel, pas des prototypes qui s\'arrêtent à la démo.' },
  { icon: '📚', title: 'Transmission', text: 'Chaque projet inclut de la documentation et du transfert de compétences pour que vos équipes restent autonomes.' },
  { icon: '🔍', title: 'Rigueur', text: 'Analyse des besoins approfondie, architecture pensée pour durer, tests exhaustifs avant toute mise en production.' },
  { icon: '🤝', title: 'Transparence', text: 'Avancement hebdomadaire, estimation honnête des délais, et alertes proactives dès qu\'un risque est identifié.' },
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
            <h1 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Consultante Microsoft 365{' '}
              <em style={{ fontStyle: 'italic', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                indépendante
              </em>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            Spécialiste SharePoint et Power Platform depuis plus de 10 ans, j’accompagne les directions métiers dans la <b>modernisation de leurs outils collaboratifs</b>, l’<b>automatisation de processus</b> et la <b>structuration efficace des contenus,</b> en m’appuyant sur les solutions Microsoft 365.            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/portfolio" className="btn-primary">Voir mon portfolio</Link>
              <Link href="https://linkedin.com/in/juliebredeche" target="_blank" rel="noopener noreferrer" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
              Voir mon profil LinkedIn</Link>
            </div>
          </div>

          {/* Avatar card */}
          <div style={{ background: 'linear-gradient(160deg, #f0f8ff 0%, #e6f4fd 100%)', borderRadius: '20px', border: '1px solid var(--border)', padding: '2rem', textAlign: 'center' }}>
            <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', boxShadow: '0 8px 24px rgba(15,95,173,0.25)' }}>
              <span style={{ color: 'white', fontWeight: 800, fontSize: '2rem' }}>JB</span>
            </div>
            <div style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.2rem', color: 'var(--ink)', marginBottom: '0.25rem' }}>Julie Bredeche</div>
            <div style={{ color: 'var(--muted)', fontSize: '0.875rem', marginBottom: '0.25rem' }}>Consultante Microsoft 365</div>
            <div style={{ color: 'var(--c3)', fontWeight: 600, fontSize: '0.8rem', marginBottom: '1.25rem' }}>Osalyd Consulting</div>

            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', textAlign: 'center' }}>
              {[{ v: '5+', l: 'ans' }, { v: '30+', l: 'projets' }, { v: '100%', l: 'satisfaits' }].map(({ v, l }) => (
                <div key={l}>
                  <div style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.4rem', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{v}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{l}</div>
                </div>
              ))}
            </div>

            <a href="https://linkedin.com/in/juliebredeche" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ marginTop: '1.25rem', width: '100%', justifyContent: 'center' }} aria-label="Profil LinkedIn Julie Bredeche">
              Voir sur LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Biographie */}
      <section style={{ padding: '3rem 6%', background: 'var(--off)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '1.5rem' }}>
            Mon parcours
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--muted)', lineHeight: 1.75, fontSize: '1rem' }}>
            <p>
              Mon aventure avec Microsoft 365 a commencé en 2016, lorsque j&apos;ai été chargée de déployer SharePoint pour une entreprise de services. J&apos;ai immédiatement été fascinée par la puissance de la plateforme — et par le fossé entre ce qu&apos;elle peut faire et ce que les équipes savent réellement en tirer.
            </p>
            <p>
              Après plusieurs années en ESN à accompagner des grands comptes (énergie, finance, culture), j&apos;ai créé Osalyd Consulting en 2019 pour travailler directement avec des entreprises qui ont de vrais projets de transformation numérique. La liberté du freelance m&apos;a permis de me spécialiser profondément plutôt que de rester généraliste.
            </p>
            <p>
              L&apos;arrivée de la Power Platform, puis de Copilot Studio, a changé ma pratique. Ce qui prenait 6 mois de développement peut maintenant être livré en 3 semaines. Mais la technologie ne suffit pas : c&apos;est l&apos;adoption et la formation des équipes qui font la différence entre un projet réussi et un outil abandonné.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section style={{ padding: '4rem 6%', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '2rem', textAlign: 'center' }}>
            Mes valeurs
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }} className="valeurs-grid">
            {valeurs.map(({ icon, title, text }) => (
              <div key={title} className="card" style={{ padding: '1.5rem' }}>
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }} aria-hidden="true">{icon}</span>
                <h3 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <section style={{ padding: '4rem 6%', background: '#ffffff', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '1rem' }}>
          Vous avez un projet Microsoft 365 ?
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '1.75rem' }}>
          Discutons de vos besoins et voyons comment je peux vous aider.
        </p>
        <Link href="/offres" className="btn-primary">Voir mes offres →</Link>
      </section>

    </>
  )
}
