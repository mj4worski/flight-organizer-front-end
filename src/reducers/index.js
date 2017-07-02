// @flow
import type {
    Action,
} from '../actions';
import type {
    FlightType,
    UserType,
} from '../api/types';

export const flights = (state: Array<FlightType> = [], action: Action): Array<FlightType> => {
  switch (action.type) {
    case 'FIND_FLIGHTS':
      return [
        ...action.flights,
      ];
    default:
      return state;
  }
};

export const user = (state: UserType = {}, action: Action): UserType => {
  switch (action.type) {
    case 'CAN_LOGIN':
      return Object.assign({}, action.user);
    default:
      return state;
  }
};

export const UI = (state: Object = {}, action: Action) => {
  switch (action.type) {
    case 'CAN_LOGIN':
      return Object.assign({}, state, {
        isUserLogin: action.user.isUserLogin || false,
      });
    default:
      return state;
  }
};
