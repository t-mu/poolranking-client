import * as React from "react";

import "./Match.css";
import * as MatchModel from "../../models/match";

interface Props
{
    match: MatchModel.Match;
}

class Match extends React.Component<Props>
{
    render()
    {
        return (
            <div className="columns">
                <span className="column is-two-fifths">{this.props.match.winner}</span>
                <span className="column is-one-fifth">vs.</span>
                <span className="column is-two-fifths">{this.props.match.loser}</span>
            </div>
        );
    }
}

export default Match;
