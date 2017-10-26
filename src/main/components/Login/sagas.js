import { call, put, takeLatest } from 'redux-saga/effects';
import { tryLogin } from '../../api';
import { LOG_IN } from './constatns';
import { succeededLogin, failedLogin } from './actions';

function* logIn(action) {
  const {
      login,
      password,
  } = action.user;
  const { loginStatus } = yield call(tryLogin, login, password);
  if (loginStatus) {
    yield put(succeededLogin());
  } else {
    yield put(failedLogin());
  }
}

export function* watchLogIn() {
  yield takeLatest(LOG_IN, logIn);
}
