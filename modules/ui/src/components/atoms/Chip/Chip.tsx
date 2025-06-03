import styles from './Chip.module.css';
import { IChipProps } from './IChipProps';

export function Chip(props: IChipProps) {
	return <div class={styles.chip}>
		{props.children}
	</div>;
}
