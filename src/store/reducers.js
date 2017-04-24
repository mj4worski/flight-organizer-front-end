import C from './constants.js';

export const flights = (state = {} , action) => {
  switch (action.type) {
      case C.FIND_FLIGHT:
          return [

          ];
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

export const colors = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_COLOR :
            return [
                ...state,
                color({}, action)
            ];
        case C.RATE_COLOR :
            return state.map(
                c => color(c, action)
            );
        default :
            return state
    }
};

export const sort = (state = "SORTED_BY_DATE", action) => {
    switch (action.type) {
        case C.SORT_COLORS:
            return action.sortBy;
        default :
            return state
    }
};