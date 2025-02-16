import { Container, interfaces } from 'inversify';
import { IApplication, IApplicationSymbol } from './IApplication';
import { IApplicationRegistration } from './IApplicationRegistration';
import { IModule } from './IModule';
import { IStartupAction, IStartupActionSymbol } from './IStartupAction';

export class Application implements IApplication, IApplicationRegistration {
	public constructor(container?: Container) {
		if (container) {
			this.container = container;
		}
		this.container.bind(IApplicationSymbol).toConstantValue(this);
	}

	/**
	 * @inheritdoc
	 */
	public registerConstant<T>(service: T, identifier: symbol) {
		if (this.container.isCurrentBound(identifier)) {
			this.container.unbind(identifier);
		}
		this.container.bind<T>(identifier).toConstantValue(service);
	}

	/**
	 * @inheritdoc
	 */
	public registerConstantMultiple<T>(service: T, identifier: symbol) {
		this.container.bind<T>(identifier).toConstantValue(service);
	}

	/**
	 * @inheritdoc
	 */
	public register<T>(service: interfaces.Newable<T>, identifier: symbol) {
		if (this.container.isCurrentBound(identifier)) {
			this.container.unbind(identifier);
		}
		this.container.bind<T>(identifier).to(service);
	}

	/**
	 * @inheritdoc
	 */
	public registerMultiple<T>(service: interfaces.Newable<T>, identifier: symbol) {
		this.container.bind<T>(identifier).to(service);
	}

	/**
	 * @inheritdoc
	 */
	public use(module: IModule): void {
		module(this);
	}

	/**
	 * @inheritdoc
	 */
	public registerStartupAction(action: IStartupAction): void {
		this.registerConstantMultiple(action, IStartupActionSymbol);
	}

	/**
	 * @inheritdoc
	 */
	public getService<T>(identifier: symbol): T {
		return this.container.get<T>(identifier);
	}

	/**
	 * @inheritdoc
	 */
	public getOptionalService<T>(identifier: symbol): T | undefined {
		return this.container.tryGet<T>(identifier);
	}

	/**
	 * Starts the {@link IApplication}.
	 */
	public async start(): Promise<void> {
		const parentActions = this.container.parent?.tryGetAll<IStartupAction>(IStartupActionSymbol) ?? [];
		const actions = this.container.tryGetAll<IStartupAction>(IStartupActionSymbol).filter(a => !parentActions.includes(a));

		for (const action of actions) {
			await action(this);
		}
	}

	/**
	 * Creates a new child {@link IApplication}.
	 * @returns the child {@link IApplication}.
	 */
	public createChildApplication(): Application {
		return new Application(this.container.createChild());
	}

	/**
	 * The IOC {@link Container} of the {@link IApplication}.
	 */
	private readonly container = new Container({
		defaultScope: 'Singleton',
	});
}
