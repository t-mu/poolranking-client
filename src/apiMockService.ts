import { PlayerModel } from "./models/player";
// import { CreatePlayerCommand } from './models/createPlayerCommand';
import { Match } from "./models/match";
// import { CreateMatchCommand } from './models/createMatchCommand';
import { ScoreboardPlayer } from "./models/scoreboardPlayer";

const mockPlayers: PlayerModel[] = [
    { id: "1", name: "player1", rating: 1505 },
    { id: "2", name: "player2", rating: 1495 },
    { id: "3", name: "player3", rating: 1475 }
];

const mockScoreboardPlayers: ScoreboardPlayer[] = [
    {   player: mockPlayers[0],
        wins: "3",
        losses: "0"
    },
    {   player: mockPlayers[1],
        wins: "2",
        losses: "3"
    },
    {   player: mockPlayers[2],
        wins: "0",
        losses: "5"
    }
];

const mockMatches: Match[] = [
    { id: "1", winnerId: "1", winner: "player1", loserId: "2", loser: "player2" }
];

export default class ApiService
{
    private static latestPlayerId: number = 4;
    private static latestMatchId: number = 1;

    public static async getScoreboard(): Promise<ScoreboardPlayer[]>
    {
        return mockScoreboardPlayers;
    }

    public static async createPlayer(name: string): Promise<PlayerModel>
    {
        let nextPlayerId = ApiService.latestPlayerId++;
        let newPlayer = {
            id: nextPlayerId.toString(),
            name: name,
            rating: 1500
        };
       // mockPlayers.push(newPlayer);

        return newPlayer;
    }

    public static async getPlayer(id: string): Promise<PlayerModel>
    {
        for (let player of mockPlayers)
        {
            if (player.id === id)
            {
                return player;
            }
        }

        return null;
    }

    public static async getPlayers(): Promise<PlayerModel[]>
    {
        return mockPlayers;
    }

    public static async createMatch(winnerId: string, loserId: string): Promise<Match>
    {
        let winner: PlayerModel = await this.getPlayer(winnerId);
        let loser: PlayerModel =  await this.getPlayer(loserId);
        let nextMatchId = ApiService.latestMatchId++;

        const newMatch = {
            id: nextMatchId.toString(),
            winnerId: winner.id,
            winner: winner.name,
            loserId: loser.id,
            loser: loser.name
        };
        // mockMatches.push(newMatch);

        return newMatch;
    }

    public static async getMatch(id: string): Promise<Match | null>
    {
        for (let match of mockMatches)
        {
            if (match.id === id)
            {
                return match;
            }
        }

        return null;
    }

    public static async getMatches(): Promise<Match[]>
    {
        return mockMatches;
    }

}
