import { IModule } from '@undyingwraith/jaaf-core';
import { IThemeServiceSymbol, ThemeService } from './ThemeService';

export const UiModule: IModule = async (app) => {
	await app.register(ThemeService, IThemeServiceSymbol);
};
