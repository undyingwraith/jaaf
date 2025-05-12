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

	test('App starts without any actions.', async () => {
		const app = new Application();
		await app.start();
	});

	test('Can run startup with any startup actions', async () => {
		const app = new Application();

		await app.start();
	});

	test('Startup runs startup actions.', async () => {
		const app = new Application();

		let counter = 0;
		const action = () => {
			counter++;
		};

		app.registerStartupAction(action);

		expect(counter).toBe(0);

		await app.start();

		expect(counter).toBe(1);
	});

	test('Child action does not rerun startup actions.', async () => {
		const app = new Application();

		let counter = 0;
		let childCounter = 0;
		const action = () => {
			counter++;
		};
		const childAction = () => {
			childCounter++;
		};

		app.registerStartupAction(action);

		expect(counter).toBe(0);
		expect(childCounter).toBe(0);

		await app.start();

		expect(counter).toBe(1);
		expect(childCounter).toBe(0);

		const childApp = app.createChildApplication();
		childApp.registerStartupAction(childAction);
		await childApp.start();

		expect(counter).toBe(1);
		expect(childCounter).toBe(1);
	});

	test('Optional service does not throw an error', () => {
		const app = new Application();
		const sym = Symbol.for('test');

		expect(app.getOptionalService(sym)).toEqual(undefined);
	});

	test('Child app can overwrite parent registration', () => {
		const sym = Symbol.for('test');
		const service = 'test';
		const childService = 'childTest';
		const app = new Application();

		app.registerConstant(service, sym);

		expect(app.getService(sym)).toEqual(service);

		const childApp = app.createChildApplication();
		childApp.registerConstant(childService, sym);

		expect(childApp.getService(sym)).toEqual(childService);
	});

	test('Duplicate registration overwrites old registration', () => {
		const app = new Application();
		const sym = Symbol.for('test');
		const service = 'test';

		app.registerConstant(service, sym);
		app.registerConstant(service, sym);

		expect(app.getService(sym)).toEqual(service);
	});
});
