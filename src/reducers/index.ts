import { combineReducers } from 'redux';
import playersReducer from "./playersReducer";
import matchesReducer from "./matchesReducer";

const rdx = require('react-router-redux');
let { routerReducer } = rdx;

const reducers = combineReducers({
    players: playersReducer,
    matches: matchesReducer,
    router: routerReducer
});

export default reducers;
