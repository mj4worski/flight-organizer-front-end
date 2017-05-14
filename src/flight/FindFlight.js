import React from 'react'
import FindFlightsFrom from './FindFlightsForm.jsx'
import {findFlight} from '../actions/'
import FindFlightList from '../containers/FindFlightList'


class FindFlight extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.findFlightAPI = this.findFlightAPI.bind(this);
    }

    findFlightAPI(from, to) {
        const url = new URL('http://localhost:8080/public/findFlights'),
            params = {from: from, to: to};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        fetch(url, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(flights => {
                this.context.store.dispatch(findFlight(flights));
            });
    };


    render() {
        return (
            <div>
                <FindFlightsFrom onFind={this.findFlightAPI}/>
                <FindFlightList />
            </div>
        )
    }
}

export default FindFlight;