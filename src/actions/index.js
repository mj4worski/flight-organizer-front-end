import C from '../constants';
import flights from '../state/dataApi'

const foundFlights = (flights) => (
    {
        type: C.FOUND_FLIGHTS,
        flights,
    }
);

export const findFlights = (departureFrom, arrivalTo) => dispatch => {
    flights.getFlights(departureFrom, arrivalTo, flights => {
        dispatch(foundFlights(flights))
    })
}
