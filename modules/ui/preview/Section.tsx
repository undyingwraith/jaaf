import { ComponentChildren } from 'preact';
import { CanBeSignal } from 'src';

export function Section(props: { title: CanBeSignal<string>, children: ComponentChildren; }) {
	return <div>
		<h3>{props.title}</h3>
		<div>{props.children}</div>
	</div>;
}
