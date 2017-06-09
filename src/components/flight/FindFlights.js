// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { FlightType } from '../../state/types';
import type{
    reservationFlightType as reservationType,
    findFlightsType,
} from '../../actions';
import {
    FlightList,
    FindFlightsFrom,
} from './index';
import {
    findFlights,
    reservationFlight,
} from '../../actions';

type FindFlightType = {
    flights: Array<FlightType>,
    find: findFlightsType,
    reservation: reservationType,
}

const FindFlightContainer = ({ flights, find, reservation }: FindFlightType) =>
    (
      <div>
        <FindFlightsFrom onClick={find} />
        <FlightList flights={flights} reservationFlight={reservation} />
      </div>
    );

const mapStateToProps = ({ flights }: FlightType) => ({
  flights,
});

export default connect(
    mapStateToProps,
  {
    find: findFlights,
    reservation: reservationFlight,
  },
)(FindFlightContainer);
