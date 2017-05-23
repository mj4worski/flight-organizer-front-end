import {
    flights,
    user,
    UI
}
    from '../reducers/reducers'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import history from '../app/HistoryConfiguration'
import {
    routerReducer,
    routerMiddleware
} from 'react-router-redux'

const middleware = [thunk, routerMiddleware(history)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    flights,
    user,
    UI,
    router: routerReducer
});

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middleware)
));

export default store;

