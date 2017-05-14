import {flights} from './reducers'
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'


// const initialState = {
//     isLoggin: false
// };

const middleware = [ thunk ]

const store = createStore(
    flights,
    applyMiddleware(...middleware)
);

export default store;

