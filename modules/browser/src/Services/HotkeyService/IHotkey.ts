/**
 * A Hotkey definition.
 */
export interface IHotkey {
	/**
	 * The key to be pressed.
	 */
	key: string;

	/**
	 * Whether or not shift has to be pressed (default: false).
	 */
	shift?: boolean;

	/**
	 * Whether or not alt has to be pressed (default: false).
	 */
	alt?: boolean;

	/**
	 * Whether or not control has to be pressed (default: false).
	 */
	ctrl?: boolean;
}
