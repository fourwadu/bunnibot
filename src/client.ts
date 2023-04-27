import { Logger } from "winston";
import { Client, ClientOptions, TextChannel } from "discord.js";
import { CommandContext } from "slash-create";

import ENV from "./utils/env";
import { makeLogger } from "./utils/logger";
import BaseMonitor from "./monitors/structures/base";
import BribeMonitor from "./monitors/bribes";
import BunniGraphPoller from "./monitors/bunni-graph";
import { BunniQueryQuery } from "../.graphclient";
import Poller from "./monitors/structures/poller";

const BUNNI_MONITORS = {
	BRIBE_MONITOR: {
		channels: ["1095205441430097942"],
		class: BribeMonitor,
	},
	BUNNI_MONITOR: {
		channels: ["1095205441430097942"],
		class: BunniGraphPoller,
	},
};

type BunniMonitors = {
	[name in keyof typeof BUNNI_MONITORS]: {
		channels: TextChannel[];
		monitor: BaseMonitor<any> | Poller<any>;
	};
};

export default class BunniBot extends Client {
	public logger: Logger = makeLogger("client");
	private bunniMonitors?: BunniMonitors;

	public pools: BunniQueryQuery["pools"] = [];

	constructor(options: ClientOptions) {
		super(options);

		this.initialize();

		this.on("ready", async () => {
			this.user?.setActivity("github.com/fourwadu");
		});
	}

	private panic(error: Error) {
		this.logger.error(error);
		this.destroy();
		return error;
	}

	private async initializeChannels() {
		const bunniMonitors = {} as BunniMonitors;
		await Promise.all(
			Object.entries(BUNNI_MONITORS).map(async ([name, details]) => {
				const channels = await Promise.all(
					details.channels.map(async (id) => {
						const channel = await this.channels.fetch(id);

						if (!channel?.isTextBased() || !(channel instanceof TextChannel)) {
							throw this.panic(new Error("Invalid channel " + name + " " + id));
						}
						return channel;
					})
				);

				bunniMonitors[name as keyof typeof BUNNI_MONITORS] = {
					channels,
					monitor: new details.class(this, name, channels),
				};
			})
		);

		this.bunniMonitors = bunniMonitors;
	}

	async startAllMonitors() {
		if (!this.bunniMonitors) throw new Error("No monitors found");
		Object.values(this.bunniMonitors).forEach((details) => {
			details.monitor.start();
		});
	}

	async initialize() {
		await this.login(ENV.TOKEN);
		this.logger.info("Initialized as " + this.user?.username);

		await this.initializeChannels();
		this.startAllMonitors();
	}
}
