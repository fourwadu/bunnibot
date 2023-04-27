// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BunniappTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Bribe = {
  id: Scalars['Bytes'];
  gauge: Gauge;
  proposal: Scalars['Bytes'];
  bribeIdentifier: Scalars['Bytes'];
  rewardIdentifier: Scalars['Bytes'];
  token: Scalars['Bytes'];
  amount: Scalars['BigInt'];
  deadline: Scalars['BigInt'];
  briber: Scalars['Bytes'];
};

export type Bribe_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  gauge?: InputMaybe<Scalars['String']>;
  gauge_not?: InputMaybe<Scalars['String']>;
  gauge_gt?: InputMaybe<Scalars['String']>;
  gauge_lt?: InputMaybe<Scalars['String']>;
  gauge_gte?: InputMaybe<Scalars['String']>;
  gauge_lte?: InputMaybe<Scalars['String']>;
  gauge_in?: InputMaybe<Array<Scalars['String']>>;
  gauge_not_in?: InputMaybe<Array<Scalars['String']>>;
  gauge_contains?: InputMaybe<Scalars['String']>;
  gauge_contains_nocase?: InputMaybe<Scalars['String']>;
  gauge_not_contains?: InputMaybe<Scalars['String']>;
  gauge_not_contains_nocase?: InputMaybe<Scalars['String']>;
  gauge_starts_with?: InputMaybe<Scalars['String']>;
  gauge_starts_with_nocase?: InputMaybe<Scalars['String']>;
  gauge_not_starts_with?: InputMaybe<Scalars['String']>;
  gauge_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  gauge_ends_with?: InputMaybe<Scalars['String']>;
  gauge_ends_with_nocase?: InputMaybe<Scalars['String']>;
  gauge_not_ends_with?: InputMaybe<Scalars['String']>;
  gauge_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  gauge_?: InputMaybe<Gauge_filter>;
  proposal?: InputMaybe<Scalars['Bytes']>;
  proposal_not?: InputMaybe<Scalars['Bytes']>;
  proposal_gt?: InputMaybe<Scalars['Bytes']>;
  proposal_lt?: InputMaybe<Scalars['Bytes']>;
  proposal_gte?: InputMaybe<Scalars['Bytes']>;
  proposal_lte?: InputMaybe<Scalars['Bytes']>;
  proposal_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposal_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  proposal_contains?: InputMaybe<Scalars['Bytes']>;
  proposal_not_contains?: InputMaybe<Scalars['Bytes']>;
  bribeIdentifier?: InputMaybe<Scalars['Bytes']>;
  bribeIdentifier_not?: InputMaybe<Scalars['Bytes']>;
  bribeIdentifier_gt?: InputMaybe<Scalars['Bytes']>;
  bribeIdentifier_lt?: InputMaybe<Scalars['Bytes']>;
  bribeIdentifier_gte?: InputMaybe<Scalars['Bytes']>;
  bribeIdentifier_lte?: InputMaybe<Scalars['Bytes']>;
  bribeIdentifier_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bribeIdentifier_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bribeIdentifier_contains?: InputMaybe<Scalars['Bytes']>;
  bribeIdentifier_not_contains?: InputMaybe<Scalars['Bytes']>;
  rewardIdentifier?: InputMaybe<Scalars['Bytes']>;
  rewardIdentifier_not?: InputMaybe<Scalars['Bytes']>;
  rewardIdentifier_gt?: InputMaybe<Scalars['Bytes']>;
  rewardIdentifier_lt?: InputMaybe<Scalars['Bytes']>;
  rewardIdentifier_gte?: InputMaybe<Scalars['Bytes']>;
  rewardIdentifier_lte?: InputMaybe<Scalars['Bytes']>;
  rewardIdentifier_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardIdentifier_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  rewardIdentifier_contains?: InputMaybe<Scalars['Bytes']>;
  rewardIdentifier_not_contains?: InputMaybe<Scalars['Bytes']>;
  token?: InputMaybe<Scalars['Bytes']>;
  token_not?: InputMaybe<Scalars['Bytes']>;
  token_gt?: InputMaybe<Scalars['Bytes']>;
  token_lt?: InputMaybe<Scalars['Bytes']>;
  token_gte?: InputMaybe<Scalars['Bytes']>;
  token_lte?: InputMaybe<Scalars['Bytes']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token_contains?: InputMaybe<Scalars['Bytes']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deadline?: InputMaybe<Scalars['BigInt']>;
  deadline_not?: InputMaybe<Scalars['BigInt']>;
  deadline_gt?: InputMaybe<Scalars['BigInt']>;
  deadline_lt?: InputMaybe<Scalars['BigInt']>;
  deadline_gte?: InputMaybe<Scalars['BigInt']>;
  deadline_lte?: InputMaybe<Scalars['BigInt']>;
  deadline_in?: InputMaybe<Array<Scalars['BigInt']>>;
  deadline_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  briber?: InputMaybe<Scalars['Bytes']>;
  briber_not?: InputMaybe<Scalars['Bytes']>;
  briber_gt?: InputMaybe<Scalars['Bytes']>;
  briber_lt?: InputMaybe<Scalars['Bytes']>;
  briber_gte?: InputMaybe<Scalars['Bytes']>;
  briber_lte?: InputMaybe<Scalars['Bytes']>;
  briber_in?: InputMaybe<Array<Scalars['Bytes']>>;
  briber_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  briber_contains?: InputMaybe<Scalars['Bytes']>;
  briber_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bribe_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bribe_filter>>>;
};

