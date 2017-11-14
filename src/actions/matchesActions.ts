import { Match } from "../models/match";

import ApiService from "../apiMockService";

export const enum MatchActionType {
    Add = "ADD_MATCH",
    Fetch = "FETCH_ALL_MATCHES"
}

export const addMatch = (winnerId: string, loserId: string): Function =>
{
    return async function(dispatch: any): Promise<void>
    {
        let match: Match = await ApiService.createMatch(winnerId, loserId);
        dispatch({ type: MatchActionType.Add, payload: match });
    };
};

export const fetchMatches = (): Function =>
{
    return async function(dispatch: any): Promise<void>
    {
        let matches: Match[] = await ApiService.getMatches();
        dispatch({ type: MatchActionType.Fetch, payload: matches });
    };
};
