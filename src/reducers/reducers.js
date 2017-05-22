import constants from '../constants'

export const flights = (state = {}, action) => {
    switch (action.type) {
        case constants.FOUND_FLIGHTS:
            return {
                ...state,
                flights: action.flights
            };
        default:
            return state;
    }
};

export const isUserLogin = (state = {}, action) => {
    switch (action.type){
        case constants.COULD_LOGIN:
            return {
                ...state,
                isUserLogin: action.isUserLogin
            };
        default:
            return state;
    }
};