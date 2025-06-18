import { Signal } from '@preact/signals';
import { inject, injectable, optional } from 'inversify';
import { IThemeConfigurationSymbol, type IThemeConfiguration } from './IThemeConfiguration';
import { defaultThemeConfiguration } from './defaultThemeConfiguration';

@injectable()
export class ThemeService {
	public constructor(
		@inject(IThemeConfigurationSymbol) @optional() readonly config?: Partial<IThemeConfiguration>
	) {
		this.accentColor = new Signal(config?.accentColor ?? defaultThemeConfiguration.accentColor);
		this.darkMode = new Signal(config?.darkMode ?? defaultThemeConfiguration.darkMode);
	}

	public accentColor: Signal<string>;
	public darkMode: Signal<boolean>;
}
