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
import DashboardContainer from './containers/DashboardContainer';
// import { baseReducer } from './reducers';
import './App.css';

// redux setup
import playersReducer from "./reducers/playersReducer";
const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    combineReducers({
        players: playersReducer,
        router: routerReducer
    }),
    applyMiddleware(middleware));

export default class App extends React.Component {

    render() {

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>

                    <div className="App">
                        <header className="app__header">
                            <h1>Master class billiard ranking</h1>
                        </header>
                        <Route path={'/'} component={DashboardContainer} />
                    </div>

                </ConnectedRouter>
            </Provider>
        );
    }
}
