import { connect } from "react-redux";
import { addMatch } from "../actions/matchesActions";
import AddMatch from "../components/AddMatch/AddMatch";

import ApiService from "../apiMockService";
const api = new ApiService();

function mapStateToProps(state: any)
{
    return {
        players: state.players
    };
}

function mapDispatchToProps(dispatch: Function)
{
    return {
        addMatch: async (winnerId: string, loserId: string) => {
            let match = await api.createMatch(winnerId, loserId);
            dispatch(addMatch(match));
        }
    };
}

const AddMatchContainer = connect<any, any>(mapStateToProps, mapDispatchToProps)(AddMatch);

export default AddMatchContainer;
