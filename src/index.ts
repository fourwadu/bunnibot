import { Creator, GatewayServer } from "slash-create";
import { GatewayDispatchEvents } from "discord.js";
import path from "path";

import ENV from "./utils/env";
import BunniBot from "./client";

const client = new BunniBot({ intents: 32767 });
const creator = new Creator({
	applicationID: ENV.APPLICATION_ID,
	publicKey: ENV.PUBLIC_KEY,
	token: ENV.TOKEN,
	client,
});

creator
	.withServer(
		new GatewayServer((handler) =>
			client.ws.on("INTERACTION_CREATE" as GatewayDispatchEvents, handler)
		)
	)
	.registerCommandsIn(path.join(__dirname, "commands"))
	.syncCommands();

// client.login(ENV.TOKEN);
