/// <reference types="vitest" />
import preact from '@preact/preset-vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults } from 'vitest/config';

export default defineConfig(({ mode }) => ({
	plugins: [
		tsconfigPaths(),
		preact({
			prefreshEnabled: true,
			babel: {
				presets: [
					'@babel/preset-typescript',
				],
				plugins: [
					"babel-plugin-transform-typescript-metadata",
					['@babel/plugin-proposal-decorators', { legacy: true }],
					['@babel/plugin-proposal-class-properties', { loose: true }],
				]
			}
		}),
		dts({
			root: '.',
			tsconfigPath: './src/tsconfig.json',
			rollupTypes: false,
		}),
		!process.env.VITEST && checker({
			typescript: { buildMode: false, tsconfigPath: './src/tsconfig.json' }
		}),
	],
	build: {
		lib: {
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
			}
		},
		emptyOutDir: mode !== 'dev',
		sourcemap: mode == 'dev',
		manifest: false,
		minify: mode == 'dev' ? 'esbuild' : 'terser',
	},
	test: {
		environment: 'jsdom',
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
		coverage: {
			reporter: ['text', 'json-summary', 'json'],
			reportOnFailure: true,
			thresholds: {
				lines: 60,
				branches: 60,
				functions: 60,
				statements: 60,
			},
			exclude: [
				...configDefaults.exclude,
				'preview',
				'testing',
				'**/*.d.ts',
			],
		},
		css: {
			modules: {
				classNameStrategy: 'stable',
			},
		},
	},
}));
