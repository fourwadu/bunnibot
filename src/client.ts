import { Logger } from "winston";
import { Client, ClientOptions } from "discord.js";
import { CommandContext } from "slash-create";

import { GaugeData, getGauges } from "./web3/gauge";
import { makeLogger } from "./utils/logger";

export default class BunniBot extends Client {
	public gauges: GaugeData[] = [];
	public logger: Logger = makeLogger("client");

	constructor(options: ClientOptions) {
		super(options);

		this.initialize();

		this.on("ready", async () => {
			this.user?.setActivity("github.com/fourwadu");
		});
	}

	async initialize() {
		this.gauges = await getGauges();
		this.logger.info("Initialized as " + this.user?.username);
	}
}
