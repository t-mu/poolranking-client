import { connect } from "react-redux";
import { createPlayer } from "../actions/playersActions";
import PlayerList from "../components/PlayerList/PlayerList";
import { PlayerModel } from "../models/player";
import ApiService from "../apiMockService";

const api = new ApiService();

export interface StateProps
{
    players: PlayerModel[];
}

export interface DispatchProps
{
    createPlayer: Function;
}

function mapStateToProps(state: any): StateProps
{
    return {
        players: state.players
    };
}

function mapDispatchToProps(dispatch: any): DispatchProps
{
    return {
        createPlayer: async (username: string) =>
        {
            const player = await api.createPlayer(username);

            if (player)
            {
                // update state if player is returned
                dispatch(createPlayer(player));
            }
        }
    };
}

const PlayerListContainer = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(PlayerList);

export default PlayerListContainer;
