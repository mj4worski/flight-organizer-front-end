// @flow
import 'whatwg-fetch';
import type { FlightType } from './types';

type getFlightType = (string, string) => FlightType;


export const getFlights: getFlightType = (departureFrom, arrivalTo) => {
  const url = new URL('http://localhost:8080/public/findFlights');
  const params = { departureFrom, arrivalTo };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return fetch(url, { method: 'get', credentials: 'include' }).then(response => response.json());
};

export const checkLogin = (username: string, password: string) => {
  const url = new URL('http://localhost:8080/login');
  const params = { username, password };
  const formBody = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formBody,
    credentials: 'include',
  }).then(response => response.status === 200);
};
