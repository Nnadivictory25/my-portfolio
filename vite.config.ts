import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	define: {
		// Polyfill File API for Node.js environment
		'global.File': 'undefined',
		'global.FileReader': 'undefined',
		'global.Blob': 'undefined'
	},
	optimizeDeps: {
		exclude: ['undici']
	},
	ssr: {
		noExternal: ['undici']
	}
});
