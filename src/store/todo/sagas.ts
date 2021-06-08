import { AxiosResponse } from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import { ApiClientError } from "types/api/ApiClientError";
import { selectApiError } from "utils/api/selectApiError";
import { todoActions } from "./actions";
import { TodoActions } from "./types";
import { TodosApiService } from "services/TodosApiService";
import { GetTodoResponsePayload } from "types/api/todos/GetTodoResponsePayload";

export function* fetchTodoData() {
  try {
    const result: AxiosResponse<GetTodoResponsePayload> = yield call(
      TodosApiService.getTodo,
    );
    yield put(todoActions.fetchDataSuccess(result.data.payload));
  } catch (e) {
    console.error(e);
    const error = e as ApiClientError;
    yield put(
      todoActions.fetchDataError(selectApiError(error.response?.data.message)),
    );
  }
}

export function* todoSaga() {
  yield takeLatest(TodoActions.FETCH_TODO_REQUEST, fetchTodoData);
}
