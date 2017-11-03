import { connect } from "react-redux";
import { createPlayer } from "../actions/playersActions";
import Dashboard from "../components/Dashboard/Dashboard";

// interface StateProps
// {
//     players: any[];
// }

// interface DispatchProps
// {
//     createPlayer: Function;
// }

function mapStateToProps(state: any)
{
    return {
        players: state.players
    }
}

function mapDispatchToProps(dispatch: Function)
{
    return {
        createPlayer: (username: string) => {
            dispatch(createPlayer(username))
        }
    }
}

const DashboardContainer = connect<any, any>(mapStateToProps, mapDispatchToProps)(Dashboard);

export default DashboardContainer;
