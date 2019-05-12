import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Home from "../layouts/Home.jsx";

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect from="/" to="/home/player" />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root;