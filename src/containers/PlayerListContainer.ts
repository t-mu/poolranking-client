import { connect } from "react-redux";
import PlayerList from "../components/PlayerList/PlayerList";
import { PlayerModel } from "../models/player";

export interface StateProps
{
    players: PlayerModel[];
}

function mapStateToProps(state: any): StateProps
{
    return {
        players: state.players
    };
}

// function mapDispatchToProps(dispatch: any): DispatchProps
// {
//     return { };
// }

const PlayerListContainer = connect<StateProps>(mapStateToProps)(PlayerList);

export default PlayerListContainer;
