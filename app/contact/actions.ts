'use server'

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set')
    return { success: false }
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Contact <julie.bredeche@osalydconsulting.com>',
        to: ['julie.bredeche@osalydconsulting.com'], // TODO: remplacer par votre email
        reply_to: data.email,
        subject: `[Contact] ${data.subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #071828;">Nouveau message de contact</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #4a6080; width: 80px;">Nom</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; color: #4a6080;">Email</td><td style="padding: 8px 0;">${data.email}</td></tr>
              <tr><td style="padding: 8px 0; color: #4a6080;">Sujet</td><td style="padding: 8px 0;">${data.subject}</td></tr>
            </table>
            <hr style="border: none; border-top: 1px solid #cce4f5; margin: 1.5rem 0;" />
            <p style="color: #1e3a5f; line-height: 1.7; white-space: pre-line;">${data.message}</p>
          </div>
        `,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      console.error('Resend error:', err)
      return { success: false }
    }

    return { success: true }
  } catch (error) {
    console.error('sendContactEmail error:', error)
    return { success: false }
  }
}
