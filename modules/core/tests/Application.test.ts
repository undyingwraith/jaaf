import { describe, test, expect } from 'vitest';
import { Application } from '../src';

class TestService {
	public getValue(): string {
		return 'test';
	}
}

describe('Application', () => {
	test('Constant can be registered and retrieved.', () => {
		const app = new Application();

		const sym = Symbol.for('test');
		const service = 'test';
		app.registerConstant(service, sym);

		expect(app.getService(sym)).toEqual(service);
	});

	test('Service can be registered and retrieved.', () => {
		const app = new Application();

		const sym = Symbol.for('test');
		app.register(TestService, sym);

		expect(app.getService<TestService>(sym)?.getValue()).toEqual('test');
	});
});
