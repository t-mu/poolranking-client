import { connect } from "react-redux";
import { createPlayer } from "../actions/playersActions";
import AddPlayer from "../components/AddPlayer/AddPlayer";
import { PlayerModel } from "../models/player";
import ApiService from "../apiMockService";

export interface StateProps
{
    players: PlayerModel[];
    history: any;
}

export interface DispatchProps
{
    createPlayer: Function;
}

function mapStateToProps(state: any): StateProps
{
    return {
        players: state.players,
        history: state.history
    };
}

function mapDispatchToProps(dispatch: any): DispatchProps
{
    return {
        createPlayer: async (username: string) =>
        {
            const player: PlayerModel = await ApiService.createPlayer(username);

            if (player)
            {
                // update state if player is returned
                dispatch(createPlayer(player));
            }
        }
    };
}

const AddPlayerContainer = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(AddPlayer);

export default AddPlayerContainer;
