import axios from 'axios';
import { AxiosResponse } from 'axios';

import { PlayerModel } from './models/player';
import { CreatePlayerCommand } from './models/createPlayerCommand';
import { Match } from './models/match';
import { CreateMatchCommand } from './models/createMatchCommand';
import { ScoreboardPlayer } from './models/scoreboardPlayer';

export default class ApiService
{
    private endpoints: Promise<Endpoints>;

    constructor()
    {
        this.endpoints = axios.get<Endpoints>('/endpoints')
            .then((response: AxiosResponse<Endpoints>) =>
            {
                return response.data;
            });
    }

    public async getScoreboard(): Promise<ScoreboardPlayer[]>
    {
        const baseUrl = await this.getBaseUrl();
        const response = await axios.get<ScoreboardPlayer[]>(baseUrl + '/api/scoreboard');
        return response.data;
    }

    public async createPlayer(name: string): Promise<PlayerModel>
    {
        const baseUrl = await this.getBaseUrl();
        let command: CreatePlayerCommand = {
            name: name
        }
        const response = await axios.post<PlayerModel>(baseUrl + '/api/players', command);
        return response.data;
    }

    public async getPlayer(id: string): Promise<PlayerModel>
    {
        const baseUrl = await this.getBaseUrl();
        const response = await axios.get<PlayerModel>(baseUrl + '/api/players/' + id);
        return response.data;
    }

    public async getPlayers(): Promise<PlayerModel[]>
    {
        const baseUrl = await this.getBaseUrl();
        const response = await axios.get<PlayerModel[]>(baseUrl + '/api/players');
        return response.data;
    }

    public async createMatch(winnerId: string, loserId: string): Promise<Match>
    {
        const baseUrl = await this.getBaseUrl();

        let command: CreateMatchCommand = {
            winnerId: winnerId,
            loserId: loserId
        }

        const response = await axios.post<Match>(baseUrl + '/api/matches', command);
        return response.data;
    }

    public async getMatch(id: string): Promise<Match>
    {
        const baseUrl = await this.getBaseUrl();
        const response = await axios.get<Match>(baseUrl + '/api/matches/' + id);
        return response.data;
    }

    public async getMatches(): Promise<Match[]>
    {
        const baseUrl = await this.getBaseUrl();
        const response = await axios.get<Match[]>(baseUrl + '/api/matches');
        return response.data;
    }

    private async getBaseUrl(): Promise<string>
    {
        const endpoints = await this.endpoints;
        const baseUrl = endpoints.apiGatewayHost + ':' + endpoints.apiGatewayPort;
        return baseUrl;
    }
}

interface Endpoints
{
    apiGatewayHost: string;
    apiGatewayPort: string;
}
