import { User } from "types/api/users/User";
import {
  StoreQueryDataStatus,
  StoreQueryDataStatusError,
} from "types/store/StoreQueryDataStatus";

export enum UsersActions {
  FETCH_USERS_REQUEST = "users/FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS = "users/FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "users/FETCH_USERS_ERROR",
}

export type UsersState = {
  users: StoreQueryDataStatus & {
    data: UsersStoreData | null;
  };
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
  payload: StoreQueryDataStatusError;
};

export type UsersActionTypes =
  | FetchUsersDataRequestAction
  | FetchUsersDataSuccessAction
  | FetchUsersDataErrorAction;
