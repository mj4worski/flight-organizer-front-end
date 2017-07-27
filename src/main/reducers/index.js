export const flights = (state = [], action) => {
  switch (action.type) {
    case 'FIND_FLIGHTS':
      return [
        ...action.flights,
      ];
    default:
      return state;
  }
};

export const user = (state = {}, action) => {
  switch (action.type) {
    case 'CAN_LOGIN':
      return Object.assign({}, action.user);
    default:
      return state;
  }
};

export const UI = (state = {}, action) => {
  switch (action.type) {
    case 'CAN_LOGIN':
      return Object.assign({}, state, {
        isUserLogin: action.user.isUserLogin || false,
      });
    default:
      return state;
  }
};
