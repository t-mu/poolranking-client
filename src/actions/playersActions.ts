import { ReducerAction } from "./actions";
import { PlayerModel } from "../models/player";


export const enum PlayerActionType {
    Create = "CREATE_PLAYER",
    Modify = "MODIFY_PLAYER",
    Fetch = "FETCH_PLAYERS"
}

export const createPlayer = (name: string): ReducerAction<PlayerActionType, any> =>
{
    return {
        type: PlayerActionType.Create,
        payload: {
            username: name
        }
    }
}

export const fetchPlayers = (players: PlayerModel[]): ReducerAction<PlayerActionType, PlayerModel[]> =>
{
    return {
        type: PlayerActionType.Fetch,
        payload: players
    }
}
