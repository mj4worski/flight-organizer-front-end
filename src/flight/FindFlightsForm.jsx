import styles from '../app/stylesheet/form.css'
import React from 'react'

const FindFlightsForm = ({ dispatch}) => {

    let _from , _to;

    const onSubmit = e => {
        e.preventDefault();
        dispatch(_from.value, _to.value);
        _from.value = '';
        _to.value = '';
        _from.focus();
        _to.focus();
    };

    return (
        <div>
            <p className={styles.header}>Znajdz swoj wymarzony lot</p>
            <form onSubmit={onSubmit}>
                <p>Skad: <input ref={input => _from = input} type="text"/></p>
                <p>Dokad : <input ref={input => _to = input} type="text"/></p>
                <button>Szukaj</button>
            </form>
        </div>
    )

};

export default FindFlightsForm;

