import { queries } from '@testing-library/dom/types';
import { render, type RenderResult } from '@testing-library/preact';
import type { JSX } from 'preact/jsx-runtime';

export async function performRender(component: JSX.Element, act: (t: RenderResult<typeof queries>) => void | Promise<void>): Promise<void> {
	const t = render(component);
	await act(t);
	t.unmount();
}
