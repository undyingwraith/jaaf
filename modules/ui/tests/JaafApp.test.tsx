import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/preact';
import { JaafApp } from '../src';

describe('JaafApp', () => {
	test('Renders correctly', () => {
		const t = render((
			<JaafApp setup={(app) => {

			}}>
				<div>TEST</div>
			</JaafApp>
		));
		expect(t).toMatchSnapshot();
	});
});
