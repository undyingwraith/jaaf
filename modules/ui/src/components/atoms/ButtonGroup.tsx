import { ComponentChildren } from 'preact';
import styles from './Button/Button.module.css';
import { applyClasses } from '../../utils';

export function ButtonGroup(props: { children: ComponentChildren; fullWidth?: boolean; }) {
	return <div class={applyClasses({
		[styles.buttonGroup]: true,
		[styles.fullWidth]: props.fullWidth,
	})}>
		{props.children}
	</div>;
}
