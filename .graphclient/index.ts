// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import BareMerger from "@graphql-mesh/merger-bare";
import { printWithCache } from '@graphql-mesh/utils';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { BunniappTypes } from './sources/bunniapp/types';
import * as importedModule$0 from "./sources/bunniapp/introspectionSchema";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Bribe: ResolverTypeWrapper<Bribe>;
  Bribe_filter: Bribe_filter;
  Bribe_orderBy: Bribe_orderBy;
  Bunni: ResolverTypeWrapper<Bunni>;
  BunniToken: ResolverTypeWrapper<BunniToken>;
  BunniToken_filter: BunniToken_filter;
  BunniToken_orderBy: BunniToken_orderBy;
  Bunni_filter: Bunni_filter;
  Bunni_orderBy: Bunni_orderBy;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Gauge: ResolverTypeWrapper<Gauge>;
  Gauge_filter: Gauge_filter;
  Gauge_orderBy: Gauge_orderBy;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  OrderDirection: OrderDirection;
  Pool: ResolverTypeWrapper<Pool>;
  Pool_filter: Pool_filter;
  Pool_orderBy: Pool_orderBy;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  BigDecimal: Scalars['BigDecimal'];
  BigInt: Scalars['BigInt'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_height;
  Boolean: Scalars['Boolean'];
  Bribe: Bribe;
  Bribe_filter: Bribe_filter;
  Bunni: Bunni;
  BunniToken: BunniToken;
  BunniToken_filter: BunniToken_filter;
  Bunni_filter: Bunni_filter;
  Bytes: Scalars['Bytes'];
  Float: Scalars['Float'];
  Gauge: Gauge;
  Gauge_filter: Gauge_filter;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Pool: Pool;
  Pool_filter: Pool_filter;
  Query: {};
  String: Scalars['String'];
  Subscription: {};
  _Block_: _Block_;
  _Meta_: _Meta_;
}>;

export type entityDirectiveArgs = { };

export type entityDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = entityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type subgraphIdDirectiveArgs = {
  id: Scalars['String'];
};

export type subgraphIdDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = subgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type derivedFromDirectiveArgs = {
  field: Scalars['String'];
};

export type derivedFromDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = derivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BribeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Bribe'] = ResolversParentTypes['Bribe']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  gauge?: Resolver<ResolversTypes['Gauge'], ParentType, ContextType>;
  proposal?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  bribeIdentifier?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  rewardIdentifier?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  deadline?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  briber?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BunniResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Bunni'] = ResolversParentTypes['Bunni']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  protocolFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BunniTokenResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BunniToken'] = ResolversParentTypes['BunniToken']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  decimals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  precision?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  bunniKey?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  positionKey?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  collectedFeesToken0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gauge?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type GaugeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Gauge'] = ResolversParentTypes['Gauge']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  bunniToken?: Resolver<ResolversTypes['BunniToken'], ParentType, ContextType>;
  bribes?: Resolver<Array<ResolversTypes['Bribe']>, ParentType, ContextType, RequireFields<GaugebribesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PoolResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Pool'] = ResolversParentTypes['Pool']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  fee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  sqrtPriceX96?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedToken0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLockedToken1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalVolumeToken0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalVolumeToken1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalFeesToken0?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalFeesToken1?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  bunniTokens?: Resolver<Array<ResolversTypes['BunniToken']>, ParentType, ContextType, RequireFields<PoolbunniTokensArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  bunni?: Resolver<Maybe<ResolversTypes['Bunni']>, ParentType, ContextType, RequireFields<QuerybunniArgs, 'id' | 'subgraphError'>>;
  bunnis?: Resolver<Array<ResolversTypes['Bunni']>, ParentType, ContextType, RequireFields<QuerybunnisArgs, 'skip' | 'first' | 'subgraphError'>>;
  bunniToken?: Resolver<Maybe<ResolversTypes['BunniToken']>, ParentType, ContextType, RequireFields<QuerybunniTokenArgs, 'id' | 'subgraphError'>>;
  bunniTokens?: Resolver<Array<ResolversTypes['BunniToken']>, ParentType, ContextType, RequireFields<QuerybunniTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  gauge?: Resolver<Maybe<ResolversTypes['Gauge']>, ParentType, ContextType, RequireFields<QuerygaugeArgs, 'id' | 'subgraphError'>>;
  gauges?: Resolver<Array<ResolversTypes['Gauge']>, ParentType, ContextType, RequireFields<QuerygaugesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bribe?: Resolver<Maybe<ResolversTypes['Bribe']>, ParentType, ContextType, RequireFields<QuerybribeArgs, 'id' | 'subgraphError'>>;
  bribes?: Resolver<Array<ResolversTypes['Bribe']>, ParentType, ContextType, RequireFields<QuerybribesArgs, 'skip' | 'first' | 'subgraphError'>>;
  pool?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QuerypoolArgs, 'id' | 'subgraphError'>>;
  pools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QuerypoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  bunni?: SubscriptionResolver<Maybe<ResolversTypes['Bunni']>, "bunni", ParentType, ContextType, RequireFields<SubscriptionbunniArgs, 'id' | 'subgraphError'>>;
  bunnis?: SubscriptionResolver<Array<ResolversTypes['Bunni']>, "bunnis", ParentType, ContextType, RequireFields<SubscriptionbunnisArgs, 'skip' | 'first' | 'subgraphError'>>;
  bunniToken?: SubscriptionResolver<Maybe<ResolversTypes['BunniToken']>, "bunniToken", ParentType, ContextType, RequireFields<SubscriptionbunniTokenArgs, 'id' | 'subgraphError'>>;
  bunniTokens?: SubscriptionResolver<Array<ResolversTypes['BunniToken']>, "bunniTokens", ParentType, ContextType, RequireFields<SubscriptionbunniTokensArgs, 'skip' | 'first' | 'subgraphError'>>;
  gauge?: SubscriptionResolver<Maybe<ResolversTypes['Gauge']>, "gauge", ParentType, ContextType, RequireFields<SubscriptiongaugeArgs, 'id' | 'subgraphError'>>;
  gauges?: SubscriptionResolver<Array<ResolversTypes['Gauge']>, "gauges", ParentType, ContextType, RequireFields<SubscriptiongaugesArgs, 'skip' | 'first' | 'subgraphError'>>;
  bribe?: SubscriptionResolver<Maybe<ResolversTypes['Bribe']>, "bribe", ParentType, ContextType, RequireFields<SubscriptionbribeArgs, 'id' | 'subgraphError'>>;
  bribes?: SubscriptionResolver<Array<ResolversTypes['Bribe']>, "bribes", ParentType, ContextType, RequireFields<SubscriptionbribesArgs, 'skip' | 'first' | 'subgraphError'>>;
  pool?: SubscriptionResolver<Maybe<ResolversTypes['Pool']>, "pool", ParentType, ContextType, RequireFields<SubscriptionpoolArgs, 'id' | 'subgraphError'>>;
  pools?: SubscriptionResolver<Array<ResolversTypes['Pool']>, "pools", ParentType, ContextType, RequireFields<SubscriptionpoolsArgs, 'skip' | 'first' | 'subgraphError'>>;
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_metaArgs>>;
}>;

