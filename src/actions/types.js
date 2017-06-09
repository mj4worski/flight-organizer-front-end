// @flow
import type {
    FlightType,
    UserType,
} from '../state/types';

type FindFlights = { type: 'FIND_FLIGHTS', flights: Array<FlightType> };
type CanLogin = { type: 'CAN_LOGIN', user: UserType };
export type Action = FindFlights | CanLogin;
type PromiseAction = Promise<Action>;
type GetState = () => Object;
type Dispatch = (action: Action | PromiseAction | Array<Action>) => any;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
