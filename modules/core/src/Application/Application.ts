import { Container, Newable } from 'inversify';
import { IApplication, IApplicationSymbol } from './IApplication';
import { IApplicationRegistration } from './IApplicationRegistration';
import { IModule } from './IModule';
import { IStartupAction, IStartupActionSymbol } from './IStartupAction';

export class Application implements IApplication, IApplicationRegistration {
	public constructor(container?: Container) {
		this.container = new Container({
			defaultScope: 'Singleton',
			parent: container,
		});
		this.container.bind(IApplicationSymbol).toConstantValue(this);
	}

	/**
	 * @inheritdoc
	 */
	public async registerConstant<T>(service: T, identifier: symbol) {
		if (this.container.isCurrentBound(identifier)) {
			await this.container.unbind(identifier);
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
	public async register<T>(service: Newable<T>, identifier: symbol) {
		if (this.container.isCurrentBound(identifier)) {
			await this.container.unbind(identifier);
		}
		this.container.bind<T>(identifier).to(service);
	}

	/**
	 * @inheritdoc
	 */
	public registerMultiple<T>(service: Newable<T>, identifier: symbol) {
		this.container.bind<T>(identifier).to(service);
	}

	/**
	 * @inheritdoc
	 */
	public async use(module: IModule): Promise<void> {
		await module(this);
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
		return this.container.get<T>(identifier, { optional: false });
	}

	/**
	 * @inheritdoc
	 */
	public getOptionalService<T>(identifier: symbol): T | undefined {
		return this.container.get<T>(identifier, { optional: true });
	}

	/**
	 * Starts the {@link IApplication}.
	 */
	public async start(): Promise<void> {
		const actions = this.container.getAll<IStartupAction>(IStartupActionSymbol, { optional: true });

		for (const action of actions) {
			await action(this);
		}
	}

	/**
	 * Creates a new child {@link IApplication}.
	 * @returns the child {@link IApplication}.
	 */
	public createChildApplication(): Application {
		return new Application(this.container);
	}

	/**
	 * The IOC {@link Container} of the {@link IApplication}.
	 */
	private readonly container: Container;
}
