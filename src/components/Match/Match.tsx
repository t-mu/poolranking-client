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
            <div className="Match">
                <div>Winner: {this.props.match.winner}</div>
                <div>Loser: {this.props.match.loser}</div>
                {/* <h1>Match: xxx</h1>
                <ul>
                    match props here etc
                </ul> */}
            </div>
        );
    }
}

export default Match;
