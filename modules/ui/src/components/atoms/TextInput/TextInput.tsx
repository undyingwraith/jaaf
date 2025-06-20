import { ITextInputProps } from './ITextInputProps';
import styles from './TextInput.module.css';

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
