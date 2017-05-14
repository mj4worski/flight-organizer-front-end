import {connect} from 'react-redux'
import FlightList from '../flight/FlightList'

const mapStateToProps = (state) => ({
    flights: state.flights
})

const FindFlightList = connect(
    mapStateToProps
)(FlightList)

export default FindFlightList