import { Signal } from '@preact/signals';

export class ThemeService {
	public accentColor = new Signal('#6200EE');
	public darkMode = new Signal(true);
}
