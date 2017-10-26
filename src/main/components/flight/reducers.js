import { FLIGHTS_RESULT } from './constatns';

export const flights = (state = [], action) => {
  switch (action.type) {
    case FLIGHTS_RESULT:
      return [
        ...action.flights,
      ];
    default:
      return state;
  }
};

export const selectFlights = state => state.flights;
