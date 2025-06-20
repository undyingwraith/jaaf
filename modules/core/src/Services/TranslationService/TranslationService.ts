import i18next from 'i18next';
import { inject, injectable, multiInject, optional } from 'inversify';
import { type ILogService, ILogServiceSymbol } from '../LogService';
import { ITranslation, ITranslationsSymbol } from './ITranslation';
import { ITranslationService } from './ITranslationService';

@injectable()
export class TranslationService implements ITranslationService {
	constructor(
		@inject(ILogServiceSymbol) private readonly log: ILogService,
		@multiInject(ITranslationsSymbol) @optional() translations: ITranslation[]
	) {
		const resources: ITranslation = {};
		for (const translationSet of translations) {
			for (const [lang, values] of Object.entries(translationSet)) {
				if (!resources.hasOwnProperty(lang)) {
					resources[lang] = { translation: {} };
				}
				resources[lang].translation = { ...resources[lang].translation, ...values.translation };
			}
		}

		i18next.init({
			resources,
			lng: "en",
			interpolation: {
				escapeValue: false
			}
		});

		i18next.on('languageChanged', () => {
			this.languageChangeHandlers.forEach(handler => {
				handler(i18next.language);
			});
		});
	}

	/**
	 * @inheritdoc
	 */
	translate(key: string, values?: { [key: string]: string; }): string {
		if (i18next.exists(key)) {
			return i18next.t(key, values);
		} else {
			this.log.warn(`Missing translation key <${key}>`);
			return `<${key}>`;
		}
	}

	/**
	 * @inheritdoc
	 */
	get language(): string {
		return i18next.language;
	}

	/**
	 * @inheritdoc
	 */
	changeLanguage(language: string): void {
		i18next.changeLanguage(language);
	}

	/**
	 * @inheritdoc
	 */
	registerLanguageChange(handler: (language: string) => void): Symbol {
		const sym = Symbol();
		this.languageChangeHandlers.set(sym, handler);
		return sym;
	}

	/**
	 * @inheritdoc
	 */
	unregisterLanguageChange(symbol: Symbol): void {
		if (this.languageChangeHandlers.has(symbol)) {
			this.languageChangeHandlers.delete(symbol);
		}
	}

	private languageChangeHandlers = new Map<Symbol, (lang: string) => void>();
}
