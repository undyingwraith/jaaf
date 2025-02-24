import { describe, expect, test } from 'vitest';
import { LocalstorageKeyValueStorageService } from '../src';
import { Application, IKeyValueStorageService, IKeyValueStorageServiceSymbol } from '@undyingwraith/jaaf-core';

describe('LocalstorageKeyValueStorageService', () => {
	test('can store and retrieve values', () => {
		const app = new Application();
		app.register(LocalstorageKeyValueStorageService, IKeyValueStorageServiceSymbol);

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
