import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import 'whatwg-fetch'
import styles from './stylesheet/app.css'
import FindFlights from '../containers/FindFlights';
import MainPage from './MainPage.js'
import Login from '../containers/Login'


const TopMenu = () => {
    return (
        <ul className={styles.topnav}>
            <li><Link to="/" className={styles.active}>Strona glowna</Link></li>
            <li><Link to="/findFlight">Znajdz lot</Link></li>
            <li><Link to="/login">Logowanie</Link></li>
        </ul>
    )
};

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <TopMenu/>
                    <img className={styles.logo} src="images/logo.jpg"/>
                    <div className={styles.mainpage}>
                        <section >
                            <Route exact path="/" component={MainPage}/>
                            <Route path="/findFlight" component={FindFlights}/>
                            <Route path="/login" component={Login}/>
                        </section>
                    </div>
                </div>
            </Router>
        )
    }
}
