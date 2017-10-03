import { routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

export default [routerMiddleware(createBrowserHistory())];
