import * as React from 'react';
import './Player.css';

interface Props
{
    username: string;
}

class Player extends React.Component<Props>
{
    public render()
    {
        return (
            <div className="Player">
                <h1>{this.props.username}</h1>
            </div>
        );
    }
}

export default Player;
