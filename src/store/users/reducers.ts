import { UsersActions, UsersActionTypes, UsersState } from "./types";

export const initialUsersState: UsersState = {
  users: {
    data: null,
    fetching: false,
    error: null,
  },
};

export function users(
  state = initialUsersState,
  action: UsersActionTypes,
): UsersState {
  switch (action.type) {
    case UsersActions.FETCH_USERS_REQUEST:
      return {
        ...state,
        users: {
          ...state.users,
          fetching: true,
          error: null,
        },
      };
    case UsersActions.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: {
          data: action.payload,
          fetching: false,
          error: null,
        },
      };
    case UsersActions.FETCH_USERS_ERROR:
      return {
        ...state,
        users: {
          data: null,
          fetching: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
}
