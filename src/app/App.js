import React from 'react';
import {
    Router,
    Route,
    Link
} from 'react-router-dom';
import 'whatwg-fetch'
import './App.scss';
import FindFlights from '../flight/FindFlights';
import MainPage from './MainPage.js';
import Login from './Login';
import history from'./HistoryConfiguration';
import cx from 'classnames';

const Header = () => {

    const style = cx('nav-bar__item-visual');
    return (
        <div className='header'>
            <ul className='nav-bar'>
                <li className='nav-bar__item'><Link to="/" className={style}>Strona glowna</Link></li>
                <li className='nav-bar__item'><Link to="/findFlight" className={style}>Znajdz lot</Link></li>
                <li className='nav-bar__item'><Link to="/login" className={style}>Logowanie</Link></li>
            </ul>
            <div>
                <img className='header__logo' src="images/logo.jpg"/>
            </div>
        </div>
    )
};

const Content = () => {
    return (
        <div className="content">
            <section >
                <Route exact path="/" component={MainPage}/>
                <Route path="/findFlight" component={FindFlights}/>
                <Route path="/login" component={Login}/>
            </section>
        </div>
    )
};


export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Header/>
                    <Content/>
                </div>
            </Router>
        )
    }
}
