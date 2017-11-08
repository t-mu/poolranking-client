import { PlayerModel } from "./models/player";
// import { CreatePlayerCommand } from './models/createPlayerCommand';
import { Match } from "./models/match";
// import { CreateMatchCommand } from './models/createMatchCommand';
import { ScoreboardPlayer } from "./models/scoreboardPlayer";

const mockPlayers: PlayerModel[] = [
    { id: "p1", name: "player1", rating: 1505 },
    { id: "p2", name: "player2", rating: 1495 },
    { id: "p3", name: "player3", rating: 1475 }
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
    { id: "m1", winnerId: "p1", winner: "player1", loserId: "p2", loser: "player2" },
    { id: "m3", winnerId: "p1", winner: "player1", loserId: "p2", loser: "player2" },
    { id: "m4", winnerId: "p2", winner: "player2", loserId: "p3", loser: "player3" },
    { id: "m5", winnerId: "p2", winner: "player2", loserId: "p3", loser: "player3" },
]

export default class ApiService
{

    public async getScoreboard(): Promise<ScoreboardPlayer[]>
    {
        return mockScoreboardPlayers;
    }

    public async createPlayer(name: string): Promise<PlayerModel>
    {
        return { id: "newId", name: name, rating: 1500 };
    }

    public async getPlayer(id: string): Promise<PlayerModel | null>
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

    public async getPlayers(): Promise<PlayerModel[]>
    {
        return mockPlayers;
    }

    public async createMatch(winnerId: string, loserId: string): Promise<Match>
    {
        return { id: "newMatch", winnerId: "p1", winner: "player1", loserId: "p2", loser: "player2" };
    }

    public async getMatch(id: string): Promise<Match | null>
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

    public async getMatches(): Promise<Match[]>
    {
        return mockMatches;
    }

}

