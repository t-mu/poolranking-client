import { PlayerActionType } from "./playersActions";
import { MatchActionType } from "./matchesActions";
import { ScoreboardActionType } from "./scoreboardActions";

export interface ReducerAction<TType extends PlayerActionType | MatchActionType | ScoreboardActionType, TPayload>
{
    type: TType;
    payload: TPayload;
}
