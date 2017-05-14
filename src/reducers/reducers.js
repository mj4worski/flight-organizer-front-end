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