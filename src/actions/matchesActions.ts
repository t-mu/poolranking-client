import { ReducerAction } from "./actions";
import { Match } from "../models/match";

export const enum MatchActionType {
    Add = "ADD_MATCH",
    Fetch = "FETCH_ALL_MATCHES"
}

export const addMatch = (match: any): ReducerAction<MatchActionType, any> =>
{
    return {
        type: MatchActionType.Add,
        payload: {
            winner: match.winnerId,
            loser: match.loserId
        }
    };
};

export const fetchMatches = (matches: Match[]): ReducerAction<MatchActionType, any> =>
{
    return {
        type: MatchActionType.Fetch,
        payload: matches
    };
};
