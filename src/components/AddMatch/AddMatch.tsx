import * as React from 'react';
import './AddMatch.css';

import ApiService from "../../apiService";
import { Player } from "../../models/player"

interface Props
{

}

class AddMatch extends React.Component<Props> {

    public match: any;
    public players: Player[];

    constructor()
    {
        super();
    }

    public async componentDidMount()
    {
        const api = new ApiService();
        this.players = await api.getPlayers();
    }
    // public addMatch()
    // {
    //     this.props.addMatch(this.match)
    // }

    // public updateMatchWinner(e: any)
    // {
    //     this.match.winner = e.target.value.id;
    // }

    // public updateMatchLoser(e: any)
    // {
    //     this.match.loser = e.target.value.id;
    // }

    render() {
        return (
            <div className="AddMatch">
                <h1>Add a Match</h1>
            </div>
        );
    }
}

export default AddMatch;
