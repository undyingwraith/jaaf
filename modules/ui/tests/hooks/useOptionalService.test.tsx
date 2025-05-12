import { renderHook, waitFor } from '@testing-library/preact';
import { useOptionalService } from 'src';
import { createWrapper } from 'testing';
import { describe, expect, test } from 'vitest';

describe('useOptionalService', () => {
	const TestServiceSymbol = Symbol.for('TestService');

	test('Can retrieve service', async () => {
		let counter = 0;
		const TestService = {
			test: () => {
				counter++;
			}
		};

		const r = renderHook(() => useOptionalService<any>(TestServiceSymbol), {
			wrapper: createWrapper(async (app) => {
				await app.registerConstant(TestService, TestServiceSymbol);
			}),
		});

		await waitFor(() => expect(r.result.current).not.toBeNull());
		expect(counter).toBe(0);

		expect(r.result.current.test).toBeDefined();
		expect(r.result.current.test).toBeTypeOf('function');

		r.result.current.test();

		expect(counter).toBe(1);
	});

	test('Not registered service return undefined', async () => {
		const r = renderHook(() => useOptionalService<any>(TestServiceSymbol), {
			wrapper: createWrapper(() => Promise.resolve()),
		});

		await waitFor(() => expect(r.result.current).not.toBeNull());

		expect(r.result.current).toBeUndefined();
	});
});
