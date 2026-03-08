'use client'

import { useState } from 'react'
import Image from 'next/image'

const TECH_LOGOS: Record<string, string> = {
  PowerApps:       '/icons/PowerApps.svg',
  'Power Automate':'/icons/PowerAutomate.svg',
  SharePoint:      '/icons/SharePoint2025.png',
  Teams:           '/icons/Teams2025.png',
  Forms:           '/icons/Forms.png',
  Outlook:         '/icons/Outlook2025.png',
  'AI Builder':    '/icons/AIBuilder.svg',
}

interface Screenshot { url: string; title: string }
interface RoiItem    { val: string; label: string }

interface Project {
  title:       string
  sector:      string
  mainTool:    string
  devices:     string[]
  techs:       string[]
  screenshots: Screenshot[]
  problem:     string
  users:       string
  solution:    string
  features:    string[]
  benefits:    string[]
  roi:         RoiItem[]
}

const PROJECTS: Project[] = [
  {
    title:    'Application de réservation de voyages',
    sector:   'Éducation',
    mainTool: 'PowerApps',
    devices:  ['PC', 'Mobile', 'Tablette'],
    techs:    ['PowerApps', 'Power Automate', 'SharePoint', 'Outlook'],
    screenshots: [
      { url: '/portfolio/MyBooking/MyBooking-Home.png',        title: "1. Page d'accueil de l'application" },
      { url: '/portfolio/MyBooking/MyBooking-Form1.png',       title: '2. Formulaire de réservation – Étape 1' },
      { url: '/portfolio/MyBooking/MyBooking-Form2.png',       title: '3. Formulaire de réservation – Étape 2' },
      { url: '/portfolio/MyBooking/MyBooking-Form3.png',       title: '4. Formulaire de réservation – Étape 3' },
      { url: '/portfolio/MyBooking/MyBooking-MobileHome.png',  title: "5. Page d'accueil – Mobile" },
      { url: '/portfolio/MyBooking/MyBooking-MobileForm.png',  title: '6. Formulaire – Mobile' },
      { url: '/portfolio/MyBooking/MyBooking-BackOffice.png',  title: '7. Back-office SharePoint pour le staff' },
    ],
    problem:  '<p>Demandes de réservation gérées <b>uniquement par mail</b> avec les gestionnaires.</p><p style="margin-top:.5rem">Des <b>validations manuelles</b> retardaient le processus. Nombreux allers-retours, oublis et <b>erreurs de saisie</b>.</p>',
    users:    "<ul style='list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.4rem'><li style='display:flex;gap:.5rem'><span style='color:var(--c2);font-weight:700;flex-shrink:0'>·</span>200 professeurs sur 2 campus</li><li style='display:flex;gap:.5rem'><span style='color:var(--c2);font-weight:700;flex-shrink:0'>·</span>2 gestionnaires des réservations</li><li style='display:flex;gap:.5rem'><span style='color:var(--c2);font-weight:700;flex-shrink:0'>·</span>Service Comptabilité</li></ul>",
    solution: "Une <b>application mobile</b> de saisie des demandes avec workflow de validation et notifications automatiques.<br><br>Un <b>tableau de bord interactif</b> pour le staff avec suivi comptable structuré.",
    features: [
      '<b>Formulaire dynamique</b> avec règles métier pour fiabiliser la saisie',
      '<b>Duplication des réservations</b> récurrentes en 2 clics',
      '<b>Workflow de validation automatique</b> selon le statut du professeur',
      '<b>Notifications automatisées</b> tout au long du traitement',
      '<b>Tableau de bord unifié</b> avec vues dédiées',
    ],
    benefits: [
      'Gain de temps significatif pour les professeurs',
      '95 % de réduction des erreurs de saisie',
      'Visibilité en temps réel de létat des demandes',
      'Collaboration facilitée gestionnaires et comptabilité',
    ],
    roi: [
      { val: '÷3',   label: 'Délai de traitement' },
      { val: '−70%', label: 'Emails échangés' },
      { val: 'KPIs', label: 'Rationalisation coûts' },
    ],
  },
  {
    title:    'Extraction automatique de N° de commande sur des factures PDF',
    sector:   'Pharmaceutique',
    mainTool: 'Power Automate',
    devices:  ['PC'],
    techs:    ['Power Automate', 'AI Builder', 'SharePoint'],
    screenshots: [
      { url: '/portfolio/LecturePDF/0.png', title: '1. Récupération du contenu du PDF' },
      { url: '/portfolio/LecturePDF/1.png', title: '2. Lecture OCR du PDF' },
      { url: '/portfolio/LecturePDF/2.png', title: '3. REGEX utilisée dans un Office Script' },
      { url: '/portfolio/LecturePDF/3.png', title: '4. Utilisation de la REGEX dans le flux' },
    ],
    problem:  '<p><b>Extraction manuelle</b> des numéros de commande sur des milliers de factures PDF pour les intégrer à un nouvel outil de facturation.</p><p style="margin-top:.5rem">Processus chronophage engendrant <b>risques d\'erreurs</b> et retards de facturation.</p>',
    users:    "<ul style='list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.4rem'><li style='display:flex;gap:.5rem'><span style='color:var(--c2);font-weight:700;flex-shrink:0'>·</span>2 personnes mobilisées à temps plein</li><li style='display:flex;gap:.5rem'><span style='color:var(--c2);font-weight:700;flex-shrink:0'>·</span>10 000 factures en retard à traiter</li><li style='display:flex;gap:.5rem'><span style='color:var(--c2);font-weight:700;flex-shrink:0'>·</span>Flux continu de PDF reçu de l'ancien système</li></ul>",
    solution: "Un flux Power Automate intégré à SharePoint pour une <b>lecture OCR automatisée</b> des factures PDF, détectant précisément leurs <b>numéros de commande</b> via une REGEX.",
    features: [
      "Flux automatisé parcourant les documents d'une bibliothèque SharePoint",
      '<b>Lecture OCR</b> via AI Builder pour extraire le n° de commande',
      '<b>Renommage automatique</b> des fichiers valides',
      '<b>Déplacement</b> des cas non conformes vers un dossier de révision',
    ],
    benefits: [
      '90 % du temps manuel éliminé',
      'Intégration simplifiée sans ressaisie',
      'Un clic pour traiter des milliers de factures',
    ],
    roi: [
      { val: '−80%', label: 'Coûts de traitement' },
      { val: '✓',    label: 'Traçabilité audits' },
      { val: '♻',    label: 'Flux réutilisable' },
    ],
  },
  {
    title:    'Classement automatisé des contrats vers une Contrathèque',
    sector:   'Achats',
    mainTool: 'Power Automate',
    devices:  ['PC'],
    techs:    ['SharePoint', 'Power Automate', 'Forms', 'Teams'],
    screenshots: [
      { url: '/portfolio/Contratheque/Contratheque-BoutonEnvoi.png',  title: "1. Bouton d'envoi vers la contrathèque" },
      { url: '/portfolio/Contratheque/Contratheque-Form.png',         title: '2. Formulaire de saisie des métadonnées' },
      { url: '/portfolio/Contratheque/Contratheque-Classement.png',   title: '3. Document déplacé dans la contrathèque' },
      { url: '/portfolio/Contratheque/Contratheque-Recherche.png',    title: '4. Moteur de recherche avancé' },
    ],
    problem:  "<p>Les contrats finalisés se retrouvaient <b>dispersés parmi des documents de travail</b>.</p><p style='margin-top:.5rem'>Résultat : une recherche <b>longue et aléatoire</b> pour trouver le dernier contrat en vigueur ou l'historique fournisseur.</p>",
    users:    "<ul style='list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.4rem'><li style='display:flex;gap:.5rem'><span style='color:var(--c2);font-weight:700;flex-shrink:0'>·</span>Service Achats (10 personnes)</li><li style='display:flex;gap:.5rem'><span style='color:var(--c2);font-weight:700;flex-shrink:0'>·</span>~50 contrats finalisés par mois à classer</li><li style='display:flex;gap:.5rem'><span style='color:var(--c2);font-weight:700;flex-shrink:0'>·</span>Documents de travail mélangés aux contrats signés</li></ul>",
    solution: "Un flux Power Automate ouvrant un <b>formulaire de saisie des métadonnées</b> (fournisseur, montant, échéance…) puis déplaçant le contrat vers une bibliothèque SharePoint dédiée avec un <b>moteur de recherche avancé</b>.",
    features: [
      '<b>Déclenchement manuel</b> par bouton : formulaire de saisie des métadonnées',
      '<b>Déplacement automatisé</b> vers la Contrathèque avec mise à jour des métadonnées',
      '<b>Alertes Teams</b> automatiques à l\'approche de l\'échéance',
      '<b>Mise à jour du statut</b> du contrat après sa date de fin',
    ],
    benefits: [
      'Classement guidé en quelques clics',
      'Temps de recherche divisé par 3',
      'Alertes proactives Teams pour anticiper les renouvellements',
    ],
    roi: [
      { val: '÷3', label: 'Temps de recherche' },
      { val: '✓',  label: 'Gouvernance renforcée' },
      { val: '0',  label: 'Contrats oubliés' },
    ],
  },
]

