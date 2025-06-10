import { IModule } from '@undyingwraith/jaaf-core';
import { ComponentChildren } from 'preact';
import { AppContextProvider } from 'src';

export function createWrapper(setup: IModule) {
	return (props: { children: ComponentChildren; }) => (
		<AppContextProvider setup={setup}>
			{props.children}
		</AppContextProvider>
	);
}
