// vendor imports
import * as React from "react";
import * as ReactDOM from "react-dom";
import "bulma/css/bulma.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

import { Provider } from "react-redux";
const rdx = require("react-router-redux");
let { ConnectedRouter } = rdx;

import { store, history } from "./store";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root") as HTMLElement);
registerServiceWorker();
