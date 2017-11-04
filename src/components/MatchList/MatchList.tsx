import * as React from 'react';
import './MatchList.css';


interface Props
{
    matches: any[];
}

class MatchList extends React.Component<Props> {
    render() {
        // let mappedPlayers = [];

        // if (this.props.players)
        // {
        //     mappedPlayers = this.props.players.map((player: any, index: number) => <Player key={index} username={player.username} />);
        // }


        return (
            <div className="MatchList">
                <h1>All matches</h1>
                <ul>
                    mapped matches come here
                </ul>
            </div>
        );
    }
}

export default MatchList;
