// vendor imports
import * as React from "react";
const reactRouter = require("react-router-dom");
let { Route } = reactRouter;
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
const createHistory = require("history").createBrowserHistory;
const rdx = require("react-router-redux");
let { ConnectedRouter, routerMiddleware } = rdx;
import ReduxThunk from "redux-thunk";

// client imports
import ScoreboardContainer from "./containers/ScoreboardContainer";
import AddPlayerContainer from "./containers/AddPlayerContainer";
import AddMatchContainer from "./containers/AddMatchContainer";
import PlayerListContainer from "./containers/PlayerListContainer";
import MatchListContainer from "./containers/MatchListContainer";

import Navigation from "./components/Navigation/Navigation";
import { PlayerActionType } from "./actions/playersActions";
import { MatchActionType } from "./actions/matchesActions";
import { ScoreboardActionType } from "./actions/scoreboardActions";
import "./App.css";

// redux setup
import reducers from "./reducers";
const history = createHistory();
const middleware = routerMiddleware(ReduxThunk, history);
const store = createStore(reducers, applyMiddleware(middleware));

import ApiService from "./apiMockService";
const api = new ApiService();

export default class App extends React.Component {

    public async componentWillMount()
    {
        let scoreboard = await api.getScoreboard();
        store.dispatch({ type: ScoreboardActionType.Fetch, payload: scoreboard });

        let players = await api.getPlayers();
        store.dispatch({ type: PlayerActionType.Fetch, payload: players });

        let matches = await api.getMatches();
        store.dispatch({ type: MatchActionType.Fetch, payload: matches });
    }

    render() {

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>

                    <div className="App">
                    <header>
                        <h1>Pool ranking</h1>
                        <Navigation />
                    </header>
                        <Route exact path="/" render={(props: any) => <ScoreboardContainer {...props} />} />
                        <Route exact path="/matches" render={(props: any) => <MatchListContainer {...props} />} />
                        <Route exact path="/matches/new" render={(props: any) => <AddMatchContainer {...props} />} />
                        <Route exact path="/players" render={(props: any) => <PlayerListContainer {...props} />} />
                        <Route exact path="/players/new" render={(props: any) => <AddPlayerContainer {...props} />} />
                    </div>

                </ConnectedRouter>
            </Provider>
        );
    }
}
