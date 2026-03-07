import Link from 'next/link'

export default function NotFound() {
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
          404
        </div>
        <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '1rem' }}>
          Page introuvable
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
          Cette page n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil ou explorez le blog.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary">Retour à l&apos;accueil</Link>
          <Link href="/blog" className="btn-outline">Voir le blog</Link>
        </div>
      </div>
    </section>
  )
}
