import { describe, expect, test } from 'vitest';
import { render, waitFor } from '@testing-library/preact';
import { JaafApp } from '../src';
import { UiModule } from 'src/services/UiModule';

describe('JaafApp', () => {
	test('Renders correctly', async () => {
		const t = render((
			<JaafApp setup={(app) => {
				app.use(UiModule);
			}}>
				<div data-testid={'test'}>TEST</div>
			</JaafApp>
		));

		await waitFor(() => expect(t.findByTestId('test')).toBeDefined());

		expect(t.container).toMatchSnapshot();
	});
});
