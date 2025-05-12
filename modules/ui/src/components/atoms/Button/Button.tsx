import { JSXInternal } from 'preact/src/jsx';
import styles from './Button.module.css';

export function Button(props: JSXInternal.ButtonHTMLAttributes<HTMLButtonElement>) {
	return <button class={styles.button} {...props} />;
}
