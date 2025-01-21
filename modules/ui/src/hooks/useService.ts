import { useContext } from 'preact/hooks';
import { AppContext } from '../context';

export function useService<T>(identifier: symbol): T {
	const app = useContext(AppContext)!;
	return app.getService<T>(identifier)!;
}
