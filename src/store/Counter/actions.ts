import { CounterActions, CounterActionTypes } from "./types";

const increaseCounterAction = (): CounterActionTypes => {
  return {
    type: CounterActions.INCREASE,
  };
};

const decreaseCounterAction = (): CounterActionTypes => {
  return {
    type: CounterActions.DECREASE,
  };
};

export const counterActions = {
  increase: increaseCounterAction,
  decrease: decreaseCounterAction,
};
