import React from 'react';
import { Router, Route } from 'react-router';

import Menu from './Menu.jsx';

class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Menu/>
            </div>
        )
    }
}


export default App;

