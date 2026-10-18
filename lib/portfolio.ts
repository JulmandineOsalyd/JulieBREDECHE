import { fr } from '@/lib/i18n/fr'

type Media = {
  video?: { src: string; poster: string }
  screenshots: string[]
}

// Médias par cas d'usage (fichiers de public/portfolio), indexés par slug
export const projectMedia: Record<string, Media> = {
  'ged-qualite': {
    video: { src: '/portfolio/GED/GED-demo.mp4', poster: '/portfolio/GED/GED-demo-poster.jpg' },
    screenshots: [],
  },
  'extraction-factures-ocr': {
    screenshots: [
      '/portfolio/LecturePDF/0.png',
      '/portfolio/LecturePDF/1.png',
      '/portfolio/LecturePDF/2.png',
      '/portfolio/LecturePDF/3.png',
    ],
  },
  'reservations-centralisees': {
    screenshots: [
      '/portfolio/MyBooking/MyBooking-Home.png',
      '/portfolio/MyBooking/MyBooking-Form1.png',
      '/portfolio/MyBooking/MyBooking-Form2.png',
      '/portfolio/MyBooking/MyBooking-Form3.png',
      '/portfolio/MyBooking/MyBooking-MobileHome.png',
      '/portfolio/MyBooking/MyBooking-MobileForm.png',
      '/portfolio/MyBooking/MyBooking-BackOffice.png',
    ],
  },
  contratheque: {
    screenshots: [
      '/portfolio/Contratheque/Contratheque-BoutonEnvoi.png',
      '/portfolio/Contratheque/Contratheque-Form.png',
      '/portfolio/Contratheque/Contratheque-Classement.png',
      '/portfolio/Contratheque/Contratheque-Recherche.png',
    ],
  },
  'reporting-automatise': {
    screenshots: [
      '/portfolio/DailyReport/DailyReport-Calendar.png',
      '/portfolio/DailyReport/DailyReport-ListView.png',
      '/portfolio/DailyReport/DailyReport-Prompt.png',
    ],
  },
}

// Section « Avant / après » de la page cas d'usage, encore à valider
export const SHOW_BEFORE_AFTER = true

export const projectSlugs = fr.portfolio.projects.map(p => p.slug)

export function getProjectFr(slug: string) {
  return fr.portfolio.projects.find(p => p.slug === slug)
}

// SAFETY: only used with static i18n strings — sanitize with DOMPurify if dynamic content is ever passed
export function md(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br><br>')
}

export function stripMd(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, '$1')
}