export type Bribe_orderBy =
  | 'id'
  | 'gauge'
  | 'gauge__id'
  | 'gauge__address'
  | 'proposal'
  | 'bribeIdentifier'
  | 'rewardIdentifier'
  | 'token'
  | 'amount'
  | 'deadline'
  | 'briber';

export type Bunni = {
  id: Scalars['Bytes'];
  protocolFee: Scalars['BigInt'];
};

export type BunniToken = {
  id: Scalars['Bytes'];
  name: Scalars['String'];
  symbol: Scalars['String'];
  address: Scalars['Bytes'];
  decimals: Scalars['BigInt'];
  precision: Scalars['BigInt'];
  pool: Pool;
  tickLower: Scalars['BigInt'];
  tickUpper: Scalars['BigInt'];
  liquidity: Scalars['BigInt'];
  bunniKey: Scalars['Bytes'];
  positionKey: Scalars['Bytes'];
  collectedFeesToken0: Scalars['BigInt'];
  collectedFeesToken1: Scalars['BigInt'];
  gauge: Scalars['Bytes'];
};

export type BunniToken_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  name?: InputMaybe<Scalars['String']>;
  name_not?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_contains_nocase?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']>;
  name_starts_with?: InputMaybe<Scalars['String']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  name_ends_with?: InputMaybe<Scalars['String']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']>;
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
  symbol_not?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
  symbol_starts_with?: InputMaybe<Scalars['String']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_ends_with?: InputMaybe<Scalars['String']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_gt?: InputMaybe<Scalars['Bytes']>;
  address_lt?: InputMaybe<Scalars['Bytes']>;
  address_gte?: InputMaybe<Scalars['Bytes']>;
  address_lte?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  decimals?: InputMaybe<Scalars['BigInt']>;
  decimals_not?: InputMaybe<Scalars['BigInt']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']>>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  precision?: InputMaybe<Scalars['BigInt']>;
  precision_not?: InputMaybe<Scalars['BigInt']>;
  precision_gt?: InputMaybe<Scalars['BigInt']>;
  precision_lt?: InputMaybe<Scalars['BigInt']>;
  precision_gte?: InputMaybe<Scalars['BigInt']>;
  precision_lte?: InputMaybe<Scalars['BigInt']>;
  precision_in?: InputMaybe<Array<Scalars['BigInt']>>;
  precision_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pool?: InputMaybe<Scalars['String']>;
  pool_not?: InputMaybe<Scalars['String']>;
  pool_gt?: InputMaybe<Scalars['String']>;
  pool_lt?: InputMaybe<Scalars['String']>;
  pool_gte?: InputMaybe<Scalars['String']>;
  pool_lte?: InputMaybe<Scalars['String']>;
  pool_in?: InputMaybe<Array<Scalars['String']>>;
  pool_not_in?: InputMaybe<Array<Scalars['String']>>;
  pool_contains?: InputMaybe<Scalars['String']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_not_contains?: InputMaybe<Scalars['String']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']>;
  pool_starts_with?: InputMaybe<Scalars['String']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_starts_with?: InputMaybe<Scalars['String']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  pool_ends_with?: InputMaybe<Scalars['String']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  pool_?: InputMaybe<Pool_filter>;
  tickLower?: InputMaybe<Scalars['BigInt']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bunniKey?: InputMaybe<Scalars['Bytes']>;
  bunniKey_not?: InputMaybe<Scalars['Bytes']>;
  bunniKey_gt?: InputMaybe<Scalars['Bytes']>;
  bunniKey_lt?: InputMaybe<Scalars['Bytes']>;
  bunniKey_gte?: InputMaybe<Scalars['Bytes']>;
  bunniKey_lte?: InputMaybe<Scalars['Bytes']>;
  bunniKey_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bunniKey_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  bunniKey_contains?: InputMaybe<Scalars['Bytes']>;
  bunniKey_not_contains?: InputMaybe<Scalars['Bytes']>;
  positionKey?: InputMaybe<Scalars['Bytes']>;
  positionKey_not?: InputMaybe<Scalars['Bytes']>;
  positionKey_gt?: InputMaybe<Scalars['Bytes']>;
  positionKey_lt?: InputMaybe<Scalars['Bytes']>;
  positionKey_gte?: InputMaybe<Scalars['Bytes']>;
  positionKey_lte?: InputMaybe<Scalars['Bytes']>;
  positionKey_in?: InputMaybe<Array<Scalars['Bytes']>>;
  positionKey_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  positionKey_contains?: InputMaybe<Scalars['Bytes']>;
  positionKey_not_contains?: InputMaybe<Scalars['Bytes']>;
  collectedFeesToken0?: InputMaybe<Scalars['BigInt']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['BigInt']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['BigInt']>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['BigInt']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['BigInt']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['BigInt']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collectedFeesToken1?: InputMaybe<Scalars['BigInt']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['BigInt']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['BigInt']>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['BigInt']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['BigInt']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['BigInt']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gauge?: InputMaybe<Scalars['Bytes']>;
  gauge_not?: InputMaybe<Scalars['Bytes']>;
  gauge_gt?: InputMaybe<Scalars['Bytes']>;
  gauge_lt?: InputMaybe<Scalars['Bytes']>;
  gauge_gte?: InputMaybe<Scalars['Bytes']>;
  gauge_lte?: InputMaybe<Scalars['Bytes']>;
  gauge_in?: InputMaybe<Array<Scalars['Bytes']>>;
  gauge_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  gauge_contains?: InputMaybe<Scalars['Bytes']>;
  gauge_not_contains?: InputMaybe<Scalars['Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BunniToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<BunniToken_filter>>>;
};

