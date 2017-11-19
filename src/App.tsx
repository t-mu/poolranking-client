// vendor imports
import * as React from "react";
import { connect } from "react-redux";
const reactRouter = require("react-router-dom");
let { Route } = reactRouter;

// client imports
import ScoreboardContainer from "./containers/ScoreboardContainer";
import AddPlayerContainer from "./containers/AddPlayerContainer";
import AddMatchContainer from "./containers/AddMatchContainer";

import MatchList from "./components/MatchList/MatchList";
import PlayerList from "./components/PlayerList/PlayerList";
import Header from "./components/Header/Header";

import { fetchScoreboard } from "./actions/scoreboardActions";
import { fetchMatches } from "./actions/matchesActions";
import { fetchPlayers } from "./actions/playersActions";

import { ScoreboardPlayer } from "./models/scoreboardPlayer";
import { Match } from "./models/match";
import { PlayerModel } from "./models/player";

import "./App.css";

interface StateProps
{
    scoreboard: ScoreboardPlayer[];
    matches: Match[];
    players: PlayerModel[];
    router: any;
}

interface DispatchProps
{
    initialize: Function;
}

export class App extends React.Component<StateProps & DispatchProps> {

    constructor(props: StateProps & DispatchProps)
    {
        super(props);
    }

    public componentDidMount(): void
    {
        this.props.initialize();
    }

    render()
    {
        return (
            <div className="App">
                <Header />
                <Route exact path="/"               render={(props: any) => <ScoreboardContainer {...props} />} />
                <Route exact path="/matches"        render={(props: any) => <MatchList matches={this.props.matches} />} />
                <Route exact path="/matches/new"    render={(props: any) => <AddMatchContainer {...props} />} />
                <Route exact path="/players"        render={(props: any) => <PlayerList players={this.props.players} />} />
                <Route exact path="/players/new"    render={(props: any) => <AddPlayerContainer {...props} />} />
            </div>
        );
    }
}

function mapStateToProps(state: any): StateProps
{
    return {
        scoreboard: state.scoreboard,
        matches: state.matches,
        players: state.players,
        router: state.router
    };
}

function mapDispatchToProps(dispatch: any): DispatchProps
{
    return {
        initialize: () => {
            dispatch(fetchScoreboard());
            dispatch(fetchMatches());
            dispatch(fetchPlayers());
        }
    };
}

export default connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(App);
