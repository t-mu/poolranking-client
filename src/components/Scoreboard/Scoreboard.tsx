import * as React from "react";

import { ScoreboardPlayer } from "../../models/scoreboardPlayer";
import { StateProps, DispatchProps } from "../../containers/ScoreboardContainer";
import ScoreboardRow from "./ScoreboardRow/ScoreboardRow";

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
            <section className="Scoreboard datatable">
                <div className="datatable__row datatable__row--header columns is-mobile">
                    <span className="datatable__cell column">Rating</span>
                    <span className="datatable__cell column">Player</span>
                    <span className="datatable__cell column">Wins</span>
                    <span className="datatable__cell column">Losses</span>
                    <span className="datatable__cell column">W/L</span>
                </div>
                {this.props.scoreboard.map((score: ScoreboardPlayer, index: number) =>
                    <ScoreboardRow score={score} key={index} /> )
                }
            </section>
        );
    }
}

export default Scoreboard;