export type BunniToken_orderBy =
  | 'id'
  | 'name'
  | 'symbol'
  | 'address'
  | 'decimals'
  | 'precision'
  | 'pool'
  | 'pool__id'
  | 'pool__fee'
  | 'pool__tick'
  | 'pool__address'
  | 'pool__liquidity'
  | 'pool__sqrtPriceX96'
  | 'pool__token0'
  | 'pool__token1'
  | 'pool__token0Price'
  | 'pool__token1Price'
  | 'pool__totalValueLockedToken0'
  | 'pool__totalValueLockedToken1'
  | 'pool__totalVolumeToken0'
  | 'pool__totalVolumeToken1'
  | 'pool__totalFeesToken0'
  | 'pool__totalFeesToken1'
  | 'tickLower'
  | 'tickUpper'
  | 'liquidity'
  | 'bunniKey'
  | 'positionKey'
  | 'collectedFeesToken0'
  | 'collectedFeesToken1'
  | 'gauge';

export type Bunni_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  protocolFee?: InputMaybe<Scalars['BigInt']>;
  protocolFee_not?: InputMaybe<Scalars['BigInt']>;
  protocolFee_gt?: InputMaybe<Scalars['BigInt']>;
  protocolFee_lt?: InputMaybe<Scalars['BigInt']>;
  protocolFee_gte?: InputMaybe<Scalars['BigInt']>;
  protocolFee_lte?: InputMaybe<Scalars['BigInt']>;
  protocolFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  protocolFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bunni_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Bunni_filter>>>;
};

