import {
  CounterActions,
  CounterActionTypes,
  CounterInitialStateType,
} from "./types";

const initialCounterState: CounterInitialStateType = {
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
