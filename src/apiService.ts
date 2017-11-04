import axios from 'axios';
import { AxiosResponse } from 'axios';

import Player from './models/Player';

export class ApiService
{
    private endpoints: Endpoints;
    private baseUrl: string;

    constructor()
    {
        axios.get<Endpoints>('/endpoints')
            .then((response: AxiosResponse<Endpoints>) =>
            {
                this.endpoints = response.data;
                this.baseUrl = this.endpoints.apiGatewayHost + ':' + this.endpoints.apiGatewayPort;
            });
    }

    public getPlayers(): Promise<Player[]>
    {
        return axios.get<Player[]>(this.baseUrl + '/api/players')
            .then((response: AxiosResponse<Player[]>) =>
            {
                return response.data;
            });
    }
}

interface Endpoints
{
    apiGatewayHost: string;
    apiGatewayPort: string;
}
