// @flow
import type {
    FlightType
} from '../../state/data-flow';
import {connect} from 'react-redux'
import React from 'react'
import {
    FlightList,
    FindFlightsFrom
} from './index'
import {
    findFlights,
    reservationFlight
} from '../../actions/index'

type FindFlightContainerType = {
    flights: Array<FlightType>,
    findFlights: Function,
    reservationFlight: Function,
}

const FindFlightContainer = ({flights, findFlights, reservationFlight}: FindFlightContainerType) => {
    return (
        <div>
            <FindFlightsFrom findFlights={findFlights} />
            <FlightList flights={flights} reservationFlight={reservationFlight}/>
        </div>
    )
};

const mapStateToProps = ({flights}: FlightType) => ({
    flights: flights
});

export default connect(
    mapStateToProps,
    {findFlights, reservationFlight}
)(FindFlightContainer);