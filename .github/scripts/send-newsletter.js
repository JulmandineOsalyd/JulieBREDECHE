#!/usr/bin/env node
/**
 * send-newsletter.js
 * Reads a FR MDX article file, creates a Resend Broadcast and sends it.
 *
 * Usage:
 *   node .github/scripts/send-newsletter.js content/blog/fr/my-article.mdx
 *
 * Required env vars:
 *   RESEND_NL_API_KEY   — Resend API key
 *   RESEND_AUDIENCE_ID  — Resend Audience ID
 */

const fs = require('fs')
const path = require('path')

// ---------------------------------------------------------------------------
// 1. Parse arguments
// ---------------------------------------------------------------------------
const filePath = process.argv[2]
if (!filePath) {
  console.error('Usage: node send-newsletter.js <path-to-mdx-file>')
  process.exit(1)
}

const apiKey = process.env.RESEND_NL_API_KEY
const audienceId = process.env.RESEND_AUDIENCE_ID

if (!apiKey || !audienceId) {
  console.error('Missing RESEND_NL_API_KEY or RESEND_AUDIENCE_ID env vars')
  process.exit(1)
}

// ---------------------------------------------------------------------------
// 2. Parse frontmatter
// ---------------------------------------------------------------------------
const raw = fs.readFileSync(filePath, 'utf8')
const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/)
if (!fmMatch) {
  console.error('No frontmatter found in', filePath)
  process.exit(1)
}

function parseFrontmatter(fm) {
  const result = {}
  for (const line of fm.split('\n')) {
    const m = line.match(/^(\w+):\s*"?([^"]*)"?$/)
    if (m) result[m[1]] = m[2].trim()
  }
  return result
}

const fm = parseFrontmatter(fmMatch[1])

// Safety checks
if (fm.draft === 'true') {
  console.log('Article is a draft — newsletter skipped.')
  process.exit(0)
}
if (fm.send_newsletter !== 'true') {
  console.log('send_newsletter is not set to true — newsletter skipped.')
  process.exit(0)
}

const title = fm.title || 'Nouvel article'
const excerpt = fm.excerpt || ''
const slug = fm.slug || path.basename(filePath, '.mdx')
const category = fm.category || ''

const articleUrl = `https://juliebredeche.pro/blog/${slug}`

// ---------------------------------------------------------------------------
// 3. Build email HTML
// ---------------------------------------------------------------------------
const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f9f9f9;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#5ceae8 0%,#18b0e8 45%,#0f5fad 100%);padding:32px 40px;">
              <p style="margin:0;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:#ffffff;opacity:0.8;">${category}</p>
              <h1 style="margin:8px 0 0;font-size:22px;font-weight:700;color:#ffffff;line-height:1.35;">${title}</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 40px;">
              <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#374151;">${excerpt}</p>

              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:8px;background:linear-gradient(135deg,#5ceae8 0%,#18b0e8 45%,#0f5fad 100%);">
                    <a href="${articleUrl}"
                       style="display:inline-block;padding:12px 28px;font-size:14px;font-weight:700;color:#ffffff;text-decoration:none;">
                      Lire l'article →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px 32px;border-top:1px solid #f0f0f0;">
              <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                Vous recevez cet email car vous êtes abonné(e) à la newsletter de Julie BREDECHE.<br />
                <a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#9ca3af;">Se désabonner</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

// ---------------------------------------------------------------------------
// 4. Create Broadcast
// ---------------------------------------------------------------------------
async function main() {
  console.log(`Creating broadcast for: ${title}`)

  const createRes = await fetch('https://api.resend.com/broadcasts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      audience_id: audienceId,
      from: 'Julie BREDECHE <julie.bredeche@osalydconsulting.com>',
      reply_to: 'julie.bredeche@osalydconsulting.com',
      subject: title,
      html,
    }),
  })

  if (!createRes.ok) {
    const err = await createRes.text()
    console.error('Failed to create broadcast:', err)
    process.exit(1)
  }

  const { id: broadcastId } = await createRes.json()
  console.log(`Broadcast created: ${broadcastId}`)

  // -------------------------------------------------------------------------
  // 5. Send Broadcast
  // -------------------------------------------------------------------------
  const sendRes = await fetch(`https://api.resend.com/broadcasts/${broadcastId}/send`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })

  if (!sendRes.ok) {
    const err = await sendRes.text()
    console.error('Failed to send broadcast:', err)
    process.exit(1)
  }

  console.log(`Broadcast sent successfully!`)
  console.log(`Article: ${articleUrl}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
