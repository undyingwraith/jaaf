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

## Usage

Sample usage of the framework:

```typescript
import { Application, CoreModule, type ITranslationService, ITranslationServiceSymbol } from 'jaaf-core';

const app = new Application();
app.use(CoreModule);

const service = app.getService<ITranslationService>(ITranslationServiceSymbol);

console.log(service.translate('Example'));
```
