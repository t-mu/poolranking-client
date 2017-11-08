// vendor imports
import * as React from "react";
const reactRouter = require("react-router-dom");
let { Link } = reactRouter;
// import { connect } from "react-redux";

// component imports
import "./PlayerList.css";
import Player from "../Player/Player";

import ApiService from "../../apiMockService";
// import { fetchPlayers } from "../../actions/playersActions";
// import { PlayerModel } from "../../models/player";

interface Props
{
    players: any[];
    match: any;
}

interface DispatchProps
{
    fetchPlayers: Function;
}

export class PlayerList extends React.Component<Props & DispatchProps>
{
    public loading = true;
    public players: any[] = [];

    public async componentDidMount()
    {
        let api = new ApiService();
        this.players = await api.getPlayers();
        this.props.fetchPlayers(this.players);
        this.loading = false;
        this.forceUpdate();
    }

    public render()
    {
        const mappedPlayers = this.props.players.map((player: any, index: number) => <Player key={index} username={player.name} />);
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

// function mapStateToProps(state: any)
// {
//     return {
//         players: state.players
//     };
// }

// function mapDispatchToProps(dispatch: Function)
// {
//     return {
//         fetchPlayers: (players: PlayerModel[]) =>
//         {
//             dispatch(fetchPlayers(players));
//         }
//     };
// }

// const PlayerListContainer = connect<any, any>(mapStateToProps, mapDispatchToProps)(PlayerList);

// export { PlayerListContainer };
