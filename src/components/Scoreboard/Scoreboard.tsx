// vendor imports
import * as React from "react";
// import ApiService from "../../apiMockService";
import { ScoreboardPlayer } from "../../models/scoreboardPlayer";

// component imports
import "./Scoreboard.css";

interface Props
{
    scoreboard?: any[];
    fetchScoreboard?: Function;
}

class Scoreboard extends React.Component<Props> {

    public loading = true;

    constructor(props: Props)
    {
        super(props);
    }

    public async componentDidMount()
    {
        if (this.props.fetchScoreboard)
        {
            this.props.fetchScoreboard();
        }
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
