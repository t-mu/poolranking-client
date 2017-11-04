import axios from 'axios';
import { AxiosResponse } from 'axios';

import { Player } from './models/player';
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

    public async getBaseUrl(): Promise<string>
    {
        const endpoints = await this.endpoints;
        const baseUrl = endpoints.apiGatewayHost + ':' + endpoints.apiGatewayPort;
        return baseUrl;
    }

    public async getPlayers(): Promise<Player[]>
    {
        const baseUrl = await this.getBaseUrl();
        const response = await axios.get<Player[]>(baseUrl + '/api/players');
        return response.data;
    }

    public async getScoreboard(): Promise<ScoreboardPlayer[]>
    {
        const baseUrl = await this.getBaseUrl();
        const response = await axios.get<ScoreboardPlayer[]>(baseUrl + '/api/scoreboard');
        return response.data;

    }
}

interface Endpoints
{
    apiGatewayHost: string;
    apiGatewayPort: string;
}
