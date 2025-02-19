import { ComponentChildren } from 'preact';
import styles from './Alert.module.css';

export interface IAlertProps {
	severity?: 'success' | 'info' | 'warning' | 'error';
	variant?: 'default' | 'filled' | 'outlined';
	children: ComponentChildren;
}

export function Alert(props: IAlertProps) {
	const classes = styles.alert + ' ' + styles[(props.severity ?? 'info')] + ' ' + styles[(props.variant ?? 'default')];

	return <div class={classes}>
		{props.children}
	</div>;
}
