import 'whatwg-fetch';

export const getFlights = (departureFrom, arrivalTo) => {
  const url = new URL('http://localhost:8080/findFlights');
  const params = { departureFrom, arrivalTo };
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return fetch(url, { method: 'get', credentials: 'include' }).then(response => response.json());
};

export const checkLogin = (username, password) => {
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

const getPlaceImage = (id) => {
  const url = new URL(`http://localhost:8080/public/image/${encodeURIComponent(id)}`);
  return fetch(url, { method: 'get', credentials: 'include' })
        .then(respone => respone.blob())
      .then(responseAsBlob => URL.createObjectURL(responseAsBlob));
};

const fetchImagesForPlaces = (places) => {
  places.forEach((place) => {
    getPlaceImage(place.imageIds[0]).then((image) => {
      place.image = image;
    });
  });
  return Promise.resolve(places);
};

export const getBestPlaces = () => {
  const url = new URL('http://localhost:8080/public/findPlaces');
  return fetch(url, { method: 'get', credentials: 'include' })
        .then(places => places.json())
        .then(fetchImagesForPlaces);
};
