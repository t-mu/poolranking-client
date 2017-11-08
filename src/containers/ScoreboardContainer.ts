import { connect } from "react-redux";
import { fetchScoreboard } from "../actions/scoreboardActions";
import Scoreboard from "../components/Scoreboard/Scoreboard";

import ApiService from "../apiMockService";

const api = new ApiService();

function mapStateToProps(state: any)
{
    return {
        matches: state.matches,
        players: state.players,
        scoreboard: state.scoreboard
    };
}

function mapDispatchToProps(dispatch: Function)
{
    return {
        fetchScoreboard: () => {

                api.getScoreboard()
                    .then(response => {
                        dispatch(fetchScoreboard(response));
                    });

        }
    };
}

const ScoreboardContainer = connect<any, any>(mapStateToProps, mapDispatchToProps)(Scoreboard);

export default ScoreboardContainer;
