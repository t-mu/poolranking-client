// vendor imports
import * as React from "react";
const reactRouter = require("react-router-dom");
let { withRouter } = reactRouter;

import { PlayerModel } from "../../models/player";
import { StateProps, DispatchProps } from "../../containers/AddPlayerContainer";

// component imports
import "./AddPlayer.css";

class AddPlayer extends React.Component<StateProps & DispatchProps> {

    public players: PlayerModel[] = [];
    public userName = "";

    constructor(props: StateProps & DispatchProps)
    {
        super(props);
    }

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
