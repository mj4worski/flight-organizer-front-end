import {
    getFlights,
} from '../api';

const findFlightsAction = flights => ({
  type: 'FIND_FLIGHTS',
  flights,
});

export const findFlights = (departureFrom, arrivalTo) => dispatch =>
    getFlights(departureFrom, arrivalTo).then(flights => dispatch(findFlightsAction(flights)));
