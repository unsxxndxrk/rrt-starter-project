import { ApiError } from "constants/api/apiErrors";
import { User } from "types/api/users/User";
import { StoreQueryData } from "types/store/StoreQueryData";

export enum UsersActions {
  FETCH_USERS_REQUEST = "users/FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS = "users/FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "users/FETCH_USERS_ERROR",
}

export type UsersState = {
  users: StoreQueryData<UsersStoreData | null>;
};

export type UsersStoreData = User[];

export type FetchUsersDataRequestAction = {
  type: UsersActions.FETCH_USERS_REQUEST;
};

export type FetchUsersDataSuccessAction = {
  type: UsersActions.FETCH_USERS_SUCCESS;
  payload: UsersStoreData;
};

export type FetchUsersDataErrorAction = {
  type: UsersActions.FETCH_USERS_ERROR;
  payload: ApiError;
};

export type UsersActionTypes =
  | FetchUsersDataRequestAction
  | FetchUsersDataSuccessAction
  | FetchUsersDataErrorAction;
