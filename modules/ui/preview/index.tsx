import { CoreModule, ITranslationsSymbol } from '@undyingwraith/jaaf-core';
import { render } from 'preact';
import { JaafApp, UiModule } from 'src';
import { PreviewApp } from './PreviewApp';
import translations from './translations';

render((
	<JaafApp
		setup={async (app) => {
			await app.use(CoreModule);
			await app.use(UiModule);
			await app.registerConstantMultiple(translations, ITranslationsSymbol);
		}}
	>
		<PreviewApp />
	</JaafApp>
), document.getElementById('root')!);
