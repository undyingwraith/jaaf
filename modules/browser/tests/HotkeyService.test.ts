import { describe, expect, test } from 'vitest';
import { userEvent } from '@vitest/browser/context';
import { Application } from '@undyingwraith/jaaf-core';
import { HotkeyService, IHotkeyService, IHotkeyServiceSymbol } from '../src';

describe('HotkeyService', () => {
	const app = new Application();
	app.register(HotkeyService, IHotkeyServiceSymbol);

	test('can handle a single key press', async () => {
		const service = app.getService<IHotkeyService>(IHotkeyServiceSymbol)!;
		let counter = 0;

		service.registerHotkey({
			key: 'a'
		}, () => {
			counter++;
		});

		expect(counter).toBe(0);

		await userEvent.keyboard('{a}');
		expect(counter).toBe(1);

		await userEvent.keyboard('{b}');
		expect(counter).toBe(1);

		await userEvent.keyboard('{Control>}{a}{/Control}');
		expect(counter).toBe(1);

		await userEvent.keyboard('{Shift>}{a}{/Shift}');
		expect(counter).toBe(1);

		await userEvent.keyboard('{a}');
		expect(counter).toBe(2);
	});
});
