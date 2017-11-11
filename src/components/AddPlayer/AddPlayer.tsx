// vendor imports
import * as React from "react";
const reactRouter = require("react-router-dom");
let { withRouter } = reactRouter;
// import ApiService from '../../apiService';
import { PlayerModel } from "../../models/player";

// component imports
import "./AddPlayer.css";

interface Props
{
    createPlayer: (username: string) => Promise<any>;
    history: any;
}

class AddPlayer extends React.Component<Props> {

    public players: PlayerModel[] = [];
    public userName = "";

    public async createPlayer()
    {
        if (this.userName && this.userName.trim() !== "")
        {
            await this.props.createPlayer(this.userName);
            this.props.history.push("/players");
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

export default withRouter(AddPlayer);
