import * as React from "react";
const reactRouter = require("react-router-dom");
let { Link } = reactRouter;
import "./Header.css";

interface Props
{
}

class Header extends React.Component<Props> {
    render() {
        return (
            <header className="columns is-mobile level">
                <h1 className="column level-left">PoolRanking</h1>
                <nav className="navigation column is-mobile level-right">
                    <div className="columns is-mobile">
                    <Link to="/"
                        className="navigation__link column">Scoreboard
                    </Link>
                    <Link to="/matches"
                        className="navigation__link column">Matches
                    </Link>
                    <Link to="/players"
                        className="navigation__link column">Players
                    </Link>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
