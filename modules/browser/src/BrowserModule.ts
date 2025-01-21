import { IModule } from 'jaaf-core';
import { HotkeyService, IHotkeyServiceSymbol } from './Services';

export const BrowserModule: IModule = (app) => {
	app.register(HotkeyService, IHotkeyServiceSymbol);
};
