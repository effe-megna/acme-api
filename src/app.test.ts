import { describe, expect, it } from 'vitest'
import { app } from './app.js'

describe('api', () => {
  it('reports health', async () => {
    const res = await app.request('/health')
    expect(await res.json()).toEqual({ ok: true })
  })

  it('returns 404 for unknown orders', async () => {
    const res = await app.request('/orders/missing')
    expect(res.status).toBe(404)
  })
})
