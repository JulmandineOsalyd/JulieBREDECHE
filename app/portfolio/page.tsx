'use client'

import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Application de gestion des demandes RH',
    client: 'Groupe énergie (CAC 40)',
    techs: ['PowerApps', 'Power Automate', 'SharePoint'],
    description: 'Application Canvas PowerApps pour la gestion complète des demandes RH (congés, formations, mobilité interne). Intégration avec le SIRH existant via Power Automate.',
    results: ['85% de réduction du temps de traitement des demandes', '3 000 utilisateurs actifs', 'Zéro email RH pour les demandes standard'],
  },
  {
    id: 2,
    title: 'Agent Copilot Studio — Support IT interne',
    client: 'Cabinet de conseil (grande ville)',
    techs: ['Copilot Studio', 'SharePoint', 'Power Automate'],
    description: 'Agent conversationnel intégré dans Microsoft Teams pour répondre aux questions IT de premier niveau. Connecté à la base de connaissances SharePoint et capable d\'ouvrir des tickets ServiceNow.',
    results: ['40% de tickets Level 1 gérés par l\'agent', 'Disponibilité 24/7', 'NPS utilisateurs : 72/100'],
  },
  {
    id: 3,
    title: 'Intranet SharePoint — Refonte complète',
    client: 'Société de gestion collective (SACEM)',
    techs: ['SharePoint'],
    description: 'Refonte de l\'intranet historique (SharePoint 2016) vers SharePoint Online. Architecture hub sites, taxonomie unifiée, portail d\'actualités, espaces projets, intégration Viva Connections.',
    results: ['Migration de 15 000 documents', '2 000 collaborateurs onboardés en 3 mois', 'Taux d\'adoption : 94% à J+90'],
  },
  {
    id: 4,
    title: 'Automatisation facturation fournisseurs',
    client: 'PME industrielle (250 salariés)',
    techs: ['Power Automate', 'SharePoint'],
    description: 'Automatisation du circuit de validation des factures fournisseurs : OCR, extraction des données, routage vers les bons valideurs, relances automatiques, archivage légal.',
    results: ['De 7 jours à 1,5 jours de délai de traitement', '0 facture perdue depuis le déploiement', 'ROI atteint en 4 mois'],
  },
  {
    id: 5,
    title: 'Dashboard Power BI — Suivi commercial',
    client: 'Fintech (start-up Series A)',
    techs: ['PowerApps', 'Power Automate'],
    description: 'Application PowerApps de saisie et suivi des opportunités commerciales avec tableaux de bord Power BI intégrés. Remplacement d\'un tableur Excel partagé fragmenté.',
    results: ['Vision temps réel sur 120 opportunités', 'Économie de 4h/semaine par commercial', 'Fiabilité des données : 99%'],
  },
  {
    id: 6,
    title: 'Formation & déploiement Power Platform',
    client: 'BPI France',
    techs: ['PowerApps', 'Power Automate', 'Copilot Studio'],
    description: 'Programme de montée en compétence de 25 champions internes Power Platform. Formation sur 3 mois, accompagnement sur leurs premiers projets, création d\'un Centre d\'Excellence.',
    results: ['25 champions certifiés Power Platform', '8 applications internes livrées par les équipes', 'Centre d\'Excellence opérationnel'],
  },
]

const filters = ['Tous', 'PowerApps', 'Power Automate', 'Copilot Studio', 'SharePoint']

export default function PortfolioPage() {
  const [active, setActive] = useState('Tous')

  const filtered = active === 'Tous'
    ? projects
    : projects.filter((p) => p.techs.includes(active))

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '5rem 6% 3rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '0.75rem' }}>
            Projets réalisés
          </p>
          <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Portfolio
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75 }}>
            Une sélection de projets représentatifs réalisés pour des clients de secteurs variés. Les noms des clients sont anonymisés ou cités avec leur accord.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{ padding: '0 6% 2rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: '99px',
                border: active === f ? 'none' : '1.5px solid var(--border)',
                background: active === f ? 'var(--grad)' : 'white',
                color: active === f ? 'white' : 'var(--ink)',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: '0 6% 5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="portfolio-grid">
          {filtered.map((p) => (
            <article key={p.id} className="card" style={{ padding: '1.75rem' }}>
              {/* Tech badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.85rem' }}>
                {p.techs.map((t) => (
                  <span key={t} style={{ fontSize: '0.72rem', fontWeight: 700, background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', border: '1px solid var(--border)', borderRadius: '6px', padding: '0.15rem 0.5rem' }}>
                    {t}
                  </span>
                ))}
              </div>

              <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink)', lineHeight: 1.4, marginBottom: '0.35rem' }}>
                {p.title}
              </h2>
              <p style={{ fontSize: '0.78rem', color: 'var(--c3)', fontWeight: 600, marginBottom: '0.75rem' }}>
                {p.client}
              </p>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '1.1rem' }}>
                {p.description}
              </p>

              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '0.9rem' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--c2)', marginBottom: '0.5rem' }}>
                  Résultats
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {p.results.map((r) => (
                    <li key={r} style={{ fontSize: '0.825rem', color: 'var(--ink)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                      <span style={{ color: 'var(--c2)', fontWeight: 900, flexShrink: 0 }}>✓</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

    </>
  )
}
