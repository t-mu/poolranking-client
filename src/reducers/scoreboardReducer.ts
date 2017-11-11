import { ScoreboardActionType } from "../actions/scoreboardActions";
import { ReducerAction } from "../actions/actions";

export default function scoreboardReducer(state: any = [], action: ReducerAction<ScoreboardActionType, any>)
{
    switch (action.type)
    {
        case ScoreboardActionType.Fetch:
            return action.payload ? action.payload : state;
        default:
            return state;
    }
}
