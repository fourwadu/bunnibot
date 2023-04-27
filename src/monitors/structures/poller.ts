import { Logger } from "winston";
import BunniBot from "../../client";
import { makeLogger } from "../../utils/logger";
import { sleep } from "../../utils/etc";
import BaseMonitor from "./base";

export default abstract class Poller<ItemType> extends BaseMonitor<ItemType> {
	protected running: boolean = false;
	protected logger: Logger;
	protected abstract delay: number;

	constructor(protected client: BunniBot, protected name: string) {
		super(client, name);
		this.logger = makeLogger("monitor: " + name);
	}

	protected abstract pollUpdate(): Promise<ItemType | ItemType[]>;

	public async startPoll() {
		while (this.running) {
			try {
				const response = await this.pollUpdate();
				this.publish(response);
			} catch (err) {
				console.error(err);
				this.logger.error(err);
			}
		}
		await sleep(this.delay);
	}

	public async startMonitor() {
		while (this.running) {
			try {
				this.logger.info("Running new iteration of monitor");

				const update = await this.pollUpdate();
				this.publish(update);
				this.logger.info("Fetched updates");
			} catch (err) {
				console.error(err);
				this.logger.error(err);
			}
			await sleep(this.delay);
		}
	}
}
