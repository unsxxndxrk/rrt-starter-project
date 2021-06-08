import { ApiError } from "constants/api/apiErrors";
import { Todo } from "types/api/todos/Todo";
import { StoreQueryData } from "types/store/StoreQueryData";

export enum TodoActions {
  FETCH_TODO_REQUEST = "todo/FETCH_TODO_REQUEST",
  FETCH_TODO_SUCCESS = "todo/FETCH_TODO_SUCCESS",
  FETCH_TODO_ERROR = "todo/FETCH_TODO_ERROR",
}

export type TodoState = {
  todo: StoreQueryData<TodoStoreData | null>;
};

export type TodoStoreData = Todo;

export type FetchTodoDataRequestAction = {
  type: TodoActions.FETCH_TODO_REQUEST;
};

export type FetchTodoDataSuccessAction = {
  type: TodoActions.FETCH_TODO_SUCCESS;
  payload: TodoStoreData;
};

export type FetchTodoDataErrorAction = {
  type: TodoActions.FETCH_TODO_ERROR;
  payload: ApiError;
};

export type TodoActionTypes =
  | FetchTodoDataRequestAction
  | FetchTodoDataSuccessAction
  | FetchTodoDataErrorAction;
