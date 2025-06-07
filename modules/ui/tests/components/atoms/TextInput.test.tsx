import { Signal } from '@preact/signals';
import { act, fireEvent } from '@testing-library/preact';
import { TextInput } from 'src';
import { performRender } from 'testing';
import { describe, expect, test } from 'vitest';

describe('TextInput', () => {
	test('Text input changes value', async () => {
		const value = new Signal('');

		await performRender((
			<TextInput
				value={value}
			/>
		), async (t) => {
			const el = t.getByTestId('input');

			await act(() => {
				fireEvent.input(el, {
					target: {
						value: 'test',
					},
				});
			});

			expect(value.peek()).toBe('test');



			await act(() => {
				fireEvent.input(el, {
					target: {
						value: 'another test',
					},
				});
			});

			expect(value.peek()).toBe('another test');
		});
	});

	test('Changes in signal are reflected in component', async () => {
		const value = new Signal('');

		await performRender((
			<TextInput
				value={value}
			/>
		), async (t) => {

			const el = t.getByTestId('input') as HTMLInputElement;

			expect(el.value).toBe('');

			await act(() => {
				value.value = 'test';
			});

			expect(el.value).toBe('test');

			await act(() => {
				value.value = 'another test';
			});

			expect(el.value).toBe('another test');
		});
	});
});
