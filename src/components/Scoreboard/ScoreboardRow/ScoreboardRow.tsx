import * as React from "react";
import "./ScoreboardRow.css";

import { ScoreboardPlayer } from "../../../models/scoreboardPlayer";

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
            <div className="ScoreboardRow datatable__row datatable__row--body columns is-mobile ">
                <span className="datatable__cell column">{score.player.rating}</span>
                <span className="datatable__cell column">{score.player.name}</span>
                <span className="datatable__cell column">{score.wins}</span>
                <span className="datatable__cell column">{score.losses}</span>
                <span className="datatable__cell column">{this.calculateWinLoseRatio(score.wins, score.losses)}</span>
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
