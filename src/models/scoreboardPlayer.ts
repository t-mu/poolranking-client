import { PlayerModel } from "./player";

export interface ScoreboardPlayer
{
    player: PlayerModel;
    wins: string;
    losses: string;
}
