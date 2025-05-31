import { batch, useComputed, useSignal } from '@preact/signals';
import { Button, Loader } from '../atoms';

export function ActionButton(props: { action: () => Promise<void>; disabled?: boolean; children: string; variant?: 'default' | 'primary'; }) {
	const loading = useSignal<boolean>(false);
	const result = useSignal<boolean | undefined>(undefined);
	const timeout = useSignal<undefined | NodeJS.Timeout>(undefined);

	const status = useComputed(() => {
		if (loading.value) {
			return (<Loader size={2} />);
		}
		return undefined;
	});

	return (
		<Button
			disabled={useComputed(() => loading.value || props.disabled)}
			variant={useComputed(() => result.value ? 'success' : result.value === false ? 'error' : props.variant ?? 'default')}
			onClick={() => {
				batch(() => {
					result.value = undefined;
					loading.value = true;
					if (timeout.value !== undefined) {
						clearTimeout(timeout.value);
						timeout.value = undefined;
					}
				});
				props.action()
					.then(() => {
						result.value = true;
					})
					.catch((ex) => {
						console.error(ex);
						result.value = false;
					})
					.finally(() => {
						loading.value = false;
						timeout.value = setTimeout(() => {
							result.value = undefined;
						}, 5000);
					});
			}}
		>
			<div style={{ display: 'flex', gap: 3 }}>
				{props.children}
				{status}
			</div>
		</Button>
	);
}
