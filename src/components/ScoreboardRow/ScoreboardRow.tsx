import * as React from "react";
import "./ScoreboardRow.css";

import { ScoreboardPlayer } from "../../models/scoreboardPlayer";

interface Props
{
    score: ScoreboardPlayer;
    key: number;
}

class ScoreboardRow extends React.Component<Props>
{
    constructor(props: Props)
    {
        super(props);
    }

    public render()
    {
        const score = this.props.score;

        return (
            <div className="columns is-mobile Scoreboard__row Scoreboard__row--body">
                <span className="column Scoreboard__cell">{score.player.rating}</span>
                <span className="column Scoreboard__cell">{score.player.name}</span>
                <span className="column Scoreboard__cell">{score.wins}</span>
                <span className="column Scoreboard__cell">{score.losses}</span>
                <span className="column Scoreboard__cell">{this.calculateWinLoseRatio(score.wins, score.losses)}</span>
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

export default ScoreboardRow;
