import { ComponentChildren } from 'preact';
import styles from './Button/Button.module.css';

export function ButtonGroup(props: { children: ComponentChildren; }) {
	return <div class={styles.buttonGroup}>
		{props.children}
	</div>;
}
