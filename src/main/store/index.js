import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as reducers from '../reducers/index';
import middleware from './middleware';

// eslint-disable-next-line no-underscore-dangle,no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const reducer = combineReducers({
  ...reducers,
  router: routerReducer,
});

export default createStore(reducer, composeEnhancers(
    applyMiddleware(...middleware),
));

