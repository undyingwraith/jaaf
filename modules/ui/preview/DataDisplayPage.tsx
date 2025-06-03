import { Chip, Loader, useTranslation } from 'src';
import { Alerts } from './Alerts';
import { Section } from './Section';

export function DataDisplayPage() {
	const _t = useTranslation();

	return (
		<div>
			<Section title={_t('Loader')}>
				<Loader />
			</Section>
			<Section title={_t('Alerts')}>
				<Alerts />
			</Section>
			<Section title={_t('Chip')}>
				<Chip>{_t('Example')}</Chip>
			</Section>
		</div>
	);
}
