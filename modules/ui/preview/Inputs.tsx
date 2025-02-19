import { useSignal } from '@preact/signals';
import { SelectInput, TextInput } from 'src';

export function Inputs() {
	const textValue = useSignal<string>('');
	const passwordValue = useSignal<string>('');
	const selectValue = useSignal<string>('one');

	return (
		<div style={{ color: 'var(--background-color-contrast)' }}>
			<TextInput
				value={textValue}
				label={'TextInput'}
			/>
			<TextInput
				value={passwordValue}
				label={'PasswordInput'}
				type={'password'}
			/>
			<SelectInput
				value={selectValue}
				label={'SelectInput'}
				options={{
					one: 'One',
					two: 'Two',
					three: 'Three',
				}}
			/>
			<div>
				<p>TextInput: {textValue}</p>
				<p>PasswordInput: {passwordValue}</p>
				<p>SelectInput: {selectValue}</p>
			</div>
		</div>
	);
}
