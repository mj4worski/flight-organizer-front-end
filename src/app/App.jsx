import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import 'whatwg-fetch'
import PropTypes from 'prop-types';
import styles from './stylesheet/app.css'
import store from '../store/store.js'
import FindFlight from '../flight/FindFlight.jsx';
import MainPage from './MainPage.jsx'

const TopMenu = () => {
    return (
        <ul className={styles.topnav}>
            <li><Link to="/" className={styles.active}>Strona glowna</Link></li>
            <li><Link to="/findFlight">Znajdz lot</Link></li>
        </ul>
    )
};

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    getChildContext() {
        return {
            store: store
        }
    }

    componentWillMount() {
        this.unsubscribe = store.subscribe(
            () => this.forceUpdate()
        )
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <Router>
                <div>
                    <TopMenu/>
                    <img className={styles.logo} src="images/logo.jpg"/>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/findFlight" component={FindFlight}/>
                </div>
            </Router>
        )
    }
}

App.childContextTypes = {
    store: PropTypes.object.isRequired
};


ReactDOM.render(
    <App/>
    , document.getElementById('app'));
