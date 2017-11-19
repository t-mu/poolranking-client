import { PlayerActionType } from "../actions/playersActions";
import { ReducerAction } from "../actions/actions";

export default function playersReducer(state: any = [], action: ReducerAction<PlayerActionType, any>)
{
    switch (action.type)
    {
        case PlayerActionType.Create:
            return [...state, action.payload];
        case PlayerActionType.Fetch:
            return action.payload ? action.payload : state;
        default:
            return state;
    }
}
