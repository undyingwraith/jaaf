import { Application, IKeyValueStorageService, IKeyValueStorageServiceSymbol, MemoryKeyValueStorageService } from 'src';
import { describe, expect, test } from 'vitest';

describe('MemoryKeyValueStorageService', () => {
	test('can store and retrieve values', () => {
		const app = new Application();
		app.register(MemoryKeyValueStorageService, IKeyValueStorageServiceSymbol);

		const service = app.getService<IKeyValueStorageService>(IKeyValueStorageServiceSymbol);

		const key = 'testkey';

		expect(service.has(key)).toBeFalsy();

		service.set(key, 'test');

		expect(service.has(key)).toBeTruthy();
		expect(service.get(key)).toEqual('test');

		service.delete(key);

		expect(service.has(key)).toBeFalsy();
		expect(service.get(key)).toBeUndefined();
	});
});
