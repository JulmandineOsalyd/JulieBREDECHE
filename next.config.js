/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {},
  async headers() {
    const isDev = process.env.NODE_ENV !== 'production'
    const scriptSrc = isDev
      ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com"
      : "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com"
    const connectSrc = isDev
      ? "connect-src 'self' ws: http://localhost:* https://va.vercel-scripts.com"
      : "connect-src 'self' https://va.vercel-scripts.com"
    // In dev, allow same-origin framing so the local editor (/dev/edit) can show the article preview
    const frameAncestors = isDev ? "'self'" : "'none'"
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: isDev ? 'SAMEORIGIN' : 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        {
          key: 'Content-Security-Policy',
          value: `default-src 'self'; ${scriptSrc}; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; ${connectSrc}; frame-ancestors ${frameAncestors}; base-uri 'self'; form-action 'self'; object-src 'none'`
        },
      ],
    }]
  },
}

module.exports = nextConfig
