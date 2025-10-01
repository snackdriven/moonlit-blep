# Patrick & Kayla — Save‑the‑Date (React + Vite + Tailwind)

Gothic invite aesthetic with silver serif typography, subtle vines, and a live countdown.

## Local Development
```bash
npm install
npm run dev
```

## Deploy to GitHub Pages (project site)
This repo is preconfigured for GitHub Pages via Actions. Push to `main` and the workflow will build and publish to `gh-pages`.

1) Create a new GitHub repo and push this code.
2) In **Settings → Pages**, set **Source** to **Deploy from a branch** and select the `gh-pages` branch (it will appear after the first deployment).
3) The site will be available at `https://<username>.github.io/<repo>/`.

The Vite `base` is auto‑detected from `GITHUB_REPOSITORY` during CI, so no manual change is needed. See Vite static deploy docs for background. 

## Tailwind v4 + Vite
This project uses the official Tailwind Vite plugin and the `@import "tailwindcss";` single‑file setup.

## Hotel Photo
Replace `public/crescent.jpg` with a properly licensed image of the 1886 Crescent Hotel.
A good starting point is the Wikimedia Commons category (check the license and provide attribution in this README):
- https://commons.wikimedia.org/wiki/Category:Crescent_Hotel_(Eureka_Springs,_Arkansas)

## Credits / References
- GitHub Pages Quickstart: https://docs.github.com/en/pages/quickstart
- Vite Static Deploy (GitHub Pages): https://vite.dev/guide/static-deploy
- Tailwind CSS with Vite: https://tailwindcss.com/docs
