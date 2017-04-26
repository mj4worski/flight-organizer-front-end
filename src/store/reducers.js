import C from './constants.js';

export const flights = (state = [] , action) => {
  switch (action.type) {
      case C.FIND_FLIGHT:
          // return state.filter( flight => {
          //     return flight.from === action.from && flight.to === action.to
          // });
          return [
              ...state,
              {from: action.from , to: action.to}
          ];
      default:
          return state;
  }
};

export const color = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            };
        case C.RATE_COLOR:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    rating: action.rating
                };
        default:
            return state;
    }
};