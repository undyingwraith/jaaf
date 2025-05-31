import { JSXInternal } from 'preact/src/jsx';

export interface IButtonProps extends JSXInternal.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: JSXInternal.Signalish<'error' | 'warning' | 'info' | 'success' | 'default' | 'primary'>;
}
