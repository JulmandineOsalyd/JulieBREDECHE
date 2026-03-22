'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslation } from '@/lib/i18n'

const screenshotUrls = [
  [
    '/portfolio/MyBooking/MyBooking-Home.png',
    '/portfolio/MyBooking/MyBooking-Form1.png',
    '/portfolio/MyBooking/MyBooking-Form2.png',
    '/portfolio/MyBooking/MyBooking-Form3.png',
    '/portfolio/MyBooking/MyBooking-MobileHome.png',
    '/portfolio/MyBooking/MyBooking-MobileForm.png',
    '/portfolio/MyBooking/MyBooking-BackOffice.png',
  ],
  [
    '/portfolio/LecturePDF/0.png',
    '/portfolio/LecturePDF/1.png',
    '/portfolio/LecturePDF/2.png',
    '/portfolio/LecturePDF/3.png',
  ],
  [
    '/portfolio/Contratheque/Contratheque-BoutonEnvoi.png',
    '/portfolio/Contratheque/Contratheque-Form.png',
    '/portfolio/Contratheque/Contratheque-Classement.png',
    '/portfolio/Contratheque/Contratheque-Recherche.png',
  ],
]

const projectTechs = [
  ['PowerApps', 'Power Automate', 'SharePoint', 'Outlook'],
  ['Power Automate', 'AI Builder', 'SharePoint'],
  ['SharePoint', 'Power Automate', 'Forms', 'Teams'],
]

const projectMainTools = ['PowerApps', 'Power Automate', 'Power Automate']

function md(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br><br>')
}

function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
      <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: '#8a9ab0', whiteSpace: 'nowrap' as const }}>
        {text}
      </span>
      <div style={{ flex: 1, height: '1px', background: '#edf0f5' }} />
    </div>
  )
}

