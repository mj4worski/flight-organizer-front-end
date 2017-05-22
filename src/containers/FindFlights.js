import {connect} from 'react-redux'
import React from 'react'
import {
    FlightList,
    FindFlightsFrom
} from '../flight/'
import {findFlights} from '../actions'

const FindFlightContainer = ({flights, findFlights}) => {
    return (
        <div>
            <FindFlightsFrom onFindFlights={findFlights}/>
            <FlightList {...flights}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    flights: state.flights ? state.flights : []
});

const FindFlights = connect(
    mapStateToProps,
    {findFlights}
)(FindFlightContainer);

export default FindFlights