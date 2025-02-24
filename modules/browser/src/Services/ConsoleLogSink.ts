import { ILogMessage, ILogSink } from '@undyingwraith/jaaf-core';
import { injectable } from 'inversify';

@injectable()
export class ConsoleLogSink implements ILogSink {
	write(msg: ILogMessage): void {
		if (msg.level === 'ERROR') {
			console.error(`[${msg.time.toISOString()}][${msg.level}]: ${msg.message}`, msg.error);
		} else {
			console.log(`[${msg.time.toISOString()}][${msg.level}]: ${msg.message}`);
		}
	}
}
