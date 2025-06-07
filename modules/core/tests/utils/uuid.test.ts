import { uuid } from 'src';
import { describe, expect, test } from 'vitest';

describe('utils-uuid', () => {
	test('can generate valid uuid (%s)', { repeats: 10 }, () => {
		const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

		expect(regex.test(uuid())).toBeTruthy();
	});
});
