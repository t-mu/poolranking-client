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
import MatchList from "./components/MatchList/MatchList";
import AddMatch from "./components/AddMatch/AddMatch";
import Navigation from "./components/Navigation/Navigation";
import { PlayerList } from "./components/PlayerList/PlayerList";
import { PlayerModel } from "./models/player";
import { ScoreboardPlayer } from "./models/scoreboardPlayer";
import AddPlayerContainer from "./containers/AddPlayerContainer";
import "./App.css";

// redux setup
import reducers from "./reducers";
const history = createHistory();
const middleware = routerMiddleware(ReduxThunk, history);
const store = createStore(reducers, applyMiddleware(middleware));

interface Props {
    players?: PlayerModel[];
    scoreboard?: ScoreboardPlayer[];
    fetchScoreboard?: Function;
}

export default class App extends React.Component<Props> {

    constructor(props: Props)
    {
        super(props);
    }

    public async componentDidMount(): Promise<void>
    {
        console.log("PERKELÖE");

        if (this.props.fetchScoreboard)
        {
            await this.props.fetchScoreboard();
        }
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
                        <Route exact path={"/"} component={ScoreboardContainer} />
                        <Route exact path={"/matches"} component={MatchList} />
                        <Route exact path={"/matches/new"} component={AddMatch} />
                        <Route exact path={"/players"} component={PlayerList} />
                        <Route exact path={"/players/new"} component={AddPlayerContainer} />
                    </div>

                </ConnectedRouter>
            </Provider>
        );
    }
}
