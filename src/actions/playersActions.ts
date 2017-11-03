import { ReducerAction } from "./actions";


export const enum PlayerActionType {
    Create = "CREATE_PLAYER",
    Modify = "MODIFY_PLAYER"
}

export const createPlayer = (name: string):ReducerAction<PlayerActionType, any> =>
{
    return {
        type: PlayerActionType.Create,
        payload: {
            username: name
        }
    }
}
