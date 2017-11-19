import { PlayerModel } from "./player";
import { Match } from "./match";
import { ScoreboardPlayer } from "./scoreboardPlayer";

// application "store", or entire state
export interface Store
{
    players?: PlayerModel[];
    matches?: Match[];
    scoreboard?: ScoreboardPlayer[];
    router?: any;
}
