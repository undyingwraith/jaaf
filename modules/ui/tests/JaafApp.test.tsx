import { render, waitFor } from '@testing-library/preact';
import { JaafApp, UiModule } from 'src';
import { describe, expect, test } from 'vitest';

describe('JaafApp', () => {
	test('Renders correctly', async () => {
		const t = render((
			<JaafApp setup={(async (app) => {
				await app.use(UiModule);
			})}>
				<div data-testid={'test'}>TEST</div>
			</JaafApp>
		));

		await waitFor(() => expect(t.getByTestId('test')).toBeDefined(), { timeout: 1000 });

		expect(t.container).toMatchSnapshot();
	});


	test('Displays error message on startup error', async () => {
		const t = render((
			<JaafApp setup={(async (app) => {
				await app.use(UiModule);
				app.registerStartupAction(() => Promise.reject('FAILURE'));
			})}>
				<div>SUCCESS</div>
			</JaafApp>
		));

		await waitFor(() => expect(t.getByText('FAILURE')).toBeDefined(), { timeout: 1000 });


		const t2 = render((
			<JaafApp setup={(async (app) => {
				await app.use(UiModule);
				app.registerStartupAction(() => Promise.reject(new Error('FAILURE')));
			})}>
				<div>SUCCESS</div>
			</JaafApp>
		));

		await waitFor(() => expect(t2.getByText('Error: FAILURE')).toBeDefined(), { timeout: 1000 });
	});
});
