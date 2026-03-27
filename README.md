# Globake — Global cookie recipes

This repository contains a small React site for Globake — a cookie brand inspired by flavors around the world and a passport-stamp brand identity.

Features
- Single-page React app (Vite)
- Four recipe cards matching requested recipes and countries
- Visual brand cues: minimal logo, world-map motif, passport-stamp decor, and country palettes

Run locally
1. Install dependencies

```bash
npm install
```

2. Start dev server

```bash
npm run dev
```

Open http://localhost:5173

Next steps
- Add full recipe pages or modals with step-by-step instructions and images
- Add build/deploy pipeline (Netlify/Vercel)
- Improve accessibility and add i18n

Deploying to GitHub Pages

There are two easy options to publish this site on GitHub Pages. Pick one.

Option A — Manual (serve from the `docs/` folder on the `main` branch)
- This repo is configured so that Vite builds into `docs/` (see `vite.config.js`).
- Steps:

```bash
# 1. Build into docs/
npm run build

# 2. Commit the generated docs folder
git add docs
git commit -m "chore: add docs build for GitHub Pages"
git push origin main
```

- Then go to your GitHub repo > Settings > Pages and set "Source" to "Branch: main" and folder: `/docs`.
- Your site will be available at: https://<your-username>.github.io/cookie_idea/ (or similar depending on repo name).

Notes/assumptions: `vite.config.js` base is set to `/cookie_idea/`. If your repository name is different, update the `base` value in `vite.config.js` accordingly before building.

Option B — Automatic (GitHub Actions deploy to gh-pages)
- I added a GitHub Actions workflow at `.github/workflows/gh-pages.yml` which will build the site and publish the `docs/` folder to the `gh-pages` branch whenever you push to `main`.
- Steps to enable:

```bash
# 1. Commit & push your code (including the new workflow file)
git add -A
git commit -m "chore: add GitHub Pages workflow"
git push origin main
```

- The workflow runs automatically. After it completes, go to your repo > Settings > Pages and set the source to "gh-pages" branch (usually the workflow sets this automatically). The site will be live at the pages URL shown there.

Troubleshooting & tips
- If you change the repo name, update `base` in `vite.config.js`, then rebuild.
- If the site shows 404 or asset paths are broken, your `base` is likely incorrect. For a repository named `my-repo`, base should be `/my-repo/`.
- To preview the production build locally:

```bash
npm run build
npx serve docs
```

Want me to push these workflow changes and/or run the build and confirm the generated `docs/` folder here? I can run the build locally and report the results if you want.

Farmers market & handing out flyers
- This site includes a printable flyer layout — open the site, click "Print Flyer" and use your browser's print dialog to create handouts for markets.
- Each recipe card has an "Order for pickup" button which opens your mail client prefilled to email orders to hello@globake.co (replace with your business email).
- The subscription box opens an email subscription to collect market attendees who want schedule updates.

Suggested next steps before markets:
- Replace `hello@globake.co` with your real order email address in `src/components/RecipeCard.jsx` and `src/App.jsx`.
- Add product photos to `src/assets` and display them in `RecipeCard` for better stall visuals.
- Create a small printed batch of QR-code stickers linking to the site for easy scans at every stall.
# cookie_idea
add cookie page