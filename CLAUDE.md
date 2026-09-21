# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — production build (`vite build`; does not typecheck)
- `npm run typecheck` — `tsc --noEmit -p tsconfig.app.json`
- `npm run lint` — ESLint
- No test runner is configured.

## Architecture

Static, content-driven marketing site for Shri Gaurdas Ji Maharaj (Bolt.new Vite + React 18 + TypeScript + Tailwind 3 template). Client-side routing only (`react-router-dom` v6, `BrowserRouter`).

- `src/App.tsx` declares all routes (Home, Information, Kathas, Events, Bhajan, Gallery, GuruParampara, Contact) inside a shared `Header` / `Footer` layout. Adding a page means: new file in `src/pages/`, a `<Route>` in `App.tsx`, and an entry in `NAV_LINKS`.
- `src/data/content.ts` is the single source of truth for all site copy and data: `SITE` (contact info, social links), `IMAGES` (remote Pexels URLs), `NAV_LINKS`, `KATHAS`, `EVENTS`, `GALLERY_ITEMS`, `GURU_PARAMPARA`, `BHAJANS`, schedules, `SEVA_OPTIONS`, `NEWS_ITEMS`. Pages import from it; edit content there, not in the page components.
- `src/components/PageHero.tsx` is the shared inner-page hero (also scrolls to top on mount, which is how route changes reset scroll).
- Imports use the `@/` alias for `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`); prefer it over relative paths.

## Styling

Tailwind theme in `tailwind.config.js` uses custom palettes: `saffron`/`gold` (identical orange scale), `maroon` (actually a blue-teal scale despite the name), `cream`, `ink`, `forest`. Fonts: Cormorant Garamond (serif, headings, `font-serif-display`) and Inter (body), loaded via Google Fonts `@import` in `src/index.css`. Custom animations (`animate-fade-up`, `animate-fade-in`, `animate-float`, `animate-marquee`) are defined in the Tailwind config.

## Notes

- `@supabase/supabase-js` is a dependency but is not used anywhere yet; there is no backend and no `.env`.
- The Contact form (`src/pages/Contact.tsx`) only toggles a local "submitted" state — it does not send anything.
- `.bolt/prompt` holds the template's design guidance: avoid cookie-cutter designs, use `lucide-react` for icons, and don't add UI/icon packages unless necessary.
