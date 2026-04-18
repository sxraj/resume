// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = process.env.CUSTOM_DOMAIN || !repository ? '/' : `/${repository}`;
const site = process.env.SITE_URL || process.env.CUSTOM_DOMAIN || 'https://sxraj.github.io';

export default defineConfig({
	site,
	base,
	trailingSlash: 'always',
	integrations: [sitemap()],
});