export default function PortfolioPage() {
  const [open, setOpen]       = useState<number | null>(null)
  const [lbIndex, setLbIndex] = useState<number | null>(null)

  const project = open !== null ? PROJECTS[open] : null

  function openLb(i: number) { setLbIndex(i) }
  function closeLb()          { setLbIndex(null) }
  function prevLb()           { setLbIndex(i => (i !== null && project ? (i - 1 + project.screenshots.length) % project.screenshots.length : null)) }
  function nextLb()           { setLbIndex(i => (i !== null && project ? (i + 1) % project.screenshots.length : null)) }

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
            Une sélection de projets représentatifs réalisés pour des clients de secteurs variés.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section style={{ padding: '0 6% 5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="portfolio-grid">
          {PROJECTS.map((p, i) => (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className="card portfolio-card"
              style={{ padding: '1.75rem', textAlign: 'left', cursor: 'pointer', background: 'white', border: '1.5px solid var(--border)', width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
            >
              {/* Number */}
              <span style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-lora), Georgia, serif', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Title */}
              <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1rem', color: 'var(--ink)', lineHeight: 1.4, margin: 0 }}>
                {p.title}
              </h2>

              {/* Sector badge */}
              <span style={{ alignSelf: 'flex-start', fontSize: '0.68rem', fontWeight: 700, color: 'white', background: 'var(--c3)', border: '1px solid rgba(14,76,137,0.18)', borderRadius: '99px', padding: '0.15rem 0.6rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {p.sector}
              </span>

              {/* Tech pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                {p.techs.map(t => (
                  <span key={t} style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--c3)', background: 'var(--off)', border: '1px solid var(--border)', borderRadius: '6px', padding: '0.15rem 0.5rem' }}>
                    {t}
                  </span>
                ))}
              </div>

              <span style={{ fontSize: '0.8rem', color: 'var(--c3)', fontWeight: 600, marginTop: '0.25rem' }}>
                Voir le projet →
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ── Modal detail ── */}
      {open !== null && project && (
        <div
          onClick={() => setOpen(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(7,24,40,0.7)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2vh 2vw',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              width: '100%', maxWidth: '1100px',
              height: '95vh',
              background: '#fff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(7,24,40,0.45)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg,#0d2d50 0%,#1a4a7a 50%,#1e5a96 100%)',
              padding: '1.25rem 1.75rem',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  {/* Titre + secteur sur la même ligne */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.65rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(1.05rem, 2.5vw, 1.35rem)', color: 'white', lineHeight: 1.3, margin: 0 }}>
                      {project.title}
                    </h2>
                    <span style={{ marginLeft: 'auto', flexShrink: 0, fontSize: '0.7rem', fontWeight: 700, background: 'rgba(24,176,232,0.2)', color: '#60c6ff', border: '1px solid rgba(96,198,255,0.35)', borderRadius: '99px', padding: '0.15rem 0.7rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {project.sector}
                    </span>
                  </div>

                  {/* Outils */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', alignItems: 'center' }}>
                    {project.techs.map(t => (
                      <span key={t} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem', fontWeight: 600, background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '99px', padding: '0.15rem 0.6rem' }}>
                        {TECH_LOGOS[t] && (
                          <Image src={TECH_LOGOS[t]} alt={t} width={13} height={13} style={{ width: 13, height: 13, objectFit: 'contain' }} unoptimized />
                        )}
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Close */}
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Fermer"
                  style={{ flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.7)', cursor: 'pointer', fontSize: '0.95rem', fontWeight: 600 }}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Body — grille 3 rangées × 2 colonnes */}
            <div style={{ padding: '1.25rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem', background: 'var(--off)', overflowY: 'auto', flex: 1 }} className="modal-body-grid">


              {/* ── Rangée 2 : Problématique | Contexte ── */}
              <div style={{ background: 'white', borderRadius: '12px', padding: '1.25rem', border: '1.5px solid var(--border)', borderTop: '3px solid var(--c3)' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--c3)', marginBottom: '0.65rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/></svg>
                  Problématique métier
                </p>
                <div style={{ fontSize: '0.855rem', color: 'var(--ink)', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: project.problem }} />
              </div>

              <div style={{ background: 'white', borderRadius: '12px', padding: '1.25rem', border: '1.5px solid var(--border)', borderTop: '3px solid var(--c3)' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--c3)', marginBottom: '0.65rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  Contexte et utilisateurs
                </p>
                <div style={{ fontSize: '0.855rem', color: 'var(--ink)', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: project.users }} />
              </div>

              {/* ── Rangée 3 : Solution | Fonctionnalités ── */}
              <div style={{ background: 'white', borderRadius: '12px', padding: '1.25rem', border: '1.5px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--c2)', margin: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="6"/><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/><line x1="12" y1="22" x2="12" y2="18"/><path d="M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
                  Solution mise en place
                </p>
                <p style={{ fontSize: '0.855rem', color: 'var(--ink)', lineHeight: 1.7, margin: 0, flex: 1 }} dangerouslySetInnerHTML={{ __html: project.solution }} />
                <button
                  onClick={() => openLb(0)}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.4rem 0.85rem', borderRadius: '7px', border: '1.5px solid var(--c2)', background: 'rgba(24,176,232,0.06)', color: 'var(--c3)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', alignSelf: 'flex-start' }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  Voir les captures ({project.screenshots.length})
                </button>
              </div>

              <div style={{ background: 'white', borderRadius: '12px', padding: '1.25rem', border: '1.5px solid var(--border)' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--c2)', marginBottom: '0.65rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  Fonctionnalités clés
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {project.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.845rem', color: 'var(--ink)', alignItems: 'flex-start' }}>
                      <span style={{ width: 15, height: 15, borderRadius: '50%', background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '3px' }}>
                        <svg width="8" height="8" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: f }} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Rangée 4 : Bénéfices | ROI ── */}
              <div style={{ background: 'white', borderRadius: '12px', padding: '1.25rem', border: '1.5px solid var(--border)' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.65rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#18b0e8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                  Bénéfices utilisateurs
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {project.benefits.map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.845rem', color: 'var(--ink)', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--c2)', fontWeight: 700, flexShrink: 0 }}>·</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: 'linear-gradient(135deg,rgba(77,255,214,.08) 0%,rgba(24,176,232,.08) 45%,rgba(15,95,173,.08) 100%)', borderRadius: '12px', padding: '1.25rem', border: '1.5px solid var(--border)' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: '0.85rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#18b0e8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                  Valeur business (ROI)
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${project.roi.length}, 1fr)`, gap: '0.75rem' }}>
                  {project.roi.map((r, i) => (
                    <div key={i} style={{ background: 'white', borderRadius: '10px', padding: '0.85rem 0.6rem', textAlign: 'center', border: '1px solid var(--border)' }}>
                      <div style={{ fontSize: '1.45rem', fontWeight: 800, background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1.1, marginBottom: '0.3rem' }}>
                        {r.val}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--muted)', lineHeight: 1.3 }}>
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Barre bas : prev / next */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.65rem 1.75rem', borderTop: '1px solid var(--border)', background: 'white' }}>
              <button
                onClick={() => setOpen(o => o !== null && o > 0 ? o - 1 : o)}
                disabled={open === 0}
                style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '0.35rem 0.75rem', borderRadius: '7px', border: '1.5px solid var(--border)', background: 'white', color: open === 0 ? 'var(--muted)' : 'var(--ink)', fontSize: '0.78rem', fontWeight: 600, cursor: open === 0 ? 'default' : 'pointer', opacity: open === 0 ? 0.4 : 1 }}
              >
                ← Précédent
              </button>
              <button
                onClick={() => setOpen(o => o !== null && o < PROJECTS.length - 1 ? o + 1 : o)}
                disabled={open === PROJECTS.length - 1}
                style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', padding: '0.35rem 0.75rem', borderRadius: '7px', border: '1.5px solid var(--border)', background: 'white', color: open === PROJECTS.length - 1 ? 'var(--muted)' : 'var(--ink)', fontSize: '0.78rem', fontWeight: 600, cursor: open === PROJECTS.length - 1 ? 'default' : 'pointer', opacity: open === PROJECTS.length - 1 ? 0.4 : 1 }}
              >
                Suivant →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Lightbox screenshots ── */}
      {lbIndex !== null && project && (
        <div
          onClick={closeLb}
          style={{
            position: 'fixed', inset: 0, zIndex: 300,
            background: 'rgba(5,21,37,0.95)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          {/* Close */}
          <button
            onClick={closeLb}
            style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', width: 40, height: 40, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)', color: 'white', fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            ✕
          </button>

          {/* Counter */}
          <p style={{ position: 'absolute', top: '1.4rem', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
            {lbIndex + 1} / {project.screenshots.length}
          </p>

          {/* Image */}
          <div onClick={e => e.stopPropagation()} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img
              src={project.screenshots[lbIndex].url}
              alt={project.screenshots[lbIndex].title}
              style={{ display: 'block', maxWidth: '860px', width: '100%', maxHeight: '65vh', objectFit: 'contain', borderRadius: '10px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
            />
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)' }}>
              {project.screenshots[lbIndex].title}
            </p>
          </div>

          {/* Prev / Next */}
          <div onClick={e => e.stopPropagation()} style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
            <button
              onClick={prevLb}
              disabled={lbIndex === 0}
              style={{ padding: '0.55rem 1.2rem', borderRadius: '8px', border: '1.5px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.07)', color: 'white', fontSize: '0.85rem', fontWeight: 600, cursor: lbIndex === 0 ? 'default' : 'pointer', opacity: lbIndex === 0 ? 0.35 : 1 }}
            >
              ← Précédent
            </button>
            <button
              onClick={nextLb}
              disabled={lbIndex === project.screenshots.length - 1}
              style={{ padding: '0.55rem 1.2rem', borderRadius: '8px', border: '1.5px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.07)', color: 'white', fontSize: '0.85rem', fontWeight: 600, cursor: lbIndex === project.screenshots.length - 1 ? 'default' : 'pointer', opacity: lbIndex === project.screenshots.length - 1 ? 0.35 : 1 }}
            >
              Suivant →
            </button>
          </div>

          {/* Thumbnails strip */}
          <div onClick={e => e.stopPropagation()} style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {project.screenshots.map((s, i) => (
              <button
                key={i}
                onClick={() => setLbIndex(i)}
                style={{ width: 54, height: 38, borderRadius: '5px', overflow: 'hidden', border: i === lbIndex ? '2px solid #4dffd6' : '2px solid transparent', padding: 0, cursor: 'pointer', opacity: i === lbIndex ? 1 : 0.5 }}
              >
                <img src={s.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
