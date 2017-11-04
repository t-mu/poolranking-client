// vendor imports
import * as React from 'react';
// import * as axios from 'axios';

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
    constructor(props: any)
    {
        super(props);

        let api = new ApiService();
        api.getPlayers()
            .then((players: PlayerModel.Player[]) =>
            {
                console.log(players);
            });

        // axios.default.get('http://lthackathon2017api.westeurope.cloudapp.azure.com:3333/api/players')
        //     .then((response) =>
        //     {
        //         console.log(response);
        //     });
    }

    public render()
    {
        let mappedPlayers: any[] = [];

        if (this.props.players)
        {
            mappedPlayers = this.props.players.map((player: any, index: number) => <Player key={index} username={player.username} />);
        }

        return (
            <div className="PlayerList">
                <h1>Here are the players:</h1>
                <ul>
                    {mappedPlayers}
                </ul>
            </div>
        );
    }
}

export default PlayerList;
