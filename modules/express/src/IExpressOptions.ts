export interface IExpressOptions {
	port: number;
	enableApiDocs: boolean;
	controllerPaths: string[];
	swaggerInfo: {
		title: string,
		version: string;
	};
}
