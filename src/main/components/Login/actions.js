import { LOG_IN, SUCCEEDED_LOGIN, FAILED_LOGIN } from './constatns';

export const logIn = user => ({
  type: LOG_IN,
  user,
});

export const succeededLogin = () => ({
  type: SUCCEEDED_LOGIN,
});

export const failedLogin = () => ({
  type: FAILED_LOGIN,
});

