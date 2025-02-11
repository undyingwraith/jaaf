import { IModule } from './Application';
import { ILogServiceSymbol, ITranslationServiceSymbol, LogService, TranslationService } from './Services';

export const CoreModule: IModule = (app) => {
	app.register(LogService, ILogServiceSymbol);
	app.register(TranslationService, ITranslationServiceSymbol);
};
