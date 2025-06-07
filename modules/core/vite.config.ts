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
		emptyOutDir: mode != 'dev',
		sourcemap: mode == 'dev',
		manifest: false,
		minify: mode == 'dev' ? 'esbuild' : 'terser',
		lib: {
			name: 'jaafCore',
			entry: resolve(__dirname, 'src/index.ts'),
			fileName: 'index',
			formats: ['es', 'umd'],
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
		name: { label: 'Core', color: 'blue' },
		coverage: {
			reporter: ['text', 'json-summary', 'json'],
			reportOnFailure: true,
			thresholds: {
				lines: 80,
				branches: 80,
				functions: 80,
				statements: 80,
			},
		},
	},
}));
