// vendor imports
import * as React from "react";
const reactRouter = require("react-router-dom");
let { Link } = reactRouter;

// component imports
import "./PlayerList.css";
import PlayerListRow from "./PlayerListRow/PlayerListRow";

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
        const mappedPlayers = this.props.players.map((player: PlayerModel, index: number) =>
            <PlayerListRow key={index} player={player} />);

        return (
            <section className="PlayerList">

                <div className="datatable">
                    <div className="datatable__row datatable__row--header columns is-mobile">
                        <span className="datatable__cell column">Player</span>
                        <span className="datatable__cell column">Rating</span>
                    </div>
                    {mappedPlayers}
                </div>

                <Link
                    to="players/new"
                    className=""
                >
                    <button className="button">Add</button>
                </Link>

            </section>
        );
    }
}

export default PlayerList;
