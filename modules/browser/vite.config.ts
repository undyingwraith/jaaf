/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => ({
	plugins: [
		dts({
			insertTypesEntry: true,
			tsconfigPath: resolve(__dirname, './tsconfig.build.json'),
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
		globals: true,
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
