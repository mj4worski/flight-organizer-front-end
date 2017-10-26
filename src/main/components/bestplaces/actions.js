import { FETCH_BEST_PLACES, BEST_PLACES_RESULTS } from './constants';

export const fetchBestPlaces = () => ({
  type: FETCH_BEST_PLACES,
});

export const bestPlacesResults = bestPlaces => ({
  type: BEST_PLACES_RESULTS,
  bestPlaces,
});
