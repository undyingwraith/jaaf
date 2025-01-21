import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/preact';
import { Loader } from '../../../src';

describe('Loader', () => {
	test('Renders correctly', () => {
		const t = render((
			<Loader />
		));
		expect(t).toMatchSnapshot();
	});
});
