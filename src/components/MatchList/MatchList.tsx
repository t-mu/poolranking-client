import * as React from "react";
const reactRouter = require("react-router-dom");
let { Link } = reactRouter;

import Match from "../Match/Match";
import * as MatchModel from "../../models/match";

import "./MatchList.css";

interface Props
{
    matches: MatchModel.Match[];
}

class MatchList extends React.Component<Props>
{
    constructor(props: Props)
    {
        super(props);
    }

    public render()
    {
        const mappedMatches = this.props.matches.map((match: MatchModel.Match, index: number) => <Match key={index} match={match} />);

        return (
            <div className="MatchList">

                {/* matchlist header */}
                <div className="columns">
                    <span className="column is-two-fifths">WINNER</span>
                    <span className="column is-one-fifth"></span>
                    <span className="column is-two-fifths">LOSER</span>
                </div>

                {/* matches */}
                {mappedMatches}

                <Link
                    to="matches/new"
                    className="navigation__link column"
                >
                    <button>New match</button>
                </Link>
            </div>
        );
    }
}

export default MatchList;