export type Bunni_orderBy =
  | 'id'
  | 'protocolFee';

export type Gauge = {
  id: Scalars['Bytes'];
  address: Scalars['Bytes'];
  bunniToken: BunniToken;
  bribes: Array<Bribe>;
};


export type GaugebribesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bribe_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bribe_filter>;
};

export type Gauge_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_gt?: InputMaybe<Scalars['Bytes']>;
  address_lt?: InputMaybe<Scalars['Bytes']>;
  address_gte?: InputMaybe<Scalars['Bytes']>;
  address_lte?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  bunniToken?: InputMaybe<Scalars['String']>;
  bunniToken_not?: InputMaybe<Scalars['String']>;
  bunniToken_gt?: InputMaybe<Scalars['String']>;
  bunniToken_lt?: InputMaybe<Scalars['String']>;
  bunniToken_gte?: InputMaybe<Scalars['String']>;
  bunniToken_lte?: InputMaybe<Scalars['String']>;
  bunniToken_in?: InputMaybe<Array<Scalars['String']>>;
  bunniToken_not_in?: InputMaybe<Array<Scalars['String']>>;
  bunniToken_contains?: InputMaybe<Scalars['String']>;
  bunniToken_contains_nocase?: InputMaybe<Scalars['String']>;
  bunniToken_not_contains?: InputMaybe<Scalars['String']>;
  bunniToken_not_contains_nocase?: InputMaybe<Scalars['String']>;
  bunniToken_starts_with?: InputMaybe<Scalars['String']>;
  bunniToken_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bunniToken_not_starts_with?: InputMaybe<Scalars['String']>;
  bunniToken_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  bunniToken_ends_with?: InputMaybe<Scalars['String']>;
  bunniToken_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bunniToken_not_ends_with?: InputMaybe<Scalars['String']>;
  bunniToken_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  bunniToken_?: InputMaybe<BunniToken_filter>;
  bribes_?: InputMaybe<Bribe_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Gauge_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Gauge_filter>>>;
};

export type Gauge_orderBy =
  | 'id'
  | 'address'
  | 'bunniToken'
  | 'bunniToken__id'
  | 'bunniToken__name'
  | 'bunniToken__symbol'
  | 'bunniToken__address'
  | 'bunniToken__decimals'
  | 'bunniToken__precision'
  | 'bunniToken__tickLower'
  | 'bunniToken__tickUpper'
  | 'bunniToken__liquidity'
  | 'bunniToken__bunniKey'
  | 'bunniToken__positionKey'
  | 'bunniToken__collectedFeesToken0'
  | 'bunniToken__collectedFeesToken1'
  | 'bunniToken__gauge'
  | 'bribes';

/** Defines the order direction, either ascending or descending */
export type OrderDirection =
  | 'asc'
  | 'desc';

