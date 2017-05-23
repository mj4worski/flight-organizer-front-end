import C from '../constants';
import {
    getFlights,
    checkLogin
} from '../state/dataApi'

const findFlightsAction = (flights) => ({
        type: C.FIND_FLIGHTS,
        flights,
});

export const findFlights = (departureFrom, arrivalTo) => dispatch => {
    const p = getFlights(departureFrom, arrivalTo);
    p.then(flights => dispatch(findFlightsAction(flights)));
};

const canLogin = (user) => ({
    type: C.CAN_LOGIN,
    user
});

export const tryLogin = (login, password) => dispatch => {
    const p = checkLogin(login,password);
    p.then(user => dispatch(canLogin(user)))
};
