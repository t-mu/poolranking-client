import { PlayerModel } from "../models/player";

import ApiService from "../apiMockService";

export const enum PlayerActionType {
    Create = "CREATE_PLAYER",
    Modify = "MODIFY_PLAYER",
    Fetch = "FETCH_PLAYERS"
}

export const createPlayer = (username: string): Function =>
{
    return async function(dispatch: any): Promise<void>
    {
        let player: PlayerModel = await ApiService.createPlayer(username);
        dispatch({ type: PlayerActionType.Create, payload: player });
    };

};

export const fetchPlayers = (): Function =>
{
    return async function(dispatch: any): Promise<void>
    {
        let players: PlayerModel[] = await ApiService.getPlayers();
        dispatch({ type: PlayerActionType.Fetch, payload: players });
    };
};
