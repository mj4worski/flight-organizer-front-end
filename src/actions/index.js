import C from '../constants';

export const findFlight = (flights) => (
    {
        type: C.FIND_FLIGHT,
        flights,
    }
);
