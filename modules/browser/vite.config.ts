/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => ({
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
				lines: 60,
				branches: 60,
				functions: 60,
				statements: 60
			},
		},
	},
}));
