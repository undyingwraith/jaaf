import { ILoaderProps } from './ILoaderProps';
import styles from './Loader.module.css';

export function Loader(props: ILoaderProps) {
	const style = props.size ? { '--size': typeof props.size === 'number' ? props.size + 'px' : props.size } : {};

	return (
		<div class={styles.loader} style={style} />
	);
}
