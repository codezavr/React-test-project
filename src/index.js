import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { reducer } from './reducers/reducers'

import './css/global.css';
import './css/home.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// BrowserHistory for Router
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();

// Store

let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
