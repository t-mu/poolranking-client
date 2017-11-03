import * as React from 'react';
import './PlayerList.css';
import Player from "../Player/Player";


class PlayerList extends React.Component {

    constructor(public props: any)
    {
        super(props);
    }

    render() {
        let mappedPlayers = [];

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
