import { TextChannel } from "discord.js";
import axios, { AxiosInstance } from "axios";
import {
	BunniQueryDocument,
	BunniQueryQuery,
	execute,
} from "../../.graphclient";

import BaseMonitor from "./structures/base";
import BunniBot from "../client";
import { sleep } from "../utils/etc";
import Poller from "./structures/poller";

export default class BunniGraphPoller extends Poller<BunniQueryQuery> {
	protected delay: number = 120e3;

	constructor(client: BunniBot, name: string) {
		super(client, name);
	}

	protected publish({ pools }: BunniQueryQuery): void {
		this.client.pools = pools;
	}

	async pollUpdate() {
		const response = (await execute(BunniQueryDocument, {})) as BunniQueryQuery;
		return response;
	}
}
