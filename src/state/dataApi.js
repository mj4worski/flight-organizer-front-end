import _flights from './flights.json'

export default {
    getFlights: (departureFrom, arrivalTo, cb) => {
        const foundFlights = _flights.filter(flight => flight.departureFrom === departureFrom && flight.arrivalTo === arrivalTo)
        cb(foundFlights)
    }
}