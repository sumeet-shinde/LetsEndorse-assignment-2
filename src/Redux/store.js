import { combineReducers, createStore } from "redux";
import { ListReducer } from "./Lists/reducer";

const rootReducer = combineReducers({
  List: ListReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
