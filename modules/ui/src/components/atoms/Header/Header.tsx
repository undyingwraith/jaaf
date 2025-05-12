import { IHeaderProps } from './IHeaderProps';
import styles from './Header.module.css';

export function Header(props: IHeaderProps) {
	return (
		<div class={styles.container}>
			{props.children}
		</div>
	);
}
