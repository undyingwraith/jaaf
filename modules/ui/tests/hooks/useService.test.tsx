import { renderHook, waitFor } from '@testing-library/preact';
import { useService } from 'src';
import { createWrapper } from 'testing';
import { describe, expect, test } from 'vitest';

describe('useService', () => {
	test('Can retrieve service', async () => {
		let counter = 0;
		const TestService = {
			test: () => {
				counter++;
			}
		};
		const TestServiceSymbol = Symbol.for('TestService');

		const r = renderHook(() => useService<any>(TestServiceSymbol), {
			wrapper: createWrapper((app) => {
				app.registerConstant(TestService, TestServiceSymbol);
			}),
		});

		await waitFor(() => expect(r.result.current).not.toBeNull());
		expect(counter).toBe(0);

		expect(r.result.current.test).toBeDefined();
		expect(r.result.current.test).toBeTypeOf('function');

		r.result.current.test();

		expect(counter).toBe(1);
	});
});
