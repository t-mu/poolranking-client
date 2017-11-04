// vendor imports
import * as React from 'react';
import ApiService from '../../apiService';
import { ScoreboardPlayer } from '../../models/scoreboardPlayer';

// component imports
import './Dashboard.css';


interface Props
{
    players: any[];
}

class Dashboard extends React.Component<Props> {

    public players: ScoreboardPlayer[] = [];
    public loading = true;

    public async componentDidMount()
    {
        let api = new ApiService();
        this.players = await api.getScoreboard();
        this.loading = false;
        this.forceUpdate();
    }

    render() {
        return (
            <div className="Dashboard">
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
                        {this.players.map((player) => {
                            return (
                                <tr key={player.playerId}>
                                    <th>{player.rating}</th>
                                    <th>{player.playerName}</th>
                                    <th>{player.wins}</th>
                                    <th>{player.losses}</th>
                                    <th>{parseInt(player.wins, 10) / parseInt(player.losses, 10)}</th>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>}
            </div>
        );
    }
}

export default Dashboard;
