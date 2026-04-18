import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync, readFileSync } from 'node:fs';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const siteUrl = process.env.SITE_URL ?? '';
const customDomainFromEnv = process.env.CUSTOM_DOMAIN?.trim() ?? '';
const customDomainFromFile = existsSync('public/CNAME')
	? readFileSync('public/CNAME', 'utf-8').trim()
	: '';
const hasCustomDomain =
	customDomainFromEnv !== '' ||
	customDomainFromFile !== '' ||
	(siteUrl !== '' && !siteUrl.includes('github.io'));

const base = hasCustomDomain ? '/' : repositoryName ? `/${repositoryName}/` : '/';

export default defineConfig({
	plugins: [react()],
	base,
});
