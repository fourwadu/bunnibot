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
			name: "bribes",
			description: "Get all bribes for the current epoch",
			options: [],
		});

		this.filePath = __filename;
	}

	onError(err: Error, ctx: CommandContext) {
		this.client.logger.warn(
			"Error occured in " + ctx.commandName + ": " + err.message
		);
	}

	async run(ctx: CommandContext) {}
}