export default function PortfolioPage() {
  const { t } = useTranslation()
  const p = t.portfolio
  const PROJECTS = p.projects

  const [open, setOpen] = useState<number | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [lbIndex, setLbIndex] = useState<number | null>(null)

  const project = open !== null ? PROJECTS[open] : null

  useEffect(() => {
    document.body.style.overflow = (open !== null || lbIndex !== null) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open, lbIndex])

  function openProject(i: number) { setOpen(i); setActiveSlide(0) }
  function closeModal() { setOpen(null); setActiveSlide(0) }
  function goPrev() { if (open !== null && open > 0) { setOpen(open - 1); setActiveSlide(0) } }
  function goNext() { if (open !== null && open < PROJECTS.length - 1) { setOpen(open + 1); setActiveSlide(0) } }
  function openLb(i: number) { setActiveSlide(i); setLbIndex(i) }
  function closeLb() { setLbIndex(null) }
  function prevLb() { setLbIndex(i => (i !== null && project ? (i - 1 + screenshotUrls[open!].length) % screenshotUrls[open!].length : null)) }
  function nextLb() { setLbIndex(i => (i !== null && project ? (i + 1) % screenshotUrls[open!].length : null)) }

  return (
    <>
      {/* Hero */}
      <section style={{ padding: '5rem 6% 3rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--c2)', marginBottom: '0.75rem' }}>
            {p.label}
          </p>
          <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1rem' }}>
            {p.title}
          </h1>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', background: 'linear-gradient(135deg, rgba(77,255,214,0.12) 0%, rgba(24,176,232,0.12) 100%)', border: '1px solid rgba(24,176,232,0.3)', borderRadius: '99px', padding: '0.3rem 0.9rem', marginBottom: '1.25rem' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--grad)', display: 'inline-block', flexShrink: 0 }} />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {p.comingSoon}
            </span>
          </div>
          <p style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.75 }}>
            {p.description}
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section style={{ padding: '0 6% 5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="portfolio-grid">
          {PROJECTS.map((proj, i) => (
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
                {proj.title}
              </h2>
              <span style={{ alignSelf: 'flex-start', fontSize: '0.68rem', fontWeight: 700, color: 'white', background: 'var(--c3)', border: '1px solid rgba(14,76,137,0.18)', borderRadius: '99px', padding: '0.15rem 0.6rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {proj.sector}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                {projectTechs[i].map(tech => (
                  <span key={tech} style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--c3)', background: 'var(--off)', border: '1px solid var(--border)', borderRadius: '6px', padding: '0.15rem 0.5rem' }}>
                    {tech}
                  </span>
                ))}
              </div>
              <span style={{ fontSize: '0.8rem', color: 'var(--c3)', fontWeight: 600, marginTop: '0.25rem' }}>
                {p.viewProject}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ── Modal ── */}
      {open !== null && project && (
        <div
          onClick={closeModal}
          style={{ position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(10,18,28,0.82)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 16px' }}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="animate-fadeUp"
            style={{ background: '#fff', borderRadius: '16px', width: '100%', maxWidth: '720px', maxHeight: '95vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
          >
            {/* HEADER */}
            <div style={{ background: '#0f2744', padding: '24px 28px 20px', borderRadius: '16px 16px 0 0', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '6px' }}>
                <span style={{ fontSize: '10px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7db4e0', background: 'rgba(125,180,224,0.12)', border: '1px solid rgba(125,180,224,0.2)', padding: '4px 10px', borderRadius: '20px' }}>
                  {project.sector}
                </span>
                <button
                  onClick={closeModal}
                  aria-label={p.close}
                  style={{ width: 32, height: 32, border: '1px solid rgba(255,255,255,0.2)', borderRadius: '50%', background: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                >
                  ✕
                </button>
              </div>
              <h2 style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: '22px', color: '#fff', fontWeight: 400, lineHeight: 1.3, margin: '8px 0 16px' }}>
                {project.title}
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {projectTechs[open].map(tech => (
                  <span key={tech} style={{ fontSize: '11px', fontWeight: 500, color: '#a8c8f0', background: 'rgba(168,200,240,0.1)', border: '1px solid rgba(168,200,240,0.15)', padding: '3px 10px', borderRadius: '20px' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* BODY */}
            <div style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'thin', scrollbarColor: '#d0d8e4 transparent' }}>
              {/* SLIDER */}
              <div style={{ background: '#e8f2fa', padding: '16px 28px' }}>
                <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: '4px', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                  {screenshotUrls[open].map((url, i) => (
                    <div
                      key={i}
                      onClick={() => openLb(i)}
                      style={{ flexShrink: 0, width: '110px', height: '68px', borderRadius: '6px', background: '#c8dff0', border: `2px solid ${i === activeSlide ? '#4a9fd4' : 'transparent'}`, scrollSnapAlign: 'start', cursor: 'pointer', overflow: 'hidden', transition: 'border-color 0.2s' }}
                    >
                      <Image src={url} alt={project.screenshots[i]?.title ?? ''} width={110} height={68} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '11px', color: '#7aa8c4', textAlign: 'center', marginTop: '10px', letterSpacing: '0.03em' }}>
                  {p.captures(screenshotUrls[open].length)}
                </p>
              </div>

              <div style={{ padding: '0 28px 24px' }}>
                {/* Problématique */}
                <div style={{ padding: '22px 0', borderBottom: '1px solid #f0f3f7' }}>
                  <SectionLabel text={p.sections.problem} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {(project.problem as unknown as string[]).map((line, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: '#2d3a4a', lineHeight: 2 }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4a9fd4', flexShrink: 0, marginTop: '10px', display: 'inline-block' }} />
                        <span dangerouslySetInnerHTML={{ __html: md(line) }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contexte */}
                <div style={{ padding: '22px 0', borderBottom: '1px solid #f0f3f7' }}>
                  <SectionLabel text={p.sections.context} />
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {(project.users as unknown as string[]).map((u, i) => (
                      <div key={i} style={{ fontSize: '13px', color: '#2d3a4a', background: '#f4f7fb', border: '1px solid #e4eaf3', borderRadius: '8px', padding: '8px 14px' }}>{u}</div>
                    ))}
                  </div>
                </div>

                {/* Solution */}
                <div style={{ padding: '22px 0', borderBottom: '1px solid #f0f3f7' }}>
                  <SectionLabel text={p.sections.solution} />
                  <div style={{ fontSize: '14px', color: '#2d3a4a', lineHeight: 1.75 }} dangerouslySetInnerHTML={{ __html: md(project.solution) }} />
                </div>

                {/* Fonctionnalités */}
                <div style={{ padding: '22px 0', borderBottom: '1px solid #f0f3f7' }}>
                  <SectionLabel text={p.sections.features} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {(project.features as unknown as string[]).map((f, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '13.5px', color: '#2d3a4a', lineHeight: 1.55 }}>
                        <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#deeef9', border: '1px solid #a8cfe8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#2a7db5', flexShrink: 0, marginTop: '1px' }}>✓</div>
                        <span dangerouslySetInnerHTML={{ __html: md(f) }} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bénéfices */}
                <div style={{ padding: '22px 0', borderBottom: '1px solid #f0f3f7' }}>
                  <SectionLabel text={p.sections.benefits} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {(project.benefits as unknown as string[]).map((b, i) => (
                      <div key={i} style={{ fontSize: '13.5px', color: '#2d3a4a', lineHeight: 1.55, background: '#f8fbff', border: '1px solid #e4edf7', borderLeft: '3px solid #4a9fd4', borderRadius: '0 8px 8px 0', padding: '10px 14px' }}>
                        {b}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ROI */}
                <div style={{ padding: '22px 0' }}>
                  <SectionLabel text={p.sections.roi} />
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                    {(project.roi as unknown as { val: string; label: string }[]).map((r, i) => (
                      <div key={i} style={{ background: '#f4f7fb', border: '1px solid #e4eaf3', borderRadius: '10px', padding: '14px 12px', textAlign: 'center' }}>
                        <div style={{ fontFamily: 'var(--font-dm-serif), Georgia, serif', fontSize: '26px', color: '#0f2744', fontWeight: 400, lineHeight: 1, marginBottom: '6px' }}>{r.val}</div>
                        <div style={{ fontSize: '11px', color: '#7a8ea4', lineHeight: 1.4 }}>{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div style={{ background: '#fff', borderTop: '1px solid #edf0f5', padding: '14px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '0 0 16px 16px', flexShrink: 0 }}>
              <button
                onClick={goPrev}
                disabled={open === 0}
                style={{ fontSize: '13px', background: 'none', border: '1px solid #d8e0eb', borderRadius: '8px', padding: '7px 16px', cursor: open === 0 ? 'default' : 'pointer', color: '#2d3a4a', opacity: open === 0 ? 0.4 : 1 }}
              >
                {p.prev}
              </button>
              <span style={{ fontSize: '12px', color: '#9aaabb' }}>{open + 1} / {PROJECTS.length}</span>
              <button
                onClick={goNext}
                disabled={open === PROJECTS.length - 1}
                style={{ fontSize: '13px', background: open === PROJECTS.length - 1 ? 'none' : '#0f2744', color: open === PROJECTS.length - 1 ? '#2d3a4a' : '#fff', border: `1px solid ${open === PROJECTS.length - 1 ? '#d8e0eb' : '#0f2744'}`, borderRadius: '8px', padding: '7px 16px', cursor: open === PROJECTS.length - 1 ? 'default' : 'pointer', opacity: open === PROJECTS.length - 1 ? 0.4 : 1 }}
              >
                {p.next}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lbIndex !== null && project && open !== null && (
        <div
          onClick={closeLb}
          style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'rgba(5,21,37,0.95)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1.5rem 1.5rem 1rem' }}
        >
          <div style={{ width: '100%', maxWidth: '860px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexShrink: 0 }}>
            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
              {lbIndex + 1} / {screenshotUrls[open].length}
            </span>
            <button
              onClick={closeLb}
              style={{ width: 34, height: 34, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)', color: 'white', fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ✕
            </button>
          </div>

          <div onClick={e => e.stopPropagation()} style={{ flex: 1, width: '100%', maxWidth: '860px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 0 }}>
            <img
              src={screenshotUrls[open][lbIndex]}
              alt={project.screenshots[lbIndex]?.title ?? ''}
              style={{ display: 'block', width: '100%', height: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
            />
          </div>

          <p onClick={e => e.stopPropagation()} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', marginTop: '0.6rem', flexShrink: 0 }}>
            {project.screenshots[lbIndex]?.title}
          </p>

          <div onClick={e => e.stopPropagation()} style={{ display: 'flex', gap: '0.5rem', marginTop: '0.6rem', flexWrap: 'wrap', justifyContent: 'center', flexShrink: 0 }}>
            {screenshotUrls[open].map((url, i) => (
              <button
                key={i}
                onClick={() => setLbIndex(i)}
                style={{ width: 48, height: 34, borderRadius: '4px', overflow: 'hidden', border: i === lbIndex ? '2px solid #4a9fd4' : '2px solid transparent', padding: 0, cursor: 'pointer', opacity: i === lbIndex ? 1 : 0.5 }}
              >
                <img src={url} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </button>
            ))}
          </div>

          <div onClick={e => e.stopPropagation()} style={{ display: 'flex', gap: '0.5rem', marginTop: '0.6rem', flexShrink: 0 }}>
            <button onClick={prevLb} disabled={lbIndex === 0} style={{ padding: '0.3rem 0.9rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.07)', color: 'white', fontSize: '0.75rem', cursor: lbIndex === 0 ? 'default' : 'pointer', opacity: lbIndex === 0 ? 0.3 : 1 }}>
              {p.prev}
            </button>
            <button onClick={nextLb} disabled={lbIndex === screenshotUrls[open].length - 1} style={{ padding: '0.3rem 0.9rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.07)', color: 'white', fontSize: '0.75rem', cursor: lbIndex === screenshotUrls[open].length - 1 ? 'default' : 'pointer', opacity: lbIndex === screenshotUrls[open].length - 1 ? 0.3 : 1 }}>
              {p.next}
            </button>
          </div>
        </div>
      )}
    </>
  )
}
