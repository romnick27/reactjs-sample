import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

type OwnerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OwnerHomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerOwner = {
  readonly id: string;
  readonly ownername: string;
  readonly address?: string | null;
  readonly Homes?: (OwnerHome | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOwner = {
  readonly id: string;
  readonly ownername: string;
  readonly address?: string | null;
  readonly Homes: AsyncCollection<OwnerHome>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Owner = LazyLoading extends LazyLoadingDisabled ? EagerOwner : LazyOwner

export declare const Owner: (new (init: ModelInit<Owner, OwnerMetaData>) => Owner) & {
  copyOf(source: Owner, mutator: (draft: MutableModel<Owner, OwnerMetaData>) => MutableModel<Owner, OwnerMetaData> | void): Owner;
}

type EagerHome = {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly owners?: (OwnerHome | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHome = {
  readonly id: string;
  readonly address?: string | null;
  readonly image_url?: string | null;
  readonly price?: number | null;
  readonly owners: AsyncCollection<OwnerHome>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Home = LazyLoading extends LazyLoadingDisabled ? EagerHome : LazyHome

export declare const Home: (new (init: ModelInit<Home, HomeMetaData>) => Home) & {
  copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}

type EagerOwnerHome = {
  readonly id: string;
  readonly owner: Owner;
  readonly home: Home;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOwnerHome = {
  readonly id: string;
  readonly owner: AsyncItem<Owner>;
  readonly home: AsyncItem<Home>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OwnerHome = LazyLoading extends LazyLoadingDisabled ? EagerOwnerHome : LazyOwnerHome

export declare const OwnerHome: (new (init: ModelInit<OwnerHome, OwnerHomeMetaData>) => OwnerHome) & {
  copyOf(source: OwnerHome, mutator: (draft: MutableModel<OwnerHome, OwnerHomeMetaData>) => MutableModel<OwnerHome, OwnerHomeMetaData> | void): OwnerHome;
}