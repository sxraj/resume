# Suraj Kumar Portfolio

An Astro-based resume portfolio built for GitHub Pages, with the resume content centralized in one data file and the latest PDF available as a direct download.

## Stack

- Astro
- TypeScript
- `@astrojs/sitemap`
- GitHub Actions for Pages deployment

## Local development

```sh
npm install
npm run dev
```

## Production checks

```sh
ASTRO_TELEMETRY_DISABLED=1 npm run check
ASTRO_TELEMETRY_DISABLED=1 npm run build
```

## Content updates

- Update the page content in `src/data/profile.ts`
- Replace the downloadable resume at `public/resume-suraj-kumar.pdf`

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` deploys automatically on pushes to `main`.

- Project Pages default URL: `https://sxraj.github.io/resume/`
- Custom domain later: add a repository variable named `CUSTOM_DOMAIN`
- Optional canonical site URL: add a repository variable named `SITE_URL`

If you use a custom domain, set `SITE_URL` to the final absolute URL so the sitemap and metadata stay correct.
