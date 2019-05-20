import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as homeActions from "../actions/homeActions";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import History from "@material-ui/icons/History";
import Subscriptions from "@material-ui/icons/Subscriptions";
import PlaylistPlay from "@material-ui/icons/PlaylistPlay";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import TheatreTabContent from "components/CustomTabs/TheatreTabContent.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import homeStyle from "assets/jss/syncable-react/views/homeStyle.jsx";

class Home extends React.Component {
  componentDidMount() {
    this.props.theatreGenerate();
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Daily Visits</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase in today visits.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Theatre Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Yearly Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Connection Latency</h4>
                <p className={classes.cardCategory}>
                  Daily Latency Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 2 hours ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomTabs
              title=""
              headerColor="primary"
              tabs={[
                {
                  tabName: "Theatres",
                  tabIcon: Subscriptions,
                  tabContent: (
                    <TheatreTabContent
                      theatres={this.props.theatres}
                      newTheatreCode={this.props.newTheatreCode}
                      theatreGenerate={this.props.theatreGenerate}
                      theatreCreate={this.props.theatreCreate}
                      theatreDestory={this.props.theatreDestroy}
                      historyPush={this.props.historyPush}
                    />
                  )
                },
                {
                  tabName: "Playlists",
                  tabIcon: PlaylistPlay,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={website}
                    />
                  )
                },
                {
                  tabName: "Activity",
                  tabIcon: History,
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={server}
                    />
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return { ...state.home };
}

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators(homeActions, dispatch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(homeStyle)(Home));
