import { all } from 'redux-saga/effects';
import { watchLogIn } from './components/Login';
import { watchFindFlights } from './components/flight';
import { watchFetchBestPlaces } from './components/bestplaces';

export default function* rootSaga() {
  yield all([
    watchLogIn(),
    watchFindFlights(),
    watchFetchBestPlaces(),
  ]);
}
