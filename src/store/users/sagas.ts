import { AxiosResponse } from "axios";
import { takeLatest, call, put } from "redux-saga/effects";
import { UsersApiService } from "services/UsersApiService";
import { GetUsersResponsePayload } from "types/api/users/GetUsersResponsePayload";
import { ApiClientError } from "types/api/ApiClientError";
import { selectApiError } from "utils/selectApiError";
import { usersActions } from "./actions";
import { UsersActions } from "./types";

export function* fetchUsersData() {
  try {
    const result: AxiosResponse<GetUsersResponsePayload> = yield call(
      UsersApiService.getUsers,
    );
    yield put(usersActions.fetchDataSuccess(result.data.payload));
  } catch (e) {
    console.error(e);
    const error = e as ApiClientError;
    yield put(
      usersActions.fetchDataError({
        message: selectApiError(error.response?.data.message),
      }),
    );
  }
}

export function* usersSaga() {
  yield takeLatest(UsersActions.FETCH_USERS_REQUEST, fetchUsersData);
}
