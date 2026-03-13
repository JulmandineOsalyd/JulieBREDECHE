'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Screenshot { url: string; title: string }
interface RoiItem    { val: string; label: string }

interface Project {
  title:       string
  sector:      string
  mainTool:    string
  devices:     string[]
  techs:       string[]
  screenshots: Screenshot[]
  problem:     string[]
  users:       string[]
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
    problem:  [
      'Demandes de réservation gérées **uniquement par mail** avec les gestionnaires.',
      'Des **validations manuelles** retardaient le processus.',
      'Nombreux allers-retours, oublis et **erreurs de saisie**.',
    ],
    users:    ['200 professeurs sur 2 campus', '2 gestionnaires des réservations', 'Service Comptabilité'],
    solution: "Une **application mobile** de saisie des demandes avec workflow de validation et notifications automatiques.\n\nUn **tableau de bord interactif** pour le staff avec suivi comptable structuré.",
    features: [
      '**Formulaire dynamique** avec règles métier pour fiabiliser la saisie',
      '**Duplication des réservations** récurrentes en 2 clics',
      '**Workflow de validation automatique** selon le statut du professeur',
      '**Notifications automatisées** tout au long du traitement',
      '**Tableau de bord unifié** avec vues dédiées',
    ],
    benefits: [
      'Gain de temps significatif pour les professeurs',
      '95 % de réduction des erreurs de saisie',
      'Visibilité en temps réel de l\'état des demandes',
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
    problem:  [
      "**Extraction manuelle** des numéros de commande sur des milliers de factures PDF pour les intégrer à un nouvel outil de facturation.",
      "Processus chronophage engendrant **risques d'erreurs** et retards de facturation.",
    ],
    users:    ['2 personnes mobilisées à temps plein', '10 000 factures en retard à traiter', 'Flux continu de PDF reçu de l\'ancien système'],
    solution: "Un flux Power Automate intégré à SharePoint pour une **lecture OCR automatisée** des factures PDF, détectant précisément leurs **numéros de commande** via une REGEX.",
    features: [
      "Flux automatisé parcourant les documents d'une bibliothèque SharePoint",
      '**Lecture OCR** via AI Builder pour extraire le n° de commande',
      '**Renommage automatique** des fichiers valides',
      '**Déplacement** des cas non conformes vers un dossier de révision',
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
    problem:  [
      "Les contrats finalisés se retrouvaient **dispersés parmi des documents de travail**.",
      "Résultat : une recherche **longue et aléatoire** pour trouver le dernier contrat en vigueur ou l'historique fournisseur.",
    ],
    users:    ['Service Achats (10 personnes)', '~50 contrats finalisés par mois à classer', 'Documents de travail mélangés aux contrats signés'],
    solution: "Un flux Power Automate ouvrant un **formulaire de saisie des métadonnées** (fournisseur, montant, échéance…) puis déplaçant le contrat vers une bibliothèque SharePoint dédiée avec un **moteur de recherche avancé**.",
    features: [
      '**Déclenchement manuel** par bouton : formulaire de saisie des métadonnées',
      '**Déplacement automatisé** vers la Contrathèque avec mise à jour des métadonnées',
      "**Alertes Teams** automatiques à l'approche de l'échéance",
      '**Mise à jour du statut** du contrat après sa date de fin',
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

function md(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br><br>')
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
      <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#8a9ab0', whiteSpace: 'nowrap' as const }}>
        {children}
      </span>
      <div style={{ flex: 1, height: '1px', background: '#edf0f5' }} />
    </div>
  )
}

export default function PortfolioPage() {
  const [open, setOpen]               = useState<number | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [lbIndex, setLbIndex]         = useState<number | null>(null)

  const project = open !== null ? PROJECTS[open] : null

  // Bloquer le scroll du body quand un overlay est ouvert
  useEffect(() => {
    document.body.style.overflow = (open !== null || lbIndex !== null) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open, lbIndex])

  function openProject(i: number) {
    setOpen(i)
    setActiveSlide(0)
  }

  function closeModal() {
    setOpen(null)
    setActiveSlide(0)
  }

  function goPrev() {
    if (open !== null && open > 0) { setOpen(open - 1); setActiveSlide(0) }
  }

  function goNext() {
    if (open !== null && open < PROJECTS.length - 1) { setOpen(open + 1); setActiveSlide(0) }
  }

  function openLb(i: number) { setActiveSlide(i); setLbIndex(i) }
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
              onClick={() => openProject(i)}
              className="card portfolio-card"
              style={{ padding: '1.75rem', textAlign: 'left', cursor: 'pointer', background: 'white', border: '1.5px solid var(--border)', width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
            >
              <span style={{ fontSize: '2rem', fontWeight: 800, fontFamily: 'var(--font-lora), Georgia, serif', background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1rem', color: 'var(--ink)', lineHeight: 1.4, margin: 0 }}>
                {p.title}
              </h2>
              <span style={{ alignSelf: 'flex-start', fontSize: '0.68rem', fontWeight: 700, color: 'white', background: 'var(--c3)', border: '1px solid rgba(14,76,137,0.18)', borderRadius: '99px', padding: '0.15rem 0.6rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {p.sector}
              </span>
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

      {/* ── Modal ── */}
      {open !== null && project && (
        <div
          onClick={closeModal}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(10,18,28,0.82)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px 16px',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="animate-fadeUp"
            style={{
              background: '#fff',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '720px',
              maxHeight: '95vh',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >

            {/* HEADER */}
            <div style={{
              background: '#0f2744',
              padding: '24px 28px 20px',
              borderRadius: '16px 16px 0 0',
              flexShrink: 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '6px' }}>
                <span style={{
                  fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: '#7db4e0', background: 'rgba(125,180,224,0.12)', border: '1px solid rgba(125,180,224,0.2)',
                  padding: '4px 10px', borderRadius: '20px',
                }}>
                  {project.sector}
                </span>
                <button
                  onClick={closeModal}
                  aria-label="Fermer"
                  style={{
                    width: 32, height: 32, border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%',
                    background: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '16px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}
                >
                  ✕
                </button>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-dm-serif), Georgia, serif',
                fontSize: '22px', color: '#fff', fontWeight: 400, lineHeight: 1.3, margin: '8px 0 16px',
              }}>
                {project.title}
              </h2>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.techs.map(t => (
                  <span key={t} style={{
                    fontSize: '11px', fontWeight: 500, color: '#a8c8f0',
                    background: 'rgba(168,200,240,0.1)', border: '1px solid rgba(168,200,240,0.15)',
                    padding: '3px 10px', borderRadius: '20px',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* BODY - zone scrollable (slider inclus) */}
            <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#d0d8e4 transparent' }}>

              {/* SLIDER */}
              <div style={{ background: '#e8f2fa', padding: '16px 28px' }}>
                <div style={{
                  display: 'flex', gap: '10px', overflowX: 'auto',
                  scrollSnapType: 'x mandatory', paddingBottom: '4px',
                  msOverflowStyle: 'none', scrollbarWidth: 'none',
                }}>
                  {project.screenshots.map((s, i) => (
                    <div
                      key={i}
                      onClick={() => openLb(i)}
                      style={{
                        flexShrink: 0, width: '110px', height: '68px',
                        borderRadius: '6px', background: '#c8dff0',
                        border: `2px solid ${i === activeSlide ? '#4a9fd4' : 'transparent'}`,
                        scrollSnapAlign: 'start', cursor: 'pointer',
                        overflow: 'hidden', transition: 'border-color 0.2s',
                      }}
                    >
                      <Image
                        src={s.url}
                        alt={s.title}
                        width={110}
                        height={68}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '11px', color: '#7aa8c4', textAlign: 'center', marginTop: '10px', letterSpacing: '0.03em' }}>
                  {project.screenshots.length} Captures (cliquer pour agrandir)
                </p>
              </div>

              <div style={{ padding: '0 28px 24px' }}>

              {/* Problématique métier */}
              <div style={{ padding: '22px 0', borderBottom: '1px solid #f0f3f7' }}>
                <SectionLabel>Problématique métier</SectionLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {project.problem.map((line, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: '#2d3a4a', lineHeight: 2 }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4a9fd4', flexShrink: 0, marginTop: '10px', display: 'inline-block' }} />
                      <span dangerouslySetInnerHTML={{ __html: md(line) }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Contexte et utilisateurs */}
              <div style={{ padding: '22px 0', borderBottom: '1px solid #f0f3f7' }}>
                <SectionLabel>Contexte et utilisateurs</SectionLabel>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.users.map((u, i) => (
                    <div key={i} style={{
                      fontSize: '13px', color: '#2d3a4a', background: '#f4f7fb',
                      border: '1px solid #e4eaf3', borderRadius: '8px', padding: '8px 14px',
                    }}>
                      {u}
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution mise en place */}
              <div style={{ padding: '22px 0', borderBottom: '1px solid #f0f3f7' }}>
                <SectionLabel>Solution mise en place</SectionLabel>
                <div
                  style={{ fontSize: '14px', color: '#2d3a4a', lineHeight: 1.75 }}
                  dangerouslySetInnerHTML={{ __html: md(project.solution) }}
                />
              </div>

              {/* Fonctionnalités clés */}
              <div style={{ padding: '22px 0', borderBottom: '1px solid #f0f3f7' }}>
                <SectionLabel>Fonctionnalités clés</SectionLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {project.features.map((f, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '13.5px', color: '#2d3a4a', lineHeight: 1.55 }}>
                      <div style={{
                        width: '18px', height: '18px', borderRadius: '50%',
                        background: '#deeef9', border: '1px solid #a8cfe8',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '10px', color: '#2a7db5', flexShrink: 0, marginTop: '1px',
                      }}>
                        ✓
                      </div>
                      <span dangerouslySetInnerHTML={{ __html: md(f) }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bénéfices utilisateurs */}
              <div style={{ padding: '22px 0', borderBottom: '1px solid #f0f3f7' }}>
                <SectionLabel>Bénéfices utilisateurs</SectionLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.benefits.map((b, i) => (
                    <div key={i} style={{
                      fontSize: '13.5px', color: '#2d3a4a', lineHeight: 1.55,
                      background: '#f8fbff', border: '1px solid #e4edf7',
                      borderLeft: '3px solid #4a9fd4', borderRadius: '0 8px 8px 0',
                      padding: '10px 14px',
                    }}>
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Valeur business (ROI) */}
              <div style={{ padding: '22px 0' }}>
                <SectionLabel>Valeur business (ROI)</SectionLabel>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {project.roi.map((r, i) => (
                    <div key={i} style={{
                      background: '#f4f7fb', border: '1px solid #e4eaf3',
                      borderRadius: '10px', padding: '14px 12px', textAlign: 'center',
                    }}>
                      <div style={{
                        fontFamily: 'var(--font-dm-serif), Georgia, serif',
                        fontSize: '26px', color: '#0f2744', fontWeight: 400,
                        lineHeight: 1, marginBottom: '6px',
                      }}>
                        {r.val}
                      </div>
                      <div style={{ fontSize: '11px', color: '#7a8ea4', lineHeight: 1.4 }}>
                        {r.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              </div>{/* fin padding sections */}
            </div>{/* fin body scrollable */}

            {/* FOOTER */}
            <div style={{
              background: '#fff',
              borderTop: '1px solid #edf0f5', padding: '14px 28px',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              borderRadius: '0 0 16px 16px', flexShrink: 0,
            }}>
              <button
                onClick={goPrev}
                disabled={open === 0}
                style={{
                  fontSize: '13px', background: 'none',
                  border: '1px solid #d8e0eb', borderRadius: '8px', padding: '7px 16px',
                  cursor: open === 0 ? 'default' : 'pointer', color: '#2d3a4a',
                  opacity: open === 0 ? 0.4 : 1,
                }}
              >
                ← Précédent
              </button>
              <span style={{ fontSize: '12px', color: '#9aaabb' }}>
                {open + 1} / {PROJECTS.length}
              </span>
              <button
                onClick={goNext}
                disabled={open === PROJECTS.length - 1}
                style={{
                  fontSize: '13px',
                  background: open === PROJECTS.length - 1 ? 'none' : '#0f2744',
                  color: open === PROJECTS.length - 1 ? '#2d3a4a' : '#fff',
                  border: `1px solid ${open === PROJECTS.length - 1 ? '#d8e0eb' : '#0f2744'}`,
                  borderRadius: '8px', padding: '7px 16px',
                  cursor: open === PROJECTS.length - 1 ? 'default' : 'pointer',
                  opacity: open === PROJECTS.length - 1 ? 0.4 : 1,
                }}
              >
                Suivant →
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lbIndex !== null && project && (
        <div
          onClick={closeLb}
          style={{
            position: 'fixed', inset: 0, zIndex: 300,
            background: 'rgba(5,21,37,0.95)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            padding: '1.5rem 1.5rem 1rem',
          }}
        >
          {/* Barre top : compteur + fermer */}
          <div style={{ width: '100%', maxWidth: '860px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexShrink: 0 }}>
            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
              {lbIndex + 1} / {project.screenshots.length}
            </span>
            <button
              onClick={closeLb}
              style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)', color: 'white', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ✕
            </button>
          </div>

          {/* Image — prend tout l'espace disponible */}
          <div onClick={e => e.stopPropagation()} style={{ flex: 1, width: '100%', maxWidth: '860px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
            <img
              src={project.screenshots[lbIndex].url}
              alt={project.screenshots[lbIndex].title}
              style={{ display: 'block', width: '100%', height: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
            />
          </div>

          {/* Titre de la capture */}
          <p onClick={e => e.stopPropagation()} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', marginTop: '0.6rem', flexShrink: 0 }}>
            {project.screenshots[lbIndex].title}
          </p>

          {/* Miniatures */}
          <div onClick={e => e.stopPropagation()} style={{ display: 'flex', gap: '0.5rem', marginTop: '0.6rem', flexWrap: 'wrap', justifyContent: 'center', flexShrink: 0 }}>
            {project.screenshots.map((s, i) => (
              <button
                key={i}
                onClick={() => setLbIndex(i)}
                style={{ width: 48, height: 34, borderRadius: '4px', overflow: 'hidden', border: i === lbIndex ? '2px solid #4a9fd4' : '2px solid transparent', padding: 0, cursor: 'pointer', opacity: i === lbIndex ? 1 : 0.5 }}
              >
                <img src={s.url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>

          {/* Boutons précédent / suivant — tout en bas */}
          <div onClick={e => e.stopPropagation()} style={{ display: 'flex', gap: '0.5rem', marginTop: '0.6rem', flexShrink: 0 }}>
            <button
              onClick={prevLb}
              disabled={lbIndex === 0}
              style={{ padding: '0.3rem 0.9rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.07)', color: 'white', fontSize: '0.75rem', cursor: lbIndex === 0 ? 'default' : 'pointer', opacity: lbIndex === 0 ? 0.3 : 1 }}
            >
              ← Précédent
            </button>
            <button
              onClick={nextLb}
              disabled={lbIndex === project.screenshots.length - 1}
              style={{ padding: '0.3rem 0.9rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.07)', color: 'white', fontSize: '0.75rem', cursor: lbIndex === project.screenshots.length - 1 ? 'default' : 'pointer', opacity: lbIndex === project.screenshots.length - 1 ? 0.3 : 1 }}
            >
              Suivant →
            </button>
          </div>
        </div>
      )}
    </>
  )
}
