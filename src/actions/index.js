import C from '../constants';
import {
    getFlights,
    checkLogin
} from '../state/dataApi'

const foundFlights = (flights) => ({
        type: C.FOUND_FLIGHTS,
        flights,
});

export const findFlights = (departureFrom, arrivalTo) => dispatch => {
    const p = getFlights(departureFrom, arrivalTo);
    p.then(flights => dispatch(foundFlights(flights)));
};

const couldLogin = (isUserLogin) => ({
    type: C.COULD_LOGIN,
    isUserLogin
});

export const canLogin = (login, password) => dispatch => {
    const p = checkLogin(login,password);
    p.then(isUserLogin => dispatch(couldLogin(isUserLogin)))
};
