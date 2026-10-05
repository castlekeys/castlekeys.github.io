# Castle Keys of Texas

Static marketing site for [castlekeysoftexas.com](https://castlekeysoftexas.com). Next.js (App Router), React, TypeScript, Tailwind CSS, deployed to GitHub Pages.

## Requirements

- Node.js **20.9 or later** (`engines` in `package.json`). Node 24 is fine locally. GitHub Actions still builds with Node 20.
- npm

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in Chrome or Safari. Cursor's Simple Browser often fails with Next.js dev mode.

### Contact form (optional)

Add `.env.local` in the project root:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here
```

Restart the dev server. Without it, the form shows a phone/email fallback instead of submitting. In CI, the key comes from the GitHub Actions secret `WEB3FORMS_ACCESS_KEY`.

## Production preview

```bash
npm run build
npx serve out
```

Open the URL printed by `serve`. Output goes to `out/` via static export (`output: 'export'` in `next.config.mjs`). That folder is the same artifact GitHub Pages serves.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Static export to `out/` |
| `npm run export` | Same as `build` (used in CI) |

## Deployment

Pushes to `main` run `.github/workflows/nextjs.yml`: `npm ci` → `npm run export` → deploy `out/`. Custom domain: `castlekeysoftexas.com` (`CNAME`).

## Troubleshooting

| Issue | Fix |
| --- | --- |
| `EBADENGINE` warning | Use Node 20.9 or later |
| Port in use | `npm run dev -- -p 3001` |
| Stale build | `rm -rf .next out node_modules && npm ci` |

Do not run `npm audit fix --force`. That flag can downgrade Next.js.
