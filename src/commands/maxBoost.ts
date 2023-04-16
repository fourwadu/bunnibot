import {
	CommandContext,
	SlashCreator,
	SlashCommand,
	CommandOptionType,
	AutocompleteContext,
} from "slash-create";
import BunniBot from "../client";
import { getAutocompleteGauge } from "../web3/gauge";

export default class MaxBoostCommand extends SlashCommand<BunniBot> {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "maxboost",
			description: "Calculates max boost for any Bunni gauge.",
			options: [
				{
					type: CommandOptionType.STRING,
					name: "gauge",
					description: "Gauge pair",
					autocomplete: true,
					required: true,
				},
				{
					type: CommandOptionType.STRING,
					name: "address",
					description: "Address",
					required: true,
				},
				{
					type: CommandOptionType.BOOLEAN,
					name: "anon",
					description: "Hide your address and results",
					required: false,
				},
			],
		});

		this.filePath = __filename;
	}

	async autocomplete(ctx: AutocompleteContext): Promise<void> {
		const value = ctx.options[ctx.focused];
		ctx.sendResults(getAutocompleteGauge(this.client.gauges, value));
	}

	onError(err: Error, ctx: CommandContext) {
		this.client.logger.warn(
			"Error occured in " + ctx.commandName + ": " + err.message
		);
	}

	async run(ctx: CommandContext) {
		const { gauge, address, anon } = ctx.options;
	}
}
