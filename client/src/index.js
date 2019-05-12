import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Home from "./layouts/Home.jsx";

import "./assets/css/material-dashboard-react.css?v=0.1.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect from="/" to="/home/dashboard" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
