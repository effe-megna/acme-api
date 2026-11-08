import { describe, expect, it } from 'vitest'
import { app } from './app.js'

describe('version', () => {
  it('reports the api version', async () => {
    const res = await app.request('/version')
    expect(await res.json()).toEqual({ version: '0.1.0' })
  })
})
