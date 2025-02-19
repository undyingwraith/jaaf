import { IModule } from '@undyingwraith/jaaf-core';
import { ComponentChildren } from 'preact';
import { Router } from 'wouter-preact';
import { useHashLocation } from 'wouter-preact/use-hash-location';
import { AppContextProvider, ThemeProvider } from './context';

export interface IJaafAppProps {
	setup: IModule;
	children: ComponentChildren;
}

export function JaafApp(props: IJaafAppProps) {
	const { setup, children } = props;

	return (
		<Router hook={useHashLocation}>
			<AppContextProvider setup={setup}>
				<ThemeProvider>
					{children}
				</ThemeProvider>
			</AppContextProvider>
		</Router>
	);
}
