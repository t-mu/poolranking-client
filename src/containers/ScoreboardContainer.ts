import { connect } from "react-redux";
import { fetchScoreboard } from "../actions/scoreboardActions";
import Scoreboard from "../components/Scoreboard/Scoreboard";

import ApiService from "../apiMockService";

const api = new ApiService();

function mapStateToProps(state: any)
{
    return {
        scoreboard: state.scoreboard
    };
}

function mapDispatchToProps(dispatch: Function)
{
    return {
        fetchScoreboard: async () => {
            const scoreboard = await api.getScoreboard();
            dispatch(fetchScoreboard(scoreboard));
        }
    };
}

const ScoreboardContainer = connect<any, any>(mapStateToProps, mapDispatchToProps)(Scoreboard);

export default ScoreboardContainer;
