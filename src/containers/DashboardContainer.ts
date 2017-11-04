import { connect } from "react-redux";
import Dashboard from "../components/Dashboard/Dashboard";


function mapStateToProps(state: any)
{
    return {
        players: state.players
    }
}

const DashboardContainer = connect<any>(mapStateToProps)(Dashboard);

export default DashboardContainer;
