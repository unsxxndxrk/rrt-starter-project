import { all } from "redux-saga/effects";
import { todoSaga } from "./todo/sagas";

function* rootSaga() {
  yield all([todoSaga()]);
}

export { rootSaga };
