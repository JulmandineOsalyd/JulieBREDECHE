'use client'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section style={{ padding: '8rem 6%', background: '#ffffff', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '540px', margin: '0 auto' }}>
        <div
          style={{
            fontFamily: 'var(--font-lora), Georgia, serif',
            fontWeight: 800,
            fontSize: '6rem',
            lineHeight: 1,
            background: 'var(--grad)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '1rem',
          }}
        >
          Oops
        </div>
        <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '1rem' }}>
          Une erreur est survenue
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
          Quelque chose ne s&apos;est pas pass&eacute; comme pr&eacute;vu. Vous pouvez r&eacute;essayer ou revenir &agrave; l&apos;accueil.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={reset} className="btn-primary">R&eacute;essayer</button>
          <a href="/" className="btn-outline">Accueil</a>
        </div>
      </div>
    </section>
  )
}
