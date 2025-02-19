import { Signal } from '@preact/signals';
import { injectable } from 'inversify';

@injectable()
export class ThemeService {
	public accentColor = new Signal('#6200EE');
	public darkMode = new Signal(true);
}
