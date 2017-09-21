import { all } from 'redux-saga/effects';
import { watchLogIn } from './components/Login';

export default function* rootSaga() {
  yield all([
    watchLogIn(),
  ]);
}
