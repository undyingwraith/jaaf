import { TestController } from 'testing/controllers';
import { describe, expect, test } from 'vitest';
import axios from 'axios';
import { ExpressApplication } from '../src';

describe('ExpressApplication', () => {
	test('Controllers get registered', async () => {
		const app = new ExpressApplication({
			port: 6666
		});
		app.registerController(TestController);

		await app.start();

		const res = await axios.get('http://localhost:6666/test');
		expect(res.status).toBe(200);
		expect(res.data).toBe('200 Ok');
	});
});
