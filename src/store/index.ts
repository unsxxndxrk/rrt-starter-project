import {
  createStore,
  applyMiddleware,
  PreloadedState,
  CombinedState,
  Reducer,
} from "redux";
import { rootReducer } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "store/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export type ReducerCombinedState = CombinedState<
  typeof rootReducer extends Reducer<CombinedState<infer T>> ? T : never
>;

export type StoreInitialState = PreloadedState<ReducerCombinedState>;

export const configureStore = (
  args: {
    initialState?: StoreInitialState;
    sagaMw?: ReturnType<typeof createSagaMiddleware>;
  } = {},
) => {
  const { initialState, sagaMw = sagaMiddleware } = args;
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMw)),
  );
};

export const store = configureStore();

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
