import { TodoActions, TodoActionTypes, TodoState } from "./types";

export const initialTodoState: TodoState = {
  todo: {
    data: null,
    fetching: false,
    error: null,
  },
};

export function todo(
  state = initialTodoState,
  action: TodoActionTypes,
): TodoState {
  switch (action.type) {
    case TodoActions.FETCH_TODO_REQUEST:
      return {
        ...state,
        todo: {
          ...state.todo,
          fetching: true,
          error: null,
        },
      };
    case TodoActions.FETCH_TODO_SUCCESS:
      return {
        ...state,
        todo: {
          data: action.payload,
          fetching: false,
          error: null,
        },
      };
    case TodoActions.FETCH_TODO_ERROR:
      return {
        ...state,
        todo: {
          data: null,
          fetching: false,
          error: {
            message: action.payload,
          },
        },
      };
    default:
      return state;
  }
}
