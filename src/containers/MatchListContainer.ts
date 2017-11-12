import { connect } from "react-redux";
import { addMatch } from "../actions/matchesActions";
import MatchList from "../components/MatchList/MatchList";
import { Match } from "../models/match";

import ApiService from "../apiMockService";

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
        addMatch: async (winnerId: string, loserId: string) =>
        {
            let match = await ApiService.createMatch(winnerId, loserId);

            if (match) {
                // only update state if match is returned
                dispatch(addMatch(match));
            }
        }
    };
}

const MatchListcontainer = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(MatchList);

export default MatchListcontainer;
