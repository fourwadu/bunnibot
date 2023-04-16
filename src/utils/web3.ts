import Web3 from "web3";

import ENV from "./env";

export const web3 = new Web3(
	new Web3.providers.WebsocketProvider(ENV.RPC_SOCKET_URL)
);
