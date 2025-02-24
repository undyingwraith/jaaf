/// <reference types="vitest" />
import preact from '@preact/preset-vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => ({
	plugins: [
		preact({
			babel: {
				plugins: [
					['@babel/plugin-proposal-decorators', { legacy: true }],
					['@babel/plugin-proposal-class-properties', { loose: true }],
					'babel-plugin-parameter-decorator',
				]
			}
		}),
		dts({
			tsconfigPath: resolve(__dirname, './tsconfig.json'),
			include: ['src'],
		}),
		checker({
			typescript: { buildMode: true }
		}),
		tsconfigPaths(),
	],
	build: {
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'JaafUi',
			fileName: 'index',
		},
		rollupOptions: {
			preserveSymlinks: true,
			external: [
				'@preact/signals',
				'@undyingwraith/jaaf-browser',
				'@undyingwraith/jaaf-core',
				'color',
				'inversify',
				'preact',
				'reflect-metadata',
				'wouter-preact',
			],
			output: {
				// Provide global variables to use in the UMD build
				// for externalized deps
				globals: {
					'@preact/signals': 'signals',
					'@undyingwraith/jaaf-browser': 'jaafBrowser',
					'@undyingwraith/jaaf-core': 'jaafCore',
					'color': 'color',
					'inversify': 'inversify',
					'preact': 'preact',
					'wouter-preact': 'wouterPreact',
				},
			},
		},
		emptyOutDir: mode !== 'dev',
		sourcemap: mode == 'dev',
		manifest: false,
		minify: mode == 'dev' ? 'esbuild' : 'terser',
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
		globals: true,
		environment: 'jsdom',
	},
}));
