# Dikshitkumar N — Portfolio

A single-page editorial portfolio for **Dikshitkumar N**, Senior Frontend Engineer (SDE 3).
Built with Vite + React 18 + TypeScript + Tailwind CSS, animated with Framer Motion.

## Stack

- **Vite 5** — build tool
- **React 18** + **TypeScript** — UI
- **Tailwind CSS 3** — styling, design tokens via CSS variables
- **Framer Motion** — scroll-reveal animations
- **Lucide React** — icons
- **@fontsource-variable** — self-hosted Fraunces (display) + Inter (body)

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Deploy

The build output is a static site in `dist/`. Drop it on any static host:

- **Vercel** — `vercel --prod` (zero config)
- **Netlify** — `netlify deploy --prod --dir=dist`
- **GitHub Pages** — change `base` in `vite.config.ts` to `/<repo-name>/`, then push `dist/` to the `gh-pages` branch.

## Edit content

All copy lives in **`src/data/portfolio.ts`** as typed exports. No JSX edits are needed
to change text, swap projects, or update stats.

## Theme

Light is the default; dark mode is opt-in via the sun/moon toggle in the header.
The choice is persisted in `localStorage` and respected by `prefers-color-scheme` on first visit.

## License

MIT — content © Dikshitkumar N.
