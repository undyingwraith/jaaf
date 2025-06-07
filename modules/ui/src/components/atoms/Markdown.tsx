import { marked } from 'marked';

export function Markdown(props: { value: string; }) {
	return (
		<div dangerouslySetInnerHTML={{ __html: marked.parse(props.value, { async: false }) }} />
	);
}
