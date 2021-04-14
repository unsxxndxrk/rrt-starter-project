export enum CounterActions {
  INCREASE = "counter/INCREASE",
  DECREASE = "counter/DECREASE",
}

export type CounterInitialStateType = {
  counter: number;
};

type IncreaseCounterAction = {
  type: CounterActions.INCREASE;
};

type DecreaseCounterAction = {
  type: CounterActions.DECREASE;
};

export type CounterActionTypes = IncreaseCounterAction | DecreaseCounterAction;
