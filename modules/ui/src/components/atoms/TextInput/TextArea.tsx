import { ITextInputProps } from './ITextInputProps';
import styles from './TextInput.module.css';

export function TextArea(props: ITextInputProps) {
	const { value, label } = props;
	return <div class={styles.container}>
		<div class={styles.label}>
			{label}
		</div>
		<textarea
			class={styles.textField}
			data-testid={'input'}
			onInput={(ev) => {
				value.value = ev.currentTarget.value;
			}}
			value={value}
		/>
	</div>;
}
