import { MatchActionType } from "../actions/matchesActions";
import { ReducerAction } from "../actions/actions"

export default function matchesReducer(state = [], action: ReducerAction<MatchActionType, any>)
{
    switch (action.type)
    {
        case MatchActionType.Add:
            return [...state, action.payload];
        default:
            return state;
    }
}

