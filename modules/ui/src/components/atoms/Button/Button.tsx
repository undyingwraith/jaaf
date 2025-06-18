import { useComputed } from '@preact/signals';
import styles from './Button.module.css';
import { IButtonProps } from './IButtonProps';
import { applyClasses } from '../../../utils';

export function Button(props: IButtonProps) {
	const variant = useComputed(() => typeof props.variant === 'undefined' ? 'default' : typeof props.variant === 'string' ? props.variant : props.variant.value);

	return (
		<button class={applyClasses({
			[styles.button]: true,
			[styles[variant.value]]: true,
			[styles.fullWidth]: props.fullWidth,
		})} {...props} />
	);
}
