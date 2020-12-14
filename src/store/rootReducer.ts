import { combineReducers } from "redux";
import { counterReducer } from "./Counter/reducers";

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;
