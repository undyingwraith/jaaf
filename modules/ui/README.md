# JAAF UI

## Installation

See the [general instructions](../../README.md#installation).

## Required Modules

- [CoreModule](../core/README.md)
- [BrowserModule](../browser/README.md)

## Usage

Sample usage of the framework:

```typescript
import { BrowserModule } from '@undyingwraith/jaaf-browser';
import { CoreModule } from '@undyingwraith/jaaf-core';
import { JaafApp, UiModule } from '@undyingwraith/jaaf-ui';
import { render } from 'preact';
import '@undyingwraith/jaaf-ui/style.css';


function App() {
	return (
		<JaafApp
			setup={async (app) => {
				await app.use(CoreModule);
				await app.use(BrowserModule);
				await app.use(UiModule);
			}}
		>
			<HotkeySample/>
		</JaafApp>
	);
}

function HotkeySample() {
	useHotkey({
		ctrl: true,
		key: 'f',
	}, () => {
		alert('hotkey pressed');
	});

	return (<div/>);
}

render(<App />, document.getElementById('app')!);
```

## Services

| Interface | Implementations | Description | Included in Module |
| - | - | - | - |
| [IThemeService](./src/services/ThemeService/IThemeService.ts) | [ThemeService](./src/services/ThemeService/ThemeService.ts) | Service that computes all themeing data. | true |
