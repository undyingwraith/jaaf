import { Signal } from '@preact/signals';
import { CanBeSignal } from 'src/types';

export interface ITextInputProps {
	value: Signal<string>;
	label?: CanBeSignal<string>;
	type?: 'text' | 'password';
}

export function TextInput(props: ITextInputProps) {
	const { value, label, type } = props;
	return <div>
		{label}
		<input
			type={type ?? 'text'}
			onInput={(ev) => {
				value.value = ev.currentTarget.value;
			}}
			value={value}
		/>
	</div>;
}
