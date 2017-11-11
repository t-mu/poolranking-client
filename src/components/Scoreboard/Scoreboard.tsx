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
                {this.loading ? <p>loading</p> :
                    <table className="table container is-bordered is-striped">
                        <thead>
                            <tr>
                                <th>Score</th>
                                <th>Name</th>
                                <th>Wins</th>
                                <th>Loses</th>
                                <th>Ratio</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Score</th>
                                <th>Name</th>
                                <th>Wins</th>
                                <th>Loses</th>
                                <th>Ratio</th>
                            </tr>
                        </tfoot>
                        <tbody>
                        {scoreboard.map((score) => {
                            return (
                                <tr key={score.player.id}>
                                    <th>{score.player.rating}</th>
                                    <th>{score.player.name}</th>
                                    <th>{score.wins}</th>
                                    <th>{score.losses}</th>
                                    <th>{parseInt(score.wins, 10) / parseInt(score.losses, 10)}</th>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>}
            </div>
        );
    }
}

export default Scoreboard;
