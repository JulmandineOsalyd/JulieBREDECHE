import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'OneDrive Path Checker — Chemins de fichiers trop longs',
  description:
    'Détectez les chemins OneDrive >260 caractères qui bloquent la synchronisation. Analyse 100% locale, export CSV, remédiation intégrée.',
  openGraph: {
    title: 'OneDrive Path Checker — Chemins de fichiers trop longs',
    description:
      'Détectez les chemins OneDrive >260 caractères qui bloquent la synchronisation. Analyse 100% locale, export CSV, remédiation intégrée.',
    url: 'https://juliebredeche.pro/outils/onedrive-path-checker',
    type: 'website',
  },
}

const features = [
  { icon: '📂', title: 'Analyse récursive', text: 'Parcourt tous les sous-dossiers de votre arborescence pour trouver les chemins problématiques.' },
  { icon: '⚡', title: 'Résultats instantanés', text: 'Traitement côté navigateur uniquement, aucun fichier n\'est envoyé sur un serveur.' },
  { icon: '📋', title: 'Export CSV', text: 'Exportez la liste des fichiers problématiques pour planifier votre nettoyage.' },
  { icon: '🎯', title: 'Seuil configurable', text: 'Paramétrez le seuil d\'alerte selon votre contexte (défaut : 260 caractères).' },
]

const faqItems = [
  {
    q: 'Pourquoi les chemins longs posent-ils problème dans OneDrive ?',
    a: 'Windows et OneDrive ont une limite de 260 caractères pour les chemins de fichiers (chemin complet + nom de fichier). Au-delà, les fichiers ne se synchronisent plus et vous obtenez des erreurs silencieuses. Ce problème est particulièrement fréquent lors des migrations depuis des serveurs de fichiers avec des arborescences profondes.',
  },
  {
    q: 'L\'outil envoie-t-il mes fichiers sur Internet ?',
    a: 'Non. L\'outil fonctionne entièrement dans votre navigateur (JavaScript côté client). Vos fichiers ne quittent jamais votre ordinateur. Seuls les noms et chemins des fichiers sont analysés, pas leur contenu.',
  },
  {
    q: 'Quelle est la limite exacte de OneDrive ?',
    a: 'La limite officielle Microsoft est de 400 caractères pour le chemin relatif dans OneDrive, et 260 caractères pour le chemin absolu Windows. En pratique, nous recommandons de rester sous 220 caractères pour avoir une marge de sécurité.',
  },
]

export default function OneDrivePathCheckerPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '5rem 6% 3rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'linear-gradient(135deg, rgba(77,255,214,0.12) 0%, rgba(24,176,232,0.12) 100%)', border: '1px solid rgba(24,176,232,0.3)', borderRadius: '99px', padding: '0.35rem 1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '1rem' }} aria-hidden="true">🛠️</span>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, background: 'var(--grad)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Outil gratuit
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--ink)', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            OneDrive Path Checker
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--muted)', lineHeight: 1.75, maxWidth: '640px', margin: '0 auto 2rem' }}>
            Analysez votre arborescence de fichiers et identifiez en quelques secondes tous les chemins trop longs qui empêcheront la synchronisation OneDrive.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#outil" className="btn-primary">
              Accéder à l&apos;outil ↓
            </a>
            <Link href="/blog/onboarding-rh-copilot" className="btn-outline">
              Lire l&apos;article expliqué
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '3rem 6%', background: 'var(--off)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }} className="features-grid">
          {features.map(({ icon, title, text }) => (
            <div key={title} className="card" style={{ padding: '1.25rem', background: 'white', textAlign: 'center' }}>
              <span style={{ fontSize: '1.75rem', display: 'block', marginBottom: '0.6rem' }} aria-hidden="true">{icon}</span>
              <h3 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '0.4rem' }}>{title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tool embed placeholder */}
      <section id="outil" style={{ padding: '4rem 6%', background: '#ffffff' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '2rem', textAlign: 'center' }}>
            L&apos;outil
          </h2>

          {/* Placeholder — à remplacer par l'outil réel */}
          <div
            style={{
              borderRadius: '20px',
              padding: '4rem 2rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, #60c6ff 0%, #18b0e8 45%, #0f5fad 100%)',
              boxShadow: '0 8px 32px rgba(15, 95, 173, 0.25)',
            }}
          >
            <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }} aria-hidden="true">🚧</span>
            <h3 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.25rem', color: 'white', marginBottom: '0.75rem' }}>
              Outil en cours d&apos;intégration
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '500px', margin: '0 auto 1.5rem' }}>
              L&apos;outil OneDrive Path Checker sera intégré ici directement. En attendant, vous pouvez télécharger le script PowerShell sur GitHub ou contacter Julie pour une démo.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/services"
                style={{
                  background: 'white',
                  color: 'var(--c3)',
                  borderRadius: '10px',
                  padding: '0.65rem 1.4rem',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.12)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                }}
              >
                Besoin d&apos;aide pour OneDrive ?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '4rem 6%', background: 'var(--off)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '2rem', textAlign: 'center' }}>
            Comment utiliser l&apos;outil
          </h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {[
              { n: 1, title: 'Sélectionnez votre dossier', text: 'Cliquez sur "Choisir un dossier" et sélectionnez le dossier racine que vous souhaitez analyser (par exemple, votre dossier "Documents" ou le dossier partagé OneDrive).' },
              { n: 2, title: 'Lancez l\'analyse', text: 'L\'outil parcourt récursivement tous les sous-dossiers et calcule la longueur de chaque chemin de fichier. L\'opération est entièrement côté navigateur.' },
              { n: 3, title: 'Consultez les résultats', text: 'Les fichiers dont le chemin dépasse le seuil configuré (260 caractères par défaut) sont listés avec leur chemin complet et leur longueur.' },
              { n: 4, title: 'Exportez et corrigez', text: 'Exportez la liste en CSV, puis renommez ou déplacez les fichiers problématiques avant de les synchroniser avec OneDrive.' },
            ].map(({ n, title, text }) => (
              <li key={n} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <span style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--grad)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'white', fontWeight: 800, fontSize: '0.9rem' }}>
                  {n}
                </span>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1rem', color: 'var(--ink)', marginBottom: '0.3rem' }}>{title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '4rem 6%', background: '#ffffff' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.75rem', color: 'var(--ink)', marginBottom: '2rem', textAlign: 'center' }}>
            Questions fréquentes
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqItems.map(({ q, a }) => (
              <div key={q} className="card" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1rem', color: 'var(--ink)', marginBottom: '0.65rem' }}>{q}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 6%', background: 'var(--off)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-lora), Georgia, serif', fontWeight: 700, fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>
          Vous planifiez une migration OneDrive ?
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '1.5rem' }}>
          Je vous accompagne de l&apos;audit à la mise en production.
        </p>
        <Link href="/services" className="btn-primary">Voir mes offres →</Link>
      </section>

    </>
  )
}
