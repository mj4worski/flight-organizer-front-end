/* eslint-disable no-underscore-dangle,no-undef */
// @flow
import thunk from 'redux-thunk';
import {
    routerReducer,
    routerMiddleware,
} from 'react-router-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {
    flights,
    user,
    UI,
} from '../reducers/reducers';
import history from '../app/HistoryConfiguration';

const middleware = [thunk, routerMiddleware(history)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const reducers = combineReducers({
  flights,
  user,
  UI,
  router: routerReducer,
});

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middleware),
));

export default store;

