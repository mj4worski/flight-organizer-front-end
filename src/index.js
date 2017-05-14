import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store from './reducers'

import App from './app/App.js'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)