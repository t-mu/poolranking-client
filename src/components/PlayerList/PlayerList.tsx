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
    constructor(props: Props)
    {
        super(props);
    }

    public render()
    {
        if (this.props.players)
        {
            return (
                <div className="PlayerList">
                    {this.props.players.map((player: PlayerModel, index: number) => <Player key={index} username={player.name} />)}
                    <Link
                        to="players/new"
                        className="column"
                    >
                        <button>New player</button>
                    </Link>
                </div>
            );
        }
        else
        {
            return <div>Loading...</div>;
        }
    }
}

export default PlayerList;
