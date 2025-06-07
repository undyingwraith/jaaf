import { Signal } from '@preact/signals';
import { CanBeSignal } from '../../../types';
import styles from './TextInput.module.css';

export interface ITextInputProps {
	value: Signal<string>;
	label?: CanBeSignal<string>;
	type?: 'text' | 'password';
}

export function TextInput(props: ITextInputProps) {
	const { value, label, type } = props;
	return <div class={styles.container}>
		<div class={styles.label}>
			{label}
		</div>
		<input
			class={styles.textField}
			data-testid={'input'}
			type={type ?? 'text'}
			onInput={(ev) => {
				value.value = ev.currentTarget.value;
			}}
			value={value}
		/>
	</div>;
}
