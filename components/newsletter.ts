'use server'

export async function subscribeToNewsletter(email: string, firstName?: string) {
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
          email,
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