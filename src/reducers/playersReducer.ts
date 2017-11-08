import { PlayerActionType } from "../actions/playersActions";
import { ReducerAction } from "../actions/actions";

export default function playersReducer(state: any = [], action: ReducerAction<PlayerActionType, any>)
{
    switch (action.type)
    {
        case PlayerActionType.Create:
            return [...state, action.payload];
        case PlayerActionType.Fetch:
            if (action.payload)
            {
                return action.payload;
            }
            break;
        default:
            return state;
    }
}
