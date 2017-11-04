import { PlayerActionType } from "./playersActions"
import { MatchActionType } from "./matchesActions";

export interface ReducerAction<TType extends PlayerActionType | MatchActionType, TPayload>
{
    type: TType;
    payload: TPayload;
}

