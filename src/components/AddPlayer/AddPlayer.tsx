// vendor imports
import * as React from "react";
const reactRouter = require("react-router-dom");
let { withRouter } = reactRouter;

import { PlayerModel } from "../../models/player";
import { StateProps, DispatchProps } from "../../containers/AddPlayerContainer";

import "./AddPlayer.css";

class AddPlayer extends React.Component<StateProps & DispatchProps> {

    public players: PlayerModel[] = [];
    public userName: string = "";

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

    public submit(event: KeyboardEvent): void
    {
        if (event.keyCode === 13)
        {
            this.createPlayer();
        }
    }

    render() {
        return (
            <div className="AddPlayer">
                <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            placeholder="Insert username"
                            name="username"
                            autoFocus={true}
                            onChange={this.updateUsername.bind(this)}
                            onKeyDown={this.submit.bind(this)}
                        />
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <button
                            className="button is-primary"
                            onClick={this.createPlayer.bind(this)}
                        >Add new user!
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AddPlayer);
