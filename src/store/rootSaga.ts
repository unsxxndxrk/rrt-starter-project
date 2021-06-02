import { all } from "redux-saga/effects";
import { usersSaga } from "./users/sagas";

function* rootSaga() {
  yield all([usersSaga()]);
}

export { rootSaga };
