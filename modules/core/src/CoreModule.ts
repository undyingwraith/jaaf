import { IModule } from './Application';
import { IKeyValueStorageServiceSymbol, ILogServiceSymbol, ITranslationServiceSymbol, LogService, MemoryKeyValueStorageService, TranslationService } from './Services';

export const CoreModule: IModule = (app) => {
	app.register(MemoryKeyValueStorageService, IKeyValueStorageServiceSymbol);
	app.register(LogService, ILogServiceSymbol);
	app.register(TranslationService, ITranslationServiceSymbol);
};
