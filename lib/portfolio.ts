// Données partagées entre la liste du portfolio et les pages de cas d'usage.
// L'ordre suit `t.portfolio.projects` dans lib/i18n.

export const projectTechs = [
  ['SharePoint', 'Power Automate', 'Power Apps', 'Powell Intranet'],
  ['Power Automate', 'AI Builder', 'SharePoint', 'Office Scripts'],
  ['Power Apps', 'Power Automate', 'SharePoint', 'Outlook'],
  ['SharePoint', 'Power Automate', 'Forms', 'Teams'],
  ['SharePoint', 'Power Automate', 'Outlook', 'AI Builder'],
]

// Page dédiée d'un cas d'usage ; null = détail affiché dans la fenêtre du portfolio
export const projectPages: (string | null)[] = [
  '/portfolio/ged-qualite',
  '/portfolio/extraction-factures-ocr',
  '/portfolio/reservation-voyages-staff',
  null,
  null,
]

// Vignette de la carte dans la liste ; null = dégradé + icône
export const projectThumbImages: (string | null)[] = [
  '/portfolio/GED/GED-thumbnail.png',
  '/portfolio/LecturePDF/LecturePDF-thumbnail.png',
  '/portfolio/MyBooking/MyBooking-thumbnail.png',
  null,
  null,
]

export const projectVideos: ({ src: string; poster: string } | null)[] = [
  { src: '/portfolio/GED/GED-demo.mp4', poster: '/portfolio/GED/GED-demo-poster.jpg' },
  { src: '/portfolio/LecturePDF/LecturePDF-demo.mp4', poster: '/portfolio/LecturePDF/LecturePDF-demo-poster.jpg' },
  { src: '/portfolio/MyBooking/MyBooking-demo.mp4', poster: '/portfolio/MyBooking/MyBooking-demo-poster.jpg' },
  null,
  null,
]

// SAFETY: only used with static i18n strings — sanitize with DOMPurify if dynamic content is ever passed
export function md(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br><br>')
}
