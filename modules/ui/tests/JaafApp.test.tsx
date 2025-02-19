import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/preact';
import { JaafApp } from '../src';
import { wait } from '../testing';
import { UiModule } from 'src/services/UiModule';

describe('JaafApp', () => {
	test('Renders correctly', async () => {
		const t = render((
			<JaafApp setup={(app) => {
				app.use(UiModule);
			}}>
				<div>TEST</div>
			</JaafApp>
		));

		await wait(500);

		expect(t.container).toMatchSnapshot();
	});
});
