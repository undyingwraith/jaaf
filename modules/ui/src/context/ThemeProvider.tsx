import { useComputed } from '@preact/signals';
import { ComponentChildren } from 'preact';
import { useService } from '../hooks';
import { IThemeService, IThemeServiceSymbol } from '../services';
import Color, { ColorInstance } from 'color';

export function ThemeProvider(props: { children: ComponentChildren; }) {
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
		res[`${name}-color-dark`] = color.darken(colorDiff);
		res[`${name}-color-contrast`] = color.isDark() ? Color('#FFFFFF') : Color('#000000');
		return res;
	}

	const colors2 = useComputed(() => ([
		createColors('accent', Color(themeService.accentColor.value)),
		createColors('background', Color(themeService.darkMode.value ? '#000000' : '#ffffff')),
		createColors('success', Color(success)),
		createColors('info', Color(info)),
		createColors('warning', Color(warning)),
		createColors('error', Color(error)),
	])
		.map(obj => Object.entries(obj))
		.flat(1)
		.map(([key, value]) => `--${key}: ${value.hsl().string()};`)
		.join(' ')
	);

	const css = useComputed(() => `${colors2} background-color: var(--background-color); width: 100%; height: 100%`);

	return (
		<div style={css}>
			{props.children}
		</div>
	);
}
