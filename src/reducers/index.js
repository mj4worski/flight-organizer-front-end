import {
    flights,
    isUserLogin
}
    from './reducers'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'


const initialState = {
    isUserLogin: false
};

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({flights, isUserLogin});

const store = createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(...middleware)
));

export default store;

