import * as React from "react";

import "./MatchListRow.css";
import * as MatchModel from "../../../models/match";

interface Props
{
    match: MatchModel.Match;
}

class MatchListRow extends React.Component<Props>
{
    render()
    {
        return (
            <div className="MatchListRow datatable__row columns is-mobile">
                <span className="datatable__cell column is-two-fifths">{this.props.match.winner}</span>
                <span className="datatable__cell column is-one-fifth">vs.</span>
                <span className="datatable__cell column is-two-fifths">{this.props.match.loser}</span>
            </div>
        );
    }
}

export default MatchListRow;
