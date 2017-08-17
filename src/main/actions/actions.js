import {
    getFlights,
    checkLogin,
} from '../api/index';

const findFlightsAction = flights => ({
  type: 'FIND_FLIGHTS',
  flights,
});

const canLogin = user => ({
  type: 'CAN_LOGIN',
  user,
});

export const findFlights = (departureFrom, arrivalTo) => dispatch =>
    getFlights(departureFrom, arrivalTo).then(flights => dispatch(findFlightsAction(flights)));

export const tryLogin = (login, password) => (dispatch) => {
  checkLogin(login, password).then((isLogged) => {
    if (isLogged) dispatch(canLogin({ login, password }));
  });
};
