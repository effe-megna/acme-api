import { Hono } from 'hono'

type Order = { id: string; amount: number }

const orders: Order[] = [
  { id: 'ord_1', amount: 1200 },
  { id: 'ord_2', amount: 3400 },
]

export const app = new Hono()

app.get('/health', (c) => c.json({ ok: true }))

app.get('/orders', (c) => c.json(orders))

app.get('/orders/:id', (c) => {
  const order = orders.find((o) => o.id === c.req.param('id'))
  return order ? c.json(order) : c.json({ error: 'not found' }, 404)
})

const refunds: { id: string; orderId: string; amount: number }[] = []

app.post('/orders/:id/refunds', async (c) => {
  const order = orders.find((o) => o.id === c.req.param('id'))
  if (!order) return c.json({ error: 'not found' }, 404)
  const { amount } = await c.req.json<{ amount: number }>()
  if (!Number.isInteger(amount) || amount <= 0 || amount > order.amount) {
    return c.json({ error: 'invalid amount' }, 422)
  }
  const refund = { id: `ref_${refunds.length + 1}`, orderId: order.id, amount }
  refunds.push(refund)
  return c.json(refund, 201)
})
