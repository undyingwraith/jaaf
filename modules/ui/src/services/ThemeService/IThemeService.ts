import { Signal } from '@preact/signals';

export const IThemeServiceSymbol = Symbol.for('IThemeService');

export interface IThemeService {
	/**
	 * Accent color to be used.
	 */
	accentColor: Signal<string>;

	/**
	 * Whether the theme is set to dark or light.
	 */
	darkMode: Signal<boolean>;
}
