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

app.get('/status', (c) => {
  const orderCount = orders.length
  return c.json({ ok: true, orders: orderCount })
})
