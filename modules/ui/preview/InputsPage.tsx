import { useSignal } from '@preact/signals';
import { ActionButton, Button, ButtonGroup, SelectInput, TextInput, useTranslation } from 'src';
import { Section } from './Section';

export function InputsPage() {
	const _t = useTranslation();

	const textValue = useSignal<string>('');
	const passwordValue = useSignal<string>('');
	const selectValue = useSignal<string>('one');

	const buttons = (<>
		<Button onClick={() => alert(_t('ButtonPressed'))}>{_t('Button')}</Button>
		<Button variant={'primary'}>{_t('Primary')}</Button>
		<Button variant={'info'}>{_t('Info')}</Button>
		<Button variant={'success'}>{_t('Success')}</Button>
		<Button variant={'warning'}>{_t('Warning')}</Button>
		<Button variant={'error'}>{_t('Error')}</Button>
		<Button disabled={true}>{_t('DisabledButton')}</Button>
		<ActionButton
			action={() => new Promise((resolve, reject) => {
				setTimeout(() => {
					if (Math.floor(Math.random() * 10) > 6) {
						reject();
					} else {
						resolve();
					}
				}, Math.floor(Math.random() * (4500 - 1000)) + 1000);
			})}
		>{_t('ActionButton')}</ActionButton>
	</>);

	return (
		<div>
			<Section title={_t('Buttons')}>
				<div style={{ display: 'flex', gap: 5 }}>{buttons}</div>
				<div>
					<ButtonGroup>
						{buttons}
					</ButtonGroup>
				</div>
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
