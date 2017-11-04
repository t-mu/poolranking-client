import * as React from 'react';
const reactRouter = require('react-router-dom');
let { Link } = reactRouter;
import './Navigation.css';


interface Props
{
}

class Navigation extends React.Component<Props> {
    render() {
        return (
            <nav className="navigation columns is-mobile">
                <Link to="/"
                    activeClassName="navigation__link--active"
                    className="navigation__link column">Scoreboard
                </Link>

                <Link to="/matches"
                    activeClassName="nav__link--active"
                    className="navigation__link column">Matches
                </Link>

                <Link to="/players"
                    activeClassName="nav__link--active"
                    className="navigation__link column">Players
                </Link>
            </nav>
        );
    }
}

export default Navigation;
