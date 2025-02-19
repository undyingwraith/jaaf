import { render } from 'preact';
import { JaafApp } from './JaafApp';
import { Alert, Loader } from './components';
import { UiModule } from './services/UiModule';

render((
	<JaafApp
		setup={(app) => {
			app.use(UiModule);
		}}
	>
		<Loader />
		<div>
			<Alert severity={'success'}>
				This is a success alert.
			</Alert>
			<Alert severity={'info'}>
				This is a info alert.
			</Alert>
			<Alert severity={'warning'}>
				This is a warning alert.
			</Alert>
			<Alert severity={'error'}>
				This is a error alert.
			</Alert>
		</div>
		<div>
			<Alert severity={'success'} variant={'filled'}>
				This is a success alert.
			</Alert>
			<Alert severity={'info'} variant={'filled'}>
				This is a info alert.
			</Alert>
			<Alert severity={'warning'} variant={'filled'}>
				This is a warning alert.
			</Alert>
			<Alert severity={'error'} variant={'filled'}>
				This is a error alert.
			</Alert>
		</div>
		<div>
			<Alert severity={'success'} variant={'outlined'}>
				This is a success alert.
			</Alert>
			<Alert severity={'info'} variant={'outlined'}>
				This is a info alert.
			</Alert>
			<Alert severity={'warning'} variant={'outlined'}>
				This is a warning alert.
			</Alert>
			<Alert severity={'error'} variant={'outlined'}>
				This is a error alert.
			</Alert>
		</div>
	</JaafApp>
), document.getElementById('root')!);
