import {createStore, combineReducers} from 'redux';
import {flights} from './reducers';

const initialState = {
    flights: []
};

const store = createStore(
    combineReducers({flights}),
    initialState
);

export default store;