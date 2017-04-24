import React from 'react';
import Color from './Color.jsx'
import {rateColor, removeColor} from '../store/actions.js'

const ColorList = () => {
    const {colors} = store.getState();
    return (<div className="color-list">
        {(colors.length === 0) ?
            <p>No Colors Listed. (Add a Color)</p> :
            colors.map(color =>
                <Color key={color.id}
                       {...color}
                       onRate={(rating) =>
                           store.dispatch(
                               rateColor(color.id, rating)
                           )
                       }
                       onRemove={() =>
                           store.dispatch(
                               removeColor(color.id)
                           )
                       }/>
            )
        }
    </div>);
};

ColorList.contextTypes = {
    store: React.PropTypes.object
};
export default ColorList;