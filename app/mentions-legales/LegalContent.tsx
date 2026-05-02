'use client'

import { useTranslation } from '@/lib/i18n'

export default function LegalContent() {
  const { t } = useTranslation()
  const l = t.legal

  const sectionStyle: React.CSSProperties = {
    marginBottom: '2.5rem',
  }
  const blockStyle: React.CSSProperties = {
    marginBottom: '1.75rem',
  }
  const blockTitleStyle: React.CSSProperties = {
    fontFamily: 'var(--font-jakarta), system-ui, sans-serif',
    fontWeight: 700,
    fontSize: '1.05rem',
    color: 'var(--ink)',
    margin: '0 0 0.5rem',
  }
  const bodyStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    lineHeight: 1.7,
    color: 'var(--ink)',
    margin: 0,
  }
  const listStyle: React.CSSProperties = {
    fontSize: '0.95rem',
    lineHeight: 1.7,
    color: 'var(--ink)',
    margin: '0.5rem 0 0',
    padding: 0,
    listStyle: 'none',
  }
  const itemStyle: React.CSSProperties = {
    position: 'relative',
    paddingLeft: '1.5rem',
    marginBottom: '0.5rem',
  }
  const bulletStyle: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    top: '0.65rem',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    background: 'var(--c2)',
  }
  const sectionTitleStyle: React.CSSProperties = {
    fontFamily: 'var(--font-lora), Georgia, serif',
    fontWeight: 700,
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    color: 'var(--ink)',
    margin: '0 0 1.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid var(--border)',
  }

  return (
    <article style={{ padding: '4rem 6% 5rem', background: '#ffffff' }}>
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <header style={{ marginBottom: '3rem' }}>
          <h1
            style={{
              fontFamily: 'var(--font-lora), Georgia, serif',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 2.75rem)',
              color: 'var(--ink)',
              lineHeight: 1.2,
              margin: '0 0 1rem',
            }}
          >
            {l.pageTitle}
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 0.75rem' }}>
            {l.intro}
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--muted)', margin: 0 }}>
            {l.updatedLabel} : {l.updatedDate}
          </p>
        </header>

        {/* Mentions légales */}
        <section style={sectionStyle} aria-labelledby="legal-section">
          <h2 id="legal-section" style={sectionTitleStyle}>
            {l.legalSection.title}
          </h2>

          <div style={blockStyle}>
            <h3 style={blockTitleStyle}>{l.legalSection.editor.title}</h3>
            <p style={bodyStyle}>{l.legalSection.editor.body}</p>
          </div>

          <div style={blockStyle}>
            <h3 style={blockTitleStyle}>{l.legalSection.director.title}</h3>
            <p style={bodyStyle}>{l.legalSection.director.body}</p>
          </div>

          <div style={blockStyle}>
            <h3 style={blockTitleStyle}>{l.legalSection.host.title}</h3>
            <p style={bodyStyle}>{l.legalSection.host.body}</p>
          </div>

          <div style={blockStyle}>
            <h3 style={blockTitleStyle}>{l.legalSection.ip.title}</h3>
            <p style={bodyStyle}>{l.legalSection.ip.body}</p>
          </div>
        </section>

        {/* Politique de confidentialité */}
        <section style={sectionStyle} aria-labelledby="privacy-section">
          <h2 id="privacy-section" style={sectionTitleStyle}>
            {l.privacySection.title}
          </h2>

          <div style={blockStyle}>
            <h3 style={blockTitleStyle}>{l.privacySection.controller.title}</h3>
            <p style={bodyStyle}>{l.privacySection.controller.body}</p>
          </div>

          <div style={blockStyle}>
            <h3 style={blockTitleStyle}>{l.privacySection.data.title}</h3>
            <p style={bodyStyle}>{l.privacySection.data.intro}</p>
            <ul style={listStyle}>
              {l.privacySection.data.items.map((item, i) => (
                <li key={i} style={itemStyle}>
                  <span style={bulletStyle} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={blockStyle}>
            <h3 style={blockTitleStyle}>{l.privacySection.cookies.title}</h3>
            <p style={bodyStyle}>{l.privacySection.cookies.body}</p>
          </div>

          <div style={blockStyle}>
            <h3 style={blockTitleStyle}>{l.privacySection.retention.title}</h3>
            <ul style={listStyle}>
              {l.privacySection.retention.items.map((item, i) => (
                <li key={i} style={itemStyle}>
                  <span style={bulletStyle} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={blockStyle}>
            <h3 style={blockTitleStyle}>{l.privacySection.processors.title}</h3>
            <p style={bodyStyle}>{l.privacySection.processors.intro}</p>
            <ul style={listStyle}>
              {l.privacySection.processors.items.map((item, i) => (
                <li key={i} style={itemStyle}>
                  <span style={bulletStyle} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div style={blockStyle}>
            <h3 style={blockTitleStyle}>{l.privacySection.rights.title}</h3>
            <p style={bodyStyle}>{l.privacySection.rights.intro}</p>
            <ul style={listStyle}>
              {l.privacySection.rights.items.map((item, i) => (
                <li key={i} style={itemStyle}>
                  <span style={bulletStyle} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ ...bodyStyle, marginTop: '0.75rem' }}>{l.privacySection.rights.contact}</p>
          </div>
        </section>
      </div>
    </article>
  )
}
