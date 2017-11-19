import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const createHistory = require("history").createBrowserHistory;
const rdx = require("react-router-redux");
let { routerMiddleware } = rdx;

export const history: History = createHistory();
const routingMiddleware = routerMiddleware(history);
export const store = createStore(reducers, applyMiddleware(thunk, routingMiddleware));
