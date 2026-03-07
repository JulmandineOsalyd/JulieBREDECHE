import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mes offres — Julie Bredeche',
  description:
    'Applications PowerApps, automatisations Power Automate, agents Copilot Studio, coaching et audit Microsoft 365. Découvrez mes offres et ma méthode.',
  openGraph: {
    title: 'Mes offres — Julie Bredeche',
    description: 'Applications PowerApps, Power Automate, agents Copilot Studio, coaching et audit M365.',
    url: 'https://juliebredeche.pro/offres',
    type: 'website',
  },
}

const methodSteps = [
  { n: '01', title: 'Comprendre', text: 'Ateliers de cadrage avec les parties prenantes pour identifier les vrais besoins, les contraintes techniques et les critères de succès.' },
  { n: '02', title: 'Cadrer', text: 'Rédaction du cahier des charges fonctionnel, architecture technique, choix des composants Microsoft 365 et estimation détaillée.' },
  { n: '03', title: 'Schématiser', text: 'Maquettes des interfaces et des flux. Validation par vos utilisateurs clés avant d\'écrire la première ligne de code.' },
  { n: '04', title: 'Développer', text: 'Développement itératif par sprints de 2 semaines. Démos régulières, ajustements continus basés sur vos retours.' },
  { n: '05', title: 'Tester', text: 'Tests fonctionnels, tests de performance, tests utilisateurs. Résolution de tous les bugs avant mise en production.' },
  { n: '06', title: 'Maintenir', text: 'Documentation complète, formation des administrateurs, forfait de maintenance mensuel optionnel.' },
]

export default function OffresPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '5rem 6% 3rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '0.75rem' }}>
            Ce que je propose
          </p>
          <h1 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Des solutions Microsoft 365{' '}
            <em style={{ fontStyle: 'italic', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              qui livrent
            </em>
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75 }}>
            De l&apos;application sur mesure à l&apos;agent conversationnel, je conçois et déploie des outils qui s&apos;intègrent dans vos workflows existants et que vos équipes adoptent vraiment.
          </p>
        </div>
      </section>

      {/* Offre 1 — Développement */}
      <section style={{ padding: '3rem 6%', background: 'var(--off)', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="offre-grid">
            <div>
              <span style={{ display: 'inline-block', background: 'var(--grad)', color: 'white', fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.75rem', borderRadius: '99px', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
                Offre principale
              </span>
              <h2 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.6rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '1rem' }}>
                Applications PowerApps, Power Automate & Agents Copilot
              </h2>
              <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Je conçois et développe des applications métier, des automatisations intelligentes et des agents conversationnels sur mesure pour votre organisation. Du cadrage à la mise en production, en passant par la formation de vos équipes.
              </p>
              <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                Délai type : <strong style={{ color: 'var(--ink)' }}>20 à 30 jours</strong> pour une application complète TPE/PME.
              </p>
              <Link href="#contact" className="btn-primary">Parlons de votre projet</Link>
            </div>
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Applications PowerApps Canvas et Model-driven sur mesure',
                  'Flux Power Automate : approbations, alertes, synchronisations avec ERP/CRM',
                  'Agents Copilot Studio connectés à SharePoint et vos bases de données',
                  'Portails SharePoint Online : intranet, extranet, espaces projet',
                  'Documentation technique et fonctionnelle incluse',
                  'Formation des administrateurs et utilisateurs finaux',
                  'Forfait maintenance mensuel (support, évolutions mineures)',
                ].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                    <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span style={{ fontSize: '0.9rem', color: 'var(--ink)', lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offre 2 & 3 */}
      <section style={{ padding: '3rem 6%', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="offre-grid">
          {/* Coaching */}
          <div className="card" style={{ padding: '2rem', background: 'white' }}>
            <span style={{ display: 'inline-block', background: 'var(--off)', border: '1px solid var(--border)', borderRadius: '99px', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.65rem', color: 'var(--c3)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Coaching
            </span>
            <h2 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.4rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
              Coaching Power Automate
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Montez en compétence sur Power Automate avec un accompagnement personnalisé. Idéal pour les équipes IT qui veulent devenir autonomes sur la plateforme, ou pour les métiers qui souhaitent automatiser leurs tâches répétitives.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Sessions 1:1 en visio ou présentiel (Paris)', 'Cas pratiques sur vos flux existants', 'Bonnes pratiques, patterns et anti-patterns', 'Support entre les sessions par email/Teams', 'Programme sur mesure selon votre niveau'].map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--ink)' }}>
                  <span style={{ color: 'var(--c2)', fontWeight: 700, flexShrink: 0 }}>·</span>{b}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              Demander un coaching
            </Link>
          </div>

          {/* Audit */}
          <div className="card" style={{ padding: '2rem', background: 'white' }}>
            <span style={{ display: 'inline-block', background: 'var(--off)', border: '1px solid var(--border)', borderRadius: '99px', fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.65rem', color: 'var(--c3)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '1rem' }}>
              Audit & Conseil
            </span>
            <h2 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.4rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
              Audit SharePoint & Power Platform
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Diagnostic complet de votre environnement Microsoft 365 avec recommandations actionnables et roadmap priorisée. Idéal avant de lancer un grand chantier ou pour reprendre un existant en désordre.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Analyse de la gouvernance SharePoint (permissions, hub sites, taxonomie)', 'Revue des flux Power Automate existants (performance, sécurité)', 'Évaluation des licences et de leur utilisation', 'Rapport d\'audit avec score de maturité', 'Roadmap priorisée avec ROI estimé pour chaque action'].map((b) => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--ink)' }}>
                  <span style={{ color: 'var(--c2)', fontWeight: 700, flexShrink: 0 }}>·</span>{b}
                </li>
              ))}
            </ul>
            <Link href="#contact" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
              Demander un audit
            </Link>
          </div>
        </div>
      </section>

      {/* Ma méthode */}
      <section style={{ padding: '4rem 6%', background: 'var(--off)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '0.5rem' }}>
              Comment je travaille
            </p>
            <h2 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2rem)', color: 'var(--ink)', margin: 0 }}>
              Ma méthode en 6 étapes
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="method-grid">
            {methodSteps.map(({ n, title, text }) => (
              <div key={n} className="card" style={{ padding: '1.5rem', background: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'Lora, serif', fontWeight: 800, fontSize: '2.5rem', color: 'rgba(24,176,232,0.1)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '0.6rem' }}>{title}</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA contact */}
      <section id="contact" style={{ padding: '5rem 6%', background: '#ffffff', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--ink)', marginBottom: '1rem' }}>
            Prêt(e) à démarrer ?
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Décrivez-moi votre projet en quelques lignes par email ou sur LinkedIn. Je vous réponds sous 24h avec une proposition d&apos;appel de découverte (30 min, gratuit).
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:julie.bredeche@osalydconsulting.com" className="btn-primary">
              Envoyer un email
            </a>
            <a href="https://linkedin.com/in/juliebredeche" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Contacter sur LinkedIn
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
