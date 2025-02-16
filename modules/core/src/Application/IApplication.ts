export const IApplicationSymbol = Symbol.for('IApplication');

/**
 * The main application holding everything together.
 */
export interface IApplication {
	/**
	 * Gets a service identified by its symbol.
	 * @param identifier symbol for the service.
	 * @returns The requested service.
	 */
	getService<T>(identifier: symbol): T;

	/**
	 * Gets a optional service identified by its symbol.
	 * @param identifier symbol for the service.
	 * @returns The requested service or {@link undefined}.
	 */
	getOptionalService<T>(identifier: symbol): T | undefined;
}
