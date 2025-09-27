import { InversifyExpressHttpAdapter } from '@inversifyjs/http-express';
import { Application } from '@undyingwraith/jaaf-core';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import { Newable } from 'inversify';
import swaggerJSDoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';
import { IExpressOptions } from './IExpressOptions';

export class ExpressApplication extends Application {
	public constructor(options?: Partial<IExpressOptions>) {
		super();

		this.options = { ...this.options, ...options };

		this.adapter = new InversifyExpressHttpAdapter(this.container);
	}

	public registerController<T>(controller: Newable<T>) {
		this.container.bind(controller).toSelf().inSingletonScope();
	}

	public override async start() {
		await super.start();
		const server = await this.adapter.build();

		server.use(bodyParser.urlencoded({
			extended: true
		}));
		server.use(bodyParser.json());
		server.use(cors());

		// Setup swagger api docs
		if (this.options.enableApiDocs) {
			const swaggerSpec = swaggerJSDoc({
				swaggerDefinition: {
					openapi: '3.0.0',
					info: this.options.swaggerInfo,
				},
				apis: this.options.controllerPaths,
			});
			server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
		}

		await new Promise<void>((resolve, reject) => {
			server.listen(this.options.port, (e) => {
				if (e) {
					reject(e);
				} else {
					resolve();
				}
			});
		});
	}

	private adapter: InversifyExpressHttpAdapter;
	private options: IExpressOptions = {
		port: 3000,
		enableApiDocs: false,
		controllerPaths: ['./src/controllers/*.ts'],
		swaggerInfo: {
			title: 'JAAF Api docs',
			version: '0.0.0',
		},
	};
}
