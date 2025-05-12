import { useSignal, useSignalEffect } from '@preact/signals';
import { Application, IModule } from '@undyingwraith/jaaf-core';
import { ComponentChildren, createContext } from 'preact';
import { useContext } from 'preact/hooks';
import { Loader } from '../components';

export const AppContext = createContext<Application | undefined>(undefined);

export function AppContextProvider(props: { setup: IModule; children: ComponentChildren; }) {
	const application = useSignal<Application | undefined>(undefined);
	const parentApp = useContext(AppContext);

	useSignalEffect(() => {
		const app = parentApp?.createChildApplication() ?? new Application();
		app.use(props.setup)
			.then(() => app.start())
			.then(() => {
				application.value = app;
			});
	});

	return application.value !== undefined ? (
		<AppContext.Provider value={application.value}>
			{props.children}
		</AppContext.Provider>
	) : (
		<Loader />
	);
}
