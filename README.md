# Suraj Kumar Portfolio

A Vite + React resume portfolio built for GitHub Pages, with the resume content centralized in one data file and the latest PDF available as a direct download.

## Stack

- Vite
- React
- TypeScript
- GitHub Actions for Pages deployment

## Local development

```sh
npm install
npm run dev
```

## Production checks

```sh
npm run build
```

## Content updates

- Update the page content in `src/data/profile.ts`
- Replace the downloadable resume at `public/resume-suraj-kumar.pdf`

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` deploys automatically on pushes to `main`.

- Project Pages default URL: `https://sxraj.github.io/resume/`
- Set `CUSTOM_DOMAIN` to your custom domain, such as `surajkumar.in`
- The included `public/CNAME` keeps the deployed Pages site pinned to `surajkumar.in`
- If `CUSTOM_DOMAIN` is empty, Vite falls back to the GitHub project-pages base path automatically
