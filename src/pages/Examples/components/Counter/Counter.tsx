import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "store/Counter/actions";
import { RootState } from "store";
import { CounterView } from "./CounterView";

function Counter() {
  const { counter } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(counterActions.increase());
  };

  const handleDecrease = () => {
    dispatch(counterActions.decrease());
  };

  return (
    <CounterView
      counter={counter}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
    />
  );
}

export { Counter };
