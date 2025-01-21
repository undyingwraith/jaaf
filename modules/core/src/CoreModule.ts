import { IModule } from './Application';
import { ITranslationServiceSymbol, TranslationService } from './Services';

export const CoreModule: IModule = (app) => {
	app.register(TranslationService, ITranslationServiceSymbol);
};
