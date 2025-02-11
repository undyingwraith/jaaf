import { injectable } from 'inversify';
import { ILogSink } from './ILogSink';
import { ILogMessage } from './ILogMessage';

@injectable()
export class MemoryLogSink implements ILogSink {
	public write(msg: ILogMessage): void {
		this.logs.push(msg);
	}

	public logs: ILogMessage[] = [];
}
