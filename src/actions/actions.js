// @flow
import type {
    FlightType,
    UserType
} from '../state/data-flow'
import type {
    Action,
    ThunkAction,
} from './action-flow.js'
import {
    getFlights,
    checkLogin
} from '../state/dataApi'
import {push} from 'react-router-redux'

const findFlightsAction = (flights: Array<FlightType>): Action => ({
    type: 'FIND_FLIGHTS',
    flights,
});

const canLogin = (user: UserType): Action => ({
    type: 'CAN_LOGIN',
    user
});

export const findFlights = (departureFrom: string, arrivalTo: string): ThunkAction =>
    dispatch => {
        const p = getFlights(departureFrom, arrivalTo);
        p.then(flights => dispatch(findFlightsAction(flights)));
    };

export const tryLogin = (login: string, password: string): ThunkAction =>
    dispatch => {
        const p = checkLogin(login, password);
        p.then(user => dispatch(canLogin(user)))
    };

export const reservationFlight = (flight: FlightType): ThunkAction =>
    (dispatch, getState) => {
        const {UI} = getState();
        if (!UI.isUserLogin) {
            dispatch(push("/login"));
        }
    };
