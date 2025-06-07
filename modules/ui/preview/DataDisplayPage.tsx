import { Chip, Loader, Markdown, TextArea, useTranslation } from 'src';
import { Alerts } from './Alerts';
import { Section } from './Section';
import { useSignal } from '@preact/signals';

const defaultMarkdownText = `
# h1
## h2
### h3

**bold** *italic* ~striketrough~ \`code\`
`;
export function DataDisplayPage() {
	const _t = useTranslation();

	const markdownText = useSignal(defaultMarkdownText);

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
			<Section title={'Markdown'}>
				<TextArea value={markdownText} />
				<Markdown value={markdownText.value} />
			</Section>
		</div>
	);
}
