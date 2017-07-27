import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import history from '../app/HistoryConfiguration';

export default [thunk, routerMiddleware(history)];
