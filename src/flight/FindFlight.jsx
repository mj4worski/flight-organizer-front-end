import mainStyles from '../app/stylesheet/mainpage.css'
import React from 'react'
import PropTypes from 'prop-types';
import FlightList from './FlightList.jsx'
import FindFlightsFrom from './FindFlightsForm.jsx'
import {findFlight} from '../store/actions.js'


class FindFlight extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.flights= ["A"];
        this.onFindClick = this.onFindClick.bind(this);
    }


    onFindClick(from, to, e) {
        e.preventDefault();
        console.log("COntext" , this);
        this.context.store.dispatch(findFlight(from.value, to.value));
        from.value = '';
        to.value = '';
        from.focus();
        to.focus();
    };


    render(){
        return (
            <div className={mainStyles.mainpage}>
                <section >
                    <FindFlightsFrom onFind={this.onFindClick}/>
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