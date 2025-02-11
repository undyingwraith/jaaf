import { injectable, multiInject, optional } from 'inversify';
import { ILogMessage } from './ILogMessage';
import { ILogService } from './ILogService';
import { ILogSink, ILogSinkSymbol } from './ILogSink';

@injectable()
export class LogService implements ILogService {
	public constructor(
		@multiInject(ILogSinkSymbol) @optional() private readonly sinks: ILogSink[]
	) { }

	public trace(msg: string): void {
		this.writeMessage({
			message: msg,
			level: 'TRACE',
		});
	}

	public debug(msg: string): void {
		this.writeMessage({
			message: msg,
			level: 'DEBUG',
		});
	}

	public info(msg: string): void {
		this.writeMessage({
			message: msg,
			level: 'INFO',
		});
	}

	public warn(msg: string): void {
		this.writeMessage({
			message: msg,
			level: 'WARN',
		});
	}

	public error(msg: Error | string): void {
		if (typeof msg === 'string') {
			this.writeMessage({
				message: msg,
				level: 'ERROR',
			});
		} else {
			this.writeMessage({
				message: `${msg.name}: ${msg.message} | ${msg.cause} | ${msg.stack}`,
				error: msg,
				level: 'ERROR',
			});
		}
	}

	private writeMessage(msg: Omit<ILogMessage, 'time'>) {
		const time = new Date(Date.now());
		this.sinks.forEach((sink) => sink.write({ ...msg, time }));
	}
}
