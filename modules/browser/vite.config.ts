/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => ({
	plugins: [
		tsconfigPaths(),
		dts({
			root: '.',
			tsconfigPath: './src/tsconfig.json',
			rollupTypes: false,
		}),
		!process.env.VITEST && checker({
			typescript: { buildMode: false, tsconfigPath: 'src' }
		}),
	],
	build: {
		emptyOutDir: mode !== 'dev',
		sourcemap: mode == 'dev',
		manifest: false,
		minify: mode == 'dev' ? 'esbuild' : 'terser',
		lib: {
			name: 'jaafBrowser',
			entry: resolve(__dirname, 'src/index.ts'),
			fileName: 'index',
			formats: ['es', 'umd']
		},
		rollupOptions: {
			external: ['@undyingwraith/jaaf-core', 'i18next', 'inversify', 'reflect-metadata'],
			output: {
				globals: {
					'@undyingwraith/jaaf-core': 'jaafCore',
					i18next: 'i18next',
					inversify: 'inversify',
				},
			},
		},
	},
	test: {
		browser: {
			headless: true,
			enabled: true,
			provider: 'playwright',
			instances: [
				{
					browser: 'chromium'
				}
			]
		},
		environment: 'jsdom',
		coverage: {
			reporter: ['text', 'json-summary', 'json'],
			reportOnFailure: true,
			thresholds: {
				lines: 70,
				branches: 70,
				functions: 70,
				statements: 70,
			},
		},
	},
}));
