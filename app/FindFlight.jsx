import React from 'react'
import FlightList from './FlightList.jsx'

class FindFlight extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <div>
                <from>
                    Skad: <input type="text"/>Dokad : <input type="text"/>
                    <button>Szukaj</button>
                </from>
                <FlightList flights={this.props.flights}/>
            </div>
        )
    }
}

export default FindFlight;