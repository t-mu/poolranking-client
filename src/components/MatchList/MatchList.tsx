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
        this.forceUpdate();
    }

    public render()
    {
        const mappedMatches = this.matches.map((match: any, index: number) => <Match key={index} match={match} />);
        const Matches = (
            <div className="Dashboard">
                {this.loading ? <p>Loading...</p> :
                    <table className="table container is-bordered is-striped">
                        <thead>
                            <tr>
                                <th>Winner</th>
                                <th></th>
                                <th>Loser</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Winner</th>
                                <th></th>
                                <th>Loser</th>
                            </tr>
                        </tfoot>
                        <tbody>
                        {mappedMatches}
                        </tbody>
                    </table>}
            </div>
        );

        return (
            <div className="MatchList">
                {this.loading ? <p>Loading...</p> : Matches}
            </div>
        );
    }
}

export default MatchList;
