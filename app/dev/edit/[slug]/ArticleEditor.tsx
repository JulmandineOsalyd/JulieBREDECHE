'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const PREVIEW_WIDTH = 1200

type Status ='loading' | 'clean' | 'dirty' | 'saving' | 'error'

const STATUS_LABEL: Record<Status, string> = {
  loading: 'Chargement…',
  clean: 'Enregistré',
  dirty: 'Modifications non enregistrées',
  saving: 'Enregistrement…',
  error: 'Erreur',
}

export default function ArticleEditor({ slug }: { slug: string }) {
  const [content, setContent] = useState('')
  const [status, setStatus] = useState<Status>('loading')
  const [error, setError] = useState('')
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const scrollRef = useRef(0)

  useEffect(() => {
    fetch(`/api/dev/article?slug=${encodeURIComponent(slug)}&locale=fr`)
      .then(async (res) => {
        const data = await res.json()
        if (!res.ok) throw new Error(data.error ?? 'Lecture impossible')
        setContent(data.content)
        setStatus('clean')
      })
      .catch((e: Error) => {
        setError(e.message)
        setStatus('error')
      })
  }, [slug])

  const save = useCallback(async () => {
    setStatus('saving')
    try {
      const res = await fetch('/api/dev/article', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug, locale: 'fr', content }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Enregistrement impossible')
      setError('')
      setStatus('clean')
      // Reload the preview while keeping its scroll position
      const frame = iframeRef.current
      if (frame?.contentWindow) {
        scrollRef.current = frame.contentWindow.scrollY
        frame.contentWindow.location.reload()
      }
    } catch (e) {
      setError((e as Error).message)
      setStatus('error')
    }
  }, [slug, content])

  // Ctrl+S / Cmd+S saves
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
        e.preventDefault()
        save()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [save])

  // Warn before leaving with unsaved changes
  useEffect(() => {
    const onBeforeUnload = (e: BeforeUnloadEvent) => {
      if (status === 'dirty') e.preventDefault()
    }
    window.addEventListener('beforeunload', onBeforeUnload)
    return () => window.removeEventListener('beforeunload', onBeforeUnload)
  }, [status])

  const restoreScroll = () => {
    iframeRef.current?.contentWindow?.scrollTo(0, scrollRef.current)
  }

  // Render the preview at desktop width, scaled down to fit its column
  const previewBoxRef = useRef<HTMLDivElement>(null)
  const [previewSize, setPreviewSize] = useState({ scale: 1, height: 0 })
  useEffect(() => {
    const box = previewBoxRef.current
    if (!box) return
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      const scale = Math.min(1, width / PREVIEW_WIDTH)
      setPreviewSize({ scale, height: height / scale })
    })
    observer.observe(box)
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', flexDirection: 'column', padding: '1rem 1.5%', gap: '0.75rem', background: '#ffffff' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <strong style={{ color: 'var(--ink)' }}>Édition locale : {slug}</strong>
        <span style={{ fontSize: '0.85rem', color: status === 'error' ? '#c0392b' : 'var(--muted)' }}>
          {status === 'error' ? `${STATUS_LABEL.error} : ${error}` : STATUS_LABEL[status]}
        </span>
        <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Ctrl+S pour enregistrer</span>
        <button
          onClick={save}
          disabled={status === 'loading' || status === 'saving'}
          style={{ marginLeft: 'auto', padding: '0.5rem 1.25rem', borderRadius: '8px', border: 'none', background: 'var(--grad)', color: '#ffffff', fontWeight: 600, cursor: 'pointer' }}
        >
          Enregistrer
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '1rem', flex: 1, minHeight: 0 }}>
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value)
            setStatus('dirty')
          }}
          disabled={status === 'loading'}
          spellCheck
          lang="fr"
          style={{ width: '100%', height: '100%', resize: 'none', padding: '1rem', fontFamily: 'ui-monospace, Consolas, monospace', fontSize: '0.875rem', lineHeight: 1.6, border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--ink)' }}
        />
        <div ref={previewBoxRef} style={{ position: 'relative', overflow: 'hidden', border: '1px solid var(--border)', borderRadius: '8px' }}>
          <iframe
            ref={iframeRef}
            src={`/blog/${slug}`}
            onLoad={restoreScroll}
            title="Aperçu de l'article"
            style={{ position: 'absolute', top: 0, left: 0, width: PREVIEW_WIDTH, height: previewSize.height, border: 'none', transform: `scale(${previewSize.scale})`, transformOrigin: 'top left' }}
          />
        </div>
      </div>
    </div>
  )
}
