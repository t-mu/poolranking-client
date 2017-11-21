import * as React from "react";
const reactRouter = require("react-router-dom");
let { Link } = reactRouter;

import MatchListRow from "./MatchListRow/MatchListRow";
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
        const mappedMatches = this.props.matches.map((match: MatchModel.Match, index: number) =>
            <MatchListRow key={index} match={match} />);

        return (
            <section className="MatchList">

                <div className="datatable">
                    <div className="datatable__row datatable__row--header columns is-mobile">
                        <span className="datatable__cell column is-two-fifths">Winner</span>
                        <span className="datatable__cell column is-one-fifth" />
                        <span className="datatable__cell column is-two-fifths">Loser</span>
                    </div>
                    {mappedMatches}
                </div>

                <Link
                    to="matches/new"
                    className="column"
                >
                    <button className="button">New match</button>
                </Link>
            </section>
        );
    }
}

export default MatchList;
