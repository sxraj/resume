// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const customDomain = process.env.CUSTOM_DOMAIN?.trim().replace(/^https?:\/\//, '').replace(/\/+$/, '');
const base = customDomain || !repository ? '/' : `/${repository}`;
const site = process.env.SITE_URL || (customDomain ? `https://${customDomain}` : 'https://sxraj.github.io');

export default defineConfig({
	site,
	base,
	trailingSlash: 'always',
	integrations: [sitemap()],
});
