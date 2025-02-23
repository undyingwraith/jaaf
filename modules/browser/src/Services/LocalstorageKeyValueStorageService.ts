import { IKeyValueStorageService } from '@undyingwraith/jaaf-core';

export class LocalstorageKeyValueStorageService implements IKeyValueStorageService {
	/**
	 * @inheritdoc
	 */
	has(key: string): boolean {
		return window.localStorage.getItem(key) != null;
	}

	/**
	 * @inheritdoc
	 */
	get(key: string): string | undefined {
		return window.localStorage.getItem(key) ?? undefined;
	}

	/**
	 * @inheritdoc
	 */
	set(key: string, value: string): void {
		window.localStorage.setItem(key, value);
	}

	/**
	 * @inheritdoc
	 */
	delete(key: string): void {
		window.localStorage.removeItem(key);
	}
}
