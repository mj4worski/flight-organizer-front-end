// @flow
import { push } from 'react-router-redux';
import type {
    FlightType,
    UserType,
} from '../state/types';
import type {
    Action,
    ThunkAction,
} from './types';
import {
    getFlights,
    checkLogin,
} from '../state/dataApi';

export type findFlightsType = (string, string) => ThunkAction;
export type reservationFlightType = (FlightType) => ThunkAction;
export type tryLoginType = (string, string) => ThunkAction;

const findFlightsAction = (flights: Array<FlightType>): Action => ({
  type: 'FIND_FLIGHTS',
  flights,
});

const canLogin = (user: UserType): Action => ({
  type: 'CAN_LOGIN',
  user,
});

export const findFlights = (departureFrom: string, arrivalTo: string): ThunkAction =>
    (dispatch) => {
      const p = getFlights(departureFrom, arrivalTo);
      p.then(flights => dispatch(findFlightsAction(flights)));
    };

export const tryLogin = (login: string, password: string): ThunkAction => (dispatch) => {
  const p = checkLogin(login, password);
  p.then(user => dispatch(canLogin(user)));
};

export const reservationFlight = (flight: FlightType): ThunkAction => (dispatch, getState) => {
  const { UI } = getState();
  if (!UI.isUserLogin) {
    dispatch(push('/login'));
  }
};
