import * as React from 'react';
import './Match.css';


interface Props
{
    model: any[];
}

class Match extends React.Component<Props> {
    render() {
        // let mappedPlayers = [];

        // if (this.props.players)
        // {
        //     mappedPlayers = this.props.players.map((player: any, index: number) => <Player key={index} username={player.username} />);
        // }


        return (
            <div className="Match">
                <h1>Match: xxx</h1>
                <ul>
                    match props here etc
                </ul>
            </div>
        );
    }
}

export default Match;
