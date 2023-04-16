import { AbiItem } from "web3-utils";
import fetch from "node-fetch";

import { web3 } from "../utils/web3";
import GAUGE_CONTROLLER_ABI from "./contracts/GAUGE_CONTROLLER.abi.json";
import BUNNI_GAUGE from "./contracts/BUNNI_GAUGE.abi.json";
import BUNNI_LP from "./contracts/BUNNI_LP.abi.json";

const GAUGE_CONTROLLER = new web3.eth.Contract(
	GAUGE_CONTROLLER_ABI as AbiItem[],
	"0x901c8aA6A61f74aC95E7f397E22A0Ac7c1242218"
);

export type PoolDataResponse = {
	id: string;
	token0Price: string;
	token1Price: string;
	token0: {
		symbol: string;
	};
	token1: {
		symbol: string;
	};
};

export type GaugeData = Omit<PoolDataResponse, "id"> & {
	poolContract: string;
	gaugeContract: string;
};

export const getAutocompleteGauge = (gauges: GaugeData[], value: string) => {
	const gaugeOptions = gauges.map((gauge) => {
		const pair = gauge.token0.symbol + "/" + gauge.token1.symbol;

		return {
			name: pair,
			value: gauge.gaugeContract,
		};
	});

	if (!value) return gaugeOptions.slice(0, 15);

	return gaugeOptions
		.filter((pair) => pair.name.startsWith(value))
		.slice(0, 24);
};

const getPoolData = async (address: string): Promise<PoolDataResponse> => {
	const uniswapV3Query = `{
    pools(where: {id: "${address.toLowerCase()}"}) {
      id
      token0Price
      token1Price
      token0 {
        symbol
      }
      token1 {
        symbol
      }
    }
  }
  `;

	const response = await fetch(
		"https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3",
		{
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				query: uniswapV3Query,
			}),
		}
	);

	return (await response.json()).data.pools;
};

export const getGauges = async (): Promise<GaugeData[]> => {
	const numGauges = parseInt(
		await GAUGE_CONTROLLER.methods["n_gauges"]().call()
	);

	const gaugeContracts = await Promise.all(
		new Array(numGauges)
			.fill(0)
			.map((_, i) => GAUGE_CONTROLLER.methods.gauges(i).call())
	);

	const lpTokens = await Promise.all(
		gaugeContracts.map((address) => {
			const gaugeContract = new web3.eth.Contract(
				BUNNI_GAUGE as AbiItem[],
				address
			);
			return gaugeContract.methods["lp_token"]().call() as Promise<string>;
		})
	);

	const underlyingPools = await Promise.all(
		lpTokens.map((address) => {
			const poolContract = new web3.eth.Contract(
				BUNNI_LP as AbiItem[],
				address
			);
			return poolContract.methods.pool().call();
		})
	);

	const poolData = await Promise.all(
		underlyingPools.map((address) => getPoolData(address))
	);

	const gauges = poolData.flat().map(({ id, ...rest }, i) => ({
		poolContract: id,
		gaugeContract: gaugeContracts[i],
		...rest,
	}));

	return gauges;
};
