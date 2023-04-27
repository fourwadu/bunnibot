import { TextChannel } from "discord.js";
import BunniBot from "../client";
import BaseMonitor from "./structures/base";
import { web3 } from "../utils/web3";

type BribeUpdate = {};

export default class BribeMonitor extends BaseMonitor<string> {
	constructor(client: BunniBot, name: string, channels: TextChannel[]) {
		super(client, name, channels);
	}

	async publish(update: BribeUpdate) {}

	async startMonitor(): Promise<void> {}
}
