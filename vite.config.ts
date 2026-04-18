import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const customDomain = process.env.CUSTOM_DOMAIN?.trim().replace(/^https?:\/\//, '').replace(/\/+$/, '');
const base = customDomain || !repository ? '/' : `/${repository}/`;

export default defineConfig({
	base,
	plugins: [react()],
});
