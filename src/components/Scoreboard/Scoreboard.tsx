import * as React from "react";

import { ScoreboardPlayer } from "../../models/scoreboardPlayer";
import { StateProps, DispatchProps } from "../../containers/ScoreboardContainer";
import ScoreboardRow from "../ScoreboardRow/ScoreboardRow";

import "./Scoreboard.css";

class Scoreboard extends React.Component<StateProps & DispatchProps> {

    public loading = true;

    constructor(props: StateProps & DispatchProps)
    {
        super(props);
    }

    render() {
        let scoreboard: ScoreboardPlayer[] = [];

        if (this.props.scoreboard)
        {
            scoreboard = this.props.scoreboard;
            this.loading = false;
        }

        return (
            <div className="Scoreboard">
                <div className="columns is-mobile Scoreboard__row Scoreboard__row--header">
                    <span className="column Scoreboard__cell">Rating</span>
                    <span className="column Scoreboard__cell">Player</span>
                    <span className="column Scoreboard__cell">Wins</span>
                    <span className="column Scoreboard__cell">Losses</span>
                    <span className="column Scoreboard__cell">W/L</span>
                </div>
                {this.props.scoreboard.map((score, index) =>  <ScoreboardRow score={score} key={index} /> )}
            </div>
        );
    }
}

export default Scoreboard;
