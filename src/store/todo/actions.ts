import { ApiError } from "constants/api/apiErrors";
import { TodoActions, TodoActionTypes, TodoStoreData } from "./types";

const fetchTodoDataRequestAction = (): TodoActionTypes => ({
  type: TodoActions.FETCH_TODO_REQUEST,
});

const fetchTodoDataSuccessAction = (data: TodoStoreData): TodoActionTypes => ({
  type: TodoActions.FETCH_TODO_SUCCESS,
  payload: data,
});

const fetchTodoDataErrorAction = (error: ApiError): TodoActionTypes => ({
  type: TodoActions.FETCH_TODO_ERROR,
  payload: error,
});

export const todoActions = {
  fetchDataRequest: fetchTodoDataRequestAction,
  fetchDataSuccess: fetchTodoDataSuccessAction,
  fetchDataError: fetchTodoDataErrorAction,
};
