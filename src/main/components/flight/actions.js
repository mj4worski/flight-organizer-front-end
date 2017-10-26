import { FIND_FLIGHTS, FLIGHTS_RESULT } from './constatns';

export const findFlights = (from, to) => ({
  type: FIND_FLIGHTS,
  from,
  to,
});

export const flightsResults = flights => ({
  type: FLIGHTS_RESULT,
  flights,
});
