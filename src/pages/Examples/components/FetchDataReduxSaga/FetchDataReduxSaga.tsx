import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { todoActions } from "store/todo/actions";
import FetchDataReduxSagaView from "./FetchDataReduxSagaView";

function FetchDataReduxSaga() {
  const todoState = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleFetchData = () => {
    dispatch(todoActions.fetchDataRequest());
  };

  return (
    <FetchDataReduxSagaView
      todoState={todoState}
      handleFetchData={handleFetchData}
    />
  );
}

export default FetchDataReduxSaga;
