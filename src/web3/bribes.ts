import { AbiItem } from "web3-utils";

import BUNNI_BRIBE_ABI from "./abi/BUNNI_BRIBE.abi.json";
import { multicall, web3 } from "../utils/web3";
import { BUNNI_BRIBEAbi } from "../../typechain";
import { BunniPool } from "../types/web3";

export const BUNNI_BRIBE = new web3.eth.Contract(
	BUNNI_BRIBE_ABI as AbiItem[],
	"0x78C45fBDB71E7c0FbDfe49bDEFdACDcc4764336f"
) as unknown as BUNNI_BRIBEAbi; // :c

export const getProposals = async (
	gauges: BunniPool[]
): Promise<{ proposal: string; deadline: string }[]> => {
	const proposals = gauges.map((gauge) => {
		const packed = web3.utils.encodePacked(gauge.address) as string;
		return web3.utils.keccak256(packed);
	});

	const deadlines = await multicall.aggregate(
		proposals.map((proposal) => BUNNI_BRIBE.methods.proposalDeadlines(proposal))
	);

	return proposals.map((proposal, i) => ({
		proposal,
		deadline: deadlines[i],
	}));
};

export const getProposalBribes = async (gauges: BunniPool[]) => {
	const proposals = await getProposals(gauges);
	const tokens = await BUNNI_BRIBE.methods.getWhitelistedTokens().call();

	const bribeCalls = proposals.map(({ proposal, deadline }, i) =>
		tokens.map((token) =>
			BUNNI_BRIBE.methods.getBribe(proposal, deadline, token)
		)
	);
	const bribes = await multicall.aggregate(bribeCalls.flat());
};
