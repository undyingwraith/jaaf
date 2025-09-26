import 'testing/controllers';
import { describe, expect, test } from 'vitest';
import { ExpressApplication } from '../src';

describe('ExpressApplication', () => {
	test('Controllers get registered', async () => {
		const app = new ExpressApplication({
			port: 6666
		});

		await app.start();

		const req = new XMLHttpRequest();
		req.onloadend = () => {
			expect(req.status).toBe(200);
		};
		req.open('GET', 'http://localhost:6666/test');
	});
});
