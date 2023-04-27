import { Logger } from "winston";
import BunniBot from "../../client";
import { makeLogger } from "../../utils/logger";
import { TextChannel } from "discord.js";

export default abstract class BaseMonitor<U> {
	protected running: boolean = false;
	protected logger: Logger;

	constructor(
		protected client: BunniBot,
		protected name: string,
		protected channels?: TextChannel[]
	) {
		this.logger = makeLogger("monitor: " + name);
	}

	abstract startMonitor(): void;

	protected abstract publish(update: U | U[]): void;

	public start() {
		if (this.running) throw new Error(this.name + " is already running.");
		this.logger.info("starting monitor");
		this.running = true;
		this.startMonitor();
	}

	public stop() {
		if (!this.running) throw new Error(this.name + " is not running.");
	}
}
