import { combineReducers } from "redux";
import playersReducer from "./playersReducer";
import matchesReducer from "./matchesReducer";
import scoreboardReducer from "./scoreboardReducer";

const rdx = require("react-router-redux");
let { routerReducer } = rdx;

const reducers = combineReducers({
    players: playersReducer,
    matches: matchesReducer,
    scoreboard: scoreboardReducer,
    router: routerReducer
});

export default reducers;
