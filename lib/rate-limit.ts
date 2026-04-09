const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Cleanup old entries every 5 minutes
setInterval(() => {
  const now = Date.now()
  rateLimitMap.forEach((value, key) => {
    if (now > value.resetTime) {
      rateLimitMap.delete(key)
    }
  })
}, 5 * 60 * 1000)

/**
 * Simple in-memory rate limiter.
 * Returns { allowed: true } if under limit, { allowed: false } otherwise.
 *
 * Note: in serverless (Vercel), each instance has its own map,
 * so this is best-effort — but still blocks naive abuse.
 */
export function rateLimit(
  key: string,
  { maxRequests = 5, windowMs = 60_000 } = {}
): { allowed: boolean } {
  const now = Date.now()
  const entry = rateLimitMap.get(key)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs })
    return { allowed: true }
  }

  entry.count++
  if (entry.count > maxRequests) {
    return { allowed: false }
  }

  return { allowed: true }
}
