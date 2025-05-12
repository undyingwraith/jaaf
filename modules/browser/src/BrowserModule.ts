import { IKeyValueStorageServiceSymbol, ILogSinkSymbol, IModule } from '@undyingwraith/jaaf-core';
import { ConsoleLogSink, HotkeyService, IHotkeyServiceSymbol, LocalstorageKeyValueStorageService } from './Services';

export const BrowserModule: IModule = async (app) => {
	await app.register(HotkeyService, IHotkeyServiceSymbol);
	await app.register(LocalstorageKeyValueStorageService, IKeyValueStorageServiceSymbol);
	await app.register(ConsoleLogSink, ILogSinkSymbol);
};
