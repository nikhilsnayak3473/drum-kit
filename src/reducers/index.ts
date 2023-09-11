import { ACTIONS, Reducer, KeyAction, TotalAction } from "../types";
import { Key } from "../models/key.model";

export const keyReducer: Reducer<Key[], KeyAction> = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...state, action.payload];

    case ACTIONS.UPDATE: {
      let keyToBeUpdated = state.find(
        (key) => key.ascii === action.payload.ascii
      );
      if (keyToBeUpdated) {
        keyToBeUpdated.clickCount++;
        localStorage.setItem(
          keyToBeUpdated.ascii,
          keyToBeUpdated.clickCount.toString()
        );
      }
      return [...state];
    }

    default:
      return state;
  }
};

export const totalReducer: Reducer<number, TotalAction> = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE:
      const totalClickCount = action.payload.current;
      localStorage.setItem("totalClickCount", totalClickCount.toString());
      return totalClickCount;

    default:
      return state;
  }
};
