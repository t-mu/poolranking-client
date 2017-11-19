import { MatchActionType } from "../actions/matchesActions";
import { ReducerAction } from "../actions/actions";

export default function matchesReducer(state: any = [], action: ReducerAction<MatchActionType, any>)
{
    switch (action.type)
    {
        case MatchActionType.Add:
            return [...state, action.payload];
        case MatchActionType.Fetch:
            return action.payload ? action.payload : state;
        default:
            return state;
    }
}
