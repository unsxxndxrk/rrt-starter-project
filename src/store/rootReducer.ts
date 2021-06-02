import { combineReducers } from "redux";
import { counter } from "./counter/reducers";
import { users } from "./users/reducers";

const rootReducer = combineReducers({
  counter,
  users,
});

export { rootReducer };
