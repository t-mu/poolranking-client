// vendor imports
import * as React from "react";
const reactRouter = require("react-router-dom");
let { Link } = reactRouter;

// component imports
import "./PlayerList.css";
import Player from "../Player/Player";

import { PlayerModel } from "../../models/player";

interface Props
{
    players: PlayerModel[];
}

export class PlayerList extends React.Component<Props>
{
    public loading = true;

    constructor(props: Props)
    {
        super(props);
    }

    public render()
    {
        const mappedPlayers = this.props.players ? this.props.players.map((player: PlayerModel) =>
             <li key={player.id}><Player username={player.name} /></li>) : null;

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
