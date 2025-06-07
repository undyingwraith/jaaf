import { beforeEach, describe, expect, test } from 'vitest';
import { Application, ILogService, ILogServiceSymbol, ILogSinkSymbol, LogService, MemoryLogSink } from 'src';

describe('LogService', () => {
	let app: Application;

	beforeEach(() => {
		app = new Application();
		app.register(LogService, ILogServiceSymbol);
		app.register(MemoryLogSink, ILogSinkSymbol);
	});

	test('can log a info message', () => {
		const log = app.getService<ILogService>(ILogServiceSymbol)!;
		const sink = app.getService<MemoryLogSink>(ILogSinkSymbol)!;

		log.info('this is a test');

		expect(sink.logs.length).toBe(1);
		expect(sink.logs[0].message).toBe('this is a test');
		expect(sink.logs[0].level).toBe('INFO');
	});

	test('can log a warning message', () => {
		const log = app.getService<ILogService>(ILogServiceSymbol)!;
		const sink = app.getService<MemoryLogSink>(ILogSinkSymbol)!;

		log.warn('this is a test');

		expect(sink.logs.length).toBe(1);
		expect(sink.logs[0].message).toBe('this is a test');
		expect(sink.logs[0].level).toBe('WARN');
	});

	test('can log a error message', () => {
		const log = app.getService<ILogService>(ILogServiceSymbol)!;
		const sink = app.getService<MemoryLogSink>(ILogSinkSymbol)!;

		log.error('this is a test');

		expect(sink.logs.length).toBe(1);
		expect(sink.logs[0].message).toBe('this is a test');
		expect(sink.logs[0].level).toBe('ERROR');

		const error = new Error('TestError');
		log.error(error);

		expect(sink.logs.length).toBe(2);
		expect(sink.logs[1].message.startsWith('Error: TestError')).toBe(true);
		expect(sink.logs[1].level).toBe('ERROR');
	});
});
