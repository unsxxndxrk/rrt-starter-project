import { CounterActions } from "./types";

export const increaseCounter = () => {
  return {
    type: CounterActions.INCREASE,
  };
};

export const decreaseCounter = () => {
  return {
    type: CounterActions.DECREASE,
  };
};
