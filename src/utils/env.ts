import dotenv from "dotenv";
import { AssertionError } from "assert";
dotenv.config();

const assert = <T>(value: T, errorMessage: string): NonNullable<T> => {
	if (value) return value as NonNullable<T>;
	throw new AssertionError({ message: errorMessage });
};

const ensureEnv = (key: string): string => {
	return assert(
		process.env[key],
		`${key} is not defined in environment variables`
	);
};

export default {
	APPLICATION_ID: ensureEnv("DISCORD_APPLICATION_ID"),
	PUBLIC_KEY: ensureEnv("DISCORD_PUBLIC_KEY"),
	TOKEN: ensureEnv("DISCORD_BOT_TOKEN"),
	RPC_SOCKET_URL: ensureEnv("RPC_SOCKET_URL"),
};
