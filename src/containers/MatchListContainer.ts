import { connect } from "react-redux";
import { addMatch } from "../actions/matchesActions";
import MatchList from "../components/MatchList/MatchList";
import { Match } from "../models/match";


export interface StateProps
{
    matches: Match[];
}

export interface DispatchProps
{
    addMatch: Function;
}

function mapStateToProps(state: any): StateProps
{
    return {
        matches: state.matches
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

const MatchListcontainer = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(MatchList);

export default MatchListcontainer;
