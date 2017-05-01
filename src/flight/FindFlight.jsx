import mainStyles from '../app/stylesheet/mainpage.css'
import React from 'react'
import PropTypes from 'prop-types';
import FlightList from './FlightList.jsx'
import FindFlightsFrom from './FindFlightsForm.jsx'
import {findFlight} from '../store/actions.js'


class FindFlight extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.findFlightAPI = this.findFlightAPI.bind(this);
    }

    findFlightAPI(from, to) {
        const url = new URL('http://localhost:8080/findFlights'),
            params = {from: from, to: to};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        fetch(url, {
            method: 'get'
        })
            .then(response => response.json())
            .then(flights => {
                this.context.store.dispatch(findFlight(flights));
            });
    };


    render(){
        return (
            <div className={mainStyles.mainpage}>
                <section >
                    <FindFlightsFrom onFind={this.findFlightAPI}/>
                    <FlightList {...this.context.store.getState()}/>
                </section>
            </div>
        )
    }
}

FindFlight.contextTypes = {
    store: PropTypes.object
};

export default FindFlight;