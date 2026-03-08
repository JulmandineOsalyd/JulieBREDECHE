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
  { n: '02', title: 'Cadrer et chiffrer', text: 'J\'identifie les fonctionnalités clés par parcours utilisateur, puis je chiffre. La plupart de mes projets représentent 20 à 30 jours de prestation au total.' },
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
                Je conçois et développe des applications métier, des automatisations intelligentes et des agents conversationnels sur mesure pour votre organisation. Du cadrage à la mise en production, jusqu'à l'adoption.
              </p>
              <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
                Charge moyenne : <strong style={{ color: 'var(--ink)' }}>20 à 30 jours</strong> pour une solution complète.
              </p>
              <Link href="#contact" className="btn-primary">Parlons de votre projet</Link>
            </div>
            <div className="offre-list-col">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  'Applications PowerApps sur(mesure',
                  'Design (UI) et expérience utilisateur (UX)',
                  'Flux Power Automate simples et avancés',
                  'Agents Copilot Studio connectés votre environnement',
                  'Portails SharePoint Online : intranet, extranet, espaces projet',
                  'Formation des administrateurs fonctionnels',
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
              {['Sessions 1:1 en visio', 'Cas pratiques sur vos flux existants', 'Bonnes pratiques, anti-patterns', 'Programme sur mesure selon votre niveau'].map((b) => (
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
              Audit SharePoint
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
Votre environnement SharePoint a grandi au fil du temps, et avec lui, une gestion de plus en plus complexe. Je réalise un diagnostic complet de votre architecture, de vos permissions et de vos usages pour vous donner une vision claire de l'existant et un plan d'action concret pour en tirer le meilleur parti.            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Analyse de l\'architecture des sites',
      'Évaluation des droits et des permissions',
      'Optimisation de la gestion des métadonnées',
      'Gestion du schéma de recherche'].map((b) => (
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
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/blog/methode-infaillible-projets-power-platform" className="btn-outline" style={{ display: 'inline-flex', gap: '0.5rem', alignItems: 'center' }}>
              Lire l&apos;article complet sur ma méthode →
            </Link>
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
              <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: 'rem' }}>
                Développé pour mes missions de migration SharePoint, cet outil <strong style={{ color: 'var(--ink)' }}>détecte les chemins de fichiers trop longs</strong> avant qu&apos;ils ne causent des erreurs de synchronisation OneDrive. </p>
                <p style={{ fontSize: '0.975rem', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1.75rem' }}>Disponible sur le <strong style={{ color: 'var(--ink)' }}>Microsoft Store </strong>avec un essai gratuit de 24h.
              </p>
              <Link href="https://onedrivepathchecker.com/" target="_blank" rel="noopener noreferrer" className="btn-dark" style={{ display: 'inline-flex', padding: '0.6rem 1.3rem', fontSize: '0.9rem' }}>
                Découvrir l&apos;outil →
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                  ),
                  title: 'Limites Windows & SharePoint',
                  text: 'Détecte les chemins dépassant 255 caractères (Windows) et 400 caractères (SharePoint).',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c2)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="3" width="8" height="8" rx="1" />
                      <rect x="13" y="3" width="8" height="8" rx="1" />
                      <rect x="3" y="13" width="8" height="8" rx="1" />
                      <rect x="13" y="13" width="8" height="8" rx="1" />
                    </svg>
                  ),
                  title: '2 modes d\u2019utilisation',
                  text: 'Pré-migration SharePoint ou post-synchronisation OneDrive — adaptez l\u2019analyse à votre contexte.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c3)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  ),
                  title: 'Export rapport détaillé',
                  text: 'Liste des fichiers problématiques avec leur chemin complet, prête à traiter.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--c2)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0110 0v4" />
                    </svg>
                  ),
                  title: '100% local & sécurisé',
                  text: 'Tourne en local, sans droits admin. Aucune donnée envoyée sur internet.',
                },
              ].map(({ icon, title, text }) => (
                <div key={title} className="card" style={{ padding: '1.25rem', background: 'var(--off)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: '10px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.6rem', border: '1px solid var(--border)' }}>{icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--ink)', marginBottom: '0.3rem' }}>{title}</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.5, margin: 0 }}>{text}</p>
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>

              Me contacter sur LinkedIn
            </a>
          </div>
        </div>
      </section>

    </>
  )
}
