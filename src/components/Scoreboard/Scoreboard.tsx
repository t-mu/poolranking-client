// vendor imports
import * as React from "react";
import { ScoreboardPlayer } from "../../models/scoreboardPlayer";
import { StateProps, DispatchProps } from "../../containers/ScoreboardContainer";

// component imports
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
                {this.props.scoreboard.map((score, index) =>
                    {
                        return (
                            <div className="columns is-mobile Scoreboard__row Scoreboard__row--body" key={index}>
                                <span className="column Scoreboard__cell">{score.player.rating}</span>
                                <span className="column Scoreboard__cell">{score.player.name}</span>
                                <span className="column Scoreboard__cell">{score.wins}</span>
                                <span className="column Scoreboard__cell">{score.losses}</span>
                                <span className="column Scoreboard__cell">{this.calculateWinLoseRatio(score.wins, score.losses)}</span>
                            </div>
                        );
                    }
                )}
            </div>
        );
    }

    private calculateWinLoseRatio(wins: string, losses: string): string
    {
        if (losses === "0")
        {
            return parseInt(wins, 10).toString();
        }
        else
        {
            let ratio: number = parseInt(wins, 10) / parseInt(losses, 10);
            return ratio.toFixed(2);
        }
    }
}

export default Scoreboard;
