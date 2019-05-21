import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Auth from "./Reducer/Auth";
import Dashboard from "./Reducer/Dashboard";

const rootReducer = combineReducers({
  AUTH: Auth,
  WALLET: Dashboard
});

let composeEnhancers = compose;

const configurStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configurStore;
