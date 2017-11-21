import * as React from "react";

import { PlayerModel } from "../../../models/player";

import "./PlayerListRow.css";

interface Props
{
    player: PlayerModel;
}

class PlayerListRow extends React.Component<Props>
{
    constructor(props: Props)
    {
        super(props);
    }

    public render()
    {
        return (
            <div className="PlayerListRow datatable__row columns is-mobile">
                <span className="datatable__cell column">{this.props.player.name}</span>
                <span className="datatable__cell column">{this.props.player.rating}</span>
            </div>
        );
    }
}

export default PlayerListRow;
