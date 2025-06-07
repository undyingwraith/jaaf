# JAAF UI

## Getting started

### Required Modules

- [CoreModule](../core/README.md)
- [BrowserModule](../browser/README.md)

### Installation

See the [general instructions](../../README.md#installation).

### First steps

```bash
yarn create vite <name> --template preact-ts
cd <name>
yarn
yarn add @undyingwraith/jaaf-core @undyingwraith/jaaf-browser @undyingwraith/jaaf-ui
```

Complete the steps in the [general installation instructions](../../README.md#installation).

Make sure to add the following statements to your `tsconfig.json`
```json
{
	"compilerOptions": {
		"experimentalDecorators": true,
		"emitDecoratorMetadata": true
	}
}
```

Modify your `src/main.tsx` to look like this:
```typescript
import 'reflect-metadata';
import '@undyingwraith/jaaf-ui/style.css';

import { render } from 'preact';
import { App } from './app.tsx';

render(<App />, document.getElementById('app')!);
```

Modify your `src/app.tsx` to look like this:
```typescript
import { BrowserModule } from '@undyingwraith/jaaf-browser';
import { CoreModule } from '@undyingwraith/jaaf-core';
import { JaafApp, UiModule } from '@undyingwraith/jaaf-ui';

export function App() {
	return (
		<JaafApp
			setup={async (app) => {
				await app.use(CoreModule);
				await app.use(BrowserModule);
				await app.use(UiModule);
			}}
		>
			Hello World!
		</JaafApp>
	);
}
```

*Happy coding : )*


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
