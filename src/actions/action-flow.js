// @flow
import type {
    FlightType,
    UserType
} from '../state/data-flow.js';

type FindFlights = { type: 'FIND_FLIGHTS', flights: Array<FlightType> };
type CanLogin =  { type: 'CAN_LOGIN', user: UserType };

type GetState = () => Object;
type PromiseAction = Promise<Action>;
type Dispatch = (action: Action | ThunkAction | PromiseAction | Array<Action>) => any;

export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
export type Action = FindFlights | CanLogin;