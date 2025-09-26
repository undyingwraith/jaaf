import { type Response } from 'express';
import { controller, httpGet, response } from 'inversify-express-utils';

@controller('/test')
export class TestController {
	@httpGet('/')
	public get(@response() res: Response) {
		res.sendStatus(200);
	}
}
