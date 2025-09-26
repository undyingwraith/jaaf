import { Application } from '@undyingwraith/jaaf-core';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { InversifyExpressServer } from 'inversify-express-utils';
import * as swaggerJSDoc from 'swagger-jsdoc';
import * as swaggerUi from 'swagger-ui-express';
import { IExpressOptions } from './IExpressOptions';

export class ExpressApplication extends Application {
	public constructor(options?: Partial<IExpressOptions>) {
		super();

		this.options = { ...this.options, ...options };

		this.server = new InversifyExpressServer(this.container)
			.setConfig((app) => {
				app.use(bodyParser.urlencoded({
					extended: true
				}));
				app.use(bodyParser.json());
				app.use(cors());

				// Setup swagger api docs
				if (this.options.enableApiDocs) {
					const swaggerSpec = swaggerJSDoc({
						swaggerDefinition: {
							openapi: '3.0.0',
							info: this.options.swaggerInfo,
						},
						apis: this.options.controllerPaths,
					});
					app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
				}
			});
	}

	public override async start() {
		await super.start();
		console.log('started1');
		await this.server
			.build()
			.listen(this.options.port);
		console.log('started2');
	}

	private server: InversifyExpressServer;
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
