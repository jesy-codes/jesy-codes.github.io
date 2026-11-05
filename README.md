# jesy-codes.github.io

Personal site for Jesica Ramirez Toscano. React + Vite + Tailwind v4, based on the Figma Make proposal in `figma example/` (git-ignored; kept locally as the design reference).

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
```

## Editing content

All copy lives in `src/App.tsx` (the arrays at the top: `projects`, `experience`, `education`). The résumé PDF is `public/Jesica_Ramirez_Toscano_Resume.pdf`. Its LaTeX source is in `resume/`: edit `resume/cv_1.tex`, build with `cd resume && latexmk -pdf cv_1.tex`, then copy `cv_1.pdf` over the PDF in `public/` to update it.

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages. One-time setup: in the repo on GitHub, go to Settings → Pages → Source and choose **GitHub Actions**.
