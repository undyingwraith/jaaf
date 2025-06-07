import { ErrorBoundary } from 'src';
import { describe, expect, test } from 'vitest';
import { performRender } from 'testing';

describe('ErrorBoundary', () => {
	test('Catches Error', () => {
		function TestComponent() {
			throw new Error('TestError');
			return (<div />);
		}

		performRender((
			<ErrorBoundary>
				<TestComponent />
			</ErrorBoundary>
		), (t) => {
			expect(t.getByTestId('error-message')).not.toBeNull();
			expect(t.getByTestId('error-message')).not.toBeUndefined();
		});
	});
});
