export enum CounterActions {
  INCREASE = "INCREASE",
  DECREASE = "DECREASE",
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
