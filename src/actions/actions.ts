import { PlayerActionType } from "./playersActions"


export interface ReducerAction<TType extends PlayerActionType, TPayload>
{
    type: TType;
    payload: TPayload;
}

