# CLAUDE.md — Baseball 101

Context for Claude Code (or a future Claude session) picking up this repo cold.
Built from an approved spec via the `app-development` skill — see git history /
the spec HTML for the full mockups and rationale if you need them.

## On opening this repo, run automatically

```
npm install && npm run build
```

**This has never actually run end-to-end.** The repo was built in a sandboxed
environment with no network access, so `npm install` was never executed and
`npm run build` was never verified — every file was hand-written against
each package's known API. Treat the first `npm install && npm run build` as
a real verification step, not a formality: fix whatever breaks and re-run
until the build is clean before doing anything else you were asked to do.

Likely first-run friction points, roughly in the order you'll hit them:

1. **No `package-lock.json` exists yet.** It couldn't be generated offline.
   `npm install` will create it — commit it once you have it. After that,
   CI uses `npm ci`, which requires the lockfile to already be committed.
2. **`virtual:pwa-register/react`** (imported in `src/components/layout/UpdateBanner.jsx`)
   is a virtual module supplied by `vite-plugin-pwa` at build/dev time — it
   won't resolve outside a Vite process (e.g. don't try to unit-test that
   file in isolation without mocking it).
3. **`vite.config.js` sets `base: '/baseball-101/'`** for GitHub Pages project-site
   routing. If the repo is renamed, update `base` here *and* the two
   `start_url` / `scope` / icon paths in `public/manifest.webmanifest` to match —
   they're not derived automatically from `base`.
4. Tailwind's `content` globs in `tailwind.config.js` only match `.js`/`.jsx` —
   fine as-is since there are no `.ts`/`.tsx` files, just don't add any
   without updating the glob.

## What you can NOT do here, even if asked

- Create the actual GitHub repository or push the first commit to it.
- Enable GitHub Pages in the repo's Settings → Pages (one-time manual step:
  set Source to "GitHub Actions").
- Push directly to `main` in a way that triggers an unreviewed deploy —
  open a PR instead unless explicitly told otherwise.
- There are no secrets/API keys in this project, so there's nothing to
  provision there — but if that ever changes, obtaining real secret values
  is still not something to do from here.

## Architecture

```
src/
  data/          static bilingual content ({ he, en } on every user-facing
                 string) — positions, rules, scoreboard example, quiz bank.
                 No backend: this *is* the database.
  context/       AppContext.jsx — single provider wrapping useLanguage +
                 useProgress + current screen, so deeply nested components
                 don't need props threaded through every level.
  hooks/         useLanguage, useProgress (both localStorage-backed),
                 usePitchCount (local-only state machine, not persisted —
                 it's a scratch demo widget, not real game state).
  components/    grouped by module (diamond/ rules/ scoreboard/ quiz/) plus
                 layout/ for the header, bottom nav, language toggle, and
                 the PWA update banner.
  screens/       one per module (Home, Diamond=positions, Rules, Scoreboard,
                 Quiz) — thin components that lay out that module's own
                 components.
App.jsx          the shell: header + active screen + bottom nav. Screen
                 switching is a plain useState('home' | 'positions' | ...)
                 in AppContext — no react-router, deliberately (see below).
```

## Intentional decisions — do not revert without asking

- **Plain `useState` screen switching instead of a router.** Five screens,
  no deep-linking requirement, no back-button semantics needed — adding
  `react-router-dom` would be pure overhead. If deep-linking or shareable
  URLs become a real requirement, that's the trigger to revisit this, not
  "routers are more standard."
- **`AppContext.jsx` isn't in the originally sketched file tree.** It was
  added during the build to distribute `useLanguage`/`useProgress` without
  prop-drilling through `Header` → `LanguageToggle` and every screen. It
  only *distributes* those hooks' state — the hooks still own all the
  actual logic, per the skill's "logic separated from UI" rule.
- **Base-to-module mapping on the home diamond is thematic, not arbitrary:**
  1st base → positions, 2nd → rules, 3rd → scoreboard, home plate → quiz.
  Finishing the quiz "completes the circuit" back to home — that's the
  whole point of the diamond-as-nav idea from the spec. Don't reorder the
  bases without preserving that logic (or the metaphor breaks).
- **Bottom nav has 5 tabs (home + all 4 modules), not 4.** The original
  spec mockup's bottom nav accidentally omitted "scoreboard" — this was a
  mockup inconsistency, not a real decision to hide that tab. Fixed here.
- **No sequential locking between modules.** All four modules are always
  reachable, regardless of what's been visited. "Progress" is tracked
  purely for the checkmarks/progress bar, not to gate access. This was a
  simplification made during the build, not something the user asked to
  keep loose or tight — worth confirming if it should ever get stricter.
- **"Module completed" = visited, for positions/rules/scoreboard** (marked
  on screen mount). **For quiz it means actually finished** (score
  recorded). This asymmetry is intentional: there's no natural
  "completion" moment for a scrollable info screen, but the quiz has one.
- **Scoreboard example is deliberately generic** ("קבוצת הבית" / "קבוצת
  האורחים", not a real team) — explicit user decision, not a placeholder
  to fill in later.
- **Language toggle is a real `dir`/`lang`-switching i18n layer**
  (`useLanguage`, every data file shaped `{ he, en }`), not just bilingual
  labels shown side by side. This was an explicit upgrade from the
  original open question's phrasing.
- **Progress/quiz score live only in `localStorage`** — no backend, no
  account, nothing to sync across devices. Explicit user decision.

## Commands reference

```
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Deployment model

Fully automatic once set up: any push to `main` triggers
`.github/workflows/deploy.yml`, which builds with Vite and deploys `dist/`
to GitHub Pages via `actions/deploy-pages`.

One-time manual steps outside this repo's automation (not something Claude
Code can do from here):

1. Create the GitHub repository and push this code (after running
   `npm install` once to generate `package-lock.json` — see above).
2. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. First push to `main` after that will build and deploy automatically.

No Netlify, no Firebase, no environment variables/secrets — there's no
backend, auth, or API key in this app, so none of that infrastructure is
needed (see the spec's Stack section for the rationale).
