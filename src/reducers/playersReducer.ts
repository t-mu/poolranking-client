import { PlayerActionType } from "../actions/playersActions";
import { ReducerAction } from "../actions/actions"

export default function playersReducer(state = [], action: ReducerAction<PlayerActionType, any>)
{
    switch (action.type)
    {
        case PlayerActionType.Create:
            return [...state, action.payload];
        default:
            return state;
    }
}

