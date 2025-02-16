import { IModule } from '@undyingwraith/jaaf-core';
import { IThemeServiceSymbol, ThemeService } from './ThemeService';

export const UiModule: IModule = (app) => {
	app.register(ThemeService, IThemeServiceSymbol);
};
