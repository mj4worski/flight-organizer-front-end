import styles from './stylesheet/findflight.css'
import React from 'react'

const FindFlightsForm = ({onFind}) => {

    let _from , _to;
    console.log(onFind);
    return (
        <div>
            <p className={styles.findforminfo}>Znajdz swoj wymarzony lot</p>
            <form onSubmit={(e) => onFind(_from,_to, e)}>
                <p>Skad: <input ref={input => _from = input} type="text"/></p>
                <p>Dokad : <input ref={input => _to = input} type="text"/></p>
                <button>Szukaj</button>
            </form>
        </div>
    )

};

export default FindFlightsForm;

