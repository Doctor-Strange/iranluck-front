import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Auth from "./Reducer/Auth";

const rootReducer = combineReducers({
  AUTH: Auth
});

let composeEnhancers = compose;

const configurStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configurStore;
