# JAAF Core

## Usage

Sample usage of the framework:

```typescript
import { Application, CoreModule, type ITranslationService, ITranslationServiceSymbol } from 'jaaf-core';

const app = new Application();
app.use(CoreModule);

const service = app.getService<ITranslationService>(ITranslationServiceSymbol);

console.log(service.translate('Example'));
```
