import { IKeyValueStorageServiceSymbol, ILogSinkSymbol, IModule } from '@undyingwraith/jaaf-core';
import { ConsoleLogSink, HotkeyService, IHotkeyServiceSymbol, LocalstorageKeyValueStorageService } from './Services';

export const BrowserModule: IModule = (app) => {
	app.register(HotkeyService, IHotkeyServiceSymbol);
	app.register(LocalstorageKeyValueStorageService, IKeyValueStorageServiceSymbol);
	app.register(ConsoleLogSink, ILogSinkSymbol);
};
