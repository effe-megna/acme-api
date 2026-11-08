import { describe, expect, it } from 'vitest'
import { app } from './app.js'

const post = (id: string, amount: number) =>
  app.request(`/orders/${id}/refunds`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ amount }),
  })

describe('refunds', () => {
  it('creates a refund for a valid amount', async () => {
    const res = await post('ord_1', 200)
    expect(res.status).toBe(201)
  })

  it('rejects amounts above the order total', async () => {
    const res = await post('ord_1', 999999)
    expect(res.status).toBe(422)
  })

  it('returns 404 for unknown orders', async () => {
    const res = await post('missing', 100)
    expect(res.status).toBe(404)
  })
})
