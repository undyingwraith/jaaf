import { JSXInternal } from 'preact/src/jsx';
import type { TVariant } from '../../../types';

export interface IButtonProps extends JSXInternal.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: JSXInternal.Signalish<TVariant>;
	fullWidth?: boolean;
}