export type Pool = {
  id: Scalars['Bytes'];
  fee: Scalars['BigInt'];
  tick: Scalars['BigInt'];
  address: Scalars['Bytes'];
  liquidity: Scalars['BigInt'];
  sqrtPriceX96: Scalars['BigInt'];
  token0: Scalars['Bytes'];
  token1: Scalars['Bytes'];
  token0Price: Scalars['BigDecimal'];
  token1Price: Scalars['BigDecimal'];
  totalValueLockedToken0: Scalars['BigInt'];
  totalValueLockedToken1: Scalars['BigInt'];
  totalVolumeToken0: Scalars['BigInt'];
  totalVolumeToken1: Scalars['BigInt'];
  totalFeesToken0: Scalars['BigInt'];
  totalFeesToken1: Scalars['BigInt'];
  bunniTokens: Array<BunniToken>;
};


export type PoolbunniTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BunniToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BunniToken_filter>;
};

export type Pool_filter = {
  id?: InputMaybe<Scalars['Bytes']>;
  id_not?: InputMaybe<Scalars['Bytes']>;
  id_gt?: InputMaybe<Scalars['Bytes']>;
  id_lt?: InputMaybe<Scalars['Bytes']>;
  id_gte?: InputMaybe<Scalars['Bytes']>;
  id_lte?: InputMaybe<Scalars['Bytes']>;
  id_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id_contains?: InputMaybe<Scalars['Bytes']>;
  id_not_contains?: InputMaybe<Scalars['Bytes']>;
  fee?: InputMaybe<Scalars['BigInt']>;
  fee_not?: InputMaybe<Scalars['BigInt']>;
  fee_gt?: InputMaybe<Scalars['BigInt']>;
  fee_lt?: InputMaybe<Scalars['BigInt']>;
  fee_gte?: InputMaybe<Scalars['BigInt']>;
  fee_lte?: InputMaybe<Scalars['BigInt']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick?: InputMaybe<Scalars['BigInt']>;
  tick_not?: InputMaybe<Scalars['BigInt']>;
  tick_gt?: InputMaybe<Scalars['BigInt']>;
  tick_lt?: InputMaybe<Scalars['BigInt']>;
  tick_gte?: InputMaybe<Scalars['BigInt']>;
  tick_lte?: InputMaybe<Scalars['BigInt']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  address?: InputMaybe<Scalars['Bytes']>;
  address_not?: InputMaybe<Scalars['Bytes']>;
  address_gt?: InputMaybe<Scalars['Bytes']>;
  address_lt?: InputMaybe<Scalars['Bytes']>;
  address_gte?: InputMaybe<Scalars['Bytes']>;
  address_lte?: InputMaybe<Scalars['Bytes']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  address_contains?: InputMaybe<Scalars['Bytes']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPriceX96?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_not?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_gt?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_lt?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_gte?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_lte?: InputMaybe<Scalars['BigInt']>;
  sqrtPriceX96_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sqrtPriceX96_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  token0?: InputMaybe<Scalars['Bytes']>;
  token0_not?: InputMaybe<Scalars['Bytes']>;
  token0_gt?: InputMaybe<Scalars['Bytes']>;
  token0_lt?: InputMaybe<Scalars['Bytes']>;
  token0_gte?: InputMaybe<Scalars['Bytes']>;
  token0_lte?: InputMaybe<Scalars['Bytes']>;
  token0_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token0_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token0_contains?: InputMaybe<Scalars['Bytes']>;
  token0_not_contains?: InputMaybe<Scalars['Bytes']>;
  token1?: InputMaybe<Scalars['Bytes']>;
  token1_not?: InputMaybe<Scalars['Bytes']>;
  token1_gt?: InputMaybe<Scalars['Bytes']>;
  token1_lt?: InputMaybe<Scalars['Bytes']>;
  token1_gte?: InputMaybe<Scalars['Bytes']>;
  token1_lte?: InputMaybe<Scalars['Bytes']>;
  token1_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token1_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  token1_contains?: InputMaybe<Scalars['Bytes']>;
  token1_not_contains?: InputMaybe<Scalars['Bytes']>;
  token0Price?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLockedToken0?: InputMaybe<Scalars['BigInt']>;
  totalValueLockedToken0_not?: InputMaybe<Scalars['BigInt']>;
  totalValueLockedToken0_gt?: InputMaybe<Scalars['BigInt']>;
  totalValueLockedToken0_lt?: InputMaybe<Scalars['BigInt']>;
  totalValueLockedToken0_gte?: InputMaybe<Scalars['BigInt']>;
  totalValueLockedToken0_lte?: InputMaybe<Scalars['BigInt']>;
  totalValueLockedToken0_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLockedToken0_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLockedToken1?: InputMaybe<Scalars['BigInt']>;
  totalValueLockedToken1_not?: InputMaybe<Scalars['BigInt']>;
  totalValueLockedToken1_gt?: InputMaybe<Scalars['BigInt']>;
  totalValueLockedToken1_lt?: InputMaybe<Scalars['BigInt']>;
  totalValueLockedToken1_gte?: InputMaybe<Scalars['BigInt']>;
  totalValueLockedToken1_lte?: InputMaybe<Scalars['BigInt']>;
  totalValueLockedToken1_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLockedToken1_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolumeToken0?: InputMaybe<Scalars['BigInt']>;
  totalVolumeToken0_not?: InputMaybe<Scalars['BigInt']>;
  totalVolumeToken0_gt?: InputMaybe<Scalars['BigInt']>;
  totalVolumeToken0_lt?: InputMaybe<Scalars['BigInt']>;
  totalVolumeToken0_gte?: InputMaybe<Scalars['BigInt']>;
  totalVolumeToken0_lte?: InputMaybe<Scalars['BigInt']>;
  totalVolumeToken0_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolumeToken1?: InputMaybe<Scalars['BigInt']>;
  totalVolumeToken1_not?: InputMaybe<Scalars['BigInt']>;
  totalVolumeToken1_gt?: InputMaybe<Scalars['BigInt']>;
  totalVolumeToken1_lt?: InputMaybe<Scalars['BigInt']>;
  totalVolumeToken1_gte?: InputMaybe<Scalars['BigInt']>;
  totalVolumeToken1_lte?: InputMaybe<Scalars['BigInt']>;
  totalVolumeToken1_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFeesToken0?: InputMaybe<Scalars['BigInt']>;
  totalFeesToken0_not?: InputMaybe<Scalars['BigInt']>;
  totalFeesToken0_gt?: InputMaybe<Scalars['BigInt']>;
  totalFeesToken0_lt?: InputMaybe<Scalars['BigInt']>;
  totalFeesToken0_gte?: InputMaybe<Scalars['BigInt']>;
  totalFeesToken0_lte?: InputMaybe<Scalars['BigInt']>;
  totalFeesToken0_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFeesToken0_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFeesToken1?: InputMaybe<Scalars['BigInt']>;
  totalFeesToken1_not?: InputMaybe<Scalars['BigInt']>;
  totalFeesToken1_gt?: InputMaybe<Scalars['BigInt']>;
  totalFeesToken1_lt?: InputMaybe<Scalars['BigInt']>;
  totalFeesToken1_gte?: InputMaybe<Scalars['BigInt']>;
  totalFeesToken1_lte?: InputMaybe<Scalars['BigInt']>;
  totalFeesToken1_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalFeesToken1_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bunniTokens_?: InputMaybe<BunniToken_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
  or?: InputMaybe<Array<InputMaybe<Pool_filter>>>;
};

