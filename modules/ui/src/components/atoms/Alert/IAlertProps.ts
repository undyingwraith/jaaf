import { ComponentChildren } from 'preact';

export interface IAlertProps {
	severity?: 'success' | 'info' | 'warning' | 'error';
	variant?: 'default' | 'filled' | 'outlined';
	children: ComponentChildren;
}
