import { IApplication } from './IApplication';

export const IStartupActionSymbol = Symbol.for('IStartupAction');

export type IStartupAction = (app: IApplication) => Promise<void> | void; 
