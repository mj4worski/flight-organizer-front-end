// @flow
import _flights from './flights.json'
import _usersFromDB from './users.json'

export const getFlights = (departureFrom: string, arrivalTo: string) => {
    return new Promise((resolve, reject) => {
        const foundFlights = _flights.filter(flight => flight.departureFrom === departureFrom && flight.arrivalTo === arrivalTo);
        resolve(foundFlights)
    });
};

export const checkLogin = (login: string, password: string) => {
    return new Promise((resolve, reject) => {
        let existingUser = {};
        for (var user of _usersFromDB) {
            if (user.login === login && user.password === password) {
                existingUser = Object.assign({}, user, {isUserLogin: true});
                break;
            }
        }
        resolve(existingUser)
    });
};