import { ReducerAction } from "./actions";
import { ScoreboardPlayer } from "../models/scoreboardPlayer";

export const enum ScoreboardActionType {
    Fetch = "FETCH_SCOREBOARD"
}

export const fetchScoreboard = (scoreboard: ScoreboardPlayer[]): ReducerAction<ScoreboardActionType, any> =>
{
    return {
        type: ScoreboardActionType.Fetch,
        payload: scoreboard
    };
};
