import { useComputed } from '@preact/signals';
import { ComponentChildren } from 'preact';
import { useService } from '../hooks';
import { IThemeService, IThemeServiceSymbol } from '../services';

export function ThemeProvider(props: { children: ComponentChildren; }) {
	const themeService = useService<IThemeService>(IThemeServiceSymbol);

	const css = useComputed(() => `--accent-color: ${themeService.accentColor.value};`);

	return (
		<div style={css}>
			{props.children}
		</div>
	);
}
