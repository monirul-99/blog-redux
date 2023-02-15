import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import RootReducers from "./Reducers/RootReducers";

const Store = createStore(
  RootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default Store;
