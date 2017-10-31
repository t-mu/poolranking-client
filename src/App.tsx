// vendor imports
import * as React from 'react';
const reactRouter = require('react-router-dom');
let { Route } = reactRouter;
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
const createHistory = require('history').createBrowserHistory;
const rdx = require('react-router-redux');
let { ConnectedRouter, routerReducer, routerMiddleware } = rdx;

// client imports
import Dashboard from './components/Dashboard/Dashboard';
import { baseReducer } from './reducers';
import './App.css';

// redux setup
const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    combineReducers({
        baseReducer,
        router: routerReducer
    }),
    applyMiddleware(middleware));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>

                    <div className="App">
                        <div className="App-header">
                            <h2>poolranking</h2>
                            <h4>team robotosaurus xxxl 9000 pro</h4>
                        </div>
                        <Route path={'/'} component={Dashboard} />
                    </div>

                </ConnectedRouter>
            </Provider>
        );
    }
}
