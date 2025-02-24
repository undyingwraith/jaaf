import { injectable } from 'inversify';
import { IKeyValueStorageService } from './IKeyValueStorageService';

@injectable()
export class MemoryKeyValueStorageService implements IKeyValueStorageService {
	/**
	 * @inheritdoc
	 */
	has(key: string): boolean {
		return this.values.has(key);
	}

	/**
	 * @inheritdoc
	 */
	get(key: string): string | undefined {
		return this.values.get(key);
	}

	/**
	 * @inheritdoc
	 */
	set(key: string, value: string): void {
		this.values.set(key, value);
	}

	/**
	 * @inheritdoc
	 */
	delete(key: string): void {
		this.values.delete(key);
	}

	/**
	 * Holds all values.
	 */
	private values = new Map<string, string>();
}
