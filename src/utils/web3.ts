import Web3 from "web3";
import ENV from "./env";
import Multicall from "@dopex-io/web3-multicall";

const provider = new Web3.providers.WebsocketProvider(ENV.RPC_SOCKET_URL);

export const web3 = new Web3(provider);

export const multicall = new Multicall({
	provider,
	chainId: 1,
});
