import { Controller, Get, } from '@inversifyjs/http-core';

@Controller('/test')
export class TestController {
	@Get('/')
	public get() {
		return '200 Ok';
	}
}
