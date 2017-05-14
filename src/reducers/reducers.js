import constants from '../constants'

export const flights = (state = [] , action) => {
    switch (action.type) {
        case constants.FIND_FLIGHT:
            return action.flights;
        default:
            return state;
    }
};