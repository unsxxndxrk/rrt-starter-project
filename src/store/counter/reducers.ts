import { CounterActions, CounterActionTypes, CounterState } from "./types";

const initialCounterState: CounterState = {
  counter: 0,
};

const counter = (state = initialCounterState, action: CounterActionTypes) => {
  switch (action.type) {
    case CounterActions.INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case CounterActions.DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export { counter };
