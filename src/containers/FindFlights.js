import {connect} from 'react-redux'
import React from 'react'
import {
    FlightList,
    FindFlightsFrom
} from '../flight/'
import {
    findFlights,
    reservationFlight
} from '../actions'

const FindFlightContainer = ({flights, findFlights, reservationFlight}) => {
    return (
        <div>
            <FindFlightsFrom onFindFlights={findFlights}/>
            <FlightList flights={flights} reservationFlight={reservationFlight}/>
        </div>
    )
};

const mapStateToProps = (state) => ({
    flights: state.flights
});

const FindFlights = connect(
    mapStateToProps,
    {findFlights, reservationFlight}
)(FindFlightContainer);

export default FindFlights