import { ReducerAction } from "./actions";
import { PlayerModel } from "../models/player";

export const enum PlayerActionType {
    Create = "CREATE_PLAYER",
    Modify = "MODIFY_PLAYER",
    Fetch = "FETCH_PLAYERS"
}

export const createPlayer = (player: PlayerModel): ReducerAction<PlayerActionType, any> =>
{
    return {
        type: PlayerActionType.Create,
        payload: player
    };
}

export const fetchPlayers = (): ReducerAction<PlayerActionType, any> =>
{
    return {
        type: PlayerActionType.Fetch,
        payload: null
    };
}
