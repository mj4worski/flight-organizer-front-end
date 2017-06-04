import {CAN_LOGIN , FIND_FLIGHTS} from '../constants'

export const flights = (state = [], action) => {
    switch (action.type) {
        case FIND_FLIGHTS:
            return [
                ...action.flights
            ];
        default:
            return state;
    }
};

export const user = (state = {}, action) => {
    switch (action.type) {
        case CAN_LOGIN:
            return Object.assign({}, action.user);
        default:
            return state;
    }
};

const initStateForUI = {
    isUserLogin: false
};

export const UI = (state = {...initStateForUI}, action) => {
    switch (action.type){
        case CAN_LOGIN:
            return Object.assign({}, state, {
                isUserLogin: action.user.isUserLogin || false
            });
        default:
            return state;
    }
};