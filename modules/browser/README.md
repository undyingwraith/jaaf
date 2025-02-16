# JAAF Browser

## Usage

Sample usage of the framework:

```typescript
import { Application, CoreModule } from 'jaaf-core';
import { BrowserModule, type IHotkeyService, IHotkeyServiceSymbol } from 'jaaf-browser';

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
