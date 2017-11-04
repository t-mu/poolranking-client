import { connect } from "react-redux";
import { addMatch } from "../actions/matchesActions";
import AddMatch from "../components/AddMatch/AddMatch";

function mapStateToProps(state: any)
{
    return {
        matches: state.matches
    }
}

function mapDispatchToProps(dispatch: Function)
{
    return {
        addMatch: (match: any) => {
            dispatch(addMatch(match))
        }
    }
}

const AddMatchContainer = connect<any, any>(mapStateToProps, mapDispatchToProps)(AddMatch);

export default AddMatchContainer;
