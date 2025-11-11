import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import { thunk } from "redux-thunk";

const composeEnhancers = 
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const STORE = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default STORE;
