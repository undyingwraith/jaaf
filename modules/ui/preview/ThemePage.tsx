import { IThemeService, IThemeServiceSymbol, TextInput, useService, useTranslation } from 'src';
import { Section } from './Section';

export function ThemePage() {
	const _t = useTranslation();
	const themeService = useService<IThemeService>(IThemeServiceSymbol);

	return (
		<Section title={_t('Theme')}>
			<TextInput
				label={_t('AccentColor')}
				value={themeService.accentColor}
			/>
			{_t('DarkMode')}<input type={'checkbox'} checked={themeService.darkMode} onChange={ev => themeService.darkMode.value = ev.currentTarget.checked} />
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				<ColorPreview color='accent-color-light' />
				<ColorPreview color='accent-color' />
				<ColorPreview color='accent-color-dark' />
				<ColorPreview color='background-color' />
				<ColorPreview color='success-color-light' />
				<ColorPreview color='success-color' />
				<ColorPreview color='success-color-dark' />
				<ColorPreview color='warning-color-light' />
				<ColorPreview color='warning-color' />
				<ColorPreview color='warning-color-dark' />
				<ColorPreview color='error-color-light' />
				<ColorPreview color='error-color' />
				<ColorPreview color='error-color-dark' />
				<ColorPreview color='info-color-light' />
				<ColorPreview color='info-color' />
				<ColorPreview color='info-color-dark' />
			</div>
		</Section>
	);
}

function ColorPreview(props: { color: string; }) {
	return <div style={{
		width: 75,
		height: 75,
		backgroundColor: `var(--${props.color})`,
		color: `var(--${props.color}-contrast)`,
	}}>
		{props.color}
	</div>;
}
