import { ApiError } from "constants/api/apiErrors";
import { UsersActions, UsersActionTypes, UsersStoreData } from "./types";

const fetchUsersDataRequestAction = (): UsersActionTypes => ({
  type: UsersActions.FETCH_USERS_REQUEST,
});

const fetchUsersDataSuccessAction = (
  data: UsersStoreData,
): UsersActionTypes => ({
  type: UsersActions.FETCH_USERS_SUCCESS,
  payload: data,
});

const fetchUsersDataErrorAction = (error: ApiError): UsersActionTypes => ({
  type: UsersActions.FETCH_USERS_ERROR,
  payload: error,
});

export const usersActions = {
  fetchDataRequest: fetchUsersDataRequestAction,
  fetchDataSuccess: fetchUsersDataSuccessAction,
  fetchDataError: fetchUsersDataErrorAction,
};
