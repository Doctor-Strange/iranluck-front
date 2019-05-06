import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
})

let composeEnhancers = compose

const configurStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}

export default configurStore