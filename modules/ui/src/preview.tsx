import { render } from 'preact';
import { JaafApp } from './JaafApp';
import { Loader } from './components';

render((
	<JaafApp setup={() => { }}>
		<Loader />
	</JaafApp>
), document.getElementById('root')!);
