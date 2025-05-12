import { renderHook, waitFor } from '@testing-library/preact';
import { CoreModule, ITranslation, ITranslationsSymbol } from '@undyingwraith/jaaf-core';
import { useTranslation } from 'src';
import { createWrapper } from 'testing';
import { describe, expect, test } from 'vitest';

const translations: ITranslation = {
	de: {
		translation: {
			'test': 'Test_de',
		},
	},
	en: {
		translation: {
			'test': 'Test_en',
		},
	},
};

describe('useTranslation', () => {
	test('Can translate', async () => {
		const r = renderHook(() => useTranslation(), {
			wrapper: createWrapper(async (app) => {
				await app.use(CoreModule);
				await app.registerConstantMultiple(translations, ITranslationsSymbol);
			}),
		});

		await waitFor(() => expect(r.result.current).not.toBeNull());

		expect(r.result.current('test')).toBe('Test_en');
	});

	test('Can show missing key', async () => {
		const r = renderHook(() => useTranslation(), {
			wrapper: createWrapper(async (app) => {
				await app.use(CoreModule);
			}),
		});

		await waitFor(() => expect(r.result.current).not.toBeNull());

		expect(r.result.current('test')).toBe('<test>');
	});
});
