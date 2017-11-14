import { ScoreboardPlayer } from "../models/scoreboardPlayer";

import ApiService from "../apiMockService";

export const enum ScoreboardActionType {
    Fetch = "FETCH_SCOREBOARD"
}

export const fetchScoreboard = (): Function =>
{
    return async function(dispatch: any): Promise<void>
    {
        let scoreboard: ScoreboardPlayer[] = await ApiService.getScoreboard();
        dispatch({ type: ScoreboardActionType.Fetch, payload: scoreboard });
    };
};
