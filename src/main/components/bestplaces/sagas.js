import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchBestPlaces as fetchBestPlacesAPI } from '../../api';
import { FETCH_BEST_PLACES } from './constants';
import { bestPlacesResults } from './actions';

// eslint-disable-next-line no-unused-vars
function* fetchBestPlaces(action) {
  const bestPlaces = yield call(fetchBestPlacesAPI);
  yield put(bestPlacesResults(bestPlaces));
}

export function* watchFetchBestPlaces() {
  yield takeLatest(FETCH_BEST_PLACES, fetchBestPlaces);
}
