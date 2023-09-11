import { Key } from "../models/key.model";
import { KeyAction, TotalAction } from "../types";
import { keyReducer, totalReducer } from "../reducers";
import { Reducer, Listener } from "../types";

function createStore<T, U>(initialState: T, reducer: Reducer<T, U>) {
  const listeners: Listener<T>[] = [];

  let state: T = initialState;

  return {
    addListener(listener: Listener<T>) {
      listeners.push(listener);
    },

    removeListener(listener: Listener<T>) {
      const index = listeners.findIndex(
        (currentListener) => currentListener === listener
      );
      listeners.splice(index, 1);
    },

    dispatch(action: U) {
      state = reducer(state, action);
      for (const listener of listeners) {
        listener(state);
      }
    },

    getState() {
      return state;
    },
  };
}

export const keyStore = createStore<Key[], KeyAction>([], keyReducer);
export const totalStore = createStore<number, TotalAction>(0, totalReducer);
