import { Signal } from '@preact/signals';
import { CanBeSignal } from 'src/types';

export interface ISelectInputProps {
	value: Signal<string>;
	label?: CanBeSignal<string>;
	options: { [key: string]: string; };
}

export function SelectInput(props: ISelectInputProps) {
	const { value, label, options } = props;
	return <div>
		{label}
		<select
			onInput={(ev) => {
				value.value = ev.currentTarget.value;
			}}
			value={value}
		>
			{Object.entries(options).map(([key, value]) => (
				<option value={key}>{value}</option>
			))}
		</select>
	</div>;
}
