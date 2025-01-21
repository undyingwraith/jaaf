import { useContext } from 'preact/hooks';
import { AppContext } from '../context';

export function useOptionalService<T>(identifier: symbol): T | undefined {
	const app = useContext(AppContext);
	try {
		return app?.getService<T>(identifier);
	} catch (ex) {
		return undefined;
	}
}
