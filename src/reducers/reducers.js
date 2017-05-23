import constants from '../constants'

export const flights = (state = [], action) => {
    switch (action.type) {
        case constants.FOUND_FLIGHTS:
            return [
                ...action.flights
            ];
        default:
            return state;
    }
};

export const isUserLogin = (state = false, action) => {
    switch (action.type){
        case constants.COULD_LOGIN:
            return  action.isUserLogin;
        default:
            return state;
    }
};