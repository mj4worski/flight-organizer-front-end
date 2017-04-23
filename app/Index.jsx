import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'whatwg-fetch'

import FindFlight from './FindFlight.jsx';
import MainPage from './MainPage.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.findFlights = this.findFlights.bind(this);
    }

    findFlights(from, to) {
        const url = new URL('http://192.168.0.115:8080/lot'),
            params = {from: from, to: to};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        fetch(url, {
            method: 'get'
        })
            .then(response => response.json())
            .then(flights => {
                this.setState({flights})
            });
    }


    render() {
        const { findFlights } = this;
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Strona glowna</Link></li>
                        <li><Link to="/findFlight">Znajdz lot</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/findFlight" component={
                        () => <FindFlight onFind={findFlights}
                                              {...this.state}/>}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
