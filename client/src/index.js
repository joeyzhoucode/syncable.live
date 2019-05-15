import React from "react";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import { createBrowserHistory } from "history";
import Root from "./components/Root.jsx";

import "./assets/css/material-dashboard-react.css?v=0.1.0";

const store = configureStore();
const hist = createBrowserHistory();

render(<Root store={store} history={hist} />, document.getElementById("root"));
