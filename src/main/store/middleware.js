import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

export default [thunk, routerMiddleware(createBrowserHistory())];
