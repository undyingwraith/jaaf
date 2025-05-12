import { useSignal } from '@preact/signals';
import { Button, SelectInput, TextInput, useTranslation } from 'src';
import { Section } from './Section';

export function InputsPage() {
	const _t = useTranslation();

	const textValue = useSignal<string>('');
	const passwordValue = useSignal<string>('');
	const selectValue = useSignal<string>('one');

	return (
		<div>
			<Section title={_t('Buttons')}>
				<Button onClick={() => alert(_t('ButtonPressed'))}>{_t('Button')}</Button>
			</Section>
			<Section title={_t('TextInputs')}>
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
			</Section>
		</div>
	);
}
