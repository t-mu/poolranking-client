import * as React from 'react';
import './Match.css';

import * as MatchModel from '../../models/match';

interface Props
{
    match: MatchModel.Match;
}

class Match extends React.Component<Props>
{
    render()
    {
        return (
            <tr key={this.props.match.id}>
                <th>{this.props.match.winner}</th>
                <th>vs.</th>
                <th>{this.props.match.loser}</th>
            </tr>
        );
    }
}

export default Match;
