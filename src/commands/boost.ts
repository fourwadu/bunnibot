import {
	CommandContext,
	SlashCreator,
	SlashCommand,
	CommandOptionType,
	AutocompleteContext,
} from "slash-create";
import BunniBot from "../client";

export default class MaxBoostCommand extends SlashCommand<BunniBot> {
	constructor(creator: SlashCreator) {
		super(creator, {
			name: "maxboost",
			description: "Calculates boost for any Bunni gauge.",
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
					type: CommandOptionType.NUMBER,
					name: "target",
					description: "Target boost for pool (1, 10)",
					max_value: 10,
					min_value: 1,
					required: false,
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

	// async autocomplete(ctx: AutocompleteContext): Promise<void> {
	// 	const value = ctx.options[ctx.focused];
	// 	ctx.sendResults(getAutocompleteGauge(this.client.gauges, value));
	// }

	onError(err: Error, ctx: CommandContext) {
		this.client.logger.warn(
			"Error occured in " + ctx.commandName + ": " + err.message
		);
	}

	async run(ctx: CommandContext) {
		const { gauge, address, target, anon } = ctx.options as {
			gauge: string;
			address: string;
			target: number | undefined;
			anon: boolean;
		};
	}
}
