import * as React from 'react';
import './Player.css';

interface Props
{
    username: string;
}

class Player extends React.Component<Props> {

    constructor(props: Props)
    {
        super(props);
    }

    render() {
        return (
            <div className="Player">
                <h1>My name is: {this.props.username}</h1>
            </div>
        );
    }
}

export default Player;
