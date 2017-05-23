import {
    flights,
    user,
    UI
}
    from '../reducers/reducers'
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk'

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    flights,
    user,
    UI
});

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middleware)
));

export default store;

