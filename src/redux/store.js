import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

const STORE = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default STORE;
