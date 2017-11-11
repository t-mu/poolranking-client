import { connect } from "react-redux";
import { addMatch } from "../actions/matchesActions";
import AddMatch from "../components/AddMatch/AddMatch";
import { PlayerModel } from "../models/player";

import ApiService from "../apiMockService";
const api = new ApiService();

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
        addMatch: async (winnerId: string, loserId: string) =>
        {
            let match = await api.createMatch(winnerId, loserId);

            if (match) {
                // only update state if match is returned
                dispatch(addMatch(match));
            }
        }
    };
}

const AddMatchContainer = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(AddMatch);

export default AddMatchContainer;
