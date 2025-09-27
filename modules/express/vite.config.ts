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
			name: 'jaafExpress',
			entry: resolve(__dirname, 'src/index.ts'),
			fileName: 'index',
			formats: ['es', 'umd'],
		},
		rollupOptions: {
			external: [
				'@inversifyjs/http-core',
				'@inversifyjs/http-express',
				'@undyingwraith/jaaf-core',
				'body-parser',
				'i18next',
				'inversify',
				'inversify-express-utils',
				'reflect-metadata',
				'swagger-jsdoc',
				'swagger-ui-express',
			],
			output: {
				globals: {
					'@inversifyjs/http-express': 'httpExpress',
					'@undyingwraith/jaaf-core': 'jaafCore',
					'body-parser': 'bodyParser',
					i18next: 'i18next',
					inversify: 'inversify',
					'swagger-jsdoc': 'swaggerJSDoc',
					'swagger-ui-express': 'swaggerUi',
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
