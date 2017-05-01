import C from './constants.js';

export const flights = (state = [] , action) => {
  switch (action.type) {
      case C.FIND_FLIGHT:
          return action.flights;
      default:
          return state;
  }
};