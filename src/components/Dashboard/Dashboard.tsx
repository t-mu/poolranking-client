// vendor imports
import * as React from 'react';

// componetn imports
import './Dashboard.css';


interface Props
{
    players: any[];
    createPlayer: Function;
}

interface Player
{
    score: string;
    name: string;
    wins: string;
    loses: string;
}

class Dashboard extends React.Component<Props> {

    // public userName: string = "";
    public players: Player[] = [];
    public loading = true;

    public async componentDidMount()
    {
        // const response = await axios.get('http://lthackathon2017api.westeurope.cloudapp.azure.com:3333/api/players');
        // mock data
        const response = {
            data: [
                {
                    score: "0",
                    name: "Anssi",
                    wins: "0",
                    loses: "2"
                },
                {
                    score: "2",
                    name: "Teemu",
                    wins: "2",
                    loses: "6"
                },
                {
                    score: "2",
                    name: "Johannes",
                    wins: "5",
                    loses: "1"
                }
            ]
        };
        this.players = response.data;
        this.loading = false;
        this.forceUpdate();
    }

    // public updateUserName(e: any): void
    // {
    //     this.userName = e.target.value;
    // }

    // public createPlayer()
    // {
    //     if (this.userName && this.userName.trim() !== "")
    //     {
    //         this.props.createPlayer(this.userName);
    //     }
    // }

    render() {
        return (
            <div className="Dashboard container">
                <h1>Scoreboard</h1>
                {/* <div>
                    <input type="text" onChange={this.updateUserName.bind(this)}/>
                    <button onClick={this.createPlayer.bind(this)}>Add player</button>
                </div> */}
                {this.loading ? <p>loading</p> :
                    <table className="table container">
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
                        {this.players.map((player, index) => {
                            return (
                                <tr key={index}>
                                    <th>{player.score}</th>
                                    <th>{player.name}</th>
                                    <th>{player.wins}</th>
                                    <th>{player.loses}</th>
                                    <th>{parseInt(player.wins, 10) / parseInt(player.loses, 10)}</th>
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
