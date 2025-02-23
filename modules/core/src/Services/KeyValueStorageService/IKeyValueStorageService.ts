export const IKeyValueStorageServiceSymbol = Symbol.for('IKeyValueStorageService');

/**
 * Stores string values by keys.
 */
export interface IKeyValueStorageService {
	/**
	 * Checks if a key has a value.
	 * @param key key of the value.
	 */
	has(key: string): boolean;

	/**
	 * Gets the value by a key.
	 * @param key key of the value.
	 */
	get(key: string): string | undefined;

	/**
	 * Gets the value by a key.
	 * @param key key of the value.
	 * @param value value to set.
	 */
	set(key: string, value: string): void;

	/**
	 * Deletes a value by key.
	 * @param key key of the value to delete.
	 */
	delete(key: string): void;
}
