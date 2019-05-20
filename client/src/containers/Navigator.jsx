/* eslint-disable */
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as homeActions from "../actions/homeActions";
import * as playerActions from "../actions/playerActions";
import * as profileActions from "../actions/profileActions";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Navbar from "components/Navbars/Navbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import routes from "routes.js";
import navigatorStyle from "assets/jss/syncable-react/layouts/navigatorStyle.jsx";

const switchRoutes = (
  <Switch>
    {routes.map((prop, key) => {
      return (
        <Route
          path={prop.path}
          component={prop.component}
          key={key}
        />
      );
    })}
  </Switch>
);

class Navigator extends React.Component {
  resizeFunction = () => {
    if (window.innerWidth >= 960) {
      this.props.homeActions.homeDrawerClose();
    }
  };
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
    window.addEventListener("resize", this.resizeFunction);
    this.props.profileActions.profileFetch();
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.props.home.mobileOpen) {
        this.props.homeActions.homeDrawerClose();
      }
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeFunction);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        {<Sidebar
          historyPush={this.props.homeActions.historyPush}
          logoText={this.props.profile.firstName}
          logo={this.props.profile.image}
          handleDrawerToggle={this.props.homeActions.homeDrawerToggle}
          handleSearch={this.props.playerActions.playerCommand}
          open={this.props.home.mobileOpen}
          color={this.props.home.color}
          {...rest}
        />}
        <div className={classes.mainPanel} ref="mainPanel">
          <Navbar
            historyPush={this.props.homeActions.historyPush}
            handleDrawerToggle={this.props.homeActions.homeDrawerToggle}
            handleSearch={this.props.playerActions.playerCommand}
            {...rest}
          />
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    home: state.home,
    profile: state.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
    playerActions: bindActionCreators(playerActions, dispatch),
    profileActions: bindActionCreators(profileActions, dispatch),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(navigatorStyle)(Navigator));
