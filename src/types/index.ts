import { Key } from "../models/key.model";

export type KeyInfo = { name: string; ascii: string; audio: string };

export type Listener<T> = (state: T) => void;

export enum ACTIONS {
  ADD = "ADD",
  UPDATE = "UPDATE",
}

type AddAction = { type: ACTIONS.ADD; payload: Key };
type UpdateAction = { type: ACTIONS.UPDATE; payload: { ascii: string } };

export type KeyAction = AddAction | UpdateAction;

export type TotalAction = {
  type: ACTIONS.UPDATE;
  payload: { current: number };
};

export type Reducer<T, U> = (state: T, action: U) => T;
