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
import MatchList from "./components/MatchList/MatchList";
import Navigation from "./components/Navigation/Navigation";
import PlayerList from "./components/PlayerList/PlayerList";
import AddPlayer from './components/AddPlayer/AddPlayer';
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
                    <header>
                        <h1>Pool ranking</h1>
                        <Navigation />
                    </header>
                        <Route exact path={'/'} component={DashboardContainer} />
                        <Route exact path={'/matches'} component={MatchList} />
                        <Route exact path={'/players'} component={PlayerList} />
                        <Route exact path={'/players/new'} component={AddPlayer} />
                    </div>

                </ConnectedRouter>
            </Provider>
        );
    }
}
