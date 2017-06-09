// @flow
import type { UserType, FlightType } from './types';
import _flights from './flights.json';
import _usersFromDB from './users.json';

type getFlightType = (string, string) => FlightType;

const findFlight = (flight, departureFrom, arrivalTo) => (
    flight.departureFrom === departureFrom && flight.arrivalTo === arrivalTo
);

export const getFlights: getFlightType = (departureFrom, arrivalTo) =>
    new Promise((resolve, reject) => {
      const foundFlights = _flights
            .filter(flight => findFlight(flight, departureFrom, arrivalTo));
      resolve(foundFlights);
    });

export const checkLogin = (login: string, password: string) =>
    new Promise((resolve, reject): UserType => {
      let existingUser = {};
      _usersFromDB.forEach((user) => {
        if (user.login === login && user.password === password) {
          existingUser = Object.assign({}, user, { isUserLogin: true });
        }
      });
      resolve(existingUser);
    });
