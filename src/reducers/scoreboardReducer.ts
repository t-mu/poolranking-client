import { ScoreboardActionType } from "../actions/scoreboardActions";
import { ReducerAction } from "../actions/actions";

export default function scoreboardReducer(state = [], action: ReducerAction<ScoreboardActionType, any>)
{
    switch (action.type)
    {
        case ScoreboardActionType.Fetch:
            if (action.payload)
            {
                return action.payload;
            }
            break;
        default:
            return state;
    }
}
