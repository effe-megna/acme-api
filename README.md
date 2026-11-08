# acme-api

> ⚠️ **Sandbox repo.** This repository exists only to simulate AI harness workflows
> (PR shepherding, CI failures, stacked PRs, cross-repo work, code review).
> The code is intentionally trivial.

## Simulation knobs

`chaos.json`:

- `unrelatedFailure`: when `true`, `src/legacy-reconciliation.test.ts` fails. Simulates a broken test on `dev` unrelated to the PR under work.
- `slowSeconds`: extra seconds the `test` CI job sleeps. Simulates slow CI.

Lint/format failures can be simulated by pushing badly formatted code.

## Scripts

```sh
pnpm install
pnpm lint          # oxlint
pnpm format:check  # prettier
pnpm typecheck     # tsc
pnpm test          # vitest
```

Base branch: `dev`. CI: GitHub Actions (`lint`, `typecheck`, `test` jobs).
