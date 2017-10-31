import * as React from 'react';
import { Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

import Dashboard from './Dashboard/Dashboard';
import './App.css';

const history: any = createHistory();
const middleware = routerMiddleware(history);

const logo = require('./logo.svg');

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2>Welcome to React</h2>
                    </div>
                    <Route path={'/'} component={Dashboard} />

                </div>
            </Router>
        );
    }
}

export default App;
