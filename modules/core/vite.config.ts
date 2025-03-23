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
			name: 'jaafCore',
			entry: resolve(__dirname, 'src/index.ts'),
			fileName: 'index',
			formats: ['es', 'umd']
		},
		rollupOptions: {
			external: ['i18next', 'inversify', 'reflect-metadata'],
			output: {
				globals: {
					i18next: 'i18next',
					inversify: 'inversify',
				},
			},
		},
	},
	test: {
		coverage: {
			reporter: ['text', 'json-summary', 'json'],
			reportOnFailure: true,
			thresholds: {
				lines: 60,
				branches: 60,
				functions: 60,
				statements: 60,
			},
		},
	},
}));