export type _Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type _Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bribe?: BribeResolvers<ContextType>;
  Bunni?: BunniResolvers<ContextType>;
  BunniToken?: BunniTokenResolvers<ContextType>;
  Bytes?: GraphQLScalarType;
  Gauge?: GaugeResolvers<ContextType>;
  Pool?: PoolResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  entity?: entityDirectiveResolver<any, any, ContextType>;
  subgraphId?: subgraphIdDirectiveResolver<any, any, ContextType>;
  derivedFrom?: derivedFromDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = BunniappTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/bunniapp/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("GraphClient");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const bunniappTransforms = [];
const additionalTypeDefs = [] as any[];
const bunniappHandler = new GraphqlHandler({
              name: "bunniapp",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/bunniapp/bunni-mainnet"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("bunniapp"),
              logger: logger.child("bunniapp"),
              importFn,
            });
sources[0] = {
          name: 'bunniapp',
          handler: bunniappHandler,
          transforms: bunniappTransforms
        }
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: BunniQueryDocument,
        get rawSDL() {
          return printWithCache(BunniQueryDocument);
        },
        location: 'BunniQueryDocument.graphql'
      }
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltGraphClient,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltGraphClient(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext, TGlobalContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type BunniQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type BunniQueryQuery = { pools: Array<(
    Pick<Pool, 'fee' | 'tick' | 'address' | 'liquidity' | 'sqrtPriceX96' | 'token0' | 'token1' | 'token0Price' | 'token1Price' | 'totalValueLockedToken0' | 'totalValueLockedToken1' | 'totalVolumeToken0' | 'totalVolumeToken1' | 'totalFeesToken0' | 'totalFeesToken1'>
    & { bunniTokens: Array<Pick<BunniToken, 'address' | 'tickLower' | 'tickUpper' | 'gauge'>> }
  )>, bunni?: Maybe<Pick<Bunni, 'protocolFee'>>, block: Array<Pick<Pool, 'address' | 'totalVolumeToken0' | 'totalVolumeToken1' | 'totalFeesToken0' | 'totalFeesToken1'>> };


export const BunniQueryDocument = gql`
    query BunniQuery {
  pools {
    fee
    tick
    address
    liquidity
    sqrtPriceX96
    token0
    token1
    token0Price
    token1Price
    totalValueLockedToken0
    totalValueLockedToken1
    totalVolumeToken0
    totalVolumeToken1
    totalFeesToken0
    totalFeesToken1
    bunniTokens {
      address
      tickLower
      tickUpper
      gauge
    }
  }
  bunni(id: "0xb5087f95643a9a4069471a28d32c569d9bd57fe4") {
    protocolFee
  }
  block: pools(block: {number: 17131962}) {
    address
    totalVolumeToken0
    totalVolumeToken1
    totalFeesToken0
    totalFeesToken1
  }
}
    ` as unknown as DocumentNode<BunniQueryQuery, BunniQueryQueryVariables>;


export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    BunniQuery(variables?: BunniQueryQueryVariables, options?: C): Promise<BunniQueryQuery> {
      return requester<BunniQueryQuery, BunniQueryQueryVariables>(BunniQueryDocument, variables, options) as Promise<BunniQueryQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;