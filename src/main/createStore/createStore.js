import { routerReducer } from 'react-router-redux';
import { createStore as reduxCreateStore, applyMiddleware, combineReducers, compose } from 'redux';
import middleware from '../middleware';
import * as reducers from '../reducers';

const reducer = combineReducers({
  ...reducers,
  router: routerReducer,
});

// eslint-disable-next-line no-underscore-dangle,no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createStore = () => reduxCreateStore(reducer,
    composeEnhancers(applyMiddleware(...middleware)));

export default createStore;
