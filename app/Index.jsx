import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'whatwg-fetch'

import FindFlight from './FindFlight.jsx';
import MainPage from './MainPage.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // flights: [
            //     {
            //         from: "Krakow",
            //         to: "Warszawa"
            //     },
            //     {
            //         from: "Krakow",
            //         to: "Katowice"
            //     }
            //
            // ]
        }
    }

    componentWillMount() {
        fetch('http://192.168.0.115:8080/lot', {
            method: 'get'
        }).then(function (response) {
            this.setState({flights: response.json()})

        }).catch(function (err) {
           console.error(err)
        });
    }


    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Strona glowna</Link></li>
                        <li><Link to="/findFlight">Znajdz lot</Link></li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/findFlight" component={() => <FindFlight {...this.state}/>}/>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
