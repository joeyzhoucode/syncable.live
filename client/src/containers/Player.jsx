import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as playerActions from "../actions/playerActions";
import PropTypes from "prop-types";
import ReactPlayer from 'react-player';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import iconsStyle from "assets/jss/syncable-react/views/iconsStyle.jsx";

class Player extends React.Component {
  componentDidMount() {
    this.props.playerConnect(this.props.profile.id, this.props.path, this.props.playerUpdate);
    this.props.playerMount(this.player);
  }

  render() {
    const { classes } = this.props;
    return(
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Title</h4>
          <p className={classes.cardCategoryWhite}>Author</p>
        </CardHeader>
        <CardBody>
          <ReactPlayer
            url={this.props.player.videoId}
            width='100%'
            height='720px'
            volume={1}
            playing={this.props.player.videoState === "play"}
            controls={true}
            onPlay={() => { this.props.playerCommand({ videoState: "play", theatreCode: this.props.path }) }}
            onPause={() => { this.props.playerCommand({ videoState: "pause", theatreCode: this.props.path }) }}
            ref={(player) => { this.player = player } }
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
  return {
    path: state.router.location.pathname.substr(8),
    player: state.player,
    profile: state.profile,
  };
}

function mapDispatchToProps(dispatch) {
  return { ...bindActionCreators(playerActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(iconsStyle)(Player));
