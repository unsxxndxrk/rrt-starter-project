/*

  Counter Actions

*/

export enum CounterActions {
  INCREASE = "counter/INCREASE",
  DECREASE = "counter/DECREASE",
}

/*

  Counter Store Data

*/

export type CounterState = {
  counter: number;
};

/*

  Counter Action Types

*/

type IncreaseCounterAction = {
  type: CounterActions.INCREASE;
};

type DecreaseCounterAction = {
  type: CounterActions.DECREASE;
};

/*

  #

*/

export type CounterActionTypes = IncreaseCounterAction | DecreaseCounterAction;
