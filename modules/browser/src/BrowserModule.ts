import { IKeyValueStorageServiceSymbol, IModule } from '@undyingwraith/jaaf-core';
import { HotkeyService, IHotkeyServiceSymbol } from './Services';
import { LocalstorageKeyValueStorageService } from './Services/LocalstorageKeyValueStorageService';

export const BrowserModule: IModule = (app) => {
	app.register(HotkeyService, IHotkeyServiceSymbol);
	app.register(LocalstorageKeyValueStorageService, IKeyValueStorageServiceSymbol);
};
