import { describe, expect, it } from 'vitest'
import { app } from './app.js'

describe('ping', () => {
  it('answers pong', async () => {
    const res = await app.request('/ping')
    expect(await res.text()).toBe('pong')
  })
})
