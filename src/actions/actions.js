import {CAN_LOGIN, FIND_FLIGHTS} from '../constants';
import {
    getFlights,
    checkLogin
} from '../state/dataApi'
import {push} from 'react-router-redux'

const findFlightsAction = (flights) => ({
    type: FIND_FLIGHTS,
    flights,
});

export const findFlights = (departureFrom, arrivalTo) => dispatch => {
    const p = getFlights(departureFrom, arrivalTo);
    p.then(flights => dispatch(findFlightsAction(flights)));
};

const canLogin = (user) => ({
    type: CAN_LOGIN,
    user
});

export const tryLogin = (login, password) => dispatch => {
    const p = checkLogin(login, password);
    p.then(user => dispatch(canLogin(user)))
};

export const reservationFlight = (flight) => (dispatch, getState) => {
    const {UI} = getState();
    if (!UI.isUserLogin) {
        dispatch(push("/login"));
    }
};
