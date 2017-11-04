import * as React from 'react';

import './MatchList.css';
import Match from '../Match/Match';

import ApiService from '../../apiService';
import * as MatchModel from '../../models/match';

interface Props
{
    matches: any[];
}

class MatchList extends React.Component<Props>
{
    public loading = true;
    public matches: MatchModel.Match[] = [];

    public async componentDidMount()
    {
        let api = new ApiService();
        this.matches = await api.getMatches();
        this.loading = false;
    }

    public render()
    {
        const mappedMatches = this.matches.map((match: any, index: number) => <Match key={index} match={match} />);
        const Matches = (
            <div>
                <h1>Here are the matches:</h1>
                <ul>
                    {mappedMatches}
                </ul>
            </div>
        );

        return (
            <div className="MatchList">
                {this.loading ? <p>Loading..</p> : Matches}
            </div>
        );
    }
}

export default MatchList;
