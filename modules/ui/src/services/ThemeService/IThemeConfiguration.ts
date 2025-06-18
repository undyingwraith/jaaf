export const IThemeConfigurationSymbol = Symbol.for('IThemeConfiguration');

export interface IThemeConfiguration {
	accentColor: string;
	darkMode: boolean;
}
