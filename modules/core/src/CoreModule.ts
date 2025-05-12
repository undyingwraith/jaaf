import { IModule } from './Application';
import { IKeyValueStorageServiceSymbol, ILogServiceSymbol, ITranslationServiceSymbol, LogService, MemoryKeyValueStorageService, TranslationService } from './Services';

export const CoreModule: IModule = async (app) => {
	await app.register(MemoryKeyValueStorageService, IKeyValueStorageServiceSymbol);
	await app.register(LogService, ILogServiceSymbol);
	await app.register(TranslationService, ITranslationServiceSymbol);
};
