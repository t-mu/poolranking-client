// vendor imports
import * as React from 'react';
// import ApiService from '../../apiService';
import { Player } from '../../models/player';

// component imports
import './AddPlayer.css';


interface Props
{
    createPlayer: Function;
}

class AddPlayer extends React.Component<Props> {

    public players: Player[] = [];
    public userName = "";

    public createPlayer()
    {
        if (this.userName && this.userName.trim() !== "")
        {
            this.props.createPlayer(this.userName);
        }
    }

    public updateUsername(event: any)
    {
        this.userName = event.target.value;
    }

    render() {
        return (
            <div className="AddPlayer">
                New player name: <input onChange={this.updateUsername.bind(this)} />
                <button onClick={this.createPlayer.bind(this)}>Create player</button>
            </div>
        );
    }
}

export default AddPlayer;
