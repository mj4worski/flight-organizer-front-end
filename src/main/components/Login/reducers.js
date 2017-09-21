import { SUCCEEDED_LOGIN } from './constatns';

export const account = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case SUCCEEDED_LOGIN:
      return { ...state, loggedIn: true };
    default:
      return state;
  }
};
