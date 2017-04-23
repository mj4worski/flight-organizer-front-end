import React from 'react'
import FlightList from './FlightList.jsx'

class FindFlight extends React.Component {
    constructor(props) {
        super(props);
        this._from = {};
        this._to = {};
        this.find = this.find.bind(this);
    }

    find(e){
        e.preventDefault();
        this.props.onFind(this._from.value, this._to.value);
        this._from.value = '';
        this._to.value = '';
        this._from.focus();
        this._to.focus();
    }

    render () {
        // const {find} = this;
        return (
            <div>
                <form onSubmit={this.find}>
                    Skad: <input ref={input => this._from = input} type="text"/>
                    Dokad : <input ref={input => this._to = input} type="text"/>
                    <button>Szukaj</button>
                </form>
                <FlightList {...this.props}/>
            </div>
        )
    }
}

export default FindFlight;