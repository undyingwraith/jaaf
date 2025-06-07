import { Signal } from '@preact/signals';
import { CanBeSignal } from '../../../types';

export interface ITextInputProps {
	value: Signal<string>;
	label?: CanBeSignal<string>;
	type?: 'text' | 'password';
}
