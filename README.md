# Just Another App Framework

## Why?

I've been rewriting the same kind of boilerplate for many of my apps.
And I've grown tired of writing it all over again.
So this is the result, a library of my most used boilerplate.

## Modules

| Module | Description |
| - | - |
| [core](./modules/core/README.md) | Contains base application and services. |
| [browser](./modules/browser/README.md) | Contains browser related services. |
| [ui](./modules/ui/README.md) | Contains preact components to run an application. |

## Installation

### Yarn

Add the following to `.yarnrc.yml`:
```
npmScopes:
  undyingwraith:
    npmAlwaysAuth: true
    npmRegistryServer: 'https://npm.pkg.github.com'
```

Authenticate with the new registry:
```
yarn npm login --scope undyingwraith
```

Install the packages:
```
yarn add @undyingwraith/jaaf-core ...
```

## Usage

Sample usage of the framework:

```typescript
import { Application, CoreModule, type ITranslationService, ITranslationServiceSymbol } from '@undyingwraith/jaaf-core';

const app = new Application();
await app.use(CoreModule);
app.registerConstantMultiple<ITranslations>({
	en: {
		translations: {
			Example: 'Example'
		}
	},
	de: {
		translation: {
			Example: 'Beispiel'
		}
	}
}, ITranslationsSymbol);
await app.start();

const service = app.getService<ITranslationService>(ITranslationServiceSymbol);

console.log(service.translate('Example'));
```
