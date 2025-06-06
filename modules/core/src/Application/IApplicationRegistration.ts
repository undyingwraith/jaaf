import { Newable } from 'inversify';
import { IModule } from './IModule';
import { IStartupAction } from './IStartupAction';

export interface IApplicationRegistration {
	/**
	 * Registers a new service.
	 * @param service service to register.
	 * @param identifier symbol for the service.
	 */
	register<T>(service: Newable<T>, identifier: symbol): Promise<void>;

	/**
	 * Registers a new service without removing previous registrations.
	 * @param service service to register.
	 * @param identifier symbol for the service.
	 */
	registerMultiple<T>(service: Newable<T>, identifier: symbol): void;

	/**
	 * Registers a new constant.
	 * @param service service to register.
	 * @param identifier symbol for the service.
	 */
	registerConstant<T>(service: T, identifier: symbol): Promise<void>;

	/**
	 * Registers a new constant without removing previous registrations.
	 * @param service service to register.
	 * @param identifier symbol for the service.
	 */
	registerConstantMultiple<T>(service: T, identifier: symbol): void;

	/**
	 * Registers a new startup action.
	 * @param action action to register.
	 */
	registerStartupAction(action: IStartupAction): void;

	/**
	 * Registers a {@link IModule}.
	 * @param module {@link IModule} to use in the {@link IApplication}.
	 */
	use(module: IModule): Promise<void>;
}
