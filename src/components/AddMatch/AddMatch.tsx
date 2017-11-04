import * as React from 'react';
import './AddMatch.css';
const reactRouter = require("react-router-dom");
let { withRouter} = reactRouter;


import ApiService from "../../apiService";
import { PlayerModel } from "../../models/player"

interface Props
{
    history: any;
}

class AddMatch extends React.Component<Props> {

    public players: PlayerModel[];
    public loading: boolean = true;
    public winnerId: string;
    public loserId: string;

    public async componentDidMount()
    {
        const api = new ApiService();
        this.players = await api.getPlayers();
        this.loading = false;
        this.forceUpdate();
    }

    public addMatch()
    {
        const api = new ApiService();
        api.createMatch(this.winnerId, this.loserId)
            .then(() => {
                this.props.history.push("/matches");
            });
    }

    public updateMatchWinner(e: any)
    {
        this.winnerId = this.getPlayerByName(e.target.value);
    }

    public updateMatchLoser(e: any)
    {
        this.loserId = this.getPlayerByName(e.target.value);
    }

    public getPlayerByName(name: string): string
    {
        return this.players.filter(player => player.name === name)[0].id;
    }

    render() {

        return (
            <div className="AddMatch">
                <h1>Add a Match</h1>

                {this.loading ? <div>Loading...</div> :

                <div className="match-container">
                    <div className="columns">
                        <div className="column">
                            <select name="winner"
                                id="winnder-selection"
                                onChange={this.updateMatchWinner.bind(this)}>
                                {this.players.map(player => <option data-id={player.id}>{player.name}</option>)}
                            </select>
                        </div>
                        <button onClick={this.addMatch.bind(this)}>ADD MATCH!</button>
                        <div className="column">
                            <select name="loser"
                                id="loser-selection"
                                onChange={this.updateMatchLoser.bind(this)}>
                                {this.players.map(player => <option data-id={player.id}>{player.name}</option>)}
                            </select>
                        </div>
                    </div>
                </div>}

            </div>
        );
    }
}

export default withRouter(AddMatch);
