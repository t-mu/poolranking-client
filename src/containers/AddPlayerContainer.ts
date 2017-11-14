import { connect } from "react-redux";
import { createPlayer } from "../actions/playersActions";
import AddPlayer from "../components/AddPlayer/AddPlayer";
import { PlayerModel } from "../models/player";

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
        createPlayer: (username: string) =>
        {
            dispatch(createPlayer(username));
        }
    };
}

const AddPlayerContainer = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(AddPlayer);

export default AddPlayerContainer;
