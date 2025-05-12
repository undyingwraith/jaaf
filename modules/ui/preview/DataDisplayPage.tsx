import { Loader } from 'src';
import { Alerts } from './Alerts';
import { Section } from './Section';

export function DataDisplayPage() {
	return (
		<div>
			<Section title={'Loader'}>
				<Loader />
			</Section>
			<Section title={'Alerts'}>
				<Alerts />
			</Section>
		</div>
	);
}
