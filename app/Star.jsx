import React from "react";

const Star = ({selected = false, onClick = f => f}) => {
    return (
        <div className={(selected) ? "star selected" : "star"}
             onClick={onClick}>
        </div>
    )
};

export default Star;

Star.propTypes = {
    selected: React.PropTypes.bool,
    onClick: React.PropTypes.func
};


