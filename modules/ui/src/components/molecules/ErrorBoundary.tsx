import { Component } from 'preact';
import { PropsWithChildren } from 'preact/compat';
import { Alert } from '../atoms';

export class ErrorBoundary extends Component<PropsWithChildren<{}>, { hasError: boolean; error?: Error; }> {
	constructor(props: PropsWithChildren<{}>) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, info: any) {
		console.error(error, info);
	}

	render() {
		if (this.state.hasError) {
			return (
				<Alert severity={'error'}>
					<p data-testid={'error-message'}>{this.state.error?.name}: {this.state.error?.message}</p>
				</Alert>
			);
		}

		return this.props.children;
	}
}
