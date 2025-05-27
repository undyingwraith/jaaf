# JAAF Browser

## Installation

See the [general instructions](../../README.md#installation).

## Required Modules

- [CoreModule](../core/README.md)

## Usage

Sample usage of the framework:

```typescript
import { Application, CoreModule } from '@undyingwraith/jaaf-core';
import { BrowserModule, type IHotkeyService, IHotkeyServiceSymbol } from '@undyingwraith/jaaf-browser';

const app = new Application();
app.use(CoreModule);
app.use(BrowserModule);
await app.start();

const service = app.getService<IHotkeyService>(IHotkeyServiceSymbol);

service.registerHotkey({
	key: 'f',
	ctrl: true,
}, () => {
	console.log('[ctrl]+[f] pressed');
});
```

## Services

| Interface | Implementations | Description | Included in Module |
| - | - | - | - |
| [IHotkeyService](src/Services/HotkeyService/IHotkeyService.ts) | [HotkeyService](src/Services/HotkeyService/HotkeyService.ts) | Provides a registry for all kinds of hotkeys, last registered ones takes priority. | true |
| - | [ConsoleLogSink](src/Services/ConsoleLogSink.ts) | Provides a [ILogSink](../core/src/Services/LogService/ILogSink.ts) that logs to browser console. | true |
| - | [LocalstorageKeyValueStorageService](src/Services/LocalstorageKeyValueStorageService.ts) | Provides a [IKeyValueStorageService](../core/src/Services/KeyValueStorageService/IKeyValueStorageService.ts) that stores values in the localstorage. | true |
