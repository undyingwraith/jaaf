import { Signal } from '@preact/signals';
import { act, fireEvent } from '@testing-library/preact';
import { SelectInput } from 'src';
import { performRender } from 'testing';
import { describe, expect, test } from 'vitest';

describe('SelectInput', () => {
	const testOptions = {
		one: 'One',
		two: 'Two',
		three: 'Three',
	};

	test('SelectInput changes value', async () => {
		const value = new Signal('one');

		await performRender((
			<SelectInput
				value={value}
				options={testOptions}
			/>
		), async (t) => {
			const el = t.getByTestId('input');

			await act(() => {
				fireEvent.input(el, {
					target: {
						value: 'two',
					},
				});
			});

			expect(value.peek()).toBe('two');



			await act(() => {
				fireEvent.input(el, {
					target: {
						value: 'three',
					},
				});
			});

			expect(value.peek()).toBe('three');
		});
	});

	test('Changes in signal are reflected in component', async () => {
		const value = new Signal('one');

		await performRender((
			<SelectInput
				value={value}
				options={testOptions}
			/>
		), async (t) => {

			const el = t.getByTestId('input') as HTMLInputElement;

			expect(el.value).toBe('one');

			await act(() => {
				value.value = 'two';
			});

			expect(el.value).toBe('two');

			await act(() => {
				value.value = 'three';
			});

			expect(el.value).toBe('three');
		});
	});
});
