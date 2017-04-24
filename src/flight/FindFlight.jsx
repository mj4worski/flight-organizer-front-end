import React from 'react'
import FlightList from './FlightList.jsx'
import mainStyles from '../app/stylesheet/mainpage.css'
import styles from './stylesheet/findflight.css'

class FindFlight extends React.Component {
    constructor(props) {
        super(props);
        this._from = {};
        this._to = {};
        this.find = this.find.bind(this);
    }

    find(e) {
        e.preventDefault();
        this.props.onFind(this._from.value, this._to.value);
        this._from.value = '';
        this._to.value = '';
        this._from.focus();
        this._to.focus();
    }

    render() {
        return (
            <div className={mainStyles.mainpage}>
                <section >
                    <p className={styles.findforminfo}>Znajdz swoj wymarzony lot</p>
                    <form onSubmit={this.find}>
                        <p>Skad: <input ref={input => this._from = input} type="text"/></p>
                        <p>Dokad : <input ref={input => this._to = input} type="text"/></p>
                        <button>Szukaj</button>
                    </form>
                    <FlightList {...this.props}/>
                </section>
            </div>
        )
    }
}

export default FindFlight;