import styles from './Alert.module.css';
import { IAlertProps } from './IAlertProps';

export function Alert(props: IAlertProps) {
	const classes = styles.alert + ' ' + styles[(props.severity ?? 'info')] + ' ' + styles[(props.variant ?? 'default')];

	return <div class={classes}>
		{props.children}
	</div>;
}
