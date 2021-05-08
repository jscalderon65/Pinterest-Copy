import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { SearchReducer } from "./SearchReducer.js";
import thunk from "redux-thunk";
const reducers = combineReducers({
  search: SearchReducer,
});
export const Store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);