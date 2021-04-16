import { all } from "redux-saga/effects";
import { albumsSaga } from "./albums/sagas";

function* rootSaga() {
  yield all([albumsSaga()]);
}

export { rootSaga };
