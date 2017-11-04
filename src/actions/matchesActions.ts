import { ReducerAction } from "./actions";


export const enum MatchActionType {
    Add = "ADD_MATCH"
}

export const addMatch = (match: any): ReducerAction<MatchActionType, any> =>
{
    // api call for new match
    // payload: newly created match
    return {
        type: MatchActionType.Add,
        payload: {
            winner: match.winnerId,
            loser: match.loserId
        }
    }
}
