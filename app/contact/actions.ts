'use server'

import { z } from 'zod'
import { rateLimit } from '@/lib/rate-limit'

const contactSchema = z.object({
  name: z.string().min(1, 'Le nom est requis').max(100),
  email: z.string().email('Email invalide').max(254),
  subject: z.string().min(1, 'Le sujet est requis').max(200),
  message: z.string().min(1, 'Le message est requis').max(5000),
  honeypot: z.string().max(0).optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function sendContactEmail(data: ContactFormData) {
  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Données invalides' }
  }

  // Honeypot: if filled, silently succeed (bot trap)
  if (parsed.data.honeypot) {
    return { success: true }
  }

  // Rate limit: 5 submissions per minute per email
  const { allowed } = rateLimit(`contact:${parsed.data.email}`, { maxRequests: 5, windowMs: 60_000 })
  if (!allowed) {
    return { success: false, error: 'Trop de requêtes. Réessayez dans une minute.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('[sendContactEmail] RESEND_API_KEY is not set')
    return { success: false, error: 'Une erreur est survenue. Veuillez réessayer.' }
  }

  const { name, email, subject, message } = parsed.data

  const payload = {
    from: 'Contact <contact@osalydconsulting.com>',
    to: ['julie.bredeche@osalydconsulting.com'],
    reply_to: [email],
    subject: `[Contact] ${escapeHtml(subject)}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #071828;">Nouveau message de contact</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #4a6080; width: 80px;">Nom</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #4a6080;">Email</td><td style="padding: 8px 0;">${escapeHtml(email)}</td></tr>
          <tr><td style="padding: 8px 0; color: #4a6080;">Sujet</td><td style="padding: 8px 0;">${escapeHtml(subject)}</td></tr>
        </table>
        <hr style="border: none; border-top: 1px solid #cce4f5; margin: 1.5rem 0;" />
        <p style="color: #1e3a5f; line-height: 1.7; white-space: pre-line;">${escapeHtml(message)}</p>
      </div>
    `,
  }
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      console.error('[sendContactEmail] Resend error, status:', res.status)
      return { success: false, error: 'Erreur lors de l\'envoi du message.' }
    }

    return { success: true }
  } catch (error) {
    console.error('[sendContactEmail] fetch exception')
    return { success: false, error: 'Erreur lors de l\'envoi du message.' }
  }
}
