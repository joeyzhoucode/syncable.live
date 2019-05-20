import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import VideoLabel from "@material-ui/icons/VideoLabel";
import Home from "@material-ui/icons/Home";
import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/syncable-react/components/headerLinksStyle.jsx";

function HeaderLinks({...props}) {
  const { classes } = props;
  const customInputId = "videoId";
  return (
    <div>
      <div className={classes.searchWrapper}>
        <CustomInput
          formControlProps={{
            className: classes.margin + " " + classes.search
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search"
            }
          }}
          id={customInputId}
        />
        <Button 
          onClick={() => {
            const videoId = document.getElementById(customInputId).value;
            props.handleSearch({ videoId: videoId, videoState: "play" });
          }}
          color="white"
          aria-label="edit"
          justIcon
          round
        >
          <Search />
        </Button>
      </div>
      <Button
        color={"transparent"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Home"
        className={classes.buttonLink}
        onClick={() => { props.historyPush('/home')}}
      >
        <Home className={classes.icons} />
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}>Home</p>
        </Hidden>
      </Button>
      <Button
        color={"transparent"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Player"
        className={classes.buttonLink}
        onClick={() => { props.historyPush('/player')}}
      >
        <VideoLabel className={classes.icons} />
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}>Player</p>
        </Hidden>
      </Button>
      <Button
        color={"transparent"}
        justIcon={window.innerWidth > 959}
        simple={!(window.innerWidth > 959)}
        aria-label="Person"
        className={classes.buttonLink}
        onClick={() => { props.historyPush('/profile')}}
      >
        <Person className={classes.icons} />
        <Hidden mdUp implementation="css">
          <p className={classes.linkText}>Profile</p>
        </Hidden>
      </Button>
    </div>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
