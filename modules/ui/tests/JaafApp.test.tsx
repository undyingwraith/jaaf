import { describe, expect, test } from 'vitest';
import { render, waitFor } from '@testing-library/preact';
import { JaafApp } from '../src';
import { UiModule } from 'src/services/UiModule';

describe('JaafApp', () => {
	test('Renders correctly', async () => {
		const t = render((
			<JaafApp setup={(async (app) => {
				await app.use(UiModule);
			})}>
				<div data-testid={'test'}>TEST</div>
			</JaafApp>
		));

		//TODO: figure out why it only works like this
		await new Promise((resolve) => {
			setTimeout(resolve, 100);
		});
		await waitFor(() => expect(t.findByTestId('test')).toBeDefined());

		expect(t.container).toMatchSnapshot();
	});
});
