import * as React from "react";
import "./AddMatch.css";
const reactRouter = require("react-router-dom");
let { withRouter} = reactRouter;

import { PlayerModel } from "../../models/player";
import { StateProps, DispatchProps } from "../../containers/AddMatchContainer";

class AddMatch extends React.Component<StateProps & DispatchProps>
{
    public players: PlayerModel[];
    public winnerId: string;
    public loserId: string;

    constructor(props: StateProps & DispatchProps)
    {
        super(props);
    }

    public async addMatch(): Promise<void>
    {
        if (this.winnerId && this.loserId)
        {
            this.props.addMatch(this.winnerId, this.loserId);
            this.props.history.push("/matches");
        }
    }

    public updateMatchWinner(e: any)
    {
        this.winnerId = e.target.value;
    }

    public updateMatchLoser(e: any)
    {
        this.loserId = e.target.value;
    }

    render() {

        const selectablePlayers = this.props.players.map(player =>
            <option key={player.id} value={player.id}>{player.name}</option>);

        return (
            <div className="AddMatch">
                <h1>Add a Match</h1>

                <div className="match-container">
                    <div className="columns">
                        <div className="column">
                            <select
                                name="winner"
                                id="winner-selection"
                                onChange={this.updateMatchWinner.bind(this)}
                                value={this.winnerId}
                            >
                                {selectablePlayers}
                            </select>
                        </div>
                        <button onClick={this.addMatch.bind(this)}>ADD MATCH!</button>
                        <div className="column">
                            <select
                                name="loser"
                                id="loser-selection"
                                onChange={this.updateMatchLoser.bind(this)}
                                value={this.loserId}
                            >
                                {selectablePlayers}
                            </select>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(AddMatch);
