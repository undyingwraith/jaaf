/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
	test: {
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
	}
}));
