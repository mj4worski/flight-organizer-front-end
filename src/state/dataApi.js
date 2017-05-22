import _flights from './flights.json'
import _users from './users.json'

export const getFlights = (departureFrom, arrivalTo) => {
    return new Promise((resolve, reject) => {
        const foundFlights = _flights.filter(flight => flight.departureFrom === departureFrom && flight.arrivalTo === arrivalTo);
        resolve(foundFlights)
    });
}

export const checkLogin = (login, password) => {
    return new Promise((resolve, reject) => {
        let exist = false;
        for (var user of _users) {
            if (user.login === login && user.password === password) {
                exist = true;
                break
            }
        }
        resolve(exist)
    });
}