export type Pool_orderBy =
  | 'id'
  | 'fee'
  | 'tick'
  | 'address'
  | 'liquidity'
  | 'sqrtPriceX96'
  | 'token0'
  | 'token1'
  | 'token0Price'
  | 'token1Price'
  | 'totalValueLockedToken0'
  | 'totalValueLockedToken1'
  | 'totalVolumeToken0'
  | 'totalVolumeToken1'
  | 'totalFeesToken0'
  | 'totalFeesToken1'
  | 'bunniTokens';

export type Query = {
  bunni?: Maybe<Bunni>;
  bunnis: Array<Bunni>;
  bunniToken?: Maybe<BunniToken>;
  bunniTokens: Array<BunniToken>;
  gauge?: Maybe<Gauge>;
  gauges: Array<Gauge>;
  bribe?: Maybe<Bribe>;
  bribes: Array<Bribe>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type QuerybunniArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybunnisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bunni_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bunni_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybunniTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybunniTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BunniToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BunniToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygaugeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerygaugesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Gauge_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Gauge_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybribeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerybribesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bribe_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bribe_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerypoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Query_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type Subscription = {
  bunni?: Maybe<Bunni>;
  bunnis: Array<Bunni>;
  bunniToken?: Maybe<BunniToken>;
  bunniTokens: Array<BunniToken>;
  gauge?: Maybe<Gauge>;
  gauges: Array<Gauge>;
  bribe?: Maybe<Bribe>;
  bribes: Array<Bribe>;
  pool?: Maybe<Pool>;
  pools: Array<Pool>;
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
};


export type SubscriptionbunniArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbunnisArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bunni_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bunni_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbunniTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbunniTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BunniToken_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<BunniToken_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongaugeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptiongaugesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Gauge_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Gauge_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbribeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionbribesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Bribe_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Bribe_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionpoolsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Pool_orderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Pool_filter>;
  block?: InputMaybe<Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscription_metaArgs = {
  block?: InputMaybe<Block_height>;
};

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

  export type QuerySdk = {
      /** null **/
  bunni: InContextSdkMethod<Query['bunni'], QuerybunniArgs, MeshContext>,
  /** null **/
  bunnis: InContextSdkMethod<Query['bunnis'], QuerybunnisArgs, MeshContext>,
  /** null **/
  bunniToken: InContextSdkMethod<Query['bunniToken'], QuerybunniTokenArgs, MeshContext>,
  /** null **/
  bunniTokens: InContextSdkMethod<Query['bunniTokens'], QuerybunniTokensArgs, MeshContext>,
  /** null **/
  gauge: InContextSdkMethod<Query['gauge'], QuerygaugeArgs, MeshContext>,
  /** null **/
  gauges: InContextSdkMethod<Query['gauges'], QuerygaugesArgs, MeshContext>,
  /** null **/
  bribe: InContextSdkMethod<Query['bribe'], QuerybribeArgs, MeshContext>,
  /** null **/
  bribes: InContextSdkMethod<Query['bribes'], QuerybribesArgs, MeshContext>,
  /** null **/
  pool: InContextSdkMethod<Query['pool'], QuerypoolArgs, MeshContext>,
  /** null **/
  pools: InContextSdkMethod<Query['pools'], QuerypoolsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Query['_meta'], Query_metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  bunni: InContextSdkMethod<Subscription['bunni'], SubscriptionbunniArgs, MeshContext>,
  /** null **/
  bunnis: InContextSdkMethod<Subscription['bunnis'], SubscriptionbunnisArgs, MeshContext>,
  /** null **/
  bunniToken: InContextSdkMethod<Subscription['bunniToken'], SubscriptionbunniTokenArgs, MeshContext>,
  /** null **/
  bunniTokens: InContextSdkMethod<Subscription['bunniTokens'], SubscriptionbunniTokensArgs, MeshContext>,
  /** null **/
  gauge: InContextSdkMethod<Subscription['gauge'], SubscriptiongaugeArgs, MeshContext>,
  /** null **/
  gauges: InContextSdkMethod<Subscription['gauges'], SubscriptiongaugesArgs, MeshContext>,
  /** null **/
  bribe: InContextSdkMethod<Subscription['bribe'], SubscriptionbribeArgs, MeshContext>,
  /** null **/
  bribes: InContextSdkMethod<Subscription['bribes'], SubscriptionbribesArgs, MeshContext>,
  /** null **/
  pool: InContextSdkMethod<Subscription['pool'], SubscriptionpoolArgs, MeshContext>,
  /** null **/
  pools: InContextSdkMethod<Subscription['pools'], SubscriptionpoolsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  _meta: InContextSdkMethod<Subscription['_meta'], Subscription_metaArgs, MeshContext>
  };

  export type Context = {
      ["bunniapp"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
