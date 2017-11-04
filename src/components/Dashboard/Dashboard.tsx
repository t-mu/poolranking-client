import * as React from 'react';

import './Dashboard.css';
import PlayerList from "../PlayerList/PlayerList";

// http://lthackathon2017api.westeurope.cloudapp.azure.com:3333/api/players


interface Props
{
    players: any[];
    createPlayer: Function;
}

class Dashboard extends React.Component<Props> {

    public userName: string = "";

    public updateUserName(e: any): void
    {
        this.userName = e.target.value;
    }

    public createPlayer()
    {
        this.props.createPlayer(this.userName);
    }

    render() {
        return (
            <div className="Dashboard">
                <h1>Dashboard here</h1>
                <div>
                    <input type="text" onChange={this.updateUserName.bind(this)}/>
                    <button onClick={this.createPlayer.bind(this)}>Add player</button>
                </div>
                <PlayerList players={this.props.players} />
            </div>
        );
    }
}

export default Dashboard;
