import fs from 'fs'
import path from 'path'
import { NextRequest, NextResponse } from 'next/server'

// Local editor backend: reads and writes article MDX files.
// Only active on the dev server, and only for requests coming from this machine.

const CONTENT_DIR = path.join(process.cwd(), 'content/blog')
const SLUG_RE = /^[a-z0-9-]+$/
const LOCAL_HOSTS = ['localhost', '127.0.0.1', '[::1]']

function isAllowed(req: NextRequest) {
  if (process.env.NODE_ENV !== 'development') return false
  const host = (req.headers.get('host') ?? '').replace(/:\d+$/, '')
  return LOCAL_HOSTS.includes(host)
}

function resolveFile(slug: unknown, locale: unknown): string | null {
  if (typeof slug !== 'string' || !SLUG_RE.test(slug)) return null
  if (locale !== 'fr' && locale !== 'en') return null
  const filePath = path.join(CONTENT_DIR, locale, `${slug}.mdx`)
  return fs.existsSync(filePath) ? filePath : null
}

export async function GET(req: NextRequest) {
  if (!isAllowed(req)) return new NextResponse(null, { status: 404 })
  const { searchParams } = req.nextUrl
  const filePath = resolveFile(searchParams.get('slug'), searchParams.get('locale') ?? 'fr')
  if (!filePath) return NextResponse.json({ error: 'Article introuvable' }, { status: 404 })
  return NextResponse.json({ content: fs.readFileSync(filePath, 'utf-8') })
}

export async function PUT(req: NextRequest) {
  if (!isAllowed(req)) return new NextResponse(null, { status: 404 })
  const body = await req.json().catch(() => null)
  const filePath = resolveFile(body?.slug, body?.locale ?? 'fr')
  if (!filePath) return NextResponse.json({ error: 'Article introuvable' }, { status: 404 })
  if (typeof body.content !== 'string' || !body.content.startsWith('---')) {
    return NextResponse.json({ error: 'Contenu invalide : le frontmatter est manquant' }, { status: 400 })
  }
  fs.writeFileSync(filePath, body.content, 'utf-8')
  return NextResponse.json({ ok: true })
}
