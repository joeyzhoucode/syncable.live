import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as playerActions from "../../actions/playerActions";
import PropTypes from "prop-types";
import ReactPlayer from 'react-player';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";

class Player extends React.Component {
  componentDidMount() {
    this.props.playerMount(1, this.props.playerUpdate, this.player);
  }
  render() {
    const { classes, ..._rest } = this.props;
    return(
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Material Design Icons</h4>
          <p className={classes.cardCategoryWhite}>
            Handcrafted by our friends from{" "}
            <a
              href="https://design.google.com/icons/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google
            </a>
          </p>
        </CardHeader>
        <CardBody>
          <ReactPlayer
            url={this.props.videoId}
            width='100%'
            height='720px'
            volume={1}
            playing={this.props.videoState === "play"}
            controls={true}
            onPlay={() => { this.props.playerCommand({ videoState: "play" }) }}
            onPause={() => { this.props.playerCommand({ videoState: "pause", videoSeek: this.player.getCurrentTime() }) }}
            ref={(player) => this.player = player}
          />
        </CardBody>
      </Card>
    )
  }
}

Player.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {...state.player};
}

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators(playerActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(iconsStyle)(Player));
