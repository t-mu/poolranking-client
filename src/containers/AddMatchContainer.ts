import { connect } from "react-redux";
import { addMatch } from "../actions/matchesActions";
import AddMatch from "../components/AddMatch/AddMatch";
import { PlayerModel } from "../models/player";

export interface StateProps
{
    players: PlayerModel[];
    history: any;
}

export interface DispatchProps
{
    addMatch: Function;
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
        addMatch: (winnerId: string, loserId: string) =>
        {
            dispatch(addMatch(winnerId, loserId));
        }
    };
}

const AddMatchContainer = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(AddMatch);

export default AddMatchContainer;
