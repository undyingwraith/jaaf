import { useComputed } from '@preact/signals';
import styles from './Button.module.css';
import { IButtonProps } from './IButtonProps';

export function Button(props: IButtonProps) {
	const variant = useComputed(() => typeof props.variant === 'undefined' ? 'default' : typeof props.variant === 'string' ? props.variant : props.variant.value);
	const classNames = useComputed(() => `${styles.button} ${styles[variant.value]}`);

	return (
		<button class={classNames} {...props} />
	);
}
