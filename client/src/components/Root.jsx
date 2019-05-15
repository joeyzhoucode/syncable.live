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
        <Redirect exact from="/" to="/home" />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root;