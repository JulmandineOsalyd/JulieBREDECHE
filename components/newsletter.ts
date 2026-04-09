'use server'

import { z } from 'zod'
import { rateLimit } from '@/lib/rate-limit'

const emailSchema = z.string().email().max(254)

export async function subscribeToNewsletter(email: string, firstName?: string, honeypot?: string) {
  // Honeypot: if filled, silently succeed (bot trap)
  if (honeypot) {
    return { success: true }
  }

  const parsed = emailSchema.safeParse(email)
  if (!parsed.success) {
    return { success: false }
  }

  // Rate limit: 3 subscriptions per minute per email
  const { allowed } = rateLimit(`newsletter:${parsed.data}`, { maxRequests: 3, windowMs: 60_000 })
  if (!allowed) {
    return { success: false }
  }

  const apiKey = process.env.RESEND_NL_API_KEY
  const audienceId = process.env.RESEND_AUDIENCE_ID

  if (!apiKey || !audienceId) {
    console.error('Missing env vars')
    return { success: false }
  }

  try {
    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: parsed.data,
          first_name: firstName || '',
          unsubscribed: false,
        }),
      }
    )

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend Audience error:', err)
      return { success: false }
    }

    return { success: true }
  } catch (error) {
    console.error('subscribeToNewsletter error:', error)
    return { success: false }
  }
}