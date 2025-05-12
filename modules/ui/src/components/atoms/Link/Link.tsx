import { Link as WLink } from 'wouter-preact';
import styles from './Link.module.css';
import { ILinkProps } from './ILinkProps';

export function Link(props: ILinkProps) {
	return (
		<WLink class={styles.link} to={props.to}>{props.children}</WLink>
	);
}
