import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Auth from "./Reducer/Auth";
import Dashboard from "./Reducer/Dashboard";
import alert from "./Reducer/Alert";
import payment from "./Reducer/Payment";

const rootReducer = combineReducers({
  AUTH: Auth,
  WALLET: Dashboard,
  ALERT: alert,
  PAYMENT: payment
});

let composeEnhancers = compose;

const configurStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configurStore;
