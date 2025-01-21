import { IModule } from 'jaaf-core';
import { Router } from 'wouter-preact';
import { useHashLocation } from 'wouter-preact/use-hash-location';
import { AppContextProvider } from './context';
import { ComponentChildren } from 'preact';

export interface IJaafAppProps {
	setup: IModule;
	children: ComponentChildren;
}

export function JaafApp(props: IJaafAppProps) {
	const { setup, children } = props;

	return (
		<Router hook={useHashLocation}>
			<AppContextProvider setup={setup}>
				{children}
			</AppContextProvider>
		</Router>
	);
}
