import { connect } from "react-redux";
import { fetchScoreboard } from "../actions/scoreboardActions";
import Scoreboard from "../components/Scoreboard/Scoreboard";
import { ScoreboardPlayer } from "../models/scoreboardPlayer";

import ApiService from "../apiMockService";

const api = new ApiService();

export interface StateProps
{
    scoreboard: ScoreboardPlayer[];
}

export interface DispatchProps
{
    fetchScoreboard: Function;
}

function mapStateToProps(state: any): StateProps
{
    return {
        scoreboard: state.scoreboard
    };
}

function mapDispatchToProps(dispatch: any): DispatchProps
{
    return {
        fetchScoreboard: async () =>
        {
            const scoreboard = await api.getScoreboard();
            dispatch(fetchScoreboard(scoreboard));
        }
    };
}

const ScoreboardContainer = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(Scoreboard);

export default ScoreboardContainer;
