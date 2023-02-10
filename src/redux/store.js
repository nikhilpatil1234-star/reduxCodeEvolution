import { createStore, applyMiddleware } from "redux";
// import cakeReducer from "./cake/CakeReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./RootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

// const store = createStore(cakeReducer,devToolsEnhancer());
const store = createStore(
  rootReducer,
  composeWithDevTools( applyMiddleware(logger,thunk)),
 
);

export default store;
