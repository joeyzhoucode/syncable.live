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
  getInternalPlayer() {
    if(this.player && this.player.getInternalPlayer()) {
      return this.player.getInternalPlayer();
    }
    return null;
  }

  getMediaSource() {
    if(this.player && this.player.player && this.player.player.player) {
      const source = this.player.player.player.constructor.name;
      return source;
    }
    return null;
  }

  getTitle() {
    if(this.getInternalPlayer()) {
      switch(this.getMediaSource()) {
        case "YouTube":
          return this.getInternalPlayer().getVideoData()["title"];
        default:
          return "Title";
      }
    }
    return "Title";
  }
  
  getAuthor() {
    if(this.getInternalPlayer()) {
      switch(this.getMediaSource()) {
        case "YouTube":
          return this.getInternalPlayer().getVideoData()["author"];
        default:
          return "Author";
      }
    }
    return "Author";
  }

  componentDidMount() {
    this.props.playerMount(1, this.props.playerUpdate, this.player);
  }
  render() {
    const { classes } = this.props;
    return(
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>{this.getTitle()}</h4>
          <p className={classes.cardCategoryWhite}>{this.getAuthor()}</p>
        </CardHeader>
        <CardBody>
          <ReactPlayer
            url={this.props.videoId}
            width='100%'
            height='720px'
            volume={1}
            playing={this.props.videoState === "play"}
            controls={true}
            onPlay={() => { this.props.playerCommand({ videoState: "play", videoSeek: this.player.getCurrentTime() }) }}
            onPause={() => { this.props.playerCommand({ videoState: "pause" }) }}
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
