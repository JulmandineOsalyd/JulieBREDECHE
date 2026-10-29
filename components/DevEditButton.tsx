'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

// Shortcut to the local editor. Hidden inside the editor's own preview frame
// so the editor never opens inside itself.
export default function DevEditButton({ slug }: { slug: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(window.self === window.top)
  }, [])

  if (!visible) return null

  return (
    <Link
      href={`/dev/edit/${slug}`}
      style={{ position: 'fixed', right: '1.5rem', bottom: '1.5rem', zIndex: 50, padding: '0.6rem 1.1rem', borderRadius: '999px', background: 'var(--grad)', color: '#ffffff', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', boxShadow: '0 4px 14px rgba(0,0,0,0.15)' }}
    >
      ✏️ Éditer
    </Link>
  )
}
