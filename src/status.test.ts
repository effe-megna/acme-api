import { describe, expect, it } from 'vitest'
import { app } from './app.js'

describe('status', () => {
  it('reports the order count', async () => {
    const res = await app.request('/status')
    expect(await res.json()).toEqual({ ok: true, orders: 2 })
  })
})
