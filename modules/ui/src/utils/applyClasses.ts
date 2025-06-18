export function applyClasses(classes: { [key: string]: boolean | undefined; }) {
	return Object.entries(classes).filter(([_, use]) => use).map(([name]) => name).join(' ');
}
