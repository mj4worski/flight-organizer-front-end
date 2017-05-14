import {flights} from './reducers'
import {createStore, combineReducers} from 'redux';
import {v4} from 'node-uuid';


const initialState = {
    flights: [
        {
            id: v4(),
            departureFrom: "Barcelona",
            arrivalTo: "Cracow"
        }
    ]
};

const store = createStore(
    combineReducers({flights}),
    initialState
);

export default store;

