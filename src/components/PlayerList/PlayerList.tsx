// vendor imports
import * as React from 'react';

// component imports
import './PlayerList.css';
import Player from '../Player/Player';

import ApiService from '../../apiService';
import * as PlayerModel from '../../models/player';


interface Props
{
    players: any[];
}

class PlayerList extends React.Component<Props>
{
    public loading = true;
    public players: any[] = [];

    public async componentDidMount()
    {
        let api = new ApiService();
        api.getPlayers()
            .then((players: PlayerModel.Player[]) =>
            {
                console.log(players);
            });
    }

    public render()
    {
        const mappedPlayers = this.players.map((player: any, index: number) => <Player key={index} username={player.name} />);
        const Players = (
            <div>
                <h1>Here are the players:</h1>
                <ul>
                    {mappedPlayers}
                </ul>
            </div>
        );

        return (
            <div className="PlayerList">
                {this.loading ? <p>Loading..</p> : Players}
            </div>
        );
    }
}

export default PlayerList;
