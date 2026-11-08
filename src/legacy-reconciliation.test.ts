import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

// Simulates a test that breaks on dev for reasons unrelated to the PR under work.
// Toggle `unrelatedFailure` in chaos.json to break or fix it.
const chaos = JSON.parse(readFileSync(new URL('../chaos.json', import.meta.url), 'utf8'))

describe('legacy reconciliation', () => {
  it('reconciles the nightly ledger', () => {
    expect(chaos.unrelatedFailure).toBe(false)
  })
})
