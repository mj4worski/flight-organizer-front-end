import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchFlights } from '../../api';
import { FIND_FLIGHTS } from './constatns';
import { flightsResults } from './actions';


function* findFlights(action) {
  const {
      from,
      to,
  } = action;
  const flights = yield call(fetchFlights, from, to);
  yield put(flightsResults(flights));
}

export function* watchFindFlights() {
  yield takeLatest(FIND_FLIGHTS, findFlights);
}
