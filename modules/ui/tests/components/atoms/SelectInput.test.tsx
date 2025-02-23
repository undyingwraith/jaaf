import { Signal } from '@preact/signals';
import { act, fireEvent, render } from '@testing-library/preact';
import { SelectInput } from 'src';
import { describe, expect, test } from 'vitest';

describe('SelectInput', () => {
	const testOptions = {
		one: 'One',
		two: 'Two',
		three: 'Three',
	};

	test('SelectInput changes value', () => {
		const value = new Signal('one');
		const t = render(
			<SelectInput
				value={value}
				options={testOptions}
			/>
		);
		const el = t.getByTestId('input');

		act(() => {
			fireEvent.input(el, {
				target: {
					value: 'two',
				},
			});
		});

		expect(value.peek()).toBe('two');



		act(() => {
			fireEvent.input(el, {
				target: {
					value: 'three',
				},
			});
		});

		expect(value.peek()).toBe('three');
	});

	test('Changes in signal are reflected in component', () => {
		const value = new Signal('one');
		const t = render(
			<SelectInput
				value={value}
				options={testOptions}
			/>
		);

		const el = t.getByTestId('input') as HTMLInputElement;

		expect(el.value).toBe('one');

		act(() => {
			value.value = 'two';
		});

		expect(el.value).toBe('two');

		act(() => {
			value.value = 'three';
		});

		expect(el.value).toBe('three');
	});
});
