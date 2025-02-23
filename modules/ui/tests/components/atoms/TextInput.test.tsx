import { act, fireEvent, render } from '@testing-library/preact';
import { describe, expect, test } from 'vitest';
import { TextInput } from 'src/components/atoms/TextInput';
import { Signal } from '@preact/signals';

describe('TextInput', () => {
	test('Text input changes value', () => {
		const value = new Signal('');
		const t = render(
			<TextInput
				value={value}
			/>
		);
		const el = t.getByTestId('input');

		act(() => {
			fireEvent.input(el, {
				target: {
					value: 'test',
				},
			});
		});

		expect(value.peek()).toBe('test');



		act(() => {
			fireEvent.input(el, {
				target: {
					value: 'another test',
				},
			});
		});

		expect(value.peek()).toBe('another test');
	});

	test('Changes in signal are reflected in component', () => {
		const value = new Signal('');
		const t = render(
			<TextInput
				value={value}
			/>
		);

		const el = t.getByTestId('input') as HTMLInputElement;

		expect(el.value).toBe('');

		act(() => {
			value.value = 'test';
		});

		expect(el.value).toBe('test');

		act(() => {
			value.value = 'another test';
		});

		expect(el.value).toBe('another test');
	});
});
