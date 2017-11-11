// vendor imports
import * as React from "react";
const reactRouter = require("react-router-dom");
let { Link } = reactRouter;

// component imports
import "./PlayerList.css";
import Player from "../Player/Player";
import { StateProps, DispatchProps } from "../../containers/PlayerListContainer";

import { PlayerModel } from "../../models/player";

export class PlayerList extends React.Component<StateProps & DispatchProps>
{
    public loading = true;

    constructor(props: StateProps & DispatchProps)
    {
        super(props);
    }

    public render()
    {
        return (
            <div className="PlayerList">
                {this.props.players.map((player: PlayerModel, index: number) => <Player key={index} username={player.name} />)}
                <Link
                    to="players/new"
                    className="navigation__link column"
                >
                    <button>New player</button>
                </Link>
            </div>
        );
    }
}

export default PlayerList;
