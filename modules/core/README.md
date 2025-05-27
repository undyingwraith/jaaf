# JAAF Core

## Installation

See the [general instructions](../../README.md#installation).

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

## Services

| Interface | Implementations | Description | Included in Module |
| - | - | - | - |
| [IkeyValueStorageService](./src/Services/KeyValueStorageService/IKeyValueStorageService.ts) | [MemoryKeyValueStorageService](./src/Services/KeyValueStorageService/MemoryKeyValueStorageService.ts) | A key value store that is shared across the application and can be persisted. | true |
| [ILogService](./src/Services/LogService/ILogService.ts) | [LogService](./src/Services/LogService/LogService.ts) | A service that logs data to configured sinks. | true |
| [ILogSink](./src/Services/LogService/ILogSink.ts) | [MemoryLogSink](./src/Services/LogService/MemoryLogSink.ts) | A sample log sink, useful for testing purposes. | false |
| [ITranslationService](./src/Services/TranslationService/ITranslationService.ts) | [TranslationService](./src/Services/TranslationService/TranslationService.ts) | Service that translates various pieces of text for localisation. | true |
