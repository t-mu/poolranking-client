// vendor imports
import * as React from 'react';
const reactRouter = require('react-router-dom');
let { Route } = reactRouter;
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
const createHistory = require('history').createBrowserHistory;
const rdx = require('react-router-redux');
let { ConnectedRouter, routerMiddleware } = rdx;

// client imports
import DashboardContainer from './containers/DashboardContainer';
import MatchList from "./components/MatchList/MatchList";
import AddMatch from "./components/AddMatch/AddMatch";
import Navigation from "./components/Navigation/Navigation";
import { PlayerListContainer } from "./components/PlayerList/PlayerList";
import AddPlayerContainer from './containers/AddPlayerContainer';
import './App.css';

// redux setup
import reducers from "./reducers";
const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducers, applyMiddleware(middleware));

export default class App extends React.Component {
    render() {

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>

                    <div className="App">
                    <header>
                        <h1>Pool ranking</h1>
                        <Navigation />
                    </header>
                        <Route exact path={'/'} component={DashboardContainer} />
                        <Route exact path={'/matches'} component={MatchList} />
                        <Route exact path={'/matches/new'} component={AddMatch} />
                        <Route exact path={'/players'} component={PlayerListContainer} />
                        <Route exact path={'/players/new'} component={AddPlayerContainer} />
                    </div>

                </ConnectedRouter>
            </Provider>
        );
    }
}
