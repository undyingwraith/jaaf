import { useComputed } from '@preact/signals';
import Color, { ColorInstance } from 'color';
import { useService } from '../hooks';
import { IThemeService, IThemeServiceSymbol } from '../services';

export function ThemeProvider() {
	const themeService = useService<IThemeService>(IThemeServiceSymbol);

	const error = '#FF0000';
	const warning = '#FFa500';
	const info = '#0000FF';
	const success = '#00FF00';

	function createColors(name: string, color: ColorInstance): { [key: string]: ColorInstance; } {
		const colorDiff = 0.3;
		const res: { [key: string]: ColorInstance; } = {};
		res[`${name}-color`] = color;
		res[`${name}-color-light`] = color.lighten(colorDiff);
		res[`${name}-color-light-contrast`] = color.lighten(colorDiff).isDark() ? Color('#FFFFFF') : Color('#000000');
		res[`${name}-color-dark`] = color.darken(colorDiff);
		res[`${name}-color-dark-contrast`] = color.darken(colorDiff).isDark() ? Color('#FFFFFF') : Color('#000000');
		res[`${name}-color-contrast`] = color.isDark() ? Color('#FFFFFF') : Color('#000000');
		return res;
	}

	const colors = useComputed(() => ([
		createColors('accent', Color(themeService.accentColor.value)),
		createColors('background', Color(themeService.darkMode.value ? '#000000' : '#ffffff')),
		createColors('success', Color(success)),
		createColors('info', Color(info)),
		createColors('warning', Color(warning)),
		createColors('error', Color(error)),
	])
		.map(obj => Object.entries(obj))
		.flat(1)
		.map(([key, value]) => `--${key}: ${value.rgb().string()};`)
		.join('\n')
	);

	return (
		<style>
			{`:root {\n${colors}\n}\nbody {\nbackground: var(--background-color);\ncolor: var(--background-color-contrast);\n}`}
		</style>
	);
}
