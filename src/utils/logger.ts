import { createLogger, format, Logger, transports } from "winston";
const { combine, timestamp, label, printf } = format;

const logFormat = printf(({ level, message, label, timestamp, durationMs }) => {
	let msg = `[${timestamp}] [${label}] ${level}: ${message}`;

	if (durationMs) {
		msg += ` (took ${durationMs}ms)`;
	}

	return msg;
});

export const makeLogger = (name: string): Logger => {
	return createLogger({
		format: combine(label({ label: name }), timestamp(), logFormat),
		transports: [new transports.Console()],
	});
};
