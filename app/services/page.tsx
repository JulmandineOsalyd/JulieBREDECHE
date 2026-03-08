import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mes services — Julie Bredeche',
  description:
    'Applications PowerApps, automatisations Power Automate, agents Copilot Studio, coaching et audit Microsoft 365. Découvrez mes services et ma méthode.',
  openGraph: {
    title: 'Mes services — Julie Bredeche',
    description: 'Applications PowerApps, Power Automate, agents Copilot Studio, coaching et audit M365.',
    url: 'https://juliebredeche.pro/services',
    type: 'website',
  },
}

const methodSteps = [
  { n: '01', title: 'Comprendre le besoin', text: 'Avant de parler solution, je pose les bonnes questions : combien d\'utilisateurs, quelle volumétrie, des externes ? Cela valide la faisabilité technique et identifie les contraintes dès le départ.' },
  { n: '02', title: 'Cadrer et chiffrer', text: 'J\'identifie les fonctionnalités clés par parcours utilisateur, puis je chiffre. Pour une TPE/PME, la plupart de mes projets représentent 20 à 30 jours de prestation au total.' },
  { n: '03', title: 'Schématiser et valider', text: 'Je schématise les processus et crée des maquettes directement dans Power Apps. Résultat : le client comprend la logique, précise ses besoins — et je sais dans quel ordre avancer.' },
  { n: '04', title: 'Développer en agilité', text: 'Dès qu\'une fonctionnalité est prête, je la présente et laisse le client la tester pendant que je poursuis. Si de nouveaux besoins émergent, on arbitre ensemble sans dépasser le chiffrage.' },
  { n: '05', title: 'Tester et déployer', text: 'Tests de bout en bout, utilisateurs pilotes, cahier de tests si les règles de gestion sont complexes. Documentation technico-fonctionnelle complète livrée avec le projet.' },
  { n: '06', title: 'Maintenir et faire évoluer', text: 'Gestion des erreurs, reporting des incidents, et forfait annuel optionnel couvrant la correction des anomalies et les petites évolutions.' },
]

export default function OffresPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '5rem 6% 3rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '0.75rem' }}>
            offre de services
          </p>
          <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.7rem)', color: 'var(--ink)', lineHeight: 1.4, marginBottom: '1.25rem', marginTop: '1rem' }}>
            Mon{' '}
            <span style={{ background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              expertise Microsoft 365
            </span>
            , à chaque étape de votre projet
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75 }}>
          Conception de solutions, coaching, audit : tout ce dont vous avez besoin pour tirer le meilleur de Microsoft 365, où que vous en soyez.          </p>
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
              <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.6rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '1rem' }}>
                Solutions PowerApps, Power Automate & Agents Copilot
              </h2>
              <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Je conçois et développe des applications métier, des automatisations intelligentes et des agents conversationnels sur mesure pour votre organisation. Du cadrage à la mise en production, en passant par la formation de vos équipes.
              </p>
              <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                Charge moyenne : <strong style={{ color: 'var(--ink)' }}>20 à 30 jours</strong> pour une solution complète.
              </p>
              <Link href="#contact" className="btn-primary">Parlons de votre projet</Link>
            </div>
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Applications PowerApps Canvas sur mesure',
                  'Flux Power Automate : approbations, alertes, synchronisations avec ERP/CRM',
                  'Agents Copilot Studio connectés à SharePoint et vos bases de données',
                  'Portails SharePoint Online : intranet, extranet, espaces projet',
                  'Formation des administrateurs et utilisateurs finaux',
                  'Documentation technique et fonctionnelle incluse',
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
            <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.4rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
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
            <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.4rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
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
            <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2rem)', color: 'var(--ink)', margin: 0 }}>
              Ma méthode en 6 étapes
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="method-grid">
            {methodSteps.map(({ n, title, text }) => (
              <div key={n} className="card" style={{ padding: '1.5rem', background: 'white', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 800, fontSize: '2.5rem', color: 'rgba(24,176,232,0.1)', lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '0.6rem' }}>{title}</div>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outil — OneDrive Path Checker */}
      <section style={{ padding: '4rem 6%', background: '#ffffff', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '0.5rem' }}>
              Outil complémentaire
            </p>
            <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.6rem, 3vw, 2rem)', color: 'var(--ink)', margin: 0 }}>
              Un outil que j&apos;ai créé pour mes missions
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }} className="offre-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '12px', background: 'linear-gradient(135deg, rgba(96,198,255,0.15) 0%, rgba(24,176,232,0.15) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 3v18h17v-3H7V3z" />
                    <line x1="7" y1="7" x2="10" y2="7" />
                    <line x1="7" y1="11" x2="10" y2="11" />
                    <line x1="7" y1="15" x2="10" y2="15" />
                    <line x1="11" y1="18" x2="11" y2="15" />
                    <line x1="15" y1="18" x2="15" y2="15" />
                    <line x1="19" y1="18" x2="19" y2="15" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.3rem', color: 'var(--ink)', margin: 0 }}>
                  Détecteur de chemins de fichiers trop longs
                </h3>
              </div>
              <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                Lors de mes missions de migration SharePoint, je rencontrais régulièrement des erreurs de synchronisation OneDrive causées par des chemins de fichiers trop longs non détectés par les outils de migration. J&apos;ai donc développé cet outil pour <strong style={{ color: 'var(--ink)' }}>auditer et détecter ces chemins problématiques avant et après migration</strong>, évitant ainsi les mauvaises surprises en production.
              </p>
              <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                Disponible sur le <strong style={{ color: 'var(--ink)' }}>Microsoft Store</strong>, il s&apos;intègre directement dans votre environnement Windows.
              </p>
              <Link href="https://onedrivepathchecker.com/" target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ display: 'inline-flex', padding: '0.6rem 1.3rem', fontSize: '0.9rem' }}>
                Découvrir l&apos;outil →
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: '📁', title: 'Chemins >255 et >400 caractères', text: 'Analyse vos dossiers et identifie les chemins dépassant les limites Windows et SharePoint.' },
                { icon: '⚡', title: '2 modes d\'utilisation', text: 'Idéal pour préparer une migration SharePoint et éviter les erreurs de synchronisation en production.' },
                { icon: '📊', title: 'Rapports détaillés', text: 'Export de la liste des fichiers problématiques avec leur chemin complet pour traitement rapide.' },
                { icon: '🔒', title: '100% Local & sécurisé', text: 'L\'outil est exécuté en local sur votre machine, sans droits d\'administrateurs. Aucune donnée n\'est envoyée sur internet.' },
              ].map(({ icon, title, text }) => (
                <div key={title} className="card" style={{ padding: '1.25rem', background: 'var(--off)' }}>
                  <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }} aria-hidden="true">{icon}</span>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--ink)', marginBottom: '0.35rem' }}>{title}</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.55, margin: 0 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA contact */}
      <section id="contact" style={{ padding: '5rem 6%', background: 'var(--off)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--ink)', marginBottom: '1rem' }}>
            Prêt(e) à démarrer ?
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Décrivez-moi votre projet en quelques lignes. Je vous réponds sous 24h avec une proposition d&apos;appel de découverte (30 min, gratuit).
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">
              Me contacter →
            </Link>
            <a href="https://linkedin.com/in/juliebredeche" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Contacter sur LinkedIn
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
