import { render } from 'preact';
import { JaafApp, Loader, UiModule } from 'src';
import { Alerts } from './Alerts';
import { Inputs } from './Inputs';

render((
	<JaafApp
		setup={(app) => {
			app.use(UiModule);
		}}
	>
		<Loader />
		<Alerts />
		<Inputs />
	</JaafApp>
), document.getElementById('root')!);
