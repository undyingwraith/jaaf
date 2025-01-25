import { IModule } from '@undyingwraith/jaaf-core';
import { Router } from 'wouter-preact';
import { useHashLocation } from 'wouter-preact/use-hash-location';
import { AppContextProvider } from './context';
import { ComponentChildren } from 'preact';
import { ThemeProvider } from './context';
import { IThemeServiceSymbol, ThemeService } from './services';

export interface IJaafAppProps {
	setup: IModule;
	children: ComponentChildren;
}

export function JaafApp(props: IJaafAppProps) {
	const { setup, children } = props;

	return (
		<Router hook={useHashLocation}>
			<AppContextProvider setup={(app) => {
				app.register(ThemeService, IThemeServiceSymbol);
				setup && setup(app);
			}}>
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</AppContextProvider>
		</Router>
	);
}
