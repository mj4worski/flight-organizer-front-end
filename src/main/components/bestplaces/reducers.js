import { BEST_PLACES_RESULTS } from './constants';

export const bestPlaces = (state = [], action) => {
  switch (action.type) {
    case BEST_PLACES_RESULTS:
      return [
        ...action.bestPlaces,
      ];
    default:
      return state;
  }
};

export const selectBestPlaces = state => state.bestPlaces;
