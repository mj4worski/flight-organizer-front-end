import C from './constants';
import {v4} from 'node-uuid';

export const findFlight = (from, to) => (
    {
        type: C.FIND_FLIGHT,
        from,
        to
    }
);

export const removeColor = id =>
    ({
        type: C.REMOVE_COLOR,
        id
    });

export const rateColor = (id, rating) =>
    ({
        type: C.RATE_COLOR,
        id,
        rating
    });

export const sortColors = sortedBy =>
    (sortedBy === "rating") ?
        ({
            type: C.SORT_COLORS,
            sortBy: "SORTED_BY_RATING"
        }) :
        (sortedBy === "title") ?
            ({
                type: C.SORT_COLORS,
                sortBy: "SORTED_BY_TITLE"
            }) :
            ({
                type: C.SORT_COLORS,
                sortBy: "SORTED_BY_DATE"
            });

export const addColor = (title, color) =>
    ({
        type: C.ADD_COLOR,
        id: v4(),
        title,
        color,
        timestamp: new Date().toString()
    